<template>
    <div class="chatapp__content">
        <div class="chatapp__messagetab">
            <persions-list></persions-list>
            <chat-box></chat-box>
        </div>
    </div>
</template>

<script>
    import persionsList from '@/components/chat/partials/persions-list/Lists.vue';
    import chatBox from '@/components/chat/partials/chat-container/Chat-box.vue';
    export default {
        name: "wrapper",
        components: {
            persionsList,
            chatBox
        }
    }
</script>

<style>

</style>