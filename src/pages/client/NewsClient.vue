<template lang="">
    <div class="container">
        <BreadCrumb breadcrumbType="news" />
    </div>
    <h1>News Page</h1>
    <AreaChart/>
</template>
<script>
import BreadCrumb from '@/components/client/BreadCrumb.vue';
import AreaChart from '@/components/admin/charts/AreaChart.vue';
export default {
    components: {
        BreadCrumb,
        AreaChart
    }
}
</script>
<style lang="">
    
</style>