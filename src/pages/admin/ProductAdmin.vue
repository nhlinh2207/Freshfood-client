<template lang="">
    <div class="container-fluid">
        <BreadCrumb breadcrumbType="productAdmin" />
        <div class="row">
            <div class="col-sm-12">
                <form>
                    <div class="table-responsive table-cart-content">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="header-search search-form">
                                        <div class="form input-group search-bar search-form d-flex align-items-center">
                                            <input type="search" v-model="search" name="search" placeholder="Tìm kiếm" class="input-group-field st-default-search-input search-text" autocomplete="off" />
                                            <span class="input-group-btn">
                                            <button @click.prevent="loadProducts" class="btn icon-fallback-text">
                                                <i class="fa fa-search"></i>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 d-flex align-items-center justify-content-center">
                                <label class="d-none d-md-block mx-5 my-0"><strong>Danh mục: </strong></label>
                                <div>
                                    <span style="cursor: pointer" class="dropdown-toggle" data-toggle="dropdown">
                                        {{categoryName}}
                                    </span> 
                                    <ul class="dropdown-menu">
                                        <li class="dropdown-item">
                                            <a @click.prevent="resetCategory">Tất cả</a>
                                        </li>
                                        <li class="dropdown-item" v-for="c in categories" :key="c.id">
                                            <a @click.prevent="updateCategory(c)" >{{c.name}}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <table id="message-table" class="table table-bordered table-striped mt-4">
                            <thead>
                                <tr>
                                    <td class="text-center"><strong>Mã sản phẩm</strong></td>
                                    <td class="text-center"><strong>Ảnh</strong></td>
                                    <td class="text-center"><strong>Tên</strong></td>
                                    <td class="text-center"><strong>Số lượng</strong></td>
                                    <td class="text-center"><strong>Đơn giá</strong></td>
                                    <td class="text-center"><strong>Xem chi tiết</strong></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="p in products" :key="p.id">
                                    <td class="text-center">{{p.id}}</td>
                                    <td class="text-center">
                                        <img :src="p.extraImage1" />
                                    </td>
                                    <td class="text-center">{{p.name}}</td>
                                    <td class="text-center">{{p.quantty}}</td>
                                    <td class="text-center">{{convertCurrency(p.price)}}</td>
                                    <td class="text-center">
                                        <router-link :to="'/admin/updateProduct/'+p.id" title="Chỉnh sửa">
                                            <i class="fas fa-edit"></i>
                                        </router-link>
                                        <a @click="deleteProduct(p.id)" class="ml-4" title="Xóa sản phẩm">
                                            <i class="fas fa-trash"></i>  
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="text-center">
                            <ul class="pagination justify-content-center">
                                <li v-if="page > 0" class="page-item page-move"><a @click.prevent="updatePage(0)" class="page-link">|&lt;</a></li>
                                <li v-if="page > 0" class="page-item page-move"><a @click.prevent="updatePage(page - 1)" class="page-link">&lt;</a></li>
                                <li v-for="index in totalPages" :key="index" class="page-item" :class="{active : page === (index - 1)}"><a @click.prevent="updatePage(index - 1)" class="page-link">{{index}}</a></li>
                                <li v-if="page < totalPages - 1" class="page-item page-move"><a  @click.prevent="updatePage(page + 1)" class="page-link">&gt;</a></li>
                                <li v-if="page < totalPages - 1" class="page-item page-move"><a  @click.prevent="updatePage(totalPages - 1)" class="page-link">&gt;|</a></li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import BreadCrumb from '@/components/client/BreadCrumb.vue';

export default {
    components: {
        BreadCrumb
    },

    data(){
        return{
            products: [],
            page: 0,
            size: 12,
            search: '',
            sortBy: 'createTime',
            sortDir: 'desc',
            totalPages: null,
            categoryId: '',
            categories: [],
            categoryName: 'Tất cả'
        }
    },

    methods: {

        updatePage(val){
           this.page = val;
           this.loadProducts();    
        },

        async loadCategory(){
            var resp = await this.$httpClient.get("/category/getAll", true)
            if(!resp.result){
                return this.showErrorMsg(resp.message)
            }
            this.categories = resp.data
        },

        async loadProducts(){
            var resp = await this.$httpClient.get("/product/getAll", false, {page: this.page, size: this.size, search: this.search, sortBy: this.sortBy, sortDir: this.sortDir, categoryId: this.categoryId})
            if(!resp.result){
                return this.showErrorMsg(resp.message)
            }
            this.products = resp.data.data
            this.totalPages = resp.data.totalPages
            this.page = resp.data.currentPage
        },

        deleteProduct(id){
            this.$swal({
                title: 'Xóa sản phẩm ?',
                text: "Xóa sản phẩm có mã: "+id,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Xác nhận',
                cancelButtonText: 'Hủy'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    var resp = await this.$httpClient.delete("/product/delete", true, {id : id})
                    if(!resp.result){
                        return this.showErrorMsg(resp.message)
                    }
                    this.$swal({
                        title: 'Thành công',
                        text: "Sản phẩm đã được xóa !",
                        icon: 'success',
                    })
                    this.loadProducts();
                }
            })
        },

        updateCategory(c){
            this.categoryId = c.id;
            this.categoryName = c.name
            this.loadProducts();
        },

        resetCategory(){
            this.categoryId = '';
            this.categoryname = 'Tất cả'
            this.loadProducts();
        }
    },

    mounted(){
        this.loadProducts();
        this.loadCategory();
    }
}
</script>
<style scoped>
    .search-bar input{
       margin: 10px 0;
       border-radius: 15px;
       background-color: #EEEEEE;
    }

    .dropdown-item a{
        cursor: pointer;
    }
</style>