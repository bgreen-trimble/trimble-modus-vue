import type { App, DirectiveBinding } from 'vue'

// Extend HTMLElement to include custom properties used by the tooltip directive
declare global {
    interface HTMLElement {
        _tooltip?: HTMLElement;
        _tooltipOptions?: TooltipOptions;
        _tooltipHandlers?: {
            showTooltip: () => void;
            hideTooltip: () => void;
        };
        _tooltipTimeout?: number; // Added to track tooltip delay timeouts
    }
}

interface TooltipOptions {
    content: string;
    position?: 'top' | 'right' | 'bottom' | 'left';
    theme?: 'light' | 'dark';
    delay?: number;
}

// CSS class names
const CLASS_NAMES = {
    TOOLTIP: 'tm-tooltip',
    ARROW: 'tm-tooltip-arrow',
    VISIBLE: 'tm-tooltip-visible',
    TOP: 'tm-tooltip-top',
    RIGHT: 'tm-tooltip-right',
    BOTTOM: 'tm-tooltip-bottom',
    LEFT: 'tm-tooltip-left',
    DARK: 'tm-tooltip-dark',
    LIGHT: 'tm-tooltip-light'
}

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
        delay: binding.value?.delay || 0
    };
}

// Create tooltip element
const createTooltip = (options: TooltipOptions): HTMLElement => {
    const tooltip = document.createElement('div');
    const arrow = document.createElement('div');

    // Add classes
    tooltip.className = CLASS_NAMES.TOOLTIP;
    arrow.className = CLASS_NAMES.ARROW;
    tooltip.classList.add(CLASS_NAMES[options.position?.toUpperCase() as keyof typeof CLASS_NAMES] || CLASS_NAMES.TOP);
    tooltip.classList.add(CLASS_NAMES[options.theme?.toUpperCase() as keyof typeof CLASS_NAMES] || CLASS_NAMES.LIGHT);

    // Set content
    tooltip.textContent = options.content;

    // Append arrow to tooltip
    tooltip.appendChild(arrow);

    return tooltip;
}

// Position tooltip relative to element
const positionTooltip = (el: HTMLElement, tooltip: HTMLElement, position: string = 'top'): void => {
    const elRect = el.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    let top = 0;
    let left = 0;

    switch (position) {
        case 'top':
            top = elRect.top - tooltipRect.height - 10;
            left = elRect.left + (elRect.width / 2) - (tooltipRect.width / 2);
            break;
        case 'right':
            top = elRect.top + (elRect.height / 2) - (tooltipRect.height / 2);
            left = elRect.right + 10;
            break;
        case 'bottom':
            top = elRect.bottom + 10;
            left = elRect.left + (elRect.width / 2) - (tooltipRect.width / 2);
            break;
        case 'left':
            top = elRect.top + (elRect.height / 2) - (tooltipRect.height / 2);
            left = elRect.left - tooltipRect.width - 10;
            break;
    }

    // Adjust for scroll position
    top += window.scrollY;
    left += window.scrollX;

    // Set position
    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
}

// Directive definition
const tooltip = {
    created(el: HTMLElement, binding: DirectiveBinding) {
        const options = getOptions(binding);

        // Create tooltip element but don't add to DOM yet
        const tooltipEl = createTooltip(options);

        // Store tooltip element reference on the element
        el._tooltip = tooltipEl;
        el._tooltipOptions = options;

        // Add event listeners
        const showTooltip = () => {
            // Add tooltip to document body
            document.body.appendChild(tooltipEl);

            // Position tooltip
            positionTooltip(el, tooltipEl, options.position);

            // Clear any existing timeout first
            if (el._tooltipTimeout) {
                clearTimeout(el._tooltipTimeout);
                el._tooltipTimeout = undefined;
            }

            // Show tooltip (with delay if specified)
            el._tooltipTimeout = window.setTimeout(() => {
                // Check if element and tooltip still exist
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
        // Update tooltip content/options if changed
        const options = getOptions(binding);
        const oldOptions = el._tooltipOptions || { position: 'top', theme: 'light' };

        // Clear any active timeout first
        if (el._tooltipTimeout) {
            clearTimeout(el._tooltipTimeout);
            el._tooltipTimeout = undefined;
        }

        // If tooltip exists, we need to recreate it with the new options
        if (el._tooltip) {
            // First, remove the old tooltip from DOM if it's currently shown
            if (el._tooltip.parentNode) {
                document.body.removeChild(el._tooltip);
            }

            // Create a new tooltip with updated options
            const newTooltip = createTooltip(options);

            // Replace the reference
            el._tooltip = newTooltip;
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

                    // Position tooltip
                    positionTooltip(el, newTooltip, options.position);

                    // Clear any existing timeout first
                    if (el._tooltipTimeout) {
                        clearTimeout(el._tooltipTimeout);
                        el._tooltipTimeout = undefined;
                    }

                    // Show tooltip (with delay if specified)
                    el._tooltipTimeout = window.setTimeout(() => {
                        // Check if element and tooltip still exist
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

        // Clean up event listeners and remove tooltip element
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

        // Clean up references
        delete el._tooltip;
        delete el._tooltipOptions;
        delete el._tooltipHandlers;
        delete el._tooltipTimeout;
    }
};

// Export directive
export default {
    install(app: App): void {
        app.directive('tooltip', tooltip);
    }
};
