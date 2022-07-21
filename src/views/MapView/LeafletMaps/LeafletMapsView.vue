<template>
    <div class="layout fluid gutter--xl">
        <div class="row">
            <div class="flex md12 xs12">
                <va-card>
                    <div id="map"></div>
                </va-card>
            </div>
        </div>
    </div>
</template>
<script>
import Leaflet from "leaflet";

export default {
    mounted() {
        Leaflet.Icon.Default.imagePath = import.meta.env.BASE_URL;
        const map = Leaflet.map("map").setView([51.505, -0.09], 13);

        Leaflet.tileLayer("https://tile.osm.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution:
                '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        Leaflet.marker([51.5, -0.09])
            .addTo(map)
            .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
            .openPopup();
    },
};
</script>
<style>
@import "leaflet/dist/leaflet.css";

#map {
    height: 65vh;
}
</style>
