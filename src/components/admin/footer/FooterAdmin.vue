<template lang="">
    <footer th:fragment="footer" class="sticky-footer bg-white">
		<div class="container my-auto">
			<div class="copyright text-center my-auto">
				<span>Copyright &copy; Your Website 2021</span>
			</div>
		</div>
		<ChatBox />
		<AngleScrollTop /> 
	</footer>
</template>
<script>
import AngleScrollTop from '@/components/admin/footer/AngleScrollTop.vue';
import ChatBox from '@/components/admin/footer/ChatBox.vue'
export default {
    components:{
		AngleScrollTop,
		ChatBox
	},

	methods: {
		
	}
}
</script>
<style lang="">
    
</style>