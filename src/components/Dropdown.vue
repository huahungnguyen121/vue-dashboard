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
    padding: 0.5rem 1.25rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.custom-dropdown-content {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--background-color);
    box-shadow: var(--box-shadow);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1000;
    overflow: auto;
    border-radius: 0.5rem;
    width: max-content;
}

.custom-dropdown-content.right-most {
    right: 0;
    left: auto;
    transform: translateX(0);
}
</style>
