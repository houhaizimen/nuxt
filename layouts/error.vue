<template>
    <div>
        <h2 v-if='error.statusCode === 400'>404页面， 页面没有找到</h2>
        <h2 v-else>500页面， 服务器偶无错误</h2>
    </div>
</template>
<script>
export default {
    props: ['error']
}
</script>