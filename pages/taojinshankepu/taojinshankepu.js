// pages/taojinshankepu/taojinshankepu.js
var app = getApp() 
let leftHeight = 0, rightHeight = 0; //分别定义左右两边的高度
let query;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0, 
    winHeight: 0, 
    // tab切换 
    currentTab: 0,
    list: [{
      title: '如何制作树叶书签',
      url: 'https://p0.ssl.img.360kuai.com/t01eea333270bf62007.gif',
     }, {
      title: '小小发明家',
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600629220694&di=abf7780bcdf9929c4f492b1bd6c2fab4&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170421%2F0ac88600566e48e0b9df269318ac7543_th.jpeg',
     },{
      title: '树叶相框DIY',
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600629120822&di=7f3bb1e70a45be707c1ea3b93dcb9f23&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20150706%2Fmp21430116_1436171922098_3.jpeg',
     },{
      title: '自制花盆',
      url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1061599899,119681977&fm=26&gp=0.jpg',
     },{
      title: '如何制作树叶书签',
      url: 'https://p0.ssl.img.360kuai.com/t01eea333270bf62007.gif',
     }
    ],
    dongzhi_list:[{
      id:1,
      title:'洋紫荆',
      imag:'https://bkimg.cdn.bcebos.com/pic/d52a2834349b033b0390305b11ce36d3d539bd13?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5'
    },
    {
      id:2,
      title:'非洲凌霄',
      imag:'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2203782008,97785372&fm=26&gp=0.jpg'
    },
    {
      id:3,
      title:'金凤花',
      imag:'https://bkimg.cdn.bcebos.com/pic/f9dcd100baa1cd11a4e1ad1fbc12c8fcc3ce2dbe?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxMTY=,g_7,xp_5,yp_5'
    },
    {
      id:4,
      title:'南洋楹',
      imag:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=16909828,2440842242&fm=26&gp=0.jpg',
    },
    {
      id:5,
      title:'香樟',
      imag:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2135811048,3539056400&fm=26&gp=0.jpg',
    },
    {
      id:6,
      title:'红花荷',
      imag:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1583173764,3104103917&fm=26&gp=0.jpg',
    }
  ],
    leftList: [],
    rightList: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() { 
    this.isLeft();
    var that = this; 
    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo( { 
     success: function( res ) { 
      that.setData( { 
       winWidth: res.windowWidth, 
       winHeight: res.windowHeight 
      }); 
     } 
    }); 
   }, 
  /** 
   * 滑动切换tab 
   */
 bindChange: function( e ) { 
  var that = this; 
  that.setData({ 
    currentTab: e.detail.current
   }); 
 }, 
 /** 
  * 点击tab切换 
  */
 swichNav: function( e ) { 
  var that = this; 
  if( this.data.currentTab === e.target.dataset.current ) { 
   return false; 
  } else { 
   that.setData( { 
    currentTab: e.target.dataset.current 
   }) 
  } 
 } ,
 async isLeft() {
  const { list, leftList, rightList } = this.data;
  query = wx.createSelectorQuery();
  for (const item of list) {
   leftHeight <= rightHeight ? leftList.push(item) : rightList.push(item); //判断两边高度，来觉得添加到那边
   await this.getBoxHeight(leftList, rightList);
  }
 },
 getBoxHeight(leftList, rightList) { //获取左右两边高度
  return new Promise((resolve, reject) => {
   this.setData({ leftList, rightList }, () => {
    query.select('#left').boundingClientRect();
    query.select('#right').boundingClientRect();
    query.exec((res) => {
     leftHeight = res[0].height; //获取左边列表的高度
     rightHeight = res[1].height; //获取右边列表的高度
     resolve();
    });
   });
  })
 },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})