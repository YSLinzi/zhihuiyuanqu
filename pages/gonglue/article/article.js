// pages/gonglue/article/article.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
      state: 'false',
      articleID: "cnskbfbepwnfi",
      articleTitle: "暂时没有文章详情",
      htmlSnip: '<div class="div_class"><p class="p">Life is&nbsp;<i>like</i>&nbsp;a box of<b>&nbsp;chocolates</b>.</p></div>'
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
    console.log(JSON.parse(options.id));// id;
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if(JSON.parse(this.options.id) == "fdsknclkvnkwslc1"){
      this.setData({
      state: 'false',
      articleID: "fdsknclkvnkwslc1",
      articleTitle: "两小时探索淘金山休闲绿道，骑车徒步自由行！",
      htmlSnip: '<div class="div_class"><p style="white-space:pre-wrap;color:#3e3e3e;font-size:14px;margin-bottom:7px;letter-spacing:1px;line-height:160%;">&emsp;&emsp;相遇淘金山，一山一世界，一花一天涯，山中四季都有着我们难以想象的美丽。相约佛教圣地，共赏姹紫嫣红，静品花香，让游客情不自禁地放飞心情，拥抱蓝天白云，回味本心，悠哉悠哉!</p><img  style="margin-bottom:7px;" src="http://5b0988e595225.cdn.sohucs.com/images/20190618/8e7671c158df43708220bc7c6f5cb191.jpeg" alt="img" width=100%><p style="white-space:pre-wrap;color:#3e3e3e;font-size:14px;margin-bottom:7px;letter-spacing:1px;line-height:160%;">&emsp;&emsp;最美花开四月天，最好时光大清早。清晨淘金山蒙着薄薄的乳白色面纱，是雾非雾，缥缈极致。感悟微风吹过大地的感动，花开草绿孕育的安然之美。<br>&emsp;&emsp;淘金山上，不再寂静，尚有晨雾弥漫。就这样静静地守候烂漫山花的身旁，慢慢地听着花落的声音，轻轻地吻着花谢的芳香。</p></div>'
    })
    }else if(JSON.parse(this.options.id) == "cnskbfbepwnfi"){
      this.setData({
      state: 'false',
      articleID: "cnskbfbepwnfi",
      articleTitle: "秋日浪漫，邀您共赏！",
      htmlSnip: '<div class="div_class"><p class="p" style="white-space:pre-wrap;color:#3e3e3e;font-size:14px;margin-bottom:7px;letter-spacing:1px;line-height:160%;">&emsp;&emsp;温和的阳光透过宝宝的晨雾和树叶，撩拨着我深深浅浅的思绪，秋风袅袅，吹皱了山下的一池湖水。</p><p class="p" style="white-space:pre-wrap;color:#3e3e3e;font-size:14px;margin-bottom:7px;letter-spacing:1px;line-height:160%;">&emsp;&emsp;风铃溪谷，深秋时节，枯水期，但溪中依然可见清澈的溪水缓缓流动。</p><img class="image" src="http://www.sznews.com/news/pic/2019-04/04/d67b35d2-2274-431a-bcf0-a22a24fdb8e4.1" alt="img" width=100% style="margin-bottom:7px;"><img style="margin-bottom:7px;" class="image" src="http://5b0988e595225.cdn.sohucs.com/images/20190618/8e7671c158df43708220bc7c6f5cb191.jpeg" alt="img" width=100%><p class="p" style="white-space:pre-wrap;color:#3e3e3e;font-size:14px;margin-bottom:7px;letter-spacing:1px;line-height:160%;">&emsp;&emsp;出了花溪亭后，左边是悬崖峭壁，右边则是苍劲秀美的大榕树伴随。<br>&emsp;&emsp;沿着风铃台一路前行，只见姹紫嫣红的勒杜鹃，分外妖娆，夺人眼球、扣人心弦，印证一代伟人“战士指看南粤，更加郁郁葱葱”壮丽诗篇。</p></div>'
      })}else{
        this.setData({
          state: 'false',
          articleID: JSON.parse(this.options.id)
        })
        console.log(JSON.parse(this.options.id))
      }
    
    var that = this;
    var cookie_id = wx.getStorageSync('articleZan') || [];
    if(cookie_id.includes(this.data.articleID)){
      this.setData({
        state: 'true',
    })
  }
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