<template>
    <DashboardRow2Vue>
        <template #left>
            <va-card>
                <va-card-title>
                    {{ $t("dashboard.setupRemoteConnections") }}
                </va-card-title>
                <va-card-content>
                    <va-tabs grow v-model="activeTabName">
                        <template #tabs>
                            <va-tab name="OverviewTab">
                                {{ $t("dashboard.tabs.overview.title") }}
                            </va-tab>
                            <va-tab name="BillingAddressTab">
                                {{ $t("dashboard.tabs.billingAddress.title") }}
                            </va-tab>
                            <va-tab name="BankDetailsTab">
                                {{ $t("dashboard.tabs.bankDetails.title") }}
                            </va-tab>
                        </template>
                    </va-tabs>
                    <va-separator class="mt-1" />
                    <component :is="activeTabName" />
                </va-card-content>
            </va-card>
        </template>
        <template #right>
            <va-card>
                <va-card-title>
                    {{ $t("dashboard.currentVisitors") }}
                </va-card-title>
                <LineMap :map-data="lineMapData" style="height: 400px" />
            </va-card>
        </template>
    </DashboardRow2Vue>
</template>
<script>
import { useGlobalConfig } from "vuestic-ui";
import DashboardRow2Vue from "./DashboardRow2.vue";
import LineMap from "../../components/maps/LineMap.vue";
import OverviewTab from "./tabs/OverviewTab.vue";
import BillingAddressTab from "./tabs/BillingAddressTab.vue";
import BankDetailsTab from "./tabs/BankDetailsTab.vue";
import { getLineMapData } from "../../data/lineMapData";

export default {
    components: {
        DashboardRow2Vue,
        LineMap,
        OverviewTab,
        BillingAddressTab,
        BankDetailsTab,
    },
    data() {
        return {
            activeTabName: "OverviewTab",
        };
    },
    computed: {
        lineMapData() {
            return getLineMapData(useGlobalConfig().getGlobalConfig().colors);
        },
    },
};
</script>
<style>
.va-tabs__tabs-items {
    flex-grow: 1;
}
</style>
