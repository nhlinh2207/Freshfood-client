<template lang="">

    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        
        <!-- Sidebar - Brand -->
        <router-link class="sidebar-brand d-flex align-items-center justify-content-center" to="/admin/home">
            <div class="sidebar-brand-icon rotate-n-15">
               <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">Freshfood</div>
        </router-link>

        <!-- Divider -->
        <hr class="sidebar-divider my-0">
        <!-- Nav Item - Dashboard -->
        
        <SidebarItem url="/staff/home" icon="fas fa-home" title="Trang chủ" />
        
        <!-- Divider --> 
        <hr class="sidebar-divider">

        <!-- Heading -->
        <div class="sidebar-heading">
            Người dùng
        </div>

        <!-- Cart -->
        <SidebarItem url="/staff/cartStaff" icon="fa fa-shopping-bag" title="Đơn hàng" />

        <!-- Divider -->
        <hr class="sidebar-divider d-none d-md-block">

        <!-- Sidebar Toggler (Sidebar) -->
        <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
    </ul>

</template>
<script>
import SidebarItem from './SidebarItem.vue';

export default {
  methods: {
  },
    
    components: {
        SidebarItem
    }
}
</script>
<style lang="">
    
</style>