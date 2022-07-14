<template>
    <va-card>
        <RouterLink
            :to="`${this.$route.fullPath}/${this.iconSet.href}`"
            style="color: inherit"
        >
            <div class="icon-set">
                <div class="icon-set__button-center">
                    <va-button>
                        {{ setName }}
                    </va-button>
                </div>
                <div class="row pa-3">
                    <div
                        class="flex xs2"
                        v-for="icon in iconSet.splittedList[0]"
                        :key="icon"
                    >
                        <div class="icon-set__icon-center pa-1">
                            <va-icon :class="iconClass(icon)" :size="19">
                                {{ iconName(icon) }}
                            </va-icon>
                        </div>
                    </div>
                </div>
                <div class="row pa-3">
                    <div class="flex xs2">
                        <div class="icon-set__icon-center pa-1">
                            <va-icon
                                :class="iconClass(iconSet.splittedList[1][0])"
                                :size="19"
                            >
                                {{ iconName(iconSet.splittedList[1][0]) }}
                            </va-icon>
                        </div>
                    </div>
                    <div class="flex xs8"></div>
                    <div class="flex xs2">
                        <div class="icon-set__icon-center pa-1">
                            <va-icon
                                :class="iconClass(iconSet.splittedList[1][1])"
                                :size="19"
                            >
                                {{ iconName(iconSet.splittedList[1][1]) }}
                            </va-icon>
                        </div>
                    </div>
                </div>
                <div class="row pa-3">
                    <div
                        class="flex xs2"
                        v-for="icon in iconSet.splittedList[2]"
                        :key="icon"
                    >
                        <div class="icon-set__icon-center pa-1">
                            <va-icon :class="iconClass(icon)" :size="19">
                                {{ iconName(icon) }}
                            </va-icon>
                        </div>
                    </div>
                </div>
            </div>
        </RouterLink>
    </va-card>
</template>
<script>
import brandico from "./sets/brandico.json";
import entypo from "./sets/entypo.json";
import fontAwesome from "./sets/font-awesome.json";
import fontelico from "./sets/fontelico.json";
import glyphicons from "./sets/glyphicons.json";
import iconicStroke from "./sets/iconic-stroke.json";
import ionicons from "./sets/ionicons.json";
import maki from "./sets/maki.json";
import materialIcons from "./sets/material-icons.json";
import openweb from "./sets/openweb.json";
import typicons from "./sets/typicons.json";
import vuestic from "./sets/vuestic.json";
import { RouterLink } from "vue-router";

const iconSets = [
    brandico,
    entypo,
    fontAwesome,
    fontelico,
    glyphicons,
    iconicStroke,
    ionicons,
    maki,
    materialIcons,
    openweb,
    typicons,
    vuestic,
];

export default {
    props: {
        iconType: {
            type: String,
            default: "",
        },
    },
    components: { RouterLink },
    computed: {
        iconSet() {
            const data = iconSets.find(
                (set) =>
                    set.href.toLowerCase() ===
                    this.$props.iconType.toLowerCase()
            );
            this.splitIcons(data);
            return data;
        },
        setName() {
            return this.iconSet.name.toUpperCase();
        },
    },
    methods: {
        splitIcons(data) {
            const list = data.lists[0].icons;
            const splittedList = [];
            splittedList.push(list.slice(0, 6));
            splittedList.push(list.slice(6, 8));
            splittedList.push(list.slice(8, 14));
            data.splittedList = splittedList;
        },
        iconClass(icon) {
            return this.iconSet.prefix === "material-icons"
                ? this.iconSet.prefix
                : `${this.iconSet.prefix} ${this.iconSet.prefix}-${icon}`;
        },
        iconName(icon) {
            return this.iconSet.prefix === "material-icons" ? icon : null;
        },
    },
};
</script>
<style scoped>
.icon-set {
    z-index: 0;
}
.icon-set__icon-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon-set__button-center {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
</style>
