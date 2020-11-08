// pages/huodong/baoming/baoming.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    actID: "nonono",
    actClass: 'inner',
    acttitle: "测试页面活动",
    actImgurl: "../../assets/images/scroll-taojinshan.png",
    starttime: "xxxx-xx-xx",
    endtime: "xxxx-xx-xx",
    href: 'http://gdfm.stlib.cn/notice/201907221.html',
    ahtml: '<a href="http://gdfm.stlib.cn/notice/201907221.html">点此处进入活动官网</a>',

    today: '',
    date: '',
    myname: '',
    myphone: '',
    error: 'false',
    errormsg: '',
    baoming: 'false'
  },

  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },

  changename(e) {
    this.setData({
      myname: e.detail.value
    })
  },

  changephonenumber(e) {
    this.setData({
      myphone: e.detail.value
    })
  },

  sendform(e) {
    if (this.data.myname == '') {
      this.setData({
        error: 'true',
        errormsg: '请填入姓名'
      })
    } else if (this.data.myphone == '') {
      this.setData({
        error: 'true',
        errormsg: '请填入电话'
      })
    } else {
      var reg = /0\d{2,3}[-]?\d{7,8}|0\d{2,3}\s?\d{7,8}|13[0-9]\d{8}|15[1089]\d{8}|18[1089]\d{8}/
      if (!reg.test(this.data.myphone)) {
        this.setData({
          error: 'true',
          errormsg: '请输入正确的手机号'
        })
      } else {
        console.log(this.data.myname, this.data.date, this.data.myphone)
        this.setData({
          baoming: 'true'
        })

        var baomingls = wx.getStorageSync('mybaoming') || []; //报名信息列表

        var s = {"actid" : this.data.actID, "myname":this.data.myname, "mydate":this.data.date, "myphone":this.data.myphone}

        baomingls.unshift(s)

        wx.setStorageSync('mybaoming', baomingls);
          wx.showToast({
            title: "报名成功!",
            icon: 'success'
          })
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(JSON.parse(options.id))
    console.log(JSON.parse(options.class)),
      console.log(JSON.parse(options.title)),
      console.log(JSON.parse(options.imgurl)),
      console.log(JSON.parse(options.stime)),
      console.log(JSON.parse(options.etime))
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      actID: JSON.parse(this.options.id),
      actclass: JSON.parse(this.options.class),
      acttitle: JSON.parse(this.options.title),
      actImgurl: JSON.parse(this.options.imgurl),
      starttime: JSON.parse(this.options.stime),
      endtime: JSON.parse(this.options.etime),
    })

    var da = new Date()
    var d = da.getFullYear().toString() + "-"
    var m = da.getMonth() + 1
    if (m <= 10) {
      d += "0"
    }
    d += m.toString() + '-'
    var c = da.getDate().toString()

    d += c.length == 1 ? '0' + c : c

    this.setData({
      today: d,
      date: d,
      error: 'false'
    })
  },


  atap(e){
    wx.navigateTo({
      url: '../webview/webview?url=' + this.data.href
    });
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