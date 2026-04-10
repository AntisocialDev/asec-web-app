/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'Space Grotesk', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
            },
            colors: {
                primary: '#3F00FF',
                'primary-hover': '#2a00cc',
            },
        },
    },
    plugins: [],
}