<template>
    <Line
        class="dashboard-chart"
        :chart-data="chartData"
        :chart-options="chartOptions"
    />
</template>
<script>
import { Line } from "vue-chartjs";
import { Chart as ChartJS, registerables } from "chart.js";
import { THEMES } from "../../themes/themes";

ChartJS.register(...registerables);

export default {
    name: "LineChart",
    components: {
        Line,
    },
    data() {
        return {
            chartData: {
                labels: ["January", "February", "March", "April", "May"],
                datasets: [
                    {
                        label: "Debit",
                        data: [23, 66, 68, 63, 37],
                        backgroundColor: THEMES[0].colors.primary,
                        borderColor: THEMES[0].colors.primary,
                        pointBackgroundColor: THEMES[0].colors.primary,
                        fill: true,
                        tension: 0.4,
                    },
                    {
                        label: "Credit",
                        data: [57, 99, 48, 71, 63],
                        backgroundColor: THEMES[0].colors.info,
                        borderColor: THEMES[0].colors.info,
                        pointBackgroundColor: THEMES[0].colors.info,
                        fill: true,
                        tension: 0.4,
                    },
                ],
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: "bottom",
                        labels: {
                            usePointStyle: true,
                        },
                    },
                },
            },
        };
    },
};
</script>

<style scoped>
.dashboard-chart {
    max-height: 400px;
}
</style>
