var Bmob = require('../../dist/js/Bmob-1.6.2.min.js');
var that;
const app = getApp()
Page({


  data: {
    SCNumberList:[],
    JDNumberList: [],
    SCList:[],
    JDList: [],
    nowQuestion:[],
    choseA: false,
    choseB: false,
    choseC: false,
    choseD: false,
    nowQuestionNumber:0,
    wrongAnswerList:[],
    questionType:'SC',
    questionTypeCH:'(单选题)',
    score:0,
    questionNum:0,
    hh:'',
    mm:'',
    ss:'',
    title:'第三季度党知识考试',
    before:false,
    after:false
  },


  onLoad: function (options) {
    that=this;
    var SCNumberList=[];
    var JDNumberList = [];
    var SCNumber;
    var JDNumber;
    var QBAttId;
    var QBSC;
    var QBJD;
    var questionNum;
    // var newArray=new Array();
    // newArray[0]="1";
    // newArray[1]="2";
    // getApp().globalData.array.push(newArray);
    // console.log("questionNum:" + getApp().globalData.array.length);
    that.setData({
      SCList: app.globalData.question,
      nowQuestion: app.globalData.question[0],
      //考卷题目数
      //questionNum: app.globalData.question.length
        questionNum: 5
    });
   var countDown_time='00:10:01';
   this.count_down(countDown_time);
  },
  onReady:function(){
    wx.setNavigationBarTitle({
      title: this.data.title,
    })
  },
  //倒计时
  count_down:function(countDown_time){
    var time=countDown_time.split(':')
    var hh=parseInt(time[0])
    var mm=parseInt(time[1])
    var ss=parseInt(time[2])
    this.setData({
      ss:(ss<10)?'0'+ss:ss,
      mm:(mm<10)?'0'+mm:mm,
      hh:(hh<10)?'0'+hh:hh
    })
    var interval = setInterval(function () {
      if(ss > 0){
        ss--
      }else{
        wx.showToast({
          title: '考试结束，系统自动交卷',
        })
        that.submit()
        clearInterval(interval)
      }
      if(ss == 0){
        if(mm>0){
          mm--
          ss=59;
        }
      if(mm == 0 && hh >0){
        hh--
        ss=59;
        mm=59;
      }
      }
      that.setData({
        ss:(ss<10)?'0'+ss:ss,
        mm:(mm<10)?'0'+mm:mm,
        hh:(hh<10)?'0'+hh:hh
      })
    },1000)
  },
  choseItem: function (e) {
    // 获取点击该组件定义的data-choseitem
    var choseItem = e.currentTarget.dataset.choseitem;
    var nowQuestion = that.data.nowQuestion;
    var answer = nowQuestion.answer;
    console.log("answer:"+answer);
    var options = nowQuestion.option;
    var SCList = that.data.SCList;
    var JDList = that.data.JDList;
    var userResult=false;
    var SCNumberList = that.data.SCNumberList;
    var nowQuestionNumber = that.data.nowQuestionNumber;
    var score = that.data.score;
    ////////////////////////////////////选A start////////////////////////////////////////////
    if (choseItem == 'A') {
      for (var i = 0; i < 4;i++){
        if ('A' == answer){
          userResult = true;
          score =score+5;
          // 将成绩存到app缓存中
          getApp().globalData.score = score;
          console.log('score' + score)
          that.setData({
            score: score,
          });
          break;
        }
       
      }
      var nowAnswerResult = new Object;
      nowAnswerResult.question = nowQuestion;
      nowAnswerResult.userResult = userResult;
      nowAnswerResult.yourChose = choseItem;
      if (userResult==true){
        getApp().globalData.nowAnswerResultList.push(nowAnswerResult)
      }
      else{
        getApp().globalData.nowAnswerResultList.push(nowAnswerResult);
        // 将错题添加到错题集
        // getApp().globalData.wrongAnswerList.push(nowQuestion)
        getApp().globalData.wrongAnswerList.push(nowAnswerResult)
      }
        that.setData({
          choseA: true,
        });
        // setTimeout制作定时器，setTimeout(func, time)可以使得每隔time毫秒就执行一次func函数，常用来做计时器/时钟
        that.nextQuestion = setTimeout(function () { 
          if (nowQuestionNumber<4){
            that.setData({
              nowQuestion: SCList[nowQuestionNumber + 1],
              nowQuestionNumber: nowQuestionNumber + 1,
              choseA: false,
            });
          }
          else if (nowQuestionNumber == 4){
            wx.redirectTo({
              // url: '../result/result'
              url: '../wrongQuestion/wrongQuestion'
            })
          }
        }, 500);
    }
    ////////////////////////////////////选A end////////////////////////////////////////////

    ////////////////////////////////////选B  start////////////////////////////////////////////
    if (choseItem == 'B') {
      for (var i = 0; i < 4; i++) {
        if ('B' == answer) {
          userResult = true;
          score = score + 5;
          getApp().globalData.score = score;
          that.setData({
            score: score,
          });
          break;
        }

      }
      var nowAnswerResult = new Object;
      nowAnswerResult.question = nowQuestion;
      nowAnswerResult.userResult = userResult;
      nowAnswerResult.yourChose = choseItem;
      if (userResult == true) {
        getApp().globalData.nowAnswerResultList.push(nowAnswerResult)
      }
      else {
        getApp().globalData.nowAnswerResultList.push(nowAnswerResult);
        // getApp().globalData.wrongAnswerList.push(nowQuestion)
        getApp().globalData.wrongAnswerList.push(nowAnswerResult)
      }
      that.setData({
        choseB: true,
      });
      that.nextQuestion = setTimeout(function () {
        if (nowQuestionNumber < 4) {
          that.setData({
            nowQuestion: SCList[nowQuestionNumber + 1],
            nowQuestionNumber: nowQuestionNumber + 1,
            choseB: false,
          });
        }
        else if (nowQuestionNumber == 4) {
          wx.redirectTo({
            // url: '../result/result'
            url: '../wrongQuestion/wrongQuestion'
          })
        }
      }, 500);
    }
    ////////////////////////////////////选B end////////////////////////////////////////////

    ////////////////////////////////////选C start////////////////////////////////////////////
    if (choseItem == 'C') {
      for (var i = 0; i < 4; i++) {
        if ('C' == answer) {
          userResult = true;
          score = score + 5;
          getApp().globalData.score = score;
          console.log('score' + score)
          that.setData({
            score: score,
          });
          break;
        }

      }
      var nowAnswerResult = new Object;
      nowAnswerResult.question = nowQuestion;
      nowAnswerResult.userResult = userResult;
      nowAnswerResult.yourChose = choseItem;
      if (userResult == true) {
        getApp().globalData.nowAnswerResultList.push(nowAnswerResult)
      }
      else {
        getApp().globalData.nowAnswerResultList.push(nowAnswerResult);
        // getApp().globalData.wrongAnswerList.push(nowQuestion)
        getApp().globalData.wrongAnswerList.push(nowAnswerResult)
      }
      that.setData({
        choseC: true,
      });
      that.nextQuestion = setTimeout(function () {
        if (nowQuestionNumber < 4) {
          that.setData({
            nowQuestion: SCList[nowQuestionNumber + 1],
            nowQuestionNumber: nowQuestionNumber + 1,
            choseC: false,
          });
        }
        else if (nowQuestionNumber == 4) {
          wx.redirectTo({
            // url: '../result/result'
            url: '../wrongQuestion/wrongQuestion'
          })
        }
      }, 500);
    }
    ////////////////////////////////////C////////////////////////////////////////////

    ////////////////////////////////////选D start////////////////////////////////////////////
    if (choseItem == 'D') {
      for (var i = 0; i < 4; i++) {
        if ('D' == answer) {
          userResult = true;
          score = score + 5;
          getApp().globalData.score = score;
          that.setData({
            score: score,
          });
          break;
        }

      }
      var nowAnswerResult = new Object;
      nowAnswerResult.question = nowQuestion;
      nowAnswerResult.userResult = userResult;
      nowAnswerResult.yourChose = choseItem;
      if (userResult == true) {
        getApp().globalData.nowAnswerResultList.push(nowAnswerResult)
      }
      else {
        getApp().globalData.nowAnswerResultList.push(nowAnswerResult);
        // getApp().globalData.wrongAnswerList.push(nowQuestion)
        getApp().globalData.wrongAnswerList.push(nowAnswerResult)
      }
      that.setData({
        choseD: true,
      });
      that.nextQuestion = setTimeout(function () {
        if (nowQuestionNumber < 4) {
          that.setData({
            nowQuestion: SCList[nowQuestionNumber + 1],
            nowQuestionNumber: nowQuestionNumber + 1,
            choseD: false,
          });
        }
        else if (nowQuestionNumber == 4) {
          wx.redirectTo({
            // url: '../result/result'
            url:'../wrongQuestion/wrongQuestion'
          })
        }
      }, 500);
    }
    ////////////////////////////////////选D end////////////////////////////////////////////
   
  },
  // 点击上一题
  before1: function () {
    var nowQuestionNumber = that.data.nowQuestionNumber;
    var nowQuestion = app.globalData.question;
    if (nowQuestionNumber != 0) {
      nowQuestionNumber--;
      that.setData({
        nowQuestion: nowQuestion[nowQuestionNumber],
        nowQuestionNumber: nowQuestionNumber,
        after:false
      })
    }else{
      that.setData({
        before:true
      })
    }
  },
  // 点击下一题
  after1: function () {
    var nowQuestionNumber = that.data.nowQuestionNumber;
    var nowQuestion = app.globalData.question;
    var questionListLength = nowQuestion.length;
    var questionNum=that.data.questionNum;
    console.log("questionListLength" + questionListLength);
    if (nowQuestionNumber + 1 < questionNum) {
      nowQuestionNumber++;
      that.setData({
        nowQuestion: nowQuestion[nowQuestionNumber],
        nowQuestionNumber: nowQuestionNumber,
        before:false
      })
    }else{
      that.setData({
        after:true
      })
    }
  },
  // 点击交卷
  submit:function(){
    wx.redirectTo({
      url: '../wrongQuestion/wrongQuestion'
    })
  }

 
})