<template lang="">
    <div class="social-media">
        <div class="social-buttons text-sm-center text-md-left">
            <a v-for="(image, index) in imagesData" :key="index" rel="nofollow" href="javascript:void(0)" :title="'Chia sẻ lên '+image.name">
                <img :alt="'Chia sẻ lên'+image.name" :src="require('@/assets/images/'+image.imageUrl)"/>&nbsp;&nbsp;
            </a>
        </div>
    </div>
</template>
<script setup>
    const imagesData = [
        {
            naem: 'facebook',
            imageUrl: 'social/facebook.png'
        },
        {
            naem: 'twitter',
            imageUrl: 'social/twitter.png'
        },
        {
            naem: 'linkedin',
            imageUrl: 'social/linkedin.png'
        },
        {
            naem: 'pinterest',
            imageUrl: 'social/pinterest.png'
        },
        {
            name: 'gmail',
            imageUrl: 'social/gmail.png'
        },
        {
            name: 'skype',
            imageUrl: 'social/skype.png'
        },
        {
            name: 'zalo',
            imageUrl: 'social/zalo.png'
        }
    ]
</script>
<style scoped>
    .social-buttons {
        display: block;
        width: 100%;
    }
    .social-buttons a {
        display: inline-block;
        border-radius: 5px;
    }
</style>