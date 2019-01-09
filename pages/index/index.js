//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../common/images/example/title.png',
      '../../common/images/example/title.png',
      '../../common/images/example/title.png'
    ],
    categoryList:[
      {
        id:1,
        image:'../../common/images/iconX.jpg',
        text:'谈谈鑫声',
        click:"toTalkX"
      },
      {
        id: 2,
        image: '../../common/images/iconH.jpg',
        text: '聊昊技术',
        click: "technologyh"
      },
      {
        id: 3,
        image: '../../common/images/iconF.jpg',
        text: '峰言峰语',
        click: "languagef"
      },
      {
        id: 4,
        image: '../../common/images/iconL.jpg',
        text: '亮瞎你眼',
        click: "eyel"
      }
    ],
    hotArticleData: [{
        id: 1,
        image: '../../common/images/content1.jpg',
        title: 'SpringCloud的诞生',
        program: '聊昊技术'
    }, {  
        id: 2,
        image: '../../common/images/content2.jpg',
        title: '北京的你，是否还在迷茫',
        program: '谈谈鑫声'
    }, {
        id: 3,
        image: '../../common/images/content3.jpg',
        title: '马云转让淘宝所有股份',
        program: '亮瞎你眼'
    }]
  },
  onLoad: function () {
   
  },
  toTalkX: function() {
    wx.navigateTo({
      url: '../talkx/talkx'
    })
  }
})
