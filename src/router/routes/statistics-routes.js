export default [
    {
        path: "statistics/charts",
        name: "charts",
        component: () => import("../../views/StatisticsView/ChartsView.vue"),
    },
    {
        path: "statistics/progress-bars",
        name: "progressBars",
        component: () =>
            import("../../views/StatisticsView/ProgressBarsView.vue"),
    },
];
