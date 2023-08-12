<template lang="">
    <form method = "post" enctype="multipart/form-data" id="contact">
        <p id="errorFills" style="margin-bottom:10px; color: red;"></p>
        <div id="emtry_contact" class="form-signup form_contact clearfix">
            <div class="row row-8Gutter">
                <div class="col-md-12">
                    <fieldset class="form-group required">
                        <input type="text" placeholder="Tên của bạn" value="" name="name" id="name" class="form-control form-control-lg" required />
                    </fieldset>
                </div>
                <div class="col-md-12">
                    <fieldset class="form-group required">
                        <input type="email" value="" placeholder="Địa chỉ Email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$" data-validation="email"
                                name="email" id="email" class="form-control form-control-lg" required>
                    </fieldset>
                </div>
            </div>
            <fieldset class="form-group required">
                <ckeditor :editor="editor" v-model="content" placeholder="Nội dung"  :config="editorConfig" />
            </fieldset>
        </div>
    </form>
    <div>
        <button id="submit-contact-form" class="btn btn-primary">
            Gửi đi
        </button>
    </div>
</template>
<script>
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
    components: {
       ckeditor: CKEditor.component
    },

    data() {
        return {
            editor: ClassicEditor,
            content: '',
            editorConfig: {
              placeholder: 'Nội dung',
            
            }
        };
    }
}
</script>
<style scoped>
    
</style>