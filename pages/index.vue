<template>
  <div>
    <ul>
      <li><nuxt-link :to="{name: 'index'}">HOME</nuxt-link></li>
      <li><nuxt-link :to="{name: 'about'}">ABOUT</nuxt-link></li>
      <li><nuxt-link :to="{name: 'news', params: {newsId: '1234'}}">NEWS</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
  }
}
</script>

<style>

</style>
