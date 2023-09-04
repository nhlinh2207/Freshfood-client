<template lang="">
    <div class="container-fluid">
        <BreadCrumb breadcrumbType="categoryAdmin" />

        <div class="card shadow my-4">
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <div class="form-group d-flex justify-content-center align-items-center" style="margin: 30px 20px;">
                        <input style="width: 300px; margin-right:20px; margin-top: 5px; float:left" class="form-control" type = "text" placeholder="Thêm danh mục" />
                       <a style="border-radius: 15px" class=" btn btn-success">Thêm danh mục</a>
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
                            <tr>
                                <td class="text-center">1</td>
                                <td class="text-left">
                                    <div class="input-group btn-block">
                                        <input class="form-control" type="text" value="Thịt tươi"/>
                                        <span class="input-group-btn">
                                            <button cate-id="1" type="button" data-toggle="tooltip" title class="btn btn-primary update-btn" data-original-title="Cập nhật">
                                                <i class="fa fa-arrow-circle-right"></i>
                                            </button>
                                        </span>
                                    </div>
                                </td>
                                <td class="text-center">
                                    <span>23</span>
								</td>
                                <td class="text-center">
                                    <button type="button" onclick="deletecate('+json[i]['id']+')" data-toggle="tooltip" title class="btn btn-danger" data-original-title="Xóa">
                                        <i class="fa fa-times-circle"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">1</td>
                                <td class="text-left">
                                    <div class="input-group btn-block">
                                        <input class="form-control" type="text" value="Thịt tươi"/>
                                        <span class="input-group-btn">
                                            <button cate-id="1" type="button" data-toggle="tooltip" title class="btn btn-primary update-btn" data-original-title="Cập nhật">
                                                <i class="fa fa-arrow-circle-right"></i>
                                            </button>
                                        </span>
                                    </div>
                                </td>
                                <td class="text-center">
                                    <span>23</span>
								</td>
                                <td class="text-center">
                                    <button type="button" onclick="deletecate('+json[i]['id']+')" data-toggle="tooltip" title class="btn btn-danger" data-original-title="Xóa">
                                        <i class="fa fa-times-circle"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">1</td>
                                <td class="text-left">
                                    <div class="input-group btn-block">
                                        <input class="form-control" type="text" value="Thịt tươi"/>
                                        <span class="input-group-btn">
                                            <button cate-id="1" type="button" data-toggle="tooltip" title class="btn btn-primary update-btn" data-original-title="Cập nhật">
                                                <i class="fa fa-arrow-circle-right"></i>
                                            </button>
                                        </span>
                                    </div>
                                </td>
                                <td class="text-center">
                                    <span>23</span>
								</td>
                                <td class="text-center">
                                    <button type="button" onclick="deletecate('+json[i]['id']+')" data-toggle="tooltip" title class="btn btn-danger" data-original-title="Xóa">
                                        <i class="fa fa-times-circle"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">1</td>
                                <td class="text-left">
                                    <div class="input-group btn-block">
                                        <input class="form-control" type="text" value="Thịt tươi"/>
                                        <span class="input-group-btn">
                                            <button cate-id="1" type="button" data-toggle="tooltip" title class="btn btn-primary update-btn" data-original-title="Cập nhật">
                                                <i class="fa fa-arrow-circle-right"></i>
                                            </button>
                                        </span>
                                    </div>
                                </td>
                                <td class="text-center">
                                    <span>23</span>
								</td>
                                <td class="text-center">
                                    <button type="button" onclick="deletecate('+json[i]['id']+')" data-toggle="tooltip" title class="btn btn-danger" data-original-title="Xóa">
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
    
}
</script>
<style lang="">
    
</style>