<template lang="">
    <BreadCrumb breadcrumbType="updatePassword" />
    <section>
        <div class="container">
        <div class="d-flex justify-content-center align-items-center">
            <div style="width: 50%">
                <div class="well">
                    <h2 class="mb-5">Cập nhật password</h2>
                    <form id="changePassForm" method="POST">
                        <!-- <input type="hidden" id="input-id" th:value="${user.id}"/> -->
                        <InputText :col="8" :error="v$.oldPassword.$error" :errMsg="v$.oldPassword.$error ? v$.oldPassword.$errors[0].$message : ''" v-model="formData.oldPassword" type="text" field="oldPassword" placeHolder="Mật khẩu cũ" />
                        <InputText :col="8" :error="v$.password.$error" :errMsg="v$.password.$error ? v$.password.$errors[0].$message : ''" v-model="formData.password" type="password" field="password" placeHolder="Mật khẩu mới" />
                        <InputText :col="8" :error="v$.confirmPassword.$error" :errMsg="v$.confirmPassword.$error ? v$.confirmPassword.$errors[0].$message : ''" v-model="formData.confirmPassword" type="password" field="confirm-password" placeHolder="Nhập lại mật khẩu mới" />
                        <div class="method text-center mt-4">
                            <div class="method-control mb-3">
                                <input id = "changePassbtn" class="btn btn-primary" @click.prevent="updatePassword" value="Xác nhận"/>
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
    oldPassword: "",
    password: "",
    confirmPassword: ""
})

const rules = computed(() => {
    return{
        oldPassword: {
            required: helpers.withMessage('Mật khẩu cũ không được trống', required)
        },
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


const updatePassword = async () => {
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