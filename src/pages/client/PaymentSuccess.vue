<template lang="">
    <div class="container">
        <BreadCrumb breadcrumbType="payment_success" />
    </div>
    <section>
        <div class="container">
            <div class="text-center">
                <div class="my-5">
                    <h3>Thanh toán đơn hàng {{cartId}} thành công !</h3>
                </div>
                <div class="mb-5">
                   <img style="width: 150px; height: auto" src="@/assets/images/logo/payment_success.jpg" />
                </div>
            </div>
        </div>
        
    </section>
</template>
<script>
import BreadCrumb from '@/components/client/BreadCrumb.vue';

export default {

    components: {
        BreadCrumb
    },

    data(){
        return{
            cartId: this.$route.query.id || '',
        }
    },
}
</script>
<style lang="">
    
</style>