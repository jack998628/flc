<template>
	<view class="wrap">
		<view class="animate">
			<view class="tag"></view>
			<view class="tag"></view>
			<view class="tag"></view>
			<view class="tag"></view>
			<view class="tag"></view>
			<view class="tag"></view>
			<view class="tag"></view>
			<view class="tag"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="scss">
	.wrap {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #fff;
		z-index: 99;
		display: flex;
		justify-content: center;
		align-items: center;

		.animate {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;

			.tag {
				position: absolute;
				width: 30rpx;
				height: 30rpx;
				background-color: #4CD964;
				border-radius: 20rpx;

				&:nth-child(1) {
					top: 50rpx;
					left: 0;
					animation: ball-spin-fade-loader 1s 0s infinite linear;
				}

				&:nth-child(2) {
					top: 34rpx;
					left: 34rpx;
					animation: ball-spin-fade-loader 1s 0.12s infinite linear;
				}

				&:nth-child(3) {
					top: 0;
					left: 50rpx;
					animation: ball-spin-fade-loader 1s 0.24s infinite linear;
				}

				&:nth-child(4) {
					top: -34rpx;
					left: 34rpx;
					animation: ball-spin-fade-loader 1s 0.36s infinite linear;
				}

				&:nth-child(5) {
					top: -50rpx;
					left: 0;
					animation: ball-spin-fade-loader 1s 0.48s infinite linear;
				}

				&:nth-child(6) {
					top: -34rpx;
					left: -34rpx;
					animation: ball-spin-fade-loader 1s 0.6s infinite linear;
				}

				&:nth-child(7) {
					top: 0;
					left: -50rpx;
					animation: ball-spin-fade-loader 1s 0.72s infinite linear;
				}

				&:nth-child(8) {
					top: 34rpx;
					left: -34rpx;
					animation: ball-spin-fade-loader 1s 0.84s infinite linear;
				}
			}
		}
	}

	@keyframes ball-spin-fade-loader {
		50% {
			opacity: 0.3;
			-webkit-transform: scale(0.3);
			transform: scale(0.3);
		}

		100% {
			opacity: 1;
			-webkit-transform: scale(1);
			transform: scale(1);
		}
	}

	// .animate,
	// .animate::before,
	// .animate::after {

	// 	position: absolute;

	// 	top: 0;

	// 	bottom: 0;

	// 	left: 0;

	// 	right: 0;

	// }

	// .animate {
	// 	margin: auto;
	// 	width: 200rpx;
	// 	height: 200rpx;
	// 	background: url(../../static/images/1234.png);
	// 	background-repeat: no-repeat;
	// 	background-size: 100%;
	// 	// background-position: -50rpx 0 0 0;
	// 	bo
	//         image{
	// 		 width: 100%;
	// 		 height: 100%;
	// 	 }
	// 	&::before,
	// 	&::after {

	// 		content: '';

	// 		z-index: 10;
	// 		color: palegreen;
	// 		/* margin: -5%; */

	// 		box-shadow: inset 0 0 0 4rpx;

	// 		animation: clipMe 2.5s linear infinite;

	// 	}

	// 	&::before {
	// 		 color: paleturquoise;
	// 		animation-delay: -4s;
	// 	}
	// 	&::after{
	// 		  color: palegreen;
	// 	}
	// }


	// @keyframes clipMe {

	// 	0%,
	// 	100% {

	// 		clip: rect(0px, 220.0px, 2px, 0px);

	// 	}

	// 	25% {

	// 		clip: rect(0px, 2px, 220.0px, 0px);

	// 	}

	// 	50% {

	// 		clip: rect(218.0px, 220.0px, 220.0px, 0px);

	// 	}

	// 	75% {

	// 		clip: rect(0px, 220.0px, 220.0px, 218.0px);

	// 	}

	// }


	// *,

	// *::before,

	// *::after {

	// 	box-sizing: border-box;

	// }
</style>
