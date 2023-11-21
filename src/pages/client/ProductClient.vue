<template lang="">
    <div class="container">
        <BreadCrumb breadcrumbType="product" />
    </div>
    <section>
        <section class="page">
            <div class="container">
                <div class="row">
                    <div class="clearfix"></div>
                    <div v-if="products.length == 0" class=" text-center col-sm-12 col-md-12 col-lg-9 order-lg-2">
                        <h3>Không có sản phẩm cần tìm !</h3>
                    </div>
                    <div v-if="products.length > 0" class="col-sm-12 col-md-12 col-lg-9 order-lg-2">
                        <div class="category-products products">
                            <div class="sortPagiBar">
                                <div class="row">
                                    <div class="col-sm-12 col-md-12 text-sm-right">
                                        <div class="bg-white clearfix">
                                            <div id="sort-by">
                                                <label class="d-none d-md-block">Sắp xếp theo: </label>
                                                <div>
                                                    <span style="cursor: pointer" class="dropdown-toggle" data-toggle="dropdown">{{sortText}}
                                                        <i class="fa fa-angle-down" aria-hidden="true"></i>    
                                                    </span> 
                                                    <ul class="dropdown-menu">
                                                        <li class="dropdown-item">
                                                            <a @click.prevent="updateSort('createTime', 'desc', 'Mặc định')" >Mặc định</a>
                                                        </li>
                                                        <li class="dropdown-item">
                                                            <a @click.prevent="updateSort('name', 'asc', 'Tên (A-Z)')">Tên (A-Z)</a>
                                                        </li>
                                                        <li class="dropdown-item">
                                                            <a @click.prevent="updateSort('name', 'desc', 'Tên (Z-A)')">Tên (Z-A)</a>
                                                        </li>
                                                        <li class="dropdown-item">
                                                            <a @click.prevent="updateSort('price', 'asc', 'Giá (Thấp-Cao)')">Giá (Thấp-Cao)</a>
                                                        </li>
                                                        <li class="dropdown-item">
                                                             <a @click.prevent="updateSort('price', 'desc', 'Giá (Cao-Thấp)')">Giá (Cao-Thấp)</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="view-mode float-left">
                                                <a href="javascript:void(0)" id="grid-view" data-toggle="tooltip" title="Lưới">
                                                    <label class="text-sm-left">
                                                        <b @click="changeShowingMode(1)" class="btn button-view-mode view-mode-grid" :class="{active : showingMode === 1}">
                                                            <i class="fa fa-th" aria-hidden="true"></i>
                                                        </b>
                                                    </label>
                                                </a>
                                                <a href="javascript:void(0)" id="list-view" data-toggle="tooltip" title="Danh sách">
                                                    <label class="text-sm-left">
                                                        <b  @click="changeShowingMode(0)" class="btn button-view-mode view-mode-list" :class="{active : showingMode === 0}">
                                                            <i class="fa fa-th-list" aria-hidden="true"></i>
                                                        </b>
                                                    </label>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <section class="product-view product-view-list">
                                <!-- Grid Product Mode -->
                                <GridProductMode :products="products" v-show="showingMode === 1" />
                                <!-- List Product Mode -->
                                <ListProductMode :products="products" v-show="showingMode === 0"/>
                                <!-- Pagination -->
                                <div class="text-center">
                                    <ul class="pagination justify-content-center">
                                        <li v-if="page > 0" class="page-item page-move"><a @click.prevent="updatePage(0)" class="page-link">|&lt;</a></li>
                                        <li v-if="page > 0" class="page-item page-move"><a @click.prevent="updatePage(page - 1)" class="page-link">&lt;</a></li>
                                        <li v-for="index in totalPages" :key="index" class="page-item" :class="{active : page === (index - 1)}"><a @click.prevent="updatePage(index - 1)" class="page-link">{{index}}</a></li>
                                        <li v-if="page < totalPages - 1" class="page-item page-move"><a  @click.prevent="updatePage(page + 1)" class="page-link">&gt;</a></li>
                                        <li v-if="page < totalPages - 1" class="page-item page-move"><a  @click.prevent="updatePage(totalPages - 1)" class="page-link">&gt;|</a></li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                    <!-- Aside Verticle Menu -->
                    <div class="col-sm-12 col-md-12 col-lg-3">
                        <AsideVerticleMenu :categories="categories" @updateCategoryId="handleUpdateCategoryId"/>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>
<script>
import BreadCrumb from '@/components/client/BreadCrumb.vue';
import ListProductMode from '@/components/client/ListProductMode.vue';
import GridProductMode from '@/components/client/GridProductMode.vue'
import AsideVerticleMenu from '@/components/client/AsideVerticleMenu.vue';
export default{
    components: {
        BreadCrumb,
        ListProductMode,
        GridProductMode,
        AsideVerticleMenu
    },

    data(){
        return{
            showingMode: 1,
            categories: [],
            products: [],
            sortBy: 'createTime',
            sortDir: 'desc',
            page: 0,
            size: 15,
            totalPages: null,
            categoryId: this.$route.query.categoryId || '',
            search: this.$route.query.search || '',
            sortText: 'Mặc định'
        }
    },

    methods: {     

        changeShowingMode(val){
           this.showingMode = val
        },

        handleUpdateCategoryId(id){
            this.categoryId = id
            this.search =''
            this.page = 0
            this.loadProduct();    
        },

        updateSort(sortBy, sortDir, sortText){
            this.sortBy = sortBy;
            this.sortDir = sortDir;
            this.sortText = sortText
            this.loadProduct();    
        },

        updatePage(val){
            this.page = val;
            this.loadProduct();    
        },

        async loadCategory(){
            var resp = await this.$httpClient.get("/category/getAll", false)
            if(!resp.result){
                return this.showErrorMsg(resp.message)
            }
            this.categories = resp.data
        },

        async loadProduct(){
            var resp = await this.$httpClient.get("/product/getAll", false, {page: this.page, size: this.size, search: this.search, sortBy: this.sortBy, sortDir: this.sortDir, categoryId: this.categoryId})
            if(!resp.result){
                return this.showErrorMsg(resp.message)
            }
            this.products = resp.data.data
            this.totalPages = resp.data.totalPages
            this.page = resp.data.currentPage
        },
    },

    beforeMount(){
        this.loadCategory();
        this.loadProduct();
    },

    mounted() {
        this.emitter.on('searchProduct', (data) => {
           this.search = data.searchText;
           this.categoryId = ''
           this.page = 0
           this.loadProduct();
        });
    },
}

</script>
<style scoped>
    .page-item{
        cursor: pointer;
    }
    .dropdown-item a{
        cursor: pointer
    }
</style>