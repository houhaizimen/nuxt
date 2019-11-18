<template>
  <div>
    <div>
			<h2>动态路由验证</h2>
			<p>{{$route.params.id}}</p>
			<ul>
				<li><nuxt-link :to="{name: 'index'}">HOME</nuxt-link></li>
			</ul>
    </div>
  </div>
</template>
<script>
export default {
	data () {
		return {
			title: this.$routes.params.title
		}
	},
	head () {
		return {
			title: this.title,
			meta: [
			// 和nuxt.config.json hid 设置一样 能覆盖
				//  content 的内容就是搜索引擎SEO抓取的内容 
				{hid: 'description', name: 'ttt', content: 'this is news page'}
			]
		}
		
	},
	// 校验路由参数
	validate (params) {
		return /^\d+$/.test(params.id)
	}
}
</script>


