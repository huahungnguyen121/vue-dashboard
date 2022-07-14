<template>
    <div class="layout fluid gutter--xl">
        <div class="row">
            <div class="flex xs12">
                <va-card>
                    <va-card-title>
                        {{ $t("sliders.slider") }}
                    </va-card-title>
                    <va-card-content class="row">
                        <div class="flex xs12 lg6 xl4 mb-2">
                            <div
                                class="title mb-3"
                                style="color: var(--va-primary)"
                            >
                                {{ $t("sliders.simple") }}
                            </div>
                            <va-slider v-model="value" color="primary" />
                        </div>
                        <div class="flex xs12 lg6 xl4 mb-2">
                            <div
                                class="title mb-3"
                                style="color: var(--va-danger)"
                            >
                                {{ $t("sliders.value") }}
                            </div>
                            <va-slider v-model="value" color="danger" />
                        </div>
                        <div class="flex d-flex align--end xs12 lg6 xl4 mb-2">
                            <va-slider
                                :label="$t('sliders.label')"
                                v-model="value"
                                color="info"
                            />
                        </div>
                        <div class="flex d-flex align--end xs12 lg6 xl4 mb-2">
                            <va-slider
                                :label="$t('sliders.label')"
                                invert-label
                                v-model="value"
                                color="warning"
                            />
                        </div>
                        <div class="flex xs12 lg6 xl4 mb-2">
                            <div
                                class="title mb-3"
                                style="color: var(--va-primary)"
                            >
                                {{ $t("sliders.labelPlusIcon") }}
                            </div>
                            <va-slider v-model="value" color="primary" />
                        </div>
                        <div class="flex xs12 lg6 xl4 mb-2">
                            <div
                                class="title mb-3"
                                style="color: var(--va-danger)"
                            >
                                {{ $t("sliders.labelPlusIcon") }}
                            </div>
                            <va-slider v-model="value" color="danger" />
                        </div>
                        <div class="flex xs12 lg6 xl4 mb-2">
                            <div
                                class="title mb-3"
                                style="color: var(--va-primary)"
                            >
                                {{ $t("sliders.pins") }}
                            </div>
                            <va-slider
                                v-model="value"
                                color="primary"
                                pins
                                :step="20"
                            />
                        </div>
                        <div class="flex xs12 lg6 xl4 mb-2">
                            <div
                                class="title mb-3"
                                style="color: var(--va-warning)"
                            >
                                {{ $t("sliders.pinsAndValue") }}
                            </div>
                            <va-slider
                                v-model="value"
                                color="warning"
                                pins
                                :step="10"
                            />
                        </div>
                        <div class="flex d-flex align--end xs12 lg6 xl4 mb-2">
                            <va-slider v-model="value" color="primary" />
                        </div>
                        <div class="flex xs12 lg6 xl4 mb-2">
                            <va-slider v-model="value" color="info" />
                        </div>
                    </va-card-content>
                </va-card>
            </div>
            <div class="flex xs12">
                <va-card>
                    <va-card-title>
                        {{ $t("sliders.range") }}
                    </va-card-title>
                    <va-card-content class="row">
                        <div class="flex xs12 lg6 xl4 mb-2">
                            <div
                                class="title mb-3"
                                style="color: var(--va-primary)"
                            >
                                {{ $t("sliders.simple") }}
                            </div>
                            <va-slider
                                v-model="valueSet"
                                range
                                color="primary"
                            />
                        </div>
                        <div class="flex xs12 lg6 xl4 mb-2">
                            <div
                                class="title mb-3"
                                style="color: var(--va-danger)"
                            >
                                {{ $t("sliders.value") }}
                            </div>
                            <va-slider
                                v-model="valueSet"
                                range
                                color="danger"
                            />
                        </div>
                        <div class="flex d-flex align--end xs12 lg6 xl4 mb-2">
                            <va-slider
                                :label="$t('sliders.label')"
                                v-model="valueSet"
                                range
                                color="info"
                            />
                        </div>
                        <div class="flex d-flex align--end xs12 lg6 xl4 mb-2">
                            <va-slider
                                :label="$t('sliders.label')"
                                invert-label
                                v-model="valueSet"
                                range
                                color="warning"
                            />
                        </div>
                        <div class="flex xs12 lg6 xl4 mb-2">
                            <div
                                class="title mb-3"
                                style="color: var(--va-primary)"
                            >
                                {{ $t("sliders.labelPlusIcon") }}
                            </div>
                            <va-slider
                                v-model="valueSet"
                                range
                                color="primary"
                            />
                        </div>
                        <div class="flex xs12 lg6 xl4 mb-2">
                            <div
                                class="title mb-3"
                                style="color: var(--va-danger)"
                            >
                                {{ $t("sliders.labelPlusIcon") }}
                            </div>
                            <va-slider
                                v-model="valueSet"
                                range
                                color="danger"
                            />
                        </div>
                        <div class="flex xs12 lg6 xl4 mb-2">
                            <div
                                class="title mb-3"
                                style="color: var(--va-primary)"
                            >
                                {{ $t("sliders.pins") }}
                            </div>
                            <va-slider
                                v-model="valueSet"
                                range
                                color="primary"
                                pins
                                :step="20"
                            />
                        </div>
                        <div class="flex xs12 lg6 xl4 mb-2">
                            <div
                                class="title mb-3"
                                style="color: var(--va-warning)"
                            >
                                {{ $t("sliders.pinsAndValue") }}
                            </div>
                            <va-slider
                                v-model="valueSet"
                                range
                                color="warning"
                                pins
                                :step="10"
                            />
                        </div>
                        <div class="flex d-flex align--end xs12 lg6 xl4 mb-2">
                            <va-slider
                                v-model="valueSet"
                                range
                                color="primary"
                            />
                        </div>
                        <div class="flex xs12 lg6 xl4 mb-2">
                            <va-slider v-model="valueSet" range color="info" />
                        </div>
                    </va-card-content>
                </va-card>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: 90,
            valueSet: [20, 60],
        };
    },
};
</script>
<style></style>
