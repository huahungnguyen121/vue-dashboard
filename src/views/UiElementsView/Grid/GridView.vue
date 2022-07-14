<template>
    <div class="layout fluid gutter--xl">
        <div class="row">
            <div class="flex xs12 md12">
                <va-card>
                    <va-card-title>{{ $t("grid.fixed") }}</va-card-title>
                    <va-card-content>
                        <div class="row">
                            <div class="flex xs12">
                                <div class="grid__illustration-block">xs12</div>
                            </div>
                            <div class="flex xs6">
                                <div class="grid__illustration-block">xs6</div>
                            </div>
                            <div class="flex xs6">
                                <div class="grid__illustration-block">xs6</div>
                            </div>
                            <div class="flex xs4">
                                <div class="grid__illustration-block">xs4</div>
                            </div>
                            <div class="flex xs4">
                                <div class="grid__illustration-block">xs4</div>
                            </div>
                            <div class="flex xs4">
                                <div class="grid__illustration-block">xs4</div>
                            </div>
                        </div>
                    </va-card-content>
                </va-card>
            </div>
            <div class="flex xs12 md12">
                <va-card>
                    <va-card-title>
                        {{ $t("grid.desktop") }}
                    </va-card-title>
                    <va-card-content>
                        <div class="row">
                            <div class="flex xs6 lg4">
                                <div class="grid__illustration-block">xs4</div>
                            </div>
                            <div class="flex xs6 lg4">
                                <div class="grid__illustration-block">xs4</div>
                            </div>
                            <div class="flex xs6 lg4">
                                <div class="grid__illustration-block">xs4</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="flex xs4 lg2">
                                <div class="grid__illustration-block">xs2</div>
                            </div>
                            <div class="flex xs4 lg2">
                                <div class="grid__illustration-block">xs2</div>
                            </div>
                            <div class="flex xs4 lg2">
                                <div class="grid__illustration-block">xs2</div>
                            </div>
                            <div class="flex xs4 lg2">
                                <div class="grid__illustration-block">xs2</div>
                            </div>
                            <div class="flex xs4 lg2">
                                <div class="grid__illustration-block">xs2</div>
                            </div>
                            <div class="flex xs4 lg2">
                                <div class="grid__illustration-block">xs2</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="flex xs3 lg1">
                                <div class="grid__illustration-block">xs1</div>
                            </div>
                            <div class="flex xs3 lg1">
                                <div class="grid__illustration-block">xs1</div>
                            </div>
                            <div class="flex xs3 lg1">
                                <div class="grid__illustration-block">xs1</div>
                            </div>
                            <div class="flex xs3 lg1">
                                <div class="grid__illustration-block">xs1</div>
                            </div>
                            <div class="flex xs3 lg1">
                                <div class="grid__illustration-block">xs1</div>
                            </div>
                            <div class="flex xs3 lg1">
                                <div class="grid__illustration-block">xs1</div>
                            </div>
                            <div class="flex xs3 lg1">
                                <div class="grid__illustration-block">xs1</div>
                            </div>
                            <div class="flex xs3 lg1">
                                <div class="grid__illustration-block">xs1</div>
                            </div>
                            <div class="flex xs3 lg1">
                                <div class="grid__illustration-block">xs1</div>
                            </div>
                            <div class="flex xs3 lg1">
                                <div class="grid__illustration-block">xs1</div>
                            </div>
                            <div class="flex xs3 lg1">
                                <div class="grid__illustration-block">xs1</div>
                            </div>
                            <div class="flex xs3 lg1">
                                <div class="grid__illustration-block">xs1</div>
                            </div>
                        </div>
                    </va-card-content>
                </va-card>
            </div>
            <div class="flex xs12 md12">
                <va-card>
                    <va-card-title>
                        {{ $t("grid.responsive") }}
                    </va-card-title>
                    <va-card-content>
                        <div class="row">
                            <div class="flex xs12 md4">
                                <div class="grid__illustration-block">
                                    xs12 md4
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="flex xs8 md3">
                                <div class="grid__illustration-block">
                                    xs8 md3
                                </div>
                            </div>
                            <div class="flex xs4 md9">
                                <div class="grid__illustration-block">
                                    xs4 md9
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="flex xs3 md4">
                                <div class="grid__illustration-block">
                                    xs3 md4
                                </div>
                            </div>
                            <div class="flex xs6 md4">
                                <div class="grid__illustration-block">
                                    xs6 md4
                                </div>
                            </div>
                            <div class="flex xs3 md4">
                                <div class="grid__illustration-block">
                                    xs3 md4
                                </div>
                            </div>
                        </div>
                    </va-card-content>
                </va-card>
            </div>
            <div class="flex xs12 md12">
                <va-card>
                    <va-card-title>
                        {{ $t("grid.offsets") }}
                    </va-card-title>
                    <va-card-content>
                        <div class="row">
                            <div class="flex xs6 md6 offset--md6">
                                <div class="grid__illustration-block">
                                    xs6 md6 offset--md6
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="flex md6 offset--md3">
                                <div class="grid__illustration-block">
                                    md6 offset--md3
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="flex md4">
                                <div class="grid__illustration-block">md4</div>
                            </div>
                            <div class="flex md4 offset--md4">
                                <div class="grid__illustration-block">
                                    md4 offset--md4
                                </div>
                            </div>
                        </div>
                    </va-card-content>
                </va-card>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.grid__illustration-block {
    min-height: 3rem;
    color: var(--va-white);
    background-color: var(--va-primary);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
