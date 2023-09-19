<template lang="">
    <!-- NAVBAR CAROUSEL -->
   <carousel v-if="isBrandCarousel" v-bind="settings" :autoplay="timeoutData" :breakpoints="breakpoints" :wrap-around="wrapAround">
    <slide v-for="(brand, index) in htmlData" :key="index">
        <div class="brand-item">
            <a href="javascript:void(0)" class="img25">
                <img :src= "require('@/assets/images/'+brand.imageUrl)" :alt="'brand'+index" />
            </a>
        </div>
    </slide>
    <template #addons>
      <navigation v-if="hasNav" />
      <pagination v-if="hasDots" />
    </template>
  </carousel>   

  <!-- Big Banner Carousel -->
  <carousel v-if="isBigBannerCarousel" v-bind="settings" :autoplay="timeoutData" :breakpoints="breakpoints" :wrap-around="wrapAround">
    <slide v-for="(brand, index) in htmlData" :key="index">
      <div class="item">
        <a href="#" class="clearfix">
          <img :src= "require('@/assets/images/'+brand.imageUrl)" alt="owl-banner-1" />
        </a>
      </div>
    </slide>
    <template #addons>
      <navigation v-if="hasNav" />
      <pagination v-if="hasDots" />
    </template>
  </carousel>   

  <!-- Small Banner1  Carousel -->
  <carousel v-if="isSmallBannerCarousel1" v-bind="settings" :autoplay="timeoutData" :breakpoints="breakpoints" :wrap-around="wrapAround">
    <slide v-for="(brand, index) in htmlData" :key="index">
      <div class="item">
          <a href="javascript:void(0)" class="clearfix">
            <img :src= "require('@/assets/images/'+brand.imageUrl)" />
          </a>
      </div>
    </slide>
    <template #addons>
      <navigation v-if="hasNav" />
      <pagination v-if="hasDots" />
    </template>
  </carousel>  

  <!-- Small Banner2  Carousel -->
  <carousel v-if="isSmallBannerCarousel2" v-bind="settings" :autoplay="timeoutData" :breakpoints="breakpoints" :wrap-around="wrapAround">
    <slide v-for="(brand, index) in htmlData" :key="index">
      <div class="item">
          <a href="javascript:void(0)" class="clearfix">
            <img :src= "require('@/assets/images/'+brand.imageUrl)" />
          </a>
      </div>
    </slide>
    <template #addons>
      <navigation v-if="hasNav" />
      <pagination v-if="hasDots" />
    </template>
  </carousel>  
  
  <!-- Product Carousel -->
  <carousel v-if="isProductCarousel" v-bind="settings" :autoplay="timeoutData" :breakpoints="breakpoints" :wrap-around="wrapAround">
    <slide v-for="(product, index) in htmlData" :key="index">
      <div class="item">
        <div class="product-box">
          <div class="product-thumbnail flexbox-grid">
            <router-link :to="'/product/'+product.id" :title="product.name">
              <img :src= "product.mainImage" :alt="product.name" />
            </router-link>
            <div class="product-action d-none">
              <form class="form variants form-nut-grid margin-bottom-0">
                <div>
                  <router-link class="btn-buy btn-cart btn left-to add_to_cart" data-toggle="tooltip" title="Mua ngay" :to="'/product/'+product.id">
                    <i class="fas fa-shopping-bag"></i>
                  </router-link>
                  <router-link :to="'/product/'+product.id" data-toggle="tooltip" title="Xem" class="btn-gray btn_view btn right-to">
                    <i class="fas fa-eye"></i>
                  </router-link>
                </div>
              </form>
            </div>
          </div>
          <div class="product-info text-center">
            <h3 class="product-name">
              <router-link :to="'/product/'+product.id" :title="product.name">
                <span>{{product.name}}</span>
              </router-link>
            </h3>
            <div class="price-box">
              <div class="special-price">
                <span>{{convertCurrency(product.price)}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </slide>
    <template #addons>
      <navigation v-if="hasNav" />
      <pagination v-if="hasDots" />
    </template>
  </carousel>  

  <!-- News Carrousel -->
  <carousel v-if="isNewsCarousel" v-bind="settings" :autoplay="timeoutData" :breakpoints="breakpoints" :wrap-around="wrapAround">
    <slide v-for="(brand, index) in htmlData" :key="index">
      <article class="blog-item text-center">
        <div>
            <div class="blog-item-thumbnail">
                <router-link to="/news">
                    <img :src= "require('@/assets/images/'+brand.imageUrl)" :alt="brand.info" />
                </router-link>
            </div>
            <div class="blog-item-info m-4">
                <h3 class="blog-item-name">
                    <router-link to="/news">
                        <span>{{brand.info}}</span>
                    </router-link>
                </h3>
                <meta content="05/09/2018" />
                <p class="blog-item-summary">{{brand.summary}}&#8230;</p>
                <router-link class="btn" to="/news">Xem thêm</router-link>
            </div>
        </div>
      </article>
    </slide>
    <template #addons>
      <navigation v-if="hasNav" />
      <pagination v-if="hasDots" />
    </template>
  </carousel>  

  <!-- Feedback  Carousel -->
  <carousel v-if="isFeedbackCarousel" v-bind="settings" :autoplay="timeoutData" :breakpoints="breakpoints" :wrap-around="wrapAround">
    <slide v-for="(feedback, index) in htmlData" :key="index">
      <div class="testimonial-item text-center p-4 mb-5">
        <div class="image-avata">
            <img :src= "require('@/assets/images/'+feedback.imageUrl)" :alt="feedback.name">
        </div>
        <h4 class="name">{{feedback.name}}</h4>
        <div class="designation m-0">{{feedback.description}}</div>
      </div>
    </slide>
    <template #addons>
      <navigation v-if="hasNav" />
      <pagination v-if="hasDots" />
    </template>
  </carousel>  

</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

 export default {
    components: {
       Carousel,
       Slide,
       Pagination,
       Navigation,
    },
    mounted(){
       
    },

    props: {
        data_xss_items: Number,
        data_xs_items : Number,
        dataa_sm_items : Number,
        data_md_items : Number,
        data_lg_items : Number,
        data_xl_items : Number,
        timeout : Number,
        margin : Number,
        dot: Boolean,
        nav: Boolean,
        autoplay : Boolean,
        loop: Boolean,
        isBrandCarousel : Boolean,
        isBigBannerCarousel : Boolean,
        isSmallBannerCarousel1: Boolean,
        isProductCarousel: Boolean,
        isSmallBannerCarousel2: Boolean,
        isNewsCarousel: Boolean,
        isFeedbackCarousel: Boolean,
        htmlData : Array
    },
    
    data(){
        return{
            // Carousel properties
            marginData: (typeof this.margin !== typeof undefined) ? this.margin : 30,
            wrapAround: (typeof this.loop != typeof undefined) ? this.loop : false,
            timeoutData: (typeof this.timeout != typeof undefined) ? this.timeout : 0,
            hasDots :  (typeof this.dot != typeof undefined) ? this.dot : false,
            hasNav: (typeof this.nav != typeof undefined) ? this.nav : false,

            // carousel settings
            settings: {
              itemsToShow: 1,
              snapAlign: 'center',
            },

            breakpoints: {
               // 700px and up
                0: {
                  itemsToShow: (typeof this.data_xss_items != typeof undefined) ? this.data_xss_items : 1,
                  snapAlign: 'start',
                },
                543 : {
                    itemsToShow: (typeof this.data_xs_items != typeof undefined) ? this.data_xs_items : 1,
                    snapAlign: 'start',
                },
                768 : {
                    itemsToShow: (typeof this.data_sm_items != typeof undefined) ? this.data_sm_items : 3,
                    snapAlign: 'start',
                },
                992 : {
                    itemsToShow: (typeof this.data_md_items != typeof undefined) ? this.data_md_items : 3,
                    snapAlign: 'start',
                },
                1200: {
                    itemsToShow: (typeof this.data_lg_items != typeof undefined) ? this.data_lg_items : 4,
                    snapAlign: 'start',
                },
                1500: {
                    itemsToShow: (typeof this.data_xl_items != typeof undefined) ? Number(this.data_xl_items) : this.data_lg_items,
                    snapAlign: 'start',
                }
            }
        }
    }
}
 </script>
 <style scoped>
  .carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
 </style>