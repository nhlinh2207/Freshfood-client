<template lang="">
    <div class="footer-widget" :class="{active : isActive}" @click="toggleActive">
        <h3 class="margin-bottom-20 hastog">
            <span>Facebook</span>
        </h3>
        <div class="list-menu">
            <div class="footerText">
                <div class="fb-page" data-href="https://www.facebook.com/FacebookVietNam" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isActive : false
        }
    },
    methods: {
        toggleActive(){
            this.isActive = !this.isActive
        }
    }
}
</script>
<style lang="">
    
</style>