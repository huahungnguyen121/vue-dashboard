<script setup>
import DropdownVue from "./Dropdown.vue";
import USFlagVue from "./flags/USFlag.vue";
import VieFlagVue from "./flags/VieFlag.vue";
</script>

<template>
    <DropdownVue>
        <template #label>
            <div class="flag-icon">
                <component
                    :is="items.find((item) => item.value === value).icon"
                ></component>
            </div>
        </template>
        <div
            class="custom-dropdown-item"
            v-for="(option, index) of items"
            :key="index"
            @click="changeLang(option.value)"
        >
            <div class="flag-icon item">
                <component :is="option.icon"></component>
            </div>
            <div class="custom-dropdown-item-label">
                {{ $t(`languages.${option.value}`) }}
            </div>
        </div>
    </DropdownVue>
</template>

<script>
export default {
    data() {
        return {
            value: this.$i18next.language,
            items: [
                {
                    value: "en",
                    title: "English",
                    icon: "USFlagVue",
                },
                {
                    value: "vi",
                    title: "Vietnamese",
                    icon: "VieFlagVue",
                },
            ],
        };
    },
    components: {
        USFlagVue,
        VieFlagVue,
    },
    methods: {
        changeLang(value) {
            this.$i18next.changeLanguage(value);
            this.value = value;
        },
    },
};
</script>

<style scoped>
.custom-dropdown-item {
    padding: 1rem 1.5rem;
    color: black;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: var(--background-color);
}

.custom-dropdown-item:hover {
    color: var(--va-primary);
}

.flag-icon {
    min-width: 1.5rem;
    display: flex;
    align-items: center;
}

.flag-icon.item {
    margin-right: 0.5rem;
}
</style>
