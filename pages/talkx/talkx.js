var sever_data = require("../../data/talkxList-data.js")
Page({
  data: {
    name: "jxj"
    //小程序总是会读取data对象来做数据绑定，这个动作我们称为动作A
    //而这个动作A的执行，实在onLoad事件之后发生的
  },
  onLoad(options) {
    //页面初始化，options为页面跳转所带来的参数
    console.log("onload");
    this.setData({ talkxList: sever_data.talkxList });//更新数据的方法
  },
  onReady() {
    //页面渲染完成
    console.log("onReady");
    console.log(this.data);
  },
  onShow() {
    //页面显示
    console.log("onShow");
  },
  onHide() {
    //页面隐藏
    console.log("onHide");
  },
  onUnload() {
    //页面关闭
    console.log("onUnload");
  },
  getChildTap(event) {
    let postId = event.detail.postId;
    wx.navigateTo({
      url: './talkxList-detail/talkxList-detail?id=' + postId
    })
  }
})