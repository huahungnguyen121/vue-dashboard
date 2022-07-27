<template>
    <va-navbar class="header">
        <template #left>
            <div class="header-logo">
                <MenuCollapse
                    :class="{ flip: minimized }"
                    :color="colors.primary"
                    @click="emitEvent"
                />
                <DashboardLogo />
            </div>
        </template>

        <template #center>
            <div class="header-center"></div>
        </template>

        <template #right style="position: static">
            <div class="header-control">
                <DropdownColor />
                <DropdownMessageVue />
                <DropdownNotificationVue />
                <DropdownLang />
                <va-button-dropdown class="custom-dropdown-btn" flat>
                    <template #label>
                        <span style="font-weight: normal">
                            {{ username }}
                        </span>
                    </template>
                    <div class="profile-dropdown">
                        <span class="profile-dropdown-item">{{
                            $t("dropdown-profile.profile")
                        }}</span>
                        <span class="profile-dropdown-item">{{
                            $t("dropdown-profile.logout")
                        }}</span>
                    </div>
                </va-button-dropdown>
            </div>
        </template>
    </va-navbar>
</template>

<script>
import DropdownLang from "../dropdowns/DropdownLang.vue";
import DashboardLogo from "../icons/DashboardLogo.vue";
import MenuCollapse from "../icons/MenuCollapse.vue";
import { useColors } from "vuestic-ui";
import { computed } from "vue";
import { THEME_NAMES } from "../../themes/themes";
import DropdownColor from "../dropdowns/DropdownColor.vue";
import DropdownNotificationVue from "../dropdowns/DropdownNotification.vue";
import DropdownMessageVue from "../dropdowns/DropdownMessage.vue";

export default {
    props: {
        username: {
            type: String,
            default: "Unknown",
        },
        minimized: {
            type: Boolean,
        },
    },
    setup() {
        const { getColors, setColors } = useColors();
        const colors = computed(() => getColors());

        return {
            colors,
            THEME_NAMES,
            setColors,
        };
    },
    components: {
        DropdownLang,
        DashboardLogo,
        MenuCollapse,
        DropdownColor,
        DropdownNotificationVue,
        DropdownMessageVue,
    },
    data() {
        return {
            theme: THEME_NAMES.LIGHT,
        };
    },
    methods: {
        emitEvent() {
            this.sidebarOpen = !this.sidebarOpen;
            this.$emit("minimized", this.sidebarOpen);
        },
    },
};
</script>

<style lang="scss">
@import "../../assets/sass/useful/mixins";

.header {
    display: flex;
    justify-content: space-between;
    height: var(--header-height);
    box-shadow: var(--box-shadow);
    padding: 0 2rem 0 1rem;
    align-items: center;
    z-index: 100;

    @include respond-to("small") {
        padding: 1.1875rem 1rem 0rem;
        height: 6.5rem;
        align-items: stretch;
    }
}

.header-logo {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    @include respond-to("small") {
        flex-grow: 1;
    }
}

.header-control {
    display: flex;
    align-items: center;
    position: static;

    @include respond-to("small") {
        flex-grow: 1;
        justify-content: space-between;
    }
}

.va-navbar__right {
    position: static;
}

.custom-dropdown-btn {
    @include respond-to("small") {
        position: absolute;
        top: 0;
        right: 0;
    }
}

.custom-dropdown-btn button {
    @include respond-to("small") {
        min-height: auto;
    }
}

.profile-dropdown {
    display: flex;
    flex-direction: column;
    width: 8rem;
}

.profile-dropdown-item {
    padding: 0.5rem;
    cursor: pointer;
}

.profile-dropdown-item:hover {
    color: var(--va-primary);
}

.custom-dropdown-btn .va-button--hover,
.custom-dropdown-btn .va-button--focus {
    background-color: transparent !important;
}

.va-dropdown__content-wrapper .va-dropdown__content {
    background: var(--background-color) !important;
}

.flip {
    transform: scaleX(-100%);
}
</style>
