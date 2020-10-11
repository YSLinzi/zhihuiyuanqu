// pages/gonglue/dakaquan/dakaquan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    daka: [
      {
        id: 1,
        hastext: true,
        isphoto: true,
        isvideo: false,
        userimg: '/pages/assets/travel-img/dashahe.png',
        username: '王宽',
        place: '紫薇亭',
        timetext: '2020/09/27 12:05:06',
        dakatext: "秋日浪漫，邀您共赏",
        photolist: ['/pages/assets/travel-img/dashahe.png', '/pages/assets/travel-img/dashahe.png'],
        videourl: '',
      },
      {
        id: 2,
        hastext: true,
        isphoto: true,
        isvideo: false,
        userimg: '/pages/assets/travel-img/dashahe.png',
        username: '王宽',
        place: '紫薇亭',
        timetext: '2020/09/27 12:05:06',
        dakatext: "秋日浪漫，邀您共赏",
        photolist: ['/pages/assets/travel-img/dashahe.png', '/pages/assets/travel-img/dashahe.png'],
        videourl: '',
      },
      {
        id: 3,
        hastext: true,
        isphoto: true,
        isvideo: false,
        userimg: '/pages/assets/travel-img/dashahe.png',
        username: '王宽',
        place: '紫薇亭',
        timetext: '2020/09/27 12:05:06',
        dakatext: "秋日浪漫，邀您共赏",
        photolist: ['/pages/assets/travel-img/dashahe.png', '/pages/assets/travel-img/dashahe.png'],
        videourl: '',
      },
    ], //旅游信息合集
  },

  // 关于页面跳转函数
  totopicnotes: function (e) {
    wx.redirectTo({
      url: '../topicNotes/topicNotes',
    })
  },
  totravelnotes: function (e) {
    wx.redirectTo({
      url: '../travelNotes/travelNotes',
    })
  },
  toissue: function (e) {
    wx.navigateTo({
      url: '../../issuenote/issuenote',
    })
  },
  todakaquan: function (e) {
   
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