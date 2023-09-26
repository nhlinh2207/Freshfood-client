<template lang="">
    <div>
        <div class="container">
            <BreadCrumb :breadcrumbType="'product/' + productId" />
        </div>
        <section>
            <section class="page">
                <div class="container">
                    <div class="row">
                        <div class="clearfix"></div>
                        <div id="content" class="col-sm-12 col-lg-9">
                            <div class="details-product">
                                <div class="row">
                                    <div class="col-sm-12 col-md-5">
                                        <div class="large-image">
                                            <router-link :to="'/product/'+product.id" data-rel="prettyPhoto[product-gallery]">
                                                <img :src="product.extraImage2" :alt="product.name"/>
                                            </router-link>
                                            <div class="hidden"></div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-7 details-pro">
                                        <h1 class="title-head">{{product.name}}</h1>
                                        <div class="status clearfix">
                                            <div class="clearfix">
                                                Mã sản phẩm: <strong>{{product.id}}</strong>
                                            </div>
                                            <div class="clearfix">
                                                Tình trạng: 
                                                <span v-if="product.quantity > 0" class="inventory">Còn hàng</span>
                                                <span v-if="product.quantity === 0" class="inventory">Hết hàng</span>
                                            </div>
                                        </div>
                                        <div class="clearfix price-box">
                                            <span class="special-price"> 
                                                <span class="price product-price">{{convertCurrency(product.price)}}</span>
                                            </span>
                                            <span class="old-price">
                                                <del class="price product-price-old">{{product.price}}</del>
                                                <span class="discount">&nbsp;&nbsp; Giảm <strong>10%</strong></span>
                                            </span>
                                        </div>
                                        <div class="product-summary product_description margin-bottom-15">
                                        </div>
                                        <div id="product" class="form-product mb-5">
                                            <div class="margin-bottom-10 dqdt-form form">
                                                <div class="form-group form-group form-detail-action clearfix">
                                                    <label class="float-left" for="input-quantity">Số lượng</label>
                                                    <div class="float-left custom custom-btn-number">
                                                        <span class="qtyminus" data-field="quantity" @click="decreaseQuantity">-</span>
                                                        <input type="text" class="input-text qty text-center" data-field="quantity" title="Số lượng" maxlength="12"
                                                            id="input-quantity" name="quantity" :value="quantity" 
                                                            onkeypress="if(isNaN(this.value + String.fromCharCode(event.keyCode) )) return false;"
                                                            @change="changeQuantityInput"
                                                        />
                                                        <span class="qtyplus" data-field="quantity" @click="increaseQuantity">+</span>                                          
                                                    </div>
                                                    <button class="float-left btn btn-lg btn-primary btn-cart btn-cart2 add_to_cart btn_buy add_to_cart"
                                                        @click.prevent="addToCart({product: product, qty: quantity})"
                                                        type="button" id="button-cart" data-loading-text="Đang tải...">
                                                        <span>Thêm vào giỏ <i class="fa .fa-caret-right"></i></span>
                                                    </button>  
                                                </div>
                                            </div>         
                                        </div>
                                        <div class="social-sharing mb-5">
                                            <SocialMediaImages />
                                        </div>
                                    </div>
                                </div>
                                <!-- Commment and rating -->
                                <CommentRating/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Reference product -->
            <section class="section featured-product wow fadeInUp mb-4 mt-3">
                <div class="container">
                    <div class="section-title text-center">
                        <h2>
                           <a href="javascript:void(0)">Sản phẩm Liên quan</a>
                        </h2>
                    </div>
                    <!-- Carousel -->
                    <ProductCarousel />
                </div>
            </section>
        </section>
    </div>
</template>
<script>
import {useRoute} from 'vue-router'
import BreadCrumb from '@/components/client/BreadCrumb.vue'
import SocialMediaImages from '@/components/client/SocialMediaImages.vue';
import CommentRating from '@/components/client/CommentRating.vue'
import ProductCarousel from '@/components/carousel/ProductCarousel.vue';
import { mapActions } from 'vuex';

export default{

    components: {
       BreadCrumb,
       SocialMediaImages,
       CommentRating,
       ProductCarousel
    },
    data () {
        return {
            quantity: 1,
            route: useRoute(),
            productId: useRoute().params.id,
            product: {}
        }
    },
    methods: {
        ...mapActions('cart', ['addToCart']),
        changeQuantityInput(event){
           this.quantity = event.target.value === '' ? 1 : event.target.value
        },

        decreaseQuantity(){
            if(this.quantity > 1)
               this.quantity--;
        },

        increaseQuantity(){
            this.quantity++;
        },

        async loadProduct(){
            var resp = await this.$httpClient.get("/product/findById", false, {id: this.productId})
            if(!resp.result){
                return this.showErrorMsg(resp.message)
            }
            this.product = resp.data
        },
    },

    beforeMount(){
        this.loadProduct();
    },
}

</script>
<style lang="">
    
</style>