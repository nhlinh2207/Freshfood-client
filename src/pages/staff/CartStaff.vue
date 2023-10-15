<template lang="">
    <div class="container-fluid">
        <BreadCrumb breadcrumbType="cartManage" />
        <div class="row">
            <div class="col-sm-12">
                <form>
                    <div class="table-responsive table-cart-content">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="fromDate">Thời gian đặt từ: </label>
                                            <input type="date" class="form-control" name="fromDate" id="fromDate" v-model="fromOrderTime"/>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="toDate">tới: </label>
                                            <input type="date" class="form-control" name="toDate" id="toDate" v-model="toOrderTime" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 d-flex align-items-center justify-content-center">
                                <label class="d-none d-md-block mx-5 my-0"><strong>Trạng thái: </strong></label>
                                <div>
                                    <span style="cursor: pointer" class="dropdown-toggle" data-toggle="dropdown">
                                        {{statusText}}
                                    </span> 
                                    <ul class="dropdown-menu">
                                        <li class="dropdown-item">
                                            <a @click.prevent="updateStatus('Tất cả', 'ALL')">Tất cả</a>
                                        </li>
                                        <li class="dropdown-item">
                                            <a @click.prevent="updateStatus('Chưa giao', 'UNSENT')">Chưa giao</a>
                                        </li>
                                        <li class="dropdown-item">
                                            <a @click.prevent="updateStatus('Đang giao', 'PENDING')" >Đang giao</a>
                                        </li>
                                        <li class="dropdown-item">
                                            <a @click.prevent="updateStatus('Đã giao', 'COMPLETE')" >Đã giao</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-2 d-flex align-items-center justify-content-center">
                                <button class="btn btn-primary" @click.prevent="loadCarts" data-toggle="tooltip" title data-original-title="Timf" >Tìm kiiếm</button>
                            </div>
                        </div>
                        <table id="message-table" class="table table-bordered table-striped mt-4">
                            <thead>
                                <tr>
                                    <td class="text-center"><strong>Mã đơn hàng</strong></td>
                                    <td class="text-center"><strong>Tên khách hàng</strong></td>
                                    <td class="text-center"><strong>Đia chỉ</strong></td>
                                    <td class="text-center"><strong>Tổng giá</strong></td>
                                    <td class="text-center"><strong>Trạng thái</strong></td>
                                    <td class="text-center"><strong>Xem chi tiết</strong></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="c in carts" :key="c.id">
                                    <td class="text-center">{{c.id}}</td>
                                    <td class="text-center">{{c.receiverName}}</td>
                                    <td class="text-center">{{c.address}}</td>
                                    <td class="text-center">{{convertCurrency(c.totalPrice)}}</td>
                                    <td class="text-center">{{c.status}}</td>
                                    <td class="text-center">
                                        <router-link :to="'/staff/cartDetailStaff/'+c.id" title="Xem chi tiết">
                                            <i class="fas fa-eye"></i>
                                        </router-link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="text-center">
                            <ul class="pagination justify-content-center">
                                <li v-if="page > 0" class="page-item page-move"><a @click.prevent="updatePage(0)" class="page-link">|&lt;</a></li>
                                <li v-if="page > 0" class="page-item page-move"><a @click.prevent="updatePage(page - 1)" class="page-link">&lt;</a></li>
                                <li v-for="index in totalPages" :key="index" class="page-item" :class="{active : page === (index - 1)}"><a @click.prevent="updatePage(index - 1)" class="page-link">{{index}}</a></li>
                                <li v-if="page < totalPages - 1" class="page-item page-move"><a  @click.prevent="updatePage(page + 1)" class="page-link">&gt;</a></li>
                                <li v-if="page < totalPages - 1" class="page-item page-move"><a  @click.prevent="updatePage(totalPages - 1)" class="page-link">&gt;|</a></li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import BreadCrumb from '@/components/client/BreadCrumb.vue';

export default {
    components: {
        BreadCrumb
    },

    data(){
        return{
            carts: [],
            page: 0,
            from: 'orderTime',
            totalPages: null,
            statusText: 'Tất cả',
            statusCode: '',
            fromOrderTime: '',
            toOrderTime: ''
        }
    },

    methods: {

        updatePage(val){
           this.page = val;
           this.loadCarts();    
        },

        async loadCarts(){
            var resp = await this.$httpClient.get("/cart/findByStaff", true, {page: this.page, fromOrderTime: this.fromOrderTime, toOrderTime: this.toOrderTime, status: this.statusCode})
            if(!resp.result){
                return this.showErrorMsg(resp.message)
            }
            this.carts = resp.data.data
            this.totalPages = resp.data.totalPages
            this.page = resp.data.currentPage
        },

        updateStatus(name, code){
            this.statusText = name;
            this.statusCode = code;
            this.page = 0
            this.loadCarts();
        }
    },

    beforeMount(){
        this.loadCarts();
    }
}
</script>
<style scoped>
    
</style>