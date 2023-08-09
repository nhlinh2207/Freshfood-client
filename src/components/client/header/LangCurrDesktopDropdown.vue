<template lang="">
    <li class="language desk-lan-curr">
        <a class="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)">
            <img src="@/assets/images/languages/vi-vn.png" alt="Tiếng Việt" title="Tiếng Việt" />
            <span>Tiếng Việt</span>
        </a>
        <ul class="dropdown-menu">
            <li class="dropdown-item">
                <a class="language-select" href="/freshfood/trang-chu?lang=vi" name="vi-vn">
                    <img src="@/assets/images/languages/vi-vn.png" alt="Tiếng Việt" title="Tiếng Việt" /> Tiếng Việt
                </a>
            </li>
            <li class="dropdown-item">
                <a class="language-select" href="/freshfood/trang-chu?lang=en" name="en-gb">
                   <img src="@/assets/images/languages/en-gb.png" alt="TIếng anh" title="TIếng anh" /> English
                </a>
            </li>
        </ul>
    </li>
    <li class="currency desk-lan-curr">
        <a class="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)">
            <strong>đ</strong>
            <span> - VNĐ</span>
        </a>
        <ul class="dropdown-menu">
            <li class="dropdown-item">
                <a class="currency-select" href="javascript:void(0)" name="EUR"> € - Euro </a>
            </li>
            <li class="dropdown-item">
                <a class="currency-select" href="javascript:void(0)" name="GBP"> £ - Pound Sterling </a>
            </li>
            <li class="dropdown-item">
                <a class="currency-select" href="javascript:void(0)" name="USD"> $ - USD </a>
            </li>
            <li class="dropdown-item">
                <a class="currency-select" href="javascript:void(0)" name="VND"> đ - VNĐ </a>
            </li>
        </ul>
    </li>
</template>
<script>
export default {

}
</script>
<style scoped></style>