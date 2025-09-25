/** @type {import('tailwindcss').Config}*/
const config = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                franklin: [
                    'Libre Franklin',
                    'sans-serif'
                ],
            },
            u
        },
    },
    plugins: [require('@tailwindcss/typography')],

};

export default config;
