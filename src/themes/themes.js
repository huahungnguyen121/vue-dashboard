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
];

export const getTheme = (themeName) => {
    const theme = THEMES.find((theme) => theme.name === themeName);

    if (!theme) throw Error("Cannot find theme");

    return theme;
};

export const getThemeName = (colors) => {
    let matched = true;
    for (let theme of THEMES) {
        matched = true;
        for (let colorName in colors) {
            if (
                theme.colors[colorName] &&
                theme.colors[colorName] !== colors[colorName]
            ) {
                matched = false;
                break;
            }
        }

        if (matched) return theme.name;
    }

    throw Error("Cannot find theme name");
};
