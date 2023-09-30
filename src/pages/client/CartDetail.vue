<template lang="">
    <div class="container">
        <BreadCrumb breadcrumbType="history" />
    </div>
    <section>
      <section class="page mb-4">
        <div class="container">
            <div class="row">
              <div class="col-sm-12">
                    <div class="mb-4 align-items-center justify-content-between">
                        <button class="btn btn-primary" data-toggle="tooltip" title data-original-title="Refesh" onclick="loadcartitems()">Refresh</button>
                    </div>
                    <form>
                        <div class="table-responsive table-cart-content">
                            <table id="message-table" class="table table-bordered">
                                <thead>
                                <tr>
                                    <td class="text-center"><strong>Mã đơn hàng</strong></td>
                                    <td class="text-center"><strong>Thời gian đặt hàng</strong></td>
                                    <td class="text-center"><strong>Trạng thái</strong></td>
                                    <td class="text-center"><strong>Thời gian nhận hàng</strong></td>
                                    <td class="text-center"><strong>Xem chi tiết</strong></td>
                                </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </section>
    </section>
</template>
<script>
export default {
  methods: {
  },
    
}
</script>
<style lang="">
    
</style>