// Components/dropSelectList/dropSelectList.js
Component({
  properties: {
    ifShow: {
      type: Boolean,
      value: false
    },
    selectArray: {
      type: Array,
      value: []
    },
    index: {
      type: Number,
      value: 0
    }
  },

  methods: {
    showList: function() {
      this.setData({
        ifShow: !this.data.ifShow
      });
      this.triggerEvent("ifShowChange", !this.data.ifShow);
    },
  
    tapOnListItem: function(e) {
      let Index = e.currentTarget.dataset.index;
      this.setData({
        index: Index,
        ifShow: !this.data.ifShow
      });
      this.triggerEvent("indexChange",Index);
    }
  }
})