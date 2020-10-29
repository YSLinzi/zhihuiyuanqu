// pages/kepuAll/startDati/startDati.js
var postData = require("../datapost/datidata.js");
Page({
  data: {
    // text:"这是一个页面"
    postList: postData.postList,
    index:0,
    bc_default: 'black',
    bc_right: '#f37c2b',
    bc_wrong: '#d81e06',
    bcA: '',
    bcB: '',
    bcC: '',
    bcD: '',
    ny:'true',
    defen:0
  },

  nextQuestion: function () {
    var that = this;
    if (that.data.index < postData.postList.length - 1) {
      this.setData({
        index: that.data.index + 1,
        bcA: that.data.bc_default,
        bcB: that.data.bc_default,
        bcC: that.data.bc_default,
        bcD: that.data.bc_default,
        ny:'true'

      });
    }
  },
  lastQuestion: function () {
    var that = this;
    if (that.data.index > 0) {
      this.setData({
        index: that.data.index - 1
      });
    }
  },
  btnOpClick: function(e){
    var that = this;
    var select = e.currentTarget.id;
    var jieg = postData.postList[that.data.index].daan;
    if (select==jieg){
      if (that.data.index < postData.postList.length-1){
        if (select == 'A') {
          this.setData({ bcA: that.data.bc_right });
        }
        else if (select == 'B') {
          this.setData({ bcB: that.data.bc_right });
        }
        else if (select == 'C') {
          this.setData({ bcC: that.data.bc_right });
        }
        else if (select == 'D') {
          this.setData({ bcD: that.data.bc_right });
        }
        that.nextQuestion();
        this.setData({
          defen: that.data.index*1
        })
      }
      else{
        if (select == 'A') {
          this.setData({ bcA: that.data.bc_right });
        }
        else if (select == 'B') {
          this.setData({ bcB: that.data.bc_right });
        }
        else if (select == 'C') {
          this.setData({ bcC: that.data.bc_right });
        }
        else if (select == 'D') {
          this.setData({ bcD: that.data.bc_right });
        }
        that.gotonext();    
      }
    }
    else {
      if (select == 'A') {
        this.setData({ bcA: that.data.bc_wrong });
      }
      else if (select == 'B') {
        this.setData({ bcB: that.data.bc_wrong });
      }
      else if (select == 'C') {
        this.setData({ bcC: that.data.bc_wrong });
      }
      else if (select == 'D') {
        this.setData({ bcD: that.data.bc_wrong });
      }
      else if (select == 'E') {
        this.setData({ bcE: that.data.bc_wrong });
      }
    }
  },
  gotonext: function(){
    var grade = this.data.defen;
    wx.navigateTo({
      url: '../endDati/endDati?defen='+grade,
    })
  },
  xianshi: function(e){
    var that = this;
    var jieg = postData.postList[that.data.index].daan;
        if (jieg == 'A') {
          this.setData({ bcA: that.data.bc_right });
        }
        else if (jieg == 'B') {
          this.setData({ bcB: that.data.bc_right });
        }
        else if (jieg == 'C') {
          this.setData({ bcC: that.data.bc_right });
        }
        else if (jieg == 'D') {
          this.setData({ bcD: that.data.bc_right });
        }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})