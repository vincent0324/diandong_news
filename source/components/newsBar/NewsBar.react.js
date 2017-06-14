import React from 'react';
// import CommentBox from '../commentBox/CommentBox.react';
import ShareOverlay from '../shareOverlay/ShareOverlay.react';
// import NewsBarLikeButton from './NewsBarLikeButton.react';
import './newsBar.css';

class NewsBar extends React.Component {

    constructor(props) {
        super(props);
        this.showShareBox = this.showShareBox.bind(this);
        this.hideShareBox = this.hideShareBox.bind(this);
        this.state = {
            hasCommentBox: false,
            hasShare: false,
            numberOfLikes: 0
        };
    }

    showShareBox() {
        this.setState({hasShare: true});
    }

    hideShareBox() {
        this.setState({hasShare: false});
    }

    componentDidMount() {
        let id = this.props.articleId;

        this.getNumberOfLikeRequest = $.ajax({
            url: 'http://comment.diandong.com/common/like/total',
            data: {
                uuid: id
            },
            dataType: 'jsonp',
            type: 'GET',
            success: function(result) {
                if (result.state.err) {
                    this.setState({numberOfLikes: 0});
                } else {
                    this.setState({numberOfLikes: result.data.total});
                }
            }.bind(this)
        });
    }

    componentWillUnmount() {
        this.getNumberOfLikeRequest.abort();
    }

    getNumberOfLikes() {
        if (this.props.numberOfLikes > 0) {
            return (
                <i>{this.props.numberOfLikes}</i>
            );
        }

        return null;
    }

    getLoginStatus() {
        if (!this.props.isLogined) {
            let redirectUtl = 'http://passport.diandong.com/ark/login?redirect=' + location.href;

            return (
                <a href={redirectUtl} className="comment-input fn-left">说点什么吧</a>
            );
        }

        return (
            <div className="comment-input fn-left" onClick={this.props.showCommentBox}>说点什么吧</div>
        );
    }

    render() {
        let numberOfLikesHtml = this.getNumberOfLikes();
        let loginStatusHtml = this.getLoginStatus();

        return (
            <div>
                <div className="news-bar">
                    <div className="wrap clearfix">
                        {loginStatusHtml}
                        <div className="comment-button fn-right">
                            <a href="#article-comment" className="comment-item-number">
                                <span></span>
                                <i>{this.props.numberOfComments}</i>
                            </a>
                            <a href="javascript:;" className="comment-like-number" onClick={this.props.updateLike}>
                                <span></span>
                                {numberOfLikesHtml}
                            </a>
                            <a href="javascript:;" className="comment-share" onClick={this.showShareBox}>
                                <span></span>
                            </a>
                        </div>
                    </div>
                </div>

                <ShareOverlay shareState={this.state.hasShare} hideShareBox={this.hideShareBox}/>
            </div>
        );
    }
};

export default NewsBar;
