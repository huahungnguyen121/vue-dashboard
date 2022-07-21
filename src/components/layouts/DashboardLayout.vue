<template>
    <!-- Dashboard header -->
    <DashboardHeader @minimized="toggleSidebar" />

    <!-- Page content -->
    <div class="main-body">
        <Sidebar :minimized="minimized" />

        <div class="content">
            <RouterView />
        </div>
    </div>
</template>
<script>
import DashboardHeader from "../Header.vue";
import Sidebar from "../Sidebar.vue";
import { RouterView } from "vue-router";

export default {
    components: {
        DashboardHeader,
        Sidebar,
        RouterView,
    },
    data() {
        return {
            minimized: false,
        };
    },
    methods: {
        toggleSidebar(state) {
            this.minimized = state;
        },
    },
};
</script>
<style>
.main-body {
    display: flex;
    height: calc(100vh - var(--header-height));
}

.content {
    flex-grow: 1;
    overflow-y: auto;
    background-color: var(--background-color);
}
</style>
