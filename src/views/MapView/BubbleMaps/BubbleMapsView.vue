<template>
    <div class="layout fluid gutter--xl">
        <div class="row">
            <div class="flex md12 xs12">
                <va-card>
                    <BubbleMapsVue
                        :map-data="bubbleMapData"
                        style="height: 65vh"
                    />
                </va-card>
            </div>
        </div>
    </div>
</template>

<script>
import BubbleMapsVue from "./BubbleMaps.vue";
import BubbleMapData from "../../../data/bubbleMapData";
export default {
    components: {
        BubbleMapsVue,
    },
    data() {
        return {
            bubbleMapData: BubbleMapData,
        };
    },
};
</script>
