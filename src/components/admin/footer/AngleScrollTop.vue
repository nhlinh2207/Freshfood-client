<template lang="">
    <a class="scroll-to-top rounded" href="#page-top" style="display: block" v-if="isShowAngleTop" @click="handleScrollUp">
		<i class="fas fa-angle-up"></i>
        <h2>Hello Linh</h2>
	</a>
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
<style scoped>
    @import "@/assets/css/sb-admin-2.min.css"; 
</style>