import type { App } from 'vue'
import TooltipDirective from './tooltip'

export default {
    install(app: App): void {
        // Register all directives
        app.use(TooltipDirective);

        // Add more directives here as needed
    }
};
