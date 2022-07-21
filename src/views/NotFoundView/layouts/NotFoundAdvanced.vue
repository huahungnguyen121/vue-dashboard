<template>
    <div class="not-found not-found--advanced">
        <NotFoundFrame>
            <va-input
                class="mb-4"
                style="width: 310px"
                placeholder="Search on the menu"
                v-model="searchKey"
            />
            <div class="not-found--advanced__list row justify--space-between">
                <ul
                    v-for="item in nav"
                    :key="item"
                    class="flex xs3 lg1 mx-2 mb-2"
                >
                    {{
                        $t(`menu.${item.title}`)
                    }}
                    <li
                        v-if="item.sub"
                        v-for="subItem in item.sub"
                        :key="subItem"
                    >
                        <RouterLink :to="subItem.path">
                            {{ $t(`menu.${subItem.title}`) }}
                        </RouterLink>
                    </li>
                    <li v-else>
                        <RouterLink :to="item.path">
                            {{ $t(`menu.${item.title}`) }}
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </NotFoundFrame>
    </div>
</template>
<script>
import NotFoundFrame from "../components/NotFoundFrame.vue";
import navigationList from "../../../data/navigationList";

export default {
    components: { NotFoundFrame },
    data() {
        return {
            searchKey: "",
        };
    },
    computed: {
        nav() {
            const key = this.searchKey.toLowerCase().trim();
            if (key === "") return navigationList;
            const foundList = [];
            for (let i = 0; i < navigationList.length; i += 1) {
                const navItem = JSON.parse(JSON.stringify(navigationList[i]));
                if (navItem.sub) {
                    navItem.sub = navItem.sub.filter((subItem) =>
                        this.$t(`menu.${subItem.title}`)
                            .toLowerCase()
                            .includes(key)
                    );

                    if (navItem.sub.length > 0) foundList.push(navItem);
                } else {
                    if (
                        this.$t(`menu.${navItem.title}`)
                            .toLowerCase()
                            .includes(key)
                    )
                        foundList.push(navItem);
                }
            }

            return foundList;
        },
    },
};
</script>
<style>
.not-found--advanced__list {
    width: 160%;
}
</style>
