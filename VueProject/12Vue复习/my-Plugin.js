(function () {  
    const MyPlugin  = {};
    MyPlugin.install = function(Vue,options){
        //安装插件
                //定义全局fangfa
            Vue.myGlobalMethod = function(){
                console.log("插件的全局方法");
            }

            //定义指定
            Vue.directive('upper-text',function(el,binding){
                el.textContent = binding.value.toUpperCase();
            })

            Vue.prototype.$myMethod = function(param){
                console.log("定义实例方法");
            }
    }
    //向外暴露插件
    window.MyPlugin = MyPlugin;

})()