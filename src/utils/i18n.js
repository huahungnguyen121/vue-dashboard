import i18next from "i18next";
import i18nVue from "i18next-vue";
import en from "../translations/en.json";
import vi from "../translations/vi.json";

function formatJSON(json) {
    return { translation: json };
}

formatJSON(en);

i18next.init({
    fallbackLng: "en",
    resources: {
        vi: formatJSON(vi),
        en: formatJSON(en),
    },
});

export default function (app) {
    app.use(i18nVue, { i18next });
    return app;
}
