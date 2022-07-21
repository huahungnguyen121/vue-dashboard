import { createRouter, createWebHistory } from "vue-router";
import dashboardRoutes from "./routes/dashboard-routes";
import statisticsRoutes from "./routes/statistics-routes";
import formsRoutes from "./routes/forms-routes";
import tablesRoutes from "./routes/tables-routes";
import uiElementsRoutes from "./routes/ui-elements-routes";
import pagesRoutes from "./routes/pages-routes";
import authRoutes from "./routes/auth-routes";
import notFoundRoutes from "./routes/404-routes";
import mapsRoutes from "./routes/maps-routes";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/dashboard",
            name: "main",
            component: () =>
                import("../components/layouts/DashboardLayout.vue"),
            children: [
                ...dashboardRoutes,
                ...statisticsRoutes,
                ...formsRoutes,
                ...tablesRoutes,
                ...uiElementsRoutes,
                ...mapsRoutes,
                ...pagesRoutes,
            ],
        },
        {
            path: "/auth",
            name: "auth",
            component: () =>
                import("../components/layouts/FullscreenLayout.vue"),
            children: [...authRoutes],
        },
        {
            path: "/404",
            name: "404",
            component: () =>
                import("../components/layouts/FullscreenLayout.vue"),
            children: [...notFoundRoutes],
        },
        {
            path: "/:pathMatch(.*)*", // Page Not Found
            name: "notfound",
            redirect: { name: "dashboard" }, // Redirect to home page
        },
    ],
});

export default router;
