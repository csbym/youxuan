// pages/draw/draw.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    drawList:[
      {id:0,image:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=159569440,568564938&fm=26&gp=0.jpg',title:'2积分'},
      {id:1,image:'https://yanxuan-item.nosdn.127.net/b88f31a58df11c0f1d5031d59c17734c.png?type=webp&imageView&quality=65&thumbnail=330x330',title:'无线靠枕'},
      {id:2,image:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=159569440,568564938&fm=26&gp=0.jpg',title:'10元满减红包'},
      {id:3,image:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1238739233,3333530116&fm=26&gp=0.jpg',title:'3元直减红包'},
      {id:4,image:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=159569440,568564938&fm=26&gp=0.jpg',title:'10积分'},
      {id:5,image:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1238739233,3333530116&fm=26&gp=0.jpg',title:'5元满减红包'},
      {id:6,image:'https://yanxuan-item.nosdn.127.net/760cc02d5a93dac05ca48d791483c8b3.png?type=webp&imageView&quality=65&thumbnail=330x330',title:'日式大床'},
      {id:7,image:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1238739233,3333530116&fm=26&gp=0.jpg',title:'3元满减红包'},
    ],
    drawId:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var drawList = this.data.drawList
    drawList.splice(4,0,{id:-1})
    console.log(drawList)
    this.setData({
      drawList
    })
  },
  
  //点击抽奖 
  getDraw(){
    var that = this;
    var drawId = 5;   //获取中奖序号
    var i = 0,j=0;
    var addId = function(){
      j++;
      that.setData({
        drawId:i
      })
      if(j==(24+drawId)){
        clearInterval(timer)
      }
      if(i<2){
        i++
      }else if(i==2){
        i+=2
      }else if(i==3){
        i-=3
      }else if(i==4){
        i+=3
      }else if(i==5){
        i-=2
      }else{
        i--
      }
    }
    var timer = setInterval(addId,120)
    
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