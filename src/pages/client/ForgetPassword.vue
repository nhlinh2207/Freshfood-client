<template lang="">
    <BreadCrumb breadcrumbType="updatePassword" />
    <section class="page">
        <div class="container">
            <div class="row">
            <div class="clearfix"></div>
            <div class="col-sm-12 col-md-6">
                <div class="well">
                    <h2 class="mb-4">Khách hàng mới</h2>
                    <p><strong>Đăng ký</strong></p>
                    <p>
                        Bằng việc tạo tài khoản bạn có thể đặt phòng nhanh hơn và
                        theo dõi trạng thái các phòng bạn đã đặt
                    </p>
                    <router-link class="btn btn-primary" to="/register">Tiếp tục</router-link>
                </div>
            </div>
            <div class="col-sm-12 col-md-6">
                <div class="well">
                    <h2 class="mb-4">Quên password</h2>
                    <p><strong>Vui lòng nhập email để có thể lấy lại password</strong></p>
                    <form method="POST">
                        <InputText :col="10" :error="v$.email.$error" :errMsg="v$.email.$error ? v$.email.$errors[0].$message : ''" v-model="formData.email" type="email" field="email" placeHolder="Email" />
                        <div class="method">
                            <div class="method-control mb-3">
                                <input @click.prevent="resetPassword" class="btn btn-primary" value="Xác nhận"/>
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
import { required, email, helpers } from '@vuelidate/validators'
import { reactive } from 'vue';

const formData = reactive({
    email: "",
})

const rules = computed(() => {
    return{
        email: { 
            email: helpers.withMessage('Email không đúng định dạng', email),
            required: helpers.withMessage('Email không được trống', required)
        }
    }
});

const v$ = useValidate(rules, formData)


const resetPassword = async () => {
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