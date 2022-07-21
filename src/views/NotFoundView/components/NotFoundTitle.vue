<template>
    <div class="not-found__title text--center mb-4">
        {{ $t("404.title") }}
    </div>
    <div class="not-found__subtext text--center px-4">
        <span>
            {{ $t("404.text") }}
        </span>
        <a
            href="mailto:hello@epicmax.co"
            style="color: var(--va-primary)"
            class="link"
        >
            hello@epicmax.co
        </a>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.not-found__title {
    font-size: 3rem;
    font-weight: 500;
}

.not-found__subtext {
    margin-bottom: 2.5rem;
}
</style>
