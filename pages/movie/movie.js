// pages/movie/movie.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheaters:[],
    coming_soon:[],
    top250:[],
    searchData:[],
    //默认搜索结果是无
    searchResult: false
  },

  /**
   * 生命周期函数--监听页面加载
   */

   
  onLoad(options) {
  //正在热映
    wx.request({
      url: app.gBaseUrl + 'in_theaters',
      data:{
        start:0,
        count:3
      },
      success:(res)=>{
        // console.log(res.data)
        // console.log(this)
        this.setData({
          inTheaters:res.data.subjects
        })
      }     
    }) 
    //即将热映
    wx.request({
      url: app.gBaseUrl + 'coming_soon',
      data:{
        start:0,
        count:3
      },
      success:(res)=>{
        // console.log(res.data)
        this.setData({
          coming_soon:res.data.subjects
        })
      }
    })
  //即将上映
  wx.request({
    url: app.gBaseUrl + 'top250',
    data:{
      start:0,
      count:3
    },
    success:(res)=>{
      // console.log(res.data)
      this.setData({
        top250:res.data.subjects
      })
    }
  })

    
    // console.log(this)
 
    //API接口地址
  },
  //点击更多跳转
  onGotoMore(event){
    // console.log(event)获取对应的数据
    const type = event.currentTarget.dataset.type
    // console.log(type)
    wx.navigateTo({
      url: '../more-movie/more-movie?type=' + type,
    })
  },
  //搜索确认查询
  onConfirm(event){
    // console.log(event)
    this.setData({
      searchResult:true
    })
    wx.request({
      url: app.gBaseUrl + 'search',
      data:{
        q:event.detail.value
      },
      success:(res)=>{
        // console.log(res.data)
        this.setData({
          searchData: res.data.subjects
        })
      }
    })
  },
//搜索取消查询
  onCancel(event){
    console.log(event)
    this.setData({
      searchResult:false
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