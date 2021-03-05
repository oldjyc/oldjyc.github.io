// pages/index/index.js
var common=require('../../utils/common.js')
const db = wx.cloud.database()
const news = db.collection('news')
const row = 5
var page = 0 
Page({

  /**
   * 页面的初始数据
   */
  data: {
 /*   swiperImg:[
       {src:"https://inews.gtimg.com/newsapp_bt/0/12645135577/1000"},
      {src:"https://inews.gtimg.com/newsapp_bt/0/12645122557/1000"},
      {src:"https://p1-tt.byteimg.com/origin/pgc-image/97d23d0ccfd4401f87109e9e6511909f?from=pc"}
    ],
    newsList:[

    ] */
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
/*     this.getdata(), */
    news.limit(row).get({
      success:res=>{
        this.setData({
          newsList:res.data
        })
      }
    })

  },
/*   getdata(){
    news.get({
      success(res){
        console.log("查询成功",res)
      },
      fail(res){
        console.log("查询失败",res)
      }
    })
  }, */
  gotodetail:function(e){
    //获取携带data-id的数据
    let id = e.currentTarget.dataset.id
    //console.log(e)
    //携带资讯ID进行页面跳转
    wx.navigateTo({
      url: '../detail/detail?id=' + id,
    })

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
        //翻下一页
        page++
        //获取当前页面的新闻纪录
        news.skip(row*page).limit(row).get({
          success:res=>{
            //获取原有的新闻纪录
            let old_data = this.data.newsList
            //获取新页面的新闻纪录
            let new_data = res.data
            //更新新闻列表
            this.setData({
              newsList:old_data.concat(new_data)
            })
          }
        })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})