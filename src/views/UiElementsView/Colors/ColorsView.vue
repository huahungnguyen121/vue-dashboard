<template>
    <div class="layout fluid gutter--xl">
        <div class="row">
            <div class="flex xs12 sm6">
                <va-card>
                    <va-card-title>
                        {{ $t("colors.themeColors") }}
                    </va-card-title>
                    <va-card-content>
                        <Color
                            v-for="color in themeColors"
                            :key="color"
                            :color="color.color"
                            :name="color.name"
                            :description="color.description"
                        />
                    </va-card-content>
                </va-card>
            </div>
            <div class="flex xs12 sm6">
                <va-card>
                    <va-card-title>
                        {{ $t("colors.extraColors") }}
                    </va-card-title>
                    <va-card-content>
                        <Color
                            v-for="color in extraColors"
                            :key="color"
                            :color="color.color"
                            :name="color.name"
                            :description="color.description"
                        />
                    </va-card-content>
                </va-card>
            </div>
            <div class="flex xs12 sm6 lg4">
                <va-card>
                    <va-card-title>
                        {{ $t("colors.gradients.basic.title") }}
                    </va-card-title>
                    <va-card-content>
                        <Color
                            v-for="color in themeColors"
                            :key="color"
                            :color="color.color"
                            :square="false"
                        />
                    </va-card-content>
                </va-card>
            </div>
            <div class="flex xs12 sm6 lg4">
                <va-card>
                    <va-card-title>
                        {{ $t("colors.gradients.hovered.title") }}
                    </va-card-title>
                    <va-card-content>
                        <p class="mt-0 mb-2">
                            {{ $t("colors.gradients.hovered.text") }}
                        </p>
                        <Color
                            v-for="color in themeColors"
                            :key="color"
                            :color="color.color"
                            :square="false"
                            :variant="['hovered']"
                        />
                    </va-card-content>
                </va-card>
            </div>
            <div class="flex xs12 sm6 lg4">
                <va-card>
                    <va-card-title>
                        {{ $t("colors.gradients.pressed.title") }}
                    </va-card-title>
                    <va-card-content>
                        <p class="mt-0 mb-2">
                            {{ $t("colors.gradients.pressed.text") }}
                        </p>
                        <Color
                            v-for="color in themeColors"
                            :key="color"
                            :color="color.color"
                            :square="false"
                            :variant="['pressed']"
                        />
                    </va-card-content>
                </va-card>
            </div>
        </div>
    </div>
</template>
<script>
import { themeColors, extraColors } from "../../../data/colorsData";
import Color from "./Color.vue";

export default {
    setup() {
        return {
            themeColors,
            extraColors,
        };
    },
    components: { Color },
};
</script>
<style></style>
