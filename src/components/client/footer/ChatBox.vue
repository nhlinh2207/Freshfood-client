<template lang="">
    <div class="chatbox" style="line-height: normal">
        <div class="chatbox__support" :class="[activeChatbox ? 'chatbox--active' : 'chatbox--close']">
            <div class="chatbox__header d-flex justify-content-between align-items-center">
				<div class="chatbox__content--header text-center">
					<h5 style="color: white">Freshfood Chat Box</h5>
				</div>
				<div>
                    <h4 style="font-weight: bold; color: white; cursor: pointer" @click="closeChatBox"><i style="font-size: 20px" class="fa fa-close"></i></h4>
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
                <img src="@/assets/images/logo/attachment.svg" alt="" />
                <input v-model="inputMessage" id="input-message" type="text" placeholder="Write a message..." />
                <p @click.prevent="sendMessage" id="send-message" style="margin: 0; cursor: pointer" class="chatbox__send--footer">Send</p>
            </div>
        </div>
        <div class="chatbox__button" @click.prevent="toggleChatbox">
            <img style="width: 50px; height: auto" src="@/assets/images/logo/icon-logo.png" />
        </div>
    </div>
</template>
<script>
import SockJS from 'sockjs-client';
import Stomp from 'webstomp-client';
import { getLocalStorage } from "@/plugins/helpers";

export default {
    data(){
        return{
           activeChatbox : false,
           chatRoomId: 1,
           inputMessage: '',
           socket: null,
           stompClient: null
        }
    },
    methods: {

        async toggleChatbox(){
            this.activeChatbox = !this.activeChatbox
            if(this.activeChatbox){
                var resp = await this.$httpClient.get("/chatroom/findByUser", true)
                if(!resp.result){
                   return this.showErrorMsg(resp.message)
                }
                this.chatRoomId = resp.data.id
                console.log("chatRoom id: "+this.chatRoomId)
                this.connect();
            }else{
                this.disconnect();
            }
        },
    
        closeChatBox(){
            this.activeChatbox = false;
            this.disconnect();
        },

        connect(){
            alert(process.env.VUE_APP_WEBSOCKET_URL);
            try{    
                this.socket = new SockJS(process.env.VUE_APP_WEBSOCKET_URL);
                this.stompClient = Stomp.over(this.socket)
                var currentEmail = JSON.parse(getLocalStorage(process.env.VUE_APP_USER)).email;
                this.stompClient.connect(
                    {'chatRoomId' : this.chatRoomId, 'email' : currentEmail },
                    frame => {
                        console.log("socket connect success "+frame);
                        this.stompClient.subscribe('/topic/' + this.chatRoomId + '.public.messages', this.publicMessages);
                        this.stompClient.subscribe('/user/queue/' + this.chatRoomId + '.old.messages', this.oldMessages); 
                        this.loadOldMessages();
                    },
                    error => {
                       console.log(error);
                       this.disconnect();
                    }
                );
            }catch(err){
                console.log("err socket: "+err)
            }
        },

        disconnect() {
            if (this.stompClient && this.stompClient.connected) {
               document.getElementById('chatbox-messages').innerHTML = '';
               this.stompClient.disconnect();
               console.log("socket disconnect")
            }
        },

        loadOldMessages(){
            this.stompClient.send("/chatroom/old.messages", {}, {});
        },
        
        publicMessages(message) {
           var instantMessage = JSON.parse(message.body);
           this.appendPublicMessage(instantMessage);
           this.scrollDownMessagesPanel();
        },

        scrollDownMessagesPanel() {
            const chatboxMessages = document.querySelector(".chatbox__messages");
            chatboxMessages.scrollTop = chatboxMessages.scrollHeight;
        },

        appendPublicMessage(instantMessage) {
            var chatContent = document.getElementById('chatbox-messages');
            const div = document.createElement('div');
            if (instantMessage.senderType == "ADMIN") {
                div.innerHTML =
                    '<div class="messages__item messages__item--visitor">' +
                       '<p style="margin: 0">'+instantMessage.content+'</p>' +
                       '<p style="margin: 5px 0 0 0; font-size: 12px; text-align: right">'+instantMessage.createTime+'</p>'+
                    '</div>';
            } else {
                div.innerHTML =
                    '<div class="messages__item messages__item--operator">' +
                       '<p style="margin: 0">'+instantMessage.content+'</p>' +
                       '<p style="margin: 5px 0 0 0; font-size: 12px; text-align: right">'+instantMessage.createTime+'</p>'+
                    '</div>';
            }
            chatContent.appendChild(div)
        },

        oldMessages(response){
            var instantMessages = JSON.parse(response.body);
            for(let  i = 0; i < instantMessages.length; i++){
                this.appendPublicMessage(instantMessages[i]);
            }
            this.scrollDownMessagesPanel();
        },

        sendMessage() {
            var inputBar = document.getElementById('input-message')

            if (this.inputMessage === '') {
                inputBar.focus();
                return;
            }

            const instantMessage = {
                'content' : this.inputMessage,
                'senderType' : 'USER'
            }
            this.stompClient.send("/chatroom/send.message", JSON.stringify(instantMessage), {});
            this.inputMessage = '';
            inputBar.focus();
        },
    }
}
</script>
<style lang="">
    
</style>