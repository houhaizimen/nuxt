<template>
  <div class="index">
    <div class="bg-img"
         ref='bgImg'>
      <div class="top">
        <div>jsCheng</div>
        <div class="list">
          <ul>
            <li>
              <nuxt-link :to="{name: 'index'}">HOME</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name: 'about'}">FOOTERPTINT</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name: 'news', params: {newsId: '1234'}}">NEWS</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name: 'asyncData'}">asyncData</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="bottom">
        愿世间所有美好与你环环相扣-VLOG
      </div>
    </div>
    <div class="content">
      <div class="left"></div>
      <div class="right">
        <div class="top">
          <div style="position: relative;"
               @mouseleave='mouseLeave'
               @mouseenter='enterShow'
               @mousemove='mouseMove'
               ref='small'>
            <img src="~static/avatar.jpg"
                 alt="">
            <div class="move"
                 ref='moveKuang'
                 v-show='moveShow'></div>
          </div>
          <div></div>
          <div>更改头像</div>
          <div @click='checkSign'>签到</div>
        </div>
        <div class="big-avatar"
             ref='bigAvatar'  v-show='bigImgShow'>
          <img src="~static/avatar.jpg"
               alt=""
               ref='bigImg'
              >
        </div>
      </div>
    </div>
    <!-- 日历表 -->
    <div class="calender-cont" v-show='showCalender'>
      <div class="cal-hang">
        {{year}}年{{month}}月{{date}}日
      </div>
      <!-- 周几 -->
      <div class="cal-hang">
        <div v-for='(item, cindex) in weekArr' :key='cindex' class='cal-kuai'>{{item}}</div>
      </div>
      <!-- 月份 -->
      <div class="cal-hang" v-for="(itemArr, arrIndex) in monthArr" :key='arrIndex'>
        <div v-for='(dateItem, dateIndex) in itemArr' :key='dateIndex' class='cal-kuai' :class="dateItem==date?'bg-green':''" @click='getclickDate(dateItem)'>{{dateItem}}
        </div>
      </div>
    </div>
    <!-- 阴影 -->
    <!-- <div class='shadow'>
    </div> -->
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  data () {
    return {
      i: 0,
      moveShow: false, //方块是否显示
      bigImgShow: false, // 大图片是否显示
      oSmall: null, // 小头像的最外层
      oMove: null, // 移动图标
      oBig: null, // 大图标的最外层
      oBig_img: null,// 大头像
      pointMove: { // 方块移动的距离
        top: 0,
        left: 0
      },
      showCalender: false,
      weekArr: ['日', '一', '二', '三', '四', '五', '六'],
      // 当前月份日期
      monthArr: [],
      // 每个月的天数
      monthDay: [31,28,31,30,31,30,31,31,30,31,30,31],
      // 当前的年数
      year: '',
      // 当前月份
      month: '',
      // 当前日
      date: '',
      // 当前是周几
      nowWeek: ''
    }
  },
  created() {
    let date = new Date()
    this.year = date.getFullYear()
    this.month = date.getMonth() + 1
    this.date = date.getDate()
    // 0 代表周日
    this.nowWeek = date.getDay()
    this.isLeap()
    this.setMOnthArr()
  },
  methods: {
    // 获取点击的日期
    getclickDate (date) {
      this.date = date
    },
    // 判断是否为闰年
    isLeap () {
      if (this.year%4==0 && this.year % 100 == 0 || this.year % 400 == 0) {
        this.monthDay[1] = 29
      }
    },
    // 排日历----当前月
    setMOnthArr () {
      // 判断本月第一天是周几
      let oneDay = new Date(`${this.year}, ${this.month}, 01`).getDay()
      // 判断本月有几周
      let weekSum = 0
      // 判断当天是周几
      /**
       * 如果当天是周天 判断本月最后一天是不是周六
       * * */
      if (oneDay === 0) {
        weekSum= this.monthDay[this.month-1]%7
        // 本月最后一天是周六（整数）
        if (weekSum === 0) {
          weekSum = this.monthDay[this.month-1]/7
        } else {
          // 如果不是 取证加一
          weekSum= this.monthDay[this.month-1]/7 + 1
        }
      } else {
        // 如果本月第一天不是周日 则减去本周
        weekSum = (this.monthDay[this.month-1]-(7-oneDay))%7
        if (weekSum === 0) {
          weekSum = (this.monthDay[this.month-1]-(7-oneDay))/7 + 1
        } else {
          weekSum = parseInt((this.monthDay[this.month-1]-(7-oneDay))/7) + 2
        }
      }
      let sum = 0
      for (let i =0 ; i < weekSum; i++) {
        var arr = []
        for (let j = 0; j < 7; j ++) {
          if (i ==0 && j < oneDay) {
            arr[j] = ''
          } else {
            if (sum < this.monthDay[this.month-1]) {
              sum ++
              arr[j] = sum
            } else {
              arr[j] = ''
            }
          }
        }
        this.monthArr.push(arr)
      }
      console.warn(this.monthArr)
    },
    checkSign () { // 签到
      this.showCalender = !this.showCalender
    },
    enterShow () { // 鼠标进入头像
      this.oSmall = this.$refs.small
      console.warn('鼠标进入')
      this.oMove = this.$refs.moveKuang
      this.oBig = this.$refs.bigAvatar
      this.oBig_img = this.$refs.bigImg
      this.moveShow = true
      this.bigImgShow = true
    },
    mouseLeave () { // 鼠标离开
      this.moveShow = false
      this.bigImgShow = false
    },
    mouseMove (ev) { // 鼠标移动
      var ev = ev || window.event
      //当鼠标移入开始移动的时候 计算move 的定位信息
      //移动的值是  鼠标的距离-samll距离浏览器边缘的距离 - move自身一半的距离
      // clientX/Y 鼠标到浏览器可视距离边缘的距离
      // offsetLeft/Top ：元素边缘到浏览器可是边缘的距离   ---- 想对于已定位的元素
      // offsetWidth: 为元素的width+元素的padding+边框的宽度
      //  clientWdith：存在垂直滚动条
      // content width + padding - scollbarWidth
      // 不存在滚动条
      // content width + padding
      // clientLeft： 表示一个元素的左边框的宽度
      this.pointMove.left = ev.clientX - this.oSmall.offsetLeft - this.oMove.offsetWidth/2;
      this.pointMove.top = ev.clientY - this.oSmall.offsetTop - this.oMove.offsetHeight/2;
      // 判断临界值
      if(this.pointMove.left <= 0){
        this.pointMove.left =0;
      }else if(this.pointMove.left >= this.oSmall.clientWidth - this.oMove.offsetWidth){
        this.pointMove.left = this.oSmall.clientWidth - this.oMove.offsetWidth;
      }
      if(this.pointMove.top <= 0){
        this.pointMove.top =0;
      }else if(this.pointMove.top >= this.oSmall.clientHeight - this.oMove.offsetHeight){
        this.pointMove.top = this.oSmall.clientHeight - this.oMove.offsetHeight;
      }
      
      //对move块进行赋值操作
      this.oMove.style.left = this.pointMove.left +"px";
      this.oMove.style.top = this.pointMove.top +"px";
      // 比例计算：
      // move移动的距离/move能够移动的最大距离 = 大图片移动的距离/大图片能够移动的距离
      var scaleX = this.pointMove.left / (this.oSmall.clientWidth - this.oMove.offsetWidth);
      var scaleY = this.pointMove.top / (this.oSmall.clientHeight - this.oMove.offsetHeight);
      // 计算大图应该向移动的距离
      this.oBig_img.style.left =  - scaleX * (this.oBig_img.offsetWidth - this.oBig.clientWidth) + "px";
      this.oBig_img.style.top =  - scaleY * (this.oBig_img.offsetHeight - this.oBig.clientHeight) + "px";
    }
  }
}
</script>

<style scoped lang='scss' scoped>
.bg-img {
  background-image: url("~static/bgImg.svg");
}
// 整个页面
.index{
  position: relative;
}
// 中间整个大框
.content {
  width: 1200px;
  height: 1000px;
  display: flex;
  margin: 0 auto;
  margin-top: 30px;
  .left {
    width: 900px;
    height: 100%;
    background-color: #fff;
    margin-right: 20px;
  }
  .right {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    .top {
      width: 100%;
      height: 380px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      background-color: #fff;
      border: 1px solid #eee;
      padding: 16px;
      box-sizing: border-box;
      .move {
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 0, 0.5);
        position: absolute;
        left: 0;
        top: 0;
      }
      img {
        width: 110px;
        height: 110px;
      }
      .cont {
        flex: 1;
      }
    }
    .big-avatar {
      position: absolute;
      top: 180px;
      right: 10px;
      width: 300px;
      height: 300px;
      overflow: hidden;
      img {
        width: 800px;
        height: 800px;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
}
// 日历
.calender-cont{
  width: 280px;
  position: absolute;
  // bottom:280px;
  top: 600px;
  right: 10px;
  background-color: orange;
  padding: 6px;
  padding-top: 0;
  animation: calender-box .6s;
  .cal-hang{
    width: 100%;
    height: 36px;
    margin-top: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    color: #fff;
    font-weight: bold;
    font-size:16px;
    .cal-kuai{
      width: 36px;
      height: 36px;
      margin-right:2px;
      background-color: #fff;
      color: orange;
      line-height: 36px;
      text-align: center;
      font-size: 12px;
      border-radius: 3px;
    }
    .cal-kuai:last-child{
      margin-right: 0;
    }
  }
}
.bg-green{
  background-color: rgb(110, 233, 106) !important;
}
// 日历动画
@keyframes calender-box {
  0% {
    top: 0px;
  }
  60% {
    top: 600px;
  }
  80% {
    top: 400px;
  }
  100% {
    top: 600px;
  }
}
// 阴影
// .shadow{
//   position: absolute;
//   top: 905px;
//   right: -50px;
//   z-index: -1;
//   width: 400px;
//   height: 0;
//   border-bottom: 40px solid rgba(0, 0, 0, 0.2);
//   border-left: 90px solid transparent;
//   border-right: 90px solid transparent;
//   border-radius: 10px;
// }
</style>
