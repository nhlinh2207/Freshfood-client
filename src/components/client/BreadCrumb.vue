<template lang="">
    <section class="bread_crumb py-4">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <ul class="breadcrumb">
                        <li>
                            <router-link to='/home'><span><i class="fa fa-home"></i>Freshfood</span></router-link>
                            <span><i class="fa fa-angle-right"></i></span>
                        </li>
                        <li>
                            <router-link :to="breadcrumbUrl"><strong>{{breadcrumbText}}</strong></router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
   </section>  
</template>
<script>
export default {
    props: ['breadcrumbType'],
    data(){
        return{
            breadcrumbUrl: "/"+this.breadcrumbType,
            breadcrumbText: this.$route.meta.title || "Client"
        }
    }
}
</script>
<style lang="">
    
</style>