<template>
    <div class="layout fluid gutter--xl">
        <div>
            <div class="row">
                <div class="flex xs12">
                    <va-card :title="$t('progressBars.horizontal')">
                        <va-card-content class="row">
                            <div class="flex md4 xs12">
                                <va-progress-bar
                                    v-model="horizontalBars[0]"
                                ></va-progress-bar>
                            </div>
                            <div class="flex md4 xs12">
                                <va-progress-bar
                                    v-model="horizontalBars[1]"
                                ></va-progress-bar>
                            </div>
                            <div class="flex md4 xs12">
                                <va-progress-bar
                                    v-model="horizontalBars[2]"
                                ></va-progress-bar>
                            </div>
                        </va-card-content>
                    </va-card>
                </div>
            </div>
            <div class="row">
                <div class="flex xs12">
                    <va-card>
                        <va-card-content class="row">
                            <div class="flex md4 xs12">
                                <va-progress-bar v-model="staticState">
                                    {{ `${staticState}%` }}
                                </va-progress-bar>
                            </div>
                            <div class="flex md4 xs12">
                                <va-progress-bar
                                    v-model="dynamicState.value"
                                    :buffer="dynamicState.buffer"
                                >
                                    Buffering
                                </va-progress-bar>
                            </div>
                            <div class="flex md4 xs12">
                                <va-progress-bar indeterminate>
                                    Loading
                                </va-progress-bar>
                            </div>
                        </va-card-content>
                    </va-card>
                </div>
            </div>
            <div class="row">
                <div class="flex xs12">
                    <va-card :title="$t('progressBars.circle')">
                        <va-card-content class="row">
                            <div
                                v-for="percentage in 10"
                                class="flex xs4 sm2 lg1"
                                :key="percentage"
                            >
                                <va-progress-circle
                                    :modelValue="percentage * 10"
                                >
                                    {{ `${percentage * 10}%` }}
                                </va-progress-circle>
                            </div>
                            <div class="flex xs4 sm2 lg1">
                                <va-progress-circle indeterminate>
                                </va-progress-circle>
                            </div>
                        </va-card-content>
                    </va-card>
                </div>
            </div>
            <div class="row">
                <div class="flex xs12">
                    <va-card :title="$t('progressBars.colors')">
                        <va-card-content class="row">
                            <div v-for="n in 6" :key="n" class="flex md4 xs12">
                                <va-progress-bar
                                    :color="colors[n - 1]"
                                    :modelValue="(100 / 6.0) * n"
                                >
                                    {{ colors[n - 1] }}
                                </va-progress-bar>
                            </div>

                            <div v-for="n in 6" :key="n" class="flex md2 xs6">
                                <div class="d-flex justify--center">
                                    <va-progress-circle
                                        :color="colors[n - 1]"
                                        :modelValue="(100 / 6.0) * n"
                                    >
                                        <span style="font-size: 0.625rem">
                                            {{ colors[n - 1] }}
                                        </span>
                                    </va-progress-circle>
                                </div>
                            </div>
                        </va-card-content>
                    </va-card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            horizontalBars: [0, 66, 100],
            staticState: 66,
            dynamicState: {
                value: 0,
                buffer: 0,
            },
            colors: ["danger", "success", "info", "gray", "warning", "black"],
        };
    },
    methods: {
        simulateBuffering() {
            const animate = setInterval(() => {
                this.dynamicState.buffer += 3 + Math.floor(Math.random() * 7);
                this.dynamicState.value += 2 + Math.floor(Math.random() * 5);

                if (this.dynamicState.value >= 100) clearInterval(animate);
            }, 500);
        },
    },
    mounted() {
        this.simulateBuffering();
    },
};
</script>
<style></style>
