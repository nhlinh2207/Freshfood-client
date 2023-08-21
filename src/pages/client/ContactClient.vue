<template lang="">
    <div>
        <BreadCrumb breadcrumbType="contact" />
        <div class="container container-fix-hd contact margin-bottom-30">
            <div class="row">
                <div class="clearfix"></div>
                <div id="content" class="col-sm-12 col-xs-12 col-md-12">
                    <h3 class="title-head">
                        Thông tin liên hệ
                    </h3>
                    <div class="row">
                        <div class="col-sm-12">
                           <div class="row">
                                <div class="col-md-6">
                                    <div id = "login" class="mb-4">
                                       <ContactForm />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                <div class="contact-box-info clearfix margin-bottom-30">
                                    <div>
                                        <div class="item">
                                            <div class="d-flex">
                                                <i class="fa fa-map-marker"></i>
                                                <div class="info">
                                                    <label>Địa chỉ</label><br/>
                                                    Thanh Liệt, Thanh Trì, Hà Nội
                                                </div>
                                            </div>
                                            <div class="d-flex">
                                                <i class="fa fa-phone"></i>
                                                <div class="info">
                                                    <label>Điện thoại</label><br/>
                                                    <a href="tel:0123456789">0372983207</a>
                                                    <p>Tất cả các ngày trong tuần</p>
                                                </div>
                                            </div>
                                            <div class="d-flex">
                                                <i class="fa fa-envelope"></i>
                                                <div class="info">
                                                    <label>Email</label><br/>
                                                    <a href="mailto:nguyenhoailinh2207@gmail.com">
                                                        nguyenhoailinh2207@gmail.com
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="d-flex">
                                                <div class="info">
                                                    <ContactMap />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ContactMap from '@/components/client/ContactMap.vue';
import BreadCrumb from '@/components/client/BreadCrumb.vue';
import ContactForm from '@/components/client/ContactForm.vue'
export default {
    components: {
        BreadCrumb,
        ContactForm,
        ContactMap 
    },
    data(){
        return{
            
        }
    }
}
</script>
<style scoped>
    
</style>