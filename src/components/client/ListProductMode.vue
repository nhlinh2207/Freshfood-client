<template lang="">
    <div class="row list-products product-list">
        <div v-for="(product, index) in products" :key="index" class="col-sm-12">
            <div class="product-box clearfix">
                <div class="product-thumbnail float-left">
                    <router-link :to="'/product/'+product.id" :title="product.name">
                        <img :src="product.mainImage" :alt="product.name"/>
                    </router-link>
                </div>
                <div class="product-info float-left">
                    <h3 class="product-name"> 
                        <router-link :to="'/product/'+product.id" >{{product.name}}</router-link>
                    </h3>
                    <div class="price-box clearfix">
                        <div class="special-price float-left">
                            <span class="price product-price">
                                {{product.price}}
                            </span>
                        </div>
                    </div>
                    <form class="variants pro-action-btn margin-top-15">
                        <router-link :to="'/product/'+product.id" class="btn-buy btn-cart  btn btn-primary mr-2" data-toggle="tooltip" title="Mua ngay">
                            <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                Mua ngay
                        </router-link>
                        <router-link :to="'/product/'+product.id" class="btn btn-success" data-toggle="tooltip" title="Xem">
                            <i class="fa fa-eye" aria-hidden="true"></i>
                        </router-link>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        products: Array
    }
}
</script>
<style lang="">
    
</style>