<template lang="">
    <div class="chatbox" style="line-height: normal">
        <div class="chatbox__support chatbox--close">
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
        <div class="chatbox__button">
            <img style="width: 50px; height: auto" src="@/assets/images/logo/icon-logo.png" />
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>