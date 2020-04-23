<template>
    <div class="conversation-panel__footer">
        <div class="composer">
            <div class="composer__left">
                <div @click="imageUpload()" class="composer__left--sticker">
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
            imageUpload() {
                const img = document.createElement('INPUT');
                img.setAttribute("type", "file"); 
                img.onchange = () => {
                    this.readFile(img.files[0]);
                };
                img.click();
            },
            readFile(file) {
                const reader = new FileReader();
                reader.onload = e => {
                    this.sendFile(e.target.result);
                };
                reader.readAsDataURL(file);
            },
            sendFile(data) {
                const message = this.formatMessage('FILE/IMAGE', data);
                const msg = {
                    message: data,
                    time: "07:15 AM",
                    type: 1,
                    message_type: 'FILE/IMAGE',
                    seen: 0
                }
                this.storeConversation(msg, this.$route.params.userid);
                this.$store.state.socketInstance.send(JSON.stringify(message));
            },
            onEnter() {
                this.messages = this.messages.pop();
                this.onSend();
            },
            formatMessage(type, message) {
                return {
                    status: true,
                    type: 'USER_MESSAGE',
                    message: {
                        to: this.$route.params.userid,
                        message_type: type,
                        message: message
                    }
                }
            },
            onSend() {
                const msg = {
                    message: this.messages,
                    time: "07:15 AM",
                    type: 1,
                    message_type: 'TEXT/PLAIN',
                    seen: 0
                }
                this.storeConversation(msg, this.$route.params.userid);
                this.$store.state.socketInstance.send(JSON.stringify(this.formatMessage('TEXT/PLAIN', this.messages)));
                this.messages = '';
            }
        }
    }
</script>

<style>
/* .conversation-panel__footer{
    position: relative;
}
.conversation-panel__footer .composer{
    position: fixed;
    width: 100%;
} */
</style>