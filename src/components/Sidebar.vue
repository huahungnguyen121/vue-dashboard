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
                { title: "dashboard", icon: "dashboard", active: false },
                {
                    title: "statistics",
                    icon: "signal_cellular_alt",
                    sub: [
                        {
                            title: "charts",
                            active: false,
                        },
                        {
                            title: "progressBars",
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
                            active: false,
                        },
                        {
                            title: "mediumEditor",
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
                            active: false,
                        },
                        {
                            title: "cards",
                            active: false,
                        },
                        {
                            title: "chat",
                            active: false,
                        },
                        {
                            title: "chips",
                            active: false,
                        },
                        {
                            title: "collapses",
                            active: false,
                        },
                        {
                            title: "colors",
                            active: false,
                        },
                        {
                            title: "fileUpload",
                            active: false,
                        },
                        {
                            title: "grid",
                            active: false,
                        },
                        {
                            title: "icons",
                            active: false,
                        },
                        {
                            title: "lists",
                            active: false,
                        },
                        {
                            title: "modals",
                            active: false,
                        },
                        {
                            title: "notifications",
                            active: false,
                        },
                        {
                            title: "popovers",
                            active: false,
                        },
                        {
                            title: "rating",
                            active: false,
                        },
                        {
                            title: "sliders",
                            active: false,
                        },
                        {
                            title: "spacing",
                            active: false,
                        },
                        {
                            title: "spinners",
                            active: false,
                        },
                        {
                            title: "tabs",
                            active: false,
                        },
                        {
                            title: "timelines",
                            active: false,
                        },
                        {
                            title: "treeView",
                            active: false,
                        },
                        {
                            title: "typography",
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
                            active: false,
                        },
                        {
                            title: "yandex-maps",
                            active: false,
                        },
                        {
                            title: "leaflet-maps",
                            active: false,
                        },
                        {
                            title: "bubble-maps",
                            active: false,
                        },
                        {
                            title: "line-maps",
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
                            active: false,
                        },
                        {
                            title: "404-pages",
                            active: false,
                        },
                        {
                            title: "faq",
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

/* override UI lib */
.va-collapse__header__content {
    box-shadow: none !important;
    border-radius: 0 !important;
    background-color: transparent !important;
    padding: 0.75rem 1rem !important;
}

.va-sidebar-item-title {
    display: flex;
    align-items: center;
}

.va-collapse__body {
    margin-top: 0 !important;
}

/* .va-collapse__header__content:hover {
    background-color: attr(data-hover-color) !important;
} */
</style>
