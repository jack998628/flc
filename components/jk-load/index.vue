<template>
	<view class="wrap">
		<view class="animate">
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
	.animate {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		margin: auto;
		display: flex;
		width: 50%;
		justify-content: center;
		align-items: center;

		.tag {
			width: 20rpx;
			background-color: #4CD964;
            margin: 0 10rpx;
			&:nth-child(1) {
				animation: load 1s 0s infinite linear;
			}

			&:nth-child(2) {
				animation: load 1s 0.2s infinite linear;
			}

			&:nth-child(3) {
				animation: load 1s 0.4s infinite linear;
			}

			&:nth-child(4) {
				animation: load 1s 0.6s infinite linear;
			}

			&:nth-child(5) {
				animation: load 1s 0.8s infinite linear;
			}
		}
	}
	@keyframes load {
		0% {
		 height: 0;
		}
		 50% {
		 height: 120rpx;
		}
		 100% {
		 height: 0;
		}
	}
</style>
