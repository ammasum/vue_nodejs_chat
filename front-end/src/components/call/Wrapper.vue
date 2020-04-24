<template>
  <div class="modal-content">
    <div class="modal-body">
        <div class="icvideocallwrapper">
            <div class="icvideo-contact">
                <img class="img-fluid icvideo-contact__inner" src="/assets/images/media/call-01.jpg" alt="">
            </div>
            <div class="icvideo-user">
                <img src="/assets/images/user/150/01.jpg" alt="">
            </div>
            <div class="icvideo-actions">
                <div class="icvideo-actions__left">
                    <div class="icvideo-actions__left--duration">00:36</div>
                </div>
                <div class="icvideo-actions__middle">
                    <div class="">
                        
                        <div class="iconbox btn-hovered-light" data-toggle="tooltip" data-placement="top" title="Speaker">
                            <i class="iconbox__icon mdi mdi-volume-high"></i>
                        </div>
                        <div class="iconbox btn-hovered-light" data-toggle="tooltip" data-placement="top" title="Hold">
                            <i class="iconbox__icon mdi mdi-pause"></i>
                        </div>
                        <div class="iconbox btn-hovered-light" data-toggle="tooltip" data-placement="top" title="Add Call">
                            <i class="iconbox__icon mdi mdi-phone-plus"></i>
                        </div>
                        <div class="iconbox btn-hovered-light" data-toggle="tooltip" data-placement="top" title="Disbale Video">
                            <i class="iconbox__icon mdi mdi-video-off-outline"></i>
                        </div>
                        <div class="iconbox btn-hovered-light" data-toggle="tooltip" data-placement="top" title="Mute">
                            <i class="iconbox__icon mdi mdi-microphone-off"></i>
                        </div>
                        
                    </div>
                </div>
                <div class="icvideo-actions__right">
                    <div class="iconbox btn-hovered-light bg-danger" data-dismiss="modal" data-toggle="tooltip" data-placement="top" title="Hangup">
                        <i class="iconbox__icon text-white mdi mdi-phone-hangup"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
    // this.$route.params.userid
}
</script>