<template>
    <div class="chatapp__conversations">
        <div v-if="inputActive">
            <!-- conversation wrapper start -->
            <div class="conversation-wrapper">
                <div class="conversation-panel">
                    <convers-head></convers-head>

                    <convers-body></convers-body>

                    <convers-input></convers-input>
                </div>
            </div>
            <!-- conversation panel end -->

            <!-- information panel start -->
            <div class="information-panel">
                <div class="information-panel__head">
                    <h5>Contact info</h5>
                    <div class="information-panel__closer">
                        <i class="mdi mdi-close"></i>
                    </div>
                </div>

                <div class="information-panel__body custom-scrollbar">

                    <div class="userprofile-avatar">
                        <img src="/assets/images/user/150/01.jpg" alt="">
                    </div>

                    <div class="userprofile-name">
                        <h4>Jack P. Angulo</h4>
                        <span>Product Manager</span>
                        <div class="social-icon-box">
                            <div class="social-icon">
                                <i class="mdi mdi-facebook"></i>
                            </div>
                            <div class="social-icon">
                                <i class="mdi mdi-linkedin"></i>
                            </div>
                            <div class="social-icon">
                                <i class="mdi mdi-twitter"></i>
                            </div>
                            <div class="social-icon">
                                <i class="mdi mdi-youtube"></i>
                            </div>
                        </div>
                    </div>

                    <hr>

                    <table class="table table-sm table-borderless user-table-info">
                        <tr>
                            <td><i class="mdi mdi-cellphone-android"></i></td>
                            <td>+91 99041-99041</td>
                        </tr>
                        <tr>
                            <td><i class="mdi mdi-web"></i></td>
                            <td>www.jackangulo.com</td>
                        </tr>
                        <tr>
                            <td><i class="mdi mdi-map-marker"></i></td>
                            <td>2519  Burnside Court, HORICON, WI, 53032</td>
                        </tr>
                    </table>

                    <hr>

                    <div class="accordion accordion-ungrouped mb-3" id="accordionExample">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <div class="card-title" data-toggle="collapse" role="button"  data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <div class="acpanel__heading">
                                        <div class="acpanel__left">
                                            <span><i class="mdi mdi-camera-outline"></i></span>
                                            <span>Photos & Media</span>
                                        </div>
                                        <div class="acpanel__right">
                                            <span class="badge badge-info">26</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                    <div class="slick-slider">
                                        <div><img class="img-fluid" src="/assets/images/media/01.jpg" alt=""></div>
                                        <div><img class="img-fluid" src="/assets/images/media/02.jpg" alt=""></div>
                                        <div><img class="img-fluid" src="/assets/images/media/03.png" alt=""></div>
                                        <div><img class="img-fluid" src="/assets/images/media/04.jpg" alt=""></div>
                                        <div><img class="img-fluid" src="/assets/images/media/05.jpg" alt=""></div>
                                        <div><img class="img-fluid" src="/assets/images/media/06.jpg" alt=""></div>
                                        <div><img class="img-fluid" src="/assets/images/media/07.jpg" alt=""></div>
                                        <div><img class="img-fluid" src="/assets/images/media/04.jpg" alt=""></div>
                                        <div><img class="img-fluid" src="/assets/images/media/02.jpg" alt=""></div>
                                        <div><img class="img-fluid" src="/assets/images/media/04.jpg" alt=""></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header" id="headingTwo">
                                <div class="card-title collapsed d-flex justify-content-between align-items-center"  role="button" data-toggle="collapse" data-target="#collapseTwo"
                                    aria-expanded="false" aria-controls="collapseTwo">
                                    <div class="acpanel__heading">
                                        <div class="acpanel__left">
                                            <span><i class="mdi mdi-file-document-outline"></i></span>
                                            <span>Documents</span>
                                        </div>
                                        <div class="acpanel__right">
                                            <span class="badge badge-info">16</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div class="card-body">
                                    <ul class="list-unstyled documentlist-wrapper">
                                        <li>
                                            <div class="doclist">
                                                <div class="docicon iconbox btn-solid-danger">
                                                    <i class="iconbox__icon mdi mdi-file-pdf-box"></i>
                                                </div>
                                                <div class="doctitle">
                                                    <div class="docname">example-file.pdf</div>
                                                    <div class="docsize">217kb</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="doclist">
                                                <div class="docicon iconbox btn-solid-info">
                                                    <i class="iconbox__icon mdi mdi-file-word-box"></i>
                                                </div>
                                                <div class="doctitle">
                                                    <div class="docname">example-file.docs</div>
                                                    <div class="docsize">217kb</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="doclist">
                                                <div class="docicon iconbox btn-solid-success">
                                                    <i class="iconbox__icon mdi mdi-file-excel-box"></i>
                                                </div>
                                                <div class="doctitle">
                                                    <div class="docname">example-file.xlxs</div>
                                                    <div class="docsize">217kb</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="doclist">
                                                <div class="docicon iconbox btn-solid-warning">
                                                    <i class="iconbox__icon mdi mdi-file-powerpoint-box"></i>
                                                </div>
                                                <div class="doctitle">
                                                    <div class="docname">example-file.pptx</div>
                                                    <div class="docsize">217kb</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="doclistall">View All</div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header" id="headingFour">
                                <div class="card-title collapsed  d-flex justify-content-between align-items-center" role="button"  data-toggle="collapse" data-target="#collapseFour"
                                    aria-expanded="false" aria-controls="collapseFour">
                                    <div class="acpanel__heading">
                                        <div class="acpanel__left">
                                            <span><i class="mdi mdi-settings-outline"></i></span>
                                            <span>Settings</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                <div class="card-body">

                                    <ul class="list-unstyled">
                                        <li>
                                            <div class="setting-list">
                                                <div class="setting-list-name">Media Auto Download</div>
                                                <div class="setting-list-switch">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input" id="customSwitch1">
                                                        <label class="custom-control-label" for="customSwitch1"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="setting-list">
                                                <div class="setting-list-name">Mute Conversation</div>
                                                <div class="setting-list-switch">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input" id="customSwitch2">
                                                        <label class="custom-control-label" for="customSwitch2"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="setting-list">
                                                <div class="setting-list-name">Notifications</div>
                                                <div class="setting-list-switch">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input" id="customSwitch3">
                                                        <label class="custom-control-label" for="customSwitch3"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="setting-list">
                                                <div class="setting-list-name">Block</div>
                                                <div class="setting-list-switch">
                                                    <div class="custom-control custom-switch">
                                                        <input type="checkbox" class="custom-control-input" id="customSwitch4">
                                                        <label class="custom-control-label" for="customSwitch4"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <!-- information panel end -->

        </div>
        <div v-else>
            <h4>Please select chat</h4>
        </div>
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