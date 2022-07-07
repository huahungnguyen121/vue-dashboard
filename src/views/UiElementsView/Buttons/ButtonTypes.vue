<template>
    <div class="flex xs12">
        <va-card>
            <va-card-title>{{ $t("buttons.types") }}</va-card-title>
            <va-card-content class="row">
                <div class="flex">
                    <va-button class="mr-2 mb-2">
                        {{ $t("buttons.default") }}
                    </va-button>
                    <va-button class="mr-2 mb-2" disabled>
                        {{ $t("buttons.disabled") }}
                    </va-button>
                    <va-button class="mr-2 mb-2" outline>
                        {{ $t("buttons.outline") }}
                    </va-button>
                    <va-button class="mr-2 mb-2" outline disabled>
                        {{ $t("buttons.disabled") }}
                    </va-button>
                    <va-button class="mr-2 mb-2" flat>
                        {{ $t("buttons.flat") }}
                    </va-button>
                    <va-button class="mr-2 mb-2" flat disabled>
                        {{ $t("buttons.disabled") }}
                    </va-button>
                </div>
            </va-card-content>
        </va-card>
    </div>
</template>
<script></script>
