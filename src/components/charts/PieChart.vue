<template>
    <Doughnut :chart-data="chartData" :chart-options="chartOptions" />
</template>
<script>
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, registerables } from "chart.js";
import { THEMES } from "../../themes/themes";

ChartJS.register(...registerables);

export default {
    name: "DoughnutChart",
    components: {
        Doughnut,
    },
    data() {
        return {
            chartData: {
                labels: ["North America", "South America", "Australia"],
                datasets: [
                    {
                        data: [2478, 5267, 734],
                        backgroundColor: [
                            THEMES[0].colors.danger,
                            THEMES[0].colors.info,
                            THEMES[0].colors.primary,
                        ],
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
