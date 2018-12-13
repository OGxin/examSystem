// pages/test/test.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    realIndex: 0,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    optionA: "A",
    optionB: "B",
    optionC: "C",
    optionD: "D",
    questionDetail: app.globalData.question[0].question,
    answerA: app.globalData.question[0].option.A,
    answerB: app.globalData.question[0].option.B,
    answerC: app.globalData.question[0].option.C,
    answerD: app.globalData.question[0].option.D,
    list: [0, 1, 2],
    listABC: ['A', 'A', 'A','A'],
    score: 0
  },

  // randSort: function () {
  //   return Math.random() > 0.5 ? 1 : -1;
  // },

  // setList: function () {
  //   var newList = this.data.list.sort(this.randSort);
  //   console.log("newList:" + newList);
  //   this.setData({
  //     list: newList,
  //   });
  // },
  // 模拟题目的答案
  setABC: function () {
    var abc = this.data.listABC.sort(this.randSort);
    console.log(abc);
    this.setData({
      listABC: abc,
    });
  },
  setOption: function () {

  },
  answerClickA: function () {
    if (this.data.listABC[this.data.index] == 'A') {
      this.setData({
        A: this.data.A + 1,
        score:this.data.score + 5
      })
      console.log("score:"+this.data.score);
    }
    else if (this.data.listABC[this.data.index] == 'B') {
      this.setData({
        B: this.data.B + 1,
        score: this.data.score + 5
      })
    } else if (this.data.listABC[this.data.index] == 'C') {
      this.setData({
        C: this.data.C + 1,
        score: this.data.score + 5
      })
    } else if (this.data.listABC[this.data.index] == 'D'){
      this.setData({
        D:this.data.D + 1,
        score: this.data.score + 5
      })
    }
   //答题后切换题目
    this.setData({
      index: this.data.index + 1,
      realIndex:this.data.index+1
    })
    console.log("realIndex:"+this.data.realIndex);

    // 试卷题目数量
    if (this.data.index == 2) {
      wx.redirectTo({
        url: '/pages/result/result?A=' + this.data.A + '&B=' + this.data.B + '&C=' + this.data.C + '&D=' + this.data.D +'&score='+this.data.score,
      })
    }else{
      this.setData({
        questionDetail: app.globalData.question[this.data.realIndex].question,

        answerA: app.globalData.question[this.data.realIndex].option.A,
        answerB: app.globalData.question[this.data.realIndex].option.B,
        answerC: app.globalData.question[this.data.realIndex].option.C,
        answerD: app.globalData.question[this.data.realIndex].option.D,
      })
    }
  },

  answerClickB: function () {
    if (this.data.listABC[this.data.index] == 'A') {
      this.setData({
        A: this.data.A + 1
      })
    }
    else if (this.data.listABC[this.data.index] == 'B') {
      this.setData({
        B: this.data.B + 1
      })
    }
    if (this.data.listABC[this.data.index] == 'C') {
      this.setData({
        C: this.data.C + 1
      })
    } else if (this.data.listABC[this.data.index] == 'D') {
      this.setData({
        D: this.data.D + 1
      })
    }
    this.setData({
      index: this.data.index + 1,
      realIndex:this.data.index+1
    })
    this.setData({
      questionDetail: app.globalData.question[this.data.realIndex].question,
      answerA: app.globalData.question[this.data.realIndex].option.A,
      answerB: app.globalData.question[this.data.realIndex].option.B,
      answerC: app.globalData.question[this.data.realIndex].option.C,
      answerD: app.globalData.question[this.data.realIndex].option.D,
    })
    if (this.data.index == 2) {
      wx.redirectTo({
        url: '/pages/result/result?A=' + this.data.A + '&B=' + this.data.B + '&C=' + this.data.C + '&D=' + this.data.D,
      })
    }
  },

  answerClickC: function () {
    if (this.data.listABC[2] == 'A') {
      this.setData({
        A: this.data.A + 1
      })
    }
    else if (this.data.listABC[2] == 'B') {
      this.setData({
        B: this.data.B + 1
      })
    }else if (this.data.listABC[2] == 'C') {
      this.setData({
        C: this.data.C + 1
      })
    } else if (this.data.listABC[2] == 'D') {
      this.setData({
        D: this.data.D + 1
      })
    }
    this.setData({
      index: this.data.index + 1,
      realIndex: this.data.index+1,

    })
    this.setData({
      questionDetail: app.globalData.question[this.data.realIndex].question,
      answerA: app.globalData.question[this.data.realIndex].option.A,
      answerB: app.globalData.question[this.data.realIndex].option.B,
      answerC: app.globalData.question[this.data.realIndex].option.C,
      answerD: app.globalData.question[this.data.realIndex].option.D,
    })
    if (this.data.index == 2) {
      wx.redirectTo({
        url: '/pages/result/result?A=' + this.data.A + '&B=' + this.data.B + '&C=' + this.data.C + '&D=' + this.data.D,
      })
    }
  },

  answerClickD: function () {
    if (this.data.listABC[3] == 'A') {
      this.setData({
        A: this.data.A + 1
      })
    }
    else if (this.data.listABC[3] == 'B') {
      this.setData({
        B: this.data.B + 1
      })
    } else if (this.data.listABC[3] == 'C') {
      this.setData({
        C: this.data.C + 1
      })
    } else if (this.data.listABC[3] == 'D') {
      this.setData({
        D: this.data.D + 1
      })
    }
    this.setData({
      index: this.data.index + 1,
      realIndex: this.data.index+1,

    })
    this.setData({
      questionDetail: app.globalData.question[this.data.realIndex].question,
      answerA: app.globalData.question[this.data.realIndex].option.A,
      answerB: app.globalData.question[this.data.realIndex].option.B,
      answerC: app.globalData.question[this.data.realIndex].option.C,
      answerD: app.globalData.question[this.data.realIndex].option.D,
    })
    if (this.data.index == 2) {
      wx.redirectTo({
        url: '/pages/result/result?A=' + this.data.A + '&B=' + this.data.B + '&C=' + this.data.C + '&D=' + this.data.D,
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //  this.setList();
     this.setABC();

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})