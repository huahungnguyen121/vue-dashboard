export default [
    {
        path: "ui-elements/buttons",
        name: "buttons",
        component: () =>
            import("../../views/UiElementsView/Buttons/ButtonsView.vue"),
    },
    {
        path: "ui-elements/cards",
        name: "cards",
        component: () =>
            import("../../views/UiElementsView/Cards/CardsView.vue"),
    },
    {
        path: "ui-elements/chat",
        name: "chat",
        component: () => import("../../views/UiElementsView/Chat/ChatView.vue"),
    },
    {
        path: "ui-elements/chips",
        name: "chips",
        component: () =>
            import("../../views/UiElementsView/Chips/ChipsView.vue"),
    },
    {
        path: "ui-elements/collapses",
        name: "collapses",
        component: () =>
            import("../../views/UiElementsView/Collapses/CollapsesView.vue"),
    },
    {
        path: "ui-elements/colors",
        name: "colors",
        component: () =>
            import("../../views/UiElementsView/Colors/ColorsView.vue"),
    },
    {
        path: "ui-elements/file-upload",
        name: "fileUpload",
        component: () =>
            import("../../views/UiElementsView/FileUpload/FileUploadView.vue"),
    },
    {
        path: "ui-elements/grid",
        name: "grid",
        component: () => import("../../views/UiElementsView/Grid/GridView.vue"),
    },
    {
        path: "ui-elements/icons",
        name: "icons",
        component: () =>
            import("../../views/UiElementsView/Icons/IconsView.vue"),
    },
    {
        path: "ui-elements/icons/:set",
        name: "icons-set",
        component: () =>
            import("../../views/UiElementsView/Icons/IconsSetView.vue"),
    },
    {
        path: "ui-elements/lists",
        name: "lists",
        component: () =>
            import("../../views/UiElementsView/Lists/ListsView.vue"),
    },
    {
        path: "ui-elements/modals",
        name: "modals",
        component: () =>
            import("../../views/UiElementsView/Modals/ModalsView.vue"),
    },
    {
        path: "ui-elements/notifications",
        name: "notifications",
        component: () =>
            import(
                "../../views/UiElementsView/Notifications/NotificationsView.vue"
            ),
    },
    {
        path: "ui-elements/popovers",
        name: "popovers",
        component: () =>
            import("../../views/UiElementsView/Popovers/PopoversView.vue"),
    },
    {
        path: "ui-elements/rating",
        name: "rating",
        component: () =>
            import("../../views/UiElementsView/Rating/RatingView.vue"),
    },
    {
        path: "ui-elements/sliders",
        name: "sliders",
        component: () =>
            import("../../views/UiElementsView/Sliders/SlidersView.vue"),
    },
    {
        path: "ui-elements/spacing",
        name: "spacing",
        component: () =>
            import("../../views/UiElementsView/Spacing/SpacingView.vue"),
    },
    {
        path: "ui-elements/spinners",
        name: "spinners",
        component: () =>
            import("../../views/UiElementsView/Spinners/SpinnersView.vue"),
    },
    {
        path: "ui-elements/tabs",
        name: "tabs",
        component: () => import("../../views/UiElementsView/Tabs/TabsView.vue"),
    },
    {
        path: "ui-elements/timelines",
        name: "timelines",
        component: () =>
            import("../../views/UiElementsView/Timelines/TimelinesView.vue"),
    },
    {
        path: "ui-elements/tree-view",
        name: "treeView",
        component: () =>
            import("../../views/UiElementsView/TreeView/TreeView.vue"),
    },
    {
        path: "ui-elements/typography",
        name: "typography",
        component: () =>
            import("../../views/UiElementsView/Typography/TypographyView.vue"),
    },
];
