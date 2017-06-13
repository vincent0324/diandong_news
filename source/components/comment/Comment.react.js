import React from 'react';
import CommentList from './List.react';
import './comment.css';

class Comment extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.total > 5 && this.props.commentPage < this.props.total) {
            return (
                <div className="comment-holder">
                    <CommentList handleReply={this.props.handleReply} total={this.props.total} list={this.props.list} comments={this.props.comments}/>
                    <a href="javascript:;" className="get-more-comments" onClick={this.props.getMoreComments}>查看更多评论</a>
                </div>
            );
        }

        if (this.props.commentPage >= this.props.total) {
            return (
                <div className="comment-holder">
                    <CommentList handleReply={this.props.handleReply} total={this.props.total} list={this.props.list} comments={this.props.comments}/>
                </div>
            );
        }

        return (
            <div className="comment-holder">
                <CommentList handleReply={this.props.handleReply} total={this.props.total} list={this.props.list} comments={this.props.comments}/>
            </div>
        );
    }
};

export default Comment;
