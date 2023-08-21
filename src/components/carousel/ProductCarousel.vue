<template lang="">
    <OwlCarousel nav=true loop=true timeout=2000 :htmlData="productData" :isProductCarousel="isProduct"
                data_xl_items=4 data_lg_items=4 data_md_items=4 data_sm_items=3 data_xs_items=2 data_xss_items=2 />
</template>
<script>
import OwlCarousel from "@/components/carousel/OwlCarousel.vue"
export default {
    components : {
        OwlCarousel
    },
    data(){
        return {
            isProduct : true,
            productData: [
                {
                    id : 1,
                    name : "Táo đỏ",
                    imageUrl : 'product/Taodo-260x200.jpg',
                    price : '23.000 đ'
                },
                {
                    id : 1,
                    name : "Táo đỏ",
                    imageUrl : 'product/Taodo-260x200.jpg',
                    price : '23.000 đ'
                },
                {
                    id : 1,
                    name : "Táo đỏ",
                    imageUrl : 'product/Taodo-260x200.jpg',
                    price : '23.000 đ'
                },
                {
                    id : 1,
                    name : "Táo đỏ",
                    imageUrl : 'product/Taodo-260x200.jpg',
                    price : '23.000 đ'
                }
            ]
        }
    },
    beforeUnmount(){
        this.isProduct = false
    }
}
</script>
<style lang="">
    
</style>