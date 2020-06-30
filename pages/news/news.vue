<template>
	<view class="wrap">


		<view class="nav" :style="{'opacity':opacity}">
			<view class="tag" @tap="To('基本信息')">基本信息</view>
			<view class="tag" @tap="To('户型图')">户型图</view>
			<view class="tag" @tap="To('周边配套')">周边配套</view>
			<view class="tag" @tap="To('经纪人')">经纪人</view>
		</view>
		<view v-if="show" class="cover">
			<jk-load></jk-load>
		</view>



		<view class="info">基本信息</view>


		<view class="hx">我是户型图</view>


		<view class="Surr">我是周边配套</view>


		<view class="broker">我是经纪人</view>
	</view>
</template>

<script>
	// 引入加载动画
	import jkLoad from '../../components/jk-load/index.vue'
	export default {
		data() {
			return {
				opacity: 0,
				show: true,
				timer: null
			}
		},
		components: {
			jkLoad
		},
		onLoad() {

		},
		onShow() {
			this.timer = setTimeout(() => {
				this.show = false
			}, 3000)
		},
		onHide() {
			clearInterval(this.timer);
			this.show = true;
		},
		methods: {
			onPageScroll(e) {
				if (e.scrollTop >= 42) {
					this.opacity = 1
				} else if (e.scrollTop < 42) {
					this.opacity = 0
				}
			},
			// 锚点
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
				_this.fiter(Class)
			},
			fiter(Class) {
				let query = uni.createSelectorQuery()
				query.select(Class).boundingClientRect()
				query.selectViewport().scrollOffset()
				query.exec(function(res) {
					uni.pageScrollTo({
						selector: Class,
						duration: 300
					});
				})
			}
		}
	}
</script>


<style scoped lang="scss">
	.wrap {
		height: 3000rpx;

		.cover {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background-color: #fff;
		}

		.nav {
			position: fixed;
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: 100rpx;
			top: 100rpx;
			background-color: pink;
			transition: opacity 1s ease;

			.tag {
				color: #fff;
				font-size: 36rpx;
			}
		}

		.info,
		.hx,
		.Surr,
		.broker {
			padding-top: 200rpx;
			box-sizing: border-box;
			margin-top: 300rpx;
			width: 100%;
		}
	}
</style>
