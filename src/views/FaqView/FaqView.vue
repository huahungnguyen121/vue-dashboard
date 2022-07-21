<template>
    <div class="layout fluid gutter--xl">
        <div class="row mb-4">
            <va-card class="flex xs12">
                <va-card-title> Do you have any questions? </va-card-title>
                <va-card-content>
                    <va-input>
                        <template #prepend>
                            <va-icon name="search" />
                        </template>
                    </va-input>
                </va-card-content>
            </va-card>
        </div>
        <div class="row">
            <va-card class="flex xs12">
                <va-card-title> Frequently asked questions </va-card-title>
                <va-card-content>
                    <div v-for="i in 5" :key="i" class="pa-3">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Nemo veniam provident voluptates consequuntur
                        nostrum cumque possimus unde asperiores magnam rem.
                    </div>
                </va-card-content>
            </va-card>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style></style>
