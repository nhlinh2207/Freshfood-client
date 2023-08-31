<template lang="">
    <div class="container">
        <BreadCrumb breadcrumbType="profile" />
    </div>
    <section>
        <section class="page mb-4">
            <div class="container">
                <div class="row">
                    <div class="clearfix"></div>
                    <div id="content" class="col-sm-12 col-xs-12 col-md-12">
                        <h1>Cập nhật thông tin tài khoản</h1>
                        <form method="POST" id="change-form" enctype="multipart/form-data" class="form-horizontal">
                            <!-- <input type="hidden" th:value="${user.id}" id="input-id"> -->
                            <fieldset id="account">
                                <legend>Chi tiết tài khoản</legend>
                                <InputText oldValue="Nguyễn Hoài" :col="10" :error="v$.firstName.$error" :errMsg="v$.firstName.$error ? v$.firstName.$errors[0].$message : ''" v-model="formData.firstName" type="text" field="firstName" placeHolder="Họ và tên đệm" />
                                <InputText oldValue="Linh" :col="10" :error="v$.lastName.$error" :errMsg="v$.lastName.$error ? v$.lastName.$errors[0].$message : ''" v-model="formData.lastName" type="text" field="lastName" placeHolder="Tên" />
                                <InputText :col="10" :error="v$.email.$error" :errMsg="v$.email.$error ? v$.email.$errors[0].$message : ''" v-model="formData.email" type="email" field="email" placeHolder="Email" />
                                <InputText :col="10" :error="v$.phoneNumber.$error" :errMsg="v$.phoneNumber.$error ? v$.phoneNumber.$errors[0].$message : ''" v-model="formData.phoneNumber" type="tel" field="phone" placeHolder="Số điện thoại" />
                            </fieldset>
                            <fieldset id="address" class="mt-4">
                                <legend>Địa chỉ</legend>
                                <InputText :col="10" type="text" field="company" placeHolder="Công ty" />
                                <InputDropdown :col="10" :error="v$.countryId.$error" :errMsg="v$.countryId.$error ? v$.countryId.$errors[0].$message : ''" field="country" placeHolder="Quốc gia" v-model="formData.countryId" />
                                <InputDropdown :col="10" :error="v$.cityId.$error" :errMsg="v$.cityId.$error ? v$.cityId.$errors[0].$message : ''" field="city" placeHolder="Tỉnh / TP" v-model="formData.cityId" />
                                <InputText :col="10" type="text" :error="v$.address.$error" :errMsg="v$.address.$error ? v$.address.$errors[0].$message : ''" field="address" placeHolder="Địa chỉ chi tiết" v-model="formData.address" />
                            </fieldset>
                            <fieldset class="mt-4">
                                <legend>Mật khẩu</legend>
                                <div class="form-group required row">
                                    <router-link style="font-weight: bold" to="/updatePassword" class="col-sm-12 col-md-2 control-label text-lg-right">Đổi mật khẩu</router-link>
                                    <div class="col-sm-12 col-md-10">
                                    </div>
                                </div>
                            </fieldset>
                            <div class="button mt-4">
                                <div class="float-right">
                                    <input type="button" @click.prevent="submitChange" value="Cập nhật" class="btn btn-primary" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
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

const formData = reactive({
    firstName: "Nguyễn Hoài",
    lastName: "Linh",
    email: "",
    phoneNumber: "",
    address: "",
    countryId: "",
    cityId: ""
})

const rules = computed(() => {
    return{
        firstName: {
            required: helpers.withMessage('Họ và tên đệm không được trống', required)
        },
        lastName: { 
            required: helpers.withMessage('Tên không được trống', required)
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


const submitChange = async () => {
    const result = await v$.value.$validate();
    alert(formData.firstName+" "+formData.lastName)
    if(result){
        alert("okokokok")
    }else{
        // Scroll Back to top if catch Error
        window.scroll({
           top: 0,
           left: 0,
           behavior: 'smooth'
        });
    }
}

</script>
<style lang="">
    
</style>