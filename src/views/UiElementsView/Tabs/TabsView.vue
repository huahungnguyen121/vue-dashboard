<template>
    <div class="layout fluid gutter--xl">
        <div class="row">
            <div class="flex xs12 md6">
                <va-card class="fill-height">
                    <va-card-title>
                        {{ $t("tabs.alignment") }}
                    </va-card-title>
                    <va-card-content>
                        <va-tabs class="mb-4" v-model="activeTab">
                            <template #tabs>
                                <va-tab
                                    v-for="tab in tabNames.slice(0, -1)"
                                    :key="tab"
                                >
                                    {{ tab }}
                                </va-tab>
                            </template>
                        </va-tabs>
                        <va-tabs class="mb-4" v-model="activeTab" right>
                            <template #tabs>
                                <va-tab
                                    v-for="tab in tabNames.slice(0, -1)"
                                    :key="tab"
                                >
                                    {{ tab }}
                                </va-tab>
                            </template>
                        </va-tabs>
                        <va-tabs class="mb-4" v-model="activeTab" center>
                            <template #tabs>
                                <va-tab
                                    v-for="tab in tabNames.slice(0, -1)"
                                    :key="tab"
                                >
                                    {{ tab }}
                                </va-tab>
                            </template>
                        </va-tabs>
                    </va-card-content>
                </va-card>
            </div>
            <div class="flex xs12 md6">
                <div class="row column">
                    <div class="flex">
                        <va-card>
                            <va-card-title>
                                {{ $t("tabs.overflow") }}
                            </va-card-title>
                            <va-card-content>
                                <va-tabs v-model="activeTab">
                                    <template #tabs>
                                        <va-tab
                                            v-for="tab in tabNames"
                                            :key="tab"
                                        >
                                            {{ tab }}
                                        </va-tab>
                                    </template>
                                </va-tabs>
                            </va-card-content>
                        </va-card>
                    </div>
                    <div class="flex">
                        <va-card>
                            <va-card-title>
                                {{ $t("tabs.hidden") }}
                            </va-card-title>
                            <va-card-content>
                                <va-tabs v-model="activeTab" hide-slider>
                                    <template #tabs>
                                        <va-tab
                                            v-for="tab in tabNames.slice(0, -1)"
                                            :key="tab"
                                        >
                                            {{ tab }}
                                        </va-tab>
                                    </template>
                                </va-tabs>
                            </va-card-content>
                        </va-card>
                    </div>
                </div>
            </div>
            <div class="flex xs12">
                <va-card>
                    <va-card-title>
                        {{ $t("tabs.grow") }}
                    </va-card-title>
                    <va-card-content>
                        <va-tabs v-model="activeTab" grow>
                            <template #tabs>
                                <va-tab
                                    v-for="tab in tabNames.slice(0, -1)"
                                    :key="tab"
                                >
                                    {{ tab }}
                                </va-tab>
                            </template>
                        </va-tabs>
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
            tabNames: [
                "One",
                "Two",
                "Three",
                " Somewhat long long long long long long long long long text ",
            ],
            activeTab: 0,
        };
    },
};
</script>
<style></style>
