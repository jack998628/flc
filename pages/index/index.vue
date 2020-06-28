<template>
	<view>
		<!-- 搜索组件 -->
		<Search></Search>
		<!-- 轮播 -->
		<view class="s_wrap">
			<swiper class="swiper" indicator-dots indicator-active-color="#52B4B3" autoplay interval="2000">
				<swiper-item>
					<image class="image" lazy-load src="https://image1.ljcdn.com/newhcms/php1LbXq21589878284.jpeg.1005x504.jpg"></image>
				</swiper-item>
				<swiper-item>
					<image class="image" lazy-load src="https://image1.ljcdn.com/newhcms/phpm7EPMN1592186202.jpeg.1005x504.jpg"></image>
				</swiper-item>
				<swiper-item>
					<image class="image" lazy-load src="https://image1.ljcdn.com/newhcms/phpZQ8t3A1592552776.jpeg.1005x504.jpg"></image>
				</swiper-item>
			</swiper>
		</view>


		<!-- 菜单导航 -->
		<view class="m_wrap">
			<view class="menu">
				<view class="item">
					<image lazy-load src="https://image1.ljcdn.com/newhcms/phpvPsrYR1572848986.png.84x75.png" mode="widthFix"></image>
					<text>好盘推荐</text>
				</view>
				<view class="item">
					<image lazy-load src="https://image1.ljcdn.com/newhcms/phptyuWJd1572849165.png.84x75.png" mode="widthFix"></image>
					<text>优惠楼盘</text>
				</view>
				<view class="item">
					<image lazy-load src="https://image1.ljcdn.com/newhcms/phpK4JP1U1572849184.png.84x75.png" mode="widthFix"></image>
					<text>团购活动</text>
				</view>
				<view class="item">
					<image lazy-load src="https://image1.ljcdn.com/newhcms/phpK0cszK1572849200.png.84x75.png" mode="widthFix"></image>
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

			<!-- 轮播指示器 -->
			<view :class="['left',  Leftactive? 'disabled' : '']" @tap="left">
				<text class="icon iconfont iconxiangzuo"> </text>
			</view>
			<view :class="['right',  Rightactive? 'disabled' : '']" @tap="right">
				<text class="icon iconfont iconyou1"> </text>
			</view>

			<view class="title">
				<text>优惠楼盘</text>
				<text class="icon iconfont icongengduo1"></text>
			</view>

			<!-- 优惠楼盘轮播 -->
			<view class="y_swiper">
				<swiper @change="change" :autoplay="true" :current="current" :interval="5000" :duration="500">
					<swiper-item>
						<view class="image">
							<image src="https://ke-image.ljcdn.com/hdic-resblock/04044b4a-0ca5-4fe0-9408-c840f39300e6.jpg!m_fill,w_750,h_562,l_fbk"></image>
							<view class="num">
								<uniIcons type="sound" size="15" color="#F0AD4E"> </uniIcons>
								<text>特价房剩余：13套</text>
							</view>
							<view class="Countdown">
								<text>仅剩:</text>
								<Dataformat :Countdown="Countdown"></Dataformat>
							</view>
						</view>
						<!-- 介绍 -->
						<view class="info">
							<view class="top">
								<text class="title">
									中海上贤府邸
								</text>
								<text class="price">
									22500元/㎡
								</text>
							</view>
							<view class="tags">
								<view class="tag">
									在售
								</view>
								<view class="tag">
									学区房
								</view>
								<view class="tag">
									学区房
								</view>
								<view class="tag">
									学区房
								</view>
							</view>
							<!-- 房屋地址 -->
							<view class="address">
								高新区 竹园路12号 | 建面127-150/㎡
							</view>
						</view>
					</swiper-item>

					<swiper-item>
						<view class="image">
							<image src="https://ke-image.ljcdn.com/hdic-resblock/04044b4a-0ca5-4fe0-9408-c840f39300e6.jpg!m_fill,w_750,h_562,l_fbk"></image>
							<view class="num">
								<uniIcons type="sound" size="15" color="#F0AD4E"> </uniIcons>
								<text>特价房剩余：13套</text>
							</view>
							<view class="Countdown">
								<text>仅剩:</text>
								<Dataformat :Countdown="Countdown"></Dataformat>
							</view>
						</view>
						<!-- 介绍 -->
						<view class="info">
							<view class="top">
								<text class="title">
									中海上贤府邸
								</text>
								<text class="price">
									22500元/㎡
								</text>
							</view>
							<view class="tags">
								<view class="tag">
									在售
								</view>
								<view class="tag">
									学区房
								</view>
								<view class="tag">
									学区房
								</view>
								<view class="tag">
									学区房
								</view>
							</view>
							<!-- 房屋地址 -->
							<view class="address">
								高新区 竹园路12号 | 建面127-150/㎡
							</view>
						</view>
					</swiper-item>

					<swiper-item>
						<view class="image">
							<image src="https://ke-image.ljcdn.com/hdic-resblock/04044b4a-0ca5-4fe0-9408-c840f39300e6.jpg!m_fill,w_750,h_562,l_fbk"></image>
							<view class="num">
								<uniIcons type="sound" size="15" color="#F0AD4E"> </uniIcons>
								<text>特价房剩余：13套</text>
							</view>
							<view class="Countdown">
								<text>仅剩:</text>
								<Dataformat :Countdown="Countdown"></Dataformat>
							</view>
						</view>
						<!-- 介绍 -->
						<view class="info">
							<view class="top">
								<text class="title">
									中海上贤府邸
								</text>
								<text class="price">
									22500元/㎡
								</text>
							</view>
							<view class="tags">
								<view class="tag">
									在售
								</view>
								<view class="tag">
									学区房
								</view>
								<view class="tag">
									学区房
								</view>
								<view class="tag">
									学区房
								</view>
							</view>
							<!-- 房屋地址 -->
							<view class="address">
								高新区 竹园路12号 | 建面127-150/㎡
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>

		<!-- 推荐列表 -->
		<view class="r_wrap">
			<view class="title">
				<view class="left">团购优惠</view>
				<text class="icon iconfont icongengduo1"></text>
			</view>

			<!-- 团购列表 -->
			<view class="list">
				<view class="item">
					<view class="content">
						<view class="image">
							<image src="https://ke-image.ljcdn.com/newhouse-user-image/2b9ce7b18bda2ce5f7b5630687927040.jpg.315x240.jpg"
							 mode="widthFix"></image>
						</view>
						<view class="info">
							<view class="title">
								中海上贤府邸
							</view>
							<view class="tags">
								<view class="tag">
									在售
								</view>
								<view class="tag">
									学区房
								</view>
								<view class="tag">
									学区房
								</view>
								<view class="tag">
									学区房
								</view>
							</view>

							<view class="price">
								22500元/㎡
							</view>

							<!-- 房屋地址 -->
							<view class="address">
								高新区 竹园路12号 | 建面127-150/㎡
							</view>
						</view>
					</view>
					<view class="buttom">
						<view class="left">
							<text class="yh">成团优惠：</text>
							<text class="tg">1万抵3万/5人成团</text>
						</view>
						<view class="right">
							<text>仅剩:</text>
							<Dataformat :Countdown="Countdown"></Dataformat>
						</view>
					</view>
				</view>



				<view class="item">
					<view class="content">
						<view class="image">
							<image src="https://ke-image.ljcdn.com/newhouse-user-image/2b9ce7b18bda2ce5f7b5630687927040.jpg.315x240.jpg"
							 mode="widthFix"></image>
							<view class="tag disabled">
								已结束
							</view>
						</view>
						<view class="info">
							<view class="title">
								中海上贤府邸
							</view>
							<view class="tags">
								<view class="tag">
									在售
								</view>
								<view class="tag">
									学区房
								</view>
								<view class="tag">
									学区房
								</view>
								<view class="tag">
									学区房
								</view>
							</view>

							<view class="price">
								22500元/㎡
							</view>

							<!-- 房屋地址 -->
							<view class="address">
								高新区 竹园路12号 | 建面127-150/㎡
							</view>
						</view>
					</view>
					<view class="buttom">
						<view class="left">
							<text class="yh">成团优惠：</text>
							<text class="tg">1万抵3万/5人成团</text>
						</view>
						<view class="right">
							<text>仅剩:</text>
							<Dataformat :Countdown="Countdown"></Dataformat>
						</view>
					</view>
				</view>



				<view class="item">
					<view class="content">
						<view class="image">
							<image src="https://ke-image.ljcdn.com/newhouse-user-image/2b9ce7b18bda2ce5f7b5630687927040.jpg.315x240.jpg"
							 mode="widthFix"></image>
							<view class="tag out">
								已售罄
							</view>
						</view>
						<view class="info">
							<view class="title">
								中海上贤府邸
							</view>
							<view class="tags">
								<view class="tag">
									在售
								</view>
								<view class="tag">
									学区房
								</view>
								<view class="tag">
									学区房
								</view>
								<view class="tag">
									学区房
								</view>
							</view>

							<view class="price">
								22500元/㎡
							</view>

							<!-- 房屋地址 -->
							<view class="address">
								高新区 竹园路12号 | 建面127-150/㎡
							</view>
						</view>
					</view>
					<view class="buttom">
						<view class="left">
							<text class="yh">成团优惠：</text>
							<text class="tg">1万抵3万/5人成团</text>
						</view>
						<view class="right">
							<text>仅剩:</text>
							<Dataformat :Countdown="Countdown"></Dataformat>
						</view>
					</view>
				</view>
			</view>
		</view>



	</view>
</template>

<script>
	//引入搜索组件
	import Search from '../../components/search/index.vue';
	// 引入倒计时组件
	import Dataformat from '../../components/dataformat/index.vue';
	// 引入字体图标
	import uniIcons from "../../components/uni-icons/uni-icons.vue";
	// 引入字体图标库
	import '../../static/font_1895569_k7ithb23iil/iconfont.css'
	export default {
		data() {
			return {
				current: 0,
				Rightactive: false,
				Leftactive: false,
				//活动倒计时
				Countdown: [
					"2020-7-10 12:00:00",
				],
			}
		},
		onLoad() {

		},
		components: {
			Search,
			Dataformat,
			uniIcons
		},
		methods: {

			// 点击轮播
			right() {
				if (this.current < 2) {
					this.current++;
				} else {
					this.Rightactive = true;
					return
				}
			},
			left() {
				if (this.current > 0) {
					this.Rightactive = false;
					this.current--;
				} else {
					this.Leftactive = true;
					return
				}
			},
			// 轮播下标改变时
			change() {
				if (this.current > 0) {
					this.Rightactive = false;
				} else if (this.current < 2) {
					this.Leftactive = false;
				}
			},
		}
	}
</script>

<style scoped lang="scss">
	// 轮播容器
	.s_wrap {
		padding: 0 20rpx;
		box-sizing: border-box;
		width: 100%;
		height: 250rpx;


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
		box-sizing: none;
		background-color: #fff;

		.menu {
			padding: 30rpx 0;
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
	.title {
		margin-top: 20rpx;
		box-sizing: border-box;
		padding: 0 20rpx;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.news {
			font-size: 36rpx;
			font-weight: bold;
			color: #FC834D;
		}

		.contant {
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
	.y_wrap {
		position: relative;
		width: 100%;
		background-color: #fff;
		border-radius: 20rpx;

		// 轮播指示器
		.left {
			position: absolute;
			display: flex;
			align-items: center;
			justify-content: center;
			z-index: 999;
			width: 80rpx;
			height: 80rpx;
			border-radius: 50%;
			top: 40%;
			left: 36rpx;
			margin-top: -40rpx;
			background-color: #B2F3F4;
			color: #fff;

			.icon {
				font-size: 50rpx;
			}
		}

		.disabled {
			background-color: #D0D9E0 !important;
		}

		.right {
			position: absolute;
			display: flex;
			align-items: center;
			justify-content: center;
			z-index: 999;
			width: 80rpx;
			height: 80rpx;
			border-radius: 50%;
			top: 40%;
			right: 36rpx;
			margin-top: -40rpx;
			background-color: #B2F3F4;
			color: #fff;

			.icon {
				font-size: 50rpx;
			}
		}

		// 优惠楼盘标题
		.title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 34rpx;
			font-weight: bold;
			padding: 20rpx 20rpx;
			box-sizing: border-box;

			.icon {
				font-size: 40rpx;
				color: #ccc;
			}
		}

		// 优惠优盘轮播
		.y_swiper {
			width: 80%;
			margin: 0 auto;

			swiper {
				width: 100%;
				height: 590rpx;

				swiper-item {
					display: flex;
					flex-direction: column;
					width: 100%;
					height: 100%;
					border-radius: 20rpx;

					.image {
						position: relative;
						width: 100%;
						height: 400rpx;

						image {
							width: 100%;
							height: 100%;
						}

						.num {
							position: absolute;
							display: flex;
							align-items: center;
							left: 0;
							bottom: 0;
							width: 100%;
							background-color: #EFF9FB;
							font-size: 30rpx;
							color: #F0AD4E;
							padding: 5rpx 0 5rpx 20rpx;

							text {
								padding-left: 10rpx;
							}
						}

						.Countdown {
							position: absolute;
							display: flex;
							align-items: center;
							right: 0;
							top: 20rpx;
							padding: 15rpx;
							background-color: #EBF5FA;

							text {
								padding-right: 10rpx;
								color: #92AEC5;
								font-size: 30rpx;
							}
						}
					}


					// 房屋信息
					.info {
						flex: 1;
						width: 100%;
						display: flex;
						flex-direction: column;
						justify-content: space-between;

						.top {
							display: flex;
							justify-content: space-between;
							align-items: center;

							.title {
								font-size: 36rpx;
								font-weight: 700;
								margin: 0;
								padding: 0;
							}

							.price {
								padding-top: 20rpx;
								width: 50%;
								font-size: 34rpx;
								color: #FA4F37;
								font-weight: 700;
							}
						}

						.tags {
							display: flex;
							padding: 10rpx 0rpx;

							.tag {
								font-size: 30rpx;
								background-color: #F2F6FF;
								color: #8FA8C3;
								padding: 5rpx 10rpx;

								&:nth-child(n+2) {
									margin-left: 10rpx;
								}

								&:first-child {
									background-color: #52B4B5;
									color: #fff;
								}
							}
						}

						.address {
							font-size: 34rpx;
							color: #9A9C9B;
							padding-bottom: 20rpx;
						}
					}
				}
			}
		}
	}


	// 推荐列表
	.r_wrap {
		padding: 0 20rpx;
		background-color: #fff;
		box-sizing: border-box;
		border-radius: 20rpx;

		.title {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 10rpx 0;

			.left {
				font-size: 34rpx;
			}

			.icon {
				font-size: 40rpx;
				color: #ccc;
			}
		}


		// 团购列表
		.list {
			width: 100%;

			.item {
				padding: 30rpx 0;
				border-bottom: 1px solid #ccc;
				width: 100%;
                &:last-child{
					border: none;
				}
				.content {
					width: 100%;
					display: flex;
					justify-content: space-between;


					.image {
						position: relative;
						width: 30%;

						image {
							width: 100%;
							height: 100%;
						}

						.tag {
							position: absolute;
							font-size: 34rpx;
							top: 10rpx;
							left: 0;
							color: #fff;
							padding: 5rpx 10rpx;
						}

						.disabled {
							background-color: #D3D6DB;
							border-radius: 0 10rpx 10rpx 0;
						}

						.out {
							background-color: #F9523C;
							border-radius: 0 10rpx 10rpx 0;
						}
					}

					.info {
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						flex: 1;
						padding-left: 20rpx;

						.title {
							margin: 0;
							padding: 0;
							padding-bottom: 10rpx;
							font-size: 36rpx;
							font-weight: 700;
						}

						.tags {
							padding-bottom: 10rpx;
							display: flex;


							.tag {
								font-size: 30rpx;
								background-color: #F2F6FF;
								color: #8FA8C3;
								padding: 5rpx 10rpx;

								&:nth-child(n+2) {
									margin-left: 10rpx;
								}

								&:first-child {
									background-color: #52B4B5;
									color: #fff;
								}
							}
						}

						.price {
							padding-bottom: 10rpx;
							font-size: 34rpx;
							color: #FA4F37;
							font-weight: 700;
						}

						.address {
							font-size: 30rpx;
							color: #9A9C9B;
						}
					}
				}

				.buttom {
					display: flex;
					justify-content: space-between;
					align-items: center;
					width: 100%;
					margin-top: 20rpx;
					padding: 15rpx 0;
					background-color: #F6FAFD;

					.left {
						.yh {
							font-size: 30rpx;
							color: #5D85A8;
						}

						.tg {
							font-size: 34rpx;
							color: #FA4F37;
						}
					}

					.right {
						display: flex;
						align-items: center;
						color: #5D85A8;
						font-size: 30rpx;
					}
				}
			}
		}
	}
</style>
