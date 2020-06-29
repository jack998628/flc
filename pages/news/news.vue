<template>
	<view class="wrap">
		<view class="nav" :style="{'opacity':opacity}">
			<view class="tag" @tap="To('基本信息')">基本信息</view>
			<view class="tag" @tap="To('户型图')">户型图</view>
			<view class="tag" @tap="To('周边配套')">周边配套</view>
			<view class="tag" @tap="To('经纪人')">经纪人</view>
		</view>



		<view class="info">基本信息</view>


		<view class="hx">我是户型图</view>


		<view class="Surr">我是周边配套</view>


		<view class="broker">我是经纪人</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				opacity: 0,
				wrapTop: '',
			}
		},
		onLoad() {

		},
		methods: {
			onPageScroll(e) {
				if (e.scrollTop >= 20) {
					this.opacity += 0.1;
				} else if (e.scrollTop < 100) {
					this.opacity -= 0.5;
				}
			},
			To(key) {
				let _this = this;
				let Class = String;
				switch (key) {
					case '基本信息':
						Class = '.info';
						break;
					case '户型图':
						Class = ".hx";
						break;
					case '周边配套':
						Class = '.Surr';
						break;
					case '经纪人':
						Class = '.broker';
						break
				}
				this.fiter(Class)
				uni.pageScrollTo({
					scrollTop: _this.wrapTop,
					duration: 300
				});
			},
			fiter(Class) {
				let _this = this;
				let query = uni.createSelectorQuery()
				query.select(Class).boundingClientRect()
				query.selectViewport().scrollOffset()
				query.exec(function(res) {
					_this.wrapTop = res[0].top
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.wrap {
		height: 3000rpx;

		.nav {
			position: fixed;
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: 100rpx;
			top: 200rpx;
			background-color: pink;

			.tag {
				color: #fff;
				font-size: 36rpx;
			}
		}

		.info,
		.hx,
		.Surr,
		.broker {
			width: 100%;
			height: 300rpx;
			background-color: #0086B3;
		}
	}
</style>
