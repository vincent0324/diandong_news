import React from 'react';
import CommentItem from './CommentItem.react';
import './commentList.css';

class CommentList extends React.Component {

    constructor(props) {
        super(props);
        this.getCommentItem = this.getCommentItem.bind(this)
    }

    getListOfCommentIds() {
        return Object.keys(this.props.comments);
    }

    getCommentItem(id) {
        return (<CommentItem key={id} uimage={this.props.comments[id].uimage} uname={this.props.comments[id].uname} content={this.props.comments[id].content} created_at={this.props.comments[id].created_at} ups={this.props.comments[id].ups}/>);
    }

    render() {
        if (this.props.total > 0) {
            let commentListHtml = this.getListOfCommentIds().map(this.getCommentItem);

            return (
                <div className="comment-list">{commentListHtml}</div>
            );
        }

        return null;
    }
};

export default CommentList;
