<template>
    <div class="homepage-hero-module" style="width: 100%">
      <div class="video-container"style="width: 100%">
        <div style="width:100%;position: fixed;margin-top: 20px;background-color: #000000;z-index: 0"></div>
        <div :style="fixStyle" style="width:100%;height:100%;position: fixed;margin-top: 20px" class="filter"></div>
        <!--<video style="width:100%;position: fixed;margin-top: 20px;margin-left: -600px" autoplay loop class="fillWidth" v-on:canplay="canplay">
          <source src="../assets/Fire/Slow-Fire.mp4" type="video/mp4"/>
          <source src="PATH_TO_WEBM" type="video/webm"/>
          浏览器不支持 video 标签，建议升级浏览器。
        </video>-->
        <div class="poster hidden" style="z-index: 1">
          <img :style="fixStyle" src="../assets/Fire/Slow-Fire.jpg" alt="">
        </div>
      </div>
    </div>
</template>

<script>
    import Nav from "./Nav";
    export default {
        name: 'login',
        components: {Nav},
        data() {
            return {
                vedioCanPlay: false,
                fixStyle: ''
            }
        },
        methods: {
            canplay() {
                this.vedioCanPlay = true
            }
        },
        mounted: function() {
            window.onresize = () => {
                const windowWidth = document.body.clientWidth
                const windowHeight = document.body.clientHeight
                const windowAspectRatio = windowHeight / windowWidth
                let videoWidth
                let videoHeight
                if (windowAspectRatio < 0.5625) {
                    videoWidth = windowWidth
                    videoHeight = videoWidth * 0.5625
                    this.fixStyle = {
                        height: windowWidth * 0.5625 + 'px',
                        width: windowWidth + 'px',
                        'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
                        'margin-left': 'initial'
                    }
                } else {
                    videoHeight = windowHeight
                    videoWidth = videoHeight / 0.5625
                    this.fixStyle = {
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
  .homepage-hero-module{
  },
  .video-container {
    position: relative;
    height: 100%;
    overflow: hidden;
  }

  .video-container .poster img,
  .video-container video {
    z-index: 1;
    position: absolute;
  }

  .video-container .filter {
    z-index: 2;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
  }
  .video-container .fore{
    z-index: 3;
  }
</style>
