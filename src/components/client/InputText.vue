<template lang="">
    <div class="form-group required row">
        <label class="col-md-2 control-label text-lg-right" :for="'input-'+field">{{placeHolder}}:</label>
        <div class="col-sm-12 col-md-10">
            <input :type="type" :name="field" :placeholder="placeHolder" :id="'input-'+field" class="form-control" />
            <!-- <div class="text-danger" th:if="${#fields.hasErrors('firstName')}" th:errors="*{firstName}"></div> -->
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