<template>
    <div class="chat">
        <ChatDisplayVue :data="data" />
        <ChatCommandVue @sendmsg="propagateMsg" />
    </div>
</template>

<script>
import ChatDisplayVue from "./ChatDisplay.vue";
import ChatCommandVue from "./ChatCommand.vue";

export default {
    props: {
        data: {
            type: Array,
            default: [],
        },
    },
    components: {
        ChatDisplayVue,
        ChatCommandVue,
    },
    data() {
        return {
            myId: "2",
        };
    },
    methods: {
        propagateMsg(msg) {
            this.$emit("sendmsg", msg);
        },
    },
};
</script>
