<template lang="">
    <div>
        <BreadCrumb breadcrumbType="contact" />
        <div class="container container-fix-hd contact margin-bottom-30">
            <div class="row">
                <div class="clearfix"></div>
                <div id="content" class="col-sm-12 col-xs-12 col-md-12">
                    <h3 class="title-head">
                        <span>Thông tin liên hệ</span>
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
                                                    <MapboxMap
                                                        style=" width: 550px; height: 300px; border-radius: 15px; border: 2px solid lime"
                                                        access-token="pk.eyJ1IjoibWluaG5uIiwiYSI6ImNsZTV4a2JudzAwNGwzcG1ycGRkNWp1bDcifQ.vPDFDfqa5J5Zrqghpz68RQ"
                                                        map-style="mapbox://styles/mapbox/streets-v9"
                                                        :center="mapCenter"
                                                        :zoom="15" 
                                                    >
                                                        <MapboxMarker :lng-lat="mapCenter" popup>
                                                            <template v-slot:popup>
                                                               <p>Freshfood</p>
                                                            </template>
                                                        </MapboxMarker>
                                                        <MapboxGeolocateControl/>
                                                        <MapboxNavigationControl position="bottom-right" />
                                                    </MapboxMap>
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
import { MapboxMap, MapboxMarker, MapboxGeolocateControl, MapboxNavigationControl} from '@studiometa/vue-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import BreadCrumb from '@/components/client/BreadCrumb.vue';
import ContactForm from '@/components/client/ContactForm.vue'
import { ref } from 'vue';
export default {
    components: {
        BreadCrumb,
        ContactForm,
        MapboxMap,
        MapboxMarker,
        MapboxGeolocateControl,
        MapboxNavigationControl 
    },
    data(){
        return{
            mapCenter : ref([105.8342, 21.0278])
        }
    }
}
</script>
<style scoped>
    
</style>