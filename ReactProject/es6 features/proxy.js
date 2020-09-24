//get
// var target = {};
// var handler= {
//     get:function(target,name){
//         return `Hello ${name}`
//     }
// }
// var p = new Proxy(target,handler)
// console.log(p.world === 'Hello world')

//apply
// var target = function(){
//     console.log('I am the target')
// }

// var handler = {
//     apply:function(receiver,...args){
//         return 'I am the proxy'
//     }
// }

// var p = new Proxy(target,handler);
// console.log(p() === 'I am the proxy')

//set
var target = {name:'yj',age:12}
var handler = {
    get:function(target,key){
        let result = target[key]
        if(key ==='age'){
            return result+'岁'
        }
        return result
    },
    set:function(target,key,value){
        if(key ==='age' && typeof value!=='number'){
            throw Error('age字段必须为Number类型')
        }
    return Reflect.set(target,key,value)
    }
}
target = new Proxy(target,handler)


console.log(`我叫${target.name},我今年${target.age}`)
// target.age = 'hh'

target.age = 15.1
console.log(`我叫${target.name},我今年${target.age}`)