<script setup>
import { RouterView } from "vue-router";
</script>

<template>
    <RouterView />
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

<style lang="scss">
@import "@/assets/base.css";
@import "@/assets/icon-fonts/index.scss";
@import "@/assets/flag-icons/sass/flag-icons.scss";

#app {
    font-weight: normal;
    color: #2c3e50;
    font-family: Source Sans Pro, Avenir, Helvetica, Arial, sans-serif;
}

.app-layout {
    display: flex;
    flex-direction: column;
}

.row-equal .flex .va-card {
    height: 100%;
}

.va-toast__group {
    flex-grow: 1 !important;
    --va-toast-close-icon-right: 0px;
}

.va-select {
    cursor: pointer !important;
}
</style>
