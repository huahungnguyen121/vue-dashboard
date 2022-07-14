<template>
    <div class="layout fluid gutter--xl">
        <div class="row">
            <div class="flex lg6 xs12" v-for="type in iconTypes" :key="type">
                <IconsCardVue :iconType="type" />
            </div>
        </div>
    </div>
</template>
<script>
import IconsCardVue from "./IconsCard.vue";

export default {
    setup() {
        const iconTypes = [
            "vuestic",
            "brandico",
            "entypo",
            "font-awesome",
            "fontelico",
            "glyphicons",
            "iconic-stroke",
            "ionicons",
            "maki",
            "openweb",
            "material-icons",
        ];

        return {
            iconTypes,
        };
    },
    components: {
        IconsCardVue,
    },
};
</script>
<style>
.test {
    width: 2rem;
    height: 2rem;
}
</style>
