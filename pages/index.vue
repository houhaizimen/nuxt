<template>
<div>
  <div class="bg-img" ref='bgImg'>
    <div class="top">
      <div>jsCheng</div>
      <div class="list">
       <ul>
          <li><nuxt-link :to="{name: 'index'}">HOME</nuxt-link></li>
          <li><nuxt-link :to="{name: 'about'}">FOOTERPTINT</nuxt-link></li>
          <li><nuxt-link :to="{name: 'news', params: {newsId: '1234'}}">NEWS</nuxt-link></li>
          <li><nuxt-link :to="{name: 'asyncData'}">asyncData</nuxt-link></li>
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
        <img src="~static/avatar.jpg" alt="">
        <div>jscheng</div>
        <div>
          
        </div>
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  data () {
    return {
      i: 0
    }
  },
  methods: {
    
  },
}
</script>

<style scoped lang='scss'>
  .bg-img{
    background-image: url('~static/bgImg.svg');
  }
  .content{
    width: 1200px;
    height: 1000px;     
    display: flex;
    margin: 0 auto;
    margin-top: 30px;
    .left{
      width: 900px;
      height: 100%;
      background-color: #fff;
      margin-right: 20px;
    }
    .right{
      flex: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
      .top{
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
        img{
          width: 110px;
          height: 110px;
        }
        .cont{
          flex: 1;
        }
      }
    }
  }
</style>
