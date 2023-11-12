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
            </div>
            <div class="row mb-3" style="padding: 20px 50px">
                <div class="col-sm-12 col-lg-6">
                    <!-- Export PDF if order is finished -->
                    <div v-if="cart.isDelivered === true" class="form-group required d-flex justify-content-center align-items-center">
                        <div class="mx-3">
                            <input style="width: 20px; height: 20px" class="form-control" type="checkbox" :disabled="cart.isReceived === true" :checked="cart.isReceived === true"/>
                        </div>
                        <label v-if="cart.isDelivered === true && !cart.isReceived" for="sent-success"><strong>Đã nhận hàng</strong></label>
                        <label v-if="cart.isReceived === true" for="sent-success"><strong>Đã giao hàng thành công</strong></label>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-6 d-flex align-items-center justify-content-center">
                    <a title="In hóa đơn" @click.prevent="printInvoice" v-if="cart.isReceived === true" style="cursor: pointer">
                        <img src="@/assets/images/logo/pdf.jpg" style="width:70px" />
                    </a>
                </div>
            </div>
            <div class="text-center my-3" v-if="cart.isDelivered === true && cart.isReceived !== true">
				<button @click.prevent="receiveCart" class="btn btn-primary">Cập nhật</button>
			</div>
        </div>
      </section>
    </section>
</template>
<script>
import BreadCrumb from '@/components/client/BreadCrumb.vue'
import {useRoute} from 'vue-router'
//   import axios from 'axios';

export default {
  props: {
  },
 
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

        async receiveCart(){
            this.$swal({
                title: 'Xác nhận đã nhận hàng',
                text: "Đã nhận đơn hàng thành công !",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Xác nhận',
                cancelButtonText: 'Hủy'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    var resp = await this.$httpClient.get("/cart/receive", true, {cartId: this.cartId})
                    if(!resp.result){
                        return this.showErrorMsg(resp.message)
                    }
                    this.$swal({
                        title: 'Thành công',
                        text: "Cập nhật đơn hàng thành công",
                        icon: 'success',
                    })
                    this.loadCart();
                }
            })
        },
        
        async printInvoice(){
            await this.$httpClient.getFile(
               'cart/export',
               true,
               {cartId: this.cartId},
               null,
               "",
               "hóa_đơn.pdf"
            );
        }
    },
    
    beforeMount(){
        this.loadCart();
    },
}
</script>
<style lang="">
    
</style>