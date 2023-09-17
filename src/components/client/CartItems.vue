<template lang="">
    <ul id="cart-slidebar" class="mini-products-list count_li textcenter">
        <li v-if="cart.length == 0" class="no-item"> 
            <p class="text-center">Giỏ hàng của bạn trống!</p>
        </li>
        <li v-else class="list-item-cart">
            <ul>
                <li v-for="item in cart" :key="item.id" class="item product-id-123">
                    <div class="border_list">
                        <a class="product-image" :title="item.name">
                            <img :src="item.extraImage1" width="100"/>
                        </a>
                        <div class="detail-item">
                            <div class="product-details">
                                <p class="product-name">
                                    <router-link :to="'/product/'+item.id" :title="item.name">{{item.name}}</router-link>
                                </p>
                            </div>
                            <div class="product-details-bottom">
                                <span class="price">{{convertCurrency(item.price)}}</span>
                                <a @click.prevent="removeFromCart({id: item.id})" title="Xóa" class="remove-item-cart fa">x</a>
                                <div class="quantity-select qty_drop_cart">
                                    <span class="input-text number-slidebar">x {{item.qty}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </li>
        <li v-if="cart.length > 0" class = "pd">
            <div class="top-subtotal">
                <div class="clearfix">
                    Thành tiền: <span class="price ">{{convertCurrency(totalPrice)}}</span>
                </div>
                <div class="clearfix">
                    Tông tiền: <span class="price">{{convertCurrency(totalPrice)}}</span>
                </div>
            </div>
        </li>
        <li v-if = "cart.length > 0" style="display: flex; align-items: center; justify-content: space-between" class = "text-center pd right_ct">
            <router-link class="btn btn-primary mr-3" to="/cart">
                <span>Chi tiết</span>
            </router-link>

            <router-link class="btn btn-success" to="/checkout">
                <span>Thanh toán</span>
            </router-link>
        </li>
    </ul>
</template>
<script>
import { mapActions } from 'vuex';
export default {

    computed: {
        cart(){
            return this.$store.getters["cart/cartList"] || [];
        },
        totalPrice(){
            return this.$store.getters["cart/priceTotal"] || 0;
        }
    },

    methods:{
        ...mapActions('cart', ['removeFromCart']),
    }
}
</script>
<style lang="">
    
</style>