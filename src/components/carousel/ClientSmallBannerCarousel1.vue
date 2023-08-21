<template lang="">
    <OwlCarousel :htmlData="smallBanner1Data" :isSmallBannerCarousel1="isSamllBanner1"
                 data_lg_items=3 data_md_items=3 data_sm_items=2 data_xs_items=2 />
</template>
<script>
import OwlCarousel from "@/components/carousel/OwlCarousel.vue"
export default {
    components : {
        OwlCarousel
    },
    data(){
        return {
            isSamllBanner1 : true,
            smallBanner1Data: [
                {
                    imageUrl : 'smallBanner/banner-1-0x0.png'
                },
                {
                    imageUrl : 'smallBanner/banner-2-0x0.png'
                },
                {
                    imageUrl : 'smallBanner/banner-3-0x0.png'
                }
            ]
        }
    },
    beforeUnmount(){
        this.isSamllBanner1 = false
    }
}
</script>
<style lang="">
    
</style>