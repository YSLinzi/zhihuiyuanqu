// pages/lishigushi/lishigushi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoCurrent:null,
    lishi:[{
      videoId:1,
      title:"曾经的'二线关'",
      detail:'1979年，中央批准建立深圳经济特区，4年后，在东起小梅沙、西至宝安的南头安乐村，开始架设一条长达84.6公里、高2.8米的铁丝网，这道80多公里长的铁丝网将深圳分割',
      videoImg:'../../assets/taojinshan-img/erxianguan.png',
      src:'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  play(e){
    let id = e.currentTarget.dataset.videoid;
    //切换播放的Id
    if(id){
      this.setData({
        videoCurrent:id
      });
    }
  },
  /*
  showInput: function () {
    this.setData({
    inputShowed: true
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
    }
    */
})