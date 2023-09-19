<template lang="">
     <div class="form-group required row">
        <label :class="'col-sm-12 col-md-'+(12-col)+' control-label text-lg-left text-md-right '+(error ? 'text-danger': '')" :for="'input-'+field">{{placeHolder}}:</label>
        <div :class="'col-sm-12 col-md-'+col">
            <select :name="field" :id="'input-'+field" class="form-control" @change="selectOption">
                <option value=''> --- Chọn --- </option>
                <option v-for="item in data" :key="item.id" :value='item.id'>{{item.name}}</option>
            </select>
            <div class="text-danger" v-show="error">{{errMsg}}</div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
    props: {
        type : String,
        field : String,
        placeHolder : String,
        modelValue : String,
        error: Boolean,
        errMsg: String,
        col: Number,
        data: Array
    },

    emits: ["update:modelValue"],

    methods: {
        selectOption(e) {
            this.$emit('update:modelValue', e.target.value)
            this.$emit('value-change', e.target.value) 
        }
    }
}
</script>
<style lang="">
    
</style>