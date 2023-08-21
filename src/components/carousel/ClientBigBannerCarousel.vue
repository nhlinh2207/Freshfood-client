<template lang="">
    <OwlCarousel nav=true loop=true timeout=2000 :htmlData="bigBannerData" :isBigBannerCarousel="isBigBanner"
                 data_lg_items=1 data_md_items=1 data_sm_items=1 data_xs_items=1 />
</template>
<script>
import OwlCarousel from "@/components/carousel/OwlCarousel.vue"
export default {
    components : {
        OwlCarousel
    },
    data(){
        return {
            isBigBanner : true,
            bigBannerData: [
                {
                    imageUrl : 'bigBanner/banner 1-1360x577.png'
                },
                {
                    imageUrl : 'bigBanner/banner 2-1360x577.png'
                }
            ]
        }
    },
    beforeUnmount(){
        this.isBigBanner = false
    }
}
</script>
<style lang="">
    
</style>