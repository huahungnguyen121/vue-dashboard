<template>
    <div class="layout fluid gutter--xl">
        <DashboardCharts />
        <DashboardInfo />
        <DashboardTabs />
    </div>
</template>

<script>
import DashboardCharts from "./DashboardCharts.vue";
import DashboardInfo from "./DashboardInfo.vue";
import DashboardTabs from "./DashboardTabs.vue";

export default {
    components: {
        DashboardCharts,
        DashboardInfo,
        DashboardTabs,
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

.card-footer {
    display: flex;
    padding: var(--va-card-padding);
}
</style>
