<template lang="">
    <div class="header-search search-form">
        <div class="form input-group search-bar search-form">
            <input type="search" v-model="searchText" name="search" placeholder="Tìm kiếm" class="input-group-field st-default-search-input search-text" autocomplete="off" />
            <span class="input-group-btn d-flex">
                <button title="Tìm kiếm" @click.prevent="searchProduct" class="btn icon-fallback-text" style="margin-left: 15px">
                    <i class="fa fa-search"></i>
                </button>
                <button title="Tìm kiếm bằng hình ảnh" class="btn icon-fallback-text" data-toggle="modal" data-target="#searchByImageContent">
                    <i class="fa fa-camera"></i>
                </button>
                <!-- Search by Image modal -->
                <div class="modal fade" id="searchByImageContent" tabindex="-1" role="dialog" aria-labelledby="searchByImageContent" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Chọn hình ảnh</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                   <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body d-flex justify-content-center align-items-center">
                                <i v-if="!image" @click="$refs.fileInput.click()" style="font-size: 50px; cursor: pointer" class="fa fa-upload my-4"></i>
                                <input type="file" ref="fileInput" style="display: none" @change="handleFileUpload">
                                <div v-if="image" style="padding: 5px; width:500px; height: fit-content; border: 1px solid grey">
                                    <cropper :src="image" ref="cropper" class="upload-example-cropper" />
                                </div>
                            </div>
                            <div class="modal-footer d-flex align-items-center justify-content-center">
                               <input type="button" @click="findByImage" style="width: fit-content; padding: 10px 15px; color: #fff; background-color: #007bff; border-color: #007bff;" value="Tìm kiếm" />
                               <input  v-if="image" @click="resetImage" type="button" style="width: fit-content; padding: 10px 15px; color: #fff; background-color: red; border-color: red;" value="Xóa" />
                            </div>
                        </div>
                    </div>
                </div>
            </span>
        </div>
    </div>
</template>
<script>
import { HttpClient } from "@/plugins/httpClient";
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css';
export default {
    components:{
        Cropper
    },
    data(){
        return{
            searchText: '',
            image: '',
            imageCrop: null,
        }
    },

    methods: {
        searchProduct(){
            // Nếu ở trang khác thì chuyển về /product
            if (this.$route.path === '/product'){
                this.emitter.emit('searchProduct', {searchText: this.searchText})
            }else{
                this.$router.push('/product?search='+this.searchText);
            }
        },
    
        handleFileUpload(event) {
            const file = event.target.files[0];
            if (file) {
                // Convert base64
                const reader = new FileReader();
                reader.onload = (e) => {
                    // Chuyển đổi tệp thành chuỗi Base64
                    this.image = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },

        resetImage(){
            this.image = '',
            this.imageCrop = null
        },

        async findByImage(){
            const { coordinates, canvas} = this.$refs.cropper.getResult();
			this.coordinates = coordinates;
			this.imageCrop = canvas.toDataURL();

            var resp  = await new HttpClient("http://localhost:5000").post("/predict", false, {}, {image: this.imageCrop.split(',')[1]})
            if(resp){
                console.log(resp)
                return this.showSuccessMsg("Tìm thành công")
            }
        }
    }
}
</script>
<style scoped>
    .cropper {
        background: #DDD; 
    }
</style>