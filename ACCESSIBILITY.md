# Accessibility Guidelines for Trimble Modus Vue

This document outlines the accessibility features and best practices implemented in the Trimble Modus Vue component library to ensure WCAG 2.1 AA compliance.

## General Principles

1. **Keyboard Navigation**: All interactive elements are accessible via keyboard
2. **Screen Reader Support**: Proper ARIA attributes and semantic HTML
3. **Color Contrast**: All text and UI elements meet WCAG 2.1 AA contrast requirements
4. **Focus Indicators**: Visible focus states for all interactive elements
5. **Text Alternatives**: Alternative text for non-text content

## Component-Specific Guidelines

### Buttons

- Include `aria-label` for icon-only buttons
- Use `aria-expanded` for buttons that control collapsible content
- Mark decorative icons with `aria-hidden="true"`
- Ensure proper focus states with `focus:ring-2` utility

### Menu

- Apply `role="menu"` to the menu container
- Use `role="menuitem"` for menu items
- Include `aria-haspopup="true"` for dropdown triggers
- Set `aria-expanded` to reflect open/closed state

### Forms and Input Controls

- Associate labels with form controls using `for` and `id` attributes
- Provide error messages with `aria-describedby`
- Use `aria-invalid` for invalid form fields
- Implement `aria-required` for required fields

### Slider

- Utilize native `input[type="range"]` for built-in accessibility features
- Include proper ARIA attributes:
  - `role="slider"` (native to range input)
  - `aria-valuemin` and `aria-valuemax` for range boundaries
  - `aria-valuenow` for current value
  - `aria-valuetext` for descriptive value announcements
- Support full keyboard navigation:
  - Arrow keys for incremental changes
  - Home/End for min/max values
  - Page Up/Down for larger steps
- Ensure high contrast between:
  - Track and background
  - Fill and track
  - Thumb and track
  - Active/focus states and default states
- Provide visible focus indicators
- Support labels via both `label` element and `aria-label`
- Consider mobile and touch interfaces with appropriate hit areas

### Cards

- Use semantic headings (`h2`, `h3`) for card titles
- Add `aria-labelledby` to link cards to their headings
- Use `role="region"` for content sections when appropriate

### Navbar

- Include `role="navigation"` with descriptive `aria-label`
- Use `aria-expanded` and `aria-controls` for mobile menu toggles
- Ensure sufficient contrast between navbar and background

## Testing Recommendations

1. **Keyboard Testing**: Verify all functionality works with keyboard-only navigation
2. **Screen Reader Testing**: Test with popular screen readers (NVDA, JAWS, VoiceOver)
3. **Color Contrast**: Use tools like axe DevTools to verify contrast ratios
4. **Zoom Testing**: Ensure content is readable at 200% zoom
5. **Automated Testing**: Incorporate axe-core in your testing workflow

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/TR/WCAG21/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Trimble Accessibility Guidelines](https://modus.trimble.com/foundations/accessibility/)
- [Vue.js Accessibility Guide](https://v3.vuejs.org/guide/accessibility.html)
