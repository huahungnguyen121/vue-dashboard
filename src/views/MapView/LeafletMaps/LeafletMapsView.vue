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
import { geocoder } from "leaflet-control-geocoder";

export default {
    data() {
        return {
            map: null,
            marker: null,
            lat: 10.762622,
            long: 106.660172,
            zoomLevel: 15,
        };
    },
    mounted() {
        Leaflet.Icon.Default.imagePath = import.meta.env.BASE_URL;
        this.map = Leaflet.map("map").setView(
            [this.lat, this.long],
            this.zoomLevel
        );

        Leaflet.tileLayer("https://tile.osm.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution:
                '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.map);

        const geoCoder = geocoder({
            defaultMarkGeocode: false,
        }).addTo(this.map);

        geoCoder.addEventListener("markgeocode", (e) => {
            if (e) {
                this.setMarker(e.geocode.center.lat, e.geocode.center.lng);
            }
        });

        this.map.on("click", (e) => {
            if (e.latlng) {
                this.setMarker(e.latlng.lat, e.latlng.lng);
            }
        });
    },
    methods: {
        setMarker(lat, long) {
            if (!this.marker) {
                this.marker = Leaflet.marker([lat, long])
                    .addTo(this.map)
                    .openPopup();
                return;
            }
            this.marker.setLatLng([lat, long]).update();
            this.map.setView([lat, long], 17);
        },
    },
};
</script>
<style>
@import "leaflet/dist/leaflet.css";

#map {
    height: 65vh;
}
</style>
