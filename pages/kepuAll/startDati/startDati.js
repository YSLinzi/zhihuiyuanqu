// pages/kepuAll/startDati/startDati.js
// var postData = require("../datapost/datidata.js");
Page({
  data: {
    // text:"这是一个页面"
    postList:'',
    index:0,
    bc_default: 'black',
    bc_right: '#f37c2b',
    bc_wrong: '#d81e06',
    options:'',
    bcA: '',
    bcB: '',
    bcC: '',
    bcD: '',
    ny:'true',
    defen:0,
    answer_count:''
  },

  nextQuestion: function () {
    var that = this;
    var count = 0;
    var jieg = that.data.postList[that.data.index + 1].answer.split("_");
    for(let i = 0;i<4;i++){
      if(jieg[i]=='1')
        count++;
    }
    if (that.data.index < 10) {
      this.setData({
        index: that.data.index + 1,
        options:that.data.postList[that.data.index + 1].options.split("_"),
        bcA: that.data.bc_default,
        bcB: that.data.bc_default,
        bcC: that.data.bc_default,
        bcD: that.data.bc_default,
        ny:'true',
        answer_count:count
      });
    }
  },
  lastQuestion: function () {
    var that = this;
    if (that.data.index > 0) {
      this.setData({
        index: that.data.index - 1,
        options:that.data.postList[that.data.index - 1].options.split("_"),
        bcA: that.data.bc_default,
        bcB: that.data.bc_default,
        bcC: that.data.bc_default,
        bcD: that.data.bc_default,
      });
    }
  },
  btnOpClick: function(e){
    var that = this;
    console.log(e);
    var flag = 1;
    var select = e.currentTarget.id;
    let jieg = that.data.postList[that.data.index].answer.split('_');
    console.log(jieg);
      if (that.data.index < 9){
        if (select == 'A') {
          if(jieg[0]=='1'){
            this.setData({ 
              bcA: that.data.bc_right 
            });
            that.data.answer_count--;
          }else{
            flag = 0;
            this.setData({ bcA: that.data.bc_wrong });
          }
        }
        else if (select == 'B') {
          if(jieg[1]=='1'){
            this.setData({ bcB: that.data.bc_right });
            that.data.answer_count--;
          }else{
            flag = 0;
            this.setData({ bcB: that.data.bc_wrong });
          }
        }
        else if (select == 'C') {
          if(jieg[2]=='1'){
            this.setData({ bcC: that.data.bc_right });
            that.data.answer_count--;
          }else{
            flag = 0;
            this.setData({ bcC: that.data.bc_wrong });
          }
        }
        else if (select == 'D') {
          if(jieg[3]=='1'){
            this.setData({ bcD: that.data.bc_right });
            that.data.answer_count--;
          }else{
            flag = 0;
            this.setData({ bcD: that.data.bc_wrong });
          }
        }
        if(flag&&that.data.answer_count==0){
          that.nextQuestion();
          this.setData({
            defen: that.data.index*1
          })
        }
        
      }
      else{
        if (select == 'A') {
          if(jieg[0]=='1'){
            this.setData({ 
              bcA: that.data.bc_right 
            });
          }else{
            this.setData({ bcA: that.data.bc_wrong });
          }
        }
        else if (select == 'B') {
          if(jieg[1]=='1'){
            this.setData({ bcB: that.data.bc_right });
          }else{
            this.setData({ bcB: that.data.bc_wrong });
          }
        }
        else if (select == 'C') {
          if(jieg[2]=='1'){
            this.setData({ bcC: that.data.bc_right });
          }else{
            this.setData({ bcC: that.data.bc_wrong });
          }
        }
        else if (select == 'D') {
          if(jieg[3]=='1'){
            this.setData({ bcD: that.data.bc_right });
          }else{
            this.setData({ bcD: that.data.bc_wrong });
          }
        }
        that.gotonext();    
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
    let jieg = that.data.postList[that.data.index].answer.split('_');
        if (jieg[0] == '1') {
          this.setData({ bcA: that.data.bc_right });
        }
        if (jieg[1] == '1') {
          this.setData({ bcB: that.data.bc_right });
        }
        if (jieg[2] == '1') {
          this.setData({ bcC: that.data.bc_right });
        }
       if (jieg[3] == '1') {
          this.setData({ bcD: that.data.bc_right });
        }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that =this;
    wx.request({
      url: 'http://81.69.8.144/api/question-service/find/random/10',
      success: function (res) {
        console.log(res);
        that.setData({
          postList: res.data,
          options:res.data[0].options.split("_")
        })
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
