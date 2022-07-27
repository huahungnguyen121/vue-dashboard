<script setup>
import DropdownVue from "./Dropdown.vue";
</script>

<template>
    <DropdownVue>
        <template #label>
            <div class="dropdown-lang__flag-icon">
                <va-icon
                    :class="
                        flagClass(
                            items.find((item) => item.value === value).code
                        )
                    "
                />
            </div>
        </template>
        <div
            class="custom-dropdown-item"
            v-for="(option, index) of items"
            :key="index"
            @click="changeLang(option.value)"
        >
            <div class="dropdown-lang__flag-icon item">
                <va-icon
                    :class="flagClass(option.code)"
                    style="font-size: 19px"
                />
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
                    code: "gb",
                },
                {
                    value: "vi",
                    title: "Vietnamese",
                    icon: "VieFlagVue",
                    code: "vn",
                },
            ],
        };
    },
    methods: {
        changeLang(value) {
            this.$i18next.changeLanguage(value);
            this.value = value;
        },
        flagClass(lang) {
            return `fi fi-${lang}`;
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

.dropdown-lang__flag-icon {
    min-width: 1.5rem;
    display: flex;
    align-items: center;
}

.dropdown-lang__flag-icon.item {
    margin-right: 0.5rem;
}
</style>
