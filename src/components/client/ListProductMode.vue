<template lang="">
    <div class="row list-products product-list">
        <div v-for="(brand, index) in 15" :key="index" class="col-sm-12">
            <div class="product-box clearfix">
                <div class="product-thumbnail float-left">
                    <router-link to="/product/1" title="Táo đỏ">
                        <img :src="require('@/assets/images/product/Taodo-260x200.jpg')" alt="Táo đỏ"/>
                    </router-link>
                </div>
                <div class="product-info float-left">
                    <h3 class="product-name"> 
                        <router-link to="/product/1" >Táo đỏ</router-link>
                    </h3>
                    <div class="price-box clearfix">
                        <div class="special-price float-left">
                            <span class="price product-price">
                                30,000đ
                            </span>
                        </div>
                    </div>
                    <form class="variants pro-action-btn margin-top-15">
                        <router-link to="/product/1" class="btn-buy btn-cart  btn btn-primary mr-2" data-toggle="tooltip" title="Mua ngay">
                            <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                Mua ngay
                        </router-link>
                        <router-link to="/product/1" class="btn btn-success" data-toggle="tooltip" title="Xem">
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
    
}
</script>
<style lang="">
    
</style>