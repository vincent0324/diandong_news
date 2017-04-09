import React from 'react';
import CommentBox from './CommentBox.react';
import Share from '../share/Share.react';
import './newsBar.css';

class NewsBar extends React.Component {

    constructor(props) {
        super(props);
        this.showCommentBox = this.showCommentBox.bind(this);
        this.hideCommentBox = this.hideCommentBox.bind(this);
        this.showShareBox = this.showShareBox.bind(this);
        this.hideShareBox = this.hideShareBox.bind(this);
        this.state = {
            hasCommentBox: false,
            hasShare: false,
            numberOfLikes: 0
        };
    }

    showCommentBox() {
        this.setState({hasCommentBox: true});
    }

    hideCommentBox() {
        this.setState({hasCommentBox: false});
    }

    showShareBox() {
        this.setState({hasShare: true});
    }

    hideShareBox() {
        this.setState({hasShare: false});
    }

    render() {
        return (
            <div>
                <div className="news-bar">
                    <div className="wrap clearfix">
                        <div className="comment-input fn-left" onClick={this.showCommentBox}>说点什么吧</div>
                        <div className="comment-button fn-right">
                            <a href="#article-comment" className="comment-item-number">
                                <span></span>
                                <i>24</i>
                            </a>
                            <a href="javascript:;" className="comment-like-number">
                                <span></span>
                                <i>4</i>
                            </a>
                            <a href="javascript:;" className="comment-share" onClick={this.showShareBox}>
                                <span></span>
                            </a>
                        </div>
                    </div>
                </div>

                <CommentBox commentState={this.state.hasCommentBox} handleClick={this.hideCommentBox}/>
                <Share shareState={this.state.hasShare} hideShareBox={this.hideShareBox}/>
            </div>
        );
    }
};

export default NewsBar;
