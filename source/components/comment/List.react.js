import React from 'react';
import CommentItem from './Item.react';
import {getDateDiff} from 'interval';

class List extends React.Component {

    constructor(props) {
        super(props);
        this.getCommentItem = this.getCommentItem.bind(this)
    }

    getCommentItem(id) {
        let itemProperty = this.props.comments[id];
        let created_at = getDateDiff(itemProperty.created_at, true);
        let replyTime = getDateDiff(itemProperty.replyTime, true);

        return (<CommentItem handleReply={this.props.handleReply} key={id} cid={id} uuid={itemProperty.uuid} uimage={itemProperty.uimage} uname={itemProperty.uname} content={itemProperty.content} created_at={created_at} refID={itemProperty.refID} replyName={itemProperty.replyName} replyTime={replyTime} replyContent={itemProperty.replyContent} ups={itemProperty.ups}/>);
    }

    render() {
        if (this.props.total > 0) {
            let commentListHtml = this.props.list.map(this.getCommentItem);

            return (
                <div className="comment-list">{commentListHtml}</div>
            );
        }

        return null;
    }
};

export default List;
