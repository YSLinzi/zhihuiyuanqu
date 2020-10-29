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
    showModal:false,
    scene_title:'',
    desc_text:'',
    Img_url:'',
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
    dongzhiwu:[{
      id:1,
      title:'风铃木',
      Img:'../assets/taojinshan-img/fenglingmu.png',
      detail:'黄花风铃木是紫葳科，风铃木属落叶乔木，高可达5米，树皮有深刻裂纹，小叶片对生，五叶轮生，卵状椭圆形，全叶被褐色细茸毛，先端尖，叶面粗糙；圆锥花序，顶生，花两性，萼筒管状，花冠金黄色，漏斗形，花缘皱曲，但为两侧对称花，甜香，子房二室，果实为蓇葖果，种子具翅；春季3-4月开花，先花后叶。'
    },
    {
      id:2,
      title:'红花荷',
      Img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1583173764,3104103917&fm=26&gp=0.jpg',
      detail:'红花荷是一种木本植物，开花的时候花朵比较美艳，是比较良好的观景树木。它比较适合园林养殖观赏的。红花荷喜欢阳性，不过小苗是比较耐阴的。生长的温度要求高一点，不过冬季的时候稍微能耐低温。养殖的时候要注意养殖在土层深厚的地方'
    },{
        id:3,
        title:'蓝花楹',
        Img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=618915018,1474814313&fm=26&gp=0.jpg',
        detail:'蓝花楹是紫葳科、蓝花楹属落叶乔木，高达15米。叶对生，为2回羽状复叶，小叶椭圆状披针形至椭圆状菱形，花蓝色，花序长达30厘米，直径约18厘米。花萼筒状，蒴果木质，扁卵圆形，长宽均约5厘米，中部较厚，四周逐渐变薄，不平展。花期5-6月。'
    },
    {
      id:4,
      title:'南洋楹',
      Img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=16909828,2440842242&fm=26&gp=0.jpg',
      detail:'南洋楹，又名“仁仁树”“仁人木”，是豆科，合欢属常绿大乔木。高达45m，胸径100cm以上，树干通直。树皮灰青至灰褐色，不裂。小枝具棱，淡绿色，皮孔明显，嫩时被毛。叶为二回羽状复叶，叶柄和叶轴上部的羽片着生处均有腺体，羽片11-20对，上部常对生，下部有时互生；小叶10-20对，细小，对生，无柄。'
  },
  {
    id:5,
    title:'香樟',
    Img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2135811048,3539056400&fm=26&gp=0.jpg',
    detail:'香樟，樟科樟属常绿大乔木，为亚热带常绿阔叶树种，在中国主要分布于长江以南及西南地区。香樟性喜温暖湿润的气候条件，不耐寒冷。它高可达30米，直径可达3米，树冠广卵形，树冠广展，枝叶茂密，气势雄伟，散发樟树的特有清香气息，是优良的绿化树、行道树及庭荫树。'
  },{
    id:6,
    title:'凌霄花',
    Img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1574688260,2710358218&fm=26&gp=0.jpg',
    detail:'凌霄花是紫葳科、凌霄属攀援藤本植物，拉丁学名：（Campsis grandiflora）分布于中国中部，性喜温暖湿润、有阳光的环境，稍耐荫。借气生根攀援它物向上生长,羽状复叶，小叶卵形，边缘有锯齿，花鲜红色，花冠漏斗形，结蒴果，喜欢排水良好土壤，较耐水湿、并有一定的耐盐碱能力。'
  }],
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
  //菜单按钮点击事件
  hideModel: function(){
    this.setData({
      showModal:false
    });
  },
  showInfo:function(e){
    // console.log(e);
    var arr = this.data.dongzhiwu;
    var index = e.currentTarget.dataset.msg.id;
    this.setData({
      showModal:true,
      scene_title:arr[index-1].title,
        Img_url:arr[index-1].Img,
        desc_text:arr[index-1].detail,
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