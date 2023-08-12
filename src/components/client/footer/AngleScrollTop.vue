<template lang="">
     <div class="back-to-top show" v-if="isShowAngleTop" @click="handleScrollUp">
        <i class="fa fa-angle-up"></i>
    </div>
</template>
<script>
export default {

    mounted(){
       window.addEventListener("scroll", this.handleScollDown)
    },

    data(){
        return{
            isShowAngleTop : false
        }
    },

    methods: {
        handleScollDown(){
          this.isShowAngleTop = window.scrollY > 100
        },
        handleScrollUp(){
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    },

    beforeUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }
}
</script>
<style lang="">
    
</style>