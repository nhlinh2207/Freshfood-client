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
			<PieChart :chartData="pieChartData" :chartLabels="pieChartLabels" />
        </div>
		<div class="row">
            <BarChart :chartData="barChartData" />
		</div>

    </div>
</template>
<script>
import SockJS from 'sockjs-client';
import Stomp from 'webstomp-client';
import { getLocalStorage } from "@/plugins/helpers";
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
            userCard: 0,
            monthlyIncomeCard: 0,
            annualIncomeCard: 0,
            rankCard: 0,
			areaChartData: [],
            pieChartData: [],
            pieChartLabels: [],
            barChartData: [],
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
            this.rankCard = resp.data.totalRank
        },

        async loadAreaChart(){
            var resp = await this.$httpClient.get("/chart/area", true, {})
            if(!resp.result){
                return this.showErrorMsg(resp.message)
            }
           
            var areaData = {}
            areaData['data'] = resp.data
            areaData['name'] = 'Doanh thu'
            // Area
            this.areaChartData = [areaData]
            // Bar
            this.barChartData = [
                {
                  name: "Expected income",
                  data: [200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000],
                },
                areaData
            ]
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

        // WEB SOCKET CONNECT
        rankRealtimeConnect(){
            try{    
                this.socket = new SockJS(process.env.VUE_APP_WEBSOCKET_URL);
                this.stompClient = Stomp.over(this.socket)
                var currentEmail = JSON.parse(getLocalStorage(process.env.VUE_APP_USER)).email;
                this.stompClient.connect(
                    {'chatRoomId' : this.chatRoomId, 'email' : currentEmail },
                    frame => {
                        console.log("socket connect success "+frame);
                        this.stompClient.subscribe('/topic/totalRanks', this.loadTotalRanks); 
                    },
                    error => {
                       console.log(error);
                       this.disconnect();
                    }
                );
            }catch(err){
                console.log("err socket: "+err)
            }
        },

        rankRealtimeDisconnect() {
            if (this.stompClient && this.stompClient.connected) {
               this.stompClient.disconnect();
               console.log("socket disconnect")
            }
        },

        loadTotalRanks(message){
            this.rankCard = message.body;
        }

    },
    
    beforeMount(){
        this.loadCardChart();
        this.loadAreaChart();
        this.loadPieChart();
    },

    mounted(){
        this.rankRealtimeConnect();
    },

    beforeUnmount() {
        this.rankRealtimeDisconnect();
    }
} 
</script>

<style lang="">
    
</style>