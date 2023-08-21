<template lang="">
    <div>
        <BreadCrumb :breadcrumbType="'product/' + productId" />
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
                                            <a th:href="${product.ProductImagePath}" data-rel="prettyPhoto[product-gallery]">
                                                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgBOwFPAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A+qaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooo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" 
                                                     :alt="productId"/>
                                            </a>
                                            <div class="hidden"></div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-7 details-pro">
                                        <h1 class="title-head">Táo đỏ</h1>
                                        <div class="status clearfix">
                                            <div class="clearfix">
                                                Mã sản phẩm: <strong>{{productId}}</strong>
                                            </div>
                                            <div class="clearfix">
                                                Tình trạng: 
                                                <span class="inventory">Còn hàng</span>
                                                <span class="inventory">Hết hàng</span>
                                            </div>
                                        </div>
                                        <div class="clearfix price-box">
                                            <span class="special-price"> 
                                                <span class="price product-price">30,000đ</span>
                                            </span>
                                            <span class="old-price">
                                                <del class="price product-price-old">30,0000đ</del>
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
                                                        @click="addToCart"
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
<script setup>
import {useRoute} from 'vue-router'
import BreadCrumb from '@/components/client/BreadCrumb.vue'
import SocialMediaImages from '@/components/client/SocialMediaImages.vue';
import CommentRating from '@/components/client/CommentRating.vue'
import ProductCarousel from '@/components/carousel/ProductCarousel.vue';
import { ref } from 'vue';

const route = useRoute();
const productId = route.params.id;
const quantity = ref(1)

const addToCart = () => {
    alert(quantity.value)
}

const changeQuantityInput = (event) => {
    if(event.target.value === ''){
        quantity.value = 1
    }else{
        quantity.value = event.target.value
    }
}

const decreaseQuantity = () => {
    if(quantity.value > 1)
       quantity.value--;
}

const increaseQuantity = () => {
    quantity.value++;
}

</script>
<style lang="">
    
</style>