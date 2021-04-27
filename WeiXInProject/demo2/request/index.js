let  ajaxTimes = 0;
export const request = (params)=>{
  const baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1';
  return new Promise((resolve,reject)=>{
    ajaxTimes++;
    wx.showLoading({
      title: '加载中',
      mask:true
    });
    wx.request({
      ...params,
      url:baseUrl+params.url,
      success:(result)=>{
        // console.log(result.data.message);
       
        resolve(result.data.message);
      },
      fail:(err)=>{
        reject(err);
      },
      complete:()=>{
        ajaxTimes--;
        if(ajaxTimes == 0){
          wx.hideLoading();
        }
      }
    });
  })
}