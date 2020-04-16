<template>
    <div class="chatapp__content">
        <div class="chatapp__messagetab">
            <persions-list v-if="viewMode === 'list'" @switch="viewMode = 'input'"></persions-list>
            <chat-area v-else @switch="switchMode()"></chat-area>
        </div>
    </div>
</template>

<script>
    import persionsList from '@/components/chat/partials/persions-list/Lists.vue';
    import chatArea from '@/components/chat/partials/chat-container/Chat-area.vue';
    export default {
        data() {
            return {
                viewMode: "list"
            }
        },
        methods: {
            switchMode() {
                console.log("Fire from mobile");
                this.viewMode = 'list'
            }
        },
        components: {
            persionsList,
            chatArea
        }
    }
</script>

<style>

</style>