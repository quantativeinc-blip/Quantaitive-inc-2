---
description: Glassmorphism UI Design System for Quantitative Inc Website
---

# Glassmorphism UI Design System

This document outlines the glassmorphism design patterns used throughout the Quantitative Inc website, inspired by premium fintech interfaces like Revolut.

## Core Principles

### 1. Transparency & Backdrop Blur
- **Background Opacity**: Use `bg-white/60` to `bg-white/80` for glass panels
- **Backdrop Blur**: `backdrop-blur-xl` for mobile menus, `backdrop-blur-2xl` for floating elements
- **Purpose**: Creates depth while maintaining content visibility underneath

### 2. Mobile Navigation Menu

**Location**: `app/page.tsx` - Navbar component, mobile menu dropdown

**Styling**:
```tsx
className="absolute top-full left-0 right-0 mt-4 
  bg-white/60              // 60% opacity for more transparency
  backdrop-blur-xl         // Medium blur for performance
  rounded-3xl              // Soft rounded corners
  border border-purple-deep/10  // Subtle border
  p-8 md:hidden            // Mobile only
  shadow-2xl"              // Elevated shadow
```

**Design Rationale**:
- More transparent than desktop elements (`bg-white/60` vs `bg-white/80`)
- Allows mobile users to see page context behind the menu
- Balances readability with modern aesthetic

### 3. Floating Elements Pattern

**Hero Badge Example**:
```tsx
bg-white/80 backdrop-blur-2xl p-6 rounded-[2rem]
```

**Service Cards**:
```tsx
bg-white/40 backdrop-blur-sm hover:bg-white
```

### 4. Color Palette for Glass Effect

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Background | `bg-beige` | `bg-purple-deep` |
| Glass Panel | `bg-white/60` | `bg-purple-deep/60` |
| Text Primary | `text-purple-deep` | `text-beige` |
| Border | `border-purple-deep/10` | `border-beige/10` |

### 5. Best Practices

1. **Mobile-First Transparency**: Mobile menus should be more transparent than desktop
2. **Performance**: Use `backdrop-blur-md` or `backdrop-blur-xl` on mobile to reduce GPU load
3. **Contrast**: Ensure text remains readable with `text-purple-deep/60` or darker
4. **Animation**: Use Framer Motion for smooth glass panel transitions

### 6. Implementation Notes

- Glass panels should feel "premium" - avoid completely transparent backgrounds
- Border opacity should be subtle (`/10` to `/20`) to not distract
- Always test on both light and dark backgrounds behind the glass
- Mobile menus: prioritize seeing the page context over full opacity
