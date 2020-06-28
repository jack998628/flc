<template>
	<view>
		<view class="nav_wrap">
			<view class="item" @tap.stop="showFilter(1)">
				<text :class="[ dire&&active==1? 'text' : '']">区域</text>
				<view :class="['icon iconfont iconxiala',dire&&active==1? 'bg' : '']"></view>
			</view>
			<view class="item" @tap.stop="showFilter(2)">
				<text :class="[ dire&&active==2? 'text' : '']">价格</text>
				<view :class="['icon iconfont iconxiala',dire&&active==2? 'bg' : '']"></view>
			</view>
			<view class="item" @tap.stop="showFilter(3)">
				<text :class="[ dire&&active==3? 'text' : '']">其他</text>
				<view :class="['icon iconfont iconxiala',dire&&active==3? 'bg' : '']"></view>
			</view>
		</view>

		<view catchtouchmove='ture' class="area" v-show="dire&&active==1">
			<view class="cover" @tap="dire=false"></view>
			<view class="list">
				<view class="item">
					<text>不限</text>
					<text class="icon iconfont icon-zhengque"></text>
				</view>
				<view class="item">
					<text>姑苏区</text>
					<text class="icon iconfont icon-zhengque"></text>
				</view>
				<view class="item">
					<text>高新区</text>
					<text class="icon iconfont icon-zhengque"></text>
				</view>
				<view class="item">
					<text>虎丘区</text>
					<text class="icon iconfont icon-zhengque"></text>
				</view>
				<view class="item">
					<text>吴中区</text>
					<text class="icon iconfont icon-zhengque"></text>
				</view>
				<view class="item">
					<text>昆山</text>
					<text class="icon iconfont icon-zhengque"></text>
				</view>
			</view>

			<view class="b_wrap">
				<view class="cancel" @tap="dire=false">重置</view>
				<view class="enter">确定</view>
			</view>
		</view>

		<view catchtouchmove='ture' class="area" v-show="dire&&active==2">
			<view class="cover" @tap="dire=false"></view>
			<view class="list">
				<view class="item">
					<text>不限</text>
					<text class="icon iconfont icon-zhengque"></text>
				</view>
				<view class="item">
					<text>50万-100万</text>
					<text class="icon iconfont icon-zhengque"></text>
				</view>
				<view class="item">
					<text>100万-150万</text>
					<text class="icon iconfont icon-zhengque"></text>
				</view>
				<view class="item">
					<text>150万-200万</text>
					<text class="icon iconfont icon-zhengque"></text>
				</view>
				<view class="item">
					<text>200万-250万</text>
					<text class="icon iconfont icon-zhengque"></text>
				</view>
				<view class="item">
					<text>250万-300万</text>
					<text class="icon iconfont icon-zhengque"></text>
				</view>
			</view>

			<view class="b_wrap">
				<view class="cancel" @tap="dire=false">重置</view>
				<view class="enter">确定</view>
			</view>
		</view>


		<view catchtouchmove='ture' class="area" v-show="dire&&active==3">
			<view class="cover" @tap="dire=false"></view>
			<view class="list">
				<view class="item">
					<text>不限</text>
					<text class="icon iconfont icon-zhengque"></text>
				</view>
				<view class="item">
					<text>发布时间</text>
					<text class="icon iconfont icon-zhengque"></text>
				</view>
				<view class="item">
					<text>价格高到低</text>
					<text class="icon iconfont icon-zhengque"></text>
				</view>
				<view class="item">
					<text>价格低到高</text>
					<text class="icon iconfont icon-zhengque"></text>
				</view>
			</view>
			<view class="b_wrap">
				<view class="cancel" @tap="dire=false">重置</view>
				<view class="enter">确定</view>
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
				active: 0,
				dire: false
			}
		},
		methods: {
			showFilter(id) {
				this.active = id
				this.dire = !this.dire
			}
		}

	}
</script>

<style scoped lang="scss">
	// 筛选栏
	.nav_wrap {
		width: 100%;
		display: flex;
		background-color: #fff;

		.item {
			width: 33.3%;
			height: 80rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #ccc;

			.icon {
				font-size: 30rpx;
				color: #ccc;
				transition: all .1s ease-in;
			}

			.bg {
				transform: rotate(180deg);
				color: #4CD964;
				// border-color: #4CD964 transparent transparent transparent;

			}

			.text {
				color: #4CD964;
			}
		}
	}

	// 区域筛选列表
	.area {
		position: relative;
		width: 100%;
		transition: height .2s ease;

		.cover {
			position: absolute;
			z-index: -1;
			top: 0;
			left: 0;
			width: 100%;
			height: 3000rpx;
			background-color: #2d2d2d;
		}

		.list {
			z-index: 999;
			width: 100%;
			box-sizing: border-box;
			background-color: #fff;

			.item {
				font-size: 34rpx;
				box-sizing: border-box;
				padding: 20rpx 20rpx;
				border-bottom: 1rpx solid #ccc;
				display: flex;
				justify-content: space-between;

				.icon {
					color: #4CD964;
				}

			}
		}

		.b_wrap {
			padding: 20rpx 0;
			display: flex;
			justify-content: space-between;
			width: 100%;
			background-color: #fff;
             
			.cancel {
				display: flex;
				width: 48%;
				height: 100rpx;
				background-color: #F8F8F8;
				color: #777777;
				justify-content: center;
				align-items: center;
			}

			.enter {
				display: flex;
				width: 48%;
				height: 100rpx;
				justify-content: center;
				align-items: center;
				background-color: #1de692;
				color: #b8e2d1;
			}
		}
	}
</style>
