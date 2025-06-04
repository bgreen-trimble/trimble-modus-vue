import type { App } from 'vue'
import TooltipDirective from './tooltip'

// Import the CSS
import './tooltip/tooltip.css'

export default {
    install(app: App): void {
        // Register all directives
        app.use(TooltipDirective);

        // Add more directives here as needed
    }
};
