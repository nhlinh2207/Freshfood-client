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
                                        <input type="hidden" th:value="${product.id}" name="productId"/>
                                        <label class="control-label" for="input-name">Họ tên</label>
                                        <input type="text" name="ratingName" value="" id="input-name" class="form-control">
                                    </div>
                                </fieldset>
                                <fieldset class="form-group required">
                                    <div class="">
                                        <label class="control-label" for="input-review">Nội dung đánh giá</label>
                                        <textarea name="ratingContent" rows="5" id="input-review" class="form-control"></textarea>
                                        <div class="help-block"><span class="text-danger">Chú ý:</span> Không sử dụng các định dạng HTML!</div>
                                    </div>
                                </fieldset>
                                <fieldset class="form-group required">
                                    <div class="rating_review">
                                        <label class="control-label"><strong>Xếp hạng</strong></label>
                                        &nbsp;&nbsp;&nbsp; Chưa tốt&nbsp;
                                        <input type="radio" name="ratingValue" value="1">&nbsp;
                                        <input type="radio" name="ratingValue" value="2">&nbsp;
                                        <input type="radio" name="ratingValue" value="3">&nbsp;
                                        <input type="radio" name="ratingValue" value="4">&nbsp;
                                        <input type="radio" name="ratingValue" value="5">&nbsp;
                                        Tốt
                                    </div>
                                    <div class="buttons clearfix">
                                        <div class="pull-right">
                                            <button type="button" onclick="sendRating()" id="button-rating" class="btn btn-primary">Gửi đánh giá</button>
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
    data(){
        return {
            isCommentTab : false,
            isRatingTab : true
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
        }
    }
}

</script>
<style lang="">
    
</style>