<template>
    <div class="layout fluid gutter--xl">
        <div>
            <div class="row row-equal">
                <div class="flex xs12 xl6">
                    <va-card>
                        <va-card-title
                            ><div class="card-header">
                                {{ $t("dashboard.charts.trendyTrends") }}
                                <va-button color="danger" size="small">{{
                                    $t("dashboard.charts.showInMoreDetail")
                                }}</va-button>
                            </div></va-card-title
                        >
                        <va-card-content>
                            <LineChartVue />
                        </va-card-content>
                    </va-card>
                </div>
                <div class="flex xs12 md6 xl3">
                    <va-card class="d-flex">
                        <va-card-title
                            ><div class="card-header">
                                {{ $t("dashboard.charts.loadingSpeed") }}
                                <va-button color="primary" flat round
                                    ><va-icon name="print"
                                /></va-button></div
                        ></va-card-title>
                        <va-card-content>
                            <PieChartVue />
                        </va-card-content>
                    </va-card>
                </div>
                <div class="flex xs12 md6 xl3">
                    <va-card class="d-flex">
                        <va-card-title
                            ><div class="card-header">
                                {{ $t("dashboard.charts.topContributors") }}
                                <va-button flat size="small">{{
                                    $t("dashboard.charts.showNextFive")
                                }}</va-button>
                            </div></va-card-title
                        >
                        <va-card-content>
                            <ContributorChartVue
                                v-for="contributor of contributors"
                                :key="contributor"
                                :name="contributor.name"
                                :max="contributor.max"
                                :current="contributor.current"
                            />
                        </va-card-content>
                    </va-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LineChartVue from "../../components/charts/LineChart.vue";
import PieChartVue from "../../components/charts/PieChart.vue";
import ContributorChartVue from "../../components/charts/ContributorChart.vue";

export default {
    components: {
        LineChartVue,
        PieChartVue,
        ContributorChartVue,
    },
    data() {
        return {
            contributors: [
                {
                    name: "smartapant",
                    max: 394,
                    current: 394,
                },
                {
                    name: "asvae",
                    max: 394,
                    current: 234,
                },
                {
                    name: "papasikis",
                    max: 394,
                    current: 189,
                },
                {
                    name: "m0ksem",
                    max: 394,
                    current: 165,
                },
                {
                    name: "vlad-shusterman",
                    max: 394,
                    current: 161,
                },
            ],
        };
    },
};
</script>

<style>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
</style>
