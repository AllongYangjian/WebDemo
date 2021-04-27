// pages/category/index.js

import {
  request
} from '../../request/index.js'
Page({
  Cates: [],
  /**
   * 页面的初始数据
   */
  data: {
    leftMenuList: [],
    rightContent: [],
    currentIndex: 0,
    scrollTop:0
  },

  handleItemTap: function (e) {
    const {
      index
    } = e.currentTarget.dataset;
    this.setData({
      currentIndex: index,
      rightContent: this.Cates[index].children,
      scrollTop:0
    });

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const Cates = wx.getStorageSync('cates');
    if (!Cates) {
      this.getCategories();
    } else {
      const currentTime = Date.now();
      if(currentTime-Cates.time>15*60*1000){
        this.getCategories();
      }else{
        this.Cates = Cates.data;

        let leftMenuList = this.Cates.map(v => v.cat_name);
        this.setData({
          leftMenuList
        })
        let rightContent = this.Cates[0].children;
        this.setData({
          rightContent
        })
      }
    }
  },
  getCategories: function () {
    request({
        url: '/categories'
      })
      .then(result => {
        // if (result.data.meta.status === 200) {
          this.Cates = result;
          wx.setStorageSync('cates', {
            time: Date.now(),
            data: this.Cates
          });

          let leftMenuList = this.Cates.map(v => v.cat_name);
          this.setData({
            leftMenuList
          })
          let rightContent = this.Cates[0].children;
          this.setData({
            rightContent
          })
        // }
      })
  }


})