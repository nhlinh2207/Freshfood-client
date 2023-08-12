<template lang="">
    <div class="top-cart-contain float-right">
        <div class="mini-cart text-center" id="cart">
            <div class="heading-cart">
                <router-link class="d-flex align-items-center" to="/cart">
                    <div class="icon float-left position-relative">
                        <i class="fa fa-shopping-bag"></i>
                        <span class="cartCount count_item_pr d-xl-none" id="cart-total">0</span>
                    </div>
                    <div class="right-content d-none d-xl-block">
                        <span class="label">Giỏ hàng</span>
                        <span class="cartCount2">(0)</span>
                    </div>
                </router-link>
            </div>
            <div class="top-cart-content"></div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>