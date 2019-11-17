<template>
  <div>
    <div>
			<h2>news index vue</h2>
			<p>{{$route.params.newsId}}</p>
			<ul>
				<li><nuxt-link :to="{name: 'index'}">HOME</nuxt-link></li>
				<li><nuxt-link :to="{name: 'news-id', params: {title: 'i am news', id: '123'}}">news123</nuxt-link></li>
				<li><a href='/news/jscheng'>news-2</a></li>
			</ul>
    </div>
  </div>
</template>
<script>
export default {
	transition: 'test',
	data () {
		return {}
	}
}
</script>


