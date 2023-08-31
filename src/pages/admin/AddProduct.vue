<template lang="">
    <div class="container-fluid">
        <BreadCrumb breadcrumbType="addProduct" />

        <div style="margin-left: 30px; margin-right:30px">
            <form th:action="@{/freshfood/admin/them-moi}" enctype="multipart/form-data" method="POST" th:object="${product}">
                <div class="form-group px-5">
                    <input th:field="*{id}" type="hidden" class="form-control"/>
                    <label class="my-2" for="name"><strong>Tên sản phẩm: </strong></label>
                    <input th:field="*{name}" type="text" id="name" class="form-control" placeholder="Tến sản phẩm"/>
                    <label class="my-2" for="description"><strong>Mô tả: </strong></label>
                    <input th:field="*{description}" type="text" id="description" class="form-control" placeholder="Mô tả"/>
                    <div class="row">
                        <div class="col-sm-4">
                            <label class="my-3" for="main-img"><strong>Ảnh chính: </strong></label>
                            <input class="mb-3" name="main-img" type="file" id="main-img" accept="image/png, image/jpeg"/>
                            <div style="padding: 5px; width: 100px; height: 100px; border: 1px solid grey">
                                <img id="thumbnail" width=100% />
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <label class="my-3" for="ex-img1"><strong>Ảnh phụ 1: </strong></label>
                            <input class="mb-3" name="ex-img" type="file" id="ex-img1" accept="image/png, image/jpeg"/>
                            <div style="padding: 5px; width: 100px; height: 100px; border: 1px solid grey">
                               <img id="thumbnail0" width=100% />
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <label class="my-3" for="ex-img2"><strong>Ảnh phụ 2: </strong></label>
                            <input class="mb-3" name="ex-img" type="file" id="ex-img2" accept="image/png, image/jpeg"/>
                            <div style="padding: 5px; width: 100px; height: 100px; border: 1px solid grey">
                                <img id="thumbnail1" width=100% />
                            </div>
                        </div>
                    </div>
                    <div class="my-3">
                        <label for="price"><strong>Giá sản phẩm: </strong></label>
                        <input th:field="*{price}" type="text" id="price" class="form-control" placeholder="Giá"/>
                    </div>
                    <div class="my-2">
                        <label class="my-3 mr-2" for="sl"><strong>Số lượng: </strong></label>
                        <input th:field="*{quantity}" type="number" value="1" min="1" max="100" id="sl"/>
                    </div>
                    <div class="my-2">
                        <label><strong>Danh mục: </strong></label>
                        <div class="ml-5">
                            <input type="radio"" name="category" value="1"/>
                            <span>Thịt tươi</span><br/>
                        </div>
                    </div>
                    <input th:if="${product.id == null}" class="mt-4 mb-4 btn btn-success" type="submit" value="Thêm mới"/>
                    <input th:if="${product.id != null}" class="mt-4 mb-4 btn btn-success" type="submit" value="Cập nhật"/>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import BreadCrumb from '@/components/client/BreadCrumb.vue';
export default {
    components: {
        BreadCrumb
    }
}
</script>
<style lang="">
    
</style>