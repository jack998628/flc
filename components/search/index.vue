<template>
	<view>
		<view class="nav_wrap">
			{{title}}
		</view>
		<button type="default" @click="push">查看</button>
	</view>
</template>

<script>
	export default {
		props: ['title'],
		data() {
			return {

			}
		},
		methods: {
			push() {
				this.$emit("getCity", this.title)
			},
		},
	}
</script>

<style scoped lang="scss">

</style>
