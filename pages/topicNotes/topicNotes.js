// pages/topicNotes/topicNotes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    notes: [
      {
      titleimg : '/pages/assets/travel-img/dashahe.png',
        titletext: "秋日浪漫，邀您共赏"
      },
      {
        titleimg: '/pages/assets/travel-img/binhai3.png',
        titletext: '滨海休闲绿道，骑车徒步自由行',
      },
      {
        titleimg: '/pages/assets/travel-img/binhai.png',
        titletext: '用相机领略绿道风光',
      },
    ]
  },

  totopicnotes: function (e) {
    
  },
  totravelnotes: function (e) {
    wx.redirectTo({
      url: '../travelNotes/travelNotes',
    })
  },
  toissue: function (e) {
    wx.navigateTo({
      url: '../issuenote/issuenote',
    })
  },

  likeit: function(e){
    var index = e.currentTarget.dataset.curindex;
    console.log(e.detail)
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