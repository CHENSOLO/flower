// pages/more-movie/more-movie.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[],
    _type:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //type属于固定写法
    // console.log(options.type)
    const type = options.type
    this.data._type = type
//数据加载
    wx.request({
      url: app.gBaseUrl + type,
      data:{
        start:0,
        count:12
      },
      success:(res)=>{
        this.setData({
          movies:res.data.subjects
        })
      }     
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
    const type =  this.data._type
    // console.log(type)
    //数据加载
    wx.request({
      url: app.gBaseUrl + type,
      data:{
        start:12,
        count:12
      },
      success:(res)=>{
        this.setData({
          movies:this.data.movies.concat(res.data.subjects)
        })
      }     
    }) 
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})