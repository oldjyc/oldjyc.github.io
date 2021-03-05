// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product:[{
      image_src:'../../icon/角色.png',
      text:'角色扮演',
      url:'/pages/demo01/demo01'
    },
    {
      image_src:'../../icon/射击游戏.png',
      text:'第一人称射击',
      url:'/pages/demo02/demo02'
    },
    {
      image_src:'../../icon/动漫.png',
      text:'动漫游戏',
      url:'/pages/demo03/demo03'
    },
    {
      image_src:'../../icon/策略游戏.png',
      text:'策略游戏',
      url:'/pages/demo04/demo04'
    }
    ],
    game:[{
      image_src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603722878589&di=e2716becc9c4d5a17f24a8637b86b18d&imgtype=0&src=http%3A%2F%2Fhbimg.huabanimg.com%2Fa86405b0c45625dc3cf0037798f4528265f8a4b11599f5-CFxbe8_fw236',
      url:'/pages/1/1'
    },
    {
      image_src:'/icon/原神.png',
      url:'/pages/2/2'
    },
    {
      image_src:'/icon/王者荣耀.png',
      url:'/pages/3/3'
    },
    {
      image_src:'/icon/梦幻西游.jpeg',
      url:'/pages/4/4'
    },
    {
      image_src:'/icon/和平精英.png',
      url:'/pages/5/5'
    },
    {
      image_src:'/icon/QQ飞车.jpg',
      url:'/pages/6/6'
    }
    ]
  },
  // download: function(){
  //   var pdfurl='https://tmc-1256524939.cos.ap-guangzhou.myqcloud.com/mel/737-NGMEL_4.pdf'
  //   wx.showLoading({
  //     title: '数据加载中',
  //   }),
  //   wx.downloadFile({
  //     url: 'https://sp0.baidu.com/9_Q4sjW91Qh3otqbppnN2DJv/pae/component/api/qrcode?text=http%3A%2F%2Fmobile.baidu.com%2Fitem%3Fdocid%3D27361028%26ala%3Dpsapp',
  //     success:function(t){
  //       const filePath= t.tempFilePath
  //       wx.openDocument({
  //         filePath:filePath
  //       })
  //     },
  //     fail:function(t){
  //       wx.showToast({
  //         title: '下载失败',
  //       })
  //     },
  //     complete:function(t){
  //       wx.hideLoading()
  //     }
  //   })
  // },
    //事件处理函数
    toupper:function(){
     console.log("触发了toupper");
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
console.log(this.data.game)
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