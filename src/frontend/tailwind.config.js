import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            colors: {
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                valentine: {
                    pink: 'oklch(var(--valentine-pink))',
                    rose: 'oklch(var(--valentine-rose))',
                    blush: 'oklch(var(--valentine-blush))',
                    sparkle: 'oklch(var(--valentine-sparkle))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
                valentine: '0 10px 40px -10px oklch(var(--valentine-pink) / 0.3)'
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Inter', 'system-ui', 'sans-serif']
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
                    '50%': { transform: 'translateY(-20px) rotate(5deg)' }
                },
                'float-slow': {
                    '0%, 100%': { transform: 'translateY(0) translateX(0)' },
                    '50%': { transform: 'translateY(-30px) translateX(10px)' }
                },
                sparkle: {
                    '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
                    '50%': { opacity: '1', transform: 'scale(1.2)' }
                },
                'gentle-pulse': {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.05)' }
                },
                'bounce-in': {
                    '0%': { transform: 'scale(0) translateY(-50px)', opacity: '0' },
                    '60%': { transform: 'scale(1.1) translateY(0)', opacity: '1' },
                    '100%': { transform: 'scale(1) translateY(0)', opacity: '1' }
                },
                'fade-in-up': {
                    from: { opacity: '0', transform: 'translateY(30px)' },
                    to: { opacity: '1', transform: 'translateY(0)' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                float: 'float 6s ease-in-out infinite',
                'float-slow': 'float-slow 8s ease-in-out infinite',
                sparkle: 'sparkle 2s ease-in-out infinite',
                'gentle-pulse': 'gentle-pulse 3s ease-in-out infinite',
                'bounce-in': 'bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                'fade-in-up': 'fade-in-up 1.2s ease-out forwards'
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};

