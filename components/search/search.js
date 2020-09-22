// components/search/search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
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
  }
})
