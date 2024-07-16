<template>
  <div>
    <h1>Welcome to Nuxt!</h1>
    <p>Это тестовый сайт для проверки совместимости navigator.share <br>нативного функционала на мобильных устройствах и Webview</p>
    <button @click.stop="shareImageUrl">Share Image URL (webp from mindbox)</button>
    
    <button @click.stop="shareMarketPlaceUrl">Share Marketplace URL</button>
    

    <pre>{{ resultPara }}</pre>
  </div>
</template>

<script setup>
const resultPara = ref('')
const shareData = {
  url: 'https://personalization-web.mindbox.cloud/user-media/35889/bd9c18e4cccb69c97892e25f1850fb31ba610abe973be877fd298d87872bd7b3.webp'
}

const shareSite = {
  title: 'WEE MarketPlace Title',
  text: 'WEE Text into Share content',
  url: 'https://wee.ae/?utm_source=instagram&utm_medium=blogger&utm_campaign=lifestyleofhaya'
}

const shareImageUrl = async () => {
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

const shareMarketPlaceUrl = async () => {
  try {
    if (navigator.canShare(shareSite)) {
      await navigator.share(shareSite);
      resultPara.value = "shared successfully";
    } else {
      resultPara.value = "shared is not found";
    }
  } catch (err) {
    resultPara.value = `Error: ${err}`;
  }
}

useSeoMeta({
  title: 'My Nuxt Site',
  ogTitle: 'My Amazing Site',
  ogImage: 'https://wee.ae/_nuxt/logo-desktop.YaNq66LJ.svg',
})
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
  margin 20px
}
</style>