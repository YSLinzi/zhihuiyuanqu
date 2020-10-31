// pages/gonglue/article/article.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
      state: 'false',
      articleID: "cdsknclkvnkwslc1",
      articleTitle: "花开烂漫，邀你共赏！",
      htmlSnip: '<div class="div_class"><p class="p" style="white-space:pre-wrap;color:#3e3e3e;font-size:14px;margin-bottom:7px;letter-spacing:1px;line-height:160%;">&emsp;&emsp;相遇淘金山，一山一世界，一花一天涯，山中四季都有着我们难以想象的美丽。相约佛教圣地，共赏姹紫嫣红，静品花香，让游客情不自禁地放飞心情，拥抱蓝天白云，回味本心，悠哉悠哉!</p><img src="http://5b0988e595225.cdn.sohucs.com/images/20190618/8e7671c158df43708220bc7c6f5cb191.jpeg" alt="img" width=100%>\
       <p class="p" style="white-space:pre-wrap;color:#3e3e3e;font-size:14px;margin-bottom:7px;letter-spacing:1px;line-height:160%;">&emsp;&emsp;最美花开四月天，最好时光大清早。清晨淘金山蒙着薄薄的乳白色面纱，是雾非雾，缥缈极致。感悟微风吹过大地的感动，花开草绿孕育的安然之美。<br>&emsp;&emsp;淘金山上，不再寂静，尚有晨雾弥漫。就这样静静地守候烂漫山花的身旁，慢慢地听着花落的声音，轻轻地吻着花谢的芳香。</p></div>'
  },

  // 点赞功能函数
  zan: function () {
    var that = this;
    var cookie_id = wx.getStorageSync('articleZan') || []; //获取全部点赞的id
    if (cookie_id.includes(that.data.articleID)) {
      for (var j in cookie_id) {
        if (cookie_id[j] == that.data.articleID) {
          cookie_id.splice(j); //删除取消点赞的id
        }
      }

      that.setData({
        state: 'false'
      })

      wx.setStorageSync('articleZan', cookie_id);

      wx.showToast({
        title: "取消点赞!",
        icon: 'none'
      })
    } else {
      that.setData({
        state: 'true'
      })
      cookie_id.unshift(that.data.articleID); //新增赞的id
      wx.setStorageSync('articleZan', cookie_id);
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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(JSON.parse(options.id));// id);
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