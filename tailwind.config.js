module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            minHeight: {
                "1/2": "50%",
            },
            fontFamily: {
                rubik: ["Rubik", "sans-serif"],
            },
            width: {
                0.5: "0.5px",
            },
            colors: {
                fmPurple: {
                    light: "#8194df",
                    DEFAULT: "#3e52a3",
                },
            },
            zIndex: {
                100: "100",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")({ strategy: "class" })],
};
