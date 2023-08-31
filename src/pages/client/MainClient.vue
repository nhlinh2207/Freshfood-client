<template lang="">
    <HeaderClient/>
        <RouterView :key="$route.fullPath" />
    <FooterClient/>
</template>
<script>
import {useRoute, useRouter, RouterView} from 'vue-router'
import HeaderClient from '@/components/client/header/HeaderClient.vue'
import FooterClient from '@/components/client/footer/FooterClient.vue';
export default {
    name: 'MainClient',
    components: {
        HeaderClient,
        FooterClient,
        RouterView
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
    @import '@/assets/css/index.css';
    @import '@/assets/css/responsive.css';
    @import '@/assets/css/base.css';
    @import '@/assets/css/chatbox.css';
</style>