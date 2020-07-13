// pages/search/search.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    searchHistory:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var searchHistory = wx.getStorageSync('searchHistory') || []
    this.setData({
      searchHistory
    })
    
  },
  BackPage() {
    wx.navigateBack({
      delta: 1
    });
  },
  toHome(){
    wx.reLaunch({
      url: '/pages/index/index',
    })
  },
  search(e){
    console.log(e)
    var searchHistory=this.data.searchHistory
    searchHistory.unshift(e.detail.value)
    if(searchHistory.length>5){
      searchHistory.pop()
    }
    wx.setStorageSync('searchHistory', searchHistory)
    this.setData({
      searchHistory
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})