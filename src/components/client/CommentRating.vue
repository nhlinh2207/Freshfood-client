<template lang="">
    <div class="row">
        <div class="col-sm-12 margin-bottom-20 margin-top-15">
            <div class="product-tab e-tab">
                <ul class="tabs tabs-title clearfix">
                    <li class="tab-link  has-content" :class="{active : isCommentTab}" @click="activeCommentTab">
                        <h5>
                            <span style="color: #fff">Bình luận</span>
                        </h5>
                    </li>
                    <li class="tab-link has-content" :class="{active : isRatingTab}" @click="activeRatingTab">
                        <h5>
                            <span style="color: #fff">Đánh giá</span>
                        </h5>
                    </li>
                </ul>
                <div class="tab-comment" v-show="isCommentTab" id="tab-comment">
                    <div class="rte">Comment tab</div>
                </div>
                <div class="tab-review" v-show="isRatingTab" id="tab-review">
                    <div id="linh-product-reviews" class="linh-product-reviews" data-id="11480172">
                        <div>
                            <div id="linh-product-reviews-sub">
                                <div id="linh-product-reviews-summary" class="linh-product-reviews-summary mb-4">
                                    <div>
                                        <div class="bpr-summary" id="linh-rating-info">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form class="form-horizontal" id="form-rating">
                                <h2>Viết đánh giá</h2>
                                <fieldset class="form-group required">
                                    <div class="">
                                        <label class="control-label" for="input-name">Họ tên</label>
                                        <input type="text" name="ratingName" v-model="ratingForm.rankCustomerName" id="input-name" class="form-control">
                                    </div>
                                </fieldset>
                                <fieldset class="form-group required">
                                    <div class="">
                                        <label class="control-label" for="input-review">Nội dung đánh giá</label>
                                        <textarea v-model="ratingForm.rankContent" name="ratingContent" rows="5" id="input-review" class="form-control"></textarea>
                                        <div class="help-block"><span class="text-danger">Chú ý:</span> Không sử dụng các định dạng HTML!</div>
                                    </div>
                                </fieldset>
                                <fieldset class="form-group required">
                                    <div class="rating_review mt-4">
                                        <label class="control-label"><strong>Xếp hạng</strong></label>
                                        &nbsp;&nbsp;&nbsp; Chưa tốt&nbsp;
                                        <input type="radio" name="ratingValue" value="1" :checked="ratingForm.ratingValue === 1" @change="updateRatingValue(1)">&nbsp;
                                        <input type="radio" name="ratingValue" value="2" :checked="ratingForm.ratingValue === 2" @change="updateRatingValue(2)">&nbsp;
                                        <input type="radio" name="ratingValue" value="3" :checked="ratingForm.ratingValue === 3" @change="updateRatingValue(3)">&nbsp;
                                        <input type="radio" name="ratingValue" value="4" :checked="ratingForm.ratingValue === 4" @change="updateRatingValue(4)">&nbsp;
                                        <input type="radio" name="ratingValue" value="5" :checked="ratingForm.ratingValue === 5" @change="updateRatingValue(5)">&nbsp;
                                        Tốt
                                    </div>
                                    <div class="buttons clearfix">
                                        <div class="pull-right">
                                            <button type="button" @click.prevent="sendRating" id="button-rating" class="btn btn-primary mt-4">Gửi đánh giá</button>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script >
export default{

    props: {
        productId: String
    },

    data(){
        return {
            isCommentTab : false,
            isRatingTab : true,
            ratingForm:{
                rankNumber: 0,
                rankContent: '',
                rankCustomerName: ''
            }
        }
    },

    methods: {
        activeCommentTab(){
            this.isCommentTab = true;
            this.isRatingTab = false;
        },

        activeRatingTab(){
            this.isCommentTab = false;
            this.isRatingTab = true;
        },
        sendRating(){
            this.$swal({
               title: 'Xác nhận?',
               text: "Bạn muốn gửi đánh giá ?",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Yes'
            }).then(async (result) => {
                if (result.isConfirmed) {
                   var resp = await this.$httpClient.post("/rating/create", true, {}, {...this.ratingForm, productId: this.productId})
                   if(!resp.result){
                        return this.$swal({
                           title: 'Gửi đánh giá không thành công',                       
                           text: resp.message,
                           icon: 'error',
                        })
                    }
                    this.$swal({
                        title: 'Gửi đánh giá thành công',                       
                        text: resp.message,
                        icon: 'success',
                    })
                    this.getSummaryRating()  
                }
            })
        },

        async getSummaryRating(){
            document.getElementById('linh-rating-info').innerHTML = ''
            var resp = await this.$httpClient.get("/rating/getAverageValue", true, {productId: this.productId})
            if(!resp.result){
                return this.showErrorMsg(resp.message)
            }
            var averageRatingValue = resp.data
            var html = '';
            if (averageRatingValue > 0){
                for(let i = 1;i <= averageRatingValue; i++){
                    html += '<i class="fas fa-star" style="color : #F7DC26"></i>&nbsp;'
                }
            }
            if (averageRatingValue < 5){
                for (let i = averageRatingValue+1; i <= 5; i++){
                    html += '<i class="fas fa-star" style="color : grey"></i>&nbsp;'
                }
            }
            const div = document.createElement('div');
            div.innerHTML = html
            document.getElementById('linh-rating-info').appendChild(div)
        },

        updateRatingValue(value){
            this.ratingForm.rankNumber = value
        },
    },

    mounted() {
        this.getSummaryRating()  
    },
}

</script>
<style lang="">
    
</style>