<template lang="">
    <div class="container">
        <BreadCrumb breadcrumbType="payment_success" />
    </div>
    <section>
        <h1>Thanh toán thành công đơn hàng {{cartId}}</h1>
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