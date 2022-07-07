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
    name: "HorizontalBarChart",
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
                        label: "Vuestic Satisfaction Score",
                        backgroundColor: THEMES[0].colors.warning,
                        borderColor: "transparent",
                        data: [80, 90, 50, 70, 60, 90, 50, 90, 80, 40, 72, 93],
                    },
                    {
                        label: "Bulma Satisfaction Score",
                        backgroundColor: THEMES[0].colors.danger,
                        borderColor: "transparent",
                        data: [20, 30, 20, 40, 50, 40, 15, 60, 30, 20, 42, 53],
                    },
                ],
            },
            chartOptions: { ...chartConfig, indexAxis: "y" },
        };
    },
};
</script>

<style scoped>
.dashboard-chart {
    max-height: 400px;
}
</style>
