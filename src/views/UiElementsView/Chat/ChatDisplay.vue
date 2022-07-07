<template>
    <div class="chat-display" ref="chatWindow">
        <template v-for="element in data" :key="element.msgId">
            <div
                class="chat-display__message"
                :class="{
                    'chat-display__message--me': element.senderId === myId,
                }"
            >
                <span class="chat-display__message-content">
                    {{ element.message }}
                </span>
            </div>
        </template>
    </div>
</template>
<script>
export default {
    props: {
        data: {
            type: Array,
            default: [],
        },
    },
    data() {
        return {
            myId: "2",
        };
    },
    mounted() {},
    watch: {
        data: {
            handler() {
                this.$refs.chatWindow.scrollTop =
                    this.$refs.chatWindow.scrollHeight;
            },
            deep: true,
            flush: "post",
        },
    },
};
</script>
<style>
.chat-display {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    height: 20rem;
    overflow-y: auto;
}
.chat-display__message {
    flex-grow: 1;
    display: flex;
}

.chat-display__message--me {
    justify-content: flex-end;
}

.chat-display__message-content {
    padding: 0.657rem 1.375rem;
    margin-bottom: 0.625rem;
    max-width: 70%;
    overflow-wrap: break-word;
}

.chat-display__message--me > .chat-display__message-content {
    border-radius: 0.5rem;
    border-top-right-radius: 0;
    background-color: var(--va-primary);
    color: var(--va-white);
}
</style>
