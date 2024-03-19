// pages/administer/index.js
const db = wx.cloud.database();
let k;
let dataList;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [],
    k: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },


  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  getData: function () {
    // 调用云数据库的 get() 方法获取 passed 集合中的数据
    db.collection("write_pass").get().then(res => {
      // 获取到数据后更新页面的 dataList 数据
      this.setData({
        dataList: res.data
      });
    }).catch(err => {
      console.error('获取数据失败：', err);
    });
  },
  // chooseExcel(){
  //   let that = this;
  //   wx.chooseMessageFile({
  //     count: 1,
  //     //extension: [],
  //     type: 'file',
  //     success: (result) => {
  //       console.log("选择Excel表成功！",result);
  //       let path = result.tempFiles[0].path;
  //       //that.uploadExcel(path);//调用上传Excel到云存储的方法
  //     },
  //     fail: (res) => {},
  //     complete: (res) => {},
  //   })
  // },
 
  // //上传Excel到云存储
  // uploadExcel(path){
  //   let that = this;
  //   wx.cloud.uploadFile({
  //     cloudPath : new Date().getTime() + '.xls',
  //     filePath : path,
  //     success:function(res){
  //       console.log("上传Excel到云存储成功！",res);
  //       //that.parseExcel(res.fileID);//解析Excel表
  //     },
  //     fail:function(err){
  //       console.log("上传Excel到云存储失败！",err);
  //     }
  //   })
  // },
 
  // //解析Excel表
  // parseExcel(fileId){
  //   wx.cloud.callFunction({
  //     name : 'excel',
  //     data : {
  //       fileID : fileId
  //     },
  //     success(res){
  //       console.log("解析Excel表成功！",res);
  //     },
  //     fail(err){
  //       console.log("解析Excel表失败！",err);
  //     }
  //   })
  // },

//////////////////
  chooseExcel() {
    let that = this;
    wx.chooseMessageFile({
      count: 1,
      type: 'file',
      success(res) {
        let path = res.tempFiles[0].path;
        console.log("选择excel成功", path);
        that.uploadExcel(path);
      }
    })
  },

  uploadExcel(path) {
    let that = this;
    wx.cloud.uploadFile({
      cloudPath: new Date().getTime() + '.xls',
      filePath: path, // 文件路径
      success: res => {
        console.log("上传成功", res.fileID);
        that.jiexi(res.fileID);
      },
      fail: err => {
        console.log("上传失败", err);
      }
    });
  },

  jiexi(fileId) {
    wx.cloud.callFunction({
      name: "excel",
      data: {
        fileID: fileId
      },
      success(res) {
        console.log("解析并上传成功", res);
      },
      fail(res) {
        console.log("解析失败", res);
      }
    });
  },

  keys_bten: function (e) {
    console.log(e.detail.value.keys);
    if (e.detail.value.keys === "123456") {
      this.setData({
        k: 1
      });
      // db.collection("passed").add({
      //   data:{
      //    name:"测试号"
      //   }
      // })
    } else {
      console.log("no");
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  data_chack: function (params) {
    wx.showModal({
      title: '提示',
      content: '请认真核对',
      showCancel: true,
      cancelText: '通过此条',
      confirmText: '删除此条',
      complete: (res) => {
        if (res.cancel) {
          db.collection("new").add({
            data: {
              name: params.detail.value.name,
              studentID: params.detail.value.studentID,
              gender: params.detail.value.gender,
              birthday: params.detail.value.birthday,
              graduation_time: params.detail.value.graduation_time,
              major: params.detail.value.major,
              start_time: params.detail.value.start_time,
              level: params.detail.value.level,
              years_of_education: params.detail.value.years_of_education,
            }
          });

          wx.showToast({
            title: '通过成功',
            icon: "success",
            mask: true,
            duration: 3000
          });
        }

        if (res.confirm) {
          db.collection("write_pass").where({
            name: params.detail.value.name
          }).get().then(res => {
            if (res.data.length > 0) {
              const id = res.data[0]._id;
              db.collection("write_pass").doc(id).remove();
            }
          });

          wx.showToast({
            title: '删除成功',
            icon: "none",
            mask: true,
            duration: 3000
          });
        }
      }
    })
  }
});