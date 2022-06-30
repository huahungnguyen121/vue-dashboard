<template>
    <div class="mb-3">
        <div class="progress-info">
            {{ `${current} ${$t("dashboard.charts.commits")}` }}
        </div>
        <va-progress-bar
            :model-value="(current * 100) / max"
            :color="colors[Math.floor(Math.random() * colors.length)]"
        ></va-progress-bar>
        <p class="mt-2">{{ name }}</p>
    </div>
</template>

<script>
export default {
    props: {
        current: {
            type: Number,
        },
        max: {
            type: Number,
        },
        name: {
            type: String,
        },
    },
    data() {
        return {
            colors: [
                "primary",
                "secondary",
                "info",
                "warning",
                "danger",
                "dark",
                "gray",
                "success",
            ],
        };
    },
};
</script>

<style>
.progress-info {
    margin-bottom: 0.3125rem;
    text-align: center;
    font-weight: 700;
}
</style>
