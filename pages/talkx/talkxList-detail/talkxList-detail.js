var server = require("../../../data/talkxList-data.js")
Page({
  data: {
  },
  onLoad(option) {
    let postId = option.id;
    let newListItem = server.talkxList[postId - 1];
    this.setData({ newListItem });
  }
})