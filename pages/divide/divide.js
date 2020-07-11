// pages/divide/divide.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    listCur: {id:1,name:'推荐'},
    list: [
      {id:0,
        name:'推荐专区',
        classList:[{
          name:'员工精选',
          img:'https://yanxuan.nosdn.127.net/aa35b05c0ecf88bcceb58b9faf644cf9.png?quality=75&type=webp&imageView'
        },{
          name:'人气好物',
          img:'https://yanxuan.nosdn.127.net/036640056a47089a8a437cb14dc127e8.png?quality=75&type=webp&imageView'
        },{
          name:'每满300-200',
          img:'https://yanxuan.nosdn.127.net/3e234d8b3af71c7cd1d45bb57ed6f874.png?quality=75&type=webp&imageView'
        },{
          name:'消暑美食',
          img:'https://yanxuan.nosdn.127.net/302806b76899547e9b500215feb2e455.png?quality=75&type=webp&imageView'
        },{
          name:'防晒好物',
          img:'https://yanxuan.nosdn.127.net/0f8e005a84f4b7f4070818abf1da83fb.png?quality=75&type=webp&imageView'
        },
        ]
      },
      {id:1,
        name:'新品专区',
        classList:[{
          name:'居家生活新品',
          img:'https://yanxuan-item.nosdn.127.net/5144fcd811ac6a1a6c602a5b91c9a6b5.png?quality=75&type=webp&imageView'
        },{
          name:'服饰鞋包新品',
          img:'https://yanxuan-item.nosdn.127.net/cf180a1c5c00f2945e907f1c91298e60.png?quality=75&type=webp&imageView'
        },{
          name:'美食酒水新品',
          img:'https://yanxuan-item.nosdn.127.net/f5af7de5287afce9966896f2b0404bc6.png?quality=75&type=webp&imageView'
        },{
          name:'个护清洁新品',
          img:'https://yanxuan-item.nosdn.127.net/b6fd85687adc4723013567fe4d48ad36.png?quality=75&type=webp&imageView'
        },{
          name:'运动旅行新品',
          img:'https://yanxuan-item.nosdn.127.net/470d76785728c2aa6368faa153d76d3e.png?quality=75&type=webp&imageView'
        },
        ]
      },
      {id:2,
        name:'居家生活',
        classList:[{
          name:'收纳',
          img:'https://yanxuan.nosdn.127.net/ccf0ff26ca7bf8bbbc8683a740e28ae9.png?quality=75&type=webp&imageView'
        },{
          name:'晾晒除味',
          img:'https://yanxuan.nosdn.127.net/36d167a99e28b00dd08aa5e45fd33946.png?quality=75&type=webp&imageView'
        },{
          name:'毛巾浴巾',
          img:'https://yanxuan.nosdn.127.net/f6eaa94e8920dd4290b9da7c545c8841.png?quality=75&type=webp&imageView'
        },{
          name:'居家拖鞋',
          img:'https://yanxuan.nosdn.127.net/3e0c0c0f1d842ae66f4fbfd50a571ac1.png?quality=75&type=webp&imageView'
        },{
          name:'家庭医疗',
          img:'https://yanxuan.nosdn.127.net/3e60f0abe39d4cce0237edffad25c459.png?quality=75&type=webp&imageView'
        },
        ]
      },
      {id:3,
        name:'服饰鞋包',
        classList:[{
          name:'收纳',
          img:'https://yanxuan.nosdn.127.net/ccf0ff26ca7bf8bbbc8683a740e28ae9.png?quality=75&type=webp&imageView'
        },{
          name:'晾晒除味',
          img:'https://yanxuan.nosdn.127.net/36d167a99e28b00dd08aa5e45fd33946.png?quality=75&type=webp&imageView'
        },{
          name:'毛巾浴巾',
          img:'https://yanxuan.nosdn.127.net/f6eaa94e8920dd4290b9da7c545c8841.png?quality=75&type=webp&imageView'
        },{
          name:'居家拖鞋',
          img:'https://yanxuan.nosdn.127.net/3e0c0c0f1d842ae66f4fbfd50a571ac1.png?quality=75&type=webp&imageView'
        },{
          name:'家庭医疗',
          img:'https://yanxuan.nosdn.127.net/3e60f0abe39d4cce0237edffad25c459.png?quality=75&type=webp&imageView'
        },
        ]
      },
      {id:4,
        name:'美食酒水',
        classList:[{
          name:'收纳',
          img:'https://yanxuan.nosdn.127.net/ccf0ff26ca7bf8bbbc8683a740e28ae9.png?quality=75&type=webp&imageView'
        },{
          name:'晾晒除味',
          img:'https://yanxuan.nosdn.127.net/36d167a99e28b00dd08aa5e45fd33946.png?quality=75&type=webp&imageView'
        },{
          name:'毛巾浴巾',
          img:'https://yanxuan.nosdn.127.net/f6eaa94e8920dd4290b9da7c545c8841.png?quality=75&type=webp&imageView'
        },{
          name:'居家拖鞋',
          img:'https://yanxuan.nosdn.127.net/3e0c0c0f1d842ae66f4fbfd50a571ac1.png?quality=75&type=webp&imageView'
        },{
          name:'家庭医疗',
          img:'https://yanxuan.nosdn.127.net/3e60f0abe39d4cce0237edffad25c459.png?quality=75&type=webp&imageView'
        },
        ]
      },
      {id:5,
        name:'个护清洁',
        classList:[{
          name:'收纳',
          img:'https://yanxuan.nosdn.127.net/ccf0ff26ca7bf8bbbc8683a740e28ae9.png?quality=75&type=webp&imageView'
        },{
          name:'晾晒除味',
          img:'https://yanxuan.nosdn.127.net/36d167a99e28b00dd08aa5e45fd33946.png?quality=75&type=webp&imageView'
        },{
          name:'毛巾浴巾',
          img:'https://yanxuan.nosdn.127.net/f6eaa94e8920dd4290b9da7c545c8841.png?quality=75&type=webp&imageView'
        },{
          name:'居家拖鞋',
          img:'https://yanxuan.nosdn.127.net/3e0c0c0f1d842ae66f4fbfd50a571ac1.png?quality=75&type=webp&imageView'
        },{
          name:'家庭医疗',
          img:'https://yanxuan.nosdn.127.net/3e60f0abe39d4cce0237edffad25c459.png?quality=75&type=webp&imageView'
        },
        ]
      },
    ],
    load: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
 
  },

  jumpSearch(){
    wx.navigateTo({
      url: '../search/search',
    })
  },

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
  },
  VerticalMain(e) {
    let that = this;
    let list = this.data.list;
    let tabHeight = 0;
    if (this.data.load) {
      for (let i = 0; i < list.length; i++) {
        let view = wx.createSelectorQuery().select("#main-" + list[i].id);
        view.fields({
          size: true
        }, data => {
          list[i].top = tabHeight;
          tabHeight = tabHeight + data.height;
          list[i].bottom = tabHeight;     
        }).exec();
      }
      that.setData({
        load: false,
        list: list
      })
    }
    let scrollTop = e.detail.scrollTop + 20;
    for (let i = 0; i < list.length; i++) {
      if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
        that.setData({
          VerticalNavTop: (list[i].id - 1) * 50,
          TabCur: list[i].id
        })
        return false
      }
    }
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