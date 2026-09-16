---
name: Nordic Precision Commerce
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#414751'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#727782'
  outline-variant: '#c1c7d3'
  surface-tint: '#0260ab'
  primary: '#004883'
  on-primary: '#ffffff'
  primary-container: '#0360ab'
  on-primary-container: '#c4daff'
  inverse-primary: '#a3c9ff'
  secondary: '#b40979'
  on-secondary: '#ffffff'
  secondary-container: '#fd54b4'
  on-secondary-container: '#5f003e'
  tertiary: '#3f475c'
  on-tertiary: '#ffffff'
  tertiary-container: '#575e75'
  on-tertiary-container: '#d1d8f3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d3e3ff'
  primary-fixed-dim: '#a3c9ff'
  on-primary-fixed: '#001c39'
  on-primary-fixed-variant: '#004883'
  secondary-fixed: '#ffd8e7'
  secondary-fixed-dim: '#ffafd3'
  on-secondary-fixed: '#3d0026'
  on-secondary-fixed-variant: '#8b005c'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 38px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: '0'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system expresses a refined Scandinavian modernism tailored specifically for high-ticket direct-to-consumer furniture commerce. It combines the uncompromising structural rigor of architectural layout with tactile, reassuring consumer retail principles. 

The emotional objective is absolute confidence and visual calm. Furniture decisions require immense trust; the interface eliminates visual clutter to spotlight materials, joinery, and silhouettes. Pure `#FFFFFF` backdrops mirror high-end showroom environments, punctuated by a commanding primary corporate blue that conveys engineering reliability and longevity. High-intent conversion points leverage a vibrant magenta accent to trigger immediate visual orientation without degrading the editorial luxury of the brand.

Key aesthetic characteristics:
- **Pristine Canvas**: Generous negative space that allows lifestyle compositions and silhouette cutouts to breathe.
- **Controlled Vibrancy**: Primary interactions remain rooted in foundational deep blues, reserving high-energy magenta strictly for conversion catalysts (Add to Cart, Checkout, Key Value Props).
- **Architectural Rhythm**: Consistent horizontal axes, hairline dividers, and deliberate micro-typography.

## Colors

The color system delivers high readability and distinct visual hierarchy through deliberate functional roles:

- **Primary (`#0360AB`)**: The core brand anchor. Used for primary interactive affordances, navigation anchors, active state badges, and verified trust credentials.
- **Secondary / Conversion Accent (`#C01C83`)**: A high-contrast magenta reserved strictly for primary purchase triggers, configuration affirmations, promotional callouts, and key conversion paths. It is never used for decorative fill.
- **Tertiary / Base Dark (`#0F172A`)**: Deep slate governing all high-emphasis typography, major section headings, and primary structural iconography. Replaces pure black to maintain an organic, premium feel.
- **Neutral (`#64748B`)**: Balanced slate used for secondary body copy, dimension callouts, material specs, and disabled states.

Supporting structural colors include:
- **Canvas Base**: `#FFFFFF` for pristine backdrops and product isolation.
- **Subtle Surface**: `#F8FAFC` for alternate product spec panels and modular card containers.
- **Hairline Border**: `#E2E8F0` at 1px thickness to anchor cards, image carousels, and swatch selectors without creating visual heaviness.

## Typography

Typographic hierarchy utilizes **Plus Jakarta Sans** across all roles to achieve a clean geometric cadence with soft, humanized finishes. 

- Large display headlines leverage tight negative tracking (`-0.03em` to `-0.02em`) and bold weights to project architectural stature on sofa model showcases.
- Body copy relies on neutral tracking with deliberate line heights (`1.5` to `1.6`) to ensure detailed configuration specifications (e.g., fabric rubs, frame timber, cushion density) are effortless to parse.
- Small labels and product specification badges enforce bold weights with widened letter-spacing (`0.02em` to `0.06em`) in uppercase or title-case to maintain instant scannability during checkout comparisons.

## Layout & Spacing

The layout is built on a responsive 12-column grid system designed around intentional asymmetry and showcase product displays:

- **Desktop (1200px+)**: 12 columns with `1.5rem` gutters and outer canvas margins of `3rem` (max-width `1440px`). E-commerce product display pages (PDP) split into a 7-column media gallery and a 5-column sticky purchase/configuration pane.
- **Tablet (768px - 1199px)**: 8 columns with `1.25rem` gutters and `2rem` outer margins. Secondary attributes and swatch pickers transition to horizontal slider containers.
- **Mobile (< 768px)**: 4 columns with `1rem` gutters and `1.25rem` outer margins. All product imagery collapses to edge-to-edge full-bleed swiping carousels with fixed bottom conversion anchors.

Spacing follows an 8-point structural cadence:
- Micro-spacing (`space-xs`, `space-sm`) separates inline color swatches, badges, and pricing tiers.
- Mid-spacing (`space-md`, `space-lg`) structures card interiors, input groups, and variant chips.
- Macro-spacing (`space-xl`, `space-2xl`) establishes deep rhythm between product features, modular configuration stages, and room-builder sections.

## Elevation & Depth

To preserve an authentic, airy Scandinavian minimalist aesthetic, depth is established through **low-contrast outlines** paired with subtle, ambient drop shadows rather than heavy skeuomorphic shading.

- **Level 0 (Flat Ground)**: Base background `#FFFFFF` with no shadow. Primary canvas for hero images and product listings.
- **Level 1 (Structural Cards & Modules)**: Outlined with a 1px solid `#E2E8F0` border. Ambient drop shadow: `0 1px 3px rgba(15, 23, 42, 0.04), 0 1px 2px rgba(15, 23, 42, 0.02)`.
- **Level 2 (Hover States & Swatch Overlays)**: Border transitions to `#CBD5E1`. Ambient shadow: `0 8px 20px -4px rgba(15, 23, 42, 0.06), 0 4px 6px -2px rgba(15, 23, 42, 0.03)`.
- **Level 3 (Sticky Conversion Bar & Drawers)**: Positioned above scrolling viewports. Ambient shadow: `0 16px 32px -6px rgba(15, 23, 42, 0.1)`. Backdrops use `backdrop-filter: blur(12px)` with `rgba(255, 255, 255, 0.92)`.

## Shapes

The geometric framework uses **Rounded (Value: 2)** geometry:

- Standard controls, text inputs, secondary buttons, and fabric chips utilize a base border-radius of `0.5rem` (8px).
- Product cards, interactive modular segment builders, and modal panels use `1rem` (16px, `rounded-lg`).
- Feature hero containers and editorial imagery modules use `1.5rem` (24px, `rounded-xl`).
- Swatch selectors and status pills use full circular radiuses (`9999px`) to contrast against rectangular sofa shapes.

This radius level echoes the balanced cushioning, curved armrests, and clean joinery typical of modern upholstered furniture design.

## Components

### Buttons
- **Primary CTA ("Add to Cart", "Order Swatches")**: Background `#C01C83`, text `#FFFFFF`, radius `0.5rem`, padding `1rem 2rem`, font `label-lg`. Hover: brightness 108%, subtle scale transition (`transform: translateY(-1px)`). Focus ring: 2px `#C01C83` offset by 2px `#FFFFFF`.
- **Secondary Action ("Configure Module", "View Dimensions")**: Background `#0360AB`, text `#FFFFFF`, radius `0.5rem`, padding `0.875rem 1.75rem`, font `label-md`. Hover: `#024d8a`.
- **Tertiary / Ghost ("Learn More", "Material Specs")**: Transparent fill, 1px border `#E2E8F0`, text `#0F172A`. Hover: background `#F8FAFC`, border `#CBD5E1`.

### Product & Dimension Cards
- Container: Background `#FFFFFF`, 1px solid border `#E2E8F0`, radius `1rem`, padding `1.5rem`.
- Imagery: Rendered against `#F8FAFC` soft-contrast inner frames with subtle `0.5rem` corner radiuses.
- Pricing Display: Primary price in `#0F172A` (`headline-sm`), financing subtext in `#64748B` (`body-sm`).

### Fabric Swatch Selector & Chips
- Swatches: `40px` circular discs framed with a 2px inset gap and an active selector ring of `#0360AB` when active.
- Dimensional Chips: Pill tags (`9999px` radius), 1px border `#E2E8F0`, padding `0.5rem 1rem`. Selected state: border `#0360AB`, background `rgba(3, 96, 171, 0.05)`, text `#0360AB`.

### Form Fields & Inputs
- Text Inputs: Height `48px`, background `#FFFFFF`, border 1px `#E2E8F0`, radius `0.5rem`, padding `0 1rem`, text `#0F172A`, placeholder `#64748B`. Focused state: border `#0360AB`, box-shadow `0 0 0 3px rgba(3, 96, 171, 0.15)`.
- Checkboxes & Radios: Size `20px`, border 1.5px `#CBD5E1`. Checked state: background `#0360AB`, border `#0360AB`, check glyph in pure white.

### Specialized E-commerce Additions
- **Sticky Sticky Mobile Conversion Drawer**: Fixed viewport bottom bar with `backdrop-filter: blur(12px)`, background `rgba(255, 255, 255, 0.94)`, 1px border-top `#E2E8F0`, housing total price and full-width `#C01C83` action trigger.
- **Trust Badges**: Compact pill modules containing a micro-icon, bold text (`label-sm`), background `#F8FAFC`, border 1px `#E2E8F0` ("10-Year Warranty", "Free In-Home Delivery", "100-Day Trial").