<template lang="">
    <div class="container-fluid">
        <!-- <BreadCrumb breadcrumbType="adminHome" /> -->
        <PDFExporter />
        <!-- Card chart -->
        <div class="row">
            <CardChart title="Doanh thu tháng" :data="convertCurrency(monthlyIncomeCard)" icon="fas fa-calendar fa-2x text-300" borderColor='border-left-primary'/>
            <CardChart title="Doanh thu năm" :data="convertCurrency(annualIncomeCard)" icon="fas fa-dollar-sign fa-2x text-300" borderColor="border-left-success" />
            <CardChart title="Khách hàng đăng ký" :data="userCard" icon="fas fa-clipboard-list fa-2x text-300" borderColor="border-left-info" />
            <CardChart title="Lượt đánh giá" :data="rankCard" icon="fas fa-comments fa-2x text-300" borderColor="border-left-warning" />
        </div>

        <!-- Content Row -->
		<div class="row">
			<AreaChart :chartData="areaChartData"/>
			<!-- <PieChart :chartData="pieChartData" :chartLabels="pieChartLabels" /> -->
        </div>
		<!-- <div class="row">
            <BarChart :chartData="areaChartData" :chartLabels="areaChartLabels" />
		</div> -->

    </div>
</template>
<script>
import PDFExporter from '@/components/admin/PDFExporter.vue';
import CardChart from '@/components/admin/charts/CartChart.vue';
import AreaChart from '@/components/admin/charts/AreaChart.vue';
// import PieChart from '@/components/admin/charts/PieChart.vue';
// import BarChart from '@/components/admin/charts/BarChart.vue';
export default {
    components: {
        PDFExporter,
        CardChart,
		AreaChart,
		// PieChart,
		// BarChart
    },

	data(){
		return {
            userCard: 0,
            monthlyIncomeCard: 0,
            annualIncomeCard: 0,
            rankCard: 0,
			areaChartData: [],
            pieChartData: [],
            pieChartLabels: [],
            barChartData: [],
            barChartLabels: []
		}
	},

    methods: {
        async loadCardChart(){
            var resp = await this.$httpClient.get("/chart/card", true, {})
            if(!resp.result){
                return this.showErrorMsg(resp.message)
            }
            this.userCard = resp.data.totalUser
            this.monthlyIncomeCard = resp.data.monthlyIncome
            this.annualIncomeCard = resp.data.annualIncome
            this.tankCard = resp.data.totalRank
        },

        async loadAreaChart(){
            var resp = await this.$httpClient.get("/chart/area", true, {})
            if(!resp.result){
                return this.showErrorMsg(resp.message)
            }
            this.areaChartData = []
            for(var i = 0; i< resp.data.length; i++){
                this.areaChartData.push(resp.data[i])
            }
            console.log("ares ", this.areaChartData)
        },

        async loadPieChart(){
            var resp = await this.$httpClient.get("/chart/pie", true, {})
            if(!resp.result){
                return this.showErrorMsg(resp.message)
            }
            var data = resp.data
            this.pieChartLabels = []
            this.pieChartData = []
            for (const key in data) {
                this.pieChartLabels.push(key);
                this.pieChartData.push(data[key]);
            }
        },

        // async loadBarChart(){
        //     var resp = await this.$httpClient.get("/chart/bar", true, {})
        //     if(!resp.result){
        //         return this.showErrorMsg(resp.message)
        //     }
        //     var data = resp.data
        //     this.barChartLabels = [];
        //     this.barChartData = [];
        //     for (const key in data) {
        //         this.barChartLabels.push(key);
        //         this.barChartData.push(data[key]);
        //     }
        // },
    },
    
    beforeMount(){
        this.loadCardChart();
        this.loadAreaChart();
        // this.loadPieChart();
        // this.loadBarChart();
    },
} 
</script>

<style lang="">
    
</style>