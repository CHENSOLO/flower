// pages/post-detail/post-detail.js
import { PostList } from "../../data/data"
const app = getApp()
// console.log(app.gIsPlayingMusic)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //设置默认收藏为False
    postData:{},
    collected:false,
    // 暂时将_pid为空,不做数据绑定的加_，数据绑定的直接驼峰命名
    _pid:null,
    _postsCollected: {},
    // 默认音乐是停止播放
    isPlaying: false,
    _mgr:null,
    gIsPlayingMusic: app.gIsPlayingMusic,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //可以从前一个页面监听数据的传递
    // console.log(options)
    const postData = PostList[options.pid]
    // 将pid设为全局变量
    this.data._pid = options.pid
    // 从本地缓存中同步获取指定key的内容
    const postsCollected = wx.getStorageSync('posts_collected') 
    // 将获取到的Value的编码的值赋给_postsCollected
    this.data._postsCollected = postsCollected
    let collected = postsCollected[this.data._pid] 
    if(collected === undefined){
      // 如果undefined 说明文章从来没有被收藏过
      collected = false
    }
    // 数据绑定
    this.setData({ 
      postData,
      collected,
      isPlaying: this.currentMusic(),
    })
    const mgr = wx.getBackgroundAudioManager()
    this.data._mgr = mgr //赋值
    //调用api函数BackgroundAudioManager.pause()
    mgr.onPlay(this.onMusicStart) 
    mgr.onPause(this.onMusicStop)
  },
//当前正确播放的音乐
currentMusic(event){
  if (app.gIsPlayingMusic && app.gIscurrentMusicPostId == this.data._pid){
    return true
  }
  return false
},
  // 音乐播放
  onMusicStart(event){
    // console.log("789789")
    const mgr = this.data._mgr
    const music = PostList[this.data._pid].music
    // mgr.onPlay()
    mgr.src = music.url
    mgr.title = music.title
    mgr.coverImgUrl = music.converImg
    // console.log(PostList[0].music.url)
    app.gIsPlayingMusic = true  // 播放为开始
    app.gIscurrentMusicPostId = this.data._pid  // 播放选择对应的id
    // 改变图标
    this.setData({
      isPlaying: true,
    })
  },
// 音乐暂停
  onMusicStop(event) {
    // const mgr = wx.getBackgroundAudioManager()
    // console.log("123123")
    const mgr = this.data._mgr
    mgr.pause()
    app.gIsPlayingMusic = false
    this.setData({
      isPlaying: false
    })
  },

  async onShare(event){
    const result = await wx.showActionSheet({
      itemList:['分享到QQ','分享到朋友圈','分享到知乎'],
    //   success(res){
    //     console.log(res)
    //   }
    })
    // console.log(result)

  },

  onCollect(){
    // 未收藏 --> 收藏
    // 那篇文章被收藏 
    // 数据结构 多篇文章是否被收藏
    const postsCollected = this.data._postsCollected   // 从缓存中获取id的值
    postsCollected[this.data._pid] = !this.data.collected  //获取collected原来的False，在取反可以得出收藏 <--> 未收藏
    // console.log(postsCollected);
    // console.log(this.data._pid);
    // 收藏数据绑定
    this.setData({
      collected: !this.data.collected  // 收藏 <--> 未收藏  赋值
    })   
    wx.setStorageSync('posts_collected', postsCollected)  // 将数据存储在本地缓存中指定的key中 

    wx.showToast({
      title: this.data._collected?'收藏成功':'取消收藏',
      icon: 'success',
      duration: 2000
    })

   

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})