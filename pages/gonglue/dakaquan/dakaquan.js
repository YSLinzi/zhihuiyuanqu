// pages/gonglue/dakaquan/dakaquan.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    daka: [
      {
        id: 1,
        hastext: true,
        isphoto: true,
        isvideo: false,
        userimg: '/pages/assets/travel-img/binhai.png',
        username: '小明',
        place: '紫薇亭',
        timetext: '2020/09/27 12:05:06',
        dakatext: "共游淘金山绿道",
        photolist: ['/pages/assets/travel-img/dashahe.png', '/pages/assets/travel-img/binhai2.png'],
        videourl: '',
      },
      {
        id: 2,
        hastext: true,
        isphoto: true,
        isvideo: false,
        userimg: '/pages/assets/travel-img/dashahe.png',
        username: '小红',
        place: '紫薇亭',
        timetext: '2020/09/27 12:05:06',
        dakatext: "打卡淘金山",
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
      url: '../daka/daka',
    })
  },
  todakaquan: function (e) {
   
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      search: this.search.bind(this)
  })
  },

  search: function (value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{text: '搜索结果', value: 1}, {text: '搜索结果2', value: 2}])
        }, 200)
    })
},
selectResult: function (e) {
    console.log('select result', e.detail)
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