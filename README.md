# Trimble Modus Vue

This project implements the Trimble Modus design system using Vue.js 3 and Tailwind CSS 4. It provides a comprehensive implementation of Trimble Modus design elements including typography, colors, spacing, borders, shadows, and responsive design.

## Features

- **Trimble Modus Design System**: Implementation of Trimble Modus design guidelines
- **Tailwind CSS 4 Integration**: Using the latest Tailwind CSS with custom theming
- **Dark Mode Support**: Full dark mode implementation with system preference detection
- **Responsive Design**: Mobile-first approach with responsive components
- **Reusable Components**: Button, Card, and other common UI components
- **Component Showcases**: Interactive demonstrations of all design elements
- **GitHub Pages Deployment**: Support for client-side routing on GitHub Pages (see [GITHUB_PAGES.md](GITHUB_PAGES.md))

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run github-pages

# Test GitHub Pages routing locally
npm run test:gh-pages
```

## Technology Stack

- Vue 3.5+
- TypeScript
- Tailwind CSS 4.1+
- Vite 6+

## Component Usage

Components use Trimble Modus design tokens through CSS variables and utility classes. Here are some examples:

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
}
```

```html
<!-- Component usage with MenuItem interface -->
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


## Design System Implementation

### CSS Variables

All Trimble Modus design system styles are implemented as CSS variables with the `tm-` prefix:

- All color, typography, spacing, border, and shadow variables use the `tm-` prefix
- These variables are mapped to standard Tailwind variables for use with Tailwind utilities
- See [VARIABLES.md](./VARIABLES.md) for the complete documentation of all variables

### Colors

The Trimble Modus color palette has been implemented with semantic color variables:

- Primary: #0063a3 (Trimble Blue) - `--tm-color-primary`
- Secondary: #667085 - `--tm-color-secondary`
- Success/Accent: #2e7d32 - `--tm-color-success`
- Warning: #ed6c02 - `--tm-color-warning`
- Danger: #d32f2f - `--tm-color-danger`
- Info: #0288d1 - `--tm-color-info`

### Typography

The typography system uses Open Sans with a comprehensive scale:

- Font sizes from 10px (mini) to 72px (display) - `--tm-text-*` variables
- Line heights optimized for readability - `--tm-text-*--line-height` variables
- Font weights: Normal (400), Semibold (600), Bold (700) - `--tm-font-weight-*` variables

### Spacing

A consistent spacing scale based on 4px increments:

- 4px (0.25rem) to 192px (12rem) - `--tm-space-*` variables

### Border Radius

Rounded corners with predictable increments:

- None (0px) to fully rounded (9999px) - `--tm-radius-*` variables

### Shadows

Elevation system with multiple levels:

- None to 2XL for different levels of prominence - `--tm-shadow-*` variables

## Components

### Core Components

- **Button**: Versatile button component with variants, sizes, and states
- **Card**: Flexible card component with different styles and interactive states
- **DarkModeToggle**: Toggle between light and dark themes

### Showcase Components

- **TypographyShowcase**: Demonstrates all typography styles
- **ColorPalette**: Shows the color system
- **SpacingBordersShadows**: Visualizes spacing, border radius, and shadow variables
- **ResponsiveDesign**: Demonstrates responsive design principles
- **ComponentShowcase**: Interactive display of reusable components

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Building for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```
