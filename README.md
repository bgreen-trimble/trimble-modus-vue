# Trimble Modus Vue

This project implements the Trimble Modus design system using Vue.js 3 and Tailwind CSS 4. It provides a comprehensive implementation of Trimble Modus design elements including typography, colors, spacing, borders, shadows, and responsive design.

## Features

- **Trimble Modus Design System**: Implementation of Trimble Modus design guidelines
- **Tailwind CSS 4 Integration**: Using the latest Tailwind CSS with custom theming
- **Dark Mode Support**: Full dark mode implementation with system preference detection
- **Responsive Design**: Mobile-first approach with responsive components
- **Reusable Components**: Button, Card, and other common UI components
- **Component Showcases**: Interactive demonstrations of all design elements

## Technology Stack

- Vue 3.5+
- TypeScript
- Tailwind CSS 4.1+
- Vite 6+

## Component Usage

All Vue components should use the standard Tailwind CSS variables, not the `--tm-` prefixed variables. For example:

```css
/* Correct usage in component styles */
.my-element {
  color: var(--color-primary);
  font-size: var(--text-base);
}

/* Incorrect usage */
.my-element {
  color: var(--tm-color-primary);
  font-size: var(--tm-text-base);
}
```

The `--tm-` prefixed variables are the foundation of the design system, but components should interact with them through the Tailwind variable mappings.

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
