<template lang="">
    <header class="header">
        <!--TOPBAR MOBILE-->
        <div class="topbar-mobile d-lg-none d-xl-none text-center text-sm-left">
            <div class="container">
                <LangCurrMobileDropdown/>
            </div>
        </div>
        <!-- TOPBAR DesKTOP -->
        <div class="topbar d-none  d-sm-none d-md-none d-lg-block">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-6 col-lg-6 a-left">
                        <ul class="list-inline d-flex info-header">
                            <li>
                                <i class="fa fa-mobile"></i> <b>Số điện thoại</b>
                                <span>
                                    <a href="tell:0123456789"> 0123456789</a>
                                </span>
                            </li>
                            <li class="margin-left-20">
                                <i class="fa fa-envelope"></i> <b>Email:</b>
                                <span>
                                    <a href="mailto:contact@yourdomain.com">contact@yourdomain.com</a>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md--6 col-lg-6">
                        <ul class="list-inline d-flex float-right">
                            <LangCurrDesktopDropdown />
                            <LoginDropdown/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- HEADER CONTENT -->
        <div class="container">
            <div class="header-content clearfix">
                <div class="row">
                    <!-- LOGO -->
                    <div class="col-sm-12 col-md-12 col-lg-3 text-center text-lg-left">
                        <LogoHeader/>
                    </div>
                     <!--HEADER SERVICE-->
                    <div class="col-sm-12 col-md-12 col-lg-7 d-none d-sm-none d-md-block header-service">
                        <ServiceHeader/>
                    </div>
                    <!-- HEADER CarT -->
                    <div class="col-sm-12 col-md-12 col-lg-2 d-none d-sm-none d-md-none d-lg-block">
                        <CartHeader/>
                    </div>
                </div>
            </div>
            <div class="menu-bar d-lg-none" @click="openOffCanvas">
                <img src="@/assets/images/logo/menu-bar.png" alt="menu bar" />
            </div>
            <div class="icon-cart-mobile d-block d-lg-none float-left position-absolute" onclick="window.location.href='/freshfood/checkout'">
                <div class="icon position-relative">
                    <i class="fa fa-shopping-bag"></i>
                    <span class="cartCount count_item_pr">0</span>
                </div>
            </div>
        </div>
        <!-- NAVBAR -->
        <NavbarHeader :isOpenOffCanvas="isOpenOffCanvas" @closeOffCanvas="closeOffCanvas"/>
   </header>

</template>
<script>
import LangCurrMobileDropdown from '@/components/client/header/LangCurrMobileDropdown.vue'
import LangCurrDesktopDropdown from '@/components/client/header/LangCurrDesktopDropdown.vue'
import LoginDropdown from '@/components/client/header/LoginDropdown.vue'
import LogoHeader from '@/components/client/header/LogoHeader.vue'
import ServiceHeader from '@/components/client/header/ServiceHeader.vue'
import CartHeader from '@/components/client/header/CartHeader.vue'
import NavbarHeader from '@/components/client/header/NavbarHeader.vue'

export default {
    components: {
        LangCurrMobileDropdown,
        LangCurrDesktopDropdown,
        LoginDropdown,
        LogoHeader,
        ServiceHeader,
        CartHeader,
        NavbarHeader
    },

    data(){
        return{
            isOpenOffCanvas : false
        }
    },

    methods: {
        openOffCanvas(){
            this.isOpenOffCanvas = true
        },
        closeOffCanvas(){
            this.isOpenOffCanvas = false
        }
    }
}
</script>
<style scoped>

    .menu-bar{
        cursor: pointer;
    }
</style>