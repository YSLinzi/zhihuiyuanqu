App({
  /**
   * 小程序初始化完成时触发，全局只触发一次。 
   */
  onLaunch (options) {
    // Do something initial when launch.
    console.log("小程序初始化完成")
  },
  /**
   * 小程序启动，或从后台进入前台显示时触发
   *  */
  onShow (options) {
    // Do something when show.
    console.log("小程序启动")
  },
  /**
   * 小程序从前台进入后台时触发
  */
  onHide () {
    // Do something when hide.
    console.log("小程序从前台进入后台")
  },
  onError (msg) {
    console.log(msg)
  },
  globalData: 'I am global data'
})