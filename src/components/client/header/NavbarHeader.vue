<template lang="">
    <nav :class="{sticky: isStickyNav}">
        <div class="container">
            <!-- MAIN MENU Bar -->
            <div class="d-none d-sm-none d-md-none d-lg-flex justify-content-between">
                <ul class="nav nav-left">
                    <NavbarItems />
                </ul>
                <div class="menu-search">
                    <NavbarSearch/>
                </div>
            </div>
            <!-- MENU OFFCANVAS -->
            <div class="d-lg-none d-xl-none menu-offcanvas" :class="{'open' : isOpenOffCanvas}">
                <div class="clearfix head-menu">
                    <ul class="list-inline">
                        <li>
                            <router-link to="/login"><i class="fa fa-user"></i>Đăng nhập</router-link>
                        </li>
                        <li>
                            <span> -</span>
                        </li>
                        <li>
                            <router-link to="/register">Đăng ký</router-link>
                        </li>
                        <li class="li-search">
                            <NavbarSearch/>
                        </li>
                    </ul>
                    <div class="menuclose" @click="closeOffCanvas"><i class="fa fa-window-close"></i></div>
                </div>
                <ul class="nav-mobile">
                   <NavbarItems/>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
import NavbarItems from '@/components/client/header/NavbarItems.vue';
import NavbarSearch from '@/components/client/header/NavbarSearch.vue';
export default {
    components: {
        NavbarItems,
        NavbarSearch
    },

    props: ['isOpenOffCanvas'],

    data(){
        return{
            isStickyNav : false,
            isLocalOpenOffCanvas: this.isOpenOffCanvas
        }
    },

    watch: {
        isOpenOffCanvas(newVal) {
          this.isLocalOpenOffCanvas = newVal; 
        }
    },

    methods: {
        closeOffCanvas(){
            this.isLocalOpenOffCanvas = false
            this.$emit('closeOffCanvas')
        }, 
        
        handleActiveStickyNav(){
            this.isStickyNav =  window.scrollY > 200
        },

        handleRemoveStickyNav() {
            this.isStickyNav = false;
        }
    },

    mounted(){
       window.addEventListener("scroll", this.handleActiveStickyNav)
    },

    beforeUnmount() {
      window.removeEventListener("scroll", this.handleRemoveStickyNav);
    }
}
</script>
<style scoped>
    .menuclose{
        cursor: pointer;
    }
</style>