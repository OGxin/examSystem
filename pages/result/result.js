var Bmob = require('../../dist/js/Bmob-1.6.2.min.js');
var that;
Page({

  
  data: {
    score: 0,
    nowAnswerResultList:[]
  },

  
  onLoad: function (options) { 
    that=this;
    var nowAnswerResultList = getApp().globalData.nowAnswerResultList;
    var score = getApp().globalData.score;
    console.log("score" + score);
    that.setData({
      nowAnswerResultList: nowAnswerResultList,
      score: score
    })
  },
  onUnload: function () {
    getApp().globalData.nowAnswerResultList=[];
    // getApp().globalData.wrongAnswerList = [];
    getApp().globalData.score = 0;
  }
})