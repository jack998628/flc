<template>
	<view>
		<view class="tags" v-for="itme in TimeList" :key="itme">
			<text class="tag">{{itme.h}}:</text>
			<text class="tag">{{itme.m}}:</text>
			<text class="tag">{{itme.s}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['TimeList'],
		data() {
			return {
          
			}
		},
		mounted() {
			console.log(this.TimeList)
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.tags {
		width: 100%;
		display: flex;

		.tag {
			color: #fff;
			background-color: red;
		}
	}
</style>
