import React from 'react';
import './commentBox.css';

class CommentBox extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.commentState) {
            return (
                <div className="comment-box">
                    <header className="comment-box-header">
                        <div className="wrap clearfix">
                            <h3>评论</h3>
                            <a href="javascript:;" className="comment-box-button cancel-button" onClick={this.props.hideCommentBox}>取消</a>
                            <a href="javascript:;" className={this.props.commentValue === ''
                                ? "comment-box-button submit-button disabled"
                                : "comment-box-button submit-button"} onClick={this.props.handleSubmit}>发布</a>
                        </div>
                    </header>

                    <div className="comment-box-content">
                        <div className="wrap">
                            <textarea className="content-text" value={this.props.commentValue} onChange={this.props.handleChange} placeholder="说点什么吧..."></textarea>
                        </div>
                    </div>
                </div>
            );
        }

        return null;
    }
};

export default CommentBox;
