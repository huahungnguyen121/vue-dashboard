<template>
    <DashboardRow3>
        <template #left>
            <va-card class="d-flex">
                <va-card-title>
                    <div class="card-header">
                        {{ $t("dashboard.charts.trendyTrends") }}
                        <va-button
                            @click="testAPI"
                            color="danger"
                            size="small"
                            >{{
                                $t("dashboard.charts.showInMoreDetail")
                            }}</va-button
                        >
                    </div>
                </va-card-title>
                <va-card-content>
                    <LineChartVue />
                </va-card-content>
            </va-card>
        </template>
        <template #center>
            <va-card class="d-flex">
                <va-card-title>
                    <div class="card-header">
                        {{ $t("dashboard.charts.loadingSpeed") }}
                        <va-button color="primary" flat round>
                            <va-icon name="print" @click="printCard" />
                        </va-button>
                    </div>
                </va-card-title>
                <va-card-content>
                    <DonutChartVue class="dashboard-charts__donut-chart" />
                </va-card-content>
            </va-card>
        </template>
        <template #right>
            <va-card class="d-flex">
                <va-card-title>
                    <div class="card-header">
                        {{ $t("dashboard.charts.topContributors") }}
                        <va-button flat size="small">
                            {{ $t("dashboard.charts.showNextFive") }}
                        </va-button>
                    </div>
                </va-card-title>
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
        </template>
    </DashboardRow3>
</template>

<script>
import LineChartVue from "../../components/charts/LineChart.vue";
import DonutChartVue from "../../components/charts/DonutChart.vue";
import ContributorChartVue from "../../components/charts/ContributorChart.vue";
import DashboardRow3 from "./DashboardRow3.vue";
import httpService from "../../services/http-service.js";

export default {
    components: {
        LineChartVue,
        DonutChartVue,
        ContributorChartVue,
        DashboardRow3,
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
    methods: {
        printCard() {
            const win = window.open("", "Print", "height=600,width=800");
            win?.document.write(
                `<br/><div style="display: flex; justify-content: center"><img src="${this.donutChartDataURL}"/></div>`
            );

            setTimeout(() => {
                win?.document.close();
                win?.focus();
                win?.print();
                win?.close();
            }, 200);
        },
        async testAPI() {
            try {
                const res = await httpService.get("/");
                console.log(res);
            } catch (err) {
                console.error(err);
            }
        },
    },
    computed: {
        donutChartDataURL() {
            return document
                .querySelector(".dashboard-charts__donut-chart > canvas")
                .toDataURL("image/png");
        },
    },
};
</script>
