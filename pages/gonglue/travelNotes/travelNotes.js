// pages/travelNotes/travelNotes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    water: [
      {
        id: 1,
        state: 'false',
        titleimg: '/pages/assets/images/main_list4.png',
        titletext: '两小时探索滨海休闲绿道，骑车徒步自由行~',
        likenum: 2
      },
      {
        id: 2,
        state: 'false',
        titleimg: '/pages/assets/travel-img/binhai.png',
        titletext: '淘金山绿道',
        likenum: 10
      },
      {
        id: 3,
        state: 'false',
        titleimg: '/pages/assets/travel-img/binhai2.png',
        titletext: '梧桐绿道半日赏玩',
        likenum: 8
      },
      {
        id: 4,
        state: 'false',
        titleimg: '/pages/assets/travel-img/binhai3.png',
        titletext: '马拉松！运动使我快乐！',
        likenum: 4
      },
      {
        id: 5,
        state: 'false',
        titleimg: '/pages/assets/travel-img/dashahe.png',
        titletext: '闹中取静！',
        likenum: 3
      },
    ],

    iszan: [],        //点过赞的id集合
  },

  totopicnotes: function (e) {
    wx.redirectTo({
      url: '../topicNotes/topicNotes',
    })
  },
  totravelnotes: function (e) {

  },
  toissue: function (e) {
    wx.navigateTo({
      url: '../issuenote/issuenote',
    })
  },
  todakaquan: function (e) {
    wx.redirectTo({
      url: '../dakaquan/dakaquan',
    })
  },

  // 点赞功能函数
  zan: function (item_id) {
    var that = this;
    var cookie_id = wx.getStorageSync('noteszan') || [];  //获取全部点赞的id
    for (var i = 0; i < that.data.water.length; i++) {
      if (that.data.water[i].id == item_id) {     //数据列表中找到对应的id
        var num = that.data.water[i].likenum;      //当前点赞数
        if (cookie_id.includes(item_id)) {         //已经点过赞了，取消点赞
          for (var j in cookie_id) {
            if (cookie_id[j] == item_id) {
              cookie_id.splice(j, 1);  //删除取消点赞的id
            }
          }
          --num;  //点赞数减1
          that.setData({
            [`water[${i}].likenum`]: num,         //es6模板语法，常规写法报错
            [`water[${i}.].state`]: 'false'    //我的数据中state为'false'是未点赞
          })
          wx.setStorageSync('noteszan', cookie_id);
          wx.showToast({
            title: "取消点赞!",
            icon: 'none'
          })
        } else {        //点赞操作

          ++num;    //点赞数加1
          that.setData({
            [`water[${i}].likenum`]: num,
            [`water[${i}.].state`]: 'true'
          })
          cookie_id.unshift(item_id);   //新增赞的id
          wx.setStorageSync('noteszan', cookie_id);
          wx.showToast({
            title: "点赞成功!",
            icon: 'none'
          })
        }
        //和后台交互，后台数据要同步
        /*wx.request({
          url: 'url',
          data: {
            shareid: item_id
          },
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: res => {
            console.log(res)
          }
        })*/
      }
    }
  },
  thumbsup: function (e) {
    var shareid = e.currentTarget.dataset.id;
    this.zan(shareid);
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