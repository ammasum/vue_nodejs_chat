<template>
    <div class="chatapp__content">
        <div class="chatapp__messagetab">
            <persions-list v-if="viewMode === 'list'" @switch="viewMode = 'input'"></persions-list>
            <chat-box v-else @switch="viewMode = 'list'"></chat-box>
        </div>
    </div>
</template>

<script>
    import persionsList from '@/components/chat/partials/persions-list/Lists.vue';
    import chatBox from '@/components/chat/partials/chat-container/Chat-box.vue';
    export default {
        data() {
            return {
                viewMode: "list"
            }
        },
        components: {
            persionsList,
            chatBox
        }
    }
</script>

<style>

</style>