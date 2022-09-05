// pages/TaskPages/taskPage.js
import utils from "../../utils/util"
Page({

  /**
   * Page initial data
   */
  data: {
    taskEmpty: true,
    taskArray: [],
    userType: "admin"
  },

  onClick: function() {
    var newItem = {
      index: this.data.taskArray.length + 1,
      assignee: ""
    }
    this.data.taskArray = this.data.taskArray.concat(newItem)
    this.setData({
      taskArray: this.data.taskArray,
      taskEmpty: false,
      index: this.data.taskArray.length
    })
  },

  showDetail: function() {
    wx.navigateTo({
      url: '../TaskDetailPage/taskDetailPage',
    })
  },

  navToAssignPage: function(e) {
    let item  = e.currentTarget.dataset.item
    console.log(item)
    wx.setStorage({
      key: 'itemToAssign',
      data: item
    })
    wx.navigateTo({
      url: '../AssignTaskPage/assignTaskPage',
    })
  },

  completedTask: function(e) {
    let item = e.currentTarget.dataset.item
    utils.removeByValue(this.data.taskArray, item)
    console.log(this.data.taskArray)
    if (this.data.taskArray.length === 0) {
      this.data.taskEmpty = true
    }
    this.setData({
      taskArray: this.data.taskArray,
      taskEmpty: this.data.taskEmpty
    })
  }
})