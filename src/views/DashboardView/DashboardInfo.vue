<template>
    <DashboardRow3>
        <template #left>
            <div>
                <div class="row">
                    <div class="flex xs12 sm4">
                        <va-card color="success">
                            <va-card-content>
                                <p class="display-2 mb-0" style="color: white">
                                    {{ info.commits }}
                                </p>
                                <p style="color: white">
                                    {{ $t("dashboard.info.commits") }}
                                </p>
                            </va-card-content>
                        </va-card>
                    </div>
                    <div class="flex xs12 sm4">
                        <va-card color="danger">
                            <va-card-content>
                                <p class="display-2 mb-0" style="color: white">
                                    {{ info.components }}
                                </p>
                                <p style="color: white">
                                    {{ $t("dashboard.info.components") }}
                                </p>
                            </va-card-content>
                        </va-card>
                    </div>
                    <div class="flex xs12 sm4">
                        <va-card color="info">
                            <va-card-content>
                                <p class="display-2 mb-0" style="color: white">
                                    {{ info.teamMembers }}
                                </p>
                                <p style="color: white">
                                    {{ $t("dashboard.info.teamMembers") }}
                                </p>
                            </va-card-content>
                        </va-card>
                    </div>
                </div>
                <div class="row">
                    <div class="flex xs12 md6">
                        <va-card color="white">
                            <va-card-content>
                                <p
                                    class="display-2 mb-1"
                                    style="color: var(--va-primary)"
                                >
                                    {{ info.completedPullRequests }}
                                </p>
                                <p>
                                    {{
                                        $t(
                                            "dashboard.info.completedPullRequests"
                                        )
                                    }}
                                </p>
                            </va-card-content>
                        </va-card>
                    </div>
                    <div class="flex xs12 md6">
                        <va-card color="white">
                            <va-card-content>
                                <div class="row row-separated">
                                    <div class="flex xs4">
                                        <p
                                            class="display-2 mb-1 text--center"
                                            style="color: var(--va-primary)"
                                        >
                                            {{ info.users }}
                                        </p>
                                        <p class="mb-1 text--center">
                                            {{ $t("dashboard.info.users") }}
                                        </p>
                                    </div>
                                    <div class="flex xs4">
                                        <p
                                            class="display-2 mb-1 text--center"
                                            style="color: var(--va-info)"
                                        >
                                            {{ info.points }}
                                        </p>
                                        <p class="mb-1 text--center">
                                            {{ $t("dashboard.info.points") }}
                                        </p>
                                    </div>
                                    <div class="flex xs4">
                                        <p
                                            class="display-2 mb-1 text--center"
                                            style="color: var(--va-warning)"
                                        >
                                            {{ info.units }}
                                        </p>
                                        <p class="mb-1 text--center">
                                            {{ $t("dashboard.info.units") }}
                                        </p>
                                    </div>
                                </div>
                            </va-card-content>
                        </va-card>
                    </div>
                </div>
            </div>
        </template>
        <template #center>
            <va-card stripe stripe-color="primary">
                <va-card-title>
                    {{ $t("dashboard.info.componentRichTheme") }}
                </va-card-title>
                <va-card-content>
                    <p style="line-height: 24px">
                        Buying the right telescope to take your love of
                        astronomy to the next level is a big next step.
                    </p>
                    <div class="mt-3">
                        <va-button
                            href="https://github.com/epicmaxco/vuestic-ui"
                            target="blank"
                        >
                            {{ $t("dashboard.info.viewLibrary") }}
                        </va-button>
                    </div>
                </va-card-content>
            </va-card>
        </template>
        <template #right>
            <va-card>
                <va-image
                    src="https://i.imgur.com/qSykGko.jpg"
                    style="height: 200px"
                />
                <div class="card-footer">
                    <va-button flat @click="showModal = !showModal">
                        {{ $t("dashboard.info.exploreGallery") }}
                    </va-button>
                </div>
            </va-card>
        </template>
    </DashboardRow3>
    <va-modal v-model="showModal">
        <div class="carousel">
            <va-button
                class="carousel-navigation carousel-left"
                flat
                round
                color="white"
            >
                <va-icon name="chevron_left" />
            </va-button>
            <va-button
                class="carousel-navigation carousel-right"
                flat
                round
                color="white"
            >
                <va-icon name="chevron_right" />
            </va-button>
            <va-image
                src="https://i.imgur.com/qSykGko.jpg"
                style="height: 50vh; max-width: 100%"
            />
        </div>
    </va-modal>
</template>

<script>
import DashboardRow3 from "./DashboardRow3.vue";

export default {
    data() {
        return {
            info: {
                commits: 803,
                components: 57,
                teamMembers: 5,
                completedPullRequests: 291,
                users: 3,
                points: 24,
                units: 91,
            },
            showModal: false,
            message: "Hello",
        };
    },
    components: {
        DashboardRow3,
    },
};
</script>

<style>
.carousel {
    position: relative;
    min-width: 350px;
}
.carousel-navigation {
    position: absolute !important;
    transform: translateY(-50%);
    z-index: 1;
}

.carousel-left {
    top: 50%;
    left: 0;
}

.carousel-right {
    top: 50%;
    right: 0;
}
</style>
