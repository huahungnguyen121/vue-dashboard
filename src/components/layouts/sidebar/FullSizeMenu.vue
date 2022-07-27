<template>
    <template v-for="item of items" :key="item">
        <va-collapse
            class="sidebar-item"
            v-model="item.collapse"
            :icon="item.icon"
        >
            <template #header>
                <va-sidebar-item
                    :active="isRouteActive(item)"
                    active-class="sidebar-item--active-custom"
                    :to="item.path"
                >
                    <va-sidebar-item-content>
                        <div class="sidebar-item-icon">
                            <va-icon
                                :class="`vuestic-iconset vuestic-iconset-${item.icon}`"
                                style="font-size: 19px"
                            />
                        </div>
                        <va-sidebar-item-title style="height: 24px">
                            {{ $t(`menu.${item.title}`) }}
                        </va-sidebar-item-title>
                        <va-icon
                            v-if="item.sub && !item.collapse"
                            name="expand_more"
                        />
                        <va-icon
                            v-else-if="item.sub && item.collapse"
                            name="expand_less"
                        />
                    </va-sidebar-item-content>
                </va-sidebar-item>
            </template>
            <template v-if="item.sub" #default>
                <va-sidebar-item
                    v-for="sub of item.sub"
                    :active="isRouteActive(sub, item)"
                    :key="sub"
                    :to="sub.path"
                >
                    <va-sidebar-item-content>
                        <div class="sidebar-item-icon"></div>
                        <va-sidebar-item-title style="height: 24px">
                            {{ $t(`menu.${sub.title}`) }}
                        </va-sidebar-item-title>
                    </va-sidebar-item-content>
                </va-sidebar-item>
            </template>
        </va-collapse>
    </template>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: [],
        },
    },
    data() {
        return {
            autoExpand: false,
        };
    },
    methods: {
        isRouteActive(item, expandMenu) {
            if (item.title === this.$route.name) {
                // sidebar item's title must match route name in router
                if (expandMenu && !this.autoExpand) {
                    expandMenu.collapse = true; // automatically expand sub menu
                    this.autoExpand = true; // make sure automatically expand happens only once
                }

                return true;
            }
            return false;
        },
    },
};
</script>

<style scoped>
.sidebar-item-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
}

.sidebar-item {
    cursor: pointer;
}

/* override UI lib */
.va-collapse__header__content {
    box-shadow: none !important;
    border-radius: 0 !important;
    background-color: transparent !important;
    padding: 0.75rem 1rem !important;
}

.va-sidebar-item-title {
    display: flex;
    align-items: center;
}

.va-collapse__body {
    margin-top: 0 !important;
}
</style>
