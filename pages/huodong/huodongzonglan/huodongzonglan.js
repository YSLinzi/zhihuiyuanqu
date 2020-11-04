// pages/huodong/huodongzonglan/huodongzonglan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    inputShowed: false,
    inputVal: "",

    actvities: [{
      actID: "1ckajsbcksj",
      actImgurl: "../../assets/images/main_list2.jpg",
      actTitle: "淘金山紫薇花观赏",
      actEndTime: "",
      isend: 'false',
    },{
      actID: "2ckdvwdsvbs",
      actImgurl: "../../assets/images/main_list3.png",
      actTitle: "广东省青少年创新思维及科技实践大赛",
      actEndTime: "",
      isend: 'false'
    },{
      actID: "3csjdvbsodv",
      actImgurl: "../../assets/images/main_list1.png",
      actTitle: "大沙河绿道公益亲子活动",
      actEndTime: "",
      isend: 'false'
    },{
      actID: "4vdjsbvj",
      actImgurl: "../../assets/travel-img/binhai3.png",
      actTitle: "淘金山科教知识普及活动",
      actEndTime: "",
      isend: 'true'
    },{
      actID: "5sdlvbslbvs",
      actImgurl: "../../assets/travel-img/binhai2.png",
      actTitle: "淘金山趣味马拉松大赛",
      actEndTime: "",
      isend: 'true'
    }]


  },

  getcontent(e){
    var shareid = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../content/content?id=' + JSON.stringify(shareid),
    });
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