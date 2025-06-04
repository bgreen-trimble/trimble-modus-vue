import type { App, DirectiveBinding } from 'vue';
import {
    computePosition,
    flip,
    shift,
    arrow,
    offset,
    autoUpdate,
    type Placement
} from '@floating-ui/dom';

// Extend HTMLElement to include custom properties used by the tooltip directive
declare global {
    interface HTMLElement {
        _tooltip?: HTMLElement;
        _tooltipArrow?: HTMLElement;
        _tooltipOptions?: TooltipOptions;
        _tooltipHandlers?: {
            showTooltip: () => void;
            hideTooltip: () => void;
        };
        _tooltipTimeout?: number;
        _tooltipCleanup?: () => void; // For auto-update cleanup
    }
}

interface TooltipOptions {
    content: string;
    position?: Placement;
    theme?: 'light' | 'dark';
    delay?: number;
    offset?: number;
}

// CSS class names
const CLASS_NAMES = {
    TOOLTIP: 'tm-tooltip',
    ARROW: 'tm-tooltip-arrow',
    VISIBLE: 'tm-tooltip-visible',
    DARK: 'tm-tooltip-dark',
    LIGHT: 'tm-tooltip-light'
};

// Get tooltip options from directive binding
const getOptions = (binding: DirectiveBinding): TooltipOptions => {
    // Handle both value as string and as object
    if (typeof binding.value === 'string') {
        return { content: binding.value };
    }

    return {
        content: binding.value?.content || '',
        position: binding.value?.position || 'top',
        theme: binding.value?.theme || 'light',
        delay: binding.value?.delay || 0,
        offset: binding.value?.offset || 10
    };
};

// Create tooltip element
const createTooltip = (options: TooltipOptions): { tooltip: HTMLElement, arrowEl: HTMLElement } => {
    const tooltip = document.createElement('div');
    const arrowEl = document.createElement('div');

    // Add ARIA attributes for accessibility
    tooltip.setAttribute('role', 'tooltip');
    tooltip.id = `tooltip-${Math.random().toString(36).substr(2, 9)}`;

    // Add classes
    tooltip.className = CLASS_NAMES.TOOLTIP;
    arrowEl.className = CLASS_NAMES.ARROW;

    // Add theme class
    tooltip.classList.add(CLASS_NAMES[options.theme?.toUpperCase() as keyof typeof CLASS_NAMES] || CLASS_NAMES.LIGHT);

    // Set content
    tooltip.textContent = options.content;

    // Append arrow to tooltip
    tooltip.appendChild(arrowEl);

    return { tooltip, arrowEl };
};

// Update tooltip position using floating-ui
const updatePosition = (el: HTMLElement, tooltip: HTMLElement, arrowEl: HTMLElement, options: TooltipOptions) => {
    if (!tooltip.isConnected) return; // Skip if tooltip is not in DOM

    const placement = options.position || 'top';
    const offsetDistance = options.offset || 10;

    computePosition(el, tooltip, {
        placement,
        middleware: [
            offset(offsetDistance),
            flip({
                fallbackPlacements: ['top', 'right', 'bottom', 'left'].filter(p => p !== placement),
            }),
            shift({ padding: 5 }), // Keep 5px from viewport edges
            arrow({ element: arrowEl })
        ],
    }).then(({ x, y, placement, middlewareData }) => {
        // Position the tooltip
        Object.assign(tooltip.style, {
            left: `${x}px`,
            top: `${y}px`
        });            // Position the arrow based on placement
        if (middlewareData.arrow) {
            const { x: arrowX, y: arrowY } = middlewareData.arrow;

            // Reset any previous transforms
            arrowEl.style.transform = '';

            const staticSide = {
                top: 'bottom',
                right: 'left',
                bottom: 'top',
                left: 'right',
            }[placement.split('-')[0]];

            if (staticSide) {
                // Set data attribute for the side (for CSS styling)
                arrowEl.setAttribute('data-side', placement.split('-')[0]);

                // Set data-side attribute for CSS to handle arrow styling
                arrowEl.setAttribute('data-side', placement.split('-')[0]);

                // Position the arrow
                Object.assign(arrowEl.style, {
                    left: arrowX != null ? `${arrowX}px` : '',
                    top: arrowY != null ? `${arrowY}px` : '',
                    right: '',
                    bottom: '',
                    [staticSide]: 'var(--tm-tooltip-arrow-offset)', // Use CSS variable for offset
                });
            }
        }
    });
};

// Directive definition
const tooltip = {
    created(el: HTMLElement, binding: DirectiveBinding) {
        const options = getOptions(binding);

        // Create tooltip element but don't add to DOM yet
        const { tooltip: tooltipEl, arrowEl } = createTooltip(options);

        // Store tooltip and arrow elements on the host element
        el._tooltip = tooltipEl;
        el._tooltipArrow = arrowEl;
        el._tooltipOptions = options;

        // Set aria-describedby for accessibility
        el.setAttribute('aria-describedby', tooltipEl.id);

        // Add event listeners
        const showTooltip = () => {
            // Add tooltip to document body
            document.body.appendChild(tooltipEl);

            // Clear any existing timeout and cleanup
            if (el._tooltipTimeout) {
                clearTimeout(el._tooltipTimeout);
                el._tooltipTimeout = undefined;
            }

            if (el._tooltipCleanup) {
                el._tooltipCleanup();
            }

            // Setup autoUpdate to keep tooltip positioned correctly
            el._tooltipCleanup = autoUpdate(
                el,
                tooltipEl,
                () => updatePosition(el, tooltipEl, arrowEl, options)
            );

            // Initial positioning
            updatePosition(el, tooltipEl, arrowEl, options);

            // Show tooltip (with delay if specified)
            el._tooltipTimeout = window.setTimeout(() => {
                if (tooltipEl.parentNode) {
                    tooltipEl.classList.add(CLASS_NAMES.VISIBLE);
                }
                el._tooltipTimeout = undefined;
            }, options.delay || 0);
        };

        const hideTooltip = () => {
            // Clear any pending show timeout
            if (el._tooltipTimeout) {
                clearTimeout(el._tooltipTimeout);
                el._tooltipTimeout = undefined;
            }

            // Stop auto-updating position
            if (el._tooltipCleanup) {
                el._tooltipCleanup();
                el._tooltipCleanup = undefined;
            }

            tooltipEl.classList.remove(CLASS_NAMES.VISIBLE);

            // Remove after transition ends
            const onTransitionEnd = () => {
                if (tooltipEl.parentNode) {
                    document.body.removeChild(tooltipEl);
                }
                tooltipEl.removeEventListener('transitionend', onTransitionEnd);
            };

            tooltipEl.addEventListener('transitionend', onTransitionEnd);
        };

        el.addEventListener('mouseenter', showTooltip);
        el.addEventListener('mouseleave', hideTooltip);
        el.addEventListener('focus', showTooltip);
        el.addEventListener('blur', hideTooltip);

        // Store handlers for cleanup
        el._tooltipHandlers = { showTooltip, hideTooltip };
    },

    updated(el: HTMLElement, binding: DirectiveBinding) {
        const options = getOptions(binding);

        // Clear any active timeout first
        if (el._tooltipTimeout) {
            clearTimeout(el._tooltipTimeout);
            el._tooltipTimeout = undefined;
        }

        // Stop auto-updating position
        if (el._tooltipCleanup) {
            el._tooltipCleanup();
            el._tooltipCleanup = undefined;
        }

        // If tooltip exists, we need to recreate it with the new options
        if (el._tooltip) {
            // First, remove the old tooltip from DOM if it's currently shown
            if (el._tooltip.parentNode) {
                document.body.removeChild(el._tooltip);
            }

            // Create a new tooltip with updated options
            const { tooltip: newTooltip, arrowEl: newArrow } = createTooltip(options);

            // Update aria-describedby for accessibility
            el.setAttribute('aria-describedby', newTooltip.id);

            // Replace the references
            el._tooltip = newTooltip;
            el._tooltipArrow = newArrow;
            el._tooltipOptions = options;

            // Update the event handlers to use the new tooltip
            if (el._tooltipHandlers) {
                // Remove old event listeners
                el.removeEventListener('mouseenter', el._tooltipHandlers.showTooltip);
                el.removeEventListener('mouseleave', el._tooltipHandlers.hideTooltip);
                el.removeEventListener('focus', el._tooltipHandlers.showTooltip);
                el.removeEventListener('blur', el._tooltipHandlers.hideTooltip);

                // Create new event handlers with the updated tooltip
                const showTooltip = () => {
                    // Add tooltip to document body
                    document.body.appendChild(newTooltip);

                    // Clear any existing timeout and cleanup
                    if (el._tooltipTimeout) {
                        clearTimeout(el._tooltipTimeout);
                        el._tooltipTimeout = undefined;
                    }

                    if (el._tooltipCleanup) {
                        el._tooltipCleanup();
                    }

                    // Setup autoUpdate to keep tooltip positioned correctly
                    el._tooltipCleanup = autoUpdate(
                        el,
                        newTooltip,
                        () => updatePosition(el, newTooltip, newArrow, options)
                    );

                    // Initial positioning
                    updatePosition(el, newTooltip, newArrow, options);

                    // Show tooltip (with delay if specified)
                    el._tooltipTimeout = window.setTimeout(() => {
                        if (newTooltip.parentNode) {
                            newTooltip.classList.add(CLASS_NAMES.VISIBLE);
                        }
                        el._tooltipTimeout = undefined;
                    }, options.delay || 0);
                };

                const hideTooltip = () => {
                    // Clear any pending show timeout
                    if (el._tooltipTimeout) {
                        clearTimeout(el._tooltipTimeout);
                        el._tooltipTimeout = undefined;
                    }

                    // Stop auto-updating position
                    if (el._tooltipCleanup) {
                        el._tooltipCleanup();
                        el._tooltipCleanup = undefined;
                    }

                    newTooltip.classList.remove(CLASS_NAMES.VISIBLE);

                    // Remove after transition ends
                    const onTransitionEnd = () => {
                        if (newTooltip.parentNode) {
                            document.body.removeChild(newTooltip);
                        }
                        newTooltip.removeEventListener('transitionend', onTransitionEnd);
                    };

                    newTooltip.addEventListener('transitionend', onTransitionEnd);
                };

                // Add the new event listeners
                el.addEventListener('mouseenter', showTooltip);
                el.addEventListener('mouseleave', hideTooltip);
                el.addEventListener('focus', showTooltip);
                el.addEventListener('blur', hideTooltip);

                // Update the handlers reference
                el._tooltipHandlers = { showTooltip, hideTooltip };
            }
        }
    },

    beforeUnmount(el: HTMLElement) {
        // Clean up any active timeout
        if (el._tooltipTimeout) {
            clearTimeout(el._tooltipTimeout);
            el._tooltipTimeout = undefined;
        }

        // Stop auto-updating position
        if (el._tooltipCleanup) {
            el._tooltipCleanup();
            el._tooltipCleanup = undefined;
        }

        // Clean up event listeners
        if (el._tooltipHandlers) {
            el.removeEventListener('mouseenter', el._tooltipHandlers.showTooltip);
            el.removeEventListener('mouseleave', el._tooltipHandlers.hideTooltip);
            el.removeEventListener('focus', el._tooltipHandlers.showTooltip);
            el.removeEventListener('blur', el._tooltipHandlers.hideTooltip);
        }

        // Remove tooltip from DOM if it exists
        if (el._tooltip && el._tooltip.parentNode) {
            document.body.removeChild(el._tooltip);
        }

        // Remove ARIA attributes
        el.removeAttribute('aria-describedby');

        // Clean up references
        delete el._tooltip;
        delete el._tooltipArrow;
        delete el._tooltipOptions;
        delete el._tooltipHandlers;
        delete el._tooltipTimeout;
        delete el._tooltipCleanup;
    }
};

// Export directive
export default {
    install(app: App): void {
        app.directive('tooltip', tooltip);
    }
};
