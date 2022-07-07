<template>
    <div class="flex xs12">
        <va-card>
            <va-card-title>{{ $t("buttons.colors") }}</va-card-title>
            <va-card-content class="row">
                <div class="flex">
                    <va-button
                        class="mr-2 mb-2"
                        v-for="color in colors"
                        :key="color"
                        :color="color"
                    >
                        {{ $t(`buttons.${color}`) }}
                    </va-button>
                </div>
                <div class="flex">
                    <va-button
                        outline
                        class="mr-2 mb-2"
                        v-for="color in colors"
                        :key="color"
                        :color="color"
                    >
                        {{ $t(`buttons.${color}`) }}
                    </va-button>
                </div>
                <div class="flex">
                    <va-button
                        flat
                        class="mr-2 mb-2"
                        v-for="color in colors"
                        :key="color"
                        :color="color"
                    >
                        {{ $t(`buttons.${color}`) }}
                    </va-button>
                </div>
            </va-card-content>
        </va-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            colors: ["danger", "info", "dark", "warning", "success", "gray"],
        };
    },
};
</script>
