<template lang="">
    <div class="container">
        <BreadCrumb :breadcrumbType="'cartDetail/' + cartId" />
    </div>
    <section>
      <section class="page mb-4">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div style="padding: 20px 50px" class="bill-detail-content">
                        <div style="font-size: 18px; margin-bottom: 10px">
                            <b>Mã đơn hàng:&nbsp;&nbsp;</b><spna>{{cart.id}}</spna>
                        </div>
                        <div style="font-size: 18px; margin-bottom: 10px">
                            <b>Tên người nhận hàng:&nbsp;&nbsp;</b><spna>{{cart.receiverName}}</spna>
                        </div>
                        <div style="font-size: 18px; margin-bottom: 10px">
                            <b>Số điện thoại:&nbsp;&nbsp;</b><span>{{cart.phoneNumber}}</span>
                        </div>
                        <div style="font-size: 18px; margin-bottom: 10px">
                            <b>Email:&nbsp;&nbsp;</b><span>{{cart.email}}</span>
                        </div>
                        <div style="font-size: 18px; margin-bottom: 10px">
                            <b>Địa chỉ giao hàng:&nbsp;&nbsp;</b><span>{{cart.address}}</span>
                        </div>
                        <div style="font-size: 18px; margin-bottom: 10px">
                            <b>Thời gian đặt hàng:&nbsp;&nbsp;</b><spna>{{cart.orderTime}}</spna>
                        </div>
                        <div style="font-size: 18px; margin-bottom: 10px">
                            <b>Trạng thái đơn hàng:&nbsp;&nbsp;</b><spna>{{cart.status}}</spna>
                        </div>
                        <div style="font-size: 18px; margin-bottom: 10px">
                            <b>Thời gian giao hàng:&nbsp;&nbsp;</b><spna>{{cart.deliveryTime}}</spna>
                        </div>
                        <div class="table-responsive table-cart-content">
                            <table id="message-detail-table" class="table table-bordered">
                                <thead>
                                <tr>
                                    <td class="text-center"><strong>Ảnh</strong></td>
                                    <td class="text-center"><strong>Sản phẩm</strong></td>
                                    <td class="text-center"><strong>Số lượng</strong></td>
                                    <td class="text-center"><strong>Đơn giá</strong></td>
                                    <td class="text-center"><strong>Thành tiền</strong></td>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in cart.cartItems" :key="item.productId">
                                        <td class="text-center">
                                            <img :src="item.extraImage1" :alt="item.productId" />
                                        </td>
                                        <td class="text-center">
                                            {{item.productName}}
                                        </td>
                                        <td class="text-center">
                                            {{item.quantity}}
                                        </td>
                                        <td class="text-center">
                                            {{convertCurrency(item.productPrice)}}
                                        </td>
                                        <td class="text-center">
                                            {{convertCurrency(item.totalPrice)}}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div th:if="${cart.status == 'SENT'}" class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-12 mt-4 d-flex align-items-center justify-content-center">
                            <a th:href="@{'/freshfood/invoice/export/'+${cart.id}}">
                                <img th:src="@{/image/logo/pdf.jpg}" width="70px" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </section>
</template>
<script>
import BreadCrumb from '@/components/client/BreadCrumb.vue'
import {useRoute} from 'vue-router'
export default {
 
    components: {
        BreadCrumb
    },
    data () {
        return {
            route: useRoute(),
            cartId: useRoute().params.id,
            cart: {}
        }
    },
    methods: {
        async loadCart(){
            var resp = await this.$httpClient.get("/cart/findById", true, {cartId: this.cartId})
            if(!resp.result){
                return this.showErrorMsg(resp.message)
            }
            this.cart = resp.data
        },
    },
    
    beforeMount(){
        this.loadCart();
    },
}
</script>
<style lang="">
    
</style>