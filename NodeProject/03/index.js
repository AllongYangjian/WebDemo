// const http = require('http')
/**
 * 解构赋值
 * @param state
 * @param todo
 * @returns {T[] | string | T[]}
 */
const add = (state, { payload: todo }) => {
    console.log(todo)
    return state.concat(todo);
};
let sb = add('sdf',{payload:'ddd',age:'sdfa'});
console.log(sb)
//
// fetch('http://192.168.10.41:8001/basic/user/role')
//     .then(response=>response.json())
//     .then(data=>console.log(data));
const del = ({a,b})=>{
 console.log(a.concat(b))
}

del({a:'sb',b:"--"});