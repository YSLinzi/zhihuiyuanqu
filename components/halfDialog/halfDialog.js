// components/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShow: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    salaryList: [{
      key: '日结',
      value: 1
    },{
      key: '周结',
      value: 2
    },{
      key: '月结',
      value: 3
    },{
      key: '完工结',
      value: 4
    },{
      key: '其他',
      value: 5
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClose() {
      this.triggerEvent('cancle')
    },
    handleSalaryChange(e) {
      console.log(this.data.salaryList[e.detail.value[0]])
    }
  }
})
