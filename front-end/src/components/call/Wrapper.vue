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
    data() {
        return {
            ws: null
        }
    },
    methods: {
        parseQuery(url) {
            const vars = {}
            const queryString = url.split('?');
            if(queryString.length < 2) {
                return {};
            }
            (queryString[1].split("&")).forEach(item => {
                const tmp = item.split('=');
                vars[tmp[0]] = tmp[1];
            });
            return vars;
        },
        connectRequest() {
            const msg = {
                status: true,
                type: 'REQ_TO_CONNECT',
                data: {
                    id: this.$route.params.id
                }
            }
            this.ws.send(JSON.stringify(msg))
        },
        acceptRequest() {
            const msg = {
                status: true,
                type: 'ACCEPT_TO_CONNECT',
                data: {
                    id: this.$route.params.id
                }
            }
            this.ws.send(JSON.stringify(msg))
        },
        startSendingCallingData() {
            navigator.mediaDevices.getUserMedia({ audio: true, video: false })
              .then(this.handleCallingData);
        },
        sendAudio(audioData) {
            const msg = {
                status: true,
                type: 'AUDIO_DATA',
                data: {
                    to: 1,
                    audio: audioData
                }
            }
            this.handleForeginCallingData(msg);
            this.ws.send(JSON.stringify(msg))
        },
        handleCallingData(stream) {
            const options = {mimeType: 'audio/webm'};
            const mediaRecorder = new MediaRecorder(stream, options);

            mediaRecorder.addEventListener('dataavailable', (event) => {
                const reader = new FileReader();
                reader.onload = e => {
                    this.sendAudio(e.target.result);
                };
                reader.readAsDataURL(event.data);
            });

            mediaRecorder.start(1);
        },
        handleForeginCallingData(data) {
            data = data.data.audio;
            const audio = new Audio(data);
            audio.play();
        }
    },
    created() {
        const vars = this.parseQuery(window.location.href);
        const id = prompt("Please enter your id");
        this.ws = new WebSocket(`ws://192.168.0.105:8080?id=${id}&type=calling`);
        this.ws.addEventListener('open', () => {
            if('accept' in vars) {
                this.acceptRequest();
                return;
            }
            this.connectRequest();
        });
        this.ws.onmessage = (event) => {
            let data = event.data;
            if(typeof data === 'string') {
                data = JSON.parse(data);
            }
            switch(data.type) {
                case 'START_CALLING':
                    this.startSendingCallingData();
                    break;
                case 'AUDIO_DATA':
                    this.handleForeginCallingData(data);
            }
        }
    }
}
</script>