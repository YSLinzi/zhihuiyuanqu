// pages/travelNotes/travelNotes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    water : [
      {
      titleimg: '/pages/assets/images/main_list4.png',
        titletext: '两小时探索滨海休闲绿道，骑车徒步自由行~',
      likenum: 10
    },
      {
        titleimg: '/pages/assets/travel-img/binhai.png',
        titletext: '淘金山绿道',
        likenum: 10
      },
      {
        titleimg: '/pages/assets/travel-img/binhai2.png',
        titletext: '梧桐绿道半日赏玩',
        likenum: 10
      },
      {
        titleimg: '/pages/assets/travel-img/binhai3.png',
        titletext: '马拉松！运动使我快乐！',
        likenum: 10
      },
      {
        titleimg: '/pages/assets/travel-img/dashahe.png',
        titletext: '闹中取静！',
        likenum: 10
      },
    ]
  },

  totopicnotes: function(e){
    wx.redirectTo({
      url: '../topicNotes/topicNotes',
    })
  },
  totravelnotes: function(e){

  },
  toissue :function(e){
    wx.navigateTo({
      url: '../issuenote/issuenote',
    })
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