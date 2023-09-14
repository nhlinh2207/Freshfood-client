<template lang="">
    <div class="container-fluid">
        <BreadCrumb breadcrumbType="productAdmin" />

    </div>
</template>
<script>
import BreadCrumb from '@/components/client/BreadCrumb.vue';

export default {
    components: {
        BreadCrumb
    },

    methods: {
        deleteProduct(id){
            this.$swal({
                title: 'Are you sure ?',
                text: "Delete product with id "+id,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    var resp = await this.$httpClient.delete("/product/delete", true, {id : id})
                    if(!resp.result){
                        return this.showErrorMsg(resp.message)
                    }
                    this.$swal({
                        title: 'Deleted',
                        text: "Your product was deleted !",
                        icon: 'success',
                    })
                    this.loadCategory();
                }
            })
        }
    }
}
</script>
<style lang="">
    
</style>