<template>
    <div class="layout fluid gutter--xl">
        <div class="row">
            <div class="flex md12 xs12">
                <va-card class="google-maps__card">
                    <LineMapVue :map-data="lineMapData" style="height: 65vh" />
                </va-card>
            </div>
        </div>
    </div>
</template>
<script>
import LineMapVue from "../../../components/LineMap.vue";
import { getLineMapData } from "../../../data/lineMapData";
import { useGlobalConfig } from "vuestic-ui";

export default {
    components: {
        LineMapVue,
    },
    computed: {
        lineMapData() {
            return getLineMapData(useGlobalConfig().getGlobalConfig().colors);
        },
    },
};
</script>
<style></style>
