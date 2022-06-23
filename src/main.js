import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createVuestic } from "vuestic-ui";
import Themes from "./assets/themes.js";
import "vuestic-ui/dist/vuestic-ui.css";
import i18n from "./utils/i18n";

const app = i18n(createApp(App));

app.use(router);

app.use(
    createVuestic({
        config: {
            colors: Themes.LIGHT,
        },
    })
);

app.mount("#app");
