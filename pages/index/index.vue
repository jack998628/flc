<template>
	<view>
		<!-- 搜索组件 -->
		<Search :title="title" @getCity="getCity()"></Search>

		<!-- 倒计时 -->
		<Dataformat :TimeList="TimeList" v-if="TimeList.length!=0"></Dataformat>


	<!-- 	<view class="wrap" @touchmove="getLoction($event)">

		</view> -->
	</view>
</template>

<script>
	//引入搜索组件
	import Search from '../../components/search/index.vue';
	// 引入倒计时组件
	import Dataformat from '../../components/dataformat/index.vue';
	
	export default {
		data() {
			return {
				title: "苏州",
				time: 1592894986673,
				timer: '',
				//活动倒计时
				formatDown: [
					new Date("2020/6/25 12:00:00"), 
					new Date("2020/6/25 13:30:00"), 
					new Date("2020/6/25 14:50:00")
					],
				TList: '',
				TimeList:[]
			}
		},
		onLoad() {
			// 加载倒计时
			this.timer =  setInterval(() => {
				this.Timeformat();
			}, 1000)
		},
		// 卸载定时器
		onUnload() {
			if (this.timer) {
				clearInterval(this.timer);
				this.timer = null;
			}
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
			// 时间倒计时
			Timeformat() {
				let _this = this
				_this.formatDown.forEach((itme,idx) => {
					let start = new Date();
					let t_time = this.Diff(start, itme);
					_this.totaltime(t_time)
					_this.TimeList[idx] = _this.TList;
				})
				
			},
			// 计算时间差
			Diff(start, end) {
				return (end.getTime() - start.getTime()) / 1000
			},
			// 计算单个剩余时间
			totaltime(a) { //计算单个剩余时间
				let totaltime = a
				let _this = this
				var h, m, s
				if (totaltime > 0) {
					h = parseInt(totaltime / 3600);
					m = parseInt(totaltime % 3600 / 60);
					s = parseInt(totaltime % 60);
					//获取时分秒
					h = _this.toTwo(h)
					m = _this.toTwo(m)
					s = _this.toTwo(s)
					// 每个倒计时的时间显示格式
					return _this.TList = {
						h,
						m,
						s
					} 
				} else {
					return _this.TList = `00 : 00 : 00`
				}
			},
			// 双数
			toTwo(num) {
				return num < 10 ? "0" + num : num;
			}
		}
	}
</script>

<style scoped lang="scss">
	.Countdown {
		width: 100%;

	}

	.wrap {
		width: 100%;
		height: 300rpx;
		background-color: pink;
	}
</style>
