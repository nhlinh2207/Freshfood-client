<template lang="">
    <div class="col-xl-4 col-lg-5">
		<div class="card shadow mb-4">
			<!-- Card Header - Dropdown -->
			<div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h5 class="m-0 font-weight-bold text-primary">Tỉ lệ mua hàng theo danh mục</h5>
				<div class="dropdown no-arrow">
					<a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
						data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
					</a>
					<div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
						aria-labelledby="dropdownMenuLink">
						<div class="dropdown-header">Năm</div>
						<a class="dropdown-item" href="#">2021</a>
						<a class="dropdown-item" href="#">2022</a>
						<a class="dropdown-item" href="#">2023</a>
					</div>
				</div>
			</div>
			<!-- Card Body -->
			<div class="card-body">
				<div class="chart-pie pb-2">
					<apexchart :options="options" :series="chartData" type="pie" height="300" width="260" ></apexchart>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {

    props:{
       chartData: Array,
       chartLabels: Array
    },
    data(){
        return{
            options: {
                labels: this.chartLabels,
                dataLabels: {
                    enabled: false,
                },
                legend: {
                    show: false,
                },
                tooltip: {
                    enabled: true,
                },
                colors: ["#ff5722", "#2196f3", "#4caf50", "#ff9800", "#9c27b0", "#FF9966", "#CC9900"],
                plotOptions: {
                    pie: {
                       expandOnClick: true,
                    },
                },
            },
        }
    }
}
</script>
<style lang="">
    
</style>