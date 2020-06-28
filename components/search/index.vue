<template>
	<view>
		<!-- 头部搜索框 -->
		<view class="s_wrap">
			<view class="search">
				<view class="city">
					<view class="icon iconfont iconlocation"></view>
					<text class="title">苏州</text>
					<view class="icon iconfont iconxiala"></view>
				</view>

				<view class="search_ipt">
					<view class="icon iconfont iconsousuo"></view>
					<text>你想住在哪</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// 导入字体图标
	import '../../static/font_1895569_k7ithb23iil/iconfont.css'
	export default {
		data() {
			return {

			}
		},
		methods: {

		},
	}
</script>

<style scoped lang="scss">
	.s_wrap {
		width: 100%;
		padding: 20rpx;
		box-sizing: border-box;

		.search {
			display: flex;
			justify-content: space-between;
			width: 100%;
			background-color: #fff;
			border-radius: 20rpx;
			padding: 15rpx 0;
			font-size: 32rpx;

			// 城市
			.city {
				padding: 0 30rpx;
				font-size: 32rpx;
				display: flex;
				align-items: center;
				border-right: 1rpx solid #ccc;

				.iconlocation {
					color: #52B4B3;
					font-size: 50rpx;
				}

				.title {
					padding: 0 13rpx;
				}

				.iconxiala {
					color: #ccc;
				}
			}

			// 搜索输入框
			.search_ipt {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #ccc;
				.iconsousuo{
					color: #ccc;
				}
			}
		}
	}
</style>
