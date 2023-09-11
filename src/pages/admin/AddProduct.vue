<template lang="">
    <div class="container-fluid">
        <BreadCrumb breadcrumbType="addProduct" />

        <div style="margin-left: 30px; margin-right:30px">
            <form th:action="@{/freshfood/admin/them-moi}" enctype="multipart/form-data" method="POST" th:object="${product}">
                <div class = "row">
                   <div class="col-sm-12 col-md-6">
                       <label class="my-2" for="name"><strong>Tên sản phẩm: </strong></label>
                       <input type="text" id="name" v-model="formData.productName" class="form-control" placeholder="Tên sản phẩm"/>
                   </div>
                   <div class="col-sm-12 col-md-6">
                       <label class="my-2" for="description"><strong>Mô tả: </strong></label>
                       <input type="text" id="description" v-model="formData.productDescription" class="form-control" placeholder="Mô tả"/>
                   </div>
                </div>
                <div class="row mt-4">
                    <div class="col-sm-4">
                        <label class="my-3" for="main-img"><strong>Ảnh chính: </strong></label>
                        <input class="mb-3" @change="handleUploadMainImage" name="main-img" type="file" id="main-img" accept="image/png, image/jpeg"/>
                        <div v-if="mainImageSrc" style="padding: 5px; width:100px; height: fit-content; border: 1px solid grey">
                            <img :src="mainImageSrc" id="thumbnail" />
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <label class="my-3" for="ex-img1"><strong>Ảnh phụ 1: </strong></label>
                        <input class="mb-3" @change="handleUploadExtraImage1" name="ex-img" type="file" id="ex-img1" accept="image/png, image/jpeg"/>
                        <div v-if="extraImage1Src" style="padding: 5px; width:100px; height: fit-content; border: 1px solid grey">
                            <img :src="extraImage1Src" id="thumbnail0" width=100% />
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <label class="my-3" for="ex-img2"><strong>Ảnh phụ 2: </strong></label>
                        <input class="mb-3" @change="handleUploadExtraImage2" name="ex-img" type="file" id="ex-img2" accept="image/png, image/jpeg"/>
                        <div  v-if="extraImage2Src" style="padding: 5px; width:100px; height: fit-content; border: 1px solid grey">
                            <img :src="extraImage2Src" id="thumbnail1" width=100% />
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
                            <input type="radio" name="category" value="0" v-model="formData.categoryId"/>&nbsp;&nbsp;
                            <span>Thịt tươi</span><br/>
                            <input type="radio" name="category" v-model="formData.categoryId" value="1"/>&nbsp;&nbsp;
                            <span>Thịt tươi</span><br/>
                            <input type="radio" name="category" v-model="formData.categoryId" value="2"/>&nbsp;&nbsp;
                            <span>Thịt tươi</span><br/>
                            <input type="radio" name="category" v-model="formData.categoryId" value="3"/>&nbsp;&nbsp;
                            <span>Thịt tươi</span><br/>
                        </div>
                    </div>
                </div>
                <div class="row d-flex align-items-center justify-content-center">
                    <input @click.prevent="submitForm" class="mt-4 mb-4 btn btn-success" type="submit" value="Thêm mới"/>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup>
import BreadCrumb from '@/components/client/BreadCrumb.vue';
import { ref, reactive } from 'vue';

const mainImageSrc = ref(null)
const extraImage1Src = ref(null)
const extraImage2Src = ref(null)

const formData =  reactive({
    productName: "",
    productDescription: "",
    mainImage: "",
    extraImage1: "",
    extraImage2: "",
    price: "",
    quantity: null,
    categoryId: ''
})

const handleUploadMainImage = (event) => {
    const file = event.target.files[0];
    if (file) {
        mainImageSrc.value = URL.createObjectURL(file);
        // Convert base64
        const reader = new FileReader();
        reader.onload = (e) => {
          // Chuyển đổi tệp thành chuỗi Base64
          formData.mainImage = e.target.result;
        };
        reader.readAsDataURL(file);
    }
};

const handleUploadExtraImage1 = (event) => {
    const file = event.target.files[0];
    if (file) {
        extraImage1Src.value = URL.createObjectURL(file);
        const reader = new FileReader();
        reader.onload = (e) => {
          // Chuyển đổi tệp thành chuỗi Base64
          formData.extraImage1 = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

const handleUploadExtraImage2 = (event) => {
    const file = event.target.files[0];
    if (file) {
       extraImage2Src.value = URL.createObjectURL(file);
        const reader = new FileReader();
        reader.onload = (e) => {
          // Chuyển đổi tệp thành chuỗi Base64
          formData.extraImage2 = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

const submitForm = () => {
     console.log(formData);
}
</script>
<style scoped>
    img{
        width: 100%;
        height: fit-content;
    }
</style>