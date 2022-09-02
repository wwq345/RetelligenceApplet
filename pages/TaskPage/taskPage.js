// pages/TaskPages/taskPage.js
Page({

  /**
   * Page initial data
   */
  data: {
    taskEmpty: true,
    taskArray: []
  },

  onClick: function() {
    this.data.taskArray = this.data.taskArray.concat(this.data.taskArray.length + 1)
    this.setData({
      taskArray: this.data.taskArray,
      taskEmpty: false
    })
  },

  showDetail: function() {
    wx.navigateTo({
      url: '../TaskDetailPage/taskDetailPage',
    })
  },

  navToAssignPage: function() {
    wx.navigateTo({
      url: '../AssignTaskPage/assignTaskPage',
    })
  }
})