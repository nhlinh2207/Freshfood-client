<template lang="">
    <li>
        <router-link to="/login"><i class="fa fa-user"></i>&nbsp;&nbsp;Đăng nhập</router-link>
    </li>
    <li>
        <span> -</span>
    </li>
    <li>
        <router-link to="/register">Đăng ký</router-link>
    </li>
    <!-- <li sec:authorize="isAuthenticated()">
        <a class="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)">Xin chào, Nguyễn Hoài Linh</a>    
        <ul class="dropdown-menu">
            <li class="dropdown-item">
                <a href="/freshfood/profile">Hồ sơ</a>
            </li>
            <li class="dropdown-item text-center">
                <a class="text-center" href="/freshfood/history">Lịch sử mua hàng</a>
            </li>
            <li class="dropdown-item">
                <a class="text-center" href="/freshfood/history">Đăng xuất</a>
            </li>
        </ul>
    </li> -->
</template>
<script>
export default {
    
}
</script>
<style scoped>
    
</style>