export default [
    {
        path: "pages/404-pages",
        name: "404-pages",
        component: () => import("../../views/NotFoundView/NotFoundView.vue"),
    },
    {
        path: "pages/faq",
        name: "faq",
        component: () => import("../../views/FaqView/FaqView.vue"),
    },
];
