export default {
    methods: {
        storeConversation(message, st) {
            if(!(st in this.$store.state.conversations)) {
                this.$store.state.conversations[st] = [];
            }
            const tmpConvs = this.$store.state.conversations[st];
            tmpConvs.push(message)
            this.$set(this.$store.state.conversations, st, tmpConvs);
        }
    }
}