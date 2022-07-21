export default [
    {
        title: "dashboard",
        path: "/dashboard",
        icon: "dashboard",
        active: true,
    },
    {
        title: "statistics",
        icon: "signal_cellular_alt",
        sub: [
            {
                title: "charts",
                path: "/dashboard/statistics/charts",
                active: false,
            },
            {
                title: "progressBars",
                path: "/dashboard/statistics/progress-bars",
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
                path: "/dashboard/forms/form-elements",
                active: false,
            },
            {
                title: "mediumEditor",
                path: "/dashboard/forms/medium-editor",
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
                path: "/dashboard/tables/markup-tables",
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
                path: "/dashboard/ui-elements/buttons",
                active: false,
            },
            {
                title: "cards",
                path: "/dashboard/ui-elements/cards",
                active: false,
            },
            {
                title: "chat",
                path: "/dashboard/ui-elements/chat",
                active: false,
            },
            {
                title: "chips",
                path: "/dashboard/ui-elements/chips",
                active: false,
            },
            {
                title: "collapses",
                path: "/dashboard/ui-elements/collapses",
                active: false,
            },
            {
                title: "colors",
                path: "/dashboard/ui-elements/colors",
                active: false,
            },
            {
                title: "fileUpload",
                path: "/dashboard/ui-elements/file-upload",
                active: false,
            },
            {
                title: "grid",
                path: "/dashboard/ui-elements/grid",
                active: false,
            },
            {
                title: "icons",
                path: "/dashboard/ui-elements/icons",
                active: false,
            },
            {
                title: "lists",
                path: "/dashboard/ui-elements/lists",
                active: false,
            },
            {
                title: "modals",
                path: "/dashboard/ui-elements/modals",
                active: false,
            },
            {
                title: "notifications",
                path: "/dashboard/ui-elements/notifications",
                active: false,
            },
            {
                title: "popovers",
                path: "/dashboard/ui-elements/popovers",
                active: false,
            },
            {
                title: "rating",
                path: "/dashboard/ui-elements/rating",
                active: false,
            },
            {
                title: "sliders",
                path: "/dashboard/ui-elements/sliders",
                active: false,
            },
            {
                title: "spacing",
                path: "/dashboard/ui-elements/spacing",
                active: false,
            },
            {
                title: "spinners",
                path: "/dashboard/ui-elements/spinners",
                active: false,
            },
            {
                title: "tabs",
                path: "/dashboard/ui-elements/tabs",
                active: false,
            },
            {
                title: "timelines",
                path: "/dashboard/ui-elements/timelines",
                active: false,
            },
            {
                title: "treeView",
                path: "/dashboard/ui-elements/tree-view",
                active: false,
            },
            {
                title: "typography",
                path: "/dashboard/ui-elements/typography",
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
                path: "/dashboard/maps/google-maps",
                active: false,
            },
            {
                title: "yandex-maps",
                path: "/dashboard/maps/yandex-maps",
                active: false,
            },
            {
                title: "leaflet-maps",
                path: "/dashboard/maps/leaflet-maps",
                active: false,
            },
            {
                title: "bubble-maps",
                path: "/dashboard/maps/bubble-maps",
                active: false,
            },
            {
                title: "line-maps",
                path: "/dashboard/maps/line-maps",
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
                path: "/auth/pages/login-signup",
                active: false,
            },
            {
                title: "404-pages",
                path: "/dashboard/pages/404-pages",
                active: false,
            },
            {
                title: "faq",
                path: "/dashboard/pages/faq",
                active: false,
            },
        ],
        collapse: false,
    },
];
