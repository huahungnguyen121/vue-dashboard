<template>
    <div class="layout fluid gutter--xl">
        <div class="row">
            <div class="flex xs12">
                <va-card>
                    <va-card-title>
                        {{ $t("collapse.basic") }}
                    </va-card-title>
                    <va-card-content>
                        <va-accordion multiply>
                            <va-collapse
                                class="mb-4"
                                :header="$t('collapse.firstHeader')"
                            >
                                <div class="pa-3">
                                    <p class="display-3">
                                        {{ $t("collapse.content.title") }}
                                    </p>
                                    <div>
                                        {{ $t("collapse.content.text") }}
                                    </div>
                                </div>
                            </va-collapse>
                            <va-collapse :header="$t('collapse.secondHeader')">
                                <div class="pa-3">
                                    <p class="display-3">
                                        {{ $t("collapse.content.title") }}
                                    </p>
                                    <div>
                                        {{ $t("collapse.content.text") }}
                                    </div>
                                </div>
                            </va-collapse>
                        </va-accordion>
                    </va-card-content>
                </va-card>
            </div>
        </div>

        <div class="row">
            <div class="flex xs12">
                <va-card>
                    <va-card-title>
                        {{ $t("collapse.collapseWithBackground") }}
                    </va-card-title>
                    <va-card-content>
                        <va-accordion multiply>
                            <va-collapse
                                class="mb-4"
                                color="success"
                                color-all
                                :header="$t('collapse.firstHeader')"
                            >
                                <div class="pa-3">
                                    <p class="display-3">
                                        {{ $t("collapse.content.title") }}
                                    </p>
                                    <div>
                                        {{ $t("collapse.content.text") }}
                                    </div>
                                </div>
                            </va-collapse>
                            <va-collapse
                                color="warning"
                                color-all
                                :header="$t('collapse.secondHeader')"
                            >
                                <div class="pa-3">
                                    <p class="display-3">
                                        {{ $t("collapse.content.title") }}
                                    </p>
                                    <div>
                                        {{ $t("collapse.content.text") }}
                                    </div>
                                </div>
                            </va-collapse>
                        </va-accordion>
                    </va-card-content>
                </va-card>
            </div>
        </div>

        <div class="row">
            <div class="flex xs12">
                <va-card>
                    <va-card-title>
                        {{ $t("collapse.collapseWithCustomHeader") }}
                    </va-card-title>
                    <va-card-content>
                        <va-accordion multiply>
                            <va-collapse class="mb-4">
                                <template #header>
                                    <va-button block>
                                        {{ $t("collapse.firstHeader") }}
                                    </va-button>
                                </template>
                                <div class="pa-3">
                                    <p class="display-3">
                                        {{ $t("collapse.content.title") }}
                                    </p>
                                    <div>
                                        {{ $t("collapse.content.text") }}
                                    </div>
                                </div>
                            </va-collapse>
                            <va-collapse>
                                <template #header>
                                    <va-button block>
                                        {{ $t("collapse.secondHeader") }}
                                    </va-button>
                                </template>
                                <div class="pa-3">
                                    <p class="display-3">
                                        {{ $t("collapse.content.title") }}
                                    </p>
                                    <div>
                                        {{ $t("collapse.content.text") }}
                                    </div>
                                </div>
                            </va-collapse>
                        </va-accordion>
                    </va-card-content>
                </va-card>
            </div>
        </div>
    </div>
</template>

<script></script>

<style scoped>
.va-collapse {
    --va-focus: transparent !important;
}
</style>
