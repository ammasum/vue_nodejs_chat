<template>
    <div class="conversation-panel__body" >
        <div class="custom-scrollbar2">
            <div class="container">
                <ul class="chat-style-2">
                    <li v-for="(conversation, convsIndex) in conversations"
                        :key="convsIndex" class="message" :class="[conversation.type == 0 ? 'sent' : 'received' ]">
                        <div class="message__text"> {{conversation.message[0]}}
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
        // props: ['conversations'],
        data: function () {
            return {
                conversations: [
                    {
                        message: ["Hi"],
                        time: "07:15 AM",
                        type: 0,
                        seen: 0
                    },
                    {
                        message: ["How are you"],
                        time: "07:15 AM",
                        type: 0
                    },
                    {
                        message: ["Hi"],
                        time: "07:15 AM",
                        type: 1
                    },
                    {
                        message: ["Im fine"],
                        time: "07:15 AM",
                        type: 1
                    }
                ]
            }
        }
    }
</script>

<style>

</style>