<template lang="">
    <ul class="tabs tabs-title ajax clearfix">
        <li  v-for="(category, index) in categories" :key="index" class="tab-link has-content" :class="{active : currentTab === index}" @click="changeTab(index)" data-tab="category_custom20 active" href="#category_custom20" data-toggle="tab">
            <span>{{category}}</span>
        </li>
    </ul>
</template>
<script>
export default {
    props: {
        categories: Array,
        tabOrder: String
    },

    data() {
        return {
            currentTab : 0
        }
    },

    methods: {
        changeTab(index) {
            this.currentTab = index
            this.emitter.emit('product-tab-change', { tabIndex: this.tabOrder === "1" ? this.currentTab : this.currentTab + 3 });
        }
    }
}
</script>
<style lang="">
    
</style>