<template lang="">
     <div class="form-group required row">
        <label class="col-sm-12 col-md-2 control-label text-lg-right" :for="'input-'+field">{{placeHolder}}</label>
        <div class="col-sm-12 col-md-10">
            <select name="cityId" :id="'input-'+field" class="form-control">
                <option value="0"> --- Chọn --- </option>
                <option value="1">Hà Nội</option>
                <option value="2">Tp. Hồ Chí Minh</option>
                <option value="3">Đà Nẵng</option>
            </select>
            <!-- <div class="text-danger" th:if="${#fields.hasErrors('cityId')}" th:errors="*{cityId}"></div> -->
        </div>
    </div>
</template>
<script>
export default {
    props: [
        'type',
        'field',
        'placeHolder'
    ]
}
</script>
<style lang="">
    
</style>