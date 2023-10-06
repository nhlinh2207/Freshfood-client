<template lang="">
    <div class="col-lg-12 mb-4">
       <!-- Illustrations -->
       <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">KPI doanh thu hàng tháng</h6>
            </div>
            <div class="card-body">
                <div class="dhx-kpi-chart">
                    <apexchart type="bar" height="400" :options="options" :series="chartData"></apexchart>
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
    data(){
        return{
            options: {
                chart: {
                   id: "bar-chart",
                },
                xaxis: {
                   categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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
            }
        }
    }
}
</script>
<style lang="">
    
</style>