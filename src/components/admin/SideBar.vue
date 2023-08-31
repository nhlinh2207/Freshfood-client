<template lang="">

    <ul th:fragment="sidebar" class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
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
            Món ăn
        </div>

            <!-- Product Category -->
        <SidebarItem url="/admin/category" icon="fas fa-list" title="Danh mục món ăn" />

        <!-- Product -->
        <SidebarItem url="/admin/product" icon="fas fa-list" title="Sản phẩm" />

        <!-- Divider --> 
        <hr class="sidebar-divider">

        <!-- Heading -->
        <div class="sidebar-heading">
            Người dùng
        </div>

            <!-- Staff -->
        <SidebarItem url="/admin/staffs" icon="fas fa-user" title="Nhân viên" />

        <!-- Nav Item - Charts --> 
        <SidebarItem url="/admin/users" icon="fas fa-user" title="Khách hàng" />

        <!-- Cart -->
        <li class="nav-item active">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
                <i class="fa fa-edit"></i>
                <span>Đơn hàng</span>
            </a>
            <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                    <router-link class="collapse-item" to="/admin/don-hang-da-giao">Đã giao</router-link>
                    <router-link class="collapse-item" to="/dmin/don-hang-chua-giao">Chưa giao</router-link>
                </div>
            </div>
        </li>

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
    
    components: {
        SidebarItem
    }
}
</script>
<style lang="">
    
</style>