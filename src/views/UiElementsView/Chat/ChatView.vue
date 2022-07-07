<template>
    <div class="layout fluid gutter--xl">
        <div class="row">
            <div class="flex xs12">
                <va-card>
                    <va-card-title>{{ $t("chat.title") }}</va-card-title>
                    <va-card-content>
                        <ChatVue
                            :data="conversation"
                            @sendmsg="handleSendMsg"
                        />
                    </va-card-content>
                </va-card>
            </div>
        </div>
    </div>
</template>
<script>
import ChatVue from "./Chat.vue";
export default {
    components: {
        ChatVue,
    },
    data() {
        return {
            myId: "2",
            conversation: [
                {
                    msgId: 1,
                    senderId: "1",
                    message:
                        "Hello! So glad you liked my work. Do you want me to shoot you?",
                },
                {
                    msgId: 2,
                    senderId: "2",
                    message:
                        "Yeah, that would be cool. Maybe this Sunday at 3 pm?",
                },
                {
                    msgId: 3,
                    senderId: "1",
                    message: "Sounds great! See you later!",
                },
                {
                    msgId: 4,
                    senderId: "2",
                    message: "Should I bring a lightbox with me?",
                },
                {
                    msgId: 5,
                    senderId: "1",
                    message:
                        "No, thanks. There is no need. Can we set up a meeting earlier?",
                },
                {
                    msgId: 6,
                    senderId: "2",
                    message:
                        "I'm working on Vuestic, so let's meet at 3pm. Thanks!",
                },
            ],
        };
    },
    methods: {
        handleSendMsg(msg) {
            this.conversation.push({
                msgId: this.conversation.length + 1,
                senderId: this.myId,
                message: msg,
            });
        },
    },
};
</script>
<style></style>
