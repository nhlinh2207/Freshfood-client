<template lang="">
    <BreadCrumb breadcrumbType="register" />
    <section class="page mb-4">
        <div class="container">
            <div class="row">
                <div class="clearfix"></div>
                <div id="content" class="col-sm-12 col-xs-12 col-md-12">
                    <h1>Đăng ký tài khoản</h1>
                    <p>Nếu bạn đã đăng ký tài khoản với chúng tôi, vui lòng <strong><router-link to="/login">đăng nhập</router-link></strong>.</p>
                    <form id="registry-form" enctype="multipart/form-data" class="form-horizontal">
                        <!-- Account -->
                        <fieldset id="account" class="mt-4">
                            <legend>Chi tiết tài khoản</legend>
                            <InputText :error="v$.firstName.$error" :errMsg="v$.firstName.$error ? v$.firstName.$errors[0].$message : ''" v-model="forrmData.firstName" type="text" field="firstName" placeHolder="Họ và tên đệm" />
                            <InputText :error="v$.lastName.$error" :errMsg="v$.firstName.$error ? v$.lastName.$errors[0].$message : ''" v-model="forrmData.lastName" type="text" field="lastName" placeHolder="Tên" />
                            <InputText :error="v$.email.$error" :errMsg="v$.firstName.$error ? v$.email.$errors[0].$message : ''" v-model="forrmData.email" type="email" field="email" placeHolder="Email" />
                            <InputText :error="v$.phoneNumber.$error" :errMsg="v$.firstName.$error ? v$.phoneNumber.$errors[0].$message : ''" v-model="forrmData.phoneNumber" type="tel" field="phone" placeHolder="Số điện thoại" />
                        </fieldset>
                        <!-- Address -->
                        <fieldset id="address" class="mt-4">
                            <legend>Địa chỉ</legend>
                            <InputText type="text" field="company" placeHolder="Công ty" />
                            <InputDropdown field="country" placeHolder="Quốc gia" />
                            <InputDropdown field="city" placeHolder="Tỉnh / TP" />
                            <InputText type="text" field="address" placeHolder="Địa chỉ chi tiết" />
                        </fieldset>
                        <fieldset  class="mt-4">
                            <legend>Mật khẩu</legend>
                            <InputText :error="v$.password.$error" :errMsg="v$.password.$error ? v$.password.$errors[0].$message : ''" v-model="forrmData.password" type="password" field="password" placeHolder="Mật khẩu" />
                            <InputText :error="v$.confirmPassword.$error" :errMsg="v$.confirmPassword.$error ? v$.confirmPassword.$errors[0].$message : ''" v-model="forrmData.confirmPassword" type="password" field="confirm-password" placeHolder="Nhập lại mật khẩu" />
                        </fieldset>
                        <fieldset class="mt-4">
                            <legend>Đăng ký nhận tin</legend>
                            <div class="form-group row">
                            <label class="col-sm-12 col-md-2 text-lg-right control-label">Đăng ký nhận tin</label>
                                <div class="col-sm-12 col-md-10">
                                    <label class="radio-inline">
                                        <input type="radio" name="newsletter" value="1" />
                                        Có
                                    </label>&nbsp;&nbsp;
                                    <label class="radio-inline">
                                        <input type="radio" name="newsletter" value="0" checked="checked" />
                                        Không
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                        <div class="button mt-4">
                            <div class="float-right">
                                Tôi đã đọc và đồng ý với <a href="javascript:void(0)" class="agree"><b>Chính sách bảo mật</b></a> &nbsp;
                                <input type="checkbox" name="agree" value="1" /> &nbsp;
                                <input type="button" @click.prevent="submitRegistry" value="Đăng ký" class="btn btn-primary" />
                                <!-- <input type="button" id="getTokenButton" value="Get token" class="btn btn-primary" /> -->
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import BreadCrumb from '@/components/client/BreadCrumb.vue';
import InputText from '@/components/client/InputText.vue';
import InputDropdown from '@/components/client/InputDropdown.vue'
import useValidate from '@vuelidate/core'
import { computed } from 'vue';
import { required, email, minLength, sameAs, helpers } from '@vuelidate/validators'
import {$allNumber} from '@/validators/custom.validator.js'
import { reactive } from 'vue';

const forrmData = reactive({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
})

const rules = computed(() => {
    return{
        firstName: {
            required: helpers.withMessage('Họ và tên không được trống', required)
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
        password: {
            required: helpers.withMessage('Mật khẩu không được trống', required),
            minLength: helpers.withMessage('Mật khẩu thoại phải ít nhất 6 ký tự', minLength(6)),
        },
        confirmPassword: {
            required: helpers.withMessage('Mật khẩu không được trống', required),
            sameAs:  helpers.withMessage('Vui lòng nhập lại đúng mật khẩu',sameAs(forrmData.password))
        }
    }
});

const v$ = useValidate(rules, forrmData)


const submitRegistry = async () => {
    const result = await v$.value.$validate();
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