import React from 'react';

class CommentList extends React.Component {

    constructor(props) {
        super(props);
        this.getCommentItem = this.getCommentItem.bind(this)
    }

    getListOfCommentIds() {
        return Object.keys(this.props.comments);
    }

    getCommentItem(id) {
        return (
            <div className="comment-item" key={id}>{this.props.comments[id].content}</div>
        );
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
