// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //定义事件函数
  onTap:function(){
    // console.log("111")
      //跳转页面（路由 第一种带返回箭头，保留当前页面)
    // wx.navigateTo({
    //   url: '../post/post',
    // })
    //跳转页面（路由 第二种带回到主目录，不保留页面)
    // wx.redirectTo({
    //   url: '../post/post',
    // })
    wx.switchTab({
      url: '../post/post',
    })
  },

onViewTap:function(){
  console.log('On tap view')
},
onTextTap:function(){
  console.log('On Text view')
},



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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