Page({

  /**
   * 页面的初始数据
   */
  data: {
    starArr: [0, 1, 2, 3, 4],
    normalSrc: '../../../Images/p_star_off.png',
    selectedSrc: '../../../Images/p_star_on.png',
    score: 0,

  },



  /* 评分点击*/
  starClick: function (e) {
    var selectScore = e.currentTarget.dataset.score;
    if (selectScore == 1 && this.data.score == 1) {
      this.setData({
        score: 0
      });
    } else {
      this.setData({
        score: selectScore
      });
    }
    console.log("评分为：\t" + this.data.score);
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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