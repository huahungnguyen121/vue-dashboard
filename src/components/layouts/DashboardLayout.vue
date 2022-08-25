<template>
    <!-- Dashboard header -->
    <DashboardHeader
        :minimized="minimized"
        @minimized="toggleSidebar"
        :username="username === null ? undefined : username"
    />

    <!-- Page content -->
    <div class="main-body">
        <Sidebar :minimized="minimized" />

        <div class="content">
            <RouterView />
        </div>
    </div>
</template>
<script>
import DashboardHeader from "./Header.vue";
import Sidebar from "./sidebar/Sidebar.vue";
import { RouterView } from "vue-router";
import UtilConstants from "../../constants/util-constants";
import { getStorage } from "../../utils/local-storage.js";

export default {
    components: {
        DashboardHeader,
        Sidebar,
        RouterView,
    },
    data() {
        return {
            minimized: this.checkIsSmallScreen(),
            username: null,
        };
    },
    beforeRouteUpdate() {
        if (this.checkIsSmallScreen() && !this.minimized) this.minimized = true;
    },
    methods: {
        toggleSidebar(state) {
            this.minimized = state;
        },
        checkIsSmallScreen() {
            return (
                window.innerWidth < UtilConstants.SCREEN_WIDTH_BREAKPOINTS.small
            );
        },
    },
    mounted() {
        this.$emitter.on("loggedin", (isLoggedIn) => {
            if (isLoggedIn) {
                this.username = getStorage("user")?.username;
            } else {
                this.username = null;
            }
        });

        const usernameInStorage = getStorage("user")?.username;
        if (usernameInStorage !== undefined) {
            this.username = usernameInStorage;
        }
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
