//index.js
//获取应用实例

Page({

  /**
   * 页面的初始数据
   */
  data: {
    select: false,
    tihuoWay: '门店自提',
    username:'',
    departmentName:'',
    phoneNUm:'',
    stateList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindShowMsg() {
    this.setData({
      select: !this.data.select
    })
  },
  mySelect(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      tihuoWay: name,
      select: true
    })
  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 获取信息
  nameInput:function(e){
    this.setData({
    username:e.detail.value
    })
  },
  departmentInput:function(e){
    this.setData({
    departmentName:e.detail.value
    })
  },
  phoneInput:function(e){
    this.setData({
    phone:e.detail.value
    })
  },
  
  login:function(){
    var phoneReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    let phoneNumber=this.data.phone;
    if (this.data.username.length == 0 || this.data.departmentName.length == 0 || 
    this.data.phone.length == 0) {
      wx.showToast({
        title: '姓名、部门名、手机号不能为空',
        icon:'none'
      })
    }
    else if (!phoneReg.test(phoneNumber)){
        wx.showToast({
          title: '手机格式不正确',
          icon:'none'
        })
    }
     else if(this.data.username == 'admin' && this.data.departmentName == '001'){
      wx.navigateTo({
        url: '../grid/index',
      })
    }
    // else{
    //   var username = this.data.username;
    //   var departmentName=this.data.departmentName;
    //   var phone=this.data.phone;
    //   // 与后端通信
    //   wx.login({
    //     success:function(res){
    //       var that=this
    //       if(res.code){
    //         //发起网络请求
    //         wx.request({
    //           url: 'http://10.0.100.129:8080/examination/front/login/check.jhtml',
    //           data:{
    //             code:res.code,
    //             username:username,
    //             departmentName:departmentName,
    //             phoneNum:phone
    //           },
    //           method:'GET',
    //           header:{
    //             'content-type':'application/json',//默认是json格式
    //           },
    //           success:function(res){
    //             console.log(res.data);
    //             getApp().globalData.stateList.push(res.data);
    //             wx.setStorage({
    //               key: 'openid',
    //               data: 'res.data.openid',
    //             });
    //             wx.setStorage({
    //               key: 'session_key',
    //               data: 'res.data.session_key',
    //             });
    //             if(res.data.loginStatus){
    //               wx.showToast({
    //                 title: '登录成功',
    //                 icon:'success',
    //                 duration:1000,
    //                 success:function(){
    //                   wx.navigateTo({
    //                     url: '../grid/index',
    //                   })
    //                 }
    //               })
    //             }else{
    //               wx.showToast({
    //                 title: '登录失败',
    //                 icon:'none',
    //                 duration:2000
    //               })
    //             }
    //           },
    //           fail:function(res){
    //             wx.showToast({
    //               title: '与后台服务器通信失败',
    //               icon:'none',
    //               duration:2000
    //             })
    //           }
    //         })
    //       }
    //     }
    //   })
    //   // wx.showToast({
    //   //   title:'登录失败',
    //   //   icon:'none',
    //   //   duration:2000
    //   // })
    // }

  }
})
