<template>
    <Bar
        class="dashboard-chart"
        :chart-data="chartData"
        :chart-options="chartOptions"
    />
</template>
<script>
import { Bar } from "vue-chartjs";
import { Chart as ChartJS, registerables } from "chart.js";
import { THEMES } from "../../themes/themes";
import chartConfig from "./chartConfig";

ChartJS.register(...registerables);

export default {
    name: "VerticalBarChart",
    components: {
        Bar,
    },
    data() {
        return {
            chartData: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                ],
                datasets: [
                    {
                        label: "USA",
                        backgroundColor: THEMES[0].colors.primary,
                        borderColor: "transparent",
                        data: [50, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
                    },
                    {
                        label: "USSR",
                        backgroundColor: THEMES[0].colors.info,
                        borderColor: "transparent",
                        data: [50, 10, 22, 39, 15, 20, 85, 32, 60, 50, 20, 30],
                    },
                ],
            },
            chartOptions: { ...chartConfig },
        };
    },
};
</script>

<style scoped>
.dashboard-chart {
    max-height: 400px;
}
</style>
