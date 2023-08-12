<template lang="">
    <div class="footer-widget" :class="{active : isActive}" @click="toggleActive">
        <h3 class="hastog">
            <span>Liên hệ</span>
        </h3>
        <ul class="list-menu list-showroom">
            <li class="clearfix">
                <i class="block_icon fa fa-map-marker"></i>
                <p>A12, Đinh Tiên Hoàng, Q. Hoàn Kiếm, Hà Nội</p>
            </li>
            <li class="clearfix">
                <i class="block_icon fa fa-phone"></i>
                <a href="tel:0123456789">0123456789</a>
            </li>
            <li class="clearfix">
                <i class="block_icon fa fa-envelope"></i>
                <a href="mailto:contact@yourdomain.com">contact@yourdomain.com</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isActive : false
        }
    },
    methods: {
        toggleActive(){
            this.isActive = !this.isActive
        }
    }
}
</script>
<style lang="">
    
</style>