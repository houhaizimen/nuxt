<template>
  <div class="about">
		<div class="about-top">
			<div class="bg-img" ref='bgImg'>
				<div class="top">
					<div>jsCheng</div>
					<div class="list">
					<ul>
							<li><nuxt-link :to="{name: 'index'}">HOME</nuxt-link></li>
							<li><nuxt-link :to="{name: 'about'}">JOIN OUR</nuxt-link></li>
							<li><nuxt-link :to="{name: 'news', params: {newsId: '1234'}}">NEWS</nuxt-link></li>
							<li><nuxt-link :to="{name: 'asyncData'}">asyncData</nuxt-link></li>
						</ul>
					</div>
				</div>
				<div class="bottom">
					未曾谋面的人也终将会相遇-FOOTPRINT
				</div>
			</div>
		</div>
		<echarts class="aboout-bottom"></echarts>
  </div>
</template>
<script>
import echarts from '@/components/echarts.vue'
export default {
	data () {
		return {
			title: 'visitor footprint'
		}
	},
	// 注册组件
	components: {
		echarts
	},
	// 设置头部信息
	head () {
		return {
			title: this.title,
			meta: [
				{hid: 'description', name: 'welcome', content: 'user footer'}
			]
		}
	}
}
</script>
<style lang="scss">
.about{
	position: absolute;
	width: 100%;
	height: 100%;
	top:0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	&-top{
		.bg-img{
			background-image: url('~static/bgImg2.svg');
		}
	}
	&-bottom{
		flex:1;
	}
}
</style>
