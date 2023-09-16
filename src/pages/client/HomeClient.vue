<template lang="">
    <div>
        <div class="container">
            <BreadCrumb breadcrumbType="home" />
        </div>

        <section class="awe-section-1" id="awe-section-1">
            <div class="section-category-slider mt-md-3">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-9 px-2 px-lg-3 mb-5 order-lg-2">
                           <ClientBigBannerCarousel />
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-3 col-left">
                            <AsideVerticleMenu :categories="categories"/>
                        </div>
                    </div>
                </div>
            </div> 
        </section>

        <!-- Small Banner 1 Carousel -->
        <div class="container-fluid">
            <div class="row">
                <div class="main w-100" id="content">
                    <section class="awe-section-2" id="service-gallery-1">
                        <div class="section-banner">
                            <div class="container">
                                <ClientSmallBannerCarousel1 />
                            </div>
                        </div>
                    </section>
                    
                    <!-- Product Carousel -->
                    <section class="awe-section-3 module-category category-custom" id="category-custom-2">
                       <div class="section section-collection section-collection-1">
                            <div class="container">
                                <div class="collection-border">
                                    <div class="collection-main">
                                       <div class="row">
                                            <div class="col-lg-12 col-sm-12">
                                                <div class="e-tabs not-dqtab ajax-tab-1" data-section="ajax-tab-1">
                                                    <div class="row row-noGutter">
                                                        <div class="col-sm-12">
                                                            <div class="content position-relative">
                                                                <div class="section-title">
                                                                    <h2>Cơm bình dân</h2>
                                                                </div>
                                                                <div>
                                                                    <ProductTab :categories="['Cơm bình dân', 'Bánh mỳ', 'Đồ uống']" /> 
                                                                    <!-- Product Carousel -->
                                                                    <div class="category-custom20 tab-content active" id="category_custom20">
                                                                        <div class="product product-view-grid owl-carousel" data-nav="true" data-xl-items="4" data-lg-items="4" data-md-items="4" data-sm-items="3" data-xs-items="2" data-xss-items="2">
                                                                            <ProductCarousel />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                       </div>
                                    </div>
                                </div>
                            </div>
                       </div>
                    </section>
                    <!-- Product Carousel -->
                    <section class="awe-section-3 module-category category-custom" id="category-custom-3">
                       <div class="section section-collection section-collection-1">
                            <div class="container">
                                <div class="collection-border">
                                    <div class="collection-main">
                                       <div class="row">
                                            <div class="col-lg-12 col-sm-12">
                                                <div class="e-tabs not-dqtab ajax-tab-1" data-section="ajax-tab-1">
                                                    <div class="row row-noGutter">
                                                        <div class="col-sm-12">
                                                            <div class="content position-relative">
                                                                <div class="section-title">
                                                                    <h2>Hoa quả tươi</h2>
                                                                </div>
                                                                <div>
                                                                    <ProductTab :categories="['Hoa quả tươi', 'Đồ ăn nhẹ', 'Sinh tố']" /> 
                                                                    <!-- Product Carousel -->
                                                                    <div class="category-custom20 tab-content active" id="category_custom20">
                                                                        <div class="product product-view-grid owl-carousel" data-nav="true" data-xl-items="4" data-lg-items="4" data-md-items="4" data-sm-items="3" data-xs-items="2" data-xss-items="2">
                                                                            <ProductCarousel />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                       </div>
                                    </div>
                                </div>
                            </div>
                       </div>
                    </section>

                    <!-- Small benner 2 Carrousel -->
                    <section class="awe-section-2" id="service-gallery-2">
                        <div class="section-banner">
                            <div class="container">
                               <ClientSmallBannerCarousel2 /> 
                            </div>
                        </div>
                   </section>

                   <!-- News Carrousel -->
                   <section class="awe-section-10 news-module news-custom" id="news-custom-0">
                        <div class="section section-blog">
                            <div class="container">
                               <div class="section-title text-center">
                                    <h2>
                                        <a href="javascript:void(0)">Tin tức</a>
                                    </h2>
                                </div>
                                <div class="section-content">
                                    <NewsCarrousel />
                                </div>
                           </div>
                        </div>
                    </section>

                    <!-- Feedback Carrousel -->
                    <section class="awe-section-11 feedback" id="feedback-0">
                        <div class="section section_testimonial">
                            <div class="container">
                                <div class="section-title text-center">
                                    <h2>
                                        <a href="javascript:void(0)">Phản hồi của khách hàng</a>
                                    </h2>
                                    <p>Phản hồi của những khách hàng đã và đang sử dụng sản phẩm trong suốt những năm qua</p>
                                </div>
                                <div class="section-content">
                                    <FeedbackCarousel />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BreadCrumb from '@/components/client/BreadCrumb.vue';
import AsideVerticleMenu from '@/components/client/AsideVerticleMenu.vue';
import ClientBigBannerCarousel from '@/components/carousel/ClientBigBannerCarousel.vue';
import ClientSmallBannerCarousel1 from '@/components/carousel/ClientSmallBannerCarousel1.vue';
import ClientSmallBannerCarousel2 from '@/components/carousel/ClientSmallBannerCarousel2.vue';
import ProductCarousel from '@/components/carousel/ProductCarousel.vue';
import NewsCarrousel from '@/components/carousel/NewsCarrousel.vue';
import FeedbackCarousel from '@/components/carousel/FeedbackCarousel.vue';
import ProductTab from '@/components/client/ProductTab.vue';
export default {
    components : {
        BreadCrumb,
        ClientBigBannerCarousel,
        AsideVerticleMenu,
        ClientSmallBannerCarousel1,
        ClientSmallBannerCarousel2,
        ProductCarousel,
        NewsCarrousel,
        ProductTab,
        FeedbackCarousel
    },

    data(){
        return{
            tabIndex : 0,
            categories: []
        }
    },

    methods:{
        async loadCategory(){
            var resp = await this.$httpClient.get("/category/getAll", false)
            if(!resp.result){
                return this.showErrorMsg(resp.message)
            }
            this.categories = resp.data
        },
    },

    mounted() {
        this.emitter.on('product-tab-change', (data) => {
           this.tabIndex = data.tabIndex;
           alert(this.tabIndex)
        });
    },

    beforeMount(){
        this.loadCategory();
    },

    beforeUnmount() {
        this.emitter.off('product-tab-change')
    },
}
</script>
<style scoped>
    
</style>