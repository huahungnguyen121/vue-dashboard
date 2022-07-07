<template>
    <div class="pt-2 layout">
        <div class="mb-2"></div>
        <div class="row">
            <div class="flex xs12 xl6 mb-5">
                <div class="d-flex align--center">
                    <div class="overview-icon mr-2">
                        <IconVue />
                    </div>
                    <div class="text--bold">
                        {{ $t("dashboard.tabs.overview.built") }}
                    </div>
                </div>
            </div>
            <div class="flex xs12 xl6 mb-5">
                <div class="d-flex align--center">
                    <div class="overview-icon mr-2">
                        <Responsive />
                    </div>
                    <div class="text--bold">
                        {{ $t("dashboard.tabs.overview.mobile") }}
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="flex xs12 xl6 mb-5">
                <div class="d-flex align--center">
                    <div class="overview-icon mr-2">
                        <Free />
                    </div>
                    <div class="text--bold">
                        {{ $t("dashboard.tabs.overview.free") }}
                    </div>
                </div>
            </div>
            <div class="flex xs12 xl6 mb-5">
                <div class="d-flex align--center">
                    <div class="overview-icon mr-2">
                        <Rich />
                    </div>
                    <div class="text--bold">
                        {{ $t("dashboard.tabs.overview.components") }}
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="flex xs12 xl6 mb-5">
                <div class="d-flex align--center">
                    <div class="overview-icon mr-2">
                        <Fresh />
                    </div>
                    <div class="text--bold">
                        {{ $t("dashboard.tabs.overview.fresh") }}
                    </div>
                </div>
            </div>
            <div class="flex xs12 xl6 mb-5">
                <div class="d-flex align--center">
                    <div class="overview-icon mr-2">
                        <CleanCode />
                    </div>
                    <div class="text--bold">
                        {{ $t("dashboard.tabs.overview.nojQuery") }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import IconVue from "../../../components/icons/IconVue.vue";
import Responsive from "../../../components/icons/Responsive.vue";
import Free from "../../../components/icons/Free.vue";
import Rich from "../../../components/icons/Rich.vue";
import Fresh from "../../../components/icons/Fresh.vue";
import CleanCode from "../../../components/icons/CleanCode.vue";

export default {
    components: { IconVue, Responsive, Free, Rich, Fresh, CleanCode },
};
</script>

<style>
.overview-icon {
    height: 100%;
    min-height: 65px;
    min-width: 65px;
}
</style>
