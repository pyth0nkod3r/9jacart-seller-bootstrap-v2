/**
 * SellerHub Theme Loader
 * 
 * A pluggable theming system that loads themes from themes.config.json
 * and applies them dynamically via CSS custom properties.
 * 
 * Usage:
 * 1. Add themes to themes.config.json
 * 2. ThemeLoader will automatically load and apply themes
 * 3. Use ThemeLoader.setTheme('themeId') to switch themes
 */

class ThemeLoader {
  constructor() {
    this.config = null;
    this.currentTheme = null;
    this.themes = {};
    this.storageKey = 'sellerhub-theme';
    this.isLoaded = false;
    this.loadPromise = null;
  }

  /**
   * Initialize the theme loader
   * Loads configuration and applies saved/default theme
   */
  async init() {
    if (this.isLoaded) return;
    if (this.loadPromise) return this.loadPromise;

    this.loadPromise = this._loadConfig();
    await this.loadPromise;
    this.isLoaded = true;
    return this;
  }

  /**
   * Load configuration from themes.config.json
   */
  async _loadConfig() {
    try {
      // Try to fetch the config file
      const response = await fetch('./themes.config.json');

      if (!response.ok) {
        console.warn('[ThemeLoader] Config file not found, using embedded defaults');
        this.config = this._getDefaultConfig();
      } else {
        this.config = await response.json();
      }
    } catch (error) {
      console.warn('[ThemeLoader] Failed to load config:', error);
      this.config = this._getDefaultConfig();
    }

    // Store themes
    this.themes = this.config.themes || {};
    this.storageKey = this.config.storageKey || 'sellerhub-theme';

    // Mark as loaded BEFORE calling setTheme to prevent circular await deadlock
    // (setTheme checks isLoaded and calls init() if false, which would hang forever)
    this.isLoaded = true;

    // Determine initial theme
    const savedTheme = localStorage.getItem(this.storageKey);
    const initialTheme = savedTheme || this.config.defaultTheme || 'default';

    // Apply initial theme
    await this.setTheme(initialTheme, false);

    console.log('[ThemeLoader] Initialized with', Object.keys(this.themes).length, 'themes');
  }

  /**
   * Get fallback configuration if external config fails
   */
  _getDefaultConfig() {
    return {
      version: '1.0.0',
      defaultTheme: 'default',
      storageKey: 'sellerhub-theme',
      themes: {
        default: {
          name: 'Default Green',
          description: 'Clean green theme with vibrant accent colors',
          isDark: false,
          colors: {
            primary: '#16a34a',
            primaryHover: '#15803d',
            primaryLight: '#22c55e',
            secondary: '#64748b',
            accent: '#f59e0b',
            background: '#ffffff',
            surface: '#f8fafc',
            textPrimary: '#1e293b',
            textSecondary: '#64748b',
            textMuted: '#94a3b8',
            border: '#e2e8f0',
            success: '#22c55e',
            warning: '#f59e0b',
            danger: '#ef4444',
            info: '#3b82f6',
            sidebarBg: '#1e293b',
            sidebarText: '#f1f5f9',
            cardShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
          }
        },
        dark: {
          name: 'Dark Mode',
          description: 'Dark theme for reduced eye strain',
          isDark: true,
          colors: {
            primary: '#22c55e',
            primaryHover: '#16a34a',
            primaryLight: '#4ade80',
            secondary: '#94a3b8',
            accent: '#f59e0b',
            background: '#0f172a',
            surface: '#1e293b',
            textPrimary: '#f1f5f9',
            textSecondary: '#94a3b8',
            textMuted: '#64748b',
            border: '#334155',
            success: '#22c55e',
            warning: '#f59e0b',
            danger: '#ef4444',
            info: '#3b82f6',
            sidebarBg: '#020617',
            sidebarText: '#f1f5f9',
            cardShadow: '0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3)'
          }
        },
        ocean: {
          name: 'Ocean Blue',
          description: 'Calm blue theme inspired by the ocean',
          isDark: false,
          colors: {
            primary: '#0ea5e9',
            primaryHover: '#0284c7',
            primaryLight: '#38bdf8',
            secondary: '#0369a1',
            accent: '#06b6d4',
            background: '#f0f9ff',
            surface: '#e0f2fe',
            textPrimary: '#0c4a6e',
            textSecondary: '#0369a1',
            textMuted: '#0284c7',
            border: '#bae6fd',
            success: '#22c55e',
            warning: '#f59e0b',
            danger: '#ef4444',
            info: '#0ea5e9',
            sidebarBg: '#0c4a6e',
            sidebarText: '#f0f9ff',
            cardShadow: '0 1px 3px 0 rgb(14 165 233 / 0.1), 0 1px 2px -1px rgb(14 165 233 / 0.1)'
          }
        },
        purple: {
          name: 'Purple Violet',
          description: 'Modern purple theme with vibrant violet accent colors',
          isDark: false,
          colors: {
            primary: '#8b5cf6',
            primaryHover: '#7c3aed',
            primaryLight: '#a78bfa',
            secondary: '#6b21a8',
            accent: '#c084fc',
            background: '#faf5ff',
            surface: '#f3e8ff',
            textPrimary: '#4c1d95',
            textSecondary: '#6b21a8',
            textMuted: '#9333ea',
            border: '#e9d5ff',
            success: '#22c55e',
            warning: '#f59e0b',
            danger: '#ef4444',
            info: '#8b5cf6',
            sidebarBg: '#4c1d95',
            sidebarText: '#faf5ff',
            cardShadow: '0 1px 3px 0 rgb(139 92 246 / 0.1), 0 1px 2px -1px rgb(139 92 246 / 0.1)'
          }
        },
        sunset: {
          name: 'Sunset Orange',
          description: 'Warm sunset theme with vibrant orange accent colors',
          isDark: false,
          colors: {
            primary: '#f97316',
            primaryHover: '#ea580c',
            primaryLight: '#fb923c',
            secondary: '#92400e',
            accent: '#f59e0b',
            background: '#fffbeb',
            surface: '#fef3c7',
            textPrimary: '#78350f',
            textSecondary: '#92400e',
            textMuted: '#b45309',
            border: '#fde68a',
            success: '#22c55e',
            warning: '#f59e0b',
            danger: '#ef4444',
            info: '#3b82f6',
            sidebarBg: '#78350f',
            sidebarText: '#fffbeb',
            cardShadow: '0 1px 3px 0 rgb(249 115 22 / 0.1), 0 1px 2px -1px rgb(249 115 22 / 0.1)'
          }
        }
      },
      colorMapping: {
        primary: '--primary-color',
        primaryHover: '--primary-hover',
        primaryLight: '--primary-light',
        secondary: '--secondary-color',
        accent: '--accent-color',
        background: '--background-color',
        surface: '--surface-color',
        textPrimary: '--text-primary',
        textSecondary: '--text-secondary',
        textMuted: '--text-muted',
        border: '--border-color',
        success: '--success-color',
        warning: '--warning-color',
        danger: '--danger-color',
        info: '--info-color',
        sidebarBg: '--sidebar-bg',
        sidebarText: '--sidebar-text',
        cardShadow: '--card-shadow'
      }
    };
  }

  /**
   * Set the active theme
   * @param {string} themeId - The theme ID to apply
   * @param {boolean} save - Whether to save to localStorage
   */
  async setTheme(themeId, save = true) {
    // Wait for init if not loaded
    if (!this.isLoaded) {
      await this.init();
    }

    const theme = this.themes[themeId];
    if (!theme) {
      console.warn(`[ThemeLoader] Theme "${themeId}" not found`);
      return false;
    }

    // Apply CSS variables
    this._applyTheme(theme);

    // Update document theme attribute
    document.documentElement.setAttribute('data-theme', themeId);

    // Add/remove dark class — keep legacy bootstrap classes AND React-aligned ones
    if (theme.isDark) {
      document.documentElement.classList.add('dark-theme', 'dark');
      document.documentElement.classList.remove('light-theme', 'light');
    } else {
      document.documentElement.classList.remove('dark-theme', 'dark');
      document.documentElement.classList.add('light-theme', 'light');
    }

    // Save preference
    this.currentTheme = themeId;
    if (save) {
      localStorage.setItem(this.storageKey, themeId);
    }

    // Dispatch event for other components
    window.dispatchEvent(new CustomEvent('themechange', {
      detail: { themeId, theme }
    }));

    console.log(`[ThemeLoader] Applied theme: ${theme.name}`);
    return true;
  }

  /**
   * Apply theme colors as CSS custom properties
   */
  _applyTheme(theme) {
    const root = document.documentElement;
    const colors = theme.colors;
    const mapping = this.config.colorMapping || this._getDefaultColorMapping();
    const reactAliases = this.config.reactAliases || {};

    // Apply each color as a CSS variable (legacy bootstrap names + React aliases)
    Object.entries(colors).forEach(([key, value]) => {
      const cssVar = mapping[key] || `--${this._camelToKebab(key)}`;
      root.style.setProperty(cssVar, value);

      // Also write any React-aligned alias tokens for this color
      const aliases = reactAliases[key];
      if (Array.isArray(aliases)) {
        aliases.forEach((aliasVar) => {
          if (typeof aliasVar === 'string' && aliasVar.startsWith('--')) {
            root.style.setProperty(aliasVar, value);
          }
        });
      }
    });

    // Constant React tokens that don't come from any single bootstrap color.
    // These are always white-on-coloured for primary surfaces, and the sidebar's
    // primary/accent slots all use the theme's primary colour.
    const white = '#ffffff';
    root.style.setProperty('--primary-foreground', white);
    root.style.setProperty('--sidebar-primary', colors.primary);
    root.style.setProperty('--sidebar-primary-foreground', white);
    root.style.setProperty('--sidebar-accent', colors.primary);
    root.style.setProperty('--sidebar-accent-foreground', white);
    root.style.setProperty('--sidebar-ring', colors.primary);

    // Shared scalar tokens
    root.style.setProperty('--radius', '0.5rem');
    if (this.config.brand && this.config.brand.name) {
      root.style.setProperty('--brand-name', '"' + this.config.brand.name + '"');
    }

    // Override Bootstrap 5 CSS variables so Bootstrap components use correct colors
    if (theme.isDark) {
      root.style.setProperty('--card-shadow', '0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3)');
      root.style.setProperty('--bs-body-color', colors.textPrimary);
      root.style.setProperty('--bs-body-bg', colors.background);
      root.style.setProperty('--bs-emphasis-color', colors.textPrimary);
      root.style.setProperty('--bs-secondary-color', colors.textSecondary);
      root.style.setProperty('--bs-tertiary-color', colors.textMuted);
      root.style.setProperty('--bs-heading-color', colors.textPrimary);
      root.style.setProperty('--bs-border-color', colors.border);
      root.style.setProperty('--bs-table-color', colors.textPrimary);
      root.style.setProperty('--bs-table-bg', 'transparent');
      root.style.setProperty('--bs-table-border-color', colors.border);
      root.style.setProperty('--bs-table-hover-color', colors.textPrimary);
      root.style.setProperty('--bs-table-hover-bg', 'rgba(241, 245, 249, 0.05)');
      root.style.setProperty('--bs-link-color', colors.primary);
      root.style.setProperty('--bs-link-hover-color', colors.primaryHover);
    } else {
      // Reset Bootstrap variables to defaults for light themes
      const bsDefaults = [
        '--bs-body-color', '--bs-body-bg', '--bs-emphasis-color',
        '--bs-secondary-color', '--bs-tertiary-color', '--bs-heading-color',
        '--bs-border-color', '--bs-table-color', '--bs-table-bg',
        '--bs-table-border-color', '--bs-table-hover-color', '--bs-table-hover-bg',
        '--bs-link-color', '--bs-link-hover-color'
      ];
      bsDefaults.forEach(v => root.style.removeProperty(v));
    }
  }

  /**
   * Convert camelCase to kebab-case
   */
  _camelToKebab(str) {
    return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
  }

  /**
   * Get default color mapping
   */
  _getDefaultColorMapping() {
    return {
      primary: '--primary-color',
      primaryHover: '--primary-hover',
      primaryLight: '--primary-light',
      secondary: '--secondary-color',
      accent: '--accent-color',
      background: '--background-color',
      surface: '--surface-color',
      textPrimary: '--text-primary',
      textSecondary: '--text-secondary',
      textMuted: '--text-muted',
      border: '--border-color',
      success: '--success-color',
      warning: '--warning-color',
      danger: '--danger-color',
      info: '--info-color',
      sidebarBg: '--sidebar-bg',
      sidebarText: '--sidebar-text',
      cardShadow: '--card-shadow'
    };
  }

  /**
   * Get the current theme ID
   */
  getThemeId() {
    return this.currentTheme;
  }

  /**
   * Get the current theme configuration
   */
  getTheme() {
    return this.themes[this.currentTheme];
  }

  /**
   * Get all available themes
   */
  getThemes() {
    return Object.entries(this.themes).map(([id, theme]) => ({
      id,
      name: theme.name,
      description: theme.description,
      isDark: theme.isDark
    }));
  }

  /**
   * Check if current theme is dark
   */
  isDark() {
    const theme = this.getTheme();
    return theme ? theme.isDark : false;
  }

  /**
   * Toggle between light and dark themes
   */
  toggleDarkMode() {
    const currentIsDark = this.isDark();
    const themes = this.getThemes();

    // Find a theme with opposite mode
    const targetTheme = themes.find(t => t.isDark !== currentIsDark);
    if (targetTheme) {
      this.setTheme(targetTheme.id);
    }
  }

  /**
   * Register a new theme dynamically
   * @param {string} id - Unique theme ID
   * @param {object} themeConfig - Theme configuration
   */
  registerTheme(id, themeConfig) {
    this.themes[id] = themeConfig;
    console.log(`[ThemeLoader] Registered theme: ${themeConfig.name}`);
    return this;
  }

  /**
   * Remove a theme
   * @param {string} id - Theme ID to remove
   */
  removeTheme(id) {
    if (this.currentTheme === id) {
      console.warn('[ThemeLoader] Cannot remove active theme');
      return false;
    }
    delete this.themes[id];
    console.log(`[ThemeLoader] Removed theme: ${id}`);
    return true;
  }

  /**
   * Export current theme as CSS
   */
  exportCSS() {
    const theme = this.getTheme();
    if (!theme) return '';

    const mapping = this.config.colorMapping || this._getDefaultColorMapping();
    const colors = theme.colors;

    let css = ':root {\n';
    Object.entries(colors).forEach(([key, value]) => {
      const cssVar = mapping[key] || `--${this._camelToKebab(key)}`;
      css += `  ${cssVar}: ${value};\n`;
    });
    css += '}';

    return css;
  }
}

// Create singleton instance
const themeLoader = new ThemeLoader();

// Auto-initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  themeLoader.init().catch(console.error);
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ThemeLoader, themeLoader };
}
