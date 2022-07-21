export default [
    {
        path: "maps/google-maps",
        name: "google-maps",
        component: () =>
            import("../../views/MapView/GoogleMaps/GoogleMapsView.vue"),
    },
    {
        path: "maps/yandex-maps",
        name: "yandex-maps",
        component: () =>
            import("../../views/MapView/YandexMaps/YandexMapsView.vue"),
    },
    {
        path: "maps/leaflet-maps",
        name: "leaflet-maps",
        component: () =>
            import("../../views/MapView/LeafletMaps/LeafletMapsView.vue"),
    },
    {
        path: "maps/bubble-maps",
        name: "bubble-maps",
        component: () =>
            import("../../views/MapView/BubbleMaps/BubbleMapsView.vue"),
    },
    {
        path: "maps/line-maps",
        name: "line-maps",
        component: () =>
            import("../../views/MapView/LineMaps/LineMapsView.vue"),
    },
];
