<template>
    <div class="layout fluid gutter--xl">
        <va-card>
            <va-card-title>
                {{ $t("spacing.title") }}
            </va-card-title>
            <va-card-content>
                <div class="row">
                    <div class="flex xs12 sm6 md4">
                        <va-select
                            :label="$t('spacingPlayground.margin')"
                            v-model="marginType"
                            :options="typeOptions"
                        />
                    </div>
                    <div class="flex xs12 sm6 md2">
                        <va-select
                            :label="$t('spacingPlayground.value')"
                            v-model="marginValue"
                            :options="valueOptions"
                        />
                    </div>
                    <div class="flex xs12 sm6 md4">
                        <va-select
                            :label="$t('spacingPlayground.padding')"
                            v-model="paddingType"
                            :options="typeOptions"
                        />
                    </div>
                    <div class="flex xs12 sm6 md2">
                        <va-select
                            :label="$t('spacingPlayground.value')"
                            v-model="paddingValue"
                            :options="valueOptions"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="flex xs12">
                        <pre>{{ className }}</pre>
                    </div>
                </div>
                <div class="row">
                    <div class="flex xs12">
                        <div
                            :class="marginClass"
                            class="spacing-illustration__margin"
                        >
                            <div
                                :class="paddingClass"
                                class="spacing-illustration__padding"
                            >
                                <div
                                    class="spacing-illustration__content"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="flex xs12 sm6">
                        <ColorVue
                            :color="colors.margin"
                            :name="$t('spacingPlayground.margin')"
                        />
                    </div>
                    <div class="flex xs12 sm6">
                        <ColorVue
                            :color="colors.padding"
                            :name="$t('spacingPlayground.padding')"
                        />
                    </div>
                </div>
            </va-card-content>
        </va-card>
    </div>
</template>
<script>
import ColorVue from "../Colors/Color.vue";

export default {
    components: { ColorVue },
    data() {
        return {
            marginType: "y",
            marginValue: "3",
            paddingType: "x",
            paddingValue: "3",
            typeOptions: ["a", "y", "x", "t", "r", "b", "l"],
            valueOptions: ["1", "2", "3", "4", "5", "auto"],
            colors: {
                margin: "#ffd093",
                padding: "#c9f7db",
            },
        };
    },
    computed: {
        className() {
            return `class="m${this.marginType}-${this.marginValue} p${this.paddingType}-${this.paddingValue}"`;
        },
        marginClass() {
            return `p${this.marginType}-${this.marginValue}`;
        },
        paddingClass() {
            return `p${this.paddingType}-${this.paddingValue}`;
        },
    },
};
</script>

<style scoped>
.spacing-illustration__margin {
    background-color: #ffd093;
}

.spacing-illustration__padding {
    background-color: #c9f7db;
}

.spacing-illustration__content {
    height: 20px;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
}
</style>
