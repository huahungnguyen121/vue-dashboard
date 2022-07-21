<template>
    <div class="not-found not-found--simple">
        <NotFoundFrame>
            <template #image>
                <DashboardLogo height="2rem" style="margin-bottom: 13%" />
            </template>
            <va-button to="/">{{ $t("404.back_button") }}</va-button>
        </NotFoundFrame>
    </div>
</template>
<script>
import NotFoundFrame from "../components/NotFoundFrame.vue";
import DashboardLogo from "../../../components/icons/DashboardLogo.vue";
export default { components: { NotFoundFrame, DashboardLogo } };
</script>
<style></style>
