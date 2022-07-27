<template>
    <va-sidebar
        class="sidebar"
        :class="{ 'sidebar--expanded': !minimized }"
        :minimized="minimized"
        minimizedWidth="auto"
    >
        <div class="sidebar-menu">
            <CompactMenuVue v-if="minimized" :items="items" />
            <FullSizeMenuVue v-else :items="items" />
        </div>
    </va-sidebar>
</template>

<script>
import { useColors } from "vuestic-ui";
import FullSizeMenuVue from "./FullSizeMenu.vue";
import CompactMenuVue from "./CompactMenu.vue";
import navList from "../../../data/navigationList";

export default {
    props: {
        minimized: {
            type: Boolean,
        },
    },
    components: {
        CompactMenuVue,
        FullSizeMenuVue,
    },
    setup() {
        const { getColor } = useColors();
        const primaryColor = getColor("primary");
        return {
            primaryColor,
        };
    },
    data() {
        return {
            value: false,
            items: navList,
        };
    },
};
</script>

<style lang="scss">
@import "../../../assets/sass/useful/mixins";

.sidebar {
    width: var(--sidebar-width);
    height: 100%;
    overflow-y: auto;
    overflow-anchor: none;
    flex-shrink: 0;
}

.sidebar.sidebar--expanded {
    @include respond-to("small") {
        width: 100vw !important;
    }
}

.sidebar-menu {
    padding: 2rem 0;
}
</style>
