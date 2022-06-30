<template>
    <template v-for="item of items" :key="item">
        <va-collapse
            class="sidebar-item"
            v-model="item.collapse"
            :icon="item.icon"
        >
            <template #header>
                <va-sidebar-item :active="item.active">
                    <va-sidebar-item-content>
                        <div class="sidebar-item-icon">
                            <va-icon :name="item.icon" />
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
                    :active="sub.active"
                    :key="sub"
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
        items: Array,
    },
};
</script>

<style>
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
</style>
