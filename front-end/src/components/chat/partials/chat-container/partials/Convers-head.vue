<template>
    <div class="conversation-panel__head">
        <div class="back-button-md">
            <i class="mdi mdi-arrow-left"></i>
        </div>
        <div class="conversation-panel__avatar info-panel-opener">
            <div class="user-avatar user-avatar-rounded">
                <div class="chatriq-user chatriq-user-11"></div>
            </div>
            <div class="conversation__name">
                <div class="conversation__name--title">Jack P. Angulo</div>
                <div class="conversation__time">last seen at 07:15 PM</div>
            </div>
        </div>
        <div class="conversation__actions">
            <div class="action-icon"  data-toggle="modal" data-target="#outGoingCall" data-backdrop="static" data-keyboard="false">
                <i class="mdi mdi-phone"></i>
            </div>
            <div class="action-icon" data-toggle="modal" data-target="#incomingVideoStart" data-backdrop="static" data-keyboard="false">
                <i class="mdi mdi-video-outline"></i>
            </div>

            <div class="dropdown">
                <div class="action-icon" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    <i class="mdi mdi-dots-vertical"></i>
                </div>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item info-panel-opener" href="javascript:;">
                        <span><i class="mdi mdi-information-outline"></i></span>
                        <span>View Contact</span>
                    </a>
                    <a class="dropdown-item" href="javascript:;">
                        <span><i class="mdi mdi-magnify"></i></span>
                        <span>Search</span>
                    </a>
                    <a class="dropdown-item" href="javascript:;">
                        <span><i class="mdi mdi-volume-mute"></i></span>
                        <span>Mute notifications</span>
                    </a>
                    <a class="dropdown-item" href="javascript:;">
                        <span><i class="mdi mdi-wallpaper"></i></span>
                        <span>Wallpaper</span>
                    </a>
                    <a class="dropdown-item" href="javascript:;">
                        <span><i class="mdi mdi-trash-can-outline"></i></span>
                        <span>Delete Chat</span>
                    </a>
                    <a class="dropdown-item" href="javascript:;">
                        <span><i class="mdi mdi-export-variant"></i></span>
                        <span>Export Chat</span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="javascript:;">
                        <span><i class="mdi mdi-cancel"></i></span>
                        <span>Block</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Convers-head"
    }
</script>

<style scoped>

</style>