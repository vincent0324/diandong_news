import React from 'react';
import CommentBox from './CommentBox.react';
import './newsBar.css';

class NewsBar extends React.Component {

    constructor(props) {
        super(props);
        this.showCommentBox = this.showCommentBox.bind(this);
        this.hideCommentBox = this.hideCommentBox.bind(this);
        this.state = {
            hasCommentBox: false
        };
    }

    showCommentBox() {
        this.setState({hasCommentBox: true});
    }

    hideCommentBox() {
        this.setState({hasCommentBox: false});
    }

    render() {
        return (
            <div>
                <div className="news-bar">
                    <div className="wrap clearfix">
                        <div className="comment-input fn-left" onClick={this.showCommentBox}>说点什么吧</div>
                        <div className="comment-button fn-right">
                            <a href="javascript:;" className="comment-item-number">
                                <span></span>
                                <i>24</i>
                            </a>
                            <a href="javascript:;" className="comment-like-number">
                                <span></span>
                                <i>4</i>
                            </a>
                            <a href="javascript:;" className="comment-share">
                                <span></span>
                            </a>
                        </div>
                    </div>
                </div>

                <CommentBox commentState={this.state.hasCommentBox} handleClick={this.hideCommentBox}/>
            </div>
        );
    }
};

export default NewsBar;
