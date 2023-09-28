<template lang="">
    <div class="col-xl-8 col-lg-7">
		<div class="card shadow mb-4">
			<!-- Card Header - Dropdown -->
			<div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
				<h6 class="m-0 font-weight-bold text-primary">Tổng quan doanh thu</h6>
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
				<div class="chart-area">
					<apexchart width="650" height="330" type="area" :options="options" :series="series"></apexchart>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
    
    props:{
       chartData: Array
    },

    components: {
    },
    data(){
        return {
            options: {
                chart: {
                    id: 'freshfood-area-chart'
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: "gradient",
                    gradient: {
                       shadeIntensity: 1,
                       opacityFrom: 0.7,
                       opacityTo: 0.9,
                       stops: [0, 90, 100]
                    }
                },
                xaxis: {
                    categories: [
                       "Jan",
                       "Feb",
                       "Mar",
                       "Apr",
                       "May",
                       "Jun",
                       "Jul",
                       "Aug",
                       "Sep",
                       "Oct",
                       "Nov",
                       "Dec"
                    ]
                },
                yaxis: {
                    min: 0,
                    max: 120,
                    tickAmount: 6,
                    labels: {
                        formatter: function (value) {
                             return value + " đ"; // Định dạng nhãn trục Y
                        },
                    }
                }
            },
            series: [{
               name: 'series-1',
               data: this.chartData
            }]
        }
    },
}
</script>
<style lang="">
    
</style>