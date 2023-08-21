<template lang="">
    <OwlCarousel :htmlData="newsData" :isNewsCarousel="isNews"
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
            isNews : true,
            newsData: [
                {
                    imageUrl : 'news/blog3-358x204.jpg',
                    info: 'Tại sao Cherry tại Việt Nam lại có giá thành cao hơn rất nhiều các loại trái cây nhập khẩu',
                    summary: 'Cherry là sản phẩm có giá thành khá đắt nhưng lại là lựa chọn hàng đầu của nhiều người Việt Nam khi đem đi biếu tặng và sử dụng trong gia đình. Đa số'
                },
                {
                    imageUrl : 'news/blog2-358x204.jpg',
                    info: 'Nhập khẩu rau quả vượt mốc 1 tỷ USD, Thái Lan chiếm 60% thị phần',
                    summary: 'Theo báo cáo từ Bộ NN&PTNT, giá trị xuất khẩu hàng rau quả tháng 9 năm 2017 ước đạt 294 triệu USD, đưa giá trị xuất khẩu hàng rau quả 9 tháng đầu năm'
                },
                {
                    imageUrl : 'news/blog1-358x204.jpg',
                    info: 'Những loại trái cây Nhật đắt như vàng ròng đổ bộ về Việt Nam',
                    summary: 'Nhật Bản là đất nước có nhiều loại hoa quả có chất lượng thuộc hàng ngon nhất thế giới nhưng cũng vô cùng đắt đỏ. Đáng chú ý, nhiều loại quả do nông dân'
                }
            ]
        }
    },
    beforeUnmount(){
        this.isNews = false
    }
}
</script>
<style lang="">
    
</style>