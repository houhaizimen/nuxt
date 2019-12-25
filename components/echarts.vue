<template>
  <div class="echarts">
    <div class="left">
      <div class="content top"
           ref="top10"></div>
      <div class="content bottom"
           ref="today"></div>
    </div>
    <div class="middle"
         ref="map">
      <div class="angle left"></div>
      <div class="angle right"></div>
      <div class="angle b-l"></div>
      <div class="angle b-r"></div>
    </div>
    <div class="right">
      <div class="kuang"
           ref="man"></div>
      <div class="kuang"
           ref="woman"></div>
    </div>
  </div>
</template>
<script>
import constant from "../utils/constant";
export default {
  name: "Echarts",
  data () {
    return {
      // 谷歌地图
      geoCoordMap: {
        新疆玛纳斯基地: [86.22, 44.3],
        九江: [116.0, 29.7],
        新乡: [116.402217, 35.311657],
        " ": [79.92, 37.12],
        "  ": [86.85, 47.7],
        若羌县: [88.17, 39.02],
        上海: [121.4648, 31.2891],
        东莞: [113.8953, 22.901],
        东营: [118.7073, 37.5513],
        中山: [113.4229, 22.478],
        临汾: [111.4783, 36.1615],
        临沂: [118.3118, 35.2936],
        丹东: [124.541, 40.4242],
        丽水: [119.5642, 28.1854],
        乌鲁木齐: [87.9236, 43.5883],
        佛山: [112.8955, 23.1097],
        保定: [115.0488, 39.0948],
        兰州: [103.5901, 36.3043],
        包头: [110.3467, 41.4899],
        北京: [116.4551, 40.2539],
        北海: [109.314, 21.6211],
        南京: [118.8062, 31.9208],
        南宁: [108.479, 23.1152],
        南昌: [116.0046, 28.6633],
        南通: [121.1023, 32.1625],
        厦门: [118.1689, 24.6478],
        台州: [121.1353, 28.6688],
        合肥: [117.29, 32.0581],
        呼和浩特: [111.4124, 40.4901],
        咸阳: [108.4131, 34.8706],
        哈尔滨: [127.9688, 45.368],
        唐山: [118.4766, 39.6826],
        嘉兴: [120.9155, 30.6354],
        大同: [113.7854, 39.8035],
        大连: [122.2229, 39.4409],
        天津: [117.4219, 39.4189],
        太原: [112.3352, 37.9413],
        威海: [121.9482, 37.1393],
        宁波: [121.5967, 29.6466],
        宝鸡: [107.1826, 34.3433],
        宿迁: [118.5535, 33.7775],
        常州: [119.4543, 31.5582],
        广州: [113.5107, 23.2196],
        廊坊: [116.521, 39.0509],
        延安: [109.1052, 36.4252],
        张家口: [115.1477, 40.8527],
        徐州: [117.5208, 34.3268],
        德州: [116.6858, 37.2107],
        惠州: [114.6204, 23.1647],
        成都: [103.9526, 30.7617],
        扬州: [119.4653, 32.8162],
        承德: [117.5757, 41.4075],
        拉萨: [91.1865, 30.1465],
        无锡: [120.3442, 31.5527],
        日照: [119.2786, 35.5023],
        昆明: [102.9199, 25.4663],
        杭州: [119.5313, 29.8773],
        枣庄: [117.323, 34.8926],
        柳州: [109.3799, 24.9774],
        株洲: [113.5327, 27.0319],
        武汉: [114.3896, 30.6628],
        汕头: [117.1692, 23.3405],
        江门: [112.6318, 22.1484],
        沈阳: [123.1238, 42.1216],
        沧州: [116.8286, 38.2104],
        河源: [114.917, 23.9722],
        泉州: [118.3228, 25.1147],
        泰安: [117.0264, 36.0516],
        泰州: [120.0586, 32.5525],
        济南: [117.1582, 36.8701],
        济宁: [116.8286, 35.3375],
        海口: [110.3893, 19.8516],
        淄博: [118.0371, 36.6064],
        淮安: [118.927, 33.4039],
        深圳: [114.5435, 22.5439],
        清远: [112.9175, 24.3292],
        温州: [120.498, 27.8119],
        渭南: [109.7864, 35.0299],
        湖州: [119.8608, 30.7782],
        湘潭: [112.5439, 27.7075],
        滨州: [117.8174, 37.4963],
        潍坊: [119.0918, 36.524],
        烟台: [120.7397, 37.5128],
        玉溪: [101.9312, 23.8898],
        珠海: [113.7305, 22.1155],
        盐城: [120.2234, 33.5577],
        盘锦: [121.9482, 41.0449],
        石家庄: [114.4995, 38.1006],
        福州: [119.4543, 25.9222],
        秦皇岛: [119.2126, 40.0232],
        绍兴: [120.564, 29.7565],
        聊城: [115.9167, 36.4032],
        肇庆: [112.1265, 23.5822],
        舟山: [122.2559, 30.2234],
        苏州: [120.6519, 31.3989],
        莱芜: [117.6526, 36.2714],
        菏泽: [115.6201, 35.2057],
        营口: [122.4316, 40.4297],
        葫芦岛: [120.1575, 40.578],
        衡水: [115.8838, 37.7161],
        衢州: [118.6853, 28.8666],
        西宁: [101.4038, 36.8207],
        西安: [109.1162, 34.2004],
        贵阳: [106.6992, 26.7682],
        连云港: [119.1248, 34.552],
        邢台: [114.8071, 37.2821],
        邯郸: [114.4775, 36.535],
        郑州: [113.4668, 34.6234],
        鄂尔多斯: [108.9734, 39.2487],
        重庆: [107.7539, 30.1904],
        金华: [120.0037, 29.1028],
        铜川: [109.0393, 35.1947],
        银川: [106.3586, 38.1775],
        镇江: [119.4763, 31.9702],
        长春: [125.8154, 44.2584],
        长沙: [113.0823, 28.2568],
        长治: [112.8625, 36.4746],
        阳泉: [113.4778, 38.0951],
        青岛: [120.4651, 36.3373],
        韶关: [113.7964, 24.7028]
      },
      // 北京地区
      BJData: [
        [
          {
            name: "新乡"
          },
          {
            name: "新乡",
            value: 200
          }
        ],
        [
          {
            name: "新乡"
          },
          {
            name: "呼和浩特",
            value: 90
          }
        ],
        [
          {
            name: "新乡"
          },
          {
            name: "哈尔滨",
            value: 90
          }
        ],
        [
          {
            name: "新乡"
          },
          {
            name: "石家庄",
            value: 90
          }
        ],
        [
          {
            name: "新乡"
          },
          {
            name: "昆明",
            value: 30
          }
        ],
        [
          {
            name: "新乡"
          },
          {
            name: "北京",
            value: 100
          }
        ],
        [
          {
            name: "新乡"
          },
          {
            name: "长春",
            value: 40
          }
        ],
        [
          {
            name: "新乡"
          },
          {
            name: "重庆",
            value: 40
          }
        ],
        [
          {
            name: "新乡"
          },
          {
            name: "贵阳",
            value: 50
          }
        ],
        [
          {
            name: "新乡"
          },
          {
            name: "南宁",
            value: 30
          }
        ],
        [
          {
            name: "新乡"
          },
          {
            name: "济南",
            value: 10
          }
        ],
        [
          {
            name: "新乡"
          },
          {
            name: "太原",
            value: 40
          }
        ],
        [
          {
            name: "新乡"
          },
          {
            name: "西安",
            value: 60
          }
        ],
        [
          {
            name: "新乡"
          },
          {
            name: "武汉",
            value: 50
          }
        ],
        [
          {
            name: "新乡"
          },
          {
            name: "合肥",
            value: 40
          }
        ],
        [
          {
            name: "新乡"
          },
          {
            name: "南京",
            value: 30
          }
        ],
        [
          {
            name: "新乡"
          },
          {
            name: "沈阳",
            value: 20
          }
        ],
        [
          {
            name: "新乡"
          },
          {
            name: "成都",
            value: 10
          }
        ]
      ],
      // 深圳地区
      SHData: [
        [
          {
            name: "九江"
          },
          {
            name: "九江",
            value: 200
          }
        ],

        [
          {
            name: "九江"
          },
          {
            name: "长沙",
            value: 95
          }
        ],
        [
          {
            name: "九江"
          },
          {
            name: "武汉",
            value: 30
          }
        ],
        [
          {
            name: "九江"
          },
          {
            name: "南昌",
            value: 20
          }
        ],
        [
          {
            name: "九江"
          },
          {
            name: "合肥",
            value: 70
          }
        ],
        [
          {
            name: "九江"
          },
          {
            name: "南京",
            value: 60
          }
        ],
        [
          {
            name: "九江"
          },
          {
            name: "福州",
            value: 50
          }
        ],
        [
          {
            name: "九江"
          },
          {
            name: "上海",
            value: 100
          }
        ],
        [
          {
            name: "九江"
          },
          {
            name: "深圳",
            value: 100
          }
        ]
      ],
      // 广州地区
      GZData: [
        [
          {
            name: "新疆玛纳斯基地"
          },
          {
            name: "新疆玛纳斯基地",
            value: 200
          }
        ],
        [
          {
            name: "新疆玛纳斯基地"
          },
          {
            name: "  ",
            value: 90
          }
        ],
        [
          {
            name: "新疆玛纳斯基地"
          },
          {
            name: " ",
            value: 40
          }
        ],
        [
          {
            name: "新疆玛纳斯基地"
          },
          {
            name: "呼和浩特",
            value: 90
          }
        ],
        [
          {
            name: "新疆玛纳斯基地"
          },
          {
            name: "昆明",
            value: 40
          }
        ],
        [
          {
            name: "新疆玛纳斯基地"
          },
          {
            name: "成都",
            value: 10
          }
        ],
        [
          {
            name: "新疆玛纳斯基地"
          },
          {
            name: "兰州",
            value: 95
          }
        ],
        [
          {
            name: "新疆玛纳斯基地"
          },
          {
            name: "银川",
            value: 90
          }
        ],
        [
          {
            name: "新疆玛纳斯基地"
          },
          {
            name: "西宁",
            value: 80
          }
        ]
      ],
      series: [],
      color: ["#3ed4ff", "#ffa022", "#a6c84c"],
      planePath:
        "path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705",
      // 地图表
      mapChart: "",
      // 饼状图
      piechart: ""
    };
  },
  mounted () {
    let data = [
      { value: 335, name: "10-15" },
      { value: 123, name: "15-20" },
      { value: 234, name: "20-25" },
      { value: 345, name: "25-30" },
      { value: 22, name: "30-35" }
    ];
    // 获取男生的饼图数据
    this.getManData(1)
    this.getManData(0)
    this.setTopcity() // left top
    this.setToday()
    this.setMapChart()
  },
  beforeDestroy () {
    window.removeEventListener("resize", this.resizePerformanceFun)
  },
  methods: {
    resizePerformanceFun () {
      if (this.mapChart) {
        this.mapChart.resize()
      }
      if (this.piechart) {
        this.piechart.resize()
      }
    },
    setToday () {
      let todayChart = this.$echarts.init(this.$refs.today);
      let option = {
        backgroundColor: "#18163B",
        grid: {
          top: "15%",
          right: "3%",
          left: "5%",
          bottom: "12%"
        },
        xAxis: [
          {
            type: "category",
            color: "#59588D",
            data: [
              "学员续费率",
              "试听课转换率",
              "课程消费率",
              "课后评分率",
              "作业完成率",
              "班级满班率",
              "排课上课率",
              "体验课转化率"
            ],
            axisPointer: {
              type: "line"
            },
            axisLine: {
              lineStyle: {
                color: "#272456"
              }
            },
            axisLabel: {
              margin: 20,
              color: "#59588D",
              textStyle: {
                fontSize: 12
              }
            }
          }
        ],
        yAxis: [
          {
            min: 0,
            max: 100,
            axisLabel: {
              formatter: "{value}%",
              color: "#59588D"
            },
            axisLine: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: "#272456"
              }
            }
          }
        ],
        series: [
          {
            type: "bar",
            data: [100, 90, 10, 90, 90, 20, 56, 89],
            barWidth: "20px",
            itemStyle: {
              normal: {
                color: this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "#41E1D4" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#10A7DB" // 100% 处的颜色
                    }
                  ],
                  false
                ),
                barBorderRadius: [30, 30, 0, 0],
                shadowColor: "rgba(0,255,225,1)",
                shadowBlur: 4
              }
            },
            label: {
              normal: {
                show: true,
                lineHeight: 30,
                width: 80,
                height: 30,
                backgroundColor: "#252453",
                borderRadius: 200,
                position: ["-8", "-60"],
                distance: 1,
                formatter: ["    {d|●}", " {a|{c}%}     \n", "    {b|}"].join(
                  ""
                ),
                rich: {
                  d: {
                    color: "#3CDDCF"
                  },
                  a: {
                    color: "#fff",
                    align: "center"
                  },
                  b: {
                    width: 1,
                    height: 30,
                    borderWidth: 1,
                    borderColor: "#234e6c",
                    align: "left"
                  }
                }
              }
            }
          }
        ]
      };
      todayChart.setOption(option);
    },
    setTopcity () {
      let topChart = this.$echarts.init(this.$refs.top10);
      let myColor = [
        "#eb2100",
        "#eb3600",
        "#d0570e",
        "#d0a00e",
        "#34da62",
        "#00e9db",
        "#00c0e9",
        "#0096f3",
        "#33CCFF",
        "#33FFCC"
      ];
      let option = {
        title: {
          text: "城市排行Top10",
          textStyle: {
            color: "#fff",
            top: 10
          }
        },
        grid: {
          left: "11%",
          top: "12%",
          right: "0%",
          bottom: "8%",
          containLabel: true
        },
        xAxis: [
          {
            show: false
          }
        ],
        yAxis: [
          {
            axisTick: "none",
            axisLine: "none",
            offset: "10",
            axisLabel: {
              textStyle: {
                color: "#ffffff",
                fontSize: "12"
              }
            },
            data: [
              "南昌",
              "广州",
              "杭州",
              "宁夏",
              "兰州",
              "南宁",
              "长沙",
              "武汉",
              "合肥",
              "贵州"
            ]
          },
          {
            axisTick: "none",
            axisLine: "none",
            axisLabel: {
              textStyle: {
                color: "#ffffff",
                fontSize: "16"
              }
            },
            data: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"]
          },
          {
            name: "分拨延误TOP 10",
            nameGap: "50",
            nameTextStyle: {
              color: "#ffffff",
              fontSize: "16"
            },
            axisLine: {
              lineStyle: {
                color: "rgba(0,0,0,0)"
              }
            },
            data: []
          }
        ],
        series: [
          {
            // 内部
            name: "条",
            type: "bar",
            yAxisIndex: 0,
            data: [4, 13, 25, 29, 38, 44, 50, 52, 60, 72],
            label: {
              normal: {
                show: true,
                position: "right",
                textStyle: {
                  color: "#ffffff",
                  fontSize: "12"
                }
              }
            },
            barWidth: 8,
            itemStyle: {
              normal: {
                color: function (params) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num];
                }
              }
            },
            z: 2
          },
          {
            name: "白框",
            type: "bar",
            yAxisIndex: 1,
            barGap: "-100%",
            data: [99, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
            barWidth: 14,
            itemStyle: {
              normal: {
                color: "#0e2147",
                barBorderRadius: 5
              }
            },
            z: 1
          },
          {
            name: "外框",
            type: "bar",
            yAxisIndex: 2,
            barGap: "-100%",
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
            barWidth: 18,
            itemStyle: {
              normal: {
                color: function (params) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num];
                },
                barBorderRadius: 5
              }
            },
            z: 0
          },
          {
            name: "外圆",
            type: "scatter",
            hoverAnimation: false,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            yAxisIndex: 2,
            symbolSize: 20,
            itemStyle: {
              normal: {
                color: function (params) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num];
                },
                opacity: 1
              }
            },
            z: 2
          }
        ]
      };
      topChart.setOption(option);
    },
    // series 数据操作
    optSeries () {
      [
        ["新乡", this.BJData],
        ["九江", this.SHData],
        ["新疆", this.GZData]
      ].forEach((item, i) => {
        this.series.push(
          {
            name: item[0] + " Top10",
            type: "lines",
            zlevel: 1,
            effect: {
              show: true,
              period: 6,
              trailLength: 0.7,
              color: "#fff",
              symbolSize: 3
            },
            lineStyle: {
              normal: {
                color: this.color[i],
                // width: 0,
                curveness: 0.2
              }
            },
            data: this.convertData(item[1])
          },
          {
            name: item[0] + " Top10",
            type: "lines",
            zlevel: 2,
            effect: {
              show: true,
              period: 6,
              trailLength: 0,
              symbol: this.planePath,
              symbolSize: 15
            },
            lineStyle: {
              normal: {
                color: this.color[i],
                // width: 1,
                opacity: 0.4,
                curveness: 0.2
              }
            },
            data: this.convertData(item[1])
          },
          {
            // 气泡
            name: item[0] + " Top10",
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
              brushType: "stroke"
            },
            label: {
              normal: {
                show: true,
                position: "right",
                formatter: "{b}"
              }
            },
            symbolSize: val => {
              return val[2] / 8;
            },
            itemStyle: {
              normal: {
                color: this.color[i]
              }
            },
            data: item[1].map(dataItem => {
              return {
                name: dataItem[1].name,
                value: this.geoCoordMap[dataItem[1].name].concat([
                  dataItem[1].value
                ])
              };
            })
          },
          {
            name: item[0] + " Top10",
            type: "lines",
            zlevel: 5
          }
        );
      });
    },
    convertData (data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = this.geoCoordMap[dataItem[0].name];
        var toCoord = this.geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
          res.push([
            {
              coord: fromCoord
            },
            {
              coord: toCoord
            }
          ]);
        }
      }
      return res;
    },
    // 设置地图分配
    setMapChart () {
      this.mapChart = this.$echarts.init(this.$refs.map);
      this.optSeries();
      this.series.push(
        // 柱状图
        {
          // 内部
          name: "人均分布排行前十城市",
          type: "bar",
          barWidth: 20,
          cursor: "pointer",
          data: [
            18203,
            23489,
            29034,
            104970,
            131744,
            630230,
            29034,
            104970,
            131744,
            630230
          ],
          itemStyle: {
            normal: {
              color: "rgb(75,245,242)",
              borderColor: "rgb(24,22,43)",
              barBorderRadius: [0, 5, 5, 0],
              opacity: "0.8"
            }
          }
        }
      );
      let option = {
        // backgroundColor: 'rgb(14,16,55)',
        title: {
          text: "访客地区分布图",
          subtext: "数据纯属虚构",
          left: "left",
          textStyle: {
            colo: "#fff"
          }
        },
        tooltip: {
          trigger: "item"
        },
        // 颜色说明
        legend: {
          orient: "vertical",
          top: "bottom",
          left: "right",
          data: ["北京 Top10", "上海 Top10", "广州 Top10"],
          textStyle: {
            color: "#fff"
          },
          selectedMode: "single"
        },
        geo: {
          map: "china",
          left: "4%",
          // bottom: '20%',
          label: {
            emphasis: {
              show: true
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: "#132937",
              borderColor: "#0692a4"
            },
            emphasis: {
              areaColor: "#0b1c2d"
            }
          }
        },
        // 柱状图位置调整
        grid: {
          left: "70%",
          right: "4%",
          bottom: "10%",
          containLabel: true
        },
        // 柱状图x轴
        xAxis: {
          show: false
        },
        // 柱状图y轴
        yAxis: [
          {
            type: "category",
            data: [
              "南京",
              "上海",
              "北京",
              "常州",
              "苏州",
              "南京",
              "上海",
              "北京",
              "常州",
              "苏州"
            ],
            splitLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: "#fff",
                fontSize: "12"
              }
            }
          }
        ],
        series: this.series
      };
      this.mapChart.setOption(option);
      window.removeEventListener("resize", this.resizePerformanceFun);
      window.addEventListener("resize", this.resizePerformanceFun);
    },
    setPieChart (name, dom, data, imageUrl) {
      // 饼状图
      this.piechart = this.$echarts.init(dom);
      let option = {
        title: {
          text: name,
          show: true,
          top: 20,
          textStyle: {
            color: "rgb(69,131,151)",
            fontSize: 15
          }
        },
        // canvas设置图标等
        graphic: {
          elements: [
            {
              type: "image",
              style: {
                image: imageUrl,
                width: 40,
                height: 40
              },
              left: "62%",
              top: "40%"
            }
          ]
        },
        // 设置鼠标悬浮的提示
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
          textStyle: {
            fontSize: 12
          }
        },
        // 统计颜色说明
        legend: {
          type: "scroll",
          orient: "vertical",
          show: true,
          align: "left",
          x: "left",
          top: 60,
          textStyle: {
            fontSize: 10
          }
        },
        series: [
          {
            center: ["70%", "50%"],
            cursor: "pointer",
            name: name,
            type: "pie",
            // 第一个参数代表内圈半径
            // 第二个参数代表外圈半径
            radius: ["44%", "56%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "14",
                  fontWeight: "400",
                  fontStyle: ""
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
      };
      this.piechart.setOption(option);
      window.removeEventListener("resize", this.resizePerformanceFun);
      window.addEventListener("resize", this.resizePerformanceFun);
    },
    async getManData (val) {
      // 根据性别请求数据
      let arr = []
      let start = 10;
      let end = 15;
      for (let i = 0; i < 5; i++) {
        // 分别获取10-15 15-30 .。。 30-35的数据
        let reqData = {
          start,
          end,
          sex: val
        };
        let res = await this.$axios.get(
          constant.baseUrl + "/user/ageCount",
          reqData
        );
        if (res.code === 200) {
          if (val === 1) {
            arr.push(res.data)
          } else {
            arr.push(res.data)
          }
        }
        start = start + 5
        end = end + 5
      }
      if (val === 1) {
        this.setPieChart(
          "男生年龄分布图",
          this.$refs.man,
          arr,
          "/woman.png"
        )
      } else {
        this.setPieChart(
          "女生年龄分布图",
          this.$refs.woman,
          arr,
          "/man.png"
        )
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
  background-color: rgb(2, 9, 19);
  display: flex;
  .left {
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    .content {
      width: 100%;
      background: linear-gradient(to bottom left, #0c1f82, #090b17);
      box-sizing: border-box;
      border: 2px solid rgb(8, 1, 32);
    }
    .top {
      height: 50%;
    }
    .bottom {
      flex: 1;
      margin-top: 20px;
    }
  }
  .middle {
    width: calc(100% - 600px);
    height: 100%;
    position: relative;
    border: 3px solid rgb(3, 25, 41);
  }
  .right {
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 10px;
    align-items: center;
    // background-color: rgb(5,18,89);
    .kuang {
      width: 260px;
      height: 260px;
      background: linear-gradient(to bottom left, #0c1f82, #090b17);
      border-radius: 4px;
      transition: all 0.5s;
      margin-top: 10px;
      box-sizing: border-box;
      transition: all 0.5s;
    }
    .kuang:hover {
      margin: 0;
      box-shadow: 14px 14px 8px #1d1d34;
    }
  }
}
</style>
