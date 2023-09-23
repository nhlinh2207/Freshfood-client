<template lang="">
    <div class="chatbox" style="line-height: normal">
        <div class="chatbox__support" :class="[activeChatbox ? 'chatbox--active' : 'chatbox--close']">
            <div class="chatbox__header">
                <div class="chatbox__content--header text-center">
                    <h4 style="color: white">Freshfood Chat Box</h4>
                </div>
            </div>
            <div class="chatbox__messages">
                <div>
                    <div id="chatbox-messages">
                        <!-- Chat messages content -->
                    </div>
                </div>
            </div>
            <div class="chatbox__footer">
                <img src="@/assets/images/logo/emojis.svg" alt="" />
                <img src="@/assets/images/logo/microphone.svg" alt="" />
                <input id="input-message" type="text" placeholder="Write a message..." />
                <p id="send-message" style="margin: 0; cursor: pointer" class="chatbox__send--footer">Send</p>
                <img src="@/assets/images/logo/attachment.svg" alt="" />
            </div>
        </div>
        <div class="chatbox__button" @click.prevent="toggleChatbox">
            <img style="width: 50px; height: auto" src="@/assets/images/logo/icon-logo.png" />
        </div>
    </div>
</template>
<script>
import {connect, disconnect} from '@/plugins/websocket'

export default {
    data(){
        return{
           activeChatbox : false
        }
    },
    methods: {
        toggleChatbox(){
           this.activeChatbox = !this.activeChatbox
           if(this.activeChatbox){
              try{    
                connect(1);
                console.log("socket : thanhf coong")
                // stompClient.subscribe('/topic/' + chatRoomId + '.public.messages', publicMessages);
                // stompClient.subscribe('/user/queue/' + chatRoomId + '.old.messages', oldMessages);
              }catch(err){
                console.log("err socket: "+err)
              }
           }else{
              disconnect();
           }
        },
        

    }

}
</script>
<style lang="">
    
</style>