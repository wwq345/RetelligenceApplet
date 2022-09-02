// pages/AssignTaskPage/assignTaskPage.js
Page({

  /**
   * Page initial data
   */
   
  data: {
    selectArray: ["百货处洗化课李小华","百货处洗化课李小凤","百货处洗化课李小w","百货处洗化课李小e","百货处洗化课李小z"],
    ifShow: false,
    index: 0,
    standardIndex: [0,0,0],
    standardArray: [
      [],
      [],
      []
    ],
    objectArray: [
      {
        name: "节日营销",
        place: [
          {
            name: "2022年大综门店中秋执行",
            type: [
              {
                name: "地堆"
              },
              {
                name: "店铺"
              },
              {
                name: "超市"
              }
            ]
          },
          {
            name: "2021年大综门店中秋执行",
            type: [
              {
                name: "地堆"
              },
              {
                name: "店铺"
              },
              {
                name: "超市"
              }
            ]
          }
        ]
      },
      {
        name: "店庆日营销",
        place: [
          {
            name: "2021年浦东综合店庆执行",
            type: [
              {
                name: "超市"
              },
              {
                name: "商城"
              }
            ]
          },
          {
            name: "2019年杭州中心店店庆执行",
            type: [
              {
                name: "超市"
              },
              {
                name: "商城"
              }
            ] 
          },
          {
            name: "2019年杭州中心店店庆执行",
            type: [
              {
                name: "超市"
              },
              {
                name: "商城"
              }
            ] 
          }
        ]
      },
      {
        name: "纪念日营销",
        place: [
          {
            name: "2018年北京中关店奥运举办执行",
            type: [
              {
                name: "店铺"
              },
              {
                name: "超市"
              },
              {
                name: "商城"
              }
            ]
          }
        ]
      }
    ]
  },

  onLoad: function(options) {
    var data = {
      objectArray: this.data.objectArray,
      standardIndex: this.data.standardIndex,
      standardArray: this.data.standardArray,
    };
    for(var i=0;i<data.objectArray.length;i++) {
      data.standardArray[0].push(data.objectArray[i].name);
    }
    for(var j=0;j<data.objectArray[data.standardIndex[0]].place.length;j++) {
      data.standardArray[1].push(data.objectArray[data.standardIndex[0]].place[j].name);
    }
    for(var k=0;k<data.objectArray[data.standardIndex[0]].place[data.standardIndex[1]].type.length;k++) {
      data.standardArray[2].push(data.objectArray[data.standardIndex[0]].place[data.standardIndex[1]].type[k].name);
    }
    this.setData(data);
  },

  bindChange: function(e) {
    this.setData({
      standardIndex: e.detail.value
    })
  },

  bindColumnChange: function(e) {
    var objectArray = this.data.objectArray,
    standardArray = this.data.standardArray,
    standardIndex = this.data.standardIndex;

    standardIndex[e.detail.column] = e.detail.value;

    var searchColumn = () => {
      for(var i=0;i<objectArray.length;i++) {
        var arr1 = [];
        var arr2 = [];
        if (i == standardIndex[0]) {
          for(var j=0;j<objectArray[i].place.length;j++) {
            arr1.push(objectArray[i].place[j].name);
            if (j == standardIndex[1]) {
              for(var k=0; k<objectArray[i].place[j].type.length;k++) {
                arr2.push(objectArray[i].place[j].type[k].name);
              }
              standardArray[2] = arr2;
            }
          }
          standardArray[1] = arr1;
        }
      };
    }

    switch (e.detail.column) {
      case 0:
        standardIndex[1] = 0;
        standardIndex[2] = 0;
        searchColumn();
        break;
      case 1:
        standardIndex[2] = 0;
        searchColumn();
        break; 
    }
    this.setData({
      standardArray: standardArray,
      standardIndex: standardIndex
    })
  },
})