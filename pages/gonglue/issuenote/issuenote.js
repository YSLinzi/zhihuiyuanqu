// pages/issuenote/issuenote.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /*Editor部分*/
  getEditorValue(e) {
    this.setData({
      ['formData.content']: e.detail.html
    })
  },
  onEditorReady() {
    const that = this
    wx.createSelectorQuery().select('#editor').context(function (res) {
      that.editorCtx = res.context;
      wx.showLoading({
        title: '加载内容中...',
      })
      setTimeout(function () {
        let data = that.data;
        wx.hideLoading();
        that.editorCtx.setContents({
          html: data.pageData ? data.pageData.content : '',
          success: (res) => {
            console.log(res)
          },
          fail: (res) => {
            console.log(res)
          }
        })
      }, 1000)
    }).exec()
  },
  insertDivider() {
    this.editorCtx.insertDivider({
      success: function () {
        console.log('insert divider success')
      }
    })
  },
  format(e) {
    let { name, value } = e.target.dataset
    if (!name) return
    // console.log('format', name, value)
    this.editorCtx.format(name, value)
  },


  insertImage() {
    const that = this
    wx.chooseImage({
      count: 1,
      success: function (res) {
        that.editorCtx.insertImage({
          src: res.tempFilePaths[0],
          data: {
            id: 'abcd',
            role: 'god'
          },
          width: '100%',
          success: function () {
            console.log('insert image success')
          }
        })
      }
    })
  },
  bindinput(e) {
    console.log("输入了啥：", e);
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




/*
  //插入图片事件监听
  
  insertImage() {
    var _this = this;
    var that = this;
    wx.showActionSheet({
      itemList: ['从相册中选择'],
      itemColor: "#00000",
      success: function (res) {
        if (!res.cancel) {
            that.chooseWxImage_editor('album')
        }
      }
    })
  },
  // 选择图片本地路径
  chooseWxImage_editor: function (type) {
    var that = this;
    var imgsPaths = that.data.imgs;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function (res) {
        console.log(res.tempFilePaths[0]);
        that.upImgs_editor(res.tempFilePaths[0], 0) //调用上传方法
      }
    })
  },*/
  /**编辑器图片上传至服务器**/
/*
upImgs_editor: function (imgurl, index) {
  var that = this;
  var _this = this;
  wx.uploadFile({
    url: 'https://jorian.image.cn/fileUpload',//此处的服务器地址请替换成自己的
    filePath: imgurl,
    name: 'file',
    header: {
      'content-type': 'multipart/form-data'
    },
    formData: null,
    success: function (res) {
      var resj = JSON.parse(res.data);
      console.log(resj) //接口返回网络 
      var src = resj.data.url
      //插入到回答主体中
      _this.editorCtx.insertImage({
        src: src,
        data: {
          id: 'abcd',
          role: 'god'
        },
        success: function () {
          console.log('insert image success')
        }
      })
    }
  })
  console.log(imgurl)
},*/