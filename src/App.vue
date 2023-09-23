<template>
   <router-view></router-view>
</template>

<script>
import { messaging } from '@/plugins/firebase';
import { onMessage } from "firebase/messaging"
export default {
  name: 'App',
  mounted(){
    onMessage(messaging, (payload) => {
      this.showInfoMsg(payload.notification)
    })
  }
}

</script>

<style>

</style>
