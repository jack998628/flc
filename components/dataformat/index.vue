<template>
	<view>
	<!-- 	<view v-if="TimeList.length!=0" class="tags" v-for="itme in TimeList" :key="itme">
			<text class="tag">{{itme.h}}:</text>
			<text class="tag">{{itme.m}}:</text>
			<text class="tag">{{itme.s}}</text>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				timer: '',
				//活动倒计时
				formatDown: [
					new Date("2020/6/25 12:00:00"),
					new Date("2020/6/25 13:30:00"),
					new Date("2020/6/25 14:50:00")
				],
				TList: '',
				TimeList: []
			}
		},
		created() {
			// 加载倒计时
			// this.timer = setInterval(() => {
			// 	this.Timeformat();
			// }, 1000)
		},
		mounted() {
			console.log(this.TimeList)
		},
		methods: {
			// 时间倒计时
			Timeformat() {
				let _this = this
				_this.formatDown.forEach((itme, idx) => {
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
		},
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
			background-color: red;
		}
	}
</style>
