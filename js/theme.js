// Theme configuration
const themeConfig = {
    light: {
        '--bg-primary': '#ffffff',
        '--bg-secondary': '#f8f9fa',
        '--text-primary': '#1af',
        '--text-secondary': '#4a4a4a',
        '--navy': '#315a77',
        '--amber': '#ffc107',
        '--border-color': '#e0e0e0',
        '--shadow-color': 'rgba(0, 0, 0, 0.1)',
        // '--card-bg': '#ffffff',
        // '--input-bg': '#f8f9fa',
        // '--hover-bg': '#f0f0f0',
        '--white': '#ffffff'
    },
    dark: {
        '--bg-primary': '#1d3557',
        '--bg-secondary': '#ffffff',
        '--text-primary': '#ffffff',
        '--text-secondary': '#4fef',
        '--navy': '#606c38',
        '--amber': '#bc6c25',
        '--border-color': '#333333',
        '--shadow-color': 'rgb(255, 0, 0)',
        '--card-bg': '#ffffff',
        '--input-bg': '#ffffff',
        '--hover-bg': '#2d2d2d',
        '--white': '#ccd5ae'
    }
};

// Theme toggle functionality
class ThemeToggle {
    constructor() {
        this.themeToggle = document.querySelector('.theme-toggle');
        this.themeToggleInput = document.querySelector('.theme-toggle__input');
        this.init();
    }

    init() {
        // Set initial theme based on system preference or stored preference
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme) {
            this.setTheme(savedTheme);
        } else {
            this.setTheme('light'); // <== Always default to light
        }
        

        // Add event listeners
        if (this.themeToggleInput) {
            this.themeToggleInput.addEventListener('change', () => this.toggleTheme());
        }

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const colors = themeConfig[theme];
        
        Object.entries(colors).forEach(([key, value]) => {
            document.documentElement.style.setProperty(key, value);
        });

        if (this.themeToggleInput) {
            this.themeToggleInput.checked = theme === 'dark';
        }

        localStorage.setItem('theme', theme);
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }
}

// Initialize theme toggle when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeToggle();
}); 