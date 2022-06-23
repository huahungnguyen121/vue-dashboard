<template>
    <va-sidebar
        class="sidebar"
        :minimized="minimized"
        textColor="dark"
        minimizedWidth="64px"
    >
        <div class="sidebar-menu">
            <template v-for="item of items" :key="item.to">
                <va-collapse
                    class="sidebar-item"
                    v-model="item.collapse"
                    :icon="item.icon"
                >
                    <template #header>
                        <va-sidebar-item :active="item.active">
                            <va-sidebar-item-content>
                                <div class="sidebar-item-icon">
                                    <va-icon :name="item.icon" />
                                </div>
                                <va-sidebar-item-title
                                    v-if="!minimized"
                                    style="height: 24px"
                                >
                                    {{ item.title }}
                                </va-sidebar-item-title>
                                <va-icon
                                    v-if="item.sub && !item.collapse"
                                    name="expand_more"
                                />
                                <va-icon
                                    v-else-if="item.sub && item.collapse"
                                    name="expand_less"
                                />
                            </va-sidebar-item-content>
                        </va-sidebar-item>
                    </template>
                    <template v-if="item.sub" #default>
                        <va-sidebar-item
                            v-for="sub of item.sub"
                            :active="sub.active"
                        >
                            <va-sidebar-item-content>
                                <div class="sidebar-item-icon"></div>
                                <va-sidebar-item-title style="height: 24px">
                                    {{ sub.title }}
                                </va-sidebar-item-title>
                            </va-sidebar-item-content>
                        </va-sidebar-item>
                    </template>
                </va-collapse>
            </template>
        </div>
    </va-sidebar>
</template>

<script>
import { useColors } from "vuestic-ui";

export default {
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
            minimized: false,
            items: [
                { title: "Dashboard", icon: "dashboard", active: false },
                {
                    title: "Statistics",
                    icon: "signal_cellular_alt",
                    sub: [
                        {
                            title: "Charts",
                            active: false,
                        },
                        {
                            title: "Progress Bars",
                            active: false,
                        },
                    ],
                    collapse: false,
                },
                {
                    title: "Forms",
                    icon: "description",
                    sub: [
                        {
                            title: "Form Elements",
                            active: false,
                        },
                        {
                            title: "Medium Editor",
                            active: false,
                        },
                    ],
                    collapse: false,
                },
                {
                    title: "UI Elements",
                    icon: "widgets",
                    sub: [
                        {
                            title: "Button",
                            active: false,
                        },
                        {
                            title: "Cards",
                            active: false,
                        },
                        {
                            title: "Chat",
                            active: false,
                        },
                        {
                            title: "Chips",
                            active: false,
                        },
                        {
                            title: "Collapses",
                            active: false,
                        },
                        {
                            title: "Colors",
                            active: false,
                        },
                        {
                            title: "File Upload",
                            active: false,
                        },
                        {
                            title: "Grid",
                            active: false,
                        },
                        {
                            title: "Icons",
                            active: false,
                        },
                        {
                            title: "Lists",
                            active: false,
                        },
                        {
                            title: "Modals",
                            active: false,
                        },
                        {
                            title: "Notifications",
                            active: false,
                        },
                        {
                            title: "Popovers",
                            active: false,
                        },
                        {
                            title: "Rating",
                            active: false,
                        },
                        {
                            title: "Sliders",
                            active: false,
                        },
                        {
                            title: "Spacing",
                            active: false,
                        },
                        {
                            title: "Spinners",
                            active: false,
                        },
                        {
                            title: "Tabs",
                            active: false,
                        },
                        {
                            title: "Timelines",
                            active: false,
                        },
                        {
                            title: "Tree view",
                            active: false,
                        },
                        {
                            title: "Typography",
                            active: false,
                        },
                    ],
                    collapse: false,
                },
                {
                    title: "Maps",
                    icon: "near_me",
                    sub: [
                        {
                            title: "Google Maps",
                            active: false,
                        },
                        {
                            title: "Yandex Maps",
                            active: false,
                        },
                        {
                            title: "Leaflet Maps",
                            active: false,
                        },
                        {
                            title: "Bubble Maps",
                            active: false,
                        },
                        {
                            title: "Line Maps",
                            active: false,
                        },
                    ],
                    collapse: false,
                },
                {
                    title: "Pages",
                    icon: "article",
                    sub: [
                        {
                            title: "Login/Signup",
                            active: false,
                        },
                        {
                            title: "404 Pages",
                            active: false,
                        },
                        {
                            title: "Faq",
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
    background-color: white !important;
}

.sidebar-menu {
    padding: 2rem 0;
}

.sidebar-item-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
}

.sidebar-item {
    cursor: pointer;
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

/* .va-collapse__header__content:hover {
    background-color: attr(data-hover-color) !important;
} */
</style>
