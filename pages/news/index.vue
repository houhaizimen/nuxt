<template>
  <div>
    <div>
			<h2>news index vue</h2>
			<p>{{$route.params.newsId}}</p>
			<ul>
				<li>
				<nuxt-link :to="{name: '/'}">Home</nuxt-link>
			</li>
			<li><a href="/news/123">news-1</a></li>
			<li><nuxt-link to='/news/link'>news-link<news-link></news-link></nuxt-link></li>
			<li><a href="/news/456">news-3</a></li>
			</ul>
    </div>
  </div>
</template>
<script>
export default {
	data () {
		return {}
	}
}
</script>


