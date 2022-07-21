<template>
    <div class="not-found not-found--large-text">
        <NotFoundFrame>
            <template #image>
                <div class="not-found--large-text__number">404</div>
            </template>
        </NotFoundFrame>
    </div>
</template>
<script>
import NotFoundFrame from "../components/NotFoundFrame.vue";
export default { components: { NotFoundFrame } };
</script>
<style scoped>
.not-found--large-text__number {
    font-size: 21rem;
    font-weight: 600;
}
</style>
