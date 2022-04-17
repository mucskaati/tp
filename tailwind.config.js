module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./app/Http/helpers.php",
    ],
    theme: {
        extend: {
            screens: {
                nav: "640px",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
