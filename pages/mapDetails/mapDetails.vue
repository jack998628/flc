<template>
	<view class="wrap">
		<map :show-compass="true" :latitude="address.latitude" :longitude="address.longitude" :markers="markers"></map>
		<!-- 分类选择 -->
		<view class="menu">
			<view class="tags">
				<view class="tag" @tap="gitSurr('公交')">
					公交
				</view>
				<view class="tag" @tap="gitSurr('学校')">
					学校
				</view>
				<view class="tag" @tap="gitSurr('餐饮')">
					餐饮
				</view>
				<view class="tag" @tap="gitSurr('购物')">
					购物
				</view>
				<view class="tag" @tap="gitSurr('医院')">
					医院
				</view>
			</view>
			<!-- 信息列表 -->
			<scroll-view class="info" scroll-y="true" v-if="markers.length>2">
				<view class="item" v-for="item in markers" :key="item.id" v-if="item.id!=0">
					<view class="left">
						<text class="title">{{item.title}}</text>
						<text class="address">{{item.category}}</text>
					</view>
					<view class="right">
						{{item.distance}}m
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude: 0,
				longitude: 0,
				markers: [],
				address: {
					iconPath: "../../static/images/dingwei1.png",
					id: 0,
					latitude: Number,
					longitude: Number,
					width: 30,
					height: 30,
					title: '',
				}
			}
		},
		onLoad() {
			this.gitCoor()
		},
		methods: {
			// 地址转坐标
			async gitCoor() {
				let _that = this
				await uni.request({
					url: 'https://apis.map.qq.com/ws/geocoder/v1/',
					data: {
						address: '苏州市金辉悠步四季',
						key: 'JFRBZ-Z7PWP-JIXDQ-VMCRI-7NORT-CZFPX'
					},
					success(res) {
						console.log(res)
						_that.address.title = res.data.result.title;
						_that.address.latitude = res.data.result.location.lat;
						_that.address.longitude = res.data.result.location.lng;
						_that.markers.unshift(_that.address)
					},
					fail(err) {
						console.log(err)
					}
				})
			},
			// 周边配套
			async gitSurr(address) {
				uni.showLoading({
					mask:true,
				})
				let _that = this;
				await uni.request({
					url: 'https://apis.map.qq.com/ws/place/v1/search',
					data: {
						keyword: address,
						boundary: `nearby(${_that.markers[0].latitude},${_that.markers[0].longitude},500,0)`,
						key: 'JFRBZ-Z7PWP-JIXDQ-VMCRI-7NORT-CZFPX',
					},
					success(res) {
						uni.hideLoading()
						let result = res.data.data
						let arr = [];
						result.forEach((item) => {
							arr.push({
								iconPath: "../../static/images/dingwei.png",
								id: item.id,
								title: item.title,
								latitude: item.location.lat,
								longitude: item.location.lng,
								width: 30,
								height: 30,
								distance: item._distance,
								category: item.category,
							})
						})
						arr.unshift(_that.address);
						if(arr.length<2){
							uni.showToast({
							    title: '2公里内没有设施',
							    duration: 2000,
								icon:"none"
							});
						}
						_that.markers = arr;
						
					},
					fail(err) {
						console.log(err)
					}
				})
			}
		}
	}
</script>
<style>
	page {
		width: 100%;
		height: 100%;
	}
</style>
<style scoped lang="scss">
	.wrap {
		position: relative;
		width: 100%;
		height: 100%;

		map {
			width: 100%;
			height: 100%;
		}

		.menu {
			position: absolute;
			bottom: 0;
			width: 100%;
			background-color: #fff;
			color: #000;

			.tags {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.tag {
					height: 100%;
					padding: 20rpx 0;
				}
			}

			// 信息列表
			.info {
				width: 100%;
				height: 400rpx;

				.item {
					width: 100%;
					display: flex;
					align-items: center;
					padding: 20rpx 20rpx;
					box-sizing: border-box;
					border-bottom: 1rpx solid #e6e6e6;

					&:hover {
						background-color: #F1F2F5;
					}

					.left {
						flex: 1;
						display: flex;
						flex-direction: column;
						justify-content: space-between;

						.title {
							font-size: 36rpx;
							font-weight: bold;
						}

						.address {
							padding-top: 10rpx;
							font-size: 30rpx;
							color: #43474d;
						}
					}

					.right {
						font-size: 34rpx;
					}
				}
			}

		}
	}
</style>
