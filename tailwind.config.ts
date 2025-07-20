import type { Config } from "tailwindcss";

export default {
    darkMode: 'class',
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        './styles/**/*.css',
    ],
    theme: {
        extend: {
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
            },
            fontFamily: {
                DMsans: [
                    'DM Sans',
                ]
            },
            screens: {
                mobile: '0px',
                tablet: '640px',
                laptop: '1024px'
            },
            spacing: {
                col1: 'calc(100vw / 12)',
                col2: 'calc(100vw / 6)',
                col3: 'calc(100vw / 4)',
                col4: 'calc(100vw / 3)',
                col5: 'calc((100vw / 12) * 5)',
                col6: 'calc(100vw / 2)',
                col9: 'calc((100vw / 12) * 9)'
            },
            width: {
                colhalf: 'calc(100vw / 24)',
                col1: 'calc(100vw / 12)',
                col2: 'calc(100vw / 6)',
                col3: 'calc(100vw / 4)',
                col4: 'calc(100vw / 3)',
                col5: 'calc((100vw / 12) * 5)',
                col6: 'calc(100vw / 2)',
                col9: 'calc((100vw / 12) * 9)'
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            keyframes: {
                // Animación Menú Desplegable:
                'slide-down': {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
                'slide-up': {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(-100%)' },
                },
                // Animación Accordion:
                'accordion-down': {
                    from: {
                        height: '0'
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)'
                    }
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)'
                    },
                    to: {
                        height: '0'
                    }
                },
                subtleBounce: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-6%)' },
                },
            },
            animation: {
                // Animación Menú Desplegable:
                'slide-down': 'slide-down 300ms ease-in-out forwards',
                'slide-up': 'slide-up 300ms ease-in-out forwards',
                // Animación Accordion:
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                subtleBounce: 'subtleBounce 0.4s ease',
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;
