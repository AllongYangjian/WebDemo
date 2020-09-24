//新闻列表
import React from 'react'
import ReactDom from 'react-dom';

function NewsItem(props) {
    return <div>
        <h4>{props.content}</h4>
        <p>评论人：{props.user}</p>
    </div>
}

class NewsGroup extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [
                { id: 1, user: 'Name1', content: '哈哈' },
                { id: 2, user: 'Name1', content: '哈哈' },
                { id: 3, user: 'Name1', content: '哈哈' },
                { id: 4, user: 'Name1', content: '哈哈' }
            ]
        }
    }
    //方法一
    // render() {
    //     return <div>
    //         <h1>这是评论列表组件</h1>
    //         {
    //             this.state.data.map(item => <div key={item.id}>
    //                 <h4>{item.user}</h4>
    //                 <p>评论内容：{item.content}</p>
    //             </div>)
    //         }
    //     </div>
    // }

    //方法二
    render(){
        return <div>
            {
                this.state.data.map(item=><NewsItem {...item} key={item.id}></NewsItem>)
            }
        </div>
    }
}
export default NewsGroup