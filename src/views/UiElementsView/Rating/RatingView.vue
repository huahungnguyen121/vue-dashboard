<template>
    <div class="layout fluid gutter--xl">
        <div class="row">
            <div class="flex md6 xs12" v-for="item in list" :key="item">
                <va-card>
                    <va-card-title>
                        {{ $t(`rating.${item.name}`) }}
                    </va-card-title>
                    <va-card-content>
                        <va-rating
                            v-model="value"
                            :icon="item.icons?.icon || 'star'"
                            :empty-icon="
                                item.icons?.emptyIcon || 'star_outline'
                            "
                            :size="item.size"
                            :color="item.color"
                            :halves="item.name === 'halves'"
                            :numbers="item.number ? true : false"
                            :max="item.number?.max"
                        />
                    </va-card-content>
                </va-card>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: 2,
            list: [
                {
                    name: "singleIcon",
                    color: "danger",
                },
                {
                    name: "twoIcons",
                    color: "primary",
                    icons: {
                        icon: "notifications_off",
                        emptyIcon: "notifications",
                    },
                },
                {
                    name: "small",
                    color: "warning",
                    size: "small",
                },
                {
                    name: "large",
                    color: "info",
                    size: "large",
                },
                {
                    name: "numbers",
                    color: "primary",
                    number: {
                        max: 5,
                    },
                },
                {
                    name: "halves",
                    color: "warning",
                },
            ],
        };
    },
};
</script>
<style></style>
