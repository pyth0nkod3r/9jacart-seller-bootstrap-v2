# SellerHub - E-commerce Seller Platform

A complete, ready-to-use e-commerce seller dashboard and marketing website built with Bootstrap 5. It comes with 5 beautiful color themes, a full seller dashboard, product management, order tracking, analytics, and more — all working right out of the box with no setup required.

---

## Table of Contents

1. [Quick Start Guide](#quick-start-guide)
2. [Project Structure](#project-structure)
3. [All Pages Explained](#all-pages-explained)
4. [Theming System](#theming-system)
5. [Configuration Reference](#configuration-reference)
6. [API Reference](#api-reference)
7. [Customization Guide](#customization-guide)
8. [Troubleshooting](#troubleshooting)
9. [For Developers](#for-developers)
10. [Browser Support](#browser-support)
11. [FAQ](#faq)
12. [License](#license)

---

## Quick Start Guide

### What Is This Project?

SellerHub is a **front-end template** (starter kit) for building an e-commerce seller platform. It handles everything you see on screen — design, layout, pages, interactions — using sample data so you can see how everything looks and works. **No coding experience needed** to open, explore, or customize themes.

### What You Get

- **11 fully designed pages** — marketing homepage, login, registration, and full seller dashboard
- **5 pre-built color themes** — Green, Dark Mode, Ocean Blue, Purple Violet, Sunset Orange
- **Floating theme switcher** — bottom-right button to change colors on any page
- **Fully responsive** — works on desktop, tablet, and mobile
- **No installation needed** — just open in a web browser

### Step 1: Download and Extract

If you received this as a ZIP file, extract (unzip) it to a folder on your computer.

- **Windows**: Right-click the ZIP file > "Extract All..."
- **Mac**: Double-click the ZIP file

### Step 2: Open the Project

You have three options, from simplest to most robust:

#### Option A: Open the File Directly (Simplest)

Double-click **`index.html`** in the project folder. It opens in your default browser.

> **Note**: When opening files directly (`file://` protocol), the browser blocks network-style file loading. Themes will still work — the system has a built-in fallback — but for the full experience, use a local server (Option B or C).

#### Option B: VS Code Live Server (Recommended)

1. Install [Visual Studio Code](https://code.visualstudio.com/) (free)
2. Open the project folder in VS Code (File > Open Folder)
3. Install the **"Live Server"** extension (Extensions sidebar > search "Live Server" > Install)
4. Right-click `index.html` > **"Open with Live Server"**
5. Your browser opens automatically with live reload on file changes

#### Option C: Command-Line Server

**Python** (comes pre-installed on Mac/Linux):
```bash
cd path/to/sellerhub-bootstrap
python -m http.server 8000
# Open http://localhost:8000
```

**Node.js**:
```bash
npm install -g serve
cd path/to/sellerhub-bootstrap
serve
# Open the URL shown in terminal
```

#### Option D: Upload to a Web Host

Upload the entire folder to any hosting service (Netlify, Vercel, GitHub Pages, shared hosting) and it works as a live website.

### Step 3: Explore

From the homepage you can:

- Click **"Get Started"** or **"Sign in"** to see login/registration
- Click the **round palette button** in the bottom-right corner to switch themes
- Log in with **any email and password** (demo mode) to access the full dashboard

### How to Log In

This is a template with sample data — authentication is simulated:

1. Go to the Login page (click "Sign in")
2. Enter **any email** (e.g., `test@test.com`)
3. Enter **any password** (e.g., `password`)
4. Click **Sign in** — you will be redirected to the Dashboard

To log out, click the **Logout** button at the bottom of the sidebar.

---

## Project Structure

The project contains **21 files** organized into a clean, flat structure. Here is every file and what it does:

```
sellerhub-bootstrap/
|
|-- HTML Pages (11 files)
|   |-- index.html              Marketing homepage and landing page
|   |-- login.html              Seller login page
|   |-- register.html           New seller registration page
|   |-- dashboard.html          Main seller dashboard (after login)
|   |-- products.html           Product listing and management
|   |-- add-product.html        Form to add a new product
|   |-- orders.html             Customer order management
|   |-- analytics.html          Sales analytics, charts, and insights
|   |-- storefront.html         Store appearance and settings
|   |-- notifications.html      Notification center with filtering
|   |-- settings.html           Account and profile settings
|
|-- Stylesheets (1 file)
|   |-- css/
|       |-- style.css           All visual styling: layouts, colors, components, dark mode,
|                               theme switcher FAB, responsive breakpoints (~900 lines)
|
|-- JavaScript (2 files)
|   |-- js/
|       |-- app.js              Application logic: mock data, navigation, auth, rendering,
|                               form handlers, theme switcher UI, notification filtering
|       |-- theme-loader.js     Theme engine: loads config, applies CSS variables,
|                               saves preferences, provides ThemeLoader API
|
|-- Configuration (2 files)
|   |-- themes.config.json      Theme definitions: 5 themes with 18 color properties each.
|                               Edit this file to add, remove, or modify themes.
|   |-- themes.schema.json      JSON Schema validation rules for themes.config.json.
|                               Do not edit — used for validation only.
|
|-- Documentation (1 file)
|   |-- README.md               This file
|
|-- Other (4 files)
|   |-- .gitignore              Git ignore rules
|   |-- .specstory/             Specstory configuration (auto-generated, ignore)
|       |-- .gitignore
|       |-- .project.json
|       |-- .what-is-this.md
|
|-- img/                        Empty folder for your custom images (logos, photos, etc.)
```

### File Editing Quick Reference

| If You Want To...                        | Edit This File          |
|------------------------------------------|-------------------------|
| Change page content or text              | The relevant `.html` file |
| Add, remove, or modify color themes      | `themes.config.json`    |
| Change the currency symbol               | `js/app.js` (line ~18: `currency: "..."`) |
| Change visual styling, spacing, or sizes | `css/style.css`         |
| Change how data is displayed or rendered | `js/app.js`             |
| Add your own images                      | Place files in the `img/` folder, then update `<img src="...">` in HTML |

### Files You Should NOT Edit

| File                  | Why                                                            |
|-----------------------|----------------------------------------------------------------|
| `themes.schema.json`  | Validation rules — changing this may break theme loading       |
| `js/theme-loader.js`  | Theme engine — works automatically, no changes needed          |

---

## All Pages Explained

### Public Pages (No Login Required)

**Homepage** (`index.html`) — The marketing landing page with:
- Hero banner with call-to-action buttons and key stats (10,000+ sellers, 50B+ sales)
- Platform stats bar (98% satisfaction, 24/7 support, 36 states, 48hr delivery)
- Features section, performance progress bars, how-it-works steps
- Product categories, testimonials, FAQ accordion, footer with social/contact links

**Login** (`login.html`) — Email/password form with "Remember me", "Forgot password" link, and demo mode banner.

**Registration** (`register.html`) — Full sign-up form: name, email, phone, store name, category, password.

### Dashboard Pages (After Login)

All dashboard pages share a **left sidebar** with navigation and a **Logout** button.

| Page | File | What It Shows |
|------|------|---------------|
| **Dashboard** | `dashboard.html` | Revenue, orders, products, customers stats; quick action buttons; recent orders table; top products list; activity feed |
| **Products** | `products.html` | Product grid with search, category filter, status filter; each card shows image, name, price, stock, sales count |
| **Add Product** | `add-product.html` | Form with name, description, category, price, stock, SKU, image upload, tags |
| **Orders** | `orders.html` | Order stats row; search + filters; table with ID, customer, items, total, status badge, date; view/print actions |
| **Analytics** | `analytics.html` | Revenue overview bar chart; sales-by-category progress bars; top selling products table; customer insights and locations |
| **Storefront** | `storefront.html` | Store preview banner; store info form; social links; store performance stats; policies configuration |
| **Notifications** | `notifications.html` | Filterable tabs (All, Unread, Orders, Payments); notification cards with icons, titles, timestamps, read/unread state |
| **Settings** | `settings.html` | Tabbed settings: Profile, Store, Payment, Notifications, Security (password change, 2FA) |

---

## Theming System

The theming system lets you change the entire look of every page by editing a single JSON file — no CSS knowledge required.

### How It Works

```
themes.config.json  -->  theme-loader.js  -->  CSS Custom Properties  -->  Every element on screen
```

1. **`themes.config.json`** stores theme definitions as structured JSON — each theme has a name, a dark/light flag, and 18 color properties
2. **`theme-loader.js`** (the ThemeLoader engine) reads the config on page load, checks the user's saved preference in localStorage, and applies colors as CSS custom properties on `<html>`
3. **CSS custom properties** (`--primary-color`, `--text-primary`, etc.) are referenced throughout `style.css`, so every element updates instantly when a theme is applied
4. **`app.js`** creates the floating theme switcher button (FAB) in the bottom-right corner, which calls ThemeLoader methods to switch themes

### Built-in Themes

| Theme ID   | Name            | Type  | Primary Color | Best For                        |
|------------|-----------------|-------|---------------|---------------------------------|
| `default`  | Default Green   | Light | `#16a34a`     | Fresh, natural, eco-friendly    |
| `dark`     | Dark Mode       | Dark  | `#22c55e`     | Reduced eye strain, night use   |
| `ocean`    | Ocean Blue      | Light | `#0ea5e9`     | Professional, tech, trust       |
| `purple`   | Purple Violet   | Light | `#8b5cf6`     | Creative, luxury, modern        |
| `sunset`   | Sunset Orange   | Light | `#f97316`     | Energetic, warm, food/lifestyle |

### Adding a New Theme

**Step 1.** Open `themes.config.json` in any text editor.

**Step 2.** Add a new entry inside the `"themes"` object. Use the template below — replace the ID (`"mybrand"`), name, and all color values:

```json
"mybrand": {
  "name": "My Brand Theme",
  "description": "A custom theme for my brand",
  "isDark": false,
  "colors": {
    "primary": "#ff6600",
    "primaryHover": "#e65c00",
    "primaryLight": "#ff8533",
    "secondary": "#666666",
    "accent": "#ffcc00",
    "background": "#ffffff",
    "surface": "#f5f5f5",
    "textPrimary": "#333333",
    "textSecondary": "#666666",
    "textMuted": "#999999",
    "border": "#e0e0e0",
    "success": "#22c55e",
    "warning": "#f59e0b",
    "danger": "#ef4444",
    "info": "#3b82f6",
    "sidebarBg": "#333333",
    "sidebarText": "#ffffff",
    "cardShadow": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
  }
}
```

> **Important**: Place a comma after the previous theme's closing `}` before adding yours.

**Step 3.** Save the file and refresh your browser. Your new theme appears in the floating theme switcher.

### Making a Dark Theme

Set `"isDark": true` and invert your color choices:

- `background` — dark (e.g., `#1a1a2e`)
- `surface` — slightly lighter dark (e.g., `#16213e`)
- `textPrimary` — light (e.g., `#e0e0e0`)
- `textSecondary` / `textMuted` — medium light shades
- `border` — subtle dark line (e.g., `#334155`)
- `sidebarBg` — very dark (e.g., `#0a0a1a`)

The engine automatically applies Bootstrap dark mode overrides (`--bs-body-color`, `--bs-table-color`, etc.) when `isDark` is `true`.

### Modifying an Existing Theme

Open `themes.config.json`, find the theme by its ID (e.g., `"ocean"`), and change any color value. Save and refresh.

### Removing a Theme

Delete the entire theme block from `themes.config.json` (including the trailing comma if it's not the last entry). Save and refresh.

### Color Picking Tools

Need help choosing colors that work together?

- **Coolors** (coolors.co) — random palette generator
- **Adobe Color** (color.adobe.com) — color wheel and harmony rules
- **Realtime Colors** (realtimecolors.com) — preview colors on a website layout

### Theme Persistence

Theme choices are saved to `localStorage` under the key defined in `themes.config.json` (default: `sellerhub-theme`). Users return to their last-selected theme automatically. Private/incognito mode clears this on window close.

### File Protocol Fallback

When opened directly as a file (`file://`), the browser blocks `fetch()` requests. ThemeLoader handles this gracefully — it falls back to a built-in copy of all 5 themes embedded in `theme-loader.js`. Themes work on `file://`, but if you add a custom theme in `themes.config.json`, you must use a local server for it to appear.

---

## Configuration Reference

### themes.config.json — Full Structure

```json
{
  "$schema": "./themes.schema.json",
  "version": "1.0.0",
  "defaultTheme": "default",
  "storageKey": "sellerhub-theme",

  "themes": {
    "<themeId>": {
      "name": "Display Name",
      "description": "Short description",
      "isDark": false,
      "colors": { ... }
    }
  },

  "colorMapping": {
    "<colorKey>": "--css-variable-name"
  }
}
```

### Top-Level Options

| Property       | Type   | Required | Description                                                          |
|----------------|--------|----------|----------------------------------------------------------------------|
| `$schema`      | string | No       | Path to JSON schema for editor validation/autocomplete               |
| `version`      | string | No       | Config version string (informational only)                           |
| `defaultTheme` | string | Yes      | Theme ID to use when no saved preference exists (e.g., `"default"`)  |
| `storageKey`   | string | No       | localStorage key for saving the user's theme choice (default: `"sellerhub-theme"`) |
| `themes`       | object | Yes      | Map of theme IDs to theme objects                                    |
| `colorMapping` | object | No       | Map of color property names to CSS variable names (has sensible defaults) |

### Theme Object

| Property      | Type    | Required | Description                                                 |
|---------------|---------|----------|-------------------------------------------------------------|
| `name`        | string  | Yes      | Display name shown in the theme switcher UI                 |
| `description` | string  | No       | Short description of the theme                              |
| `isDark`      | boolean | No       | Set `true` for dark themes — enables dark mode CSS overrides and Bootstrap variable adjustments |
| `colors`      | object  | Yes      | Object with up to 18 color properties (see below)           |

### Color Properties

Each theme can define 18 color properties. Only `primary`, `background`, and `textPrimary` are strictly required — all others fall back to sensible defaults.

| Property        | CSS Variable         | Controls                                      | Example (light)  | Example (dark)   |
|-----------------|----------------------|-----------------------------------------------|------------------|------------------|
| `primary`       | `--primary-color`    | Buttons, links, active states, brand accent    | `#16a34a`        | `#22c55e`        |
| `primaryHover`  | `--primary-hover`    | Button/link hover states                       | `#15803d`        | `#16a34a`        |
| `primaryLight`  | `--primary-light`    | Subtle accent backgrounds, highlights          | `#22c55e`        | `#4ade80`        |
| `secondary`     | `--secondary-color`  | Secondary UI elements                          | `#64748b`        | `#94a3b8`        |
| `accent`        | `--accent-color`     | Special highlights, feature badges             | `#f59e0b`        | `#f59e0b`        |
| `background`    | `--background-color` | Main page background                           | `#ffffff`        | `#0f172a`        |
| `surface`       | `--surface-color`    | Cards, panels, elevated surfaces               | `#f8fafc`        | `#1e293b`        |
| `textPrimary`   | `--text-primary`     | Headings, body text, primary content           | `#1e293b`        | `#f1f5f9`        |
| `textSecondary` | `--text-secondary`   | Labels, captions, less prominent text          | `#64748b`        | `#94a3b8`        |
| `textMuted`     | `--text-muted`       | Hints, placeholders, disabled text             | `#94a3b8`        | `#64748b`        |
| `border`        | `--border-color`     | Card borders, dividers, input borders          | `#e2e8f0`        | `#334155`        |
| `success`       | `--success-color`    | Success messages, positive indicators          | `#22c55e`        | `#22c55e`        |
| `warning`       | `--warning-color`    | Warnings, caution indicators                   | `#f59e0b`        | `#f59e0b`        |
| `danger`        | `--danger-color`     | Errors, destructive actions, delete buttons    | `#ef4444`        | `#ef4444`        |
| `info`          | `--info-color`       | Informational messages, tips                   | `#3b82f6`        | `#3b82f6`        |
| `sidebarBg`     | `--sidebar-bg`       | Dashboard sidebar background                   | `#1e293b`        | `#020617`        |
| `sidebarText`   | `--sidebar-text`     | Sidebar navigation text                        | `#f1f5f9`        | `#f1f5f9`        |
| `cardShadow`    | `--card-shadow`      | Box-shadow on cards and elevated elements      | `0 1px 3px ...`  | `0 1px 3px ...`  |

### colorMapping

The `colorMapping` object maps each theme color key to a CSS custom property name. The default mapping is:

```json
{
  "primary": "--primary-color",
  "primaryHover": "--primary-hover",
  "primaryLight": "--primary-light",
  "secondary": "--secondary-color",
  "accent": "--accent-color",
  "background": "--background-color",
  "surface": "--surface-color",
  "textPrimary": "--text-primary",
  "textSecondary": "--text-secondary",
  "textMuted": "--text-muted",
  "border": "--border-color",
  "success": "--success-color",
  "warning": "--warning-color",
  "danger": "--danger-color",
  "info": "--info-color",
  "sidebarBg": "--sidebar-bg",
  "sidebarText": "--sidebar-text",
  "cardShadow": "--card-shadow"
}
```

You only need to include `colorMapping` if you want to change the CSS variable names. If omitted, the engine uses the defaults above.

---

## API Reference

The `ThemeLoader` class (`js/theme-loader.js`) is the core engine. A singleton instance `themeLoader` is created automatically and initialized on `DOMContentLoaded`.

### Methods

#### `themeLoader.init()` -> `Promise<ThemeLoader>`

Initializes the theme loader. Loads `themes.config.json`, falls back to embedded defaults if the file is unavailable, reads the saved theme from localStorage, and applies it. Called automatically on page load — you only need to call this if you want to ensure initialization is complete before other operations.

```javascript
await themeLoader.init();
```

#### `themeLoader.setTheme(themeId, save?)` -> `Promise<boolean>`

Applies a theme by its ID. Returns `true` if successful, `false` if the theme ID is not found.

| Parameter | Type    | Default | Description                                  |
|-----------|---------|---------|----------------------------------------------|
| `themeId` | string  | —       | The theme ID (e.g., `"dark"`, `"ocean"`)     |
| `save`    | boolean | `true`  | Whether to save the choice to localStorage   |

```javascript
await themeLoader.setTheme('dark');        // Apply and save
await themeLoader.setTheme('ocean', false); // Apply without saving
```

What it does internally:
1. Looks up the theme in the themes registry
2. Sets all CSS custom properties on `document.documentElement`
3. Sets Bootstrap 5 CSS variables for dark themes (`--bs-body-color`, `--bs-table-color`, etc.)
4. Sets `data-theme` attribute on `<html>` (e.g., `<html data-theme="dark">`)
5. Adds `dark-theme` or `light-theme` class to `<html>`
6. Saves to localStorage (if `save` is `true`)
7. Dispatches a `themechange` CustomEvent on `window`

#### `themeLoader.getThemeId()` -> `string`

Returns the currently active theme ID.

```javascript
const current = themeLoader.getThemeId(); // "default", "dark", "ocean", etc.
```

#### `themeLoader.getTheme()` -> `object`

Returns the full configuration object of the currently active theme.

```javascript
const theme = themeLoader.getTheme();
// { name: "Dark Mode", description: "...", isDark: true, colors: { primary: "#22c55e", ... } }
```

#### `themeLoader.getThemes()` -> `array`

Returns a summary array of all registered themes.

```javascript
const themes = themeLoader.getThemes();
// [
//   { id: "default", name: "Default Green", description: "...", isDark: false },
//   { id: "dark", name: "Dark Mode", description: "...", isDark: true },
//   ...
// ]
```

#### `themeLoader.isDark()` -> `boolean`

Returns `true` if the current theme has `isDark: true`.

```javascript
if (themeLoader.isDark()) {
  console.log('Dark mode is active');
}
```

#### `themeLoader.toggleDarkMode()`

Switches between light and dark themes. Finds the first theme with the opposite `isDark` value and applies it.

```javascript
themeLoader.toggleDarkMode();
```

#### `themeLoader.registerTheme(id, themeConfig)` -> `ThemeLoader`

Registers a new theme at runtime without editing `themes.config.json`. Useful for dynamic theme creation or user-generated themes.

```javascript
themeLoader.registerTheme('custom', {
  name: 'My Custom Theme',
  description: 'Created at runtime',
  isDark: false,
  colors: {
    primary: '#ff0000',
    primaryHover: '#cc0000',
    primaryLight: '#ff3333',
    secondary: '#666666',
    accent: '#ffcc00',
    background: '#ffffff',
    surface: '#f5f5f5',
    textPrimary: '#333333',
    textSecondary: '#666666',
    textMuted: '#999999',
    border: '#e0e0e0',
    success: '#22c55e',
    warning: '#f59e0b',
    danger: '#ef4444',
    info: '#3b82f6',
    sidebarBg: '#333333',
    sidebarText: '#ffffff',
    cardShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)'
  }
});

// Now you can apply it:
await themeLoader.setTheme('custom');
```

#### `themeLoader.removeTheme(id)` -> `boolean`

Removes a theme from the registry. Returns `false` if you attempt to remove the currently active theme.

```javascript
themeLoader.removeTheme('custom'); // true
themeLoader.removeTheme(themeLoader.getThemeId()); // false — cannot remove active theme
```

#### `themeLoader.exportCSS()` -> `string`

Exports the current theme as a CSS `:root` block string. Useful for generating static CSS from a theme.

```javascript
const css = themeLoader.exportCSS();
// ":root {\n  --primary-color: #16a34a;\n  --primary-hover: #15803d;\n  ...\n}"
```

### Events

#### `themechange`

Dispatched on `window` whenever a theme is applied via `setTheme()`.

```javascript
window.addEventListener('themechange', (event) => {
  console.log('Theme ID:', event.detail.themeId);     // "dark"
  console.log('Theme config:', event.detail.theme);    // { name: "Dark Mode", isDark: true, colors: {...} }
});
```

Use this to react to theme changes in your own components — for example, updating chart colors or adjusting third-party widget styles.

### CSS Variables Reference

All theme colors are applied as CSS custom properties on `:root`. Use them in your own styles:

```css
.my-component {
  background-color: var(--primary-color);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  box-shadow: var(--card-shadow);
  transition: all var(--transition-speed);
  border-radius: var(--radius);
}
```

In addition to theme colors, these utility variables are always available:

| CSS Variable         | Description                   | Default |
|----------------------|-------------------------------|---------|
| `--transition-speed` | Animation/transition duration | `0.3s`  |
| `--radius`           | Default border radius         | `0.5rem`|

---

## Customization Guide

### Changing the Brand Name

1. Open any text editor (VS Code, Notepad, Sublime Text)
2. Use **Find and Replace** across all files (Ctrl+Shift+H in VS Code)
3. Find: `SellerHub` — Replace with: `Your Brand Name`
4. Apply to all `.html` files: `index.html`, `login.html`, `register.html`, `dashboard.html`, `products.html`, `add-product.html`, `orders.html`, `analytics.html`, `storefront.html`, `notifications.html`, `settings.html`
5. Also update `js/app.js` — find `name: "SellerHub"` in the `CONFIG` object near the top

### Changing the Logo

The project uses placeholder images from Unsplash. To use your own:

1. Place your logo file in the `img/` folder (e.g., `img/my-logo.png`)
2. In each HTML file, find the logo image tag:
   ```html
   <img src="https://images.unsplash.com/photo-1572025442646-866d16c84a54?w=40&h=40&fit=crop" alt="SellerHub">
   ```
3. Replace with your logo path:
   ```html
   <img src="img/my-logo.png" alt="Your Brand Name">
   ```
4. Repeat for all pages — the logo appears in the sidebar on dashboard pages and in the navbar on public pages

### Changing the Currency

Edit `js/app.js`, find this line near the top (~line 18):

```javascript
currency: "₦"
```

Change `₦` to your currency symbol: `$`, `€`, `£`, `GH₵`, `KSh`, etc.

### Changing Product/Order Data

All sample data is defined at the top of `js/app.js`:

| Constant             | What It Contains                        |
|----------------------|-----------------------------------------|
| `MOCK_PRODUCTS`      | Product catalog (name, price, image, stock, category) |
| `MOCK_ORDERS`        | Order history (customer, items, total, status, date)  |
| `MOCK_NOTIFICATIONS` | Notification feed (type, title, message, read state)  |
| `MOCK_STATS`         | Dashboard statistics (revenue, orders, growth rates)  |
| `CATEGORIES`         | Product category list                                 |

Edit these arrays/objects to show your own data. For a production site, replace them with API calls to your backend.

### Changing Colors Without Editing CSS

Edit `themes.config.json` — see [Theming System](#theming-system) for full instructions. You never need to touch `style.css` to change colors.

### Changing Contact Information

In `index.html`, find the footer and update:

- Email: `support@sellerhub.com`
- Phone: `+234 800 123 4567`
- Location: `Lagos, Nigeria`

### Changing Placeholder Images

All product, testimonial, and hero images use Unsplash URLs. Replace them the same way as the logo:

1. Place your images in `img/`
2. Find `<img src="https://images.unsplash.com/...">` tags
3. Replace with `<img src="img/your-image.jpg">`

### Adding a New Page

1. Copy an existing page (e.g., `products.html`) as your starting point
2. Change the `<title>` and main content area
3. Update the sidebar `<nav>` to mark your new page as `active`
4. Add a link to your new page in the sidebar of all other dashboard pages
5. Add `<script src="js/theme-loader.js"></script>` and `<script src="js/app.js"></script>` before `</body>`

---

## Troubleshooting

### Theme colors don't load / everything looks default

**Cause**: Browser blocks `fetch()` on `file://` protocol, and the fallback didn't activate.

**Fix**:
1. Use a local server — see [Quick Start Guide, Option B or C](#option-b-vs-code-live-server-recommended)
2. Hard-refresh the page: `Ctrl+Shift+R` (Windows) / `Cmd+Shift+R` (Mac)
3. Verify both `js/theme-loader.js` and `js/app.js` are loaded — check the `<script>` tags at the bottom of your HTML file:
   ```html
   <script src="js/theme-loader.js"></script>
   <script src="js/app.js"></script>
   ```

### Custom theme added to themes.config.json doesn't appear

**Cause**: JSON syntax error or file not being loaded.

**Fix**:
1. Validate your JSON at [jsonlint.com](https://jsonlint.com) — paste the entire contents of `themes.config.json`
2. Check that you have a comma between themes (after the `}` of the previous theme, before your new one)
3. Make sure you're using a local server (custom themes in the JSON file require `fetch()` which doesn't work on `file://`)

### Dark mode text is invisible / hard to read

**Cause**: A CSS rule isn't reaching certain elements.

**Fix**: The theme engine overrides Bootstrap 5's internal CSS variables (`--bs-body-color`, `--bs-table-color`, etc.) when dark mode is active. If specific elements still show dark text:
1. Open browser DevTools (F12)
2. Inspect the invisible text element
3. Check what CSS rule is setting its `color` — it may be a Bootstrap utility class
4. Add an override in `css/style.css`:
   ```css
   :root[data-theme="dark"] .your-element {
     color: var(--text-primary) !important;
   }
   ```

### Pages look broken or unstyled

**Cause**: CSS file not loading.

**Fix**: Verify the `css/` folder and `style.css` file haven't been moved or renamed. The folder structure must match the file paths in the HTML `<link>` tags.

### Images don't appear

**Cause**: Placeholder images load from Unsplash via the internet.

**Fix**: Check your internet connection. Or replace Unsplash URLs with local images in the `img/` folder.

### Login doesn't work / redirects to login repeatedly

**Cause**: localStorage issue.

**Fix**: Clear localStorage for the site:
1. Open DevTools (F12) > **Application** tab > **Local Storage**
2. Click your site's entry > click the clear button (trash icon)
3. Refresh and try logging in again

### Blank page / nothing loads

**Cause**: JavaScript error blocking execution.

**Fix**: Open DevTools (F12) > **Console** tab and look for red error messages. The error message will indicate which file and line is causing the issue.

### Floating theme button doesn't appear

**Cause**: JavaScript failed to load or an error prevented the FAB from being created.

**Fix**:
1. Check that both script tags are present at the bottom of the page (before `</body>`):
   ```html
   <script src="js/theme-loader.js"></script>
   <script src="js/app.js"></script>
   ```
2. Open DevTools Console (F12) and check for errors
3. The theme button only appears after `DOMContentLoaded` fires and ThemeLoader initializes — if another script errors before that point, the button won't be created

### Theme button covers page content

**Fix**: Adjust its position in `css/style.css` — search for `.theme-switcher-container` and change the `bottom` and `right` values:

```css
.theme-switcher-container {
  bottom: 2rem;  /* distance from bottom */
  right: 2rem;   /* distance from right edge */
}
```

---

## For Developers

### Technology Stack

| Technology                  | Purpose                              | Loaded From |
|-----------------------------|--------------------------------------|-------------|
| **HTML5**                   | Semantic page structure              | Local files |
| **CSS3**                    | Custom properties, flexbox, grid     | Local files |
| **Bootstrap 5.3.2**         | Responsive grid, components, utilities | CDN       |
| **Bootstrap Icons 1.11.1**  | Icon library                         | CDN         |
| **Google Fonts (Inter)**    | Typography                           | CDN         |
| **Vanilla JavaScript (ES6+)** | All logic — no frameworks or build tools | Local files |

### CDN Dependencies

```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<!-- Bootstrap Icons -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" rel="stylesheet">
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<!-- Bootstrap JS (at bottom of body) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
```

### Dark Mode Architecture

Dark mode goes beyond just swapping CSS variables. When a theme with `isDark: true` is applied:

1. **CSS custom properties** are set on `:root` (both custom and Bootstrap's `--bs-*` variables)
2. **`data-theme="dark"` attribute** is set on `<html>`, activating all `:root[data-theme="dark"]` CSS selectors
3. **`dark-theme` class** is added to `<html>` for additional selector flexibility
4. **Bootstrap 5 CSS variables** are overridden: `--bs-body-color`, `--bs-body-bg`, `--bs-emphasis-color`, `--bs-table-color`, `--bs-heading-color`, `--bs-border-color`, `--bs-link-color`, etc.
5. **~70 CSS override rules** in `style.css` handle Bootstrap utility classes that use hardcoded values (`.bg-white`, `.text-muted`, `.card`, `.table`, `.form-control`, `.modal-content`, etc.)

When switching back to a light theme, all Bootstrap variable overrides are removed and the `data-theme` attribute is updated.

### Adding Authentication Backend

Replace the mock functions in `js/app.js`:

| Function                    | What To Replace With                    |
|-----------------------------|-----------------------------------------|
| `login(email, password)`    | Your authentication API call            |
| `logout()`                  | Session/token cleanup + API call        |
| `checkAuth()`               | Token validation / session check        |
| `getUser()`                 | Fetch user profile from your backend    |

### Script Load Order

Both scripts must be loaded in this order at the bottom of every page:

```html
<script src="js/theme-loader.js"></script>  <!-- Must be first: defines ThemeLoader class -->
<script src="js/app.js"></script>            <!-- Must be second: uses themeLoader instance -->
```

`app.js` registers form handlers and renders content **synchronously first**, then initializes the theme switcher **asynchronously last** (wrapped in try/catch) to ensure page functionality is never blocked by theme loading.

---

## Browser Support

| Browser                          | Supported          |
|----------------------------------|--------------------|
| Google Chrome (latest)           | Yes                |
| Mozilla Firefox (latest)         | Yes                |
| Microsoft Edge (latest)          | Yes                |
| Apple Safari (latest)            | Yes                |
| Opera (latest)                   | Yes                |
| Mobile Chrome / Safari           | Yes                |
| Internet Explorer                | No (discontinued)  |

---

## FAQ

### General

**Q: Do I need to install anything?**
A: No. Just open `index.html` in your web browser.

**Q: Does this work offline?**
A: Partially. Pages open and themes work, but images (Unsplash) and fonts (Google Fonts) need internet. Replace with local files for full offline support.

**Q: Can I use this for a real business?**
A: Yes, as a front-end template. A developer would need to connect it to a backend/database for real accounts, payments, and product data.

**Q: Is this free to use?**
A: Yes. See License below.

### Themes

**Q: Theme changes don't stick after closing the browser.**
A: Theme preferences use localStorage, which is cleared in private/incognito mode. Use a normal browser window.

**Q: I added a theme but it doesn't show up.**
A: Custom themes in `themes.config.json` require a local server. Also validate your JSON at jsonlint.com.

**Q: How many themes can I add?**
A: No limit. The switcher popout scrolls if there are many themes.

### Customization

**Q: I changed text but nothing changed on screen.**
A: Save the file and hard-refresh: `Ctrl+Shift+R` (Windows) / `Cmd+Shift+R` (Mac).

**Q: Can I add more pages?**
A: Yes. Copy an existing page, change the content, update the sidebar links on all pages. See [Customization Guide](#adding-a-new-page).

**Q: How do I replace demo data with real data?**
A: Edit the `MOCK_*` constants in `js/app.js`, or replace them with API calls for a production site.

---

## License

MIT License — free to use for personal and commercial projects.
