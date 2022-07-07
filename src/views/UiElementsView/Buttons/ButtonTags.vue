<template>
    <div class="flex xs12">
        <va-card>
            <va-card-title>{{ $t("buttons.tags") }}</va-card-title>
            <va-card-content class="row">
                <div class="flex">
                    <va-button class="mr-2 mb-2">
                        {{ $t("buttons.button") }}
                    </va-button>
                    <va-button
                        class="mr-2 mb-2"
                        href="https://epic-spinners.epicmax.co/"
                    >
                        {{ $t("buttons.a-link") }}
                    </va-button>
                    <va-button class="mr-2 mb-2" to="/statistics/charts">
                        {{ $t("buttons.router-link") }}
                    </va-button>
                </div>
            </va-card-content>
        </va-card>
    </div>
</template>
<script></script>
