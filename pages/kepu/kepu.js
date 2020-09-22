// pages/kepu/kepu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[{
      id:1,
      content:'历史故事',
      img:'../assets/icon/lishi.png'
    },
    {
      id:2,
      content:'动物植物',
      img:'../assets/icon/dongzhiwu.png'
    },
    {
        id:3,
        content:'科教活动',
        img:'../assets/icon/kejiaohuodong.png'
    },
  ],
  guanyulist:[{
    id:1,
    content:'我要提问',
    img:'../assets/icon/tiwen.png'
  },
  {
    id:2,
    content:'答题进阶',
    img:'../assets/icon/dati.png'
  },
],
  caidanlist:[{
    id:1,
    content:'淘金山绿道',
    img:'../assets/duotiaolvdao-img/taojinshan.png',
    url:"../taojinshankepu/taojinshankepu"
    
  },
  {
    id:2,
    content:'光明岭绿道',
    img:'../assets/duotiaolvdao-img/guangmingda.png'
  },
  {
    id:3,
    content:'梧桐绿道',
    img:'../assets/duotiaolvdao-img/wutong.png'
  },
  {
    id:4,
    content:'石岩湖绿道',
    img:'../assets/duotiaolvdao-img/shiyanhu.png'
  },
  {
    id:5,
    content:'海贝湾绿道',
    img:'../assets/duotiaolvdao-img/haibeiwanlvdao.png'
  },
  {
    id:6,
    content:'大沙河绿道',
    img:'../assets/duotiaolvdao-img/dashahe.png'
  },
  {
    id:7,
    content:'溪涌东头坑',
    img:'../assets/duotiaolvdao-img/xiyongdongtou.png'
  },
  {
    id:8,
    content:'龙华环城绿道',
    img:'../assets/duotiaolvdao-img/longhua.png'
  },
  {
    id:9,
    content:'罗湖绿道',
    img:'../assets/duotiaolvdao-img/luohu.png'
  },
  {
    id:10,
    content:'罗湖绿道',
    img:'../assets/duotiaolvdao-img/luohu.png'
  },
],
showModal:true,
},
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  //历史故事、动植物等跳转
  dispath:function(e){
    console.log(e.currentTarget.dataset.msg.id);
    if (1==e.currentTarget.dataset.msg.id){
      wx.navigateTo({
       url: '../lishigushi/lishigushi',
      })
    }else if(2==e.currentTarget.dataset.msg.id){
      wx.navigateTo({
       url: '../dongzhiwu/dongzhiwu',
      })
    }
    else if(3==e.currentTarget.dataset.msg.id){
      wx.navigateTo({
       url: '../kejiao/kejiao',
      })
    }
  },
  //关于绿道的选项跳转 
  changepage:function (e) {
    console.log(e);
    if (1==e.currentTarget.dataset.msg.id){
      wx.navigateTo({
       url: '../woyaotiwen/woyaotiwen',
      })
    }else if(2==e.currentTarget.dataset.msg.id){
      wx.navigateTo({
       url: '../datijinjie/datijinjie',
      })
    }
  },
  //菜单按钮点击事件
  hideModel: function(){
    this.setData({
      showModal:false
    });
  },
  showModel:function(){
    console.log("hello");
    this.setData({
      showModal:true
    });
  }
})