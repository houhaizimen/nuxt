<template>
  <div class="content">
    <!-- <div>
      <h2>news index vue</h2>
      <p>{{ $route.params.newsId }}</p>
      <ul>
        <li><nuxt-link :to="{ name: 'index' }">HOME</nuxt-link></li>
        <li>
          <nuxt-link
            :to="{ name: 'news-id', params: { title: 'i am news', id: '123' } }"
            >news123</nuxt-link
          >
        </li>
        <li><a href="/news/jscheng">news-2</a></li>
      </ul>
    </div> -->
    <div class="top">这是头部</div>
    <div class="bottom">
      <div  ref="testChart" class="test-chart"></div>
    </div>
  </div>
</template>
<script>
export default {
  transition: "test",
  data() {
    return {
      mapChart: null
    }
  },
  // created () {
  //   window.addEventListener("resize", this.resizePerformanceFun)
  // },
  mounted () {
    this.setChart()
    // console.log('123456')
  },
  beforeDestroy () {
    window.removeEventListener("resize", this.resizePerformanceFun)
  },
  methods: {
    resizePerformanceFun () {
      if (this.mapChart) {
        this.mapChart.resize()
      }
    },
    setChart () {
      console.log()
      this.mapChart = this.$echarts.init(this.$refs.testChart)
      const colorList = ["#9E87FF", "#73DDFF", "#fe9a8b", "#F56948", "#9E87FF"]
      const option = {
        backgroundColor: "#fff",
        title: {
          text: "数据可视化",
          textStyle: {
            fontSize: 12,
            fontWeight: 400
          },
          left: "center",
          top: "5%"
        },
        legend: {
          icon: "circle",
          top: "5%",
          right: "5%",
          itemWidth: 6,
          itemGap: 20,
          textStyle: {
            color: "#556677"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            label: {
              show: true,
              backgroundColor: "#fff",
              color: "#556677",
              borderColor: "rgba(0,0,0,0)",
              shadowColor: "rgba(0,0,0,0)",
              shadowOffsetY: 0
            },
            lineStyle: {
              width: 0
            }
          },
          backgroundColor: "#fff",
          textStyle: {
            color: "#5c6c7c"
          },
          padding: [10, 10],
          extraCssText: "box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)"
        },
        grid: {
          top: "15%"
        },
        dataZoom:{  // 电脑端允许鼠标缩放， h5端允许手指缩放
            type:'inside'
        },
        xAxis: [
          {
            type: "category",
            data: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"],
            axisLine: {
              lineStyle: {
                color: "#DCE2E8"
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              textStyle: {
                color: "#556677"
              },
              margin: 15
            },
            axisPointer: {
              label: {
                padding: [11, 5, 7],
                backgroundColor: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#fff" // 0% 处的颜色
                    },
                    {
                      offset: 0.9,
                      color: "#fff" // 0% 处的颜色
                    },
                    {
                      offset: 0.9,
                      color: "#33c0cd" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#33c0cd" // 100% 处的颜色
                    }
                  ],
                  global: false // 缺省为 false
                }
              }
            },
            boundaryGap: false
          }
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#DCE2E8"
              }
            },
            axisLabel: {
              textStyle: {
                color: "#fff"
              }
            },
            splitLine: {
              show: false
            }
          },
          {
            type: "value",
            position: "right",
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: "#fff"
              },
              formatter: "{value}"
            },
            axisLine: {
              show: false, // 线条不显示
              lineStyle: {
                color: "#DCE2E8"
              }
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "价格1",
            type: "line",
            data: [1000, 2000, 1500, 16000, 600, 3000, 7000],
            symbolSize: 1,
            symbol: "circle",
            smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            lineStyle: {
              width: 5,
              color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0,
                  color: "#9effff"
                },
                {
                  offset: 1,
                  color: "#9E87FF"
                }
              ]),
              shadowColor: "rgba(158,135,255, 0.3)",
              shadowBlur: 10,
              shadowOffsetY: 20
            },
            itemStyle: {
              normal: {
                color: colorList[0],
                borderColor: colorList[0]
              }
            }
          },
          {
            name: "价格2",
            type: "line",
            data: [600, 600, 8500, 1400, 2500, 1600, 10000],
            symbolSize: 1,
            symbol: "circle",
            smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            lineStyle: {
              width: 5,
              color: new this.$echarts.graphic.LinearGradient(1, 1, 0, 0, [
                {
                  offset: 0,
                  color: "#73DD39"
                },
                {
                  offset: 1,
                  color: "#73DDFF"
                }
              ]),
              shadowColor: "rgba(115,221,255, 0.3)",
              shadowBlur: 10,
              shadowOffsetY: 20
            },
            itemStyle: {
              normal: {
                color: colorList[1],
                borderColor: colorList[1]
              }
            }
          },
          {
            name: "数量",
            type: "line",
            data: [15, 1, 17, 14, 50, 16, 11],
            symbolSize: 1,
            yAxisIndex: 1,
            symbol: "circle",
            smooth: true,
            showSymbol: false,
            lineStyle: {
              width: 5,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "#fe9a"
                },
                {
                  offset: 1,
                  color: "#fe9a8b"
                }
              ]),
              shadowColor: "rgba(254,154,139, 0.3)",
              shadowBlur: 10,
              shadowOffsetY: 20
            },
            itemStyle: {
              normal: {
                color: colorList[2],
                borderColor: colorList[2]
              }
            }
          }
        ]
      }
      this.mapChart.setOption(option)
      window.removeEventListener("resize", this.resizePerformanceFun)
      window.addEventListener("resize", this.resizePerformanceFun)
    }
  }
};
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .top{
    width: 100%;
    height: 100px;
    background-color: pink;
    color: #fff;
    font-size: 20px;
    text-align: center;
    line-height: 100px;
  }
  .bottom {
    flex: 1;
    .test-chart{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
