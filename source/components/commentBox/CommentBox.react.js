import React from 'react';
import Ajaxform from 'ajaxform';
import Tip from 'tip';
import './commentBox.css';

class CommentBox extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            commentValue: ''
        }
    }

    static defaultProps = {
        replyId: 0
    }

    handleChange(event) {
        this.setState({commentValue: event.target.value});
    }

    handleSubmit() {
        if (this.state.commentValue === '') {
            Tip.info('请输入评论内容');
        } else {
            console.log(this.props.replyId);

            let data = {
                content: this.state.commentValue,
                iframeCross: 1,
                uuid: this.props.uuid
            }

            if (this.props.replyId !== 0) {
                data.refID = this.props.replyId;
            }

            new Ajaxform({
                url: 'http://comment.diandong.com/comment/post',
                data: data,
                success: function(result) {
                    if (result.code === 0) {
                        // context.getCommentList(1, options.pageNum, options.uuid);
                        // $('.comment-content-textarea').val('');
                        // tip.success('评论成功！');
                        // context.replyId = 0;
                    } else {
                        // tip.info(result.description);
                    }
                }.bind(this)
            });
        }
    }

    render() {
        if (this.props.commentState) {
            return (
                <div className="comment-box">
                    <header className="comment-box-header">
                        <div className="wrap clearfix">
                            <h3>评论</h3>
                            <a href="javascript:;" className="comment-box-button cancel-button" onClick={this.props.hideCommentBox}>取消</a>
                            <a href="javascript:;" className={this.state.commentValue === ''
                                ? "comment-box-button submit-button disabled"
                                : "comment-box-button submit-button"} onClick={this.handleSubmit}>发布</a>
                        </div>
                    </header>

                    <div className="comment-box-content">
                        <div className="wrap">
                            <textarea className="content-text" value={this.state.commentValue} onChange={this.handleChange} placeholder="说点什么吧..."></textarea>
                        </div>
                    </div>
                </div>
            );
        }

        return null;
    }
};

export default CommentBox;
