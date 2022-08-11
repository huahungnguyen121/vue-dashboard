import { createApp } from "vue";
import mitt from "mitt";
import App from "./App.vue";
import router from "./router";
import { createVuestic } from "vuestic-ui";
import { THEMES } from "./themes/themes.js";
import "vuestic-ui/dist/vuestic-ui.css";
import i18n from "./utils/i18n";

const app = i18n(createApp(App));

app.use(router);

app.use(
    createVuestic({
        config: {
            colors: THEMES[0].colors,
            components: THEMES[0].components,
        },
    })
);

app.config.globalProperties.$emitter = mitt();

app.mount("#app");
