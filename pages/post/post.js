// pages/post/post.js
import {PostList} from "../../data/data"
// console.log(PostList)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: true,
    res:{
      text:"123123"
    },
  },
   
  /**
   * 生命周期函数--监听页面加载
   */
async onLoad(options) {
    // console.log("onload")
    //  setData(创建+更新)

    // // 数据缓存设置修改清空绑定
    // wx.setStorageSync('flag', true)
    // wx.setStorageSync('flag', false)
    // wx.setStorageSync('flag1', 1)
    // // wx.clearStorageSync()
    // // wx.removeStorageSync('flag')
    // const flag = wx.getStorageSync('flag1')
    // console.log(flag)

    // 异步回调函数最简单的方法 使用async await
    wx.setStorageSync('flag', 2)
    const flag = await wx.getStorage(
      {
        key: 'flag',
      }
    )
    // console.log(flag)

    this.setData({
      PostList
    })
  },

  onGoToDetail(event){
    //事件的对象
    // console.log(event) 
    // console.log(event.currentTarget.dataset.postId)
    //获取自定义事件的pid
    // console.log(event.detail.pid)
    // 页面数据传递通常使用url传递
    const pid = event.detail.pid | event.currentTarget.dataset.postId
    wx.navigateTo({
      url: '../post-det ail/post-detail?pid='+pid,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */   
  onReady() {
    // console.log("onready")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // console.log("onshow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    // console.log("onhide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    // console.log("onUnload")
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
    // console.log("onreach")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})