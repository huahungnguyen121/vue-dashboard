<template>
    <div class="custom-dropdown" @click="toggleDropdown">
        <div ref="toggle">
            <slot name="label"></slot>
        </div>

        <div
            v-if="isOpen"
            class="custom-dropdown-content"
            ref="content"
            @click="(e) => e.stopPropagation()"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
        };
    },
    methods: {
        toggleDropdown(e) {
            e.stopPropagation();

            this.isOpen = !this.isOpen;
        },
        closeDropdown() {
            if (this.isOpen) this.isOpen = false;
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
    padding: 0.5rem 1.25rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
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
    /* max-height: 350px; */
    overflow: auto;
    border-radius: 0.5rem;
    width: max-content;
}

.custom-dropdown-content.right-most {
    right: 0;
    left: auto;
    transform: translateX(0);
}
</style>
