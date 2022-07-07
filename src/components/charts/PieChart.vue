<template>
    <Pie :chart-data="chartData" :chart-options="chartOptions" />
</template>
<script>
import { Pie } from "vue-chartjs";
import { Chart as ChartJS, registerables } from "chart.js";
import { THEMES } from "../../themes/themes";
import chartConfig from "./chartConfig";

ChartJS.register(...registerables);

export default {
    name: "PieChart",
    components: {
        Pie,
    },
    data() {
        return {
            chartData: {
                labels: ["Africa", "Asia", "Europe"],
                datasets: [
                    {
                        data: [2478, 5267, 734],
                        backgroundColor: [
                            THEMES[0].colors.primary,
                            THEMES[0].colors.warning,
                            THEMES[0].colors.danger,
                        ],
                    },
                ],
            },
            chartOptions: { ...chartConfig },
        };
    },
};
</script>
