<template>
<transition name="slide">
  <music-list :songs="songs" :title="title" :bgImage="bgImage"></music-list>
</transition>

</template>

<script>
import { mapGetters } from "vuex";
import { getSingerDetail } from "api/singer";
import { ERR_OK } from "api/config";
import { createSong } from "common/js/song";
import MusicList from 'components/music-list/music-list'

export default {
  data() {
    return {
      songs: []
    };
  },
  computed: {
    title(){
      return this.singer.name
    },
    bgImage(){
      return this.singer.avatar
    },
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
  },
  components:{
    MusicList
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
