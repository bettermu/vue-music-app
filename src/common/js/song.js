import {getLyric} from 'api/song'
import {ERR_OK} from 'api/config'
import {Base64} from 'js-base64'

export default class Song {
  constructor({id, mid, singer, name, album, duration, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }

  getLyric() {
    if (this.lyric) {
      return Promise.resolve(this.lyric)
    }

    return new Promise((resolve, reject) => {
      getLyric(this.mid).then((res) => {
        if (res.retcode === ERR_OK) {
          this.lyric = Base64.decode(res.lyric)
          resolve(this.lyric)
        } else {
          reject('no lyric')
        }
      })
    })
  }
}

export function createSong(musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    //url: `http://ws.stream.qqmusic.qq.com/${musicData.songmid}.m4a?fromtag=46`
    url:`http://isure.stream.qqmusic.qq.com/C400${musicData.songmid}.m4a?guid=1344449500&vkey=8B305E3D3B1F3616DFFBFDC76E3B63AD5DB82C44CED577D01B4F754F6FCFA5E9554195AE5781EC1EB64AB087F88CD45DF2C02662F004DF74&uin=7780&fromtag=66`
    //http://isure.stream.qqmusic.qq.com/C400001TXSYu1Gwuwv.m4a?guid=1344449500&vkey=EC8F4A949A5EBDB935521445E544BE8E6B1E581611D15DC5E6FF92182C672C1ACB667E455A9E3A0DCDF870B88B13FD4E23F4C80A99E55DB4&uin=7780&fromtag=66
    //http://isure.stream.qqmusic.qq.com/C400001Qu4I30eVFYb.m4a?guid=1344449500&vkey=8B305E3D3B1F3616DFFBFDC76E3B63AD5DB82C44CED577D01B4F754F6FCFA5E9554195AE5781EC1EB64AB087F88CD45DF2C02662F004DF74&uin=7780&fromtag=66
  })

  //http://isure.stream.qqmusic.qq.com/C400001Qu4I30eVFYb.m4a?guid=1344449500&vkey=8B305E3D3B1F3616DFFBFDC76E3B63AD5DB82C44CED577D01B4F754F6FCFA5E9554195AE5781EC1EB64AB087F88CD45DF2C02662F004DF74&uin=7780&fromtag=66
}

function filterSinger(singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach((s) => {
    ret.push(s.name)
  })
  return ret.join('/')
}

