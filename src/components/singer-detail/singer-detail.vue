<template>
<transition name="slide">
  <div class="singer-detail"></div>
</transition>

</template>

<script>
import { mapGetters } from "vuex";
import { getSingerDetail } from "api/singer";
import { ERR_OK } from "api/config";
import { createSong } from "common/js/song";

export default {
  data() {
    return {
      songs: []
    };
  },
  computed: {
    ...mapGetters(["singer"])
  },
  created() {
    this._getDetail(this.singer.id);
    //console.log(this.singer)
  },
  methods: {
    _getDetail(singerId) {
      if (!singerId) {
        this.$router.push("/singer");
        return;
      }
      getSingerDetail(singerId).then(res => {
        if (res.code === ERR_OK) {
          //console.log(res.data.list);
          this.songs=this._normalizeSongs(res.data.list)
          console.log(this.songs)
        }
      });
    },
    _normalizeSongs(list) {
      let ret = [];
      list.forEach(item => {
        let { musicData } = item;
        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData));
        }
      });

      return ret
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable';

.singer-detail {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $color-background;
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s;
}

.slide-enter, .slide-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>
