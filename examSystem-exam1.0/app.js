//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    //验证session_key是否存在,存在则免登录
    wx.getStorage({
      key: 'session_key',
      success: function(res) {
        wx.navigateTo({
          url: '/pages/grid/index',
        })
      },
    })

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    question: [{ "question": "十九大的主题是：不忘初心，____，高举中国特色社会主义伟大旗帜，决胜全面建成小康社会，夺取新时代中国特色社会主义伟大胜利，为实现中华民族伟大复兴的中国梦不懈奋斗。", "option": { "A": "继续前进", "B": "牢记使命", "C": "方得始终", "D": "砥砺前行" }, "answer": "B" }, { "question": "经过长期努力，中国特色社会主义进入了新时代，这是我国发展新的___。", "option": { "A": "未来方向", "B": "未来方位", "C": "历史方向", "D": "历史方位" }, "answer": "D" }, { "question": "_____是实现社会主义现代化、创造人民美好生活的必由之路。", "option": { "A": "中国特色社会主义道路", "B": "中国特色社会主义理论体系", "C": "中国特色社会主义制度", "D": "中国特色社会主义文化" }, "answer": "A" }, { "question": "从全面建成小康社会到基本实现现代化，再到全面建成____，是新时代中国特色社会主义发展的战略安排。", "option": { "A": "创新型国家", "B": "社会主义现代化强国", "C": "社会主义现代化大国", "D": "世界一流强国" }, "answer": "B" }, { "question": "坚持党的领导、人民当家作主、依法治国有机统一。_______是社会主义民主政治的本质特征。", "option": { "A": "党的领导", "B": "人民当家作主", "C": "依法治国", "D": "政治体制改革" }, "answer": "B" }, { "question": "_____和_____，是中国共产党人的精神支柱和政治灵魂，也是保持党的团结统一的思想基础。", "option": { "A": "共产主义远大理想　新时代中国特色社会主义共同理想", "B": "共产主义远大理想　中国特色社会主义共同理想", "C": "共产主义崇高理想　新时代中国特色社会主义共同理想", "D":"共产主义崇高理想　中国特色社会主义共同理想"},"answer":"B"}, { "question": "如果你很关心一个人，通常你会", "option": { "A": "给他打电话", "B": "给他寄一张卡片或发邮件", "C": "亲自去找他拜访他" } }, { "question": "遇到你认为很难写的字，你通常会", "option": { "A": "重复几遍这个字的读音，听起来觉得对就可以了", "B": "先写出来这个字，再看看是否对", "C": "反复写几遍这个字，感觉一下怎么写才对" } }, { "question": "你自己做的事情，怎样就满意了", "option": { "A": "听起来是对的就满意了", "B": "看起来是对的就满意了", "C": "感觉是对的就满意了" } }, { "question": "在课堂上你喜欢什么活动", "option": { "A": "听讲并且和别人说话", "B": "看图表、图画和录像", "C": "做实验和搞活动" } }, { "question": "教完别人做事之后，你通常问什么问题才知道他会了", "option": { "A": "你听明白了吗", "B": "你看懂了吗", "C": "你知道了吗" } }, { "question": "学习诗歌时，你觉得怎样记忆更快", "option": { "A": "大声地朗读", "B": "反反复复地读", "C": "不停地走动，打着节拍读" } }, { "question": "你怎么知道别人高兴或者难过", "option": { "A": "听别人的声音", "B": "看别人的脸", "C": "注意别人的动作" } }, { "question": "你喜欢什么样的幽默", "option": { "A": "喜欢滑稽搞笑的语言", "B": "喜欢色彩丰富的戏剧和动画片", "C": "喜欢滑稽搞笑的动作" } }, { "question": "在有许多人的聚会上，你喜欢", "option": { "A": "和别人说话或者听别人说话", "B": "看别人正在干什么", "C": "到处转悠或者闲逛" } }, { "question": "别人怎样解释问题你更容易明白", "option": { "A": "听讲、互相交流、讨论", "B": "用图表、图画、地图等形式", "C": "亲自做一做" } }, { "question": "如果你的假日很有趣，你通常怎样和朋友讲述", "option": { "A": "打电话讲给他听", "B": "给他们看你的照片", "C": "去找他们，给他们讲讲你的经历" } }, { "question": "买衣服时", "option": { "A": "别人说好看我就觉得好，别人说不好我也觉得不好", "B": "选择喜欢的颜色和样式", "C": "选择穿起来舒服的衣服" } }, { "question": "什么情况下你听人说话最清楚", "option": { "A": "你闭上眼睛，不看说话的人，听得更清楚", "B": "必须清清楚楚地看见说话的人，才能听得清楚", "C": "你边走边听别人讲" } }, { "question": "你最容易记住别人的", "option": { "A": "别人说过的话", "B": "别人的相貌", "C": "别人做过的" } }],
    score:0,
    nowAnswerResultList: [],
    wrongAnswerList:[],
    choseQB: '',
    array:[],
    stateList:[],
  }
})