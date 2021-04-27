/**
 * 文档地址:https://www.showdoc.com.cn/128719739414963
 * 
 */

// index.js
import {
  request
} from '../../request/index.js'
// 获取应用实例
const app = getApp()
Page({
  data: {
    swiperList: [],
    catesList:[],
    floorList:[]
  },
  onLoad: function (options) {
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   method:'GET',
    //   responseType:'text',
    //   success:result=>{
    //     if(result.data.meta.status === 200){
    //         this.setData({swiperList:result.data.message});
    //     }
    //   }
    // })
    this.getSwiperList();
    this.getCateList();
    this.getFloorList();
  },
  /**
   *  请求轮播图地址
   * @param {参数} params 
   */
  getSwiperList:function (params) {
    request({
      url: '/home/swiperdata',
      method: 'get'
    })
    .then(result => {
        this.setData({
          swiperList: result
        });
  
    })
  },
  getCateList:function () {
    request({url:'/home/catitems',method:'get'})
    .then(result=>{
        this.setData({
          catesList: result
        });
    })
  },
  getFloorList:function(){
    request({url:'/home/floordata',method:'get'})
    .then(result=>{
        this.setData({
          floorList: result
        });
    })
  }
})