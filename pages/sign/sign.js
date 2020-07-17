// pages/sign/sign.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal:false,
    num:3,
    sign:false,
    numList: [{
      name: '1天',score:1,check:true
    }, {
      name: '2天',score:1,check:false
    }, {
      name: '3天',score:1,check:true
    }, {
      name: '4天',score:2,check:false
    }, {
      name: '5天',score:2,check:false
    }, {
      name: '6天',score:3,check:false
    }, {
      name: '7天',score:5,check:false
    }, 
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  signIn(){
    if(!this.data.sign){
      var numList = this.data.numList
      var num = this.data.num+1
      numList[num-1].check=true
      this.setData({
        num,
        numList,
        showModal:true,
        sign:true
      })
    }
  },
  hideModal(){
    this.setData({
      showModal:false
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