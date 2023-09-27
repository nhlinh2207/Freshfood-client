<template lang="">
    <footer class="footer">
        <div class="content">
            <div class="site-footer">
                <div class="footer-inner padding-top-35 pb-lg-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-6 col-lg-5">
                                <FooterCantactWidget/>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-4">
                                <FooterInfoWidget />
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-3">
                                <FooterFacebookWidget/>
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
                        <ChatBox v-if="isAuthenticated"/>
                        <!-- Scroll to top -->
                       <AngleScrollTop />
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
import ChatBox from '@/components/client/footer/ChatBox.vue';
import AngleScrollTop from '@/components/client/footer/AngleScrollTop.vue'
import FooterCantactWidget from '@/components/client/footer/widget/FooterCantactWidget.vue'
import FooterInfoWidget from '@/components/client/footer/widget/FooterInfoWidget.vue'
import FooterFacebookWidget from '@/components/client/footer/widget/FooterFacebookWidget.vue'
export default {
    components: {
        ChatBox,
        AngleScrollTop,
        FooterCantactWidget,
        FooterInfoWidget,
        FooterFacebookWidget
    },
}
</script>
<style lang="">
    
</style>