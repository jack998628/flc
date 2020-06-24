<template>
	<view>
		<jkmap></jkmap>

	</view>
</template>

<script>
	// 引入地图组件
	import jkmap from '../../components/jk-map/index.vue';
	// 引入地图api
	var QQMapWX = require('../../api/qqmap-wx-jssdk.js');
	var qqmapsdk;
	export default {
		data() {
			return {

			}
		},
		created() {
			qqmapsdk = new QQMapWX({
				key: 'JFRBZ-Z7PWP-JIXDQ-VMCRI-7NORT-CZFPX'
			});
		},
		mounted() {
			qqmapsdk.search({
				keyword: '医院',
				success: function(res) {
					console.log(res);
				},
				fail: function(res) {
					console.log(res);
				}
			});
		},
		components: {
			jkmap
		},

	}
</script>

<style scoped lang="scss">

</style>
