module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
                popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
                primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
                secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
                muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
                accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
                destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                obsidian: {
                    bg: '#0A0A0C',
                    panel: '#121214',
                    line: '#1A1C1A',
                    text: '#E8E6E1',
                    sub: '#A3A3A0',
                    muted: '#70706D',
                    sage: '#4A5D4E',
                    moss: '#6B8570',
                },
            },
            fontFamily: {
                display: ['"Cormorant Garamond"', 'serif'],
                body: ['Outfit', 'sans-serif'],
                mono: ['"Space Mono"', 'monospace'],
            },
            borderRadius: {
                lg: '0',
                md: '0',
                sm: '0',
            },
            keyframes: {
                'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
                'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
            },
            animation: {
                'accordion-down': 'accordion-down 0.3s ease-out',
                'accordion-up': 'accordion-up 0.3s ease-out',
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
