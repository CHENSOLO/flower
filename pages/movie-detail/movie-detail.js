// pages/movie-detail/movie-detail.js
import{convertToCastInfos} from '../../utils/utils.js'
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: {},
    // handle_movie:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log(options.mid)
    const mid = options.mid
    wx.request({
      url: app.gBaseUrl + 'subject/' + mid,
      success:(res)=>{
          console.log(res.data)
          this.setData({
            movie:res.data
          })
      }
    })
  },

  //处理数据
  // processMovieData(movie){
  //   // console.log(111+movie)
  //   const data = {'123':213}
  //   // data.castsInfo = convertToCastInfos(movie.casts)
  //   this.setData({
  //     handle_movie:data
  //   })
  // },

  //图片放大
  onViewPost(event){
    wx.previewImage({
      urls: [this.data.movie.images.large],
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