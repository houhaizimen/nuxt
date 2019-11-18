<template>
  <div>
    <p>{{title}}</p>
		<ul>
			<li>姓名：{{info.name}}</li>
			<li>年龄：{{info.age}}</li>
			<li>爱好：{{info.intrest}}</li>
			<li><nuxt-link :to="{name: 'index'}">HOME</nuxt-link></li>
		</ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
	data () {
		return {
			title: '这是asyncData页面'
		}
	},
	async asyncData () {
		// 操作axios
		let {data} = await axios.get('https://api.myjson.com/bins/agod6')
		return {info: data}
	}
}
</script>