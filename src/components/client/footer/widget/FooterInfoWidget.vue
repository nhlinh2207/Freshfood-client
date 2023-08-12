<template lang="">
    <div class="footer-widget" :class="{active : isActive}" @click="toggleActive">
        <h3 class="hastog">
            <span>Thông tin</span>
        </h3>
        <ul class="list-menu list-blogs">
            <li>
                <a href="gioi-thieu.html">Giới thiệu</a>
            </li>
            <li>
                <a href="thong-tin-van-chuyen.html">Thông tin vận chuyển</a>
            </li>
            <li>
                <a href="quy-dinh-va-dieu-khoan.html">Quy định và Điều khoản</a>
            </li>
            <li>
                <a href="chinh-sach-bao-mat.html">Chính sách bảo mật</a>
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