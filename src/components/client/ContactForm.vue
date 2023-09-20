<template lang="">
    <form method = "post" enctype="multipart/form-data" id="contact">
        <p id="errorFills" style="margin-bottom:10px; color: red;"></p>
        <div id="emtry_contact" class="form-signup form_contact clearfix">
            <div class="row row-8Gutter">
                <div class="col-md-12">
                    <fieldset class="form-group required">
                        <input type="text" placeholder="Họ và tên" v-model="formData.fullName" class="form-control form-control-lg" required />
                        <div class="input-errors" v-for="error of v$.fullName.$errors" :key="error.$uid">
                           <div class="text-danger">{{ error.$message }}</div>
                        </div>                    
                    </fieldset>
                </div>
                <div class="col-md-12">
                    <fieldset class="form-group required">
                        <input  type="email" placeholder="Địa chỉ Email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$" data-validation="email"
                                class="form-control form-control-lg" v-model="formData.email" required>
                        <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
                           <div class="text-danger">{{ error.$message }}</div>
                        </div> 
                    </fieldset>
                </div>
            </div>
            <fieldset class="form-group required">
                <CKEditor.component :editor="editor" v-model="formData.content" placeholder="Nội dung"  :config="editorConfig" />
                <div class="input-errors" v-for="error of v$.content.$errors" :key="error.$uid">
                    <div class="text-danger">{{ error.$message }}</div>
                </div> 
            </fieldset>
        </div>
    </form>
    <div>
        <button id="submit-contact-form" @click.prevent="submitContactForm" class="btn btn-primary">
            Gửi đi
        </button>
    </div>
</template>
<script setup>
import useValidate from '@vuelidate/core'
import CKEditor from '@ckeditor/ckeditor5-vue';
import { required, email, helpers } from '@vuelidate/validators'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/vi';
import { reactive, inject, computed } from 'vue';
import { HttpClient } from "@/plugins/httpClient";

const $swal = inject('$swal')

const editor = ClassicEditor
const editorConfig = {
    placeholder: 'Nội dung'
}

const formData =  reactive({
    fullName: "",
    email: "",
    content: ""
})

const rules = computed(() => {
    return{
        fullName: {
            required: helpers.withMessage('Họ và tên không được trống', required)
        },
        content: { 
            required: helpers.withMessage('Nội dung không được trống', required)
        },
        email: { 
            email: helpers.withMessage('Email không đúng định dạng', email),
            required: helpers.withMessage('Email không được trống', required)
        },
    }
});

const v$ = useValidate(rules, formData)

const submitContactForm = async () => {
    const result = await v$.value.$validate();
    if(result){
        $swal({
            title: 'Are you sure ?',
            text: "Do you want to send contact message ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(async (result) => {
            if (result.isConfirmed) {
                var resp = await new HttpClient(process.env.VUE_APP_BASE_URL).post("/user/contact", true, {}, formData)
                if(!resp.result){
                    return $swal({
                        title: 'Gửi thành công',                       
                        text: resp.message,
                        icon: 'error',
                    })
                }
                window.scrollTo({ top: 0, behavior: "smooth" });
                $swal({
                   title: 'Thành công',                       
                   text: "Gửi lời nhắn thành công",
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
</script>
<style>
    .ck-editor__editable{
        min-height: 300px !important;
    }
</style>