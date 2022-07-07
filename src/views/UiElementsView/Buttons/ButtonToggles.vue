<template>
    <div class="flex xs12">
        <va-card>
            <va-card-title>{{ $t("buttons.buttonToggles") }}</va-card-title>
            <va-card-content class="row">
                <div class="flex xs12 xl6">
                    <va-button-toggle v-model="value" :options="options" />
                </div>
                <div class="flex xs12 xl6">
                    <va-button-toggle
                        v-model="value"
                        :options="options"
                        color="danger"
                        outline
                    />
                </div>
                <div class="flex xs12 xl6">
                    <va-button-toggle
                        v-model="value"
                        :options="options"
                        color="gray"
                        flat
                    />
                </div>
                <div class="flex xs12 xl6">
                    <va-button-toggle
                        v-model="value"
                        :options="options"
                        color="dark"
                    />
                </div>
                <div class="flex xs12 xl6">
                    <va-button-toggle
                        v-model="value"
                        :options="options"
                        color="info"
                        outline
                    />
                </div>
                <div class="flex xs12 xl6">
                    <va-button-toggle
                        v-model="value"
                        :options="options"
                        color="warning"
                        flat
                    />
                </div>
            </va-card-content>
        </va-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: "three",
            options: [
                {
                    label: "One",
                    value: "one",
                },
                {
                    label: "Two",
                    value: "two",
                },
                {
                    label: "Three",
                    value: "three",
                },
            ],
        };
    },
};
</script>
