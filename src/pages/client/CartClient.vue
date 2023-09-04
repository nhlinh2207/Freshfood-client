<template lang="">
    <div class="container">
        <BreadCrumb breadcrumbType="cart" />
    </div>
    <section>
        <section class="page mb-4">   
            <div class="container">
                <div class="row">
                    <div class="clearfix"></div>
                    <div class="col-sm-12">
                        <div class="d-flex align-items-center justify-content-between">
                            <h3 class="mt-3 mb-4">Giỏ hàng</h3>
                            <button class="btn btn-primary" data-toggle="tooltip" title data-original-title="Refesh" onclick="loadcartitems()">Refresh</button>
                        </div>
                        <form class="mt-4">
                            <div class="table-responsive table-cart-content">
                                <table id="cartitem-table" class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <td class="text-center"><strong>Ảnh</strong></td>
                                            <td class="text-center"><strong>Sản phẩm</strong></td>
                                            <td class="text-center"><strong>Đơn giá</strong></td>
                                            <td class="text-center"><strong>Số lượng</strong></td>
                                            <td class="text-center"><strong>Tổng</strong></td>
                                            <td class="text-center"><strong>Xóa</strong></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr cartitem-id="1">
                                            <td class="text-center">
                                                <img src="" title="Thịt tươi" alt="Thịt tươi" />
                                            </td>
                                            <td class="text-center">
                                                <a href="javascript:void(0)">Thịt tươi</a>
                                            </td>
                                            <td class="text-center">20,000đ</td>
                                            <td class="text-left">
                                                <div class="input-group btn-block">
                                                    <input class="form-control" type="text" value="2" size="1" />
                                                    <span class="input-group-btn">
                                                        <button cartitem-id="1" type="button" data-toggle="tooltip" title class="btn btn-primary update-btn" data-original-title="Cập nhật">
                                                            <i class="fa fa-arrow-circle-right"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </td>
                                            <td class="text-center">
                                                20,000đ
                                            </td>
                                            <td class="text-center">
                                                <button type="button" data-toggle="tooltip" title class="btn btn-danger" data-original-title="Xóa">
                                                    <i class="fa fa-times-circle"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>          
                        </form>
                        <div class="row mt-4">
                            <div class="col-sm-12 col-lg-4 order-lg-2">
                                <table id="finalpricetable" class="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <td>Thành tiền</td>
                                            <td><strong>20,000đ</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Phí vận chuyển</td>
                                            <td><strong>0</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Tổng cộng</td>
                                            <td><strong>20,000đ</strong></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-sm-12 col-lg-8"></div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-sm-6 text-left">
                                <router-link to="/product">
                                    <h4>
                                        Tiếp tục mua hàng
                                    </h4>
                                </router-link>
                            </div>
                            <div class="col-sm-6 text-right">
                                <router-link to="/checkout" class="btn btn-primary">
                                    Tiếp tục
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
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