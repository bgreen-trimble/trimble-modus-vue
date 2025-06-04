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

            // Show tooltip (with delay if specified)
            setTimeout(() => {
                tooltipEl.classList.add(CLASS_NAMES.VISIBLE);
            }, options.delay || 0);
        };

        const hideTooltip = () => {
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

        if (el._tooltip) {
            // Update content
            el._tooltip.textContent = options.content;

            // Update position class
            el._tooltip.classList.remove(CLASS_NAMES.TOP, CLASS_NAMES.RIGHT, CLASS_NAMES.BOTTOM, CLASS_NAMES.LEFT);
            el._tooltip.classList.add(CLASS_NAMES[options.position?.toUpperCase() as keyof typeof CLASS_NAMES] || CLASS_NAMES.TOP);

            // Update theme class
            el._tooltip.classList.remove(CLASS_NAMES.DARK, CLASS_NAMES.LIGHT);
            el._tooltip.classList.add(CLASS_NAMES[options.theme?.toUpperCase() as keyof typeof CLASS_NAMES] || CLASS_NAMES.LIGHT);

            // Update stored options
            el._tooltipOptions = options;
        }
    },

    beforeUnmount(el: HTMLElement) {
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
    }
};

// Export directive
export default {
    install(app: App): void {
        app.directive('tooltip', tooltip);
    }
};
