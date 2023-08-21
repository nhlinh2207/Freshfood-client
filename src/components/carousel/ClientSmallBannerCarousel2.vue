<template lang="">
    <OwlCarousel :htmlData="smallBanner2Data" :isSmallBannerCarousel2="isSamllBanner2"
                 data_lg_items=2 data_md_items=2 data_sm_items=2 data_xs_items=2 />
</template>
<script>
import OwlCarousel from "@/components/carousel/OwlCarousel.vue"
export default {
    components : {
        OwlCarousel
    },
    data(){
        return {
            isSamllBanner2 : true,
            smallBanner2Data: [
                {
                    imageUrl : 'smallBanner/bn1-555x160.png'
                },
                {
                    imageUrl : 'smallBanner/bn2-555x160.jpg'
                }
            ]
        }
    },
    beforeUnmount(){
        this.isSamllBanner2 = false
    }
}
</script>
<style lang="">
    
</style>