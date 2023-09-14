<template lang="">
    <div class="row list-products product-grid">
        <div v-for="(product, index) in products" :key="index" class="col-sm-6 col-md-4 col-lg-4">
            <div class="product-box">
                <div class="product-thumbnail flexbox-grid">
                    <router-link :to="'/product/'+product.id" :title="product.name">
                        <img :src="product.mainImage" :alt="product.name"/>
                    </router-link>
                    <div class="product-action d-none">
                        <form class="form variants form-nut-grid margin-bottom-0"> 
                            <div>
                                <router-link class="btn-buy btn-cart btn left-to add_to_cart" data-toggle="tooltip" title="Mua ngay" :to="'/product/'+product.id">
                                    <i class="fas fa-shopping-bag"></i>
                                </router-link>
                                <router-link :to="'/product/'+product.id" data-toggle="tooltip" title="Xem" class="btn-gray btn_view btn right-to">
                                    <i class="fas fa-eye"></i>
                                </router-link>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="product-info text-center">
                    <h3 class="product-name">
                        <router-link :to="'/product/'+product.id" :title="product.name">
                            <span>{{product.name}}</span>
                        </router-link>
                    </h3>
                    <div class="price-box">
                        <div class="special-price">
                            <span>{{product.price}}</span>
                        </div>
                    </div>
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