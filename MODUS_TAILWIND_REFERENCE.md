# Trimble Modus Design System & Tailwind 4 References

This document serves as a persistent reference for the Trimble Modus design system implementation with Tailwind CSS 4.

## Design System Implementation

### Key Principles

1. **No Configuration Files**
   - Tailwind 4 implementation uses no tailwind.config.js or tailwind.config.ts files
   - All customizations are applied directly in CSS using the @theme directive

2. **Variable Structure**
   - Trimble Modus design tokens use `--tm-` prefix (e.g., `--tm-color-primary`)
   - Tailwind variables map to Trimble tokens without prefix (e.g., `--color-primary`)

3. **Theming Approach**
   - Light/dark mode implemented via @theme directive
   - :root variables used for shared properties

## Typography System

### Font Families
```css
/* Trimble Modus tokens */
--tm-font-sans: 'Open Sans', ui-sans-serif, system-ui, sans-serif;

/* Tailwind mappings */
--font-sans: var(--tm-font-sans);
--font-display: var(--tm-font-sans);
--font-body: var(--tm-font-sans);
```

### Font Weights
```css
/* Trimble Modus tokens */
--tm-font-weight-normal: 400;
--tm-font-weight-semibold: 600;
--tm-font-weight-bold: 700;

/* Tailwind mappings */
--font-weight-thin: var(--tm-font-weight-normal);      /* 400 */
--font-weight-normal: var(--tm-font-weight-normal);    /* 400 */
--font-weight-medium: var(--tm-font-weight-semibold);  /* 600 */
--font-weight-semibold: var(--tm-font-weight-semibold);/* 600 */
--font-weight-bold: var(--tm-font-weight-bold);        /* 700 */
```

### Font Sizes
```css
/* Trimble Modus tokens */
--tm-text-base: 0.875rem;              /* 14px - Body */
--tm-text-xs: 0.75rem;                 /* 12px - Small Body */
--tm-text-2xs: 0.625rem;               /* 10px - Mini */
--tm-text-lg: 1rem;                    /* 16px - Heading 4 */
--tm-text-xl: 1.125rem;                /* 18px - Heading 3 */
--tm-text-2xl: 1.25rem;                /* 20px - Heading 2 */
--tm-text-3xl: 1.5rem;                 /* 24px - Heading 1 */
--tm-text-4xl: 2.5rem;                 /* 40px - Display 2 */
--tm-text-5xl: 4.5rem;                 /* 72px - Display 1 */

/* Tailwind mappings */
--text-base: var(--tm-text-base);            /* 14px - Body */
--text-xs: var(--tm-text-xs);                /* 12px - Small Body */
--text-2xs: var(--tm-text-2xs);              /* 10px - Mini */
--text-lg: var(--tm-text-lg);                /* 16px - H4 */
--text-xl: var(--tm-text-xl);                /* 18px - H3 */
--text-2xl: var(--tm-text-2xl);              /* 20px - H2 */
--text-3xl: var(--tm-text-3xl);              /* 24px - H1 */
--text-4xl: var(--tm-text-4xl);              /* 40px - Display 2 */
--text-5xl: var(--tm-text-5xl);              /* 72px - Display 1 */
```

### Line Heights
```css
/* Generic line heights */
--leading-none: 1;                /* line-height: 1 */
--leading-tight: 1.25;           /* line-height: 1.25 */
--leading-snug: 1.375;           /* line-height: 1.375 */
--leading-normal: 1.5;           /* line-height: 1.5 */
--leading-relaxed: 1.625;        /* line-height: 1.625 */
--leading-loose: 2;              /* line-height: 2 */

/* Text-specific line heights */
--leading-2xs: var(--tm-text-2xs--line-height);     /* 15px/10px - Mini */
--leading-xs: var(--tm-text-xs--line-height);       /* 18px/12px - Small Body */
--leading-base: var(--tm-text-base--line-height);   /* 21px/14px - Body */
--leading-lg: var(--tm-text-lg--line-height);       /* 24px/16px - H4 */
--leading-xl: var(--tm-text-xl--line-height);       /* 27px/18px - H3 */
--leading-2xl: var(--tm-text-2xl--line-height);     /* 30px/20px - H2 */
--leading-3xl: var(--tm-text-3xl--line-height);     /* 36px/24px - H1 */
--leading-4xl: var(--tm-text-4xl--line-height);     /* 54px/40px - Display 2 */
--leading-5xl: var(--tm-text-5xl--line-height);     /* 108px/72px - Display 1 */

/* Combined variables */
--text-2xs--line-height: var(--tm-text-2xs--line-height);  /* Combined variable */
--text-xs--line-height: var(--tm-text-xs--line-height);    /* Combined variable */
--text-base--line-height: var(--tm-text-base--line-height);  /* Combined variable */
--text-lg--line-height: var(--tm-text-lg--line-height);    /* Combined variable */
--text-xl--line-height: var(--tm-text-xl--line-height);    /* Combined variable */
--text-2xl--line-height: var(--tm-text-2xl--line-height);  /* Combined variable */
```

## Interactive States

### Button States
```css
/* Light Mode Button States */
/* Primary (Blue) */
.btn-primary {
  background: var(--tm-color-blue);
}
.btn-primary:hover {
  background: var(--tm-color-blue-hover);     /* Blue Light */
}
.btn-primary:active {
  background: var(--tm-color-blue-active);    /* Blue Dark */
}

/* Dark Mode Button States */
.dark .btn-primary {
  background: var(--tm-color-blue-dark);
}
.dark .btn-primary:hover {
  background: var(--tm-color-blue-dark-hover);/* Base Blue */
}
.dark .btn-primary:active {
  background: var(--tm-color-blue-dark-active);/* Blue Light */
}
```

### Button Variants
- **Filled Buttons**: Use solid background colors
- **Outlined Buttons**: Use transparent background with colored borders
- **Text Buttons**: Use transparent background with colored text

### Opacity Values
For interactive states:
- Hover backgrounds (outlined/text): 15% opacity
- Active backgrounds (outlined/text): 20% opacity
- Focus rings: 30% opacity
--text-3xl--line-height: var(--tm-text-3xl--line-height);  /* Combined variable */
--text-4xl--line-height: var(--tm-text-4xl--line-height);  /* Combined variable */
--text-5xl--line-height: var(--tm-text-5xl--line-height);  /* Combined variable */
```

## Color System

### Primary Colors
```css
--tm-color-primary: #0063a3;           /* Trimble Blue (Light) / Highlight Blue (Dark) */
--tm-color-primary-dark: #004f83;      /* Trimble Blue Dark (Light) / Blue Light (Dark) */
--tm-color-primary-light: #217cbb;     /* Blue Light (Light) / Blue Pale (Dark) */
--tm-color-primary-pale: #dcedf9;      /* Blue Pale */

/* Mapped to Tailwind */
--color-primary: var(--tm-color-primary);
--color-primary-dark: var(--tm-color-primary-dark);
--color-primary-light: var(--tm-color-primary-light);
--color-primary-pale: var(--tm-color-primary-pale);
```

### Semantic Colors
```css
--tm-color-success: #006638;           /* Success */
--tm-color-warning: #e49325;           /* Warning */
--tm-color-danger: #da212c;            /* Danger/Error */
--tm-color-info: #019aeb;              /* Information */

/* Mapped to Tailwind */
--color-success: var(--tm-color-success);
--color-warning: var(--tm-color-warning);
--color-danger: var(--tm-color-danger);
--color-info: var(--tm-color-info);
```

### Text Colors
```css
--tm-color-text-primary: #252a2e;      /* Primary Text (Light) / #f1f1f6 (Dark) */
--tm-color-text-secondary: #6a6e79;    /* Secondary Text (Light) / #b7b9c3 (Dark) */
--tm-color-text-disabled: #a3a6b1;     /* Disabled Text (Light) / #7d808d (Dark) */

/* Mapped to Tailwind */
--text-primary: var(--tm-color-text-primary);
--text-secondary: var(--tm-color-text-secondary);
--text-disabled: var(--tm-color-text-disabled);
```

## Usage Guidelines

### Component Styling

1. **Always use mapped variables**, not direct Trimble Modus variables:

```css
/* Correct */
.element {
  color: var(--color-primary);
  font-size: var(--text-base);
}

/* Incorrect */
.element {
  color: var(--tm-color-primary);
  font-size: var(--tm-text-base);
}
```

2. **Prefer Tailwind utility classes** for consistent styling:

```html
<!-- Preferred -->
<div class="text-base leading-base text-primary">Content</div>

<!-- Alternative when needed -->
<div style="font-size: var(--text-base); line-height: var(--text-base--line-height); color: var(--text-primary);">Content</div>
```

### Dark Mode Implementation

1. **Use the @theme directive** for dark mode styles:

```css
@theme {
  /* Light mode variables */
  --tm-color-primary: #0063a3;
  --color-primary: var(--tm-color-primary);
}

@theme dark {
  /* Dark mode variables */
  --tm-color-primary: #019aeb;
  --color-primary: var(--tm-color-primary);
}
```

2. **Toggle dark mode** by adding/removing the 'dark' class on :root

## Best Practices

1. CSS comments should be placed after variables, not before
2. Maintain alignment in comments for readability when appropriate
3. Group variables logically by type and function
4. Use proper naming conventions consistently throughout the codebase
5. Document all variable changes in VARIABLES.md
6. Prefer using combined text/line-height variables for precise typography
7. In Vue files, use <script setup> first, then <template>, and finally <style>

## Reference Files

For full documentation, consult these files:
- TAILWIND.md - Detailed Tailwind 4 implementation notes
- VARIABLES.md - Complete variable documentation
- .preferences - Project preferences and coding standards

## Learning Resources

### Trimble Modus
- Design System: https://modus.trimble.com/
- Web Components: https://modus.trimble.com/components/web/
- Design Tokens: https://modus.trimble.com/foundations/design-tokens/
- Typography: https://modus.trimble.com/foundations/typography/
- Colors: https://modus.trimble.com/foundations/color-palette/
- Layout & Spacing: https://modus.trimble.com/foundations/spacing/
- Icons: https://modus.trimble.com/foundations/iconography/

### Tailwind CSS
- Core Concepts: https://tailwindcss.com/docs/utility-first
- CSS Variables: https://tailwindcss.com/docs/customizing-colors#using-css-variables
- Dark Mode: https://tailwindcss.com/docs/dark-mode
- Configuration: https://tailwindcss.com/docs/configuration
- Typography: https://tailwindcss.com/docs/font-family
- Spacing: https://tailwindcss.com/docs/padding
- Colors: https://tailwindcss.com/docs/customizing-colors
- Theme: https://tailwindcss.com/docs/theme
