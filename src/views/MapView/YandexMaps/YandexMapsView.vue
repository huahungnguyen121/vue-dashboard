<template>
    <div class="layout fluid gutter--xl">
        <div class="row">
            <div class="flex md12 xs12">
                <va-card>
                    <va-card-content>
                        <yandex-map
                            :settings="settings"
                            :coords="coords"
                            :zoom="12"
                            style="width: 100%; height: 65vh"
                            :behaviors="['default']"
                            :controls="[
                                'trafficControl',
                                'zoomControl',
                                'geolocationControl',
                                'fullscreenControl',
                                'searchControl',
                            ]"
                            map-type="hybrid"
                        >
                            <ymap-marker
                                :coords="coords"
                                marker-id="123"
                                marker-type="placemark"
                            >
                            </ymap-marker>
                        </yandex-map>
                    </va-card-content>
                </va-card>
            </div>
        </div>
    </div>
</template>
<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";

export default {
    components: {
        yandexMap,
        ymapMarker,
    },
    data() {
        return {
            settings: {
                lang: "en_US",
            },
            coords: [10.762622, 106.660172],
        };
    },
};
</script>
<style></style>
