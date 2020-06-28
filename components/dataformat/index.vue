<template>
	<view>
		<view v-if="TimeList.length!=0" class="tags" v-for="itme in TimeList" :key="itme">
			<view class="tag">{{itme.h}}</view>
			<text>:</text>
			<view class="tag">{{itme.m}}</view>
			<text>:</text>
			<view class="tag">{{itme.s}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['Countdown'],
		data() {
			return {
				timer: '',
				// 记录每条时间记录
				TList: '',
				// 活动时间数组
				TimeList: [],
				// 好盘时间数组
				goodList: [],
			}
		},
		created() {
			// 加载倒计时
			this.timer = setInterval(() => {
				this.TimeList = this.Timeformat(this.Countdown);
			}, 1000)
		},
		methods: {
			// 时间倒计时
			Timeformat(downList) {
				let _that = this
				let arr = []
				downList.forEach((itme, idx) => {
					let start = new Date().getTime();
					// 兼容写法
					let time = itme.replace(new RegExp("-", "gm"), "/") 
					let endTime = new Date(time).getTime()
					let t_time = (endTime - start)/1000;
					_that.totaltime(t_time)
					arr[idx] = _that.TList;
				})
				return arr
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
					return _this.TList = {
						h: "00",
						m: "00",
						s: "00",
						status: "活动结束"
					}
				}
			},
			// 双数
			toTwo(num) {
				return num < 10 ? "0" + num : num;
			}
		},
		// 组件销毁时释放定时器
		destroyed() {
			if (this.timer) {
				clearInterval(this.timer);
				this.timer = null;
			}
		}
	}
</script>

<style scoped lang="scss">
	.tags {
		width: 100%;
		display: flex;

		.tag {
			color: #fff;
			background-color: #FA533D;
			padding: 5rpx;
			font-size: 30rpx;
			border-radius: 5rpx;
		}

		text {
			color: #8e969f;
			padding: 0 10rpx;
		}
	}
</style>
