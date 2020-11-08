// pages/huodong/content/centent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    actID: "nonono",
    acttitle: "测试活动",
    actImgurl: "../../assets/images/main_list1.png",
    starttime: "2020-09-08",
    endtime: "2020-10-20",
    isend: 'false',
    baoming: 'false',
    where: '淘金山紫薇亭',
    intro: '走在淘金山绿道上，迤逦绵延的群山，碧蓝如洗的湖水，蜿蜒曲折的绿道，沿径盛放的花圃，远处的城市仿佛被装入一个生机盎然的相框。“一半山水一半城”的美丽展现无遗。每一片花瓣上都沾染着春色，它们热热闹闹地开满山谷，娇妍尽现。绿道两旁，花树舒展，宫粉紫荆、黄花风铃木、木棉花、簕杜鹃、樱花……错落相映，黄粉紫相间，绿叶叠叠。淘金山邀您一同欣赏花海风光。',
    tip: ['工作人员将在绿道出入口对游客进行体温检测，游客应戴好口罩进行游览。','体温超过37.2℃的游客不被允许进入绿道。',
    '加强园区内巡查，减少人员聚集。','当实时在园人数超过3000人时将进行限流。']
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
    if(JSON.parse(this.options.id) == "1ckajsbcksj"){
      this.setData({
        actID: JSON.parse(this.options.id),
        actclass: "inner",
        acttitle: "淘金山紫薇花观赏",
        actImgurl: "../../assets/images/main_list2.jpg",
        starttime: "2020-09-08",
        endtime: "2020-11-20",
        isend: 'false',
        baoming: 'false',
        where: '淘金山紫薇亭',
        intro: '走在淘金山绿道上，迤逦绵延的群山，碧蓝如洗的湖水，蜿蜒曲折的绿道，沿径盛放的花圃，远处的城市仿佛被装入一个生机盎然的相框。“一半山水一半城”的美丽展现无遗。每一片花瓣上都沾染着春色，它们热热闹闹地开满山谷，娇妍尽现。绿道两旁，花树舒展，宫粉紫荆、黄花风铃木、木棉花、簕杜鹃、樱花……错落相映，黄粉紫相间，绿叶叠叠。淘金山邀您一同欣赏花海风光。',
        tip: ['工作人员将在绿道出入口对游客进行体温检测，游客应戴好口罩进行游览。','体温超过37.2℃的游客不被允许进入绿道。',
        '加强园区内巡查，减少人员聚集。','当实时在园人数超过3000人时将进行限流。']
    })
    }else if(JSON.parse(this.options.id) == "2ckdvwdsvbs"){
      this.setData({
      actID: JSON.parse(this.options.id),
      actclass: "outer",
      acttitle: "广东省青少年创新思维及科技实践大赛",
      actImgurl: "../../assets/images/main_list3.png",
      starttime: "2020-09-08",
      endtime: "2020-11-30",
      isend: 'false',
      baoming: 'false',
      where: '淘金山科教活动中心',
      intro: '本次大赛已列为广东省教育厅《关于公布2019年度面向中小学生的全省性竞赛活动名单的通告》中2019年度全省性中小学生竞赛活动项目之一，旨在提高青少年创新意识和加强青少年实践能力，鼓励青少年开阔自然科学视野，推动广东省青少年科技教育工作广泛深入开展。据介绍，大赛以“与时代同步，和创新同行”为主题，现场设竞赛项目四大科技教育竞赛项目：创意结构搭建大赛（科技模型建构类）、电子制作锦标赛（电子电路制作类）、KOOV青少年创新挑战（主题式编程类）、AI人工智能公开赛（任务式编程类）。赛事围绕生活科学，紧扣新中国成立70周年爱国主题教育，联系人工智能、工业进步、自动化产业、垃圾分类等一系列社会前沿问题，并以兴趣为引导，激发青少年对知识的主动探究，打破固有思维，扩展动手实践能力，旨在培养青少年严密的逻辑思维、富有责任感的团队意识、超越自我的创新意识和锲而不舍的创新精神。活动宗旨是为师生科技创新活动增添新形式，尊重青少年的想象与创意表达，为广大师生提供一个充分展示创意沟通交流的平台，以青少年科技创新为出发点，增强创新意识，提升青少年科学素养，培养实践能力。',
      tip: ['请点击报名下载参赛须知文件']
      })}else{
        this.setData({
          state: 'false',
          articleID: JSON.parse(this.options.id)
        })
      
      }
     var endday =this.data.endtime.split('-')
     var end = new Date(endday[0],endday[1]-1,endday[2])
     var today = new Date()
     var diff = end.getTime() - today.getTime()

     if(diff<=0){
      this.setData({
        isend: 'true'
      })
     }else{
       isend: 'false'
     }
     

     this.setData({
      baoming : 'false'
    })
    
    var baomingls = wx.getStorageSync('mybaoming') || []
    
    console.log(this.data.actID)

    for(var i in baomingls){

      if(baomingls[i]['actid'] == this.data.actID){
        this.setData({
          baoming : 'true'
        })
      }
    }

     console.log(this.data.actID)
  },

  tobaoming(e){
    var s = 'id=' + JSON.stringify(this.data.actID) + '&'
    s += 'class=' + JSON.stringify(this.data.actclass) + '&'
    s += 'title=' + JSON.stringify(this.data.acttitle) + '&'
    s += 'imgurl='+ JSON.stringify(this.data.actImgurl) + '&'
    s += 'stime=' + JSON.stringify(this.data.starttime) + '&'
    s += 'etime=' + JSON.stringify(this.data.endtime)

    wx.navigateTo({
      url: '../baoming/baoming?' + s
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var baomingls = wx.getStorageSync('mybaoming') || []
    
    console.log(this.data.actID)

    for(var i in baomingls){

      if(baomingls[i]['actid'] == this.data.actID){
        this.setData({
          baoming : 'true'
        })
      }
    }
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