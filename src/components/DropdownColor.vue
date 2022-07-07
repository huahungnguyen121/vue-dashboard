<template>
    <DropdownVue>
        <template #label>
            <div class="btn-icon">
                <va-icon name="palette" />
            </div>
        </template>
        <div class="dropdown-color-container">
            <va-button-toggle
                outline
                v-model="value"
                :options="options"
                size="small"
            />
            <div class="color-list">
                <div class="custom-dropdown-item" v-for="name in colorNames">
                    <va-color-indicator :color="name" />
                    <span>{{ name }}</span>
                </div>
            </div>
        </div>
    </DropdownVue>
</template>

<script>
import { useColors, useGlobalConfig } from "vuestic-ui";
import { getTheme, THEME_NAMES } from "../themes/themes";
import DropdownVue from "./Dropdown.vue";

export default {
    setup() {
        const { mergeGlobalConfig } = useGlobalConfig();
        const { getColors } = useColors();
        const colors = getColors();
        const colorNames = Object.keys(colors).filter(
            (name) => name !== "focus"
        );

        return {
            colorNames,
            mergeGlobalConfig,
        };
    },
    components: {
        DropdownVue,
    },
    data() {
        return {
            value: "light",
            options: [
                {
                    label: "Light",
                    value: THEME_NAMES.LIGHT,
                },
                {
                    label: "Semi-Dark",
                    value: THEME_NAMES.SEMI_DARK,
                },
                {
                    label: "Original",
                    value: THEME_NAMES.ORIGINAL,
                },
            ],
        };
    },
    watch: {
        value(value) {
            try {
                const toTheme = getTheme(value);
                console.log(toTheme);
                this.mergeGlobalConfig({
                    colors: toTheme.colors,
                    components: toTheme.components,
                });
            } catch (err) {
                throw Error(err);
            }
        },
    },
};
</script>

<style scoped>
.color-list {
    margin: 1rem 0;
}

.custom-dropdown-item {
    display: flex;
    width: 100%;
    padding: 0.25rem 0.5rem;
}

.custom-dropdown-item > span {
    color: var(--va-gray);
    padding: 0 0.5rem;
}

.dropdown-color-container {
    padding: 0.5rem 1.5rem;
}

.btn-icon {
    min-width: 1.5rem;
    margin-right: 0.5rem;
    display: flex;
    align-items: center;
}
</style>
