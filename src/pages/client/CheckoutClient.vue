<template lang="">
    <div class="container">
        <BreadCrumb breadcrumbType="checkout" />
    </div>
    <section>
        <section class="page mb-4"> 
            <div class="container">
                <form method="post" enctype="multipart/form-data" class="form-horizontal" id="checkout-form">
                    <div class="row">
                        <div class="col-sm-12 col-lg-8">
                            <div class="panel panel-default">
                                <div class="panel-heading mb-4">
                                    <h5 class="panel-title">
                                        <i class="fa fa-info-circle" aria-hidden="true"></i>&nbsp; Địa chỉ nhận hàng                                   
                                    </h5>
                                </div>
                                <div class="panel-body">
                                    <InputText col="10" :error="v$.fullName.$error" :errMsg="v$.fullName.$error ? v$.fullName.$errors[0].$message : ''" v-model="formData.fullName" type="text" field="firstName" placeHolder="Tên người nhận hàng" />
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <InputText col="8" :error="v$.email.$error" :errMsg="v$.email.$error ? v$.email.$errors[0].$message : ''" v-model="formData.email" type="text" field="email" placeHolder="Email" />
                                        </div>
                                        <div class="col-sm-6">
                                            <InputText col="8" :error="v$.phoneNumber.$error" :errMsg="v$.phoneNumber.$error ? v$.phoneNumber.$errors[0].$message : ''" v-model="formData.phoneNumber" type="text" field="phoneNumber" placeHolder="Điện thoại" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <InputDropdown :col="8" :error="v$.countryId.$error" :errMsg="v$.countryId.$error ? v$.countryId.$errors[0].$message : ''" field="country" placeHolder="Quốc gia" v-model="formData.countryId" />
                                        </div>
                                        <div class="col-sm-6">
                                            <InputDropdown :col="8" :error="v$.cityId.$error" :errMsg="v$.cityId.$error ? v$.cityId.$errors[0].$message : ''" field="city" placeHolder="Tỉnh / TP" v-model="formData.cityId" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <InputText :col="10" type="text" :error="v$.address.$error" :errMsg="v$.address.$error ? v$.address.$errors[0].$message : ''" field="address" placeHolder="Địa chỉ cụ thể" v-model="formData.address" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="control-label col-sm-12 col-md-2" for="input-comment">Lời nhắn</label>
                                        <div class="col-sm-12 col-md-10">
                                            <textarea  v-model="formData.orderMessage" name="comment" id="input-comment" rows="3" class="form-control" placeholder="Ví dụ: Chuyển hàng ngoài giờ hành chính"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div class="col-sm-12 col-lg-4">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h5 class="panel-title">
                                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;
                                        <strong>Đơn hàng</strong> <span id="itemscount"></span>
                                    </h5>
                                </div>
                                <div class="panel-body">
                                    <table class="adr-oms table table_order_items">
                                        <tbody id="orderItem">
                                            <tr v-for="item in cart" :key="item.id" class="group-type-1 item-child-0">
                                                <td>
                                                    <div class = "row">
                                                        <div class="table_order_items-cell-thumbnail col-sm-12 col-md-6">
                                                            <div class="thumbnail">
                                                                <router-link target="_blank" rel="noopener" :to="'/product/' + item.id" :title="item.name">
                                                                    <img :src="item.extraImage1" :alt="item.name" width="84" />
                                                                </router-link>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-12 col-md-6">
                                                            <div class="table_order_items-cell-detail">
                                                                <div class="table_order_items-cell-title">
                                                                    <div class="table_order_items_product_name mb-3">
                                                                        <router-link target="_blank" rel="noopener" :to="'/product/' + item.id" :title="item.name">
                                                                            <span class="title" style="font-weight: 600;">{{item.name}}</span>
                                                                        </router-link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="table_order_items-cell-price">
                                                                <div class="tt-price">{{convertCurrency(item.price)}}</div>
                                                                <div class="quantity">x {{item.qty}}</div>
                                                                <div class="tt-price">{{convertCurrency(item.price * item.qty)}}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div style="border-top:1px solid #ddd" class="text-center pt-3 pb-3">
                                         <button type="button" class="btn btn-primary" data-toggle="tooltip" title data-original-title="Refesh" onclick="loadcartitems()">Refresh</button>
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-default" id="ajax-load-total">
                                <div class="panel-body">
                                    <table class="adr-oms table">
                                        <tbody class="orderSummary">
                                            <tr class="row-total-amount">
                                                <td class="text-left">Thành tiền</td>
                                                <td class="text-right">
                                                    <strong>{{convertCurrency(totalPrice)}}</strong>
                                                </td>
                                            </tr>
                                            <tr class="row-total-amount">
                                                <td class="text-left">Phí vận chuyển Toàn Quốc</td>
                                                <td class="text-right">
                                                    <strong class="">0 đ</strong>
                                                </td>
                                            </tr>
                                            <tr class="row-total-amount">
                                                <td class="text-left">Tổng số</td>
                                                <td class="text-right">
                                                    <strong class="text-danger">{{convertCurrency(totalPrice)}}</strong>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="text-center mb-4 d-flex justify-content-between">
                                <router-link class="pull-left" to="/cart" title="Quay lại giỏ hàng">
                                    <i class="fa fa-mail-reply-all" aria-hidden="true"></i>&nbsp;&nbsp; Quay lại giỏ hàng                                
                                </router-link>
                                <button class="btn btn-primary pull-right" @click.prevent="createOrder" type="button" id="submit_form_button">
                                    Đặt hàng
                                </button>
                            </div>
                         </div>
                    </div>
                </form>
            </div>
        </section>
    </section>
</template>
<script setup>
import BreadCrumb from '@/components/client/BreadCrumb.vue';
import InputText from '@/components/client/InputText.vue';
import InputDropdown from '@/components/client/InputDropdown.vue'
import useValidate from '@vuelidate/core'
import { computed } from 'vue';
import { required, email, minLength, helpers } from '@vuelidate/validators'
import {$allNumber, $emptyValue} from '@/validators/custom.validator.js'
import { reactive } from 'vue';
import { HttpClient } from "@/plugins/httpClient";
import { useStore } from 'vuex';
import { inject } from 'vue'

const $swal = inject('$swal')
const store = useStore();

const formData = reactive({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    countryId: "",
    cityId: "",
    orderMessage: ""
})

const rules = computed(() => {
    return{
        fullName: {
            required: helpers.withMessage('Tên người nhận không được trống', required)
        },
        email: { 
            email: helpers.withMessage('Email không đúng định dạng', email),
            required: helpers.withMessage('Email không được trống', required)
        },
        phoneNumber: {
            required: helpers.withMessage('Số điện thoại không được trống', required),
            minLength: helpers.withMessage('Số điện thoại phải ít nhất 10 ký tự', minLength(10)),
            $allNumber: helpers.withMessage('Số điện thoại không được chứa chữ cái', $allNumber)
        },
        countryId: {
            $emptyValue: helpers.withMessage('Quốc gia không được trống', $emptyValue)
        },
        cityId: {
            $emptyValue: helpers.withMessage('Thành phố không được trống', $emptyValue)
        },
        address:{
            required: helpers.withMessage('Địa chi không được trống', required),
        }
    }
});

const v$ = useValidate(rules, formData)

const createOrder = async () => {
    const result = await v$.value.$validate();
    if(result){
        // Show sweetAlert to confirm order
        $swal({
            title: 'Are you sure ?',
            text: "Do you want to make order ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(async (result) => {
            if (result.isConfirmed) {
                var resp = await new HttpClient(process.env.VUE_APP_BASE_URL).post("/cart/create", true, {}, {...formData, cartItems: cart.value})
                if(!resp.result){
                    return $swal({
                        title: 'Không thành công',                       
                        text: resp.message,
                        icon: 'error',
                    })
                }
                store.commit("cart/CLEAR_CART")
                window.scrollTo({ top: 0, behavior: "smooth" });
                $swal({
                   title: 'Thành công',                       
                   text: "Đặt hàng thành công",
                   icon: 'success',
                })
            }
        })
    }else{
        // Scroll Back to top if catch Error
        window.scroll({
           top: 0,
           left: 0,
           behavior: 'smooth'
        });
    }
}

const cart = computed(() => {
    return  store.getters["cart/cartList"] || [];
})

const totalPrice = computed(() => {
    return  store.getters["cart/priceTotal"] || 0;
})

</script>
<style scoped>
    i {
        font-size: 18px;
    }
</style>