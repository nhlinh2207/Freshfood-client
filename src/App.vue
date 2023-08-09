<template>
  <HeaderClient />
  <FooterClient/>
</template>

<script>
import HeaderClient from '@/components/client/header/HeaderClient.vue'
import FooterClient from '@/components/client/footer/FooterClient.vue';
export default {
  name: 'App',
  components: {
    HeaderClient,
    FooterClient
  }
}
</script>

<style>

</style>
