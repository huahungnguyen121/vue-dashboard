<template>
    <div class="layout fluid gutter--xl">
        <div class="row">
            <template v-for="i in loopCount" ::key="i">
                <!-- Text -->
                <div class="flex xs12 sm6">
                    <va-card>
                        <va-card-title>
                            {{ $t("cards.title.default") }}
                        </va-card-title>
                        <va-card-content>
                            {{ $t("cards.contentTextLong") }}
                        </va-card-content>
                    </va-card>
                </div>
                <div class="flex xs12 sm6">
                    <va-card>
                        <va-card-title>
                            {{ $t("cards.title.withControls") }}
                        </va-card-title>
                        <va-card-content>
                            {{ $t("cards.contentTextLong") }}
                        </va-card-content>
                    </va-card>
                </div>
                <div class="flex xs12 sm6">
                    <va-card>
                        <va-card-title>
                            {{ $t("cards.title.customHeader") }}
                        </va-card-title>
                        <va-card-content>
                            {{ $t("cards.contentTextLong") }}
                        </va-card-content>
                    </va-card>
                </div>
                <div class="flex xs12 sm6">
                    <va-card>
                        <va-card-content>
                            <p>{{ $t("cards.title.withoutHeader") }}</p>
                            {{ $t("cards.contentTextLong") }}
                        </va-card-content>
                    </va-card>
                </div>

                <!-- Images -->
                <div class="flex xs12 sm6 lg4 xl3">
                    <va-card>
                        <va-image
                            style="height: 200px"
                            src="https://picsum.photos/300/200/?image=1043"
                        />
                        <va-card-title>{{
                            $t("cards.title.withImage")
                        }}</va-card-title>
                        <va-card-content>
                            {{ $t("cards.contentText") }}
                        </va-card-content>
                    </va-card>
                </div>
                <div class="flex xs12 sm6 lg4 xl3">
                    <va-card>
                        <va-image
                            style="height: 200px"
                            src="https://picsum.photos/300/200/?image=898"
                        >
                            <va-card-title style="color: white">
                                {{ $t("cards.title.withTitleOnImage") }}
                            </va-card-title>
                        </va-image>

                        <va-card-content>
                            {{ $t("cards.contentText") }}
                        </va-card-content>
                    </va-card>
                </div>
                <div class="flex xs12 sm6 lg4 xl3">
                    <va-card>
                        <va-image
                            style="height: 200px"
                            src="https://picsum.photos/300/200/?image=898"
                        >
                            <va-button>
                                {{ $t("cards.button.showMore") }}
                            </va-button>
                        </va-image>
                    </va-card>
                </div>
                <div class="flex xs12 sm6 lg4 xl3">
                    <va-card stripe stripe-color="danger">
                        <va-card-title>
                            {{ $t("cards.title.withStripe") }}
                        </va-card-title>
                        <va-card-content>
                            {{ $t("cards.contentTextLong") }}
                        </va-card-content>
                    </va-card>
                </div>

                <!-- Colors -->
                <div class="flex xs12 sm6 lg4 xl3">
                    <va-card color="success">
                        <va-card-content>
                            {{ $t("cards.contentTextLong") }}
                        </va-card-content>
                    </va-card>
                </div>
                <div class="flex xs12 sm6 lg4 xl3">
                    <va-card color="danger">
                        <va-card-content>
                            {{ $t("cards.contentTextLong") }}
                        </va-card-content>
                    </va-card>
                </div>
                <div class="flex xs12 sm6 lg4 xl3">
                    <va-card stripe>
                        <va-card-title>
                            {{ $t("cards.title.withStripe") }}
                        </va-card-title>
                        <va-card-content>
                            {{ $t("cards.contentTextLong") }}
                        </va-card-content>
                    </va-card>
                </div>
                <div class="flex xs12 sm6 lg4 xl3">
                    <va-card>
                        <va-image
                            style="height: 200px"
                            src="https://picsum.photos/300/200/?image=1067"
                        >
                            <va-card-title style="color: white">
                                {{ $t("cards.title.withTitleOnImage") }}
                            </va-card-title>
                        </va-image>

                        <va-card-content>
                            {{ $t("cards.contentText") }}
                        </va-card-content>
                    </va-card>
                </div>
            </template>
        </div>
        <!-- Load more cards -->
        <va-inner-loading :loading="loadingMore" color="dark">
            <div class="flex-center py-3">
                <va-button @click="loadMore">
                    {{ $t("cards.button.showMore") }}
                </va-button>
            </div>
        </va-inner-loading>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loadingMore: false,
            loopCount: 1,
        };
    },
    methods: {
        loadMore() {
            this.loadingMore = true;
            setTimeout(() => {
                this.loopCount++;
                this.loadingMore = false;
            }, 1000);
        },
    },
};
</script>
<style></style>
