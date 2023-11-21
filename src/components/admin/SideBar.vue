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
        
        <SidebarItem url="/admin/home" icon="fas fa-home" title="Trang chủ" />

        <!-- Divider -->
        <hr class="sidebar-divider">
        <!-- Heading -->
        <div class="sidebar-heading">
            Sản phẩm
        </div>

            <!-- Product Category -->
        <SidebarItem url="/admin/category" icon="fas fa-list" title="Danh mục sản phẩm" />

        <!-- Product -->
        <SidebarItem url="/admin/product" icon="fas fa-list" title="Sản phẩm" />

        <!-- Divider --> 
        <hr class="sidebar-divider">

        <!-- Heading -->
        <div class="sidebar-heading">
            Người dùng
        </div>

            <!-- Staff -->
        <SidebarItem url="/admin/staff" icon="fas fa-user" title="Nhân viên" />

        <!-- Nav Item - Charts --> 
        <SidebarItem url="/admin/user" icon="fas fa-user" title="Khách hàng" />

        <!-- Cart -->
        <SidebarItem url="/admin/cartManage" icon="fa fa-shopping-bag" title="Đơn hàng" />

        <!-- Divider -->
        <hr class="sidebar-divider d-none d-md-block">

        <!-- Heading -->
        <div class="sidebar-heading">
            Hệ thống
        </div>

        <SidebarItem url="/admin/user" icon="fas fa-cookie" title="Phân quyền hệ thống" />

        <!-- Sidebar Toggler (Sidebar) -->
        <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
    </ul>

</template>
<script>
import SidebarItem from './SidebarItem.vue';

export default {
    
    components: {
        SidebarItem
    }
}
</script>
<style lang="">
    
</style>