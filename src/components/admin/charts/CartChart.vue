<template lang="">
    <div class="col-xl-3 col-md-6 mb-4">
		<div :class="'card '+borderColor+' shadow h-100 py-2'">
			<div class="card-body">
                <div class="row no-gutters align-items-center">
					<div class="col mr-2">
						<div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
							{{title}}</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">{{data}}</div>
					</div>
					<div class="col-auto">
						<i :class="icon"></i>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
    props: {
        data: String,
        icon: String,
        title: String,
        borderColor: String
    }
}
</script>
<style lang="">
    
</style>