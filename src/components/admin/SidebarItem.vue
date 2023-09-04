<template lang="">
     <li class="nav-item active">
        <router-link class="nav-link" :to="url">
            <i :class="icon"></i>&nbsp;&nbsp;
            <span>{{title}}</span>
        </router-link>
    </li>
</template>
<script>
export default {
    props: {
        url: String,
        icon: String,
        title: String
    }
}
</script>
<style lang="">
    
</style>