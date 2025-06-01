# Trimble Modus Design System - CSS Variables Documentation

This document provides information about the CSS variables used in the Trimble Modus Vue implementation.

## Variable Naming Convention

The Trimble Modus design system uses two sets of variables:

1. **Design System Variables (`--tm-` prefix)**: These are the foundational variables that define the Trimble Modus design system. They contain the raw values for colors, typography, spacing, etc.

2. **Tailwind Variables (no prefix)**: These are mapped from the design system variables and are meant to be used directly in components and Tailwind utilities.

Example mapping:
```css
/* Design system variable */
--tm-color-primary: #0063a3; /* Trimble Blue */

/* Tailwind variable */
--color-primary: var(--tm-color-primary); /* Primary color mapping */
```

## Tailwind 4 Implementation

This project uses Tailwind CSS 4 with the following implementation details:

- **No configuration file**: Tailwind 4 doesn't require a tailwind.config.js file
- **Direct CSS customization**: All customizations are implemented in style.css
- **@theme directive**: Used for light/dark mode theming
- **CSS Variables**: Used to map Trimble Modus design tokens to Tailwind

## Utility Class Combinations

The Trimble Modus design system provides powerful utility classes that can be combined for various effects:

### Typography Combinations

1. **Display Text**
```html
<h1 class="font-tm-bold text-5xl leading-5xl text-primary">Display 1</h1>
<h2 class="font-tm-bold text-4xl leading-4xl text-primary-dark">Display 2</h2>
```

2. **Body Text Variations**
```html
<p class="text-base leading-normal font-tm-normal text-gray-8">Regular body text</p>
<p class="text-base leading-normal font-tm-semibold text-gray-9">Emphasized body text</p>
<p class="text-base leading-normal font-tm-bold text-primary">Bold body text</p>
```

3. **Small Text**
```html
<p class="text-xs leading-relaxed font-tm-normal text-gray-7">Small text with relaxed leading</p>
<p class="text-2xs leading-tight font-tm-normal text-gray-6">Mini text with tight leading</p>
```

### Interactive Text Combinations

1. **Link Text**
```html
<a class="text-primary hover:text-primary-hover active:text-primary-active">Link text</a>
```

2. **Button Text**
```html
<button class="text-base leading-normal font-tm-semibold text-white bg-primary hover:bg-primary-hover">
  Button text
</button>
```

3. **Form Label Text**
```html
<label class="text-sm leading-snug font-tm-medium text-gray-8">Form label</label>
```

### Menu Component Variables

The menu component uses the following CSS variables:

```css
@theme {
  /* Menu Colors - Light Mode */
  --color-tm-menu-text: var(--color-tm-trimble-gray);        /* Trimble Gray */
  --color-tm-menu-icon: var(--color-tm-gray-6);             /* Gray 6 - Secondary Text & Icons */
  --color-tm-menu-hover-bg: var(--color-tm-gray-0);         /* Gray 0 */
  --color-tm-menu-hover-text: var(--color-tm-primary);       /* Trimble Blue */
  --color-tm-menu-disabled-opacity: 0.6;
  --color-tm-menu-separator-border: var(--color-tm-gray-1);  /* Gray 1 */

  /* Menu Transitions */
  --tm-menu-transition-duration: var(--tm-transition-normal);
  --tm-menu-transition-timing: var(--tm-transition-timing-default);
}

.dark {
  /* Menu Colors - Dark Mode */
  --color-tm-menu-text: var(--color-tm-gray-light);         /* Gray Light */
  --color-tm-menu-icon: var(--color-tm-gray-4);            /* Gray 4 */
  --color-tm-menu-hover-bg: var(--color-tm-gray-7);        /* Gray 7 */
  --color-tm-menu-hover-text: var(--color-tm-blue-highlight); /* Highlight Blue */
  --color-tm-menu-disabled-text: var(--color-tm-gray-5);    /* Gray 5 */
  --color-tm-menu-separator-border: var(--color-tm-gray-7); /* Gray 7 */
}
```

### Menu Component Combinations

1. **Basic Menu**
```html
<Menu :model="[
  {
    label: 'Home',
    icon: 'home',
    command: () => console.log('Home clicked')
  },
  {
    label: 'Settings',
    icon: 'settings',
    url: '#settings'
  },
  { separator: true },
  {
    label: 'Sign Out',
    icon: 'sign_out',
    disabled: true
  }
]" />
```

2. **Popup Menu**
```html
<Menu ref="menuRef" :model="commandItems" popup />
<Button @click="menuRef.toggle($event)">
  <template #icon>
    <span class="modus-icons">more_vertical</span>
  </template>
  Show Menu
</Button>
```

## CSS Formatting Guidelines

When working with CSS variables in this project:

1. Always place comments after the variable declaration, not before
   ```css
   /* Correct */
   --tm-color-primary: #0063a3; /* Trimble Blue */

   /* Incorrect */
   /* Trimble Blue */
   --tm-color-primary: #0063a3;
   ```

2. Include descriptive comments with color names or pixel values
   ```css
   --tm-text-base: 0.875rem; /* 14px - Body */
   --tm-color-danger: #da212c; /* Red - Danger/Error */
   ```

3. Align comments when appropriate for better readability
   ```css
   --text-base: var(--tm-text-base);            /* 14px - Body */
   --text-xs: var(--tm-text-xs);                /* 12px - Small Body */
   --text-lg: var(--tm-text-lg);                /* 16px - H4 */
   ```

4. Use appropriate prefixes for different types of variables:
   - Trimble Modus design tokens: `--tm-*`
   - Font sizes: `--text-*`
   - Line heights: `--leading-*`
   - Combined text/line-height: `--text-*--line-height`
   - Font families: `--font-*`
   - Font weights: `--font-weight-*`
   - Colors: `--color-*`

5. Group variables by type (colors, typography, spacing, etc.)

6. When customizing Tailwind, avoid creating a tailwind.config.js file. Instead, use the @theme directive and CSS variables.

## Color Variables

### Primary Colors

| Trimble Modus Variable | Value (Light Mode) | Value (Dark Mode) | Description |
|------------------------|-------------------|-------------------|-------------|
| `--tm-color-primary` | #0063a3 | #019aeb | Trimble Blue (Light) / Highlight Blue (Dark) |
| `--tm-color-primary-dark` | #004f83 | #217cbb | Trimble Blue Dark (Light) / Blue Light (Dark) |
| `--tm-color-primary-light` | #217cbb | #dcedf9 | Blue Light (Light) / Blue Pale (Dark) |
| `--tm-color-primary-pale` | #dcedf9 | - | Blue Pale |

### Interactive State Variables

| Trimble Modus Variable | Value | Description |
|------------------------|-------|-------------|
| `--tm-color-blue-hover` | var(--tm-color-blue-light) | Blue hover state |
| `--tm-color-blue-active` | var(--tm-color-blue-dark) | Blue active state |
| `--tm-color-blue-dark-hover` | var(--tm-color-blue) | Dark mode blue hover |
| `--tm-color-blue-dark-active` | var(--tm-color-blue-light) | Dark mode blue active |
| `--tm-color-gray-hover` | var(--tm-color-gray-6) | Gray hover state |
| `--tm-color-gray-active` | var(--tm-color-gray-8) | Gray active state |
| `--tm-color-trimble-gray-hover` | var(--tm-color-gray-5) | Dark mode gray hover |
| `--tm-color-trimble-gray-active` | var(--tm-color-gray-3) | Dark mode gray active |
| `--tm-color-green-hover` | var(--tm-color-green-light) | Green hover state |
| `--tm-color-green-active` | var(--tm-color-green-dark) | Green active state |
| `--tm-color-green-dark-hover` | var(--tm-color-green) | Dark mode green hover |
| `--tm-color-green-dark-active` | var(--tm-color-green-light) | Dark mode green active |
| `--tm-color-yellow-hover` | var(--tm-color-yellow-light) | Yellow hover state |
| `--tm-color-yellow-active` | var(--tm-color-yellow-dark) | Yellow active state |
| `--tm-color-yellow-dark-hover` | var(--tm-color-yellow) | Dark mode yellow hover |
| `--tm-color-yellow-dark-active` | var(--tm-color-yellow-light) | Dark mode yellow active |
| `--tm-color-red-hover` | var(--tm-color-red-light) | Red hover state |
| `--tm-color-red-active` | var(--tm-color-red-dark) | Red active state |
| `--tm-color-red-dark-hover` | var(--tm-color-red) | Dark mode red hover |
| `--tm-color-red-dark-active` | var(--tm-color-red-light) | Dark mode red active |

### Additional Primary Colors

| Trimble Modus Variable | Value | Description |
|------------------------|-------|-------------|
| `--tm-color-yellow` | #fbad26 | Trimble Yellow |
| `--tm-color-yellow-dark` | #e49325 | Yellow Dark - Warning |
| `--tm-color-yellow-light` | #fec157 | Yellow Light |
| `--tm-color-yellow-pale` | #fff5e4 | Yellow Pale |

### Neutral Progression

| Trimble Modus Variable | Value | Description |
|------------------------|-------|-------------|
| `--tm-color-trimble-gray` | #252a2e | Trimble Gray |
| `--tm-color-gray-10` | #171c1e | Gray 10 |
| `--tm-color-gray-9` | #353a40 | Gray 9 |
| `--tm-color-gray-8` | #464b52 | Gray 8 |
| `--tm-color-gray-7` | #585c65 | Gray 7 |
| `--tm-color-gray-6` | #6a6e79 | Gray 6 - Secondary Text & Icons |
| `--tm-color-gray-5` | #7d808d | Gray 5 |
| `--tm-color-gray-4` | #90939f | Gray 4 |
| `--tm-color-gray-3` | #a3a6b1 | Gray 3 |
| `--tm-color-gray-2` | #b7b9c3 | Gray 2 |
| `--tm-color-gray-1` | #cbcdd6 | Gray 1 |
| `--tm-color-gray-0` | #e0e1e9 | Gray 0 |
| `--tm-color-gray-light` | #f1f1f6 | Gray Light - Screen & Panels |
| `--tm-color-white` | #ffffff | White |

### Semantic Colors

| Trimble Modus Variable | Value (Light Mode) | Value (Dark Mode) | Description |
|------------------------|-------------------|-------------------|-------------|
| `--tm-color-success` | #006638 | #4ea646 | Green Dark (Light) / Green Light (Dark) |
| `--tm-color-success-light` | #4ea646 | - | Green Light |
| `--tm-color-success-pale` | #e0eccf | - | Green Pale |
| `--tm-color-danger` | #da212c | #e86363 | Red - Danger/Error (Light) / Red Light (Dark) |
| `--tm-color-danger-dark` | #ab1f26 | - | Red Dark |
| `--tm-color-danger-light` | #e86363 | - | Red Light |
| `--tm-color-danger-pale` | #fbd4d7 | - | Red Pale |
| `--tm-color-warning` | #e49325 | #fec157 | Yellow Dark - Warning (Light) / Yellow Light (Dark) |
| `--tm-color-warning-light` | #fec157 | - | Yellow Light |
| `--tm-color-warning-pale` | #fff5e4 | - | Yellow Pale |
| `--tm-color-info` | #019aeb | #019aeb | Highlight Blue - Information |
| `--tm-color-highlight-blue` | #019aeb | - | Highlight Blue - Special Case |

### Content Colors

| Trimble Modus Variable | Value (Light Mode) | Value (Dark Mode) | Description |
|------------------------|-------------------|-------------------|-------------|
| `--tm-color-text` | #252a2a | #f1f1f6 | Trimble Gray (Light) / Gray Light (Dark) |
| `--tm-color-text-secondary` | #6a6e79 | #b7b9c3 | Gray 6 (Light) / Gray 2 (Dark) |
| `--tm-color-text-disabled` | #a3a6b1 | #7d808d | Gray 3 (Light) / Gray 5 (Dark) |
| `--tm-color-surface` | #ffffff | #353a40 | White (Light) / Gray 9 (Dark) |
| `--tm-color-background` | #f1f1f6 | #252a2e | Gray Light (Light) / Trimble Gray (Dark) |
| `--tm-color-border` | #cbcdd6 | #585c65 | Gray 1 (Light) / Gray 7 (Dark) |

## Typography Variables

### Font Family

| Trimble Modus Variable | Value |
|------------------------|-------|
| `--tm-font-sans` | 'Open Sans', ui-sans-serif, system-ui, sans-serif |

### Font Weights

| Trimble Modus Variable | Value | Description |
|------------------------|-------|-------------|
| `--tm-font-weight-normal` | 400 | Regular text |
| `--tm-font-weight-semibold` | 600 | Semi-bold text |
| `--tm-font-weight-bold` | 700 | Bold text |

### Font Sizes

| Trimble Modus Variable | Value | Description |
|------------------------|-------|-------------|
| `--tm-text-base` | 0.875rem | 14px - Body text |
| `--tm-text-xs` | 0.75rem | 12px - Small body |
| `--tm-text-2xs` | 0.625rem | 10px - Mini text |
| `--tm-text-lg` | 1rem | 16px - Heading 4 |
| `--tm-text-xl` | 1.125rem | 18px - Heading 3 |
| `--tm-text-2xl` | 1.25rem | 20px - Heading 2 |
| `--tm-text-3xl` | 1.5rem | 24px - Heading 1 |
| `--tm-text-4xl` | 2.5rem | 40px - Display 2 |
| `--tm-text-5xl` | 4.5rem | 72px - Display 1 |

### Line Heights

| Trimble Modus Variable | Value | Description |
|------------------------|-------|-------------|
| `--tm-text-base--line-height` | calc(21 / 14) | 21px / 14px - Body text line height (1.5) |
| `--tm-text-xs--line-height` | calc(18 / 12) | 18px / 12px - Small body line height (1.5) |
| `--tm-text-2xs--line-height` | calc(15 / 10) | 15px / 10px - Mini text line height (1.5) |
| `--tm-text-lg--line-height` | calc(24 / 16) | 24px / 16px - Heading 4 line height (1.5) |
| `--tm-text-xl--line-height` | calc(27 / 18) | 27px / 18px - Heading 3 line height (1.5) |
| `--tm-text-2xl--line-height` | calc(30 / 20) | 30px / 20px - Heading 2 line height (1.5) |
| `--tm-text-3xl--line-height` | calc(36 / 24) | 36px / 24px - Heading 1 line height (1.5) |
| `--tm-text-4xl--line-height` | calc(54 / 40) | 54px / 40px - Display 2 line height (1.35) |
| `--tm-text-5xl--line-height` | calc(108 / 72) | 108px / 72px - Display 1 line height (1.5) |

### Tailwind Line Height Mappings

| Tailwind Variable | Value | Description |
|------------------|-------|-------------|
| `--leading-none` | 1 | No line height (multiplier: 1) |
| `--leading-tight` | 1.25 | Tight line height (multiplier: 1.25) |
| `--leading-snug` | 1.375 | Snug line height (multiplier: 1.375) |
| `--leading-normal` | 1.5 | Normal line height (multiplier: 1.5) |
| `--leading-relaxed` | 1.625 | Relaxed line height (multiplier: 1.625) |
| `--leading-loose` | 2 | Loose line height (multiplier: 2) |
| `--leading-2xs` | var(--tm-text-2xs--line-height) | Line height for 2xs text |
| `--leading-xs` | var(--tm-text-xs--line-height) | Line height for xs text |
| `--leading-base` | var(--tm-text-base--line-height) | Line height for base text |
| `--leading-lg` | var(--tm-text-lg--line-height) | Line height for lg text |
| `--leading-xl` | var(--tm-text-xl--line-height) | Line height for xl text |
| `--leading-2xl` | var(--tm-text-2xl--line-height) | Line height for 2xl text |
| `--leading-3xl` | var(--tm-text-3xl--line-height) | Line height for 3xl text |
| `--leading-4xl` | var(--tm-text-4xl--line-height) | Line height for 4xl text |
| `--leading-5xl` | var(--tm-text-5xl--line-height) | Line height for 5xl text |

### Combined Text & Line Height Variables

| Combined Variable | Value | Description |
|------------------|-------|-------------|
| `--text-2xs--line-height` | var(--tm-text-2xs--line-height) | Combined variable for 2xs text |
| `--text-xs--line-height` | var(--tm-text-xs--line-height) | Combined variable for xs text |
| `--text-base--line-height` | var(--tm-text-base--line-height) | Combined variable for base text |
| `--text-lg--line-height` | var(--tm-text-lg--line-height) | Combined variable for lg text |
| `--text-xl--line-height` | var(--tm-text-xl--line-height) | Combined variable for xl text |
| `--text-2xl--line-height` | var(--tm-text-2xl--line-height) | Combined variable for 2xl text |
| `--text-3xl--line-height` | var(--tm-text-3xl--line-height) | Combined variable for 3xl text |
| `--text-4xl--line-height` | var(--tm-text-4xl--line-height) | Combined variable for 4xl text |
| `--text-5xl--line-height` | var(--tm-text-5xl--line-height) | Combined variable for 5xl text |

### Letter Spacing

| Trimble Modus Variable | Value |
|------------------------|-------|
| `--tm-tracking-tight` | 0.15em |
| `--tm-tracking-normal` | 0.15em |
| `--tm-tracking-wide` | 0.25em |
| `--tm-tracking-wider` | 0.5em |

## Spacing Variables

| Trimble Modus Variable | Value | Description |
|------------------------|-------|-------------|
| `--tm-space-0` | 0 | No spacing |
| `--tm-space-1` | 0.25rem | 4px spacing |
| `--tm-space-2` | 0.5rem | 8px spacing |
| `--tm-space-3` | 0.75rem | 12px spacing |
| `--tm-space-4` | 1rem | 16px spacing |
| `--tm-space-5` | 1.25rem | 20px spacing |
| `--tm-space-6` | 1.5rem | 24px spacing |
| `--tm-space-8` | 2rem | 32px spacing |
| `--tm-space-10` | 2.5rem | 40px spacing |
| `--tm-space-12` | 3rem | 48px spacing |
| `--tm-space-16` | 4rem | 64px spacing |
| `--tm-space-20` | 5rem | 80px spacing |
| `--tm-space-24` | 6rem | 96px spacing |
| `--tm-space-32` | 8rem | 128px spacing |
| `--tm-space-40` | 10rem | 160px spacing |
| `--tm-space-48` | 12rem | 192px spacing |

## Border Radius Variables

| Trimble Modus Variable | Value | Description |
|------------------------|-------|-------------|
| `--tm-radius-none` | 0 | No rounding |
| `--tm-radius-sm` | 0.125rem | 2px radius |
| `--tm-radius` | 0.25rem | 4px radius (default) |
| `--tm-radius-md` | 0.375rem | 6px radius |
| `--tm-radius-lg` | 0.5rem | 8px radius |
| `--tm-radius-xl` | 0.75rem | 12px radius |
| `--tm-radius-2xl` | 1rem | 16px radius |
| `--tm-radius-3xl` | 1.5rem | 24px radius |
| `--tm-radius-full` | 9999px | Fully rounded (circular) |

## Shadow Variables

| Trimble Modus Variable | Value | Description |
|------------------------|-------|-------------|
| `--tm-shadow-none` | none | No shadow |
| `--tm-shadow-sm` | [see CSS] | Small shadow |
| `--tm-shadow` | [see CSS] | Default shadow |
| `--tm-shadow-md` | [see CSS] | Medium shadow |
| `--tm-shadow-lg` | [see CSS] | Large shadow |
| `--tm-shadow-xl` | [see CSS] | Extra large shadow |
| `--tm-shadow-2xl` | [see CSS] | 2x extra large shadow |
| `--tm-shadow-inner` | [see CSS] | Inner shadow |
| `--tm-shadow-outline` | [see CSS] | Outline shadow |
| `--tm-shadow-focus` | [see CSS] | Focus state shadow |

## Transition Variables

| Trimble Modus Variable | Value | Description |
|------------------------|-------|-------------|
| `--tm-transition-fast` | 150ms | Fast transition |
| `--tm-transition-normal` | 300ms | Normal transition |
| `--tm-transition-slow` | 500ms | Slow transition |
| `--tm-transition-timing-default` | cubic-bezier(0.4, 0, 0.2, 1) | Default timing function |

## Variable Mapping

All Trimble Modus (`tm-` prefixed) variables are mapped to standard Tailwind CSS variables for seamless integration with Tailwind utilities. For example:

```css
@theme {
  /* Define Trimble Modus variable */
  --tm-color-primary: #0063a3;
  
  /* Map to Tailwind variable */
  --color-primary: var(--tm-color-primary);
}
```

This approach allows you to use either the Trimble Modus variables directly (for custom styles) or the Tailwind utilities (in class names).

## Dark Mode Support

Dark mode variables are defined using the `@theme dark` directive. The mapping from `tm-` variables to standard Tailwind variables happens in both light and dark themes.

## Usage in Components

When using these variables in components, prefer the Tailwind variables (without the `tm-` prefix) to ensure compatibility with the Tailwind utility classes. For example:

```css
.my-custom-element {
  color: var(--color-primary);
  font-size: var(--text-base);
  padding: var(--space-4);
}
```

For class-based styling, continue using Tailwind utilities which automatically use these mapped variables:

```html
<div class="text-primary text-base p-4">
  This uses the Tailwind utilities
</div>
```

When documenting variable names or displaying them in the UI (for example in design system documentation), use the `tm-` prefixed names to show the Trimble Modus variable names.
