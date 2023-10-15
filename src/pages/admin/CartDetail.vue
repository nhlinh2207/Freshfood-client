<template lang="">
    <div class="container-fluid">
        <BreadCrumb :breadcrumbType="'cartDetail/' + cartId" />
        <div class="card shadow">
            <div class="text-center">
                <div style="margin-top: 20px; margin-bottom: 20px">
                    <h3>Chi tiết đơn hàng: {{cartId}}</h3>
                </div>
            </div>
            <div class="main-content">
                <div class="content-inner">
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
                <div class="col-sm-12 col-lg-8">
                    <!-- Export PDF if order is finished -->
                    <div v-if="cart.status === 'Đã giao'" class="d-flex align-items-center justify-content-center">
                        <label class="mr-5"><strong>In hóa đơn </strong></label>
                        <a href="#" @click.prevent="exportPDF">
                            <img src="@/assets/images/logo/pdf.jpg" alt="" style="width: 70px"/>
                        </a>
                    </div>
                    <!-- Select staff to delivery order if order is not finish -->
                    <div v-if="cart.status === 'Chưa giao'" class="form-group required row">
						<label for="input-free-staff" ><strong>Chọn nhân viên giao hàng:</strong></label>
						<div class="col-sm-12 col-md-10">
							<select v-model="staffId" name="staffId" id="input-free-staff" class="form-control">
								<option value="0"> --- Chọn --- </option>
								<option v-for="s in staffs" :key="s.id" :value="s.id"  :selected="cart.staffId === s.id" >{{s.name}}</option>
							</select>
						</div>
					</div>
                </div>
                <div class="col-sm-12 col-lg-4 ">
                    <table class="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Thành tiền</td>
                                <td><strong>{{convertCurrency(cart.totalPrice)}}</strong></td>
                            </tr>
                            <tr>
                                <td>Phí vận chuyển</td>
                                <td><strong>0 đ</strong></td>
                            </tr>
                            <tr>
                                <td>Tổng cộng</td>
                                <td><strong>{{convertCurrency(cart.totalPrice)}}</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="text-center my-3">
				<button @click.prevent="assignToStaff" class="btn btn-primary">Xác nhận</button>
			</div>
        </div>
    </div>
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
            cart: {},
            totalPrice: 0,
            staffs: [],
            staffId: '0'
        }
    },
    methods: {
        async loadCart(){
            var resp = await this.$httpClient.get("/cart/findById", true, {cartId: this.cartId})
            if(!resp.result){
                return this.showErrorMsg(resp.message)
            }
            this.cart = resp.data
            this.totaPrice = resp.data.totalPrice
        },

        async loadStaff(){
            var resp = await this.$httpClient.get("/user/getStaff", true, {})
            if(!resp.result){
                return this.showErrorMsg(resp.message)
            }
            this.staffs = resp.data
        },

        async assignToStaff(){
            this.$swal({
                title: 'Xác nhận',
                text: "Giao đơn hàng cho nhân viên",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Xác nhận',
                cancelButtonText: 'Hủy'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    var resp = await this.$httpClient.get("/cart/assignToStaff", true, {cartId: this.cartId, staffId: this.staffId})
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
    },
    
    beforeMount(){
        this.loadCart();
        this.loadStaff();
    },
}
</script>
<style lang="">
    
</style>