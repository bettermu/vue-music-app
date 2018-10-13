import {playMode} from 'common/js/config'

const state={
  singer:{},
  //是否播放
  playing:false,
  //全屏状态
  fullScreen:false,
  //播放列表
  playlist:[],
  //
  sequenceList:[],
  //播放模式
  mode:playMode.sequence,
  //当前播放索引
  currentIndex:-1,
  //歌单对象
  disc:{}
}

export default state
