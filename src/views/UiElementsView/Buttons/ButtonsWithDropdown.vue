<template>
    <div class="flex xs12">
        <va-card>
            <va-card-title>{{ $t("buttons.buttonsDropdown") }}</va-card-title>
            <va-card-content class="row">
                <div class="flex">
                    <va-button-dropdown
                        :label="$t('buttons.default')"
                        class="mr-2 mb-2"
                    >
                        {{ $t("buttons.content") }}
                    </va-button-dropdown>
                    <va-button-dropdown
                        :label="$t('buttons.split')"
                        class="mr-2 mb-2"
                        split
                    >
                        {{ $t("buttons.content") }}
                    </va-button-dropdown>
                    <va-button-dropdown
                        :label="$t('buttons.splitTo')"
                        class="mr-2 mb-2"
                        split
                        split-to="/"
                    >
                        {{ $t("buttons.content") }}
                    </va-button-dropdown>
                    <va-button-dropdown
                        :label="$t('buttons.disabled')"
                        class="mr-2 mb-2"
                        disabled
                    >
                        {{ $t("buttons.content") }}
                    </va-button-dropdown>
                    <va-button-dropdown
                        :label="$t('buttons.warning')"
                        class="mr-2 mb-2"
                        color="warning"
                    >
                        {{ $t("buttons.content") }}
                    </va-button-dropdown>
                </div>
            </va-card-content>
        </va-card>
    </div>
</template>
<script></script>
