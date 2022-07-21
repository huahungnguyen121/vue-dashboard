<template>
    <div class="fullscreen-layout">
        <div class="fullscreen-layout__scroll-view">
            <RouterView />
        </div>
    </div>
</template>
<script>
import { RouterView } from "vue-router";

export default {
    components: {
        RouterView,
    },
};
</script>
<style scoped>
/* global css for all pages that use full screen layout */
.fullscreen-layout {
    height: 100vh;
    overflow-y: auto;
    overflow-anchor: none;
}

.fullscreen-layout__scroll-view {
    min-height: 100vh;
}

.not-found {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding-top: 10%;
    padding-bottom: var(--footer-size);

    /* variables */
    --footer-size: 2.25rem;
}
</style>
