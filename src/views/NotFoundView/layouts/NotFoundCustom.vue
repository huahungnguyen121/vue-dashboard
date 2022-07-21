<template>
    <div class="not-found not-found--custom">
        <NotFoundFrame>
            <template #image>
                <img
                    class="not-found--custom__image mb-3"
                    src="https://i.imgur.com/wodIng5.png"
                    alt="custom-image"
                />
            </template>
            <va-button to="/">{{ $t("404.back_button") }}</va-button>
        </NotFoundFrame>
    </div>
</template>
<script>
import NotFoundFrame from "../components/NotFoundFrame.vue";

export default { components: { NotFoundFrame } };
</script>
<style scoped>
.not-found--custom__image {
    max-height: 400px;
    width: auto;
}
</style>
