import Vue from 'vue'
import echarts from 'echarts' // 引入echarts
import china from 'echarts/map/json/china.json'
echarts.registerMap('china', china)
Vue.prototype.$echarts = echarts // 引入组件（将echarts注册为全局）