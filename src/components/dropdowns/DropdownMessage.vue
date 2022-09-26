<template>
    <DropdownVue>
        <template #label>
            <div class="btn-icon">
                <va-icon name="mail" />
            </div>
        </template>
        <div class="dropdown-container">
            <div class="message-list">
                <div
                    class="custom-dropdown-item"
                    v-for="message of messages"
                    :class="{ unread: message.unread }"
                    :key="message"
                    @click="message.unread = false"
                >
                    <va-avatar
                        size="1.5rem"
                        :src="message.image"
                        class="message-item-image"
                    />

                    <span class="message-item-detail">{{
                        $t("messages.new", { name: message.name })
                    }}</span>
                </div>
            </div>
            <div class="control-group">
                <va-button size="small" class="mr-2">{{
                    $t("messages.all")
                }}</va-button>
                <va-button
                    size="small"
                    outline
                    @click="markAllRead"
                    :disabled="!messages.some((msg) => msg.unread)"
                    >{{ $t("messages.mark_as_read") }}</va-button
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
            messages: [
                {
                    image: "https://picsum.photos/123",
                    detail: "New messages from Oleg M",
                    name: "Oleg M",
                    unread: true,
                },
                {
                    image: "https://picsum.photos/100",
                    detail: "New messages from Andrei H",
                    name: "Andrei H",
                    unread: true,
                },
            ],
        };
    },
    methods: {
        markAllRead() {
            this.messages.forEach((msg) => (msg.unread = false));
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
    position: relative;
}

.custom-dropdown-item:hover > span {
    color: var(--va-primary) !important;
}

.message-list {
    cursor: pointer;
}

.message-item-image {
    margin-right: 0.5rem;
}

.custom-dropdown-item > span {
    color: var(--va-gray);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.message-item-detail {
    max-width: 85%;
}

.dropdown-container {
    padding: 0.5rem 1.5rem;
    max-width: 20rem;
    width: max-content;
}

.btn-icon {
    min-width: 1.5rem;
    display: flex;
    align-items: center;
}

.control-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.custom-dropdown-item.unread::after {
    content: "";
    background-color: red;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    border-radius: 50%;
    width: 0.375rem;
    height: 0.375rem;
}
</style>
