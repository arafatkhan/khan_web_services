/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                slideInLeft: {
                    '0%': { transform: 'translateX(-100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                slideInUp: {
                    '0%': { transform: 'translateY(100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
            animation: {
                'slide-in-left': 'slideInLeft 1s ease-out',
                'slide-in-up': 'slideInUp 1s ease-out',
            },
            fontFamily: {
                pattanakaran: ['Pattanakaran', 'sans-serif'], // Add custom font to Tailwind
            },
        },
    },
    plugins: [],
};
