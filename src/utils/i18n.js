import i18next from "i18next";
import i18nVue from "i18next-vue";

i18next.init({
    fallbackLng: "en",
    resources: {
        vi: {
            translation: {
                message: "Xin chào!",
                content: "Xin chào mọi người!",
            },
        },
        en: {
            translation: {
                message: "Hello!",
                content: "Hello everyone!",
            },
        },
    },
});

export default function (app) {
    app.use(i18nVue, { i18next });
    return app;
}
