// pages/AssignTaskPage/assignTaskPage.js
Page({

  /**
   * Page initial data
   */
  data: {
    selectArray: ["百货处洗化课李小华","百货处洗化课李小凤","百货处洗化课李小w","百货处洗化课李小e","百货处洗化课李小z"],
    ifShow: false,
    index: 0
  },
  
  showList: function() {
    this.setData({
      ifShow: !this.data.ifShow
    });
  },

  tapOnListItem: function(e) {
    let Index = e.currentTarget.dataset.index;
    this.setData({
      index: Index,
      ifShow: !this.data.ifShow
    });
  }
})