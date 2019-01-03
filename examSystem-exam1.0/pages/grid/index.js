Page({
    data: {
        isAdd: false,
      imgUrls: ['../../image/pic.png','../../image/pic1.jpg','../../image/pic2.jpg'],
        indicatorDots:false,//是否显示面板指示点
        autoplay:true, //是否自动切换
        interval:3000, //自动切换时间间隔
        duration:1000,//滑动动画时长
        inputShowed:false,
        circular:true, //是否采用衔接滑动
        stateList:[]
    },
    handleAdd () {
        this.setData({
            isAdd: !this.data.isAdd
        })
    },
    beginAnswer:function(){
      wx.navigateTo({
        url: '../answer/answer',
      })
    },
    openWrongQuestion:function(){
      wx.navigateTo({
        url: '../wrongQuestion/wrongQuestion',
      })
    },
    onLoad:function(){
      this.setData({
        stateList:getApp().globalData.stateList
      })
    }


});