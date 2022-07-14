<template>
    <va-sidebar class="sidebar" :minimized="minimized" minimizedWidth="auto">
        <div class="sidebar-menu">
            <CompactMenuVue v-if="minimized" :items="items" />
            <FullSizeMenuVue v-else :items="items" />
        </div>
    </va-sidebar>
</template>

<script>
import { useColors } from "vuestic-ui";
import FullSizeMenuVue from "./FullSizeMenu.vue";
import CompactMenuVue from "./CompactMenu.vue";

export default {
    props: {
        minimized: {
            type: Boolean,
        },
    },
    components: {
        CompactMenuVue,
        FullSizeMenuVue,
    },
    setup() {
        const { getColor } = useColors();
        const primaryColor = getColor("primary");
        return {
            primaryColor,
        };
    },
    data() {
        return {
            value: false,
            items: [
                {
                    title: "dashboard",
                    path: "/",
                    icon: "dashboard",
                    active: true,
                },
                {
                    title: "statistics",
                    icon: "signal_cellular_alt",
                    sub: [
                        {
                            title: "charts",
                            path: "/statistics/charts",
                            active: false,
                        },
                        {
                            title: "progressBars",
                            path: "/statistics/progress-bars",
                            active: false,
                        },
                    ],
                    collapse: false,
                },
                {
                    title: "forms",
                    icon: "description",
                    sub: [
                        {
                            title: "formElements",
                            path: "/forms/form-elements",
                            active: false,
                        },
                        {
                            title: "mediumEditor",
                            path: "/forms/medium-editor",
                            active: false,
                        },
                    ],
                    collapse: false,
                },
                {
                    title: "tables",
                    icon: "table_chart",
                    sub: [
                        {
                            title: "markupTables",
                            path: "/tables/markup-tables",
                            active: false,
                        },
                    ],
                    collapse: false,
                },
                {
                    title: "uiElements",
                    icon: "widgets",
                    sub: [
                        {
                            title: "buttons",
                            path: "/ui-elements/buttons",
                            active: false,
                        },
                        {
                            title: "cards",
                            path: "/ui-elements/cards",
                            active: false,
                        },
                        {
                            title: "chat",
                            path: "/ui-elements/chat",
                            active: false,
                        },
                        {
                            title: "chips",
                            path: "/ui-elements/chips",
                            active: false,
                        },
                        {
                            title: "collapses",
                            path: "/ui-elements/collapses",
                            active: false,
                        },
                        {
                            title: "colors",
                            path: "/ui-elements/colors",
                            active: false,
                        },
                        {
                            title: "fileUpload",
                            path: "/ui-elements/file-upload",
                            active: false,
                        },
                        {
                            title: "grid",
                            path: "/ui-elements/grid",
                            active: false,
                        },
                        {
                            title: "icons",
                            path: "/ui-elements/icons",
                            active: false,
                        },
                        {
                            title: "lists",
                            path: "/ui-elements/lists",
                            active: false,
                        },
                        {
                            title: "modals",
                            path: "/ui-elements/modals",
                            active: false,
                        },
                        {
                            title: "notifications",
                            path: "/ui-elements/notifications",
                            active: false,
                        },
                        {
                            title: "popovers",
                            path: "/ui-elements/popovers",
                            active: false,
                        },
                        {
                            title: "rating",
                            path: "/ui-elements/rating",
                            active: false,
                        },
                        {
                            title: "sliders",
                            path: "/ui-elements/sliders",
                            active: false,
                        },
                        {
                            title: "spacing",
                            path: "/ui-elements/spacing",
                            active: false,
                        },
                        {
                            title: "spinners",
                            path: "/ui-elements/spinners",
                            active: false,
                        },
                        {
                            title: "tabs",
                            path: "/ui-elements/tabs",
                            active: false,
                        },
                        {
                            title: "timelines",
                            path: "/ui-elements/timelines",
                            active: false,
                        },
                        {
                            title: "treeView",
                            path: "/ui-elements/tree-view",
                            active: false,
                        },
                        {
                            title: "typography",
                            path: "/ui-elements/typography",
                            active: false,
                        },
                    ],
                    collapse: false,
                },
                {
                    title: "maps",
                    icon: "near_me",
                    sub: [
                        {
                            title: "google-maps",
                            path: "/maps/google-maps",
                            active: false,
                        },
                        {
                            title: "yandex-maps",
                            path: "/maps/yandex-maps",
                            active: false,
                        },
                        {
                            title: "leaflet-maps",
                            path: "/maps/leaflet-maps",
                            active: false,
                        },
                        {
                            title: "bubble-maps",
                            path: "/maps/bubble-maps",
                            active: false,
                        },
                        {
                            title: "line-maps",
                            path: "/maps/line-maps",
                            active: false,
                        },
                    ],
                    collapse: false,
                },
                {
                    title: "pages",
                    icon: "article",
                    sub: [
                        {
                            title: "login-signup",
                            path: "/pages/login-signup",
                            active: false,
                        },
                        {
                            title: "404-pages",
                            path: "/pages/404-pages",
                            active: false,
                        },
                        {
                            title: "faq",
                            path: "/pages/faq",
                            active: false,
                        },
                    ],
                    collapse: false,
                },
            ],
        };
    },
};
</script>

<style>
.sidebar {
    width: var(--sidebar-width);
    height: 100%;
    overflow-y: auto;
    overflow-anchor: none;
    flex-shrink: 0;
}

.sidebar-menu {
    padding: 2rem 0;
}
</style>
