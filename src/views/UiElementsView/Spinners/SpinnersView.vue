<template>
    <div class="layout fluid gutter--xl">
        <va-card>
            <va-card-title>
                {{ $t("spinners.title") }}
            </va-card-title>
            <va-card-content>
                <div class="row">
                    <div class="d-flex flex xs12 lg4 align--center">
                        <va-slider
                            v-model="fontSize"
                            icon-append="text_increase"
                            icon-prepend="text_decrease"
                            :max="limit.max"
                            :min="limit.min"
                        />
                    </div>
                    <div class="d-flex flex xs12 lg4 align--center">
                        <va-slider
                            v-model="duration"
                            icon-append="fast_forward"
                            icon-prepend="speed"
                            :max="durationRange.max"
                            :min="durationRange.min"
                        />
                    </div>
                    <div class="d-flex flex xs12 lg4 justify--center">
                        <va-color-palette
                            v-model="color"
                            :palette="colorList"
                        />
                    </div>
                </div>
                <div>
                    <hr class="separator" />
                </div>
                <div class="row" v-for="row in spinnersList" :key="row">
                    <div
                        class="flex sm6 lg3"
                        v-for="spinner in row"
                        :key="spinner"
                    >
                        <div class="text--center pb-4">
                            <div class="flex-center spinner-wrapper">
                                <component
                                    :animation-duration="speed"
                                    :is="spinner"
                                    :color="computeColor"
                                    :size="fontSize"
                                ></component>
                            </div>
                            <div>{{ spinner }}</div>
                        </div>
                    </div>
                </div>
            </va-card-content>
        </va-card>
    </div>
</template>
<script>
import * as spinners from "epic-spinners";
import { useColors } from "vuestic-ui";

export default {
    setup() {
        return {
            useColors,
        };
    },
    components: {
        ...spinners,
    },
    data() {
        return {
            rowSize: 4,
            fontSize: 80,
            duration: 1500,
            color: "primary",
            limit: {
                max: 100,
                min: 40,
            },
            durationRange: {
                max: 2000,
                min: 1000,
            },
            colorList: ["primary", "success", "danger", "warning", "dark"],
        };
    },
    computed: {
        spinnersList() {
            return this.groupSpinners(Object.keys(spinners), this.rowSize);
        },
        computeColor() {
            const { getColor } = useColors();

            const colorComputed = getColor(this.color);
            return colorComputed;
        },
        speed() {
            return (
                this.durationRange.min + this.durationRange.max - this.duration
            );
        },
    },
    methods: {
        groupSpinners(spinners, size) {
            const rows = [];

            for (let i = 0; i < spinners.length; i += size) {
                rows.push(spinners.slice(i, i + size));
            }

            return rows;
        },
    },
};
</script>
<style scoped>
.separator {
    margin: 0.5rem 0;
}

.spinner-wrapper {
    height: 140px;
}
</style>
