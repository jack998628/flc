<template>
	<view>
		<!-- 搜索组件 -->
		<Search></Search>
		<!-- 轮播 -->
		<view class="s_wrap">
			<swiper class="swiper" indicator-dots indicator-active-color="#52B4B3" autoplay interval="2000">
				<swiper-item>
					<image class="image" src="https://image1.ljcdn.com/newhcms/php1LbXq21589878284.jpeg.1005x504.jpg"></image>
				</swiper-item>
				<swiper-item>
					<image class="image" src="https://image1.ljcdn.com/newhcms/phpm7EPMN1592186202.jpeg.1005x504.jpg"></image>
				</swiper-item>
				<swiper-item>
					<image class="image" src="https://image1.ljcdn.com/newhcms/phpZQ8t3A1592552776.jpeg.1005x504.jpg"></image>
				</swiper-item>
			</swiper>
		</view>


		<!-- 菜单导航 -->
		<view class="m_wrap">
			<view class="menu">
				<view class="item">
					<image src="https://image1.ljcdn.com/newhcms/phpvPsrYR1572848986.png.84x75.png" mode="widthFix"></image>
					<text>好盘推荐</text>
				</view>
				<view class="item">
					<image src="https://image1.ljcdn.com/newhcms/phptyuWJd1572849165.png.84x75.png" mode="widthFix"></image>
					<text>优惠楼盘</text>
				</view>
				<view class="item">
					<image src="https://image1.ljcdn.com/newhcms/phpK4JP1U1572849184.png.84x75.png" mode="widthFix"></image>
					<text>团购活动</text>
				</view>
				<view class="item">
					<image src="https://image1.ljcdn.com/newhcms/phpK0cszK1572849200.png.84x75.png" mode="widthFix"></image>
					<text>预约看房</text>
				</view>
			</view>
		</view>
		
		
		<!-- 今日热点 -->
		<view class="title">
			<view class="news">今日热点</view>
			<view class="contant">丁宇湾文化城：两年分期2.3万，首批火爆预售>>></view>
		</view>
		
		
		<!-- 优惠楼盘 -->
		<view class="y_wrap">
			<view class="title">
				<text>优惠楼盘</text>
				<text class="more">>>></text>
			</view>
		</view>
		<!-- 倒计时 -->
		<!-- <Dataformat :TimeList="TimeList" v-if="TimeList.length!=0"></Dataformat> -->


		<!-- 	<view class="wrap" @touchmove="getLoction($event)">

		</view> -->
	</view>
</template>

<script>
	//引入搜索组件
	import Search from '../../components/search/index.vue';
	// 引入倒计时组件
	import Dataformat from '../../components/dataformat/index.vue';
     // 引入通告栏组件
	 // import uniNoticeBar from '../../components/uni-notice-bar/uni-notice-bar.vue'
	export default {
		data() {
			return {
				title: "苏州",
				// timer: '',
				// //活动倒计时
				// formatDown: [
				// 	new Date("2020/6/25 12:00:00"), 
				// 	new Date("2020/6/25 13:30:00"), 
				// 	new Date("2020/6/25 14:50:00")
				// 	],
				// TList: '',
				// TimeList:[]
			}
		},
		onLoad() {
			// 加载倒计时
			// this.timer =  setInterval(() => {
			// 	this.Timeformat();
			// }, 1000)
		},
		// 卸载定时器
		onUnload() {
			// if (this.timer) {
			// 	clearInterval(this.timer);
			// 	this.timer = null;
			// }
		},
		components: {
			Search,
			Dataformat,
			
		},
		methods: {
			// 获取楼栋的坐标
			getLoction(e) {
				console.log(e)
			},
			getCity(city) {
				console.log(city)
			},
			// // 时间倒计时
			// Timeformat() {
			// 	let _this = this
			// 	_this.formatDown.forEach((itme,idx) => {
			// 		let start = new Date();
			// 		let t_time = this.Diff(start, itme);
			// 		_this.totaltime(t_time)
			// 		_this.TimeList[idx] = _this.TList;
			// 	})

			// },
			// // 计算时间差
			// Diff(start, end) {
			// 	return (end.getTime() - start.getTime()) / 1000
			// },
			// // 计算单个剩余时间
			// totaltime(a) { //计算单个剩余时间
			// 	let totaltime = a
			// 	let _this = this
			// 	var h, m, s
			// 	if (totaltime > 0) {
			// 		h = parseInt(totaltime / 3600);
			// 		m = parseInt(totaltime % 3600 / 60);
			// 		s = parseInt(totaltime % 60);
			// 		//获取时分秒
			// 		h = _this.toTwo(h)
			// 		m = _this.toTwo(m)
			// 		s = _this.toTwo(s)
			// 		// 每个倒计时的时间显示格式
			// 		return _this.TList = {
			// 			h,
			// 			m,
			// 			s
			// 		} 
			// 	} else {
			// 		return _this.TList = `00 : 00 : 00`
			// 	}
			// },
			// // 双数
			// toTwo(num) {
			// 	return num < 10 ? "0" + num : num;
			// }
		}
	}
</script>

<style scoped lang="scss">
	// 轮播容器
	.s_wrap {
		padding: 0 20rpx;
		box-sizing: border-box;
		width: 100%;
		height: 300rpx;


		swiper {
			width: 100%;
			height: 100%;

		}

		swiper-item {
			width: 100%;
			height: 100%;
			border-radius: 10rpx;

			image {
				box-sizing: border-box;
				width: 100%;
				height: 100%;
			}
		}
	}

	// 菜单导航
	.m_wrap {
		margin-top: 20rpx;
		width: 100%;
		background-color: #fff;

		.menu {
			padding:  40rpx 0;
			display: flex;
			justify-content: space-around;

			.item {
				display: flex;
				align-items: center;
				flex-direction: column;
                font-size: 32rpx;
				image {
					width: 100rpx;
					height: 80rpx;
					padding-bottom: 15rpx;
				}
				
			}

		}
	}
	
	// 今日热点
	.title{
		margin-top: 20rpx;
		box-sizing: border-box;
		padding: 0 20rpx;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.news{
			font-size: 36rpx;
			font-weight: bold;
			color: #FC834D;
		}
		.contant{
			flex: 1;
			font-size: 32rpx;
			color: #839fba;
			margin-left: 20rpx;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
	//优惠楼盘
	.y_wrap{
		width: 100%;
		background-color: #fff;
		.title{
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 34rpx;
			font-weight: bold;
			padding: 20rpx 20rpx;
			box-sizing: border-box;
			.more{
				font-size: 30rpx;
				color: #ccc;
			}
		}
	}
	
</style>
