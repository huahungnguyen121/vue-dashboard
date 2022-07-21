<template>
    <div class="not-found__frame">
        <div class="not-found__background-image">
            <NotFoundBackground />
        </div>

        <slot name="image"></slot>

        <NotFoundTitle />

        <slot></slot>
    </div>

    <NotFoundFooter />
</template>

<script>
import NotFoundTitle from "./NotFoundTitle.vue";
import NotFoundBackground from "../../../components/icons/NotFoundBackground.vue";
import NotFoundFooter from "./NotFoundFooter.vue";

export default {
    components: { NotFoundTitle, NotFoundBackground, NotFoundFooter },
};
</script>

<style scoped>
.not-found__frame {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--va-gray);
}

.not-found__background-image {
    position: fixed;
    bottom: 0;
    left: 1rem;
    width: 30vw;
    height: 40vh;
}
</style>
