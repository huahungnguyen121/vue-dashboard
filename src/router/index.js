import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView/DashboardView.vue";
import CounterView from "../views/CounterView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "dashboard",
            component: DashboardView,
        },
        {
            path: "/counter",
            name: "counter",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: CounterView,
        },
    ],
});

export default router;
