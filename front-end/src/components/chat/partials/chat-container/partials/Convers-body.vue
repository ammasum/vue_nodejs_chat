<template>
    <div class="conversation-panel__body" >
        <div class="custom-scrollbar2">
            <div class="container">
                <ul class="chat-style-2">
                    <li v-for="(conversation, convsIndex) in conversations"
                        :key="convsIndex" class="message mb-3" :class="[conversation.type == 1 ? 'sent' : 'received' ]">
                        <div v-if="conversation.message_type === 'FILE/IMAGE'" style="width: 300px;">
                            <img style="width: 300px;height: auto" :src="conversation.message">
                        </div>
                        <div v-else class="message__text"> {{conversation.message}}
                            <div class="metadata">
                                <span class="time">{{conversation.time}}</span>
                            </div>
                        </div>
                        <div class="message__options"><i class=" mdi mdi-dots-horizontal" ></i></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                conversations: [
                ]
            }
        },
        methods: {
            getConversation() {
                const allConvers = this.$store.state.conversations;
                if(this.$route.params.userid in allConvers) {
                    this.conversations = allConvers[this.$route.params.userid];
                }
            }
        },
        watch: {
            $route() {
                this.getConversation();
            }
        },
        created() {
            this.$store.watch(
                state => state.conversations,
                () => {
                    this.getConversation();
                }
            );
            this.getConversation();
        }
    }
</script>

<style>
.conversation-panel__body{
    overscroll-behavior: contain;
        overflow-x: hidden;
}
</style>