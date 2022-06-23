<script setup>
import { RouterView } from "vue-router";
import DashboardHeader from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
    <!-- Dashboard header -->
    <DashboardHeader />

    <!-- Page content -->
    <div class="main-body">
        <Sidebar />

        <main class="content">
            <RouterView />
        </main>
    </div>
</template>

<style>
@import "@/assets/base.css";

#app {
    font-weight: normal;
    color: #2c3e50;
}

.main-body {
    display: flex;
    height: calc(100vh - var(--header-height));
}

.content {
    flex-grow: 1;
    overflow-y: auto;
    padding: 1.5rem;
    background-color: var(--background-color);
}
</style>
