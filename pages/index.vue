<template>
<div>
  <div class="bg-img" ref='bgImg'>
    <div class="top">
      <div>jsCheng</div>
      <div class="list">
       <ul>
          <li><nuxt-link :to="{name: 'index'}">HOME</nuxt-link></li>
          <li><nuxt-link :to="{name: 'about'}">JOIN OUR</nuxt-link></li>
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
    <div class="right"></div>
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
      background-color: #fff;
    }
  }
</style>
