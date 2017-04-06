import React from 'react';
import './commentBox.css';

class CommentBox extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            commentValue: ''
        }
    }

    handleChange(event) {
        this.setState({commentValue: event.target.value});
    }

    render() {
        if (this.props.commentState) {
            return (
                <div className="comment-box">
                    <header className="comment-box-header">
                        <div className="wrap clearfix">
                            <h3>评论</h3>
                            <a className="comment-box-button cancel-button" onClick={this.props.handleClick}>取消</a>
                            <a className={this.state.commentValue === ''
                                ? "comment-box-button submit-button disabled"
                                : "comment-box-button submit-button"}>发布</a>
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
