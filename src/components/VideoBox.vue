<template>
  <div class="video_box" ref="videoBoxRef">
  </div>
</template>

<script>
// hls在线直播视频接入
export default {
  props: {
    url: { 
      type: String,
    },
  },
  name: 'VideoBox',
  data() {
    return {
    }
  },
  watch: {
    'url'(newval,oldval) {
      if (!newval) return;
      if (newval === oldval) return;
      this.play(newval);
    }
  },
  created() {
    this.player;
  },
  mounted() {
    this.play(this.url)
  },
  beforeDestroy() {
    if (this.player) {
      this.player.pause();
      this.player.dispose();
    }
  },
  methods: {
    play(code) {
        const src = code;
        if (!src) return;
        let videoDom = document.createElement('video');
        let sourceDom = document.createElement('source');
        videoDom.setAttribute("muted", true)
        videoDom.setAttribute("loop", true)
        videoDom.setAttribute("loop", true)
        videoDom.setAttribute("autoplay", true)
        sourceDom.src = src;
        sourceDom.setAttribute('type', 'application/x-mpegURL');
        videoDom.appendChild(sourceDom);

        this.$refs.videoBoxRef.appendChild(videoDom);

        this.player = videojs(videoDom);
        this.player.play();
    }
  }
};
</script>
<style lang='less' scoped>
.video_box {
  width: 100%;
  height: 100%;

  & > div,
  video {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  .vjs-controls-disabled {
    & > div,
    & > button {
      display: none;
    }
  }
}
</style>