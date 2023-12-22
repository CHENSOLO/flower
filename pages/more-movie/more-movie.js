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
  // 设置导航栏名称
    let title = ''
    switch(this.data._type){
      case 'in_theaters':
        title = '正在热映'
        break
      case 'coming_soon':
        title = '即将热映'
        break
      case 'top250':
        title = '即将上映'
        break
    }
    wx.setNavigationBarTitle({
      title: title,
    })
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
   * 请求数据加载
   */
  onPullDownRefresh() {
    // console.log("123")
    wx.request({
      url: app.gBaseUrl + this._type,
      data:{
        start: 0,
        count: 12
      },
      success:(res)=>{
        this.setData({
          movies: res.data.subjects
        })
        wx.stopPullDownRefresh()
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    const type =  this.data._type
    // console.log(type)
    wx.showNavigationBarLoading() // 显示顶部加载转圈
    //数据加载
    wx.request({
      url: app.gBaseUrl + type,
      data:{
        start: this.data.movies.length,
        count:12
      },
      success:(res)=>{
        this.setData({
          movies:this.data.movies.concat(res.data.subjects)
        })
        wx.hideNavigationBarLoading() // 隐藏顶部加载转圈
      }     
    }) 
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})