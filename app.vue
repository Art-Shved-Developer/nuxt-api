<template>
  <div>
    <h1>Welcome to Nuxt!</h1>
    <p>Это тестовый сайт для проверки совместимости navigator.share <br>нативного функционала на мобильных устройствах и Webview</p>
    <button @click="shareImage">Share button test</button>
    <pre>{{ resultPara }}</pre>
  </div>
</template>

<script setup>
const resultPara = ref('')
const shareData = {
  url: 'https://personalization-web.mindbox.cloud/user-media/35889/bd9c18e4cccb69c97892e25f1850fb31ba610abe973be877fd298d87872bd7b3.webp'
}

const shareImage = async () => {
  try {
    if (navigator.canShare(shareData)) {
      await navigator.share(shareData);
      resultPara.value = "shared successfully";
    } else {
      resultPara.value = "shared is not found";
    }
  } catch (err) {
    resultPara.value = `Error: ${err}`;
  }
}
</script>

<style lang="stylus">
button {
  align-items center
  border 1px solid transparent
  border-radius 12px
  display flex
  font-size 14px
  font-weight 700
  gap 8px
  height 40px
  justify-content center
  line-height 14px
  padding 0 12px
  background #fe3f6f
  color #fff
}
</style>