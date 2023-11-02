/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "green-default": "#04f13d",
                "background-default": "#141218"
            }
        },
    },
    plugins: [],
};

