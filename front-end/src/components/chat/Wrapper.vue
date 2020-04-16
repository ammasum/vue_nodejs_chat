<template>
    <div class="chatapp__content">
        <div class="chatapp__messagetab">
            <persions-list></persions-list>
            <chat-area></chat-area>
        </div>
    </div>
</template>

<script>
    import persionsList from '@/components/chat/partials/persions-list/Lists.vue';
    import chatArea from '@/components/chat/partials/chat-container/Chat-area.vue';
    export default {
        name: "wrapper",
        components: {
            persionsList,
            chatArea
        }
    }
</script>

<style>

</style>