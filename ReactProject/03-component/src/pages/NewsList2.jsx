import React from 'react';
import styles from '@/pages/style'
export default class NewsList extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div style={styles.listItemStyle}>
            <h4 style={styles.listItemHeadStyle}>{this.props.content}</h4>
            <p style={styles.listItemContentStyle}>评论人：{this.props.user}</p>
        </div>
    }
}