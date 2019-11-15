<template>
  <div>
    <div>
			<h2>news index vue</h2>
			<p>{{$rout.params.newsId}}</p>
			<ul>
				<li><nuxt-link :to="{name: 'index'}">HOME</nuxt-link></li>
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


