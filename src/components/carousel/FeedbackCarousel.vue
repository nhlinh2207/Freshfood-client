<template lang="">
    <OwlCarousel :htmlData="feedBackData" :isFeedbackCarousel="isFeedback"
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
            isFeedback : true,
            feedBackData: [
                {
                    imageUrl : 'feedback/kh4-250x250.png',
                    customer: 'Nhân viên văn phòng - Mr. Thành',
                    description: 'Là một người khá kỹ tính, tôi luôn luôn lựa chọn những thực phẩm sạch nhất. Và đây là nơi tôi đặt trọng niềm tin'
                },
                {
                    imageUrl : 'feedback/kh5-250x250.jpg',
                    customer: 'Nhân viên - Thu Phương',
                    description: 'Tôi rất tin tưởng mua thực phẩm ở FreshFood, mỗi lần công ty có liên hoan tôi lại đặt hoa quả ở đây, sẽ luôn ủng hộ FreshFood dài dài'
                },
                {
                    imageUrl : 'feedback/kh2-250x250.jpg',
                    customer: 'Nội trợ - Hoàng Yến',
                    description: 'Đối với người làm nội trợ tôi thì việc thực phẩm xuất xứ rõ nguồn gốc, đảm bảo an toàn thực phẩm rất quan trọng vì vậy tôi rất tin tưởng ở FreshFood'
                }
            ]
        }
    },
    beforeUnmount(){
        this.isFeedback = false
    }
}
</script>
<style lang="">
    
</style>