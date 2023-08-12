<template lang="">
    <section class="awe-section-12 carousel-partner module-carousel" id="carousel-0">
        <div class="section section-brand mb-5">
            <div class="container">
                <h2 class="d-none">Partner</h2>
                <OwlCarousel nav="true" loop="true" timeout="2000" :htmlData="brandData" isBrandCarousel="true" data_lg_items="6" data_md_items="6" data_sm_items="2" data_xs_items="2"/> 
            </div>
        </div>
    </section>
</template>
<script>
import OwlCarousel from "@/components/OwlCarousel.vue"
export default {
    components : {
        OwlCarousel
    },
    data(){
        return{
            brandData: [
                {
                    imageUrl : 'hang-san-xuat/brand1-165x80.png'
                },
                {
                    imageUrl : 'hang-san-xuat/brand2-165x80.png'
                },
                {
                    imageUrl : 'hang-san-xuat/brand3-165x80.png'
                },
                {
                    imageUrl : 'hang-san-xuat/brand4-165x80.png'
                },
                {
                    imageUrl : 'hang-san-xuat/brand5-165x80.png'
                },
                {
                    imageUrl : 'hang-san-xuat/brand6-165x80.png'
                }
            ]
        }
    }
}
</script>
<style lang="">
    
</style>