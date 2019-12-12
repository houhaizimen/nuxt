<template>
	<div class="echarts">
		<div class="left"></div>
		<div class="middle"></div>
		<div class="right">
			<div class="kuang" ref='man'>
				<span class="iconfont icon-man"></span>
			</div>
			<div class="kuang" ref='woman'>
				<span class="iconfont icon-woman"></span>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Echarts',
	data () {
		return {}
	},
	mounted () {
		let data = [
			{value: 335, name: '10-15'},
			{value: 123, name: '16-20'},
			{value: 234, name: '20-25'},
			{value: 345, name: '26-30'},
			{value: 22, name: '30-35'}
		]
		this.setPieChart('男生年龄分布图', this.$refs.man, data)
		this.setPieChart('女生年龄分布图', this.$refs.woman, data)
	},
	methods:{
		setPieChart (name, dom, data) { // 饼状图
			console.warn(dom)
			let mychart = this.$echarts.init(dom)
			let styleIcon = {
				fontStyle: 'iconfont icon-man'
			}
			let option = {
				title: {
					text: name,
					show: true,
					top: 20,
					textStyle: {
						color: 'rgb(69,131,151)',
						fontSize: 15
					}
				},
				// 设置鼠标悬浮的提示
				tooltip: {
					trigger: 'item',
					formatter: "{a} <br/>{b}: {c} ({d}%)",
					textStyle: {
						fontSize: 12
					}
				},
				// 统计颜色说明
				legend: {
					type: 'scroll',
					orient: 'vertical',
					show: true,
					align: 'left',
					x: 'left',
					top: 60,
					textStyle: {
						fontSize: 10
					}
				},
				series: [
					{
						center: ['70%', '50%'],
						cursor: 'pointer',
						name: name,
						type: 'pie',
						// 第一个参数代表内圈半径
						// 第二个参数代表外圈半径
						radius: ['44%', '56%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: false,
								position: 'center',
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '14',
									fontWeight: '400',
									fontStyle: ''
								}
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						data: data
					}
				]
			}
			mychart.setOption(option)
		}
	}
}
</script>
<style lang="scss" scoped>
	.echarts{
		width: 100%;
		height: 100%;
		background-color:rgb(2,9,19);
		display: flex;
		.left{
			width: 300px;
			height: 100%;
			// background-color: pink;
			border: 1px solid blue;
		}
		.middle{
			width: calc(100% - 600px);
			height: 100%;
			// background-color: green;
			border: 1px solid blue;
		}
		.right{
			width: 300px;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			padding: 0 10px;
			align-items: center;
			// background-color: rgb(5,18,89);
			.kuang{
				width: 260px;
				height: 260px;
				background: linear-gradient(to bottom left, #0c1f82, #090b17);
				border-radius:4px;
				transition: all 0.5s;
				margin-top: 10px;
				box-sizing: border-box;
				transition: all .5s;
			}
			.icon-man, .icon-woman{
				// font-icon-man,size: 12px !important;
				position: absolute !important;
				z-index: 999999  !important;
			}
			.kuang:hover{
				margin:0;
				box-shadow: 14px 14px 8px #1d1d34;
			}
		}
	}
</style>