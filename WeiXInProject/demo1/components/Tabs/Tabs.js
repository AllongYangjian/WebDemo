// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    aaa:{
      type:String,
      value:""
    },
    tabs:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // tabs:[
    //   {
    //     id:0,
    //     name:"首页",
    //     isActive:true
    //   },
    //   {
    //     id:1,
    //     name:"原创",
    //     isActive:false
    //   },
    //   {
    //     id:2,
    //     name:"分类",
    //     isActive:false
    //   },
    //   {
    //     id:3,
    //     name:"关于",
    //     isActive:false
    //   }
    // ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTab(e){
      const _index = e.currentTarget.dataset.index;
      // 这种方式其实是将tabs放在 data中，并没有改变父组件中的数据
      // let {tabs} = this.data;
      // tabs.forEach((item,index)=>{
      //   if(index===_index){
      //     item.isActive = true;
      //   }else{
      //     item.isActive = false;
      //   }
      // })
      // this.setData({tabs:tabs})
      // 触发父组件上绑定的时间 事件名称为 binditemChange
      this.triggerEvent('itemChange',{_index})
    }
  }
})
