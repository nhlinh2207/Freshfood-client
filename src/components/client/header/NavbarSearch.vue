<template lang="">
    <div class="header-search search-form">
        <div class="form input-group search-bar search-form">
            <input type="search" v-model="searchText" name="search" placeholder="Tìm kiếm" class="input-group-field st-default-search-input search-text" autocomplete="off" />
            <span class="input-group-btn">
                <button @click.prevent="searchProduct" class="btn icon-fallback-text">
                    <i class="fa fa-search"></i>
                </button>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            searchText: ''
        }
    },

    methods: {
        searchProduct(){
            this.$store.commit("search/SEARCH_PRODUCT", {searchText: this.searchText});
            this.$router.push('/product');
        }
    }
}
</script>
<style lang="">
    
</style>