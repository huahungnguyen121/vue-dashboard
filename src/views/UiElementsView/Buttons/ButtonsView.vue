<template>
    <div class="layout fluid gutter--xl">
        <div class="row">
            <ButtonTypesVue />
            <ButtonSizesVue />
            <ButtonTagsVue />
            <ButtonIconsVue />
            <ButtonColorsVue />
            <ButtonGroupsVue />
            <ButtonTogglesVue />
            <PaginationVue />
            <ButtonsWithDropdownVue />
        </div>
    </div>
</template>
<script>
import ButtonTypesVue from "./ButtonTypes.vue";
import ButtonSizesVue from "./ButtonSizes.vue";
import ButtonTagsVue from "./ButtonTags.vue";
import ButtonIconsVue from "./ButtonIcons.vue";
import ButtonColorsVue from "./ButtonColors.vue";
import ButtonGroupsVue from "./ButtonGroups.vue";
import ButtonTogglesVue from "./ButtonToggles.vue";
import PaginationVue from "./Pagination.vue";
import ButtonsWithDropdownVue from "./ButtonsWithDropdown.vue";

export default {
    components: {
        ButtonTypesVue,
        ButtonSizesVue,
        ButtonTagsVue,
        ButtonIconsVue,
        ButtonColorsVue,
        ButtonGroupsVue,
        ButtonTogglesVue,
        PaginationVue,
        ButtonsWithDropdownVue,
    },
};
</script>
