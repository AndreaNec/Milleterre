const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    content: [
        './src/**/*.tsx',
    ],
    theme: {
        extend: {},
        colors: {
            popupsbg: colors.black,
            neutral: colors.neutral,
            primary: colors.indigo,
            firstxt: colors.black,
            primarytxt: colors.white,
            warning: colors.yellow,
            warningtxt: colors.black,
            error: colors.red,
            errortxt: colors.white,
        }
    },
    variants: {},
    plugins: [],
}