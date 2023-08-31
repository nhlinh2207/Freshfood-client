<template lang="">
    <div class="container">
        <BreadCrumb breadcrumbType="product" />
    </div>
    <section>
        <section class="page">
            <div class="container">
                <div class="row">
                    <div class="clearfix"></div>
                    <!-- <div th:if="${productList.size() == 0}" class=" text-center col-sm-12 col-md-12 col-lg-9 order-lg-2">
                        <h3>Không có sản phẩm cần tìm !</h3>
                    </div> -->
                    <div th:if="${productList.size() > 0}" class="col-sm-12 col-md-12 col-lg-9 order-lg-2">
                        <div class="category-products products">
                            <div class="sortPagiBar">
                                <div class="row">
                                    <div class="col-sm-12 col-md-12 text-sm-right">
                                        <div class="bg-white clearfix">
                                            <div id="sort-by">
                                                <label class="d-none d-md-block">Sắp xếp theo: </label>
                                                <div>
                                                    <span class="dropdown-toggle" data-toggle="dropdown">Mặc định
                                                        <i class="fa fa-angle-down" aria-hidden="true"></i>    
                                                    </span> 
                                                    <ul class="dropdown-menu">
                                                        <li class="dropdown-item">
                                                            <a th:href="@{/freshfood/san-pham?sort=creTime&sortdir=asc}">Mặc định</a>
                                                        </li>
                                                        <li class="dropdown-item">
                                                            <a th:href="@{'/freshfood/san-pham?sort=name&sortdir=asc'+${search != null ? '&search='+search : ''}}">Tên (A-Z)</a>
                                                        </li>
                                                        <li class="dropdown-item">
                                                            <a th:href="@{'/freshfood/san-pham?sort=name&sortdir=desc'+${search != null ? '&search='+search : ''}}">Tên (Z-A)</a>
                                                        </li>
                                                        <li class="dropdown-item">
                                                            <a th:href="@{'/freshfood/san-pham?sort=price&sortdir=asc'+${search != null ? '&search='+search : ''}}">Giá (Thấp-Cao)</a>
                                                        </li>
                                                        <li class="dropdown-item">
                                                             <a th:href="@{'/freshfood/san-pham?sort=price&sortdir=desc'+${search != null ? '&search='+search : ''}}">Giá (Cao-Thấp)</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="view-mode float-left">
                                                <a href="javascript:void(0)" id="grid-view" data-toggle="tooltip" title="Lưới">
                                                    <label class="text-sm-left">
                                                        <b @click="activeGridMode" class="btn button-view-mode view-mode-grid" :class="{active : showingMode === 1}">
                                                            <i class="fa fa-th" aria-hidden="true"></i>
                                                        </b>
                                                    </label>
                                                </a>
                                                <a href="javascript:void(0)" id="list-view" data-toggle="tooltip" title="Danh sách">
                                                    <label class="text-sm-left">
                                                        <b  @click="activeListMode" class="btn button-view-mode view-mode-list" :class="{active : showingMode === 0}">
                                                            <i class="fa fa-th-list" aria-hidden="true"></i>
                                                        </b>
                                                    </label>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <section class="product-view product-view-list">
                                <!-- Grid Product Mode -->
                                <GridProductMode v-show="showingMode === 1" />
                                <!-- List Product Mode -->
                                <ListProductMode v-show="showingMode === 0"/>
                                <!-- Pagination -->
                                <div class="text-center">
                                    <ul class="pagination justify-content-center">
                                        <li class="page-item page-move"><a class="page-link">|&lt;</a></li>
                                        <li class="page-item page-move"><a class="page-link">&lt;</a></li>
                                        <li class="page-item active"><a class="page-link">1</a></li>
                                        <li class="page-item page-move"><a class="page-link">&gt;</a></li>
                                        <li class="page-item page-move"><a class="page-link">&gt;|</a></li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                    <!-- Aside Verticle Menu -->
                    <div class="col-sm-12 col-md-12 col-lg-3">
                        <AsideVerticleMenu />
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>
<script setup>
import BreadCrumb from '@/components/client/BreadCrumb.vue';
import ListProductMode from '@/components/client/ListProductMode.vue';
import GridProductMode from '@/components/client/GridProductMode.vue'
import AsideVerticleMenu from '@/components/client/AsideVerticleMenu.vue';
import { ref } from 'vue';

const showingMode = ref(1);

const activeGridMode = () => {
    showingMode.value = 1
}

const activeListMode = () => {
    showingMode.value = 0
}


</script>
<style scoped>
    .page-item{
        cursor: pointer;
    }
</style>