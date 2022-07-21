<template>
    <DropdownVue>
        <template #label>
            <div class="btn-icon">
                <va-icon name="notifications_active" />
            </div>
        </template>
        <div class="dropdown-container">
            <div class="notification-list">
                <div
                    class="custom-dropdown-item"
                    v-for="notification of notifications"
                    :key="notification"
                >
                    <va-avatar
                        size="1.5rem"
                        :src="notification.image"
                        class="notification-item-image"
                    />

                    <span class="notification-item-detail">
                        <span class="notification-item-username">{{
                            notification.username
                        }}</span
                        >{{
                            ` ${$t(`notifications.${notification.type}`, {
                                type: notification.zipType,
                            })}`
                        }}</span
                    >
                </div>
            </div>
            <div class="control-group">
                <va-button size="small" class="mr-2">{{
                    $t("notifications.all")
                }}</va-button>
                <va-button
                    size="small"
                    outline
                    @click="markAllRead"
                    :disabled="!notifications.some((noti) => noti.unread)"
                    >{{ $t("notifications.mark_as_read") }}</va-button
                >
            </div>
        </div>
    </DropdownVue>
</template>

<script>
import DropdownVue from "./Dropdown.vue";

export default {
    components: {
        DropdownVue,
    },
    data() {
        return {
            notifications: [
                {
                    image: "https://picsum.photos/123",
                    username: "Vasily S",
                    type: "sentMessage",
                    unread: true,
                },
                {
                    image: "https://picsum.photos/100",
                    username: "Oleg M",
                    type: "uploadedZip",
                    zipType: "typography component",
                    unread: true,
                },
                {
                    image: "https://picsum.photos/24",
                    username: "Andrei H",
                    type: "startedTopic",
                    unread: true,
                },
            ],
        };
    },
    methods: {
        markAllRead() {
            this.notifications.forEach((noti) => (noti.unread = false));
        },
    },
};
</script>

<style scoped>
.custom-dropdown-item {
    display: flex;
    width: 100%;
    padding: 0.25rem 0;
    margin: 0.5rem 0;
}

.custom-dropdown-item:hover > span {
    color: var(--va-primary) !important;
}

.notification-list {
    cursor: pointer;
}

.notification-item-image {
    margin-right: 0.5rem;
}

.custom-dropdown-item > span {
    color: var(--va-gray);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.notification-item-username {
    font-weight: 700;
}

.notification-item-detail {
    max-width: 85%;
}

.dropdown-container {
    padding: 0.5rem 1rem;
    max-width: 20rem;
    width: max-content;
}

.btn-icon {
    min-width: 1.5rem;
    margin-right: 0.5rem;
    display: flex;
    align-items: center;
}

.control-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
