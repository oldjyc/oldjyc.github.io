// pages/detail/detail.js
var common=require('../../utils/common.js')
const db = wx.cloud.database()
const news = db.collection('news')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    article:
    {      id: '',
    title: '',
    poster: '',
    add_date: '',
    content: ''
  }
  },
    //添加收藏
    addFavorites:function(){
      let article = this.data.article
      wx.setStorageSync(article._id, article)
      this.setData({
        isAdd:true
      })
    },
    //取消收藏
    cancelFavorites:function(){
      let article = this.data.article
      wx.removeStorageSync(article._id)
      this.setData({
        isAdd:false
      })
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options.id)
    let id=options.id

    //检查当前新闻是否在收藏夹中
    var newarticle = wx.getStorageSync(id)
    //已存在
    if( newarticle != '' ){
      this.setData({
        isAdd:true,
        article:newarticle
      })
    }
    //不存在
    else{
       //根据新闻id在云数据库中查找新闻内容
       news.doc(id).get({
        success:res=>{
          //更新页面上的新闻信息和收藏状态
          
          res.data.content=res.data.content.replace(/\\n/g, "\n")
          //console.log(res.data.content.replace(/\\n/g, "\n"))
          this.setData({
            //passage: res.content.replace(/\\n/g, "\n"),
            article:res.data,
            isAdd:false,
          })
          
            
          
   
        
        }
      })
    }

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