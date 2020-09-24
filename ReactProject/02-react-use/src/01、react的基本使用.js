//1 导包
import React from 'react'
import ReactDom from 'react-dom'
//创建虚拟dom元素
const m1 = React.createElement('h1',{id:'sb',title:'heh'},'五环之歌')

const h2 = React.createElement('div',null,'这是一个div',m1);
//将虚拟dom元素渲染到界面
ReactDom.render(h2,document.getElementById("app"))