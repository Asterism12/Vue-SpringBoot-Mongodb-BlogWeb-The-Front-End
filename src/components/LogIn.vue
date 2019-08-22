<template>
  <div class="homepage">
    <div class="video-container">
      <div :style="fixStyle" class="filter"></div>  //the mask of the video
      <video :style="fixStyle" autoplay loop class="fillWidth" v-on:canplay="oncanplay">
        <source src="PATH_TO_MP4" type="video/mp4"/>
            请升级浏览器
        <source src="PATH_TO_WEBM" type="video/webm"/>
            请升级浏览器
      </video>
      <div class="poster hidden" v-if="!videoCanPlay">
        <img :style="fixStyle" src="PATH_TO_JPEG" alt=""/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      videoCanPlay: false,
      fixstyle: ''
    }
  },
  methods: {
    canplay () {
      this.videoCanPlay = true
    }
  },
  mounted: function() {
    window.onresize = () => {
      const windowWidth = document.body.clientWidth // the width of the visible area
      const windowHeight = document.body.clientHeight
      const windowAspectRatio = windowHeight / windowWidth
      let videoHeight //  create a variable which could be used in this field only
      let videoWidth
      if (windowAspectRatio < 0.5625) {
        videoWidth = windowWidth
        videoHeight = videoWidth * 0.5625 //  make sure that the Aspect ratio will be held at 0.5625
        this.fixstyle = {
          height: windowWidth * 0.5625 + 'px',
          width: windowWidth + 'px',
          'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
          'margin-left': 'initial'
        }
      } else {
        videoHeight = windowHeight
        videoWidth = windowHeight / 0.5625
        this.fixstyle = {
          height: windowHeight + 'px',
          width: windowHeight / 0.5625 + 'px',
          'margin-left': (windowWidth - videoWidth) / 2 + 'px',
          'margin-bottom': 'initial'

        }
      }
    }
    window.onresize()
  }
}
</script>

<style scoped>
  .homepage,
  .video-container{
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  .video-container .poster img,
  .video-container video{
    z-index: 0; //z-index determines the sequence
    position: absolute;
  }
  .video-container .filter{
    z-index: 1;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);

  }
</style>
