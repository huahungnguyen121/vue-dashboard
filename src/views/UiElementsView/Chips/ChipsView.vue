<template>
    <div class="layout fluid gutter--xl">
        <div class="row">
            <div class="flex xs12">
                <va-card>
                    <va-card-title>
                        {{ $t("chips.chips.title") }}
                    </va-card-title>
                    <va-card-content class="row">
                        <div class="flex xs12">
                            <div class="row">
                                <div class="flex xs12">
                                    <va-chip
                                        v-for="color in colors"
                                        :key="color"
                                        :color="color"
                                        class="mb-2 mr-2"
                                    >
                                        {{ $t(`chips.chips.${color}`) }}
                                    </va-chip>
                                </div>
                            </div>
                            <div class="row">
                                <div class="flex xs12">
                                    <va-chip
                                        v-for="color in colors"
                                        :key="color"
                                        :color="color"
                                        outline
                                        class="mb-2 mr-2"
                                    >
                                        {{ $t(`chips.chips.${color}`) }}
                                    </va-chip>
                                </div>
                            </div>
                        </div>
                    </va-card-content>
                </va-card>
            </div>
        </div>

        <div class="row">
            <div class="flex xs12">
                <va-card>
                    <va-card-title>
                        {{ $t("chips.badges.title") }}
                    </va-card-title>
                    <va-card-content class="row">
                        <div class="flex xs12">
                            <div class="row">
                                <div class="flex xs12">
                                    <va-badge
                                        v-for="color in colors"
                                        :key="color"
                                        :color="color"
                                        class="mb-2 mr-2"
                                        :text="$t(`chips.badges.${color}`)"
                                    />
                                </div>
                            </div>
                            <div class="row">
                                <div class="flex xs12">
                                    <va-badge
                                        v-for="color in colors"
                                        :key="color"
                                        :color="color"
                                        transparent
                                        class="mb-2 mr-2"
                                        :text="$t(`chips.badges.${color}`)"
                                    />
                                </div>
                            </div>
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
            colors: [
                "primary",
                "secondary",
                "success",
                "info",
                "danger",
                "warning",
                "gray",
                "dark",
            ],
        };
    },
};
</script>
<style></style>
