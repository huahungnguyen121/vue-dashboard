<template>
    <template v-for="item in items" :key="item">
        <va-dropdown class="hoverable" placement="right">
            <template #anchor>
                <va-sidebar-item>
                    <va-sidebar-item-content>
                        <div>
                            <va-icon :name="item.icon" />
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
                <va-sidebar-item v-for="sub in item.sub" :key="sub">
                    <va-sidebar-item-content>
                        <va-sidebar-item-title>
                            {{ $t(`menu.${sub.title}`) }}
                        </va-sidebar-item-title>
                    </va-sidebar-item-content>
                </va-sidebar-item>
            </div>
        </va-dropdown>
    </template>
</template>

<script>
export default {
    props: {
        items: Array,
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
