<template lang="">
    <div class="container-fluid">
        <BreadCrumb breadcrumbType="user" />
        <div class="row">
            <div class="col-sm-12">
                <form>
                    <div class="table-responsive table-cart-content">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="header-search search-form">
                                        <div class="form input-group search-bar search-form d-flex align-items-center">
                                            <input type="search" v-model="search" name="search" placeholder="Tìm kiếm" class="input-group-field st-default-search-input search-text" autocomplete="off" />
                                            <span class="input-group-btn">
                                            <button @click.prevent="loadUsers" class="btn icon-fallback-text">
                                                <i class="fa fa-search"></i>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 d-flex align-items-center justify-content-center">
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
                                            <a @click.prevent="updateStatus('Hoạt động', 'ACTIVE')">Hoạt động</a>
                                        </li>
                                        <li class="dropdown-item">
                                            <a @click.prevent="updateStatus('Không hoạt động', 'INACTIVE')" >Không hoạt động</a>
                                        </li>
                                        <li class="dropdown-item">
                                            <a @click.prevent="updateStatus('Đã xóa', 'DELETED')" >Đã xóa</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <table id="message-table" class="table table-bordered table-striped mt-4">
                            <thead>
                                <tr>
                                    <td class="text-center"><strong>Mã tài khoản</strong></td>
                                    <td class="text-center"><strong>Tên</strong></td>
                                    <td class="text-center"><strong>Email</strong></td>
                                    <td class="text-center"><strong>Số điện thoại</strong></td>
                                    <td class="text-center"><strong>Trạng thái</strong></td>
                                    <td class="text-center"><strong>Xem chi tiết</strong></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="u in users" :key="u.id">
                                    <td class="text-center">{{u.id}}</td>
                                    <td class="text-center">
                                        {{u.firstName+ ' ' + u.lastName}}
                                    </td>
                                    <td class="text-center">{{u.email}}</td>
                                    <td class="text-center">{{u.phoneNumber}}</td>
                                    <td class="text-center">{{u.status}}</td>
                                    <td class="text-center">
                                        <router-link :to="'/admin/viewProfile/'+u.id" title="Xem chi tiết">
                                            <i class="fas fa-edit"></i>
                                        </router-link>
                                        <a @click="deleteUser(u.id)" v-if="u.status !== 'Đã xóa'" class="ml-4" title="Xóa tài khoản">
                                            <i class="fas fa-trash"></i>  
                                        </a>
                                        <a @click="restoreUser()" v-if="u.status === 'Đã xóa'" class="ml-4" title="Khôi phục tài khoản">
                                            <i class="fas fa-refresh"></i>  
                                        </a>
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
            users: [],
            page: 0,
            size: 12,
            search: '',
            sortBy: 'createTime',
            sortDir: 'desc',
            totalPages: null,
            type: 'USER',
            statusText: 'Tất cả',
            statusCode: ''
        }
    },

    methods: {

        updatePage(val){
           this.page = val;
           this.loadUsers();    
        },

        async loadUsers(){
            var resp = await this.$httpClient.get("/user/getAll", true, {page: this.page, size: this.size, search: this.search, sortBy: this.sortBy, sortDir: this.sortDir, type: this.type, status: this.statusCode})
            if(!resp.result){
                return this.showErrorMsg(resp.message)
            }
            this.users = resp.data.data
            this.totalPages = resp.data.totalPages
            this.page = resp.data.currentPage
        },

        deleteUser(id){
            this.$swal({
                title: 'Xóa tài khoản ?',
                text: "Xóa tài khoản có mã: "+id,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Xác nhận',
                cancelButtonText: 'Hủy'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    var resp = await this.$httpClient.delete("/user/delete", true, {id : id})
                    if(!resp.result){
                        return this.showErrorMsg(resp.message)
                    }
                    this.$swal({
                        title: 'Thành công',
                        text: "Tài khoản đã được xóa !",
                        icon: 'success',
                    })
                    this.loadUsers();
                }
            })
        },

        restoreUser(){
            
        },

        updateStatus(name, code){
            this.statusText = name;
            this.statusCode = code;
            this.loadUsers();
        }
    },

    beforeMount(){
        this.loadUsers();
    }
}
</script>
<style scoped>
    .search-bar input{
       margin: 10px 0;
       border-radius: 15px;
       background-color: #EEEEEE;
    }

    .dropdown-item a{
        cursor: pointer;
    }
</style>