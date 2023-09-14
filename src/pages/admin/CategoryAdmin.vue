<template lang="">
    <div class="container-fluid">
        <BreadCrumb breadcrumbType="categoryAdmin" />

        <div class="card shadow my-4">
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <div class="form-group d-flex justify-content-center align-items-center" style="margin: 30px 20px;">
                        <input v-model="formData.name" style="width: 300px; margin-right:20px; margin-top: 5px; float:left" class="form-control" type = "text" placeholder="Thêm danh mục" />
                       <a @click.prevent="createCategory" style="border-radius: 15px" class=" btn btn-success">Thêm danh mục</a>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6"></div>
            </div>
			<form>
				<div class="px-4 table-responsive table-cart-content">
					<table id="cate-table" class="table table-striped table-bordered">
						<thead>
							<tr>
								<td class="text-center"><strong>Id</strong></td>
								<td class="text-center"><strong>Tên danh mục</strong></td>
								<td class="text-center"><strong>Tổng số sản phẩm</strong></td>
								<td class="text-center"><strong>Xóa</strong></td>
							</tr>
						</thead>
                        <tbody> 
                            <tr v-for="category in categories" :key="category.id">
                                <td class="text-center">{{category.id}}</td>
                                <td class="text-left">
                                    <div class="input-group btn-block">
                                        <input class="form-control" type="text" v-model="category.name"/>
                                        <span class="input-group-btn">
                                            <button cate-id="1" type="button" @click.prevent="updateCategory(category)" data-toggle="tooltip" title class="btn btn-primary update-btn" data-original-title="Cập nhật">
                                                <i class="fa fa-arrow-circle-right"></i>
                                            </button>
                                        </span>
                                    </div>
                                </td>
                                <td class="text-center">
                                    <span>23</span>
								</td>
                                <td class="text-center">
                                    <button type="button" @click.prevent="deleteCategory(category.id)" data-toggle="tooltip" title class="btn btn-danger" data-original-title="Xóa">
                                        <i class="fa fa-times-circle"></i>
                                    </button>
                                </td>
                            </tr>
						</tbody>
					</table>
				</div>
			</form>
		</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            categories: [],
            formData: {
                name: ''
            }
        }
    },

    methods: {
        async loadCategory(){
            var resp = await this.$httpClient.get("/category/getAll", true)
            if(!resp.result){
                return this.showErrorMsg(resp.message)
            }
            this.categories = resp.data
        },


        async deleteCategory(id){
            this.$swal({
                title: 'Are you sure ?',
                text: "Delete category with id "+id,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    var resp = await this.$httpClient.delete("/category/delete", true, {id : id})
                    if(!resp.result){
                        return this.showErrorMsg(resp.message)
                    }
                    this.$swal({
                        title: 'Deleted',
                        text: "Your category was deleted !",
                        icon: 'success',
                    })
                    this.loadCategory();
                }
            })
        },

        async createCategory(){
            var resp = await this.$httpClient.post("/category/create", true, {}, this.formData)
            if(!resp.result){
                this.showErrorMsg(resp.message)
            }
            this.showSuccessMsg("Thêm mới thành công")
            this.loadCategory();
        },

        async updateCategory(item){
            this.$swal({
                title: 'Are you sure ?',
                text: "Update category with id "+item.id,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, update it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    var resp = await this.$httpClient.put("/category/update", true, {}, {id: item.id, name: item.name})
                    if(!resp.result){
                        return this.showErrorMsg(resp.message)
                    }
                    this.$swal({
                        title: 'Updated',
                        text: "Your category was updated !",
                        icon: 'success',
                    })
                    this.loadCategory();
                }
            })
        }
    },

    beforeMount(){
        this.loadCategory();
    }


}
</script>
<style lang="">
    
</style>