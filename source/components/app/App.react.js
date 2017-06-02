import React from 'react';
import Like from '../like/Like.react';
import Share from '../share/Share.react';
import Comment from '../comment/Comment.react';
import NewsBar from '../newsBar/NewsBar.react';
import CommentBox from '../commentBox/CommentBox.react';
import User from 'user';

let user = new User();

import './app.css';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.showCommentBox = this.showCommentBox.bind(this);
        this.hideCommentBox = this.hideCommentBox.bind(this);

        this.handleUpdateChange = this.handleUpdateChange.bind(this);

        this.state = {
            hasCommentBox: false,
            numberOfLikes: 0,
            hasLiked: false,
            numberOfComments: 0,
            isLogined: false
        };
    }

    componentWillMount() {
        if (user.id !== '') {
            this.setState({isLogined: true});
        }
    }

    componentWillUnmount() {
        this.getLikedRequest.abort();
        this.getNumberOfLikeRequest.abort();
        this.cancelLikeRequest.abort();
        this.doLikeRequest.abort();
    }

    componentDidMount() {
        this.renderLike();
    }

    getNumberOfLikes() {
        this.getNumberOfLikeRequest = $.ajax({
            url: 'http://comment.diandong.com/common/like/total',
            data: {
                uuid: this.props.articleId
            },
            dataType: 'jsonp',
            type: 'GET',
            success: function(result) {
                if (result.state.err) {
                    this.setState({numberOfLikes: '0'});
                } else {
                    this.setState({numberOfLikes: result.data.total});
                }
            }.bind(this)
        });
    }

    getLikeStatus() {
        this.getLikedRequest = $.ajax({
            url: 'http://comment.diandong.com/common/like/isliked',
            data: {
                uuid: this.props.articleId,
                uid: user.id
            },
            dataType: 'jsonp',
            type: 'GET',
            success: function(result) {
                if (result.data) {
                    this.setState({hasLiked: true});
                }
            }.bind(this)
        });
    }

    renderLike() {
        if (this.state.isLogined) {
            this.getLikeStatus();
        }

        this.getNumberOfLikes();
    }

    handleUpdateChange() {
        let currentNumber = this.state.numberOfLikes;
        let articleId = this.props.articleId;

        if (this.state.hasLiked) {

            if (this.state.isLogined) {
                this.cancelLikeRequest = $.ajax({
                    url: 'http://comment.diandong.com/common/like/down',
                    data: {
                        uuid: articleId,
                        uid: user.id
                    },
                    dataType: 'jsonp',
                    type: 'GET',
                    success: function(result) {
                        if (result.code === 0) {
                            this.setState({
                                hasLiked: false,
                                numberOfLikes: this.state.numberOfLikes - 1
                            });
                        } else {
                            //
                        }
                    }.bind(this)
                });
            }
        } else {
            let data = {
                uuid: articleId
            };

            if (user.id) {
                data.uid = user.id;
            }

            this.doLikeRequest = $.ajax({
                url: 'http://comment.diandong.com/common/like/up',
                data: data,
                dataType: 'jsonp',
                type: 'GET',
                success: function(result) {
                    if (!result.state.err) {
                        this.setState({
                            hasLiked: true,
                            numberOfLikes: this.state.numberOfLikes + 1
                        });
                    }
                }.bind(this)
            });
        }
    }

    showCommentBox() {
        this.setState({hasCommentBox: true});
    }

    hideCommentBox() {
        this.setState({hasCommentBox: false});
    }

    render() {
        return (
            <div className="app">
                <div className="article-interaction">
                    <div className="wrap">
                        <div className="article-interaction-item">
                            <div id="article-interaction-like">
                                <Like likeStatus={this.state.hasLiked} numberOfLikes={this.state.numberOfLikes} updateLike={this.handleUpdateChange}/>
                            </div>
                        </div>
                        <div className="article-interaction-item">
                            <div id="article-interaction-share">
                                <Share/>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="article-comment" className="article-comment">
                    <div className="wrap">
                        <div id="comment">
                            <Comment uuid={this.props.articleId}/>
                        </div>
                    </div>
                </div>

                <div className="newsBar-placeholder"></div>

                <div id="newsBar">
                    <NewsBar numberOfLikes={this.state.numberOfLikes} updateLike={this.handleUpdateChange} contentId={this.props.contentId} articleId={this.props.articleId} uuid={this.props.uuid} showCommentBox={this.showCommentBox}/>
                </div>

                <div id="commentBox">
                    <CommentBox uuid={this.props.uuid} commentState={this.state.hasCommentBox} hideCommentBox={this.hideCommentBox}/>
                </div>
            </div>
        );
    }
};

export default App;
