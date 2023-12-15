// pages/movie/movie.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheaters:[],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.request({
      url: app.gBaseUrl + 'in_theaters',
      data:{
        start:0,
        count:3
      },
      success:(res)=>{
        console.log(res.data)
        // console.log(this)
        this.setData({
          inTheaters:res.data.subjects
        })
      }     
    })
    // console.log(this)

    //API接口地址
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