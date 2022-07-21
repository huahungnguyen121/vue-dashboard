<template>
    <div class="layout fluid gutter--xl">
        <div class="row">
            <div class="flex md12 xs12">
                <va-card class="google-maps__card">
                    <va-card-content>
                        <div id="map" class="google-maps__map"></div>
                    </va-card-content>
                </va-card>
            </div>
        </div>
    </div>
</template>
<script>
import { Loader } from "google-maps";
import AppConstants from "../../../constants/app-constants";

export default {
    mounted() {
        this.initMap();
    },
    methods: {
        initMap() {
            if (window.google && window.google.maps) {
                this.displayMap(window.google, 10.762622, 106.660172, 12);
                return;
            }

            const apiKey = AppConstants.GOOGLE_MAP_API_KEY;
            if (!apiKey) {
                throw new Error(
                    "Please provide google maps api key from env (VITE_GOOGLE_MAPS_API_KEY)"
                );
            }

            const loader = new Loader(apiKey);

            loader.load().then((google) => {
                this.displayMap(google, 10.762622, 106.660172, 12);
            });
        },
        displayMap(googleMaps, lat, long, zoom) {
            new googleMaps.maps.Map(document.getElementById("map"), {
                center: { lat: lat, lng: long },
                zoom: zoom,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            });
        },
    },
};
</script>
<style scoped>
.google-maps__map {
    height: 65vh;
    width: 100%;
}
</style>
