// pages/product/product.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    CustomBar: app.globalData.CustomBar,
    navTitle:'',
    product:{
      swiper:[
        {image:'https://yanxuan-item.nosdn.127.net/c57d4baa2d745dd5ee76c3864ce74133.png?type=webp&imageView&quality=75&thumbnail=750x0',
        type:'image'
      },
        {image:'https://yanxuan-item.nosdn.127.net/f8408b2fd42bc8399a40fa115a8a0d9d.png?type=webp&imageView&quality=75&thumbnail=750x0',
        type:'image'},
        {image:'https://yanxuan-item.nosdn.127.net/b22f29789d01d2a032a080ec24352128.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        type:'image'},
        {image:'https://yanxuan-item.nosdn.127.net/40adb96db5655e45cfd107ecb7cb185c.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        type:'image'},
        {image:'https://yanxuan-item.nosdn.127.net/fa3a0c0d86535882de238593e6271aaa.png?type=webp&imageView&quality=75&thumbnail=750x0',
        type:'image'},
      ],
      price:359,
      orginal:400,
      title:'腰椎健康范，护腰塑形坐垫腰椎健康范，护腰塑形坐垫腰椎健康范',
      express:{
        least:50,
        fee:10
      }

    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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