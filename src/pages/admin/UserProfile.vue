<template lang="">
    <section class="px-5">
        <section class="page mb-4">
            <div class="container">
                <div class="row">
                    <div class="clearfix"></div>
                    <div id="content" class="col-sm-12 col-xs-12 col-md-12">
                        <h1 class="mb-5">Cập nhật thông tin tài khoản</h1>
                        <form method="POST" id="change-form" enctype="multipart/form-data" class="form-horizontal">
                            <!-- <input type="hidden" th:value="${user.id}" id="input-id"> -->
                            <fieldset id="account">
                                <InputText oldValue="Nguyễn Hoài" :col="10" :error="v$.firstName.$error" :errMsg="v$.firstName.$error ? v$.firstName.$errors[0].$message : ''" v-model="formData.firstName" type="text" field="firstName" placeHolder="Họ và tên đệm" />
                                <InputText oldValue="Linh" :col="10" :error="v$.lastName.$error" :errMsg="v$.lastName.$error ? v$.lastName.$errors[0].$message : ''" v-model="formData.lastName" type="text" field="lastName" placeHolder="Tên" />
                                <InputText :col="10" :error="v$.email.$error" :errMsg="v$.email.$error ? v$.email.$errors[0].$message : ''" v-model="formData.email" type="email" field="email" placeHolder="Email" />
                                <InputText :col="10" :error="v$.phoneNumber.$error" :errMsg="v$.phoneNumber.$error ? v$.phoneNumber.$errors[0].$message : ''" v-model="formData.phoneNumber" type="tel" field="phone" placeHolder="Số điện thoại" />
                            </fieldset>
                            <fieldset id="address" class="mt-4">
                                <legend>Địa chỉ</legend>
                                <InputText :col="10" type="text" field="company" placeHolder="Công ty" />
                                <InputDropdown :data="countries" :oldValue="oldCountryId" :col="10" :error="v$.countryId.$error" :errMsg="v$.countryId.$error ? v$.countryId.$errors[0].$message : ''" placeHolder="Quốc gia" v-model="formData.countryId" @value-change="loadCity"/>
                                <InputDropdown :data="cities" :oldValue="oldCityId" :col="10" :error="v$.cityId.$error" :errMsg="v$.cityId.$error ? v$.cityId.$errors[0].$message : ''" placeHolder="Tỉnh / TP" v-model="formData.cityId" />
                                <InputText :col="10" type="text" :error="v$.fullAddress.$error" :errMsg="v$.fullAddress.$error ? v$.fullAddress.$errors[0].$message : ''" field="address" placeHolder="Địa chỉ chi tiết" v-model="formData.fullAddress" />
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
import InputText from '@/components/client/InputText.vue';
import InputDropdown from '@/components/client/InputDropdown.vue'
import useValidate from '@vuelidate/core'
import { computed, ref, reactive, onBeforeMount, inject } from 'vue';
import { required, email, minLength, helpers } from '@vuelidate/validators'
import {$allNumber, $emptyValue} from '@/validators/custom.validator.js'
import { HttpClient } from "@/plugins/httpClient";
import { toast } from 'vue3-toastify';
import { useRoute } from 'vue-router'

const $swal = inject('$swal')
const route = useRoute();

const formData = reactive({
    id: route.params.id,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    fullAddress: "",
    countryId: "",
    cityId: ""
})

const countries = ref([])
const cities = ref([])
var oldCountryId = ref("")
var oldCityId = ref("")

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
        }
    }
});

const v$ = useValidate(rules, formData)

const submitChange = async () => {
    const result = await v$.value.$validate();
    if(result){
        $swal({
            title: 'Xác nhận ?',
            text: "Cập nhật thông tin tài khoản?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xác nhận',
            cancelButtonText: 'Hủy'
        }).then(async (result) => {
            if (result.isConfirmed) {
                var resp = await new HttpClient(process.env.VUE_APP_BASE_URL).put("/user/getProfile/update", true, {}, formData)
                if(!resp.result){
                    return $swal({
                        title: 'Cập nhật không thành công',                       
                        text: resp.message,
                        icon: 'error',
                    })
                }
                $swal({
                   title: 'Thành công',                       
                   text: "Cập nhật tài khoản thành công",
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
    var resp = await new HttpClient(process.env.VUE_APP_BASE_URL).get("/address/city/findByCountry", false, {countryId: countryId})
    if(!resp.result){
        return toast.error("Không load city thành công", {
           transition: toast.TRANSITIONS.ZOOM,
           position: toast.POSITION.TOP_RIGHT,
           autoClose: 1500
        });
    }
    cities.value = resp.data
}

const loadProfile = async () => {
    var resp = await new HttpClient(process.env.VUE_APP_BASE_URL).get("/user/findById", true, {id: route.params.id})
    if(!resp.result){
        return toast.error("Không load profile thành công", {
           transition: toast.TRANSITIONS.ZOOM,
           position: toast.POSITION.TOP_RIGHT,
           autoClose: 1500
        });
    }
    formData.firstName = resp.data.firstName
    formData.lastName = resp.data.lastName
    formData.email = resp.data.email
    formData.fullAddress = resp.data.fullAddress
    formData.phoneNumber = resp.data.phoneNumber
    formData.countryId = resp.data.countryId
    formData.cityId = resp.data.cityId
    oldCityId.value = resp.data.cityId
    oldCountryId.value = resp.data.countryId
    // Load oldCities
    var cityResp = await new HttpClient(process.env.VUE_APP_BASE_URL).get("/address/city/findByCountry", false, {countryId: oldCountryId.value})
    if(!cityResp.result){
        return toast.error("Không load city thành công", {
           transition: toast.TRANSITIONS.ZOOM,
           position: toast.POSITION.TOP_RIGHT,
           autoClose: 1500
        });
    }
    cities.value = cityResp.data
}

onBeforeMount(() => {
    loadCountry(),
    loadProfile()
})

</script>
<style lang="">
    
</style>