// pages/createTaskPage/createTaskPage.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  finishClick: function() {
    wx.navigateBack({
      delta: 1,
    })
  }
  
})