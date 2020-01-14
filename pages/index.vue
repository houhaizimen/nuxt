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
          <div>jscheng</div>
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
    <div class="">

    </div>
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
      }
    }
  },
  methods: {
    checkSign () { // 签到

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
.index{
  position: relative;
}
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
</style>
