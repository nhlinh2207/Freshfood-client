<template lang="">
    <div class="col-lg-12 mb-4">
       <!-- Illustrations -->
       <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">KPI doanh thu hàng tháng</h6>
            </div>
            <div class="card-body">
                <div class="dhx-kpi-chart">
                    <apexchart type="bar" :options="options" :series="series"></apexchart>
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
                chart: {
                   id: "bar-chart",
                },
                xaxis: {
                   categories: this.chartLabels,
                },
                plotOptions: {
                    bar: {
                        horizontal: false, // Để biểu đồ dọc, đặt thành true
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    width: 1,
                    colors: ["#fff"],
                },
                legend: {
                   position: "top",
                   horizontalAlign: "left",
                   offsetX: 40,
                },
            },
            series: [
            {
                name: "Serie A",
                data: [30, 40, 45, 50, 49, 60, 70, 91, 75, 10, 77, 98],
            },
            {
                name: "Serie B",
                data: this.chartData,
            }],
        }
    }
}
</script>
<style lang="">
    
</style>