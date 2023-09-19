<template lang="">
    <div class="container">
        <BreadCrumb breadcrumbType="register" />
    </div>
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
                            <InputText :col="10" :error="v$.firstName.$error" :errMsg="v$.firstName.$error ? v$.firstName.$errors[0].$message : ''" v-model="formData.firstName" type="text" field="firstName" placeHolder="Họ và tên đệm" />
                            <InputText :col="10" :error="v$.lastName.$error" :errMsg="v$.lastName.$error ? v$.lastName.$errors[0].$message : ''" v-model="formData.lastName" type="text" field="lastName" placeHolder="Tên" />
                            <InputText :col="10" :error="v$.email.$error" :errMsg="v$.email.$error ? v$.email.$errors[0].$message : ''" v-model="formData.email" type="email" field="email" placeHolder="Email" />
                            <InputText :col="10" :error="v$.phoneNumber.$error" :errMsg="v$.phoneNumber.$error ? v$.phoneNumber.$errors[0].$message : ''" v-model="formData.phoneNumber" type="tel" field="phone" placeHolder="Số điện thoại" />
                        </fieldset>
                        <!-- Address -->
                        <fieldset id="address" class="mt-4">
                            <legend>Địa chỉ</legend>
                            <InputText :col="10" type="text" field="company" placeHolder="Công ty" />
                            <InputDropdown :data="countries" :col="10" :error="v$.countryId.$error" :errMsg="v$.countryId.$error ? v$.countryId.$errors[0].$message : ''" placeHolder="Quốc gia" v-model="formData.countryId" @value-change="loadCity"/>
                            <InputDropdown :col="10" :error="v$.cityId.$error" :errMsg="v$.cityId.$error ? v$.cityId.$errors[0].$message : ''" placeHolder="Tỉnh / TP" v-model="formData.cityId" />
                            <InputText :col="10" type="text" :error="v$.fullAddress.$error" :errMsg="v$.fullAddress.$error ? v$.fullAddress.$errors[0].$message : ''" placeHolder="Địa chỉ chi tiết" v-model="formData.fullAddress" />
                        </fieldset>
                        <fieldset  class="mt-4">
                            <legend>Mật khẩu</legend>
                            <InputText :col="10" :error="v$.password.$error" :errMsg="v$.password.$error ? v$.password.$errors[0].$message : ''" v-model="formData.password" type="password" field="password" placeHolder="Mật khẩu" />
                            <InputText :col="10" :error="v$.confirmPassword.$error" :errMsg="v$.confirmPassword.$error ? v$.confirmPassword.$errors[0].$message : ''" v-model="formData.confirmPassword" type="password" field="confirm-password" placeHolder="Nhập lại mật khẩu" />
                        </fieldset>
                        <fieldset class="mt-4">
                            <legend>Đăng ký nhận tin</legend>
                            <div class="form-group row">
                            <label class="col-sm-12 col-md-2 text-lg-right control-label">Đăng ký nhận tin</label>
                                <div class="col-sm-12 col-md-10">
                                    <label class="radio-inline">
                                        <input type="radio" name="newsletter" value="1" :checked="formData.receiveMessage === 1" @change="chackReceiveMessage(1)" />
                                        Có
                                    </label>&nbsp;&nbsp;
                                    <label class="radio-inline">
                                        <input type="radio" name="newsletter" value="0" :checked="formData.receiveMessage === 0" @change="chackReceiveMessage(0)" />
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
import { computed, ref, reactive, onBeforeMount, inject } from 'vue';
import { required, email, minLength, sameAs, helpers } from '@vuelidate/validators'
import {$allNumber, $emptyValue} from '@/validators/custom.validator.js'
import { HttpClient } from "@/plugins/httpClient";
import { toast } from 'vue3-toastify';
import { useRouter } from 'vue-router'

const $swal = inject('$swal')
const router = useRouter();

const formData = reactive({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    fullAddress: "",
    confirmPassword: "",
    receiveMessage: 1,
    countryId: "",
    cityId: ""
})

const countries = ref([])
const cities = ref([])

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
        fullAddress:{
            required: helpers.withMessage('Địa chi không được trống', required),
        },
        password: {
            required: helpers.withMessage('Mật khẩu không được trống', required),
            minLength: helpers.withMessage('Mật khẩu thoại phải ít nhất 6 ký tự', minLength(6)),
        },
        confirmPassword: {
            required: helpers.withMessage('Mật khẩu không được trống', required),
            sameAs:  helpers.withMessage('Vui lòng nhập lại đúng mật khẩu',sameAs(formData.password))
        }
    }
});

const v$ = useValidate(rules, formData)

const submitRegistry = async () => {
    const result = await v$.value.$validate();
    if(result){
        $swal({
            title: 'Are you sure ?',
            text: "Do you want to create account ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(async (result) => {
            if (result.isConfirmed) {
                var resp = await new HttpClient(process.env.VUE_APP_BASE_URL).post("/user/register", false, {}, formData)
                if(!resp.result){
                    return $swal({
                        title: 'Đăng ký không thành công',                       
                        text: resp.message,
                        icon: 'error',
                    })
                }
                router.push('/login');
                $swal({
                   title: 'Thành công',                       
                   text: "Tạo tài khoản thành công",
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

const chackReceiveMessage = (value) => {
    formData.receiveMessage = value
}

const loadCountry = async () => {
    var resp = await new HttpClient(process.env.VUE_APP_BASE_URL).get("/address/country/getAll", false)
    if(!resp.result){
        return toast.error("Không load country thành công", {
           transition: toast.TRANSITIONS.ZOOM,
           position: toast.POSITION.TOP_RIGHT,
           autoClose: 1500
        });
    }
    countries.value = resp.data
}

const loadCity = async (countryId) => {
    var resp = await new HttpClient(process.env.VUE_APP_BASE_URL).get("/address/city/getAll", false, {countryId: countryId})
    if(!resp.result){
        return toast.error("Không load city thành công", {
           transition: toast.TRANSITIONS.ZOOM,
           position: toast.POSITION.TOP_RIGHT,
           autoClose: 1500
        });
    }
    cities.value = resp.data
}

onBeforeMount(() => {
    loadCountry()
})



</script>
<style lang="">
    
</style>