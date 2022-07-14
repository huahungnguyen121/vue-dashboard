<template>
    <div class="layout fluid gutter--xl">
        <div class="row">
            <div class="flex xs12">
                <va-card>
                    <va-card-title>
                        {{ $t("notificationsPage.notifications.title") }}
                    </va-card-title>
                    <va-card-content>
                        <div
                            v-for="alert in notifications"
                            :key="alert"
                            class="mb-3"
                        >
                            <va-alert :color="alert.color" closeable>
                                {{ alert.message }}
                                <template #icon>
                                    <va-badge
                                        :text="alert.badgeText"
                                        :color="
                                            alert.color === 'primary'
                                                ? 'danger'
                                                : alert.color
                                        "
                                    />
                                </template>
                            </va-alert>
                        </div>
                    </va-card-content>
                </va-card>
            </div>
        </div>
        <div class="row">
            <div class="flex xs12">
                <va-card>
                    <va-card-title>
                        {{ $t("notificationsPage.toasts.title") }}
                    </va-card-title>
                    <va-card-content class="row">
                        <div class="flex xs12 md6">
                            <va-input
                                class="mb-3"
                                v-model="toast.message"
                                required
                                :label="
                                    $t('notificationsPage.toasts.textLabel')
                                "
                            />
                            <va-input
                                class="mb-3"
                                v-model="toast.duration"
                                type="number"
                                :min="0"
                                required
                                :label="
                                    $t('notificationsPage.toasts.durationLabel')
                                "
                            />
                        </div>
                        <div class="flex xs12 md6">
                            <div class="row">
                                <div class="flex xs12">
                                    <div
                                        class="notifications__toast-position-select"
                                    >
                                        <div
                                            class="notifications__toast-position-option--top"
                                        >
                                            <div
                                                class="notifications__toast-position-top-left"
                                                :class="{
                                                    active:
                                                        toast.position ===
                                                        'top-left',
                                                }"
                                                @click="
                                                    changeToastPosition(
                                                        'top-left'
                                                    )
                                                "
                                            ></div>
                                            <div
                                                class="notifications__toast-position-top-right"
                                                :class="{
                                                    active:
                                                        toast.position ===
                                                        'top-right',
                                                }"
                                                @click="
                                                    changeToastPosition(
                                                        'top-right'
                                                    )
                                                "
                                            ></div>
                                        </div>
                                        <div
                                            class="notifications__toast-position-option--bottom"
                                        >
                                            <div
                                                class="notifications__toast-position-bottom-left"
                                                :class="{
                                                    active:
                                                        toast.position ===
                                                        'bottom-left',
                                                }"
                                                @click="
                                                    changeToastPosition(
                                                        'bottom-left'
                                                    )
                                                "
                                            ></div>
                                            <div
                                                class="notifications__toast-position-bottom-right"
                                                :class="{
                                                    active:
                                                        toast.position ===
                                                        'bottom-right',
                                                }"
                                                @click="
                                                    changeToastPosition(
                                                        'bottom-right'
                                                    )
                                                "
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex xs12">
                            <va-button @click="launchToast">
                                {{ $t("notificationsPage.toasts.launchToast") }}
                            </va-button>
                        </div>
                    </va-card-content>
                </va-card>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            notifications: [
                {
                    message: this.$t(
                        "notificationsPage.notifications.successMessage"
                    ),
                    color: "primary",
                    badgeText: this.$t(
                        "notificationsPage.notifications.success"
                    ),
                },
                {
                    message: this.$t(
                        "notificationsPage.notifications.infoMessage"
                    ),
                    color: "info",
                    badgeText: this.$t("notificationsPage.notifications.info"),
                },
                {
                    message: this.$t(
                        "notificationsPage.notifications.warningMessage"
                    ),
                    color: "warning",
                    badgeText: this.$t(
                        "notificationsPage.notifications.warning"
                    ),
                },
                {
                    message: this.$t(
                        "notificationsPage.notifications.dangerMessage"
                    ),
                    color: "danger",
                    badgeText: this.$t(
                        "notificationsPage.notifications.danger"
                    ),
                },
                {
                    message: this.$t(
                        "notificationsPage.notifications.warningMessage"
                    ),
                    color: "gray",
                    badgeText: this.$t("notificationsPage.notifications.gray"),
                },
                {
                    message: this.$t(
                        "notificationsPage.notifications.dangerMessage"
                    ),
                    color: "dark",
                    badgeText: this.$t("notificationsPage.notifications.dark"),
                },
            ],
            toast: {
                message: "This toast is awesome!",
                duration: 2500,
                position: "bottom-right",
            },
        };
    },
    watch: {
        "toast.duration"(value) {
            const parsedNum = parseInt(value);
            if (parsedNum < 0) this.toast.duration = parsedNum * -1;
        },
    },
    methods: {
        changeToastPosition(postion) {
            this.toast.position = postion;
        },
        launchToast() {
            this.$vaToast.init({
                message: this.toast.message,
                position: this.toast.position,
                duration: this.toast.duration,
                color: "primary",
            });
        },
    },
};
</script>

<style>
.va-alert__close > .va-alert__close--closeable:focus {
    outline: none !important;
}
</style>

<style scoped>
.notifications__toast-position-select {
    display: flex;
    flex-direction: column;
}

.notifications__toast-position-option--top,
.notifications__toast-position-option--bottom {
    display: flex;
}

.notifications__toast-position-option--top {
    margin-bottom: 2px;
}

.notifications__toast-position-top-left,
.notifications__toast-position-top-right,
.notifications__toast-position-bottom-left,
.notifications__toast-position-bottom-right {
    width: 36px;
    height: 36px;
    background-color: var(--va-primary);
    opacity: 0.3;
    cursor: pointer;
}

.notifications__toast-position-top-left,
.notifications__toast-position-bottom-left {
    margin-right: 2px;
}

.notifications__toast-position-top-left.active,
.notifications__toast-position-top-right.active,
.notifications__toast-position-bottom-left.active,
.notifications__toast-position-bottom-right.active {
    opacity: 1 !important;
}

.notifications__toast-position-top-left:hover,
.notifications__toast-position-top-right:hover,
.notifications__toast-position-bottom-left:hover,
.notifications__toast-position-bottom-right:hover {
    opacity: 0.6;
}
</style>
