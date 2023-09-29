<template lang="">
    <body id="page-top">
        <div id="wrapper">
            <SideBar/>
            <div id="content-wrapper" class="d-flex flex-column">
               <!-- Main Content -->
               <div id="content">
                    <HeaderAdmin/>  
                    <RouterView :key="$route.fullPath"/>
                    <FooterAdmin/>   
               </div>
            </div>
        </div>
    </body>
</template>
<script>
import {useRoute, useRouter, RouterView} from 'vue-router'
import SideBar from '@/components/admin/SideBar.vue';
import HeaderAdmin from '@/components/admin/header/HeaderAdmin.vue';
import FooterAdmin from '@/components/admin/footer/FooterAdmin.vue';
export default {
 
    components: {
        SideBar,
        HeaderAdmin,
        FooterAdmin,
        RouterView,
    },

    data(){
        return{
            router : useRouter(),
            route : useRoute(),
        }
    }
}
</script>
<style scoped>
    @import "@/assets/css/sb-admin-2.min.css"; 
    @import '@/assets/css/chatbox.css';
</style>