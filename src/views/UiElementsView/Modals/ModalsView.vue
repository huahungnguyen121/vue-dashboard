<template>
    <div class="layout fluid gutter--xl">
        <div class="row">
            <div class="flex md12">
                <va-card>
                    <va-card-title>
                        {{ $t("modal.title") }}
                    </va-card-title>
                    <va-card-content>
                        <va-button
                            v-for="modal in modals"
                            :key="modal"
                            :color="modal.color"
                            class="mr-2 mb-2"
                            @click="displayModal(modal.modalDetail)"
                        >
                            {{ $t(`modal.${modal.title}`) }}
                        </va-button>
                    </va-card-content>
                </va-card>
            </div>
        </div>
        <div class="row">
            <div class="flex md12">
                <va-card>
                    <va-card-title>
                        {{ $t("modal.titlePosition") }}
                    </va-card-title>
                    <va-card-content>
                        <va-button
                            v-for="modal in positions"
                            :key="modal"
                            :color="modal.color"
                            class="mr-2 mb-2"
                            @click="displayModal(modal.modalDetail)"
                        >
                            {{ $t(`modal.${modal.placement}`) }}
                        </va-button>
                    </va-card-content>
                </va-card>
            </div>
        </div>
        <va-modal
            v-model="showModal"
            :message="modalDetail.message"
            :title="modalDetail.title"
            :size="modalDetail.size"
            :no-dismiss="modalDetail.noDismiss"
            :ok-text="modalDetail.okText"
            :cancel-text="modalDetail.cancelText"
        />
    </div>
</template>
<script>
export default {
    data() {
        return {
            showModal: false,
            modalDetail: {
                title: "",
                message: "",
            },
            modals: [
                {
                    title: "small",
                    color: "danger",
                    modalDetail: {
                        okText: this.$t("modal.confirm"),
                        cancelText: this.$t("modal.cancel"),
                        size: "small",
                        title: this.$t("modal.smallTitle"),
                        message: this.$t("modal.message"),
                    },
                },
                {
                    title: "medium",
                    color: "info",
                    modalDetail: {
                        okText: this.$t("modal.confirm"),
                        cancelText: this.$t("modal.cancel"),
                        size: "medium",
                        title: this.$t("modal.mediumTitle"),
                        message: this.$t("modal.message"),
                    },
                },
                {
                    title: "large",
                    color: "warning",
                    modalDetail: {
                        okText: this.$t("modal.confirm"),
                        cancelText: this.$t("modal.cancel"),
                        size: "large",
                        title: this.$t("modal.largeTitle"),
                        message: this.$t("modal.message"),
                    },
                },
                {
                    title: "static",
                    color: "success",
                    modalDetail: {
                        okText: this.$t("modal.close"),
                        cancelText: this.$t("modal.cancel"),
                        title: this.$t("modal.staticTitle"),
                        message: this.$t("modal.staticMessage"),
                        noDismiss: true,
                    },
                },
            ],
            positions: [
                {
                    placement: "top",
                    color: "danger",
                    modalDetail: {
                        okText: this.$t("modal.confirm"),
                        cancelText: this.$t("modal.cancel"),
                        title: this.$t("modal.top"),
                        message: this.$t("modal.message"),
                    },
                },
                {
                    placement: "right",
                    color: "info",
                    modalDetail: {
                        okText: this.$t("modal.confirm"),
                        cancelText: this.$t("modal.cancel"),
                        title: this.$t("modal.right"),
                        message: this.$t("modal.message"),
                    },
                },
                {
                    placement: "bottom",
                    color: "warning",
                    modalDetail: {
                        okText: this.$t("modal.confirm"),
                        cancelText: this.$t("modal.cancel"),
                        title: this.$t("modal.bottom"),
                        message: this.$t("modal.message"),
                    },
                },
                {
                    placement: "left",
                    color: "success",
                    modalDetail: {
                        okText: this.$t("modal.close"),
                        cancelText: this.$t("modal.cancel"),
                        title: this.$t("modal.left"),
                        message: this.$t("modal.staticMessage"),
                        noDismiss: true,
                    },
                },
            ],
        };
    },
    methods: {
        displayModal(detail) {
            this.modalDetail = detail;
            this.showModal = !this.showModal;
        },
    },
};
</script>
<style></style>
