# Tailwind CSS 4 Implementation

This document explains how Tailwind CSS 4 is implemented in the Trimble Modus Vue project, with a focus on typography.

## Key Principles

1. **No Configuration File**
   - Tailwind 4 doesn't require a tailwind.config.js file
   - All customizations are done directly in CSS

2. **CSS Variable Approach**
   - Design tokens are defined as CSS variables with the `--tm-` prefix
   - Tailwind variables are mapped from these tokens

3. **Theming with @theme**
   - Light/dark mode is implemented using the @theme directive
   - Color scheme is set using the color-scheme property

## Typography Implementation

We've mapped the Trimble Modus typography system to Tailwind CSS variables:

### Font Families
```css
/* Trimble Modus design token */
--tm-font-sans: 'Open Sans', ui-sans-serif, system-ui, sans-serif;

/* Tailwind mappings */
--font-sans: var(--tm-font-sans);                  /* Open Sans font stack */
--font-display: var(--tm-font-sans);               /* Display font */
--font-body: var(--tm-font-sans);                  /* Body font */
```

### Font Weights
```css
/* Trimble Modus design tokens */
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
/* Trimble Modus design tokens */
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

We implement line heights in three ways:

1. **Standard Line Height Scale**
```css
--leading-none: 1;                /* line-height: 1 */
--leading-tight: 1.25;           /* line-height: 1.25 */
--leading-snug: 1.375;           /* line-height: 1.375 */
--leading-normal: 1.5;           /* line-height: 1.5 */
--leading-relaxed: 1.625;        /* line-height: 1.625 */
--leading-loose: 2;              /* line-height: 2 */
```

2. **Size-Specific Line Heights**
```css
--leading-2xs: var(--tm-text-2xs--line-height);     /* 15px/10px - Mini */
--leading-xs: var(--tm-text-xs--line-height);       /* 18px/12px - Small Body */
--leading-base: var(--tm-text-base--line-height);   /* 21px/14px - Body */
--leading-lg: var(--tm-text-lg--line-height);       /* 24px/16px - H4 */
--leading-xl: var(--tm-text-xl--line-height);       /* 27px/18px - H3 */
--leading-2xl: var(--tm-text-2xl--line-height);     /* 30px/20px - H2 */
--leading-3xl: var(--tm-text-3xl--line-height);     /* 36px/24px - H1 */
--leading-4xl: var(--tm-text-4xl--line-height);     /* 54px/40px - Display 2 */
--leading-5xl: var(--tm-text-5xl--line-height);     /* 108px/72px - Display 1 */
```

3. **Combined Text Size and Line Height Variables**
```css
--text-2xs--line-height: var(--tm-text-2xs--line-height);  /* Combined variable */
--text-xs--line-height: var(--tm-text-xs--line-height);    /* Combined variable */
--text-base--line-height: var(--tm-text-base--line-height);  /* Combined variable */
--text-lg--line-height: var(--tm-text-lg--line-height);    /* Combined variable */
--text-xl--line-height: var(--tm-text-xl--line-height);    /* Combined variable */
--text-2xl--line-height: var(--tm-text-2xl--line-height);  /* Combined variable */
--text-3xl--line-height: var(--tm-text-3xl--line-height);  /* Combined variable */
--text-4xl--line-height: var(--tm-text-4xl--line-height);  /* Combined variable */
--text-5xl--line-height: var(--tm-text-5xl--line-height);  /* Combined variable */
```

## Text Utilities

The following text-related utilities are implemented:

### Text Colors
```css
--text-primary: var(--tm-color-text);          /* Primary text color */
--text-secondary: var(--tm-color-text-secondary);      /* Secondary text color */
--text-disabled: var(--tm-color-text-disabled);        /* Disabled text color */
--text-body: var(--tm-color-text);            /* Body text color */
--text-heading: var(--tm-color-text);         /* Heading text color */
--text-link: var(--tm-color-primary);                 /* Link text color */
--text-link-hover: var(--tm-color-primary-dark);      /* Link hover color */
--text-success: var(--tm-color-success);              /* Success text color */
--text-danger: var(--tm-color-danger);                /* Error/danger text color */
--text-warning: var(--tm-color-warning);              /* Warning text color */
--text-info: var(--tm-color-info);                    /* Info text color */
```

### Text Decoration, Transform, Alignment, and Overflow
```css
/* Text Decoration */
--text-decoration-underline: underline;
--text-decoration-line-through: line-through;
--text-decoration-no-underline: none;

/* Text Transform */
--text-transform-normal: none;
--text-transform-uppercase: uppercase;
--text-transform-lowercase: lowercase;
--text-transform-capitalize: capitalize;

/* Text Alignment */
--text-align-left: left;
--text-align-center: center;
--text-align-right: right;
--text-align-justify: justify;

/* Text Overflow */
--text-overflow-ellipsis: ellipsis;
--text-overflow-clip: clip;
--text-wrap-normal: normal;
--text-wrap-nowrap: nowrap;
--text-wrap-break: break-word;
```

## Color Implementation

Colors are mapped from Trimble Modus design tokens to Tailwind CSS variables:

```css
--color-primary: var(--tm-color-primary);         /* Primary color mapping */
--color-success: var(--tm-color-success);         /* Success state color */
--color-danger: var(--tm-color-danger);           /* Danger state color */
```

## Dark Mode Support

Dark mode overrides are provided in the dark theme:

```css
@theme dark {
  --color-primary: var(--tm-color-primary);       /* Primary color for dark mode */
  --color-surface: var(--tm-color-surface);       /* Surface color for dark mode */
  --text-primary: var(--tm-color-text);   /* Primary text color for dark mode */
}
```

## Usage in Components

In your components, you can use these variables in two ways:

1. Via Tailwind utility classes:
```html
<div class="text-base leading-base text-primary">
  Text styled with Tailwind classes
</div>
```

2. Via CSS custom properties in component styles:
```html
<style>
.custom-text {
  font-size: var(--text-base);
  line-height: var(--text-base--line-height);
  color: var(--text-primary);
}
</style>
```
