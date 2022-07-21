export default [
    {
        path: "advanced",
        name: "not-found-advanced",
        component: () =>
            import("../../views/NotFoundView/layouts/NotFoundAdvanced.vue"),
    },
    {
        path: "simple",
        name: "not-found-simple",
        component: () =>
            import("../../views/NotFoundView/layouts/NotFoundSimple.vue"),
    },
    {
        path: "custom",
        name: "not-found-custom",
        component: () =>
            import("../../views/NotFoundView/layouts/NotFoundCustom.vue"),
    },
    {
        path: "large-text",
        name: "not-found-large-text",
        component: () =>
            import("../../views/NotFoundView/layouts/NotFoundLargeText.vue"),
    },
];
