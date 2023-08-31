<template lang="">
    <div class="container">
        <BreadCrumb breadcrumbType="login" />
    </div>
    <section>
        <section class="page">
            <div class="container">
                <div class="row">
                    <div class="clearfix"></div>
                    <div class="col-sm-12 col-md-6">
                        <div class="well">
                            <h2>Khách hàng mới</h2>
                            <p><strong>Đăng kí</strong></p>
                            <p>
                               Bằng việc tạo tài khoản bạn có thể mua sắm nhanh hơn,
                               theo dõi trạng thái đơn hàng và theo doxp đơn hàng bạn đã đặt
                            </p>
                            <router-link class="btn btn-primary" to="/register">Tiếp tục</router-link>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <div class="well">
                            <h2>Khách hàng cũ</h2>
                            <p><strong>Tôi là khách hàng cũ</strong></p>
                            <form action="/signin" method="POST">
                                <!-- <div th:if="${param.error}" class="alert alert-danger">
                                    Email hoặc password không đúng
                                </div> -->
                                <div class="form-group">
                                    <label class="control-label" for="input-email">
                                        Địa chỉ email
                                    </label>
                                    <input type="text" name="email" id="input-email" placeholder="Địa chỉ email" class="form-control"/>
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="input-password">
                                        Mật khẩu
                                    </label>
                                    <input type="password" name="password" id="input-password" placeholder="Mật khẩu" class="form-control"/>
                                    <router-link to="/forgetPassword">Quên mật khẩu</router-link>
                                </div>
                                <div class="method">
                                    <div class="method-control mb-3">
                                       <input type="submit" class="btn btn-primary" value="Đăng nhập"/>
                                    </div>
                                </div>
                            </form>
                            <div class="method-control mb-3">
                                <a style="text-align: center; padding: 10px 15px; border:1px solid grey; border-radius: 10px; display: inline-block" th:href="@{/oauth2/authorization/google}" class="method-action">
                                     <i class="ion ion-logo-google"></i>
                                     <span>Đăng nhập bằng Google</span>
                                 </a>
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