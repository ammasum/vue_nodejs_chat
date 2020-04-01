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
                <textarea class="form-control" rows="1" placeholder="Type a message..."></textarea>

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
                <div class="composer__right--send">
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
    export default {
        name: "Convers-input"
    }
</script>

<style scoped>

</style>