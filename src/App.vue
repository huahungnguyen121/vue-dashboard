<script setup>
import { RouterView } from "vue-router";
import DashboardHeader from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

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
export default {
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
@import "@/assets/base.css";

#app {
    font-weight: normal;
    color: #2c3e50;
}

.app-layout {
    display: flex;
    flex-direction: column;
}

.main-body {
    display: flex;
    height: calc(100vh - var(--header-height));
}

.content {
    flex-grow: 1;
    overflow-y: auto;
    /* padding: 1.5rem; */
    background-color: var(--background-color);
}

.row-equal .flex .va-card {
    height: 100%;
}
</style>
