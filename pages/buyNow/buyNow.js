// pages/buyNow/buyNow.js
const app = getApp();
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[{
      image:'https://yanxuan-item.nosdn.127.net/26eec4fa145847a8b99b3649132db0ff.png?type=webp&imageView&thumbnail=290x0&quality=75',
      title:'腰椎健康范，护腰塑形坐垫腰椎健康范，护腰塑形坐垫',
      time:'1595953278392',
      id:'11',
      price:'347',
      cost:'400'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var list = this.data.list
    var that = this
    var resTime = function(){
      var list_res = [];
      list_res = list.map(item=>{
        return{
          time:util.resTime(item.time),
          image:item.image,
          title:item.title,
          id:item.id,
          price:item.price,
          cost:item.cost,
        }
      })
      that.setData({
        list:list_res
      })
    }
    setInterval(resTime,1000)
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