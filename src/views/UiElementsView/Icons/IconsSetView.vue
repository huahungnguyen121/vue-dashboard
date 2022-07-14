<template>
    <div class="layout fluid gutter--xl">
        <va-card class="mb-4 py-3 ma-0">
            <va-card-title>{{ iconSet?.name }}</va-card-title>
            <va-card-content class="row">
                <div class="flex md3 xs12">
                    <va-button outline :to="parentPath">
                        {{ $t("icons.back") }}
                    </va-button>
                </div>
                <div class="flex md5 xs12 flex-center">
                    <va-input
                        v-model="searchKey"
                        :label="$t('icons.search')"
                        style="max-width: 300px"
                    >
                        <template #prependInner>
                            <va-icon name="search" />
                        </template>
                    </va-input>
                </div>
                <div class="flex md4 xs12 ma-0 flex-center">
                    <va-slider
                        v-model="fontSize"
                        icon-append="text_increase"
                        icon-prepend="text_decrease"
                        :max="limit.max"
                        :min="limit.min"
                    />
                </div>
            </va-card-content>
        </va-card>
        <va-card class="flex md12">
            <va-card-title>
                {{ $t("icons.title") }}
            </va-card-title>
            <va-card-content class="row">
                <div v-if="displayList.length === 0" class="no-icon">
                    {{ $t("icons.none") }}
                </div>
                <div
                    v-else
                    v-for="icon in displayList"
                    :key="icon"
                    class="flex flex-center xs3 md1 mb-2"
                    style="flex-direction: column"
                >
                    <div class="mb-3 pt-3">
                        <va-icon :class="iconClass(icon)" :size="fontSize">
                            {{ iconName(icon) }}
                        </va-icon>
                    </div>
                    <div class="icon-name">
                        {{ icon }}
                    </div>
                </div>
            </va-card-content>
        </va-card>
    </div>
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
    data() {
        return {
            searchKey: "",
            fontSize: 30,
            limit: {
                max: 40,
                min: 20,
            },
        };
    },
    computed: {
        iconSet() {
            const data = iconSets.find(
                (set) =>
                    set.href.toLowerCase() ===
                    this.$route.params.set.toLowerCase()
            );
            if (!data) this.navigate();
            return data || {};
        },
        displayList() {
            const key = this.searchKey.trim();
            if (key === "") {
                return this.iconSet.lists[0].icons;
            }
            return this.iconSet.lists[0].icons.filter((icon) =>
                icon.toLowerCase().includes(key.toLowerCase())
            );
        },
        parentPath() {
            const path = this.$route.fullPath.split("/");
            path.pop();
            return path.join("/");
        },
    },
    methods: {
        navigate() {
            this.$router.replace({ path: "/" });
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
.icon-name {
    font-size: 0.6rem;
}

.no-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
}
</style>
