<template>
  <div>
    <h1>Welcome to Nuxt!</h1>
    <p>Это тестовый сайт для проверки совместимости navigator.share <br>нативного функционала на мобильных устройствах и
      Webview</p>

    <button v-if="5 > 9" @click="shareImageUrl">Share Image URL (webp from mindbox)</button>
    <button v-if="5 > 9" @click="shareMarketPlaceUrl">Share Marketplace URL</button>

    <div class="box-case">
      <p>Открыть камеру и сделать фото</p>
      <input type="file" accept="image/*" capture>
    </div>
    
    <div class="box-case">
      <p>Открыть галерею и выбрать фото</p>
      <input type="file" accept="image/*" id="imageInput">
    </div>
    

    <div v-if="5 > 9">
      <label for="imageInput">Select an image to share object-blob-image:</label>
      <input id="imageInput" type="file" accept="image/*" @change="handleImageChange" />
      <button @click="shareImage" :disabled="!imageFile">Share Image</button>
    </div>

    <pre>{{ resultPara }}</pre>
  </div>
</template>

<script setup>
const resultPara = ref('')
const imageFile = ref('')

const handleImageChange = (event) => {
  imageFile.value = event.target.files[0]
}

const shareImage = async () => {
  const shareData = {
    files: [imageFile.value],
  };

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

const shareImageUrl = async () => {
  const shareData = {
    url: 'https://personalization-web.mindbox.cloud/user-media/35889/bd9c18e4cccb69c97892e25f1850fb31ba610abe973be877fd298d87872bd7b3.webp'
  }

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
  const shareSite = {
    title: 'WEE MarketPlace Title',
    text: 'WEE Text into Share content',
    url: 'https://wee.ae/?utm_source=instagram&utm_medium=blogger&utm_campaign=lifestyleofhaya'
  }

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

.box-case
  display block
  border 1px dashed black
  margin 10px
  width 300px
</style>