const app=getApp()
var WxParse = require('../../wxParse/wxParse.js');
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    CustomBar: app.globalData.CustomBar,
    contentId:0,
    product:{
      id:'123',
      class:'家具',
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
      title:'瘦子才能做的椅子',
      subtitle:'腰椎健康范，护腰塑形坐垫腰椎健康范，护腰塑形坐垫腰椎健康范',
      express:{
        least:50,
        fee:10
      },
      comment:[
        {nickName:'肉****旭',avatarUrl:'https://yanxuan.nosdn.127.net/046fb81b7e75357bbd52b17d934f3aee',content:'坐着不舒服，体验感很一般，坐一会儿臀部、大腿痛，包装盒被阿姨收走了，就没退货了。',reply:'',score:5},
        {nickName:'肉****旭',avatarUrl:'https://yanxuan.nosdn.127.net/046fb81b7e75357bbd52b17d934f3aee',content:'坐着不舒服，体验感很一般，坐一会儿臀部、大腿痛，包装盒被阿姨收走了，就没退货了。',reply:'',score:4},
        {nickName:'肉****旭',avatarUrl:'https://yanxuan.nosdn.127.net/046fb81b7e75357bbd52b17d934f3aee',content:'坐着不舒服，体验感很一般，坐一会儿臀部、大腿痛，包装盒被阿姨收走了，就没退货了。',reply:'您好，非常抱歉给您带来困扰，您反馈的问题已有客服为您处理完成，关于您反馈的问题小选会登记告知相关团队，后续会优化产品，希望您能一如既往的支持严选，祝您生活愉快！',score:3},
        {nickName:'肉****旭',avatarUrl:'https://yanxuan.nosdn.127.net/046fb81b7e75357bbd52b17d934f3aee',content:'坐着不舒服，体验感很一般，坐一会儿臀部、大腿痛，包装盒被阿姨收走了，就没退货了。',reply:'',score:4},
        {nickName:'肉****旭',avatarUrl:'https://yanxuan.nosdn.127.net/046fb81b7e75357bbd52b17d934f3aee',content:'坐着不舒服，体验感很一般，坐一会儿臀部、大腿痛，包装盒被阿姨收走了，就没退货了。',reply:'',score:5},
      ],
      commentCount:155,
    },
    groupList:[
      {nickName:'张三',avatarUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594958967497&di=d5353bf5b7b5da9454e2d79c52301c8c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201410%2F09%2F20141009224754_AswrQ.jpeg',time:'1595953275392',id:''},
      {nickName:'李四',avatarUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594958967496&di=9db9ef94a56ed8820316a19701c071ec&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201901%2F17%2F20190117230425_eofqv.thumb.700_0.jpg',time:'1595953276392',id:''},
      {nickName:'王五',avatarUrl:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2091711702,2468700162&fm=11&gp=0.jpg',time:'1595953278392',id:''},
      {nickName:'赵六',avatarUrl:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg',time:'1595953284392',id:''},
    ],
    collect:false,
    showSku:false,
    count:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var article = '<div class="dt-section dt-section-1"><div class="m-detailHtml"><p><img src="https://yanxuan-item.nosdn.127.net/ffd5e7a79fa7b74496d9a4905502f517.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/ffd5e7a79fa7b74496d9a4905502f517.jpg" style="white-space: normal;"></p><p><img src="https://yanxuan-item.nosdn.127.net/6572d418593087664af63e488cb30c18.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/6572d418593087664af63e488cb30c18.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/8e6a90d15d9a67c4a40e0b611f6038f1.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/8e6a90d15d9a67c4a40e0b611f6038f1.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/eb5834e59090eeba27d782bf80ccd123.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/eb5834e59090eeba27d782bf80ccd123.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/92723452e108fd40fc721318eb470bd6.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/92723452e108fd40fc721318eb470bd6.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/e57fc41d7d5ca2702caae01c0b5823e3.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/e57fc41d7d5ca2702caae01c0b5823e3.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/0e52947f1ee6269a93ecc743da78f90b.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/0e52947f1ee6269a93ecc743da78f90b.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/ce00f45ae88b535085db3de5d7834290.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/ce00f45ae88b535085db3de5d7834290.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/8dcf14c477d819d51d7a79f1644f87d3.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/8dcf14c477d819d51d7a79f1644f87d3.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/fe855073a8b3f8947702b3488767b0a7.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/fe855073a8b3f8947702b3488767b0a7.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/1e44acdde766956234d93cad99a00943.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/1e44acdde766956234d93cad99a00943.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/c0b9039d15a0de9cd4b6c9dddd9bf66a.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/c0b9039d15a0de9cd4b6c9dddd9bf66a.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/9150761157a6ad01bbefbead78bdb807.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/9150761157a6ad01bbefbead78bdb807.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/592f169d7c8e00cb5a11eb7c8e2c67b8.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/592f169d7c8e00cb5a11eb7c8e2c67b8.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/860cc505ed10351e05b68ef8d17c2138.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/860cc505ed10351e05b68ef8d17c2138.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/4fc8e21c6c9855ba5395179bcf0af52d.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/4fc8e21c6c9855ba5395179bcf0af52d.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/1d943ece953bcff789fd290e3d4f6234.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/1d943ece953bcff789fd290e3d4f6234.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/c9da64628a7223fed04e6e59dfc9c2f2.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/c9da64628a7223fed04e6e59dfc9c2f2.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/0b3c840e984fdb3bf6e1e63f2f0e5572.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/0b3c840e984fdb3bf6e1e63f2f0e5572.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/243bcef08788400932ca66b9b199e9e0.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/243bcef08788400932ca66b9b199e9e0.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/f4ed772acbc4d43781174afc295f83c8.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/f4ed772acbc4d43781174afc295f83c8.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/94157045ac1e0f6b89f5326866578e31.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/94157045ac1e0f6b89f5326866578e31.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/77eebf69aab703df9e86207495a3045c.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/77eebf69aab703df9e86207495a3045c.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/0e4946fdd876bf87ecc20dc4ca49fcc9.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/0e4946fdd876bf87ecc20dc4ca49fcc9.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/5f8fc65dd1c993448f015a831417508d.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/5f8fc65dd1c993448f015a831417508d.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/51c3fe20d215e7067b33e7fd38a36301.gif?imageView" _src="https://yanxuan-item.nosdn.127.net/51c3fe20d215e7067b33e7fd38a36301.gif"></p><p><img src="https://yanxuan-item.nosdn.127.net/471b7090e689278cee0c8628a5e4e88e.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/471b7090e689278cee0c8628a5e4e88e.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/7ecb2549bc1643ce8a1901f4520daedf.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/7ecb2549bc1643ce8a1901f4520daedf.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/ba699e82898a161565a16bb1bd24150b.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/ba699e82898a161565a16bb1bd24150b.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/30bbafe295b0c74993359ed824fc868f.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/30bbafe295b0c74993359ed824fc868f.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/8de3badafab5ff535f97d012ec7d65cd.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/8de3badafab5ff535f97d012ec7d65cd.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/ffecf4d4c99f51ff0e9ff0de2332e65f.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/ffecf4d4c99f51ff0e9ff0de2332e65f.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/5e9cb85071bb8e66dc092787f1ee1b6a.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/5e9cb85071bb8e66dc092787f1ee1b6a.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/e54b4c0a3cd2c7bd48bd6640c962680a.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/e54b4c0a3cd2c7bd48bd6640c962680a.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/7338ec158bc55cebc3d6cbc493d876b6.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/7338ec158bc55cebc3d6cbc493d876b6.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/4ad3b8ec969c8ede4c5b6370f2b1ee93.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/4ad3b8ec969c8ede4c5b6370f2b1ee93.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/8e1ba269b1f89842c829f62f873a8120.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/8e1ba269b1f89842c829f62f873a8120.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/9e73f97f40aa7115918c14156911b511.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/9e73f97f40aa7115918c14156911b511.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/df3f26c243d3279ef0c5999282bf519e.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/df3f26c243d3279ef0c5999282bf519e.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/6c268b73534d082f4dfabbdf30ec6c18.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/6c268b73534d082f4dfabbdf30ec6c18.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/0a259d78dd0ae3a40d927d97dc37db4e.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/0a259d78dd0ae3a40d927d97dc37db4e.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/0428d625652d51ccd0e2fada6fb97399.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/0428d625652d51ccd0e2fada6fb97399.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/ef97511d3f2da6de3c3d6ff4e7a21fce.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/ef97511d3f2da6de3c3d6ff4e7a21fce.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/688cdacc144fdb5fac7239506f8de0ee.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/688cdacc144fdb5fac7239506f8de0ee.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/21d1509737a0cb8e845cae9c15d604e8.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/21d1509737a0cb8e845cae9c15d604e8.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/ebb60553449359fa123fdbb8670c4985.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/ebb60553449359fa123fdbb8670c4985.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/c3da254a93dfb7258a977f212b2c7cf1.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/c3da254a93dfb7258a977f212b2c7cf1.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/2ddb5e054f5dac11a31448d211eecdf6.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/2ddb5e054f5dac11a31448d211eecdf6.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/cac6bf8993d2c63385e30dceabb18a0b.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/cac6bf8993d2c63385e30dceabb18a0b.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/37e89b20c181bacb8ea8fbc9206a3b93.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/37e89b20c181bacb8ea8fbc9206a3b93.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/a3a4f096ac285d1b5d90d7b99c63a792.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/a3a4f096ac285d1b5d90d7b99c63a792.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/a5e22ecc29a294b53723edccfade68cd.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/a5e22ecc29a294b53723edccfade68cd.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/c99b2d20f73d0d83a33c41dcab5468d3.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/c99b2d20f73d0d83a33c41dcab5468d3.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/f25a62233ca722e24a675e0a1d0e2769.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/f25a62233ca722e24a675e0a1d0e2769.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/4d60b1d7f91fe7ccbbfd5c1af430ee4f.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/4d60b1d7f91fe7ccbbfd5c1af430ee4f.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/8654081778483ab06a7997356ad27997.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/8654081778483ab06a7997356ad27997.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/a4b22a859a50e5c17ab5ef6f8b5b05f5.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/a4b22a859a50e5c17ab5ef6f8b5b05f5.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/4a86d027198a4113a2a4dda3ccd145f9.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/4a86d027198a4113a2a4dda3ccd145f9.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/270092d7b22e66ef4197a29fa9f09e20.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/270092d7b22e66ef4197a29fa9f09e20.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/6f5eb7721474a460476e495e136723cd.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/6f5eb7721474a460476e495e136723cd.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/990d959efcb4286d90e2bff3441b621b.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/990d959efcb4286d90e2bff3441b621b.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/1c61b8f595f26c56ced3701621d660ca.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/1c61b8f595f26c56ced3701621d660ca.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/485919afb606510f784fc962de46c1f2.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/485919afb606510f784fc962de46c1f2.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/d5d567bb6635863c5f96e1eaada9f27d.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/d5d567bb6635863c5f96e1eaada9f27d.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/5dabc584e4d390b98448af2f29bac262.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/5dabc584e4d390b98448af2f29bac262.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/14b7e59f9d1ea03e65b6dbde20288d69.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/14b7e59f9d1ea03e65b6dbde20288d69.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/e6e52fda8a7041762d601acd88fa9cd4.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/e6e52fda8a7041762d601acd88fa9cd4.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/5413b2ced110d49e2ab91855726f2e3c.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/5413b2ced110d49e2ab91855726f2e3c.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/c5deb29d51ad36277e7285d88015708b.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/c5deb29d51ad36277e7285d88015708b.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/f1ef05cfdade605d0bdbad8b5fa82d8d.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/f1ef05cfdade605d0bdbad8b5fa82d8d.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/1cdf73523005de04ac2e9c78076bad96.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/1cdf73523005de04ac2e9c78076bad96.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/16cc8ac592769e5c18a4131d23472841.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/16cc8ac592769e5c18a4131d23472841.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/6f0fc19434438a5133079e9f4bdb841c.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/6f0fc19434438a5133079e9f4bdb841c.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/852076f1630db53b0c63e910aef00e84.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/852076f1630db53b0c63e910aef00e84.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/b1e475f62a5e109a6784dd23c3410278.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/b1e475f62a5e109a6784dd23c3410278.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/738005ce8bc0e37716253cb855886a51.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/738005ce8bc0e37716253cb855886a51.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/d46da8f5064800999aaf1e102a78a561.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/d46da8f5064800999aaf1e102a78a561.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/5710528ba92e8c55bdb57500cd2bcce0.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/5710528ba92e8c55bdb57500cd2bcce0.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/f16fb5398f878286c2291e05a36b63db.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/f16fb5398f878286c2291e05a36b63db.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/288f33548615d6c550e1ce4f18d2ccaa.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/288f33548615d6c550e1ce4f18d2ccaa.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/75b52ad852b284662e89b47c3dbdf14e.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/75b52ad852b284662e89b47c3dbdf14e.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/7947dc6a29047663513849de447c9cb4.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/7947dc6a29047663513849de447c9cb4.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/3641cdfe866024fb3ff6641f88def9ad.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/3641cdfe866024fb3ff6641f88def9ad.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/08e441c64a7753a360427ba56ccdf9b7.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/08e441c64a7753a360427ba56ccdf9b7.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/ff03b37e265db447102ca302e18ce7f7.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/ff03b37e265db447102ca302e18ce7f7.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/8b8632f20eeb7793041c76a14d2db52d.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/8b8632f20eeb7793041c76a14d2db52d.jpg" style=""></p><p><img src="https://yanxuan-item.nosdn.127.net/4d913583a64f7d64c2dacc37abace30c.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/4d913583a64f7d64c2dacc37abace30c.jpg" style=""></p><p style="white-space: normal;"><img src="https://yanxuan-item.nosdn.127.net/7b1006f2b961030111334549bdcbf650.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/7b1006f2b961030111334549bdcbf650.jpg"></p><p style="white-space: normal;"><img src="https://yanxuan-item.nosdn.127.net/23e9572fbc47d6106c124bff1095cac8.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/23e9572fbc47d6106c124bff1095cac8.jpg"></p><p style="white-space: normal;"><img src="https://yanxuan-item.nosdn.127.net/c908fddd772216d9fdeebb99aaed40f2.jpg?quality=75&amp;type=webp&amp;imageView" _src="https://yanxuan-item.nosdn.127.net/c908fddd772216d9fdeebb99aaed40f2.jpg"></p></div></div>';
    var that = this;
    WxParse.wxParse('article', 'html', article, that, 0);
    this.groupList()
  },
  changeContent(e){
    this.setData({
      contentId:e.currentTarget.dataset.id
    })
  },

  groupList(){
    var groupList = this.data.groupList
    var group_list=[]
    var that = this
    var resTime = function(){
      var res_group_list = []
      group_list = groupList.map(item=>{
        return{
          time:util.resTime(item.time),
          avatarUrl:item.avatarUrl,
          nickName:item.nickName,
          id:item.id
        }
      })
      for(var i=0;i<group_list.length;i+=2){
        res_group_list.push(group_list.slice(i,i+2))
      }
      that.setData({
        res_group_list:res_group_list
      })
    }
    setInterval(resTime,1000)
  },


  buy(e){
    console.log(e)
    var showSku=this.data.showSku
    var id = e.currentTarget.id
    if(!showSku){
      this.setData({
        showSku:true
      })
    }else{
      if(id=='buy'){
        wx.navigateTo({
          url: '../pay/pay',
        })

      }else{
        wx.navigateTo({
          url: '../pay/pay',
        })
      }
    }
  },
  hideSku(){
    this.setData({
      showSku:false
    })
  },
  minus(){
    var count = this.data.count
    if(count>1){
      count--
      this.setData({
        count
      })
    }
  },
  plus(){
    var count = this.data.count
    count++
    this.setData({
      count
    })
  },
  preventMove(){

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