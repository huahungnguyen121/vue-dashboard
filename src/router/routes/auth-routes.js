export default [
    {
        path: "pages/login-signup",
        name: "login-signup",
        component: () => import("../../views/AuthView/AuthView.vue"),
        redirect: { name: "login" },
        children: [
            {
                path: "login",
                name: "login",
                component: () =>
                    import("../../views/AuthView/tabs/LoginTab.vue"),
            },
            {
                path: "signup",
                name: "signup",
                component: () =>
                    import("../../views/AuthView/tabs/SignupTab.vue"),
            },
        ],
    },
];
