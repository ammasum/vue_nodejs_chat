<template>
    <nav id="navbar" class="navbar navbar-expand-md navbar-light fixed-top bg-white border-bottom shadow-sm">
        <a class="navbar-brand" href="./index.html">
            <img src="/assets/images/logo.svg" width="50" height="50" class="d-inline-block align-top" alt="">
            <h1>Chatriq</h1>
        </a>

        <div class="ml-auto d-flex align-items-center">
            <div class="iconbox iconbox-search btn-hovered-light">
                <i class="iconbox__icon mdi mdi-magnify"></i>
            </div>
            <div class="navbar-nav">
                <div class="iconbox-group">
                    <div class="iconbox btn-hovered-light">
                        <i class="iconbox__icon mdi mdi-wallet-outline"></i>
                    </div>
                    <div class="iconbox btn-hovered-light">
                        <i class="iconbox__icon mdi mdi-diamond-stone"></i>
                    </div>
                    <div class="iconbox btn-hovered-light">
                        <i class="iconbox__icon mdi mdi-bell-ring-outline"></i>
                    </div>
                    <div class="iconbox btn-hovered-light">
                        <i class="iconbox__icon mdi mdi-dots-vertical"></i>
                    </div>
                </div>
                <div class="dropdown user-nav">
                    <div class="user-avatar user-avatar-sm user-avatar-rounded" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div class="chatriq-user chatriq-user-01"></div>
                    </div>
                    <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="javascript:;">
                            <span><i class="mdi mdi-account-outline"></i></span>
                            <span>Profile</span>
                        </a>
                        <a class="dropdown-item" href="javascript:;">
                            <span><i class="mdi mdi-account-multiple-plus-outline"></i></span>
                            <span>Invite People</span>
                        </a>

                        <a class="dropdown-item" href="javascript:;">
                            <span><i class="mdi mdi-settings-outline"></i></span>
                            <span>Settings</span>
                        </a>

                        <a class="dropdown-item" href="javascript:;">
                            <span><i class="mdi mdi-help-circle-outline"></i></span>
                            <span>Help</span>
                        </a>
                        <a class="dropdown-item" href="javascript:;">
                            <span><i class="mdi mdi-comment-quote-outline"></i></span>
                            <span>Feedback</span>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="javascript:;">
                            <span><i class="mdi mdi-logout-variant"></i></span>
                            <span>Logout</span>
                        </a>
                    </div>
                </div>
                <div class="iconbox-searchbar">
                    <form>
                        <input type="text" class="form-control" placeholder="Search here..." autofocus>

                        <button class="search-submit" type="submit">
                            <i class="mdi mdi-magnify"></i>
                        </button>
                        <a href="javascript:void(0)" class="search-close">
                            <i class="mdi mdi-arrow-left"></i>
                        </a>
                    </form>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>