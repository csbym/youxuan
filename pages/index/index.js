const app = getApp();
Page({
  data: {
    cardCur:0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://yanxuan.nosdn.127.net/41d5845834d932aa19926c619063733e.jpg?type=webp&imageView&quality=75&thumbnail=750x0'
    }, {
      id: 1,
        type: 'image',
        url: 'https://yanxuan.nosdn.127.net/c7825eb65b88070927be849502bc80b7.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
    }, {
      id: 2,
      type: 'image',
      url: 'https://yanxuan.nosdn.127.net/390b37f1abc09b0ddde124066a3e019e.png?type=webp&imageView&quality=75&thumbnail=750x0'
    }, {
      id: 3,
      type: 'image',
      url: 'https://yanxuan.nosdn.127.net/2cc2b30559ca3db05498af5426893fb2.jpg?type=webp&imageView&quality=75&thumbnail=750x0'
    }],
    brandList:[{
      brand: '新品首发',
      url: 'https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png'
    }, {
      brand: '居家生活',
        url: 'https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png',
    }, {
      brand: '服饰鞋包',
      url: 'https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png'
    }, {
      brand: '美食酒水',
      url: 'https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png'
    }],
    prodcutList:[{
      title:'2020年全新折叠款，每天15分钟，缓解眼部疲劳酸痛',
      image:'https://yanxuan-item.nosdn.127.net/eab84c450936a793bcc6e2b059c14399.png?type=webp&imageView&quality=65&thumbnail=330x330',
      price:'369',
      original:'400',
      id:'1',
    },{
      title:'Air真无线耳机，空气感佩戴，2020年全新款',
      image:'https://yanxuan-item.nosdn.127.net/df276c5fb3e0e94a97cd5de255b7e520.png?type=webp&imageView&quality=65&thumbnail=330x330',
      price:'369',
      original:'400',
      id:'2',
    },{
      title:'三年陈普洱，新装玲珑柑普茶 130克（10颗）',
      image:'https://yanxuan-item.nosdn.127.net/ad0c7216a3e896c86fe3051896468dd1.png?type=webp&imageView&quality=65&thumbnail=330x330',
      price:'369',
      original:'400',
      id:'3',
    },{
      title:'精准定量“秒”吸收，春风996电子延时喷雾',
      image:'https://yanxuan-item.nosdn.127.net/274009b5996db77e29547ea28341c85f.png?type=webp&imageView&quality=65&thumbnail=330x330',
      price:'369',
      original:'400',
      id:'4',
    },{
      title:'享自由裸睡，天竺棉针织拼色四件套',
      image:'https://yanxuan-item.nosdn.127.net/c02cc0f571dc396188483cecb7c67565.png?type=webp&imageView&quality=65&thumbnail=330x330',
      price:'369',
      original:'400',
      id:'5',
    },]
  },
  onLoad() {
    
  },
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  jumpSearch(){
    wx.navigateTo({
      url: '../search/search',
    })
  },
  jumpProduct(e){
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../product/product?id='+id,
    })
  },


})