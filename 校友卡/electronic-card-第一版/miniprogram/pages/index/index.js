var add_dataq=require("../../images/add_dataq")
const app = getApp();
var util=require('../../images/time');
let l
let showForm
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showForm:true,
  l:1,
  animationData: {},
  tempFilePaths: '',
  Time: '',
  tttt:"",
  outlook_start_time:"",
  outlook_name:"",
  outlook_gender:"",
  outlook_major:"",
  },
 
  
  trund : function(){
    var animation = wx.createAnimation({
      duration: 2000,
      timingFunction: 'ease',
    })
  
    this.animation = animation

    animation.scale(1.8,1.9).rotate(90).step()

    this.setData({
      animationData:animation.export()
    })

    setTimeout(function() {
      animation.translate(80,0).step()
      this.setData({
        animationData:animation.export()
      })
    }.bind(this), 1000)
  },
  getTime:function(e){
    var that = this;
    var currentTime = util.formatTime(new Date());
  },

  displayDate: function () {
    document.getElementById("font_car").innerHTML=Date();
  },
  chooseimage: function() {
    var _this = this;
    wx.chooseImage({
      count: 1, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function success(res) {
        wx.showToast({
          title: '正在上传...',
          icon: 'loading',
          mask: true,
          duration: 1000
        });
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
        _this.setData({
          tempFilePaths: res.tempFilePaths
        });
        console.log(res.tempFilePaths);
      }
    });}, 
  radiochange:function(){
    this.setData({
      l:0
    });
  }, 
  btnsub: function(e) {
    if (!e.detail.value.name || !e.detail.value.gender || !e.detail.value.start_time) {
      wx.showToast({
        title: '请填写必填项',
        icon: 'none'
      });
      return;}
   console.log(e.detail.value)
    wx.showLoading({
      title: '加载中',
    })
    const db = wx.cloud.database();
    const { name, gender,level,major,graduation_time} = e.detail.value;
    const { start_time,years_of_education,studentID,birthday} = e.detail.value;
    
    let queryData;
    console.log(e);
    // 调用云数据库的查询方法
    db.collection("passed").where({
       // graduation_time:graduation_time,
      name: name,
      gender: gender,
      // birthday:birthday,
      // years_of_education:years_of_education,
      // level: level,
      // // level:level,
      // major:major,
      start_time:`${start_time}01`,
      // studentID:studentID,
    }).get().then(res => {
      if(res.data.length===0){
        wx.showToast({
          title: '☆*: .｡. o(≧▽≦)o .｡.:*☆',
          icon:"none"
        });
        queryData = e.detail.value;
        wx.showModal({
        title: '🤷‍♂️🤷‍♂🧟🦿🏳️‍🌈🚩🌍',
        content: '未找到相关信息!如果确认输入内容无误，请点击交人工核对',
        showcancel:true,
        cancelText: '取消',
        confirmText: '人工核对',
        complete: (res) => {
          if (res.cancel) {
          
       console.log("123")
          }
      
          if (res.confirm) {
           
            add_dataq.bar.bb(queryData)
          }
        }
      })}
    
      else{   
        const { name,  start_time, gender,level} = e.detail.value;
        this.setData({
          outlook_start_time:`${start_time.slice(0,4)}年${start_time.slice(-2)}月`,
          outlook_name:name,
          outlook_gender: gender,
        })
      wx.showToast({
        title: '激活成功',
        icon:"none"
      })
        wx.showModal({
          title: '激活成功，您要上传一张照片吗',
          content:"🧟🐪🙇‍♂️💎⚔️🛺🚀🌌✔️",
          showcancel:true,
          cancelText: '暂不上传',
          confirmText: '贴一张',
          complete: (res) => { 
            if (res.cancel) {
            
         console.log("123");
         this.trund();
         this.setData({
          showForm: false,

          });
         this.displayDate();
            }
        
            if (res.confirm) {
            this.trund();
            this.setData({
            showForm: false,

            });
            this.chooseimage();
            this.displayDate();
             
            }
          }
         })
      }
      // 处理查询结果
    }).catch(err => {
      console.log(err);
      // 处理错误
    });




  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    setInterval(function(){
        that.setData({
            Time: util.formatTime(new Date()),
          
        });    
    },1000);
    this.setData({
      name : "",
      gender : "",
      level : "",
      studentID : "",
      years_of_education:"",
      birthday : "",
      start_time : "",
      major:""
 
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
    this.setData({
      tttt:Time.slice(0,2)
    })
    
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