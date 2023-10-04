<template lang="">
    <div class="container-fluid">
        <BreadCrumb breadcrumbType="updateProduct" />

        <div style="margin-left: 30px; margin-right:30px">
            <form enctype="multipart/form-data" method="POST" th:object="${product}">
                <div class = "row">
                   <div class="col-sm-12 col-md-6">
                       <label class="my-2" for="name"><strong>Tên sản phẩm: </strong></label>
                       <input type="text" id="name" v-model="formData.name" class="form-control" placeholder="Tên sản phẩm"/>
                   </div>
                   <div class="col-sm-12 col-md-6">
                       <label class="my-2" for="description"><strong>Mô tả: </strong></label>
                       <input type="text" id="description" v-model="formData.description" class="form-control" placeholder="Mô tả"/>
                   </div>
                </div>
                <div class="row mt-4">
                    <div class="col-sm-4">
                        <label class="my-3" for="main-img"><strong>Ảnh chính: </strong></label>
                        <input class="mb-3" @change="handleUploadMainImage" name="main-img" type="file" id="main-img" accept="image/png, image/jpeg"/>
                        <div v-if="formData.mainImage" style="padding: 5px; width:100px; height: fit-content; border: 1px solid grey">
                            <img :src="formData.mainImage" id="thumbnail" />
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <label class="my-3" for="ex-img1"><strong>Ảnh phụ 1: </strong></label>
                        <input class="mb-3" @change="handleUploadExtraImage1" name="ex-img" type="file" id="ex-img1" accept="image/png, image/jpeg"/>
                        <div v-if="formData.extraImage1" style="padding: 5px; width:100px; height: fit-content; border: 1px solid grey">
                            <img :src="formData.extraImage1" id="thumbnail0" width=100% />
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <label class="my-3" for="ex-img2"><strong>Ảnh phụ 2: </strong></label>
                        <input class="mb-3" @change="handleUploadExtraImage2" name="ex-img" type="file" id="ex-img2" accept="image/png, image/jpeg"/>
                        <div  v-if="formData.extraImage2" style="padding: 5px; width:100px; height: fit-content; border: 1px solid grey">
                            <img :src="formData.extraImage2" id="thumbnail1" width=100% />
                        </div>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-sm-4">
                        <label class="mr-4" for="price"><strong>Giá bán: </strong></label>
                        <input v-model="formData.price" type="text" id="price" placeholder="Giá"/>
                    </div>
                    <div class="col-sm-4">
                        <label class="mr-2 mr-4" for="sl"><strong>Số lượng: </strong></label>
                        <input type="number" v-model="formData.quantity" min="1" max="100" id="sl"/>
                    </div>
                    <div class="col-sm-4 d-flex">
                        <label><strong>Danh mục: </strong></label>
                        <div class="ml-5">
                            <template v-for="category in categories" :key="category.id">
                                <input type="radio" name="category" :value="category.id" v-model="formData.categoryId"/>&nbsp;&nbsp;
                                <span>{{category.name}}</span><br/>
                            </template>
                        </div>
                    </div>
                </div>
                <div class="row d-flex align-items-center justify-content-center">
                    <input @click.prevent="submitForm" class="mt-4 mb-4 btn btn-success" type="submit" value="Cập nhật"/>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import BreadCrumb from '@/components/client/BreadCrumb.vue';
import {useRoute} from 'vue-router'

export default{
    components: {
       BreadCrumb
    },
    
    data(){
        return{
            categories: [],
            formData: {
                id: useRoute().params.id,
               name: '',
               description: '',
               mainImage: '',
               extraImage1: '',
               extraImage2: '',
               price: '',
               quantity: 1,
               categoryId: ''
            }
        }
    },

    beforeMount(){
        this.loadCategory();
        this.loadProductDetail();
    },

    methods: {
        handleUploadMainImage(event) {
            const file = event.target.files[0];
            if (file) {
                // Convert base64
                const reader = new FileReader();
                reader.onload = (e) => {
                    // Chuyển đổi tệp thành chuỗi Base64
                    this.formData.mainImage = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
         
        handleUploadExtraImage1(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    // Chuyển đổi tệp thành chuỗi Base64
                    this.formData.extraImage1 = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },

        handleUploadExtraImage2(event){
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                   // Chuyển đổi tệp thành chuỗi Base64
                   this.formData.extraImage2 = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },

        async submitForm(){
            var resp = await this.$httpClient.put("/product/update", true, {}, this.formData)
            if(!resp.result){
                this.showErrorMsg(resp.message)
            }
            this.showSuccessMsg("Cập nhật thành công")
            this.loadProductDetail();
        },
 
        async loadCategory(){
            var resp = await this.$httpClient.get("/category/getAll", true)
            if(!resp.result){
                return this.showErrorMsg(resp.message)
            }
            this.categories = resp.data
        },

        async loadProductDetail(){
            var resp = await this.$httpClient.get("/product/findById", true, {id: this.formData.id})
            if(!resp.result){
                return this.showErrorMsg(resp.message)
            }
            this.formData = resp.data
            console.log(this.formData)
        }
    },

}

</script>
<style scoped>
    img{
        width: 100%;
        height: fit-content;
    }
</style>