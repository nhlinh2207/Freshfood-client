<template lang="">
    <div class="container">
        <BreadCrumb breadcrumbType="updatePassword" />
    </div>
    <section class="page">
        <div class="container">
            <div class="d-flex justify-content-center align-items-center">
                <div style="width: 50%">
                    <div class="well">
                        <h2 class="mb-4">Đổi mật khẩu</h2>
                        <p><strong>Vui lòng nhập mật khẩu mới</strong></p>
                        <form id="changePassForm" method="POST">
                            <input type="hidden" th:value="${token}" id="reset-token"/>
                            <InputText :col="8" :error="v$.password.$error" :errMsg="v$.password.$error ? v$.password.$errors[0].$message : ''" v-model="formData.password" type="password" field="password" placeHolder="Mật khẩu mới" />
                            <InputText :col="8" :error="v$.confirmPassword.$error" :errMsg="v$.confirmPassword.$error ? v$.confirmPassword.$errors[0].$message : ''" v-model="formData.confirmPassword" type="password" field="confirm-password" placeHolder="Nhập lại mật khẩu mới" />
                            <div class="method text-center">
                                <div class="method-control mb-3">
                                    <input id = "changePassbtn" @click.prevent="changePassword" class="btn btn-primary" value="Xác nhận"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>            
            </div>
        </div>
    </section>
</template>
<script setup>
import BreadCrumb from '@/components/client/BreadCrumb.vue';
import InputText from '@/components/client/InputText.vue';
import useValidate from '@vuelidate/core'
import { computed } from 'vue';
import { required, minLength, sameAs, helpers } from '@vuelidate/validators'
import { reactive } from 'vue';

const formData = reactive({
    password: "",
    confirmPassword: ""
})

const rules = computed(() => {
    return{
        password: {
            required: helpers.withMessage('Mật khẩu mới không được trống', required),
            minLength: helpers.withMessage('Mật khẩu thoại phải ít nhất 6 ký tự', minLength(6)),
        },
        confirmPassword: {
            required: helpers.withMessage('Mật khẩu mới không được trống', required),
            sameAs:  helpers.withMessage('Vui lòng nhập lại đúng mật khẩu',sameAs(formData.password))
        }
    }
});

const v$ = useValidate(rules, formData)


const changePassword = async () => {
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