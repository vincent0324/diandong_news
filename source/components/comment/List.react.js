import React from 'react';
import CommentItem from './Item.react';

class List extends React.Component {

    constructor(props) {
        super(props);
        this.getCommentItem = this.getCommentItem.bind(this)
    }

    getCommentItem(id) {
        let itemProperty = this.props.comments[id];

        return (<CommentItem key={id} cid={id} uuid={itemProperty.uuid} uimage={itemProperty.uimage} uname={itemProperty.uname} content={itemProperty.content} created_at={itemProperty.created_at} refID={itemProperty.refID} replyName={itemProperty.replyName} replyTime={itemProperty.replyTime} replyContent={itemProperty.replyContent} ups={itemProperty.ups}/>);
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
