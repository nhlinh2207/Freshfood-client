<template lang="">
    <li class="language desk-lan-curr">
        <a class="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)">
            <img :src="require('@/assets/images/'+languageImgUrl)" :alt="languageTitle" :title="languageTitle" />
            <span>&nbsp;&nbsp;{{languageTitle}}</span>
        </a>
        <ul class="dropdown-menu">
            <li class="dropdown-item">
                <a class="language-select"  name="vn" @click="changeLang">
                    <img src="@/assets/images/languages/vi-vn.png" alt="Tiếng Việt" title="Tiếng Việt" />&nbsp;&nbsp;Tiếng Việt
                </a>
            </li>
            <li class="dropdown-item">
                <a class="language-select" name="en" @click="changeLang">
                   <img src="@/assets/images/languages/en-gb.png" alt="TIếng anh" title="TIếng anh" />&nbsp;&nbsp;English
                </a>
            </li>
        </ul>
    </li>
    <li class="currency desk-lan-curr">
        <a class="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)">
            <strong>đ</strong>
            <span> - VNĐ</span>
        </a>
        <ul class="dropdown-menu">
            <li class="dropdown-item">
                <a class="currency-select" href="javascript:void(0)" name="EUR"> € - Euro </a>
            </li>
            <li class="dropdown-item">
                <a class="currency-select" href="javascript:void(0)" name="GBP"> £ - Pound Sterling </a>
            </li>
            <li class="dropdown-item">
                <a class="currency-select" href="javascript:void(0)" name="USD"> $ - USD </a>
            </li>
            <li class="dropdown-item">
                <a class="currency-select" href="javascript:void(0)" name="VND"> đ - VNĐ </a>
            </li>
        </ul>
    </li>
</template>
<script>
export default {

   data(){
      return{
        languageImgUrl: 'languages/vi-vn.png',
        languageTitle: 'Tiếng Việt'
      }
   },

   methods: {
    changeLang(event){
        const lang =  event.target.getAttribute("name")
        if(lang === 'vn'){
            this.languageImgUrl = 'languages/vi-vn.png';
            this.languageTitle = 'Tiếng Việt'
        }else{
            this.languageImgUrl = 'languages/en-gb.png';
            this.languageTitle = 'English'
        }
        this.$i18n.locale = lang
    }
   }
}
</script>
<style scoped></style>