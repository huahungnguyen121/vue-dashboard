<template>
    <template v-for="item in items" :key="item">
        <va-dropdown class="hoverable" placement="right">
            <template #anchor>
                <va-sidebar-item
                    :active="
                        isRouteActive(item) ||
                        (item.sub && item.sub.some((sub) => isRouteActive(sub)))
                    "
                    :to="item.path"
                >
                    <va-sidebar-item-content>
                        <div>
                            <va-icon
                                :class="`vuestic-iconset vuestic-iconset-${item.icon}`"
                                style="font-size: 19px"
                            />
                            <va-icon
                                v-if="item.sub"
                                class="more_icon"
                                name="more_horiz"
                            />
                        </div>
                    </va-sidebar-item-content>
                </va-sidebar-item>
            </template>
            <div v-if="item.sub" class="compact-menu-dropdown hoverable">
                <va-sidebar-item
                    v-for="sub in item.sub"
                    :active="isRouteActive(sub)"
                    :to="sub.path"
                    :key="sub"
                >
                    <va-sidebar-item-content>
                        <va-sidebar-item-title
                            :style="calcSidebarItemStyle(isRouteActive(sub))"
                        >
                            {{ $t(`menu.${sub.title}`) }}
                        </va-sidebar-item-title>
                    </va-sidebar-item-content>
                </va-sidebar-item>
            </div>
        </va-dropdown>
    </template>
</template>

<script>
import { getThemeName, THEME_NAMES } from "../../../themes/themes";
import { useColors, useGlobalConfig } from "vuestic-ui";

export default {
    props: {
        items: {
            type: Array,
            default: [],
        },
    },
    methods: {
        isRouteActive(item) {
            return item.title === this.$route.name; // must match route name in router
        },
        calcSidebarItemStyle(isActive) {
            const colors = useGlobalConfig().getGlobalConfig().colors;

            if (!isActive) return { color: colors.gray };

            try {
                const themeName = getThemeName(colors);
                if (themeName && themeName === THEME_NAMES.LIGHT) {
                    return { color: colors.white };
                }
            } catch (err) {
                console.log(err);
            }

            return { color: colors.dark };
        },
    },
};
</script>

<style scoped>
.compact-menu-dropdown {
    color: var(--va-gray);
    background: var(--va-white);
    max-height: 60vh;
    overflow-y: auto;
    overflow-x: visible;
    min-width: 8rem;
    max-width: min-content;
}

.hoverable {
    cursor: pointer;
}

.more_icon {
    position: absolute;
    top: 115%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
