<template lang="">
    <footer class="footer">
        <div class="content">
            <div class="site-footer">
                <div class="footer-inner padding-top-35 pb-lg-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-6 col-lg-5">
                                <div class="footer-widget">
                                    <h3 class="hastog">
                                        <span>Liên hệ</span>
                                    </h3>
                                    <ul class="list-menu list-showroom">
                                        <li class="clearfix">
                                            <i class="block_icon fa fa-map-marker"></i>
                                            <p>A12, Đinh Tiên Hoàng, Q. Hoàn Kiếm, Hà Nội</p>
                                        </li>
                                        <li class="clearfix">
                                            <i class="block_icon fa fa-phone"></i>
                                            <a href="tel:0123456789">0123456789</a>
                                        </li>
                                        <li class="clearfix">
                                            <i class="block_icon fa fa-envelope"></i>
                                            <a href="mailto:contact@yourdomain.com">contact@yourdomain.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-4">
                                <div class="footer-widget">
                                    <h3 class="hastog">
                                        <span>Thông tin</span>
                                    </h3>
                                    <ul class="list-menu list-blogs">
                                        <li>
                                            <a href="gioi-thieu.html">Giới thiệu</a>
                                        </li>
                                        <li>
                                            <a href="thong-tin-van-chuyen.html">Thông tin vận chuyển</a>
                                        </li>
                                        <li>
                                            <a href="quy-dinh-va-dieu-khoan.html">Quy định và Điều khoản</a>
                                        </li>
                                        <li>
                                            <a href="chinh-sach-bao-mat.html">Chính sách bảo mật</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-3">
                                <div class="footer-widget">
                                    <h3 class="margin-bottom-20 hastog">
                                        <span>Facebook</span>
                                    </h3>
                                    <div class="list-menu">
                                        <div class="footerText">
                                            <div class="fb-page" data-href="https://www.facebook.com/FacebookVietNam" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright clearfix">
                    <div class="container">
                        <div class="inner clearfix">
                            <div class="row">
                                <div class="col-md-6 text-center text-lg-left">
                                    <span>&copy; Copyright 2018-2021 Fresh Food. </span>
                                </div>
                                <div class="col-md-6 text-center text-lg-right hidden-xs">
                                    <ul class="list-menu-footer"></ul>
                                </div>
                            </div>
                        </div>
                        <!-- Chat box -->
                        <div sec:authorize="isAuthenticated()" class="chatbox" style="line-height: normal">
                            <div class="chatbox__support chatbox--close">
                                <div class="chatbox__header">
                                    <div class="chatbox__content--header text-center">
                                        <h4 style="color: white">Freshfood Chat Box</h4>
                                    </div>
                                </div>
                                <div class="chatbox__messages">
                                    <div>
                                        <div id="chatbox-messages">
                                            <!-- Chat messages content -->
                                        </div>
                                    </div>
                                </div>
                                <div class="chatbox__footer">
                                    <img src="@/assets/images/logo/emojis.svg" alt="" />
                                    <!-- <img src="@/asssets/images/logo/microphone.svg" alt="" /> -->
                                    <input id="input-message" type="text" placeholder="Write a message..." />
                                    <p id="send-message" style="margin: 0; cursor: pointer" class="chatbox__send--footer">Send</p>
                                    <img src="@/assets/images/logo/attachment.svg" alt="" />
                                </div>
                            </div>
                            <div class="chatbox__button">
                                <img style="width: 50px; height: auto" src="@/assets/images/logo/icon-logo.png" />
                            </div>
                        </div>
                        <!-- Scroll to top -->
                        <div class="back-to-top show">
                            <i class="fa fa-angle-up"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>