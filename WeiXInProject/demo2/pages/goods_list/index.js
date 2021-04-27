// pages/goods_list/index.js
/**
 * 加载下一页
 * 1、滑动到底部触犯记载下一页逻辑
 * 2、判断有没有下一页
 * 3、有，添加数据
 */
import {request} from '../../request/index'
Page({
  QueryParams:{
    query:'',
    cid:"",
    pagenum:1,
    pagesize:10
  },
  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        value:'综合',
        isActive:true
      },
      {
        id:1,
        value:'销量',
        isActive:false
      },
      {
        id:2,
        value:'价格',
        isActive:false
      }
    ],
    goods_list:[]
  },
  totalPages:1,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.QueryParams.cid = options.cid;
    this.getGoodsList();
  },
  getGoodsList:function(){
    request({url:'/goods/search',data:this.QueryParams})
    .then(result=>{
      // console.log(result);
      this.totalPages = Math.ceil(result.total/this.QueryParams.pagesize);
      this.setData({goods_list:[...this.data.goods_list,...result.goods]});
      wx.stopPullDownRefresh();//手动停止
    })
  },

  tabItemChange:function(e){
    const {index} = e.detail;
     let arr = this.data.tabs.map((v,i)=>{
        if(i === index){
          v.isActive = true;
        }else{
          v.isActive = false;
        }
        return v;
      });
      this.setData({tabs:arr});
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
      this.QueryParams.pagenum = 1;
      this.setData({goods_list:[]});
      this.getGoodsList();
      
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // console.log('onReachBottom');
    if(this.QueryParams.pagenum>=this.totalPages){
      wx.showToast({
        title: '没有下一页了',
      })
    }else{
        this.QueryParams.pagenum++;
        this.getGoodsList();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})