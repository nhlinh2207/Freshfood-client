<template lang="">
    <li v-if="!isAuthenticated">
        <router-link to="/login"><i class="fa fa-user"></i>&nbsp;&nbsp;Đăng nhập</router-link>
    </li>
    <li v-if="!isAuthenticated">
        <span> -</span>
    </li>
    <li v-if="!isAuthenticated">
        <router-link to="/register">Đăng ký</router-link>
    </li>
    <li v-if="isAuthenticated">
        <a class="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)">Xin chào, Nguyễn Hoài Linh</a>    
        <ul class="dropdown-menu">
            <li class="dropdown-item text-center">
                <router-link to="/profile">Hồ sơ</router-link>
            </li>
            <li class="dropdown-item text-center">
                <router-link to="/history">Lịch sử mua hàng</router-link>
            </li>
            <li @click.prevent="logout" class="dropdown-item text-center">
                <a>Đăng xuất</a>
            </li>
        </ul>
    </li>
</template>
<script>
export default {
  watch: {
  },
    methods: {
        logout(){
            this.$store.commit("authen/LOGOUT");
            window.location.href = "/";
        }
    }
}
</script>
<style scoped>
    
</style>