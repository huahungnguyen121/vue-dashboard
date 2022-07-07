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
                    name: "/",
                    icon: "dashboard",
                    active: true,
                },
                {
                    title: "statistics",
                    icon: "signal_cellular_alt",
                    sub: [
                        {
                            title: "charts",
                            name: "/statistics/charts",
                            active: false,
                        },
                        {
                            title: "progressBars",
                            name: "/statistics/progress-bars",
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
                            name: "/forms/form-elements",
                            active: false,
                        },
                        {
                            title: "mediumEditor",
                            name: "/forms/medium-editor",
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
                            name: "/tables/markup-tables",
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
                            name: "/ui-elements/buttons",
                            active: false,
                        },
                        {
                            title: "cards",
                            name: "/ui-elements/cards",
                            active: false,
                        },
                        {
                            title: "chat",
                            name: "/ui-elements/chat",
                            active: false,
                        },
                        {
                            title: "chips",
                            name: "/ui-elements/chips",
                            active: false,
                        },
                        {
                            title: "collapses",
                            name: "/ui-elements/collapses",
                            active: false,
                        },
                        {
                            title: "colors",
                            name: "/ui-elements/colors",
                            active: false,
                        },
                        {
                            title: "fileUpload",
                            name: "/ui-elements/file-upload",
                            active: false,
                        },
                        {
                            title: "grid",
                            name: "/ui-elements/grid",
                            active: false,
                        },
                        {
                            title: "icons",
                            name: "/ui-elements/icons",
                            active: false,
                        },
                        {
                            title: "lists",
                            name: "/ui-elements/lists",
                            active: false,
                        },
                        {
                            title: "modals",
                            name: "/ui-elements/modals",
                            active: false,
                        },
                        {
                            title: "notifications",
                            name: "/ui-elements/notifications",
                            active: false,
                        },
                        {
                            title: "popovers",
                            name: "/ui-elements/popovers",
                            active: false,
                        },
                        {
                            title: "rating",
                            name: "/ui-elements/rating",
                            active: false,
                        },
                        {
                            title: "sliders",
                            name: "/ui-elements/sliders",
                            active: false,
                        },
                        {
                            title: "spacing",
                            name: "/ui-elements/spacing",
                            active: false,
                        },
                        {
                            title: "spinners",
                            name: "/ui-elements/spinnners",
                            active: false,
                        },
                        {
                            title: "tabs",
                            name: "/ui-elements/tabs",
                            active: false,
                        },
                        {
                            title: "timelines",
                            name: "/ui-elements/timelines",
                            active: false,
                        },
                        {
                            title: "treeView",
                            name: "/ui-elements/tree-view",
                            active: false,
                        },
                        {
                            title: "typography",
                            name: "/ui-elements/typography",
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
                            name: "/maps/google-maps",
                            active: false,
                        },
                        {
                            title: "yandex-maps",
                            name: "/maps/yandex-maps",
                            active: false,
                        },
                        {
                            title: "leaflet-maps",
                            name: "/maps/leaflet-maps",
                            active: false,
                        },
                        {
                            title: "bubble-maps",
                            name: "/maps/bubble-maps",
                            active: false,
                        },
                        {
                            title: "line-maps",
                            name: "/maps/line-maps",
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
                            name: "login-signup",
                            active: false,
                        },
                        {
                            title: "404-pages",
                            name: "404-pages",
                            active: false,
                        },
                        {
                            title: "faq",
                            name: "faq",
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

/* .va-collapse__header__content:hover {
    background-color: attr(data-hover-color) !important;
} */
</style>
