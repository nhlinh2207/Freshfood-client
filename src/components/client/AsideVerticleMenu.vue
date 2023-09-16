<template lang="">
    <aside id="column-left" class="left-column aompliance aside-vetical-menu">
        <aside class="blog-aside aside-item sidebar-category module_category  category_custom" id="category_custom-1">
            <div class="aside-title text-center text-xl-left">
                <h2 class="title-head" style="line-height: 25px">
                    <span>Danh mục sản phẩm</span>
                </h2>
            </div>
            <div class="aside-content">
                <div class="nav-category navbar-toggleable-md">
                    <ul class="nav navbar-pills">
                        <li class="nav-item" v-for="(category, index) in categories" :key="index">
                            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                            <a style="cursor: pointer" class="nav-link" @click.prevent="handleClick(category.id)">{{category.name}}</a>
                        </li>
                    </ul>
                 </div>
            </div>
        </aside>
     </aside>
</template>
<script>
export default {
    props: {
        categories: Array
    },

    methods: {
        handleClick(id){
            // Nếu ở trang khác thì chuyển về /product
            if (this.$route.path === '/product'){
                this.$emit('updateCategoryId', id)
            }else{
                this.$router.push('/product?categoryId='+id);
            }
        }
    }
}
</script>
<style lang="">
    
</style>