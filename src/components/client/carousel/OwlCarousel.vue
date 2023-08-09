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
        htmlData : Array
    },
    
    data(){
        return{
            // Carousel properties
            marginData: (typeof this.margin !== typeof undefined) ? Number(this.margin) : 30,
            wrapAround: (typeof this.loop != typeof undefined) ? Boolean(this.loop) : false,
            timeoutData: (typeof this.timeout != typeof undefined) ? Number(this.timeout) : 5000,
            hasDots :  (typeof this.dot != typeof undefined) ? Boolean(this.dot) : false,
            hasNav: (typeof this.nav != typeof undefined) ? Boolean(this.nav) : false,

            // carousel settings
            settings: {
              itemsToShow: 1,
              snapAlign: 'center',
            },

            breakpoints: {
               // 700px and up
                0: {
                  itemsToShow: (typeof this.data_xss_items != typeof undefined) ? Number(this.data_xss_items) : 1,
                  snapAlign: 'start',
                },
                543 : {
                    itemsToShow: (typeof this.data_xs_items != typeof undefined) ? Number(this.data_xs_items) : 1,
                    snapAlign: 'start',
                },
                768 : {
                    itemsToShow: (typeof this.data_sm_items != typeof undefined) ? Number(this.data_sm_items) : 3,
                    snapAlign: 'start',
                },
                992 : {
                    itemsToShow: (typeof this.data_md_items != typeof undefined) ? Number(this.data_md_items) : 3,
                    snapAlign: 'start',
                },
                1200: {
                    itemsToShow: (typeof this.data_lg_items != typeof undefined) ? Number(this.data_lg_items) : 4,
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