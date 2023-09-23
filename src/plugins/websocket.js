import SockJS from 'sockjs-client';
import Stomp from 'webstomp-client';

var socket = null
var stompClient = null

export function connect(chatRoomId){
    socket = new SockJS("http://localhost:8080/ws");
    stompClient = Stomp.over(socket)
    stompClient.connect(
        {'chatRoomId' : chatRoomId},
        frame => {
           console.log("thanhf coong "+frame);
        //   this.stompClient.subscribe("/topic/greetings", tick => {
        //     console.log(tick);
        //     this.received_messages.push(JSON.parse(tick.body).content);
        //   });
        },
        error => {
           console.log(error);
        }
      );
}

export function disconnect() {
    if (stompClient && stompClient.connected) {
      stompClient.disconnect();
      console.log("socket disconnect")
    }
}

// function  stompSuccess(chatRoomId){
//     stompClient.subscribe('/topic/' + chatRoomId + '.public.messages', publicMessages);
//     stompClient.subscribe('/user/queue/' + chatRoomId + '.old.messages', oldMessages);
//     loadOldMessages();
// }

// function stompFailure(){
//     alert("Failed")
// }