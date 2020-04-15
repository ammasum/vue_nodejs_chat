<template>
    <div class="chatapp-user-list">
        <div class="chatapp-user-list-body custom-scrollbar">
            <div class="chatapp__headingbar">
                <h6>All Messages</h6>
                <div class="chatapp__actions">
                    <div class="chatapp__actions--icon">
                        <i class="mdi mdi-heart"></i>
                    </div>
                    <div class="chatapp__actions--icon">
                        <i class="mdi mdi-square-edit-outline"></i>
                    </div>
                    <div class="chatapp__actions--icon">
                        <i class="mdi mdi-dots-horizontal-circle-outline"></i>
                    </div>
                </div>
            </div>

            <ul class="list-unstyled">
                <li v-for="(connection, index) in connections" :key="index" :class="{active: connection.id === activeInput}">
                    <div class="conversation" @click="updateActiveInput(connection.id)">
                        <div class="user-avatar user-avatar-rounded online">
                            <div class="chatriq-user chatriq-user-03"></div>
                        </div>
                        <div class="conversation__details">
                            <div class="conversation__name">
                                <span class="conversation__name--title">{{connection.name}}</span>
                                <span class="conversation__time">07:15 PM</span>
                            </div>
                            <div class="conversation__message">
                                <div class="conversation__message-preview">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis alias placeat repellendus voluptate quo cupiditate.
                                </div>
                                <span><i class="mdi mdi-volume-mute"></i></span>
                                <span class="badge badge-primary badge-rounded">9</span>
                            </div>
                        </div>
                    </div>
                </li>

            </ul>
        </div>

        <ul id="mfbMenu" class="mfb-component--br mfb-slidein-spring" data-mfb-toggle="click">
            <li class="mfb-component__wrap">
                <a href="#" class="mfb-component__button--main">
                    <i class="mfb-component__main-icon--resting mdi mdi-plus ion-plus-round"></i>
                    <i class="mfb-component__main-icon--active mdi mdi-close ion-close-round"></i>
                </a>
                <ul class="mfb-component__list">
                    <li>
                        <a href="javascript:;"
                           data-mfb-label="Theme" class="mfb-component__button--child">
                            <i class="mfb-component__child-icon mdi mdi-palette"></i>
                        </a>
                    </li>

                    <li>
                        <a href="javascript:;"  data-mfb-label="Create Group" class="mfb-component__button--child">
                            <i class="mfb-component__child-icon mdi mdi-account-group"></i>
                        </a>
                    </li>

                    <li>
                        <a href="javascript:;" data-mfb-label="New Call" class="mfb-component__button--child">
                            <i class="mfb-component__child-icon mdi mdi-phone"></i>
                        </a>
                    </li>

                    <li>
                        <a href="javascript:;" data-mfb-label="New Chat" class="mfb-component__button--child">
                            <i class="mfb-component__child-icon mdi mdi-android-messages"></i>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    // import { mapGetters } from 'vuex';
    export default {
        data: function() {
            return {
                activeInput: null
            }
        },
        methods: {
            updateActiveInput(id) {
                this.$store.state.activeInput = id;
                this.activeInput = id;
            }
        },
        computed: {
            connections() {
                return this.$store.state.connections;
            }
        }
    }
</script>

<style scoped>

</style>