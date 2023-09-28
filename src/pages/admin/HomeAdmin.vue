<template lang="">
    <div class="container-fluid">
        <!-- <BreadCrumb breadcrumbType="adminHome" /> -->
        <PDFExporter />
        <!-- Card chart -->
        <div class="row">
            <CardChart title="Doanh thu tháng" data="20.000 đ" icon="fas fa-calendar fa-2x text-300" borderColor='border-left-primary'/>
            <CardChart title="Doanh thu năm" data="300.000 đ" icon="fas fa-dollar-sign fa-2x text-300" borderColor="border-left-success" />
            <CardChart title="Khách hàng đăng ký" data="23" icon="fas fa-clipboard-list fa-2x text-300" borderColor="border-left-info" />
            <CardChart title="Lượt đánh giá" data="50" icon="fas fa-comments fa-2x text-300" borderColor="border-left-warning" />
        </div>

        <!-- Content Row -->
		<div class="row">
			<AreaChart :chartData="chartData"/>
			<PieChart/>
        </div>
		<div class="row">
            <BarChart />
		</div>

    </div>
</template>
<script>
import PDFExporter from '@/components/admin/PDFExporter.vue';
import CardChart from '@/components/admin/charts/CartChart.vue';
import AreaChart from '@/components/admin/charts/AreaChart.vue';
import PieChart from '@/components/admin/charts/PieChart.vue';
import BarChart from '@/components/admin/charts/BarChart.vue';
export default {
    components: {
        PDFExporter,
        CardChart,
		AreaChart,
		PieChart,
		BarChart
    },

	data(){
		return {
			chartData: [30, 40, 45, 50, 49, 60, 70, 91, 30, 40, 23, 34]
		}
	}
} 
</script>

<style lang="">
    
</style>