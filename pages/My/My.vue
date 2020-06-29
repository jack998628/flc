<template>
	<view class="wrap">
		<view class="image">
			<image src="https://ke-image.ljcdn.com/newhouse-user-image/589a1fdbdc4d0708cd06c1883806547a.jpg!m_fill,w_750,h_562,l_fbk" mode="widthFix"></image>
		<view @tap="gitLocation(item.title)" v-for="item in List" :key="item.x" :style="{'position':'absolute','top':item.y+'%','left':item.x+'%','padding':'5rpx 5rpx','background-color':'pink'}">
			{{item.title}}
		</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				List:[
					{
						x:50.3,
						y:63.3,
						title:"1#"
					},
					{
						x:45.625,
						y:72.983568270915,
						title:"2#"
					},
					{
						x:40,
						y:62.9,
						title:"3#"
					}
				]
			}
		},
		onLoad() {
			
		},
		methods:{
			gitLocation(key){
				console.log(key.replace('#',''))
			}
		}
	}
</script>

<style scoped lang="scss">
	.wrap{
		width: 100%;
		.image{
			position: relative;
			width: 100%;
			image{
				width: 100%;
			}
		}
	}
	
</style>
