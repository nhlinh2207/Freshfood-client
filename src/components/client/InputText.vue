<template lang="">
    <div class="form-group required row">
        <label :class="'col-sm-12 col-md-'+(12-col)+' control-label text-lg-left text-md-right '+(error ? 'text-danger' : '')" :for="'input-'+field">{{placeHolder}}:</label>
        <div :class="'col-sm-12 col-md-'+col">
            <input :value="modelValue" @input="onInput" :type="type" :name="field" :placeholder="placeHolder" :id="'input-'+field" class="form-control" />
            <div class="text-danger" v-show="error">{{errMsg}}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        type: String,
        field: String,
        placeHolder: String, 
        modelValue: String,
        error: Boolean,
        errMsg: String,
        col: Number,
    },
    
    emits: ["update:modelValue"],

    methods:{
        onInput(e){
            this.$emit("update:modelValue", e.target.value)
        }
    }
}
</script>
<style lang="">
    
</style>