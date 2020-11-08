// pages/topicNotes/topicNotes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal: "",
    inputShowed: false,
    notes: [{
        id: "cnskbfbepwnfi",
        state: 'false',
        titleimg: '/pages/assets/travel-img/dashahe.png',
        titletext: "秋日浪漫，邀您共赏"
      },
      {
        id: 2,
        state: 'false',
        titleimg: '/pages/assets/travel-img/binhai3.png',
        titletext: '滨海休闲绿道，骑车徒步自由行',
      },
      {
        id: 3,
        state: 'false',
        titleimg: '/pages/assets/travel-img/binhai.png',
        titletext: '用相机领略绿道风光',
      },
    ], //旅游信息合集

    iszan: [] //点过赞的id集合
  },


  //searchtab 函数
  /*showInput: function () {
    this.setData({
    inputShowed: 'true'
    });
    },
    hideInput: function () {
    this.setData({
    inputVal: "",
    inputShowed: false
    });
    // getList(this);
    },
    clearInput: function () {
    this.setData({
    inputVal: ""
    });
    // getList(this);
    },
    inputTyping: function (e) {
    //搜索数据
    // getList(this, e.detail.value);
    this.setData({
    inputVal: e.detail.value
    });
    },*/


  // 关于页面跳转函数
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
  todakaquan: function (e) {
    wx.redirectTo({
      url: '../dakaquan/dakaquan',
    })
  },

  //文章内容函数
  getcontent: function (e) {
    var shareid = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../article/article?id=' + JSON.stringify(shareid),
    });
  },

  // 点赞功能函数
  zan: function (item_id) {
    var that = this;
    var cookie_id = wx.getStorageSync('topiczan') || []; //获取全部点赞的id
    for (var i = 0; i < that.data.notes.length; i++) {
      if (that.data.notes[i].id == item_id) { //数据列表中找到对应的id
        if (cookie_id.includes(item_id)) { //已经点过赞了，取消点赞
          for (var j in cookie_id) {
            if (cookie_id[j] == item_id) {
              cookie_id.splice(j, 1); //删除取消点赞的id
            }
          }
          that.setData({
            [`notes[${i}.].state`]: 'false'
          })
          wx.setStorageSync('topiczan', cookie_id);
          wx.showToast({
            title: "取消收藏!",
            icon: 'none'
          })
        } else { //点赞操作
          that.setData({
            [`notes[${i}.].state`]: 'true'
          })
          cookie_id.unshift(item_id); //新增赞的id
          wx.setStorageSync('topiczan', cookie_id);
          wx.showToast({
            title: "收藏成功!",
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
    this.setData({
      search: this.search.bind(this)
    })
  },

  search: function (value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{
          text: '搜索结果',
          value: 1
        }, {
          text: '搜索结果2',
          value: 2
        }])
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