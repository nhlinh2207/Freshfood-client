<template lang="">
    <BreadCrumb breadcrumbType="register" />
    <section class="page mb-4">
        <div class="container">
            <div class="row">
                <div class="clearfix"></div>
                <div id="content" class="col-sm-12 col-xs-12 col-md-12">
                    <h1>Đăng ký tài khoản</h1>
                    <p>Nếu bạn đã đăng ký tài khoản với chúng tôi, vui lòng <strong><router-link to="/login">đăng nhập</router-link></strong>.</p>
                    <form id="registry-form" enctype="multipart/form-data" class="form-horizontal">
                        <!-- Account -->
                        <fieldset id="account" class="mt-4">
                            <legend>Chi tiết tài khoản</legend>
                            <InputText type="text" field="firstName" placeHolder="Họ và tên đệm" />
                            <InputText type="text" field="lastName" placeHolder="Tên" />
                            <InputText type="email" field="email" placeHolder="Email" />
                            <InputText type="tel" field="phone" placeHolder="Số điện thoại" />
                        </fieldset>
                        <!-- Address -->
                        <fieldset id="address" class="mt-4">
                            <legend>Địa chỉ</legend>
                            <InputText type="text" field="company" placeHolder="Công ty" />
                            <InputDropdown field="country" placeHolder="Quốc gia" />
                            <InputDropdown field="city" placeHolder="Tỉnh / TP" />
                            <InputText type="text" field="address" placeHolder="Địa chỉ chi tiết" />
                        </fieldset>
                        <fieldset  class="mt-4">
                            <legend>Mật khẩu</legend>
                            <InputText type="password" field="password" placeHolder="Mật khẩu" />
                            <InputText type="password" field="password" placeHolder="Nhập lại mật khẩu" />
                        </fieldset>
                        <fieldset class="mb-3">
                            <legend>Đăng ký nhận tin</legend>
                            <div class="form-group row">
                            <label class="col-sm-12 col-md-2 text-lg-right control-label">Đăng ký nhận tin</label>
                                <div class="col-sm-12 col-md-10">
                                    <label class="radio-inline">
                                        <input type="radio" name="newsletter" value="1" />
                                        Có
                                    </label>
                                    <label class="radio-inline">
                                        <input type="radio" name="newsletter" value="0" checked="checked" />
                                        Không
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                        <div class="button mt-4">
                            <div class="float-right">
                                Tôi đã đọc và đồng ý với <a href="javascript:void(0)" class="agree"><b>Chính sách bảo mật</b></a> &nbsp;
                                <input type="checkbox" name="agree" value="1" /> &nbsp;
                                <input type="button" onclick="submitRegistry()" value="Đăng ký" class="btn btn-primary" />
                                <!-- <input type="button" id="getTokenButton" value="Get token" class="btn btn-primary" /> -->
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import BreadCrumb from '@/components/client/BreadCrumb.vue';
import InputText from '@/components/client/InputText.vue';
import InputDropdown from '@/components/client/InputDropdown.vue'

</script>
<style lang="">
    
</style>