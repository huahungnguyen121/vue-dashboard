<template>
    <div class="layout fluid gutter--xl">
        <div class="row">
            <TextFormElementsVue />
            <SelectFormElementsVue />
            <CheckboxFormElementsVue />
        </div>
    </div>
</template>

<script>
import TextFormElementsVue from "./TextFormElements.vue";
import SelectFormElementsVue from "./SelectFormElements.vue";
import CheckboxFormElementsVue from "./CheckboxFormElements.vue";

export default {
    components: {
        TextFormElementsVue,
        SelectFormElementsVue,
        CheckboxFormElementsVue,
    },
};
</script>
<style></style>
