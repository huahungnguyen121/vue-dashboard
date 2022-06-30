// export default {
//     LIGHT: {
//         primary: "rgb(21, 78, 193)",
//         secondary: "rgb(118, 124, 136)",
//         success: "rgb(61, 146, 9)",
//         info: "rgb(44, 130, 224)",
//         danger: "rgb(228, 34, 34)",
//         warning: "rgb(255, 212, 58)",
//         background: "rgb(246, 247, 246)",
//         divider: "rgb(225, 233, 248)",
//         gray: "rgb(118, 124, 136)",
//         dark: "rgb(38, 40, 36)",
//         white: "rgb(255, 255, 255)",
//     },
//     SEMI_DARK: {
//         primary: "rgb(111, 146, 218)",
//         secondary: "rgb(168, 174, 186)",
//         success: "rgb(61, 146, 9)",
//         info: "rgb(44, 130, 224)",
//         danger: "rgb(228, 34, 34)",
//         warning: "rgb(255, 212, 58)",
//         background: "rgb(246, 247, 246)",
//         divider: "rgb(225, 233, 248)",
//         gray: "rgb(118, 124, 136)",
//         dark: "rgb(38, 40, 36)",
//         white: "rgb(255, 255, 255)",
//     },
//     ORIGINAL: {
//         primary: "rgb(110, 220, 125)",
//         secondary: "rgb(168, 174, 186)",
//         success: "rgb(118, 225, 141)",
//         info: "rgb(44, 130, 224)",
//         danger: "rgb(227, 75, 74)",
//         warning: "rgb(255, 194, 0)",
//         background: "rgb(238, 238, 238)",
//         divider: "rgb(225, 233, 248)",
//         gray: "rgb(118, 124, 136)",
//         dark: "rgb(38, 40, 36)",
//         white: "rgb(255, 255, 255)",
//     },
// };

export const THEME_NAMES = {
    LIGHT: "light",
    DARK: "dark",
    SEMI_DARK: "semi_dark",
    ORIGINAL: "original",
};

export const THEMES = [
    {
        name: THEME_NAMES.LIGHT,
        colors: {
            primary: "#154ec1",
            secondary: "#767c88",
            background: "#f6f7f6",
            success: "#3d9209",
            info: "#2c82e0",
            danger: "#e42222",
            warning: "#ffd43a",
            white: "#ffffff",
            dark: "#262824",
            gray: "#767c88",
        },
        components: {
            VaNavbar: {
                color: "white",
                textColor: "dark",
            },
            VaSidebar: {
                color: "white",
                textColor: "dark",
            },
            VaCard: {
                color: "white",
            },
            VaCardContent: {
                textColor: "dark",
            },
            VaCardTitle: {
                textColor: "dark",
            },
        },
    },
    {
        name: THEME_NAMES.DARK,
        colors: {
            primary: "#6F92DA",
            secondary: "#A8AEBA",
            background: "#2f302d",
            success: "#3d9209",
            info: "#2c82e0",
            danger: "#e42222",
            warning: "#ffd43a",
            white: "#262824",
            dark: "#ffffff",
            gray: "#f6f7f6",
        },
        components: {
            VaNavbar: {
                color: "white",
                textColor: "dark",
            },
            VaSidebar: {
                color: "white",
                textColor: "dark",
            },
            VaCard: {
                color: "white",
            },
            VaCardContent: {
                textColor: "dark",
            },
            VaCardTitle: {
                textColor: "dark",
            },
        },
    },
    {
        name: THEME_NAMES.SEMI_DARK,
        colors: {
            primary: "#6F92DA",
            secondary: "#A8AEBA",
            success: "#3d9209",
            info: "#2c82e0",
            danger: "#e42222",
            warning: "#ffd43a",
            background: "#f6f7f6",
            white: "#ffffff",
            dark: "#262824",
            gray: "#767c88",
        },
        components: {
            VaNavbar: {
                color: "dark",
                textColor: "white",
            },
            VaSidebar: {
                color: "dark",
                textColor: "white",
            },
            VaCard: {
                color: "white",
            },
            VaCardContent: {
                textColor: "dark",
            },
            VaCardTitle: {
                textColor: "dark",
            },
        },
    },
    {
        name: THEME_NAMES.ORIGINAL,
        colors: {
            primary: "#6EDC7D",
            secondary: "#A8AEBA",
            background: "#eeeeee",
            success: "#76E18D",
            info: "#2c82e0",
            danger: "#e34b4a",
            warning: "#ffc200",
            gray: "#767c88",
            white: "#ffffff",
            dark: "#262824",
        },
        components: {
            VaNavbar: {
                color: "#1E4CBD",
                textColor: "primary",
            },
            VaSidebar: {
                color: "#0A2E80",
                textColor: "primary",
            },
            VaCard: {
                color: "widget",
            },
            VaCardContent: {
                textColor: "dark",
            },
            VaCardTitle: {
                textColor: "dark",
            },
        },
    },
];

export const getTheme = (themeName) => {
    const theme = THEMES.find((theme) => theme.name === themeName);

    if (!theme) throw Error("Cannot find theme");

    return theme;
};
