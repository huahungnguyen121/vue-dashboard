<template>
    <va-dropdown :close-on-content-click="false">
        <template #anchor>
            <div class="custom-dropdown">
                <slot name="label"></slot>
            </div>
        </template>

        <div class="custom-dropdown-content">
            <slot></slot>
        </div>
    </va-dropdown>
</template>

<script>
export default {};
</script>

<style>
.custom-dropdown {
    position: relative;
    height: 100%;
    cursor: pointer;
    margin: 0rem 1.25rem;
    padding: 0.75rem 0;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.custom-dropdown-content {
    background-color: var(--background-color);
    box-shadow: var(--box-shadow);
    border-radius: 0.5rem;
}
</style>
