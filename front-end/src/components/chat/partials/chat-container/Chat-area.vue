<template>
    <div class="chatapp__conversations">
        <router-view></router-view>
    </div>
</template>

<script>
    import ConversHead from "./partials/Convers-head";
    import ConversBody from "./partials/Convers-body";
    import ConversInput from "./partials/Convers-input";
    export default {
        data() {
            return {
                inputActive: false
            }
        },
        methods: {
            changedActiveInput(newValue) {
                this.inputActive = newValue;
            }
        },
        created() {
            this.$store.watch(
                state => state.activeInput,
                (newValue) => {
                    this.changedActiveInput(newValue);
                }
            );
        },
        components: {ConversInput, ConversBody, ConversHead}
    }
</script>

<style scoped>

</style>