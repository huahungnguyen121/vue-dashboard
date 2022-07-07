<template>
    <div class="layout fluid gutter--xl">
        <div>
            <div class="row">
                <div class="flex md6 xs12">
                    <va-card>
                        <va-card-content>
                            <VerticalBarChart />
                        </va-card-content>
                    </va-card>
                </div>
                <div class="flex md6 xs12">
                    <va-card>
                        <va-card-content>
                            <HorizontalBarChart />
                        </va-card-content>
                    </va-card>
                </div>
            </div>
            <div class="row">
                <div class="flex md12 xs12">
                    <va-card>
                        <va-card-content>
                            <LineChart />
                        </va-card-content>
                    </va-card>
                </div>
            </div>
            <div class="row">
                <div class="flex md6 xs12">
                    <va-card>
                        <va-card-content>
                            <PieChart />
                        </va-card-content>
                    </va-card>
                </div>
                <div class="flex md6 xs12">
                    <va-card>
                        <va-card-content>
                            <DonutChart />
                        </va-card-content>
                    </va-card>
                </div>
            </div>
            <div class="row">
                <div class="flex md12 xs12">
                    <va-card>
                        <va-card-content>
                            <BubbleChart />
                        </va-card-content>
                    </va-card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import LineChart from "../../components/charts/LineChart.vue";
import DonutChart from "../../components/charts/DonutChart.vue";
import PieChart from "../../components/charts/PieChart.vue";
import VerticalBarChart from "../../components/charts/VerticalBarChart.vue";
import HorizontalBarChart from "../../components/charts/HorizontalBarChart.vue";
import BubbleChart from "../../components/charts/BubbleChart.vue";

export default {
    components: {
        LineChart,
        DonutChart,
        PieChart,
        VerticalBarChart,
        HorizontalBarChart,
        BubbleChart,
    },
};
</script>
<style></style>
