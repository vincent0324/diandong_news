import React from 'react';
import './commentBox.css';

class CommentBox extends React.Component {

    constructor(props) {
        super(props);
    }

    getPublishButtonStatus() {
        if (this.props.isLogined) {
            return (
                <a href="javascript:;" className={this.props.commentValue === ''
                    ? "comment-box-button submit-button disabled"
                    : "comment-box-button submit-button"} onClick={this.props.handleSubmit}>发布</a>
            );
        } else {
            let redirectUtl = 'http://passport.diandong.com/ark/login?redirect=' + location.href;
            return (
                <a href={redirectUtl} className="comment-box-button submit-button">发布</a>
            );
        }
    }

    render() {
        let publishButtonHtml = this.getPublishButtonStatus();

        if (this.props.commentState) {
            return (
                <div className="comment-box">
                    <header className="comment-box-header">
                        <div className="wrap clearfix">
                            <h3>评论</h3>
                            <a href="javascript:;" className="comment-box-button cancel-button" onClick={this.props.hideCommentBox}>取消</a>
                            {publishButtonHtml}
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
