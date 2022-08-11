export default class AppConstants {
    static get GOOGLE_MAP_API_KEY() {
        return import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    }

    static get BACKEND_API_URL() {
        return import.meta.env.VITE_BACKEND_URL;
    }
}
