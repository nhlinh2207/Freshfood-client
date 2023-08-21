<template lang="">
        <span class="language mobi-lang-curr">
            <a class="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)">
                <img src="@/assets/images/languages/vi-vn.png" title="Tiếng Việt" alt="Tiếng Việt"/>
                <span>&nbsp;&nbsp;Tiếng Việt</span>
            </a>
            <ul class="dropdown-menu">
                <li class="dropdown-item">
                    <a class="language-select" name="en" @click="changeLang">
                        <img src="@/assets/images/languages/en-gb.png" alt="Tiếng Anh" title="Tiếng Anh" />&nbsp;&nbsp;English
                    </a>
                </li>
                <li class="dropdown-item">
                    <a class="language-select" name="vn"  @click="changeLang">
                        <img src="@/assets/images/languages/vi-vn.png" alt="Tiếng Việt" title="Tiếng Việt" />&nbsp;&nbsp;Tiếng Việt
                    </a>
                </li>
            </ul>
        </span>
        <span class="currency mobi_lang_curr margin-left-20">
            <a class="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)">
                <strong>đ</strong><span> - VNĐ</span>
            </a>
            <ul class="dropdown-menu">
                <li class="dropdown-item">
                    <a class="currency-select" href="javascript:void(0)" name="EUR"> € - Euro </a>
                </li>
                <li class="dropdown-item">
                    <a class="currency-select" href="javascript:void(0)" name="GBP"> £- Pound Sterling </a>
                </li>
                <li class="dropdown-item">
                    <a class="currency-select" href="javascript:void(0)" name="USD"> $- USD </a>
                </li>
                <li class="dropdown-item">
                    <a class="currency-select" href="javascript:void(0)" name="VND"> đ- VNĐ </a>
                </li>
            </ul>
        </span>
</template>
<script>
export default {

    data(){
        return{

        }
    },

    methods: {
        changeLang(event){
            this.$i18n.locale = event.target.getAttribute("name")
        }
    }
}
</script>
<style lang="">
    
</style>