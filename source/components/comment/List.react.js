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
        let createdStamp = Date.parse(itemProperty.created_at.replace(/-/g, '/'));
        let created_at = getDateDiff(createdStamp, false);
        let replyTimeStamp = Date.parse(itemProperty.replyTime.replace(/-/g, '/'));
        let replyTime = getDateDiff(replyTimeStamp, false);

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
