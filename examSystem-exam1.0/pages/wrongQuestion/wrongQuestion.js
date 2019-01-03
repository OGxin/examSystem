var Bmob = require('../../dist/js/Bmob-1.6.2.min.js');
var that;
const app=getApp()
Page({


  data: {
    questionList: [],
    nowQuestion: [],
    nowQuestionNumber: 0,
    questionListLength: 0,
    showAnswer: true,
    score:0,
    title:'',
    correctNum:0,
    errorNum:0,
    TFValue:false,
    before: false,
    after: false
  },

  // 页面加载
  onLoad: function (options) {
    that = this;
  //加载页面传过来的参数
    this.setData({
      title:options.title
    })
    var wrongAnswerList=app.globalData.wrongAnswerList;
    var questionSum = app.globalData.nowAnswerResultList.length;
    if (wrongAnswerList.length != 0){
      that.setData({
        questionList: wrongAnswerList,
        nowQuestion: wrongAnswerList[0],
        questionListLength: wrongAnswerList.length,
        errorNum:wrongAnswerList.length,
        score:app.globalData.score,
        correctNum: questionSum - wrongAnswerList.length,
      })
      console.log("wrongAnswerList" + wrongAnswerList[0]);
    }
    else{
      wx.showModal({
        title: '提示',
        content: '暂无错题',
        success:function(res){
          console.log("确定")
          wx.navigateTo({
            url: '../grid/index',
          })
        }
      })
    }
  },
  // 设置导航栏标题
  onReady:function(){
    wx.setNavigationBarTitle({
      title: this.data.title,
    })
  },
  // 移除该题
  remove: function () {
    var questionList = that.data.questionList;
    console.log(questionList)
    var nowQuestionNumber = that.data.nowQuestionNumber;
    questionList.splice(nowQuestionNumber, 1);
    if (questionList.length == 0) {
      wx.showToast({
        title: '全部删除完毕',
        icon: 'success',
        duration: 2000
      })
      that.nextQuestion = setTimeout(function () {
        // 关闭所有页面，打开到应用内的某个页面
        wx.reLaunch({
          url: '../grid/index'
        })
      }, 1000);
    }

    if (nowQuestionNumber == questionList.length) {
      nowQuestionNumber -= 1;
      console.log('nowQuestionNumber:' + nowQuestionNumber)
    }
     that.setData({
        questionList: questionList,
        nowQuestion: questionList[nowQuestionNumber],
        questionListLength: questionList.length,
        nowQuestionNumber: nowQuestionNumber,
        showAnswer: false
      })
  },
  //下一题
  after1: function () {
    var nowQuestionNumber = that.data.nowQuestionNumber;
    var questionList = that.data.questionList;
    var questionListLength = that.data.questionListLength;
    if (nowQuestionNumber + 1 < questionListLength) {
      nowQuestionNumber++;
      that.setData({
        nowQuestion: questionList[nowQuestionNumber],
        nowQuestionNumber: nowQuestionNumber,
        before: false
      })
    } else {
      that.setData({
        after: true
      })
    }
  },

  after10: function () {
    var nowQuestionNumber = that.data.nowQuestionNumber;
    var questionList = that.data.questionList;
    var questionListLength = that.data.questionListLength;
    if (nowQuestionNumber + 1 < questionListLength) {
      nowQuestionNumber += 10;
      if (nowQuestionNumber > questionListLength) {
        nowQuestionNumber = questionListLength - 1;
      }
      console.log(nowQuestionNumber)
      that.setData({
        nowQuestion: questionList[nowQuestionNumber],
        nowQuestionNumber: nowQuestionNumber,
        showAnswer: false
      })
    }
  },
  // 上一题
  before1: function () {
    var nowQuestionNumber = that.data.nowQuestionNumber;
    var questionList = that.data.questionList;
    var questionListLength = that.data.questionListLength;
    if (nowQuestionNumber != 0) {
      nowQuestionNumber--;
      that.setData({
        nowQuestion: questionList[nowQuestionNumber],
        nowQuestionNumber: nowQuestionNumber,
        after: false
      })
    }else {
      that.setData({
        before: true
      })
    }
  },

  before10: function () {
    var nowQuestionNumber = that.data.nowQuestionNumber;
    var questionList = that.data.questionList;
    var questionListLength = that.data.questionListLength;
    if (nowQuestionNumber != 0) {
      nowQuestionNumber -= 10;
      if (nowQuestionNumber < 0) {
        nowQuestionNumber = 0;
      }
      console.log(nowQuestionNumber)
      that.setData({
        nowQuestion: questionList[nowQuestionNumber],
        nowQuestionNumber: nowQuestionNumber,
        showAnswer: false
      })
    }
  },

  showAnswer: function (e) {
    that.setData({
      showAnswer: true
    })
  }


})