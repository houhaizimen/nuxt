<template>
	<div class="echarts">
		<div class="left"></div>
		<div class="middle" ref='map'></div>
		<div class="right">
			<div class="kuang" ref='man'>
			</div>
			<div class="kuang" ref='woman'>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Echarts',
	data () {
		return {
			geoCoordMap: {
				'台湾': [121.5135, 25.0308],
				'黑龙江': [127.9688, 45.368],
				'内蒙古': [110.3467, 41.4899],
				"吉林": [125.8154, 44.2584],
				'北京市': [116.4551, 40.2539],
				"辽宁": [123.1238, 42.1216],
				"河北": [114.4995, 38.1006],
				"天津": [117.4219, 39.4189],
				"山西": [112.3352, 37.9413],
				"陕西": [109.1162, 34.2004],
				"甘肃": [103.5901, 36.3043],
				"宁夏": [106.3586, 38.1775],
				"青海": [101.4038, 36.8207],
				"新疆": [87.9236, 43.5883],
				"西藏": [91.11, 29.97],
				"四川": [103.9526, 30.7617],
				"重庆": [108.384366, 30.439702],
				"山东": [117.1582, 36.8701],
				"河南": [113.4668, 34.6234],
				"江苏": [118.8062, 31.9208],
				"安徽": [117.29, 32.0581],
				"湖北": [114.3896, 30.6628],
				"浙江": [119.5313, 29.8773],
				"福建": [119.4543, 25.9222],
				"江西": [116.0046, 28.6633],
				"湖南": [113.0823, 28.2568],
				"贵州": [106.6992, 26.7682],
				"云南": [102.9199, 25.4663],
				"广东": [113.12244, 23.009505],
				"广西": [108.479, 23.1152],
				"海南": [110.3893, 19.8516],
				'上海': [121.4648, 31.2891],
			},
			geoGpsMap: {
				'1': [127.9688, 45.368],
				'2': [116.4551, 40.2539],
				'3': [109.1162, 34.2004],
				'4': [113.12244, 23.009505],
				'5': [87.9236, 43.5883],
				'6': [91.11, 29.97],
			},
			colors: [
				["#1DE9B6", "#F46E36", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],
				["#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA"],
				["#DD6B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42"],
			],
			mapData: [
				[],
				[],
				[],
				[],
				[],
				[]
			]
		}
	},
	mounted () {
		let data = [
			{value: 335, name: '10-15'},
			{value: 123, name: '16-20'},
			{value: 234, name: '20-25'},
			{value: 345, name: '26-30'},
			{value: 22, name: '30-35'}
		]
		this.setMapChart()
		this.setPieChart('男生年龄分布图', this.$refs.man, data, '/woman.png')
		this.setPieChart('女生年龄分布图', this.$refs.woman, data, '/man.png')
	},
	methods:{
		setMapChart () {
			let mapChart = this.$echarts.init(this.$refs.map)
			let option = {
				backgroundColor: 'rgb(14,16,15)',
				// canvas宽高
				grid: {
					width: '100%',
					height: '100%'
				},
				title: {
					text: '访问人口分布图',
					show: true,
					testStyle: {
						color: 'blue',
						fontSize: 20
					}
				},
				// 小工具展示
				toolbox: {
					show: true,
					orient: 'horizontal',
					left: 'right',
					iconStyle: {
						borderColor: '#fff'
					},
					// 自定义配置项
					feature: {},
					z: 100
				},
				// 配置小工具
				brush: {
					geoIndex: 0,
					brushLink: 'all',
					inBrush: {
						opacity: 1,
						symbolSize: 14
					},
					outOfBrush: {
						color: '#000',
						opacity: 0.2
					},
					z: 10
				},
				geo: {
					show: true,
					map: 'china',
					slient: true,
					
				}
			}
			mapChart.setOption(option)
		},
		setPieChart (name, dom, data, imageUrl) { // 饼状图
			let mychart = this.$echarts.init(dom)
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
				// canvas设置图标等
				graphic: {
					elements: [{
						type: 'image',
						style: {
							image: imageUrl,
							width: 40,
							height: 40
						},
						left: '62%',
						top: '40%'
					}]
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
			.kuang:hover{
				margin:0;
				box-shadow: 14px 14px 8px #1d1d34;
			}
		}
	}
</style>