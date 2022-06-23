<script setup>
import { RouterLink } from "vue-router";
import DashboardLogoLight from "@/components/icons/DashboardLogoLight.vue";
import DropdownLang from "./DropdownLang.vue";
import MenuExpandLight from "./icons/MenuExpandLight.vue";
</script>

<template>
    <header class="header">
        <div class="header-logo">
            <MenuExpandLight />
            <DashboardLogoLight />
        </div>

        <div class="header-center"></div>

        <div class="header-control">
            <DropdownLang />
            <va-button-dropdown
                class="custom-dropdown-btn"
                flat
                label="Vasilli S"
                color="primary"
            >
                <div class="profile-dropdown">
                    <span class="profile-dropdown-item">My Profile</span>
                    <span class="profile-dropdown-item">Logout</span>
                </div>
            </va-button-dropdown>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {};
    },
};
</script>

<style>
.header {
    display: flex;
    justify-content: space-between;
    height: var(--header-height);
    box-shadow: var(--box-shadow);
    padding: 0 2rem 0 1rem;
    align-items: center;
    z-index: 100;
}

.header-logo {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.header-control {
    display: flex;
    align-items: center;
}

.profile-dropdown {
    display: flex;
    flex-direction: column;
}

.profile-dropdown-item {
    padding: 0.5rem;
    cursor: pointer;
}

.custom-dropdown-btn .va-button--hover,
.custom-dropdown-btn .va-button--focus {
    background-color: transparent !important;
}

.va-dropdown__content-wrapper .va-dropdown__content {
    background: var(--background-color) !important;
}
</style>
