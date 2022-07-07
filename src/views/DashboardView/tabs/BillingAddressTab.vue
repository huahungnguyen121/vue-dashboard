<template>
    <div class="pt-2">
        <div class="row">
            <div class="flex sm12 md6">
                <div class="title mb-3">
                    {{ $t("dashboard.tabs.billingAddress.personalInfo") }}
                </div>
                <va-input
                    class="mb-3"
                    :label="$t('dashboard.tabs.billingAddress.firstName')"
                    v-model="form.name"
                ></va-input>
                <va-input
                    class="mb-3"
                    :label="$t('dashboard.tabs.billingAddress.email')"
                    v-model="form.email"
                ></va-input>
                <va-input
                    class="mb-3"
                    :label="$t('dashboard.tabs.billingAddress.address')"
                    v-model="form.address"
                ></va-input>
            </div>
            <div class="flex sm12 md6">
                <div class="title mb-3">
                    {{ $t("dashboard.tabs.billingAddress.companyInfo") }}
                </div>
                <va-select
                    class="mb-3"
                    :label="$t('dashboard.tabs.billingAddress.country')"
                    :options="countriesList"
                    v-model="form.country"
                    searchable
                />
                <va-select
                    class="mb-3"
                    :label="$t('dashboard.tabs.billingAddress.city')"
                    :options="allowedCitiesList"
                    v-model="form.city"
                    track-by="text"
                    searchable
                />
                <va-checkbox
                    class="mb-3"
                    :label="
                        $t('dashboard.tabs.billingAddress.infiniteConnections')
                    "
                    v-model="form.connection"
                />
            </div>
        </div>
        <div class="row justify--center">
            <va-button>{{
                $t("dashboard.tabs.billingAddress.addConnection")
            }}</va-button>
        </div>
    </div>
</template>
<script>
import { useGlobalConfig } from "vuestic-ui";
import countriesList from "../../../data/countriesList";
import { getLineMapData } from "../../../data/lineMapData";

export default {
    data() {
        return {
            form: {
                name: "John Smith",
                email: "smith@gmail.com",
                address: "93  Guild Street",
                city: { text: "London" },
                country: "United Kingdom",
                connection: true,
            },
            allowedCitiesList: [],
        };
    },
    watch: {
        "form.country"(value) {
            this.allowedCitiesList = value
                ? this.citiesList.filter(({ country }) => country === value)
                : [...this.citiesList];
        },
        "form.city": {
            deep: true,
            handler({ country }) {
                this.form.country = this.countriesList.find(
                    (item) => item === country
                );
            },
        },
    },
    computed: {
        theme() {
            return useGlobalConfig().getGlobalConfig().colors;
        },
        citiesList() {
            return getLineMapData(this.theme).cities.map(
                ({ title, country }) => ({ text: title, country })
            );
        },
        countriesList() {
            return countriesList.filter(
                (item) =>
                    this.citiesList.filter(({ country }) => country === item)
                        .length
            );
        },
    },
};
</script>
<style></style>
