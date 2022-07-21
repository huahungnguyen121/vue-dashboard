<template>
    <div class="layout fluid gutter--xl">
        <div class="row">
            <div
                class="flex xs12 sm6 lg4 xl3"
                v-for="card in cards"
                :key="card"
            >
                <va-card class="text--center">
                    <va-image
                        :src="card.imageUrl"
                        style="max-height: 200px"
                    ></va-image>
                    <va-card-content>
                        {{ card.label }}
                        <div class="pt-3 mb-0">
                            <va-button :to="`/404/${card.buttonTo}`">
                                {{ "View Example" }}
                            </va-button>
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
            cards: [
                {
                    imageUrl: "https://i.imgur.com/GzUR0Wz.png",
                    label: "Advanced layout",
                    buttonTo: "advanced",
                },
                {
                    imageUrl: "https://i.imgur.com/HttcXPi.png",
                    label: "Simple",
                    buttonTo: "simple",
                },
                {
                    imageUrl: "https://i.imgur.com/dlcZMiG.png",
                    label: "Custom image",
                    buttonTo: "custom",
                },
                {
                    imageUrl: "https://i.imgur.com/qcOlDz7.png",
                    label: "Large text heading",
                    buttonTo: "large-text",
                },
            ],
        };
    },
};
</script>
<style></style>
