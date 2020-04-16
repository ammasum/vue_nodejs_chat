<template>
    <div class="conversation-panel__footer">
        <div class="composer">
            <div class="composer__left">
                <div class="composer__left--sticker">
                    <i class="mdi mdi-sticker-emoji"></i>
                </div>
                <div class="composer__left--emoticon">
                    <i class="mdi mdi-emoticon-outline"></i>
                </div>
            </div>

            <div class="composer__middle">
                <textarea class="form-control" @keyup.enter="onSend" rows="1" v-model="messages" placeholder="Type a message..."></textarea>

                <div class="composer__middle--microphone">
                    <i class="mdi mdi-microphone"></i>
                </div>
                <div class="composer__middle--photo">
                    <i class="mdi mdi-camera"></i>
                </div>
                <div class="composer__middle--attachment">
                    <i class="mdi mdi-attachment"></i>
                </div>
            </div>

            <div class="composer__right">
                <div @click="onSend" class="composer__right--send">
                    <i class="mdi mdi-send"></i>
                </div>
                <div class="composer__right--microphone">
                    <i class="mdi mdi-microphone"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import chatMixin from '../../../../../mixins/chat';
    export default {
        mixins: [chatMixin],
        data() {
            return {
                messages: ''
            }
        },
        methods: {
            onEnter() {
                this.messages = this.messages.pop();
                this.onSend();
            },
            onSend() {
                const sendMsg = {
                    status: true,
                    type: 'USER_MESSAGE',
                    message: {
                        to: this.$store.state.activeInput,
                        message: this.messages
                    }
                }
                const msg = {
                    message: this.messages,
                    time: "07:15 AM",
                    type: 1,
                    seen: 0
                }
                this.storeConversation(msg, this.$store.state.activeInput);
                this.$store.state.socketInstance.send(JSON.stringify(sendMsg));
                this.messages = '';
            }
        }
    }
</script>

<style scoped>

</style>