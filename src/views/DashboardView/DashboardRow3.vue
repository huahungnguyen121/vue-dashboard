<template>
    <div class="row row-equal">
        <div class="flex xs12 xl6">
            <slot name="left"></slot>
        </div>
        <div class="flex xs12 md6 xl3">
            <slot name="center"></slot>
        </div>
        <div class="flex xs12 md6 xl3">
            <slot name="right"></slot>
        </div>
    </div>
</template>
