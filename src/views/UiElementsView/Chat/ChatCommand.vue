<template>
    <div class="chat-command">
        <va-input
            @keydown.enter="emitMessage"
            v-model="message"
            :placeholder="$t('chat.inputPlaceholder')"
        >
            <template #append>
                <va-button @click="emitMessage">
                    {{ $t("chat.sendButton") }}
                </va-button>
            </template>
        </va-input>
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: "",
        };
    },
    methods: {
        emitMessage() {
            const msg = this.message.trim();
            if (msg !== "") {
                this.$emit("sendmsg", msg);
                this.message = "";
            }
        },
    },
};
</script>
<style></style>
