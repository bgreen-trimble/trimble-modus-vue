# Dark Mode Support in Trimble Modus Vue

This document details the dark mode implementation in the Trimble Modus Vue design system.

## Dark Mode Implementation

### System Detection

The design system automatically detects the user's system preference for dark mode using the `prefers-color-scheme` media query:

```css
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
  }
}
```

### Theme Directive Usage

Dark mode styles are implemented using the Tailwind @theme directive:

```css
@theme dark {
  :root {
    /* Color variables */
    --color-primary: var(--tm-color-primary-dark);
    --color-background: var(--tm-color-gray-9);
    --color-text: var(--tm-color-gray-1);
    /* ... other dark mode variables ... */
  }
}
```

### Typography in Dark Mode

Typography variables maintain consistent sizing but may adjust color and contrast:

- Text colors automatically adapt for optimal contrast
- Font weights may be adjusted for better legibility
- Line heights remain consistent between modes

### Interactive States

Dark mode includes specific hover and active states:

```css
/* Dark mode interactive states */
--color-primary-hover: var(--tm-color-blue-dark-hover);
--color-primary-active: var(--tm-color-blue-dark-active);
--color-gray-hover: var(--tm-color-trimble-gray-hover);
--color-gray-active: var(--tm-color-trimble-gray-active);
```

## Usage in Components

### Dark Mode Classes

Components should use the mapped variables, not the `--tm-` prefixed ones:

```css
.my-component {
  /* Correct */
  background: var(--color-background);
  color: var(--color-text);

  /* Incorrect */
  background: var(--tm-color-gray-9);
  color: var(--tm-color-gray-1);
}
```

### Testing Dark Mode

To test dark mode:
1. Use system preferences to toggle dark mode
2. Use the DarkModeToggle component
3. Manually toggle using the color-scheme CSS property

### Best Practices

1. Always test components in both light and dark modes
2. Ensure sufficient contrast ratios in both modes
3. Use semantic color variables instead of literal colors
4. Maintain consistent spacing and layout between modes
5. Test interactive states in both modes
