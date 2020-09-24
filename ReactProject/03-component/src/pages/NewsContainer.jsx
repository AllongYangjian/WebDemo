import React from 'react';

import NewsList from '@/pages/NewsList'
import styles from '@/pages/style'

import cssobj from '@/css/news.scss'
import bootstrapCss from 'bootstrap/dist/css/bootstrap.css'
console.log(bootstrapCss)

export default class NewsContainer extends React.Component {

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

    render() {
        // return <div style={styles.newContainer}>
        //     <h1 style={styles.h1Style}>这是一则评论列表</h1>
        //     {
        //         this.state.data.map(item=><NewsList {...item} key={item.id}></NewsList>)
        //     }
        // </div>

        return <div style={styles.newContainer}>
            <h1 className={cssobj.title}>这是一则评论列表</h1>
            <button className="btn btn-info">hah</button>
            {
                this.state.data.map(item => <NewsList {...item} key={item.id}></NewsList>)
            }
        </div>
    }

}
