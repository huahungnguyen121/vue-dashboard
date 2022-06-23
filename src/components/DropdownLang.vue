<script setup>
import DropdownVue from "./Dropdown.vue";
import USFlagVue from "./flags/USFlag.vue";
import VieFlagVue from "./flags/VieFlag.vue";
</script>

<template>
    <DropdownVue>
        <template #label>
            <div class="flag-icon">
                <!-- <USFlagVue /> -->
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
            <div class="flag-icon">
                <component :is="option.icon"></component>
            </div>
            <div class="custom-dropdown-item-label">
                {{ option.title }}
            </div>
        </div>
    </DropdownVue>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
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
        toggleDropdown(e) {
            e.stopPropagation();

            this.isOpen = !this.isOpen;
        },
        closeDropdown() {
            if (this.isOpen) this.isOpen = false;
        },
        changeLang(value) {
            this.$i18next.changeLanguage(value);
            this.value = value;
        },
    },
    mounted() {
        this.outsideClick = window.addEventListener(
            "click",
            this.closeDropdown
        );
    },
    beforeUnmount() {
        window.removeEventListener("click", this.closeDropdown);
    },
    updated() {
        if (this.isOpen) {
            // check if dropdown is going off screen
            if (
                window.innerWidth -
                    this.$refs.content.getBoundingClientRect().right <
                0
            )
                this.$refs.content.classList.add("right-most");
        }
    },
};
</script>

<style>
.custom-dropdown {
    position: relative;
    height: 100%;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.5rem;
}

.custom-dropdown-content {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--background-color);
    box-shadow: var(--box-shadow);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1000;
    max-height: 50vh;
    overflow: auto;
    border-radius: 0.5rem;
}

.custom-dropdown-content.right-most {
    right: 0;
    left: auto;
    transform: translateX(0);
}

.custom-dropdown-item {
    padding: 1rem 1.5rem;
    color: inherit;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
}

.custom-dropdown-item:hover {
    color: blue;
}

.flag-icon {
    min-width: 1.5rem;
    margin-right: 0.5rem;
    display: flex;
    align-items: center;
}
</style>
