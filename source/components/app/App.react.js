import React from 'react';
import Like from '../like/Like.react';
import Share from '../share/Share.react';
import Comment from '../comment/Comment.react';
import NewsBar from '../newsBar/NewsBar.react';
import CommentBox from '../commentBox/CommentBox.react';
import Ajaxform from 'ajaxform';
import Tip from 'tip';
import User from 'user';
import $ from 'zepto';

let user = new User();

import './app.css';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.showCommentBox = this.showCommentBox.bind(this);
        this.hideCommentBox = this.hideCommentBox.bind(this);
        this.handleUpdateChange = this.handleUpdateChange.bind(this);
        this.handleReply = this.handleReply.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getMoreComments = this.getMoreComments.bind(this);

        this.state = {
            card: false,
            ad: false,
            hasCommentBox: false,
            numberOfLikes: 0,
            hasLiked: false,
            numberOfComments: 0,
            commentList: [],
            comments: {},
            replyId: 0,
            commentValue: '',
            commentPage: 5,
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
        this.getCommentsRequest.abort();
    }

    componentDidMount() {
        this.renderLike();
        this.getComments(this.state.commentPage);

        if ($('.article-card').length > 0) {
            this.setState({card: true});
        }

        if ($('.article-push-holder').length > 0) {
            this.setState({ad: true});
        }
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

    handleUpdateChange(event) {
        let currentNumber = this.state.numberOfLikes;
        let articleId = this.props.articleId;
        let self = $(event.currentTarget);

        self.find('span').addClass('niceIn');

        setTimeout(function() {
            self.find('span').removeClass('niceIn');
        }, 1000);

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

    getComments(page) {
        let pageNum = page + '';

        let data = {
            page: '1',
            pageNum: pageNum,
            uuid: this.props.uuid
        }

        if (user.id) {
            data.uid = user.id
        }

        this.getCommentsRequest = $.ajax({
            url: 'http://comment.diandong.com/comment/list',
            data: data,
            dataType: 'jsonp',
            type: 'GET',
            success: function(result) {
                if (!result.state.err) {
                    if (result.data.total > 0) {
                        let cache = result.data;

                        for (let i = 0; i < cache.curPageList.length; i++) {
                            let element = cache.curPageList[i];

                            if (cache.content[element].refID !== 0) {
                                cache.content[element].replyContent = cache.content[cache.content[element].refID].content;
                                cache.content[element].replyName = cache.content[cache.content[element].refID].uname;
                                cache.content[element].replyTime = cache.content[cache.content[element].refID].created_at;
                            } else {
                                cache.content[element].replyContent = '';
                                cache.content[element].replyName = '';
                                cache.content[element].replyTime = '';
                            }
                        }

                        this.setState({numberOfComments: cache.total, commentList: cache.curPageList, comments: cache.content});
                        this.setState({
                            commentPage: this.state.commentPage + 5
                        });
                    }
                }
            }.bind(this)
        });
    }

    handleReply(e) {
        this.setState({hasCommentBox: true, replyId: e.currentTarget.dataset.id});
    }

    handleChange(event) {
        this.setState({commentValue: event.target.value});
    }

    handleSubmit() {
        if (this.state.commentValue === '') {
            Tip.info('请输入评论内容');
        } else {
            let data = {
                content: this.state.commentValue,
                iframeCross: 1,
                uuid: this.props.uuid
            }

            if (this.state.replyId !== 0) {
                data.refID = this.state.replyId;
            }

            new Ajaxform({
                url: 'http://comment.diandong.com/comment/post',
                data: data,
                success: function(result) {
                    if (result.code === 0) {
                        this.setState({commentValue: '', replyId: 0, hasCommentBox: false});
                        Tip.info('发布成功');
                        let context = this;
                        setTimeout(function() {
                            context.getComments(this.state.commentPage);
                        }, 3000);
                    } else {
                        //
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

    getMoreComments() {
        this.getComments(this.state.commentPage);
    }

    stupidCode() {
        if (this.state.card && this.state.ad) {
            return 'article-interaction';
        } else if (this.state.card && !this.state.ad) {
            return 'article-interaction with-card';
        } else if (!this.state.card && this.state.ad) {
            return 'article-interaction with-ad';
        } else {
            return 'article-interaction with-nothing';
        }
    }

    render() {
        let stupidClassName = this.stupidCode();

        return (
            <div className="app">
                <div className={stupidClassName}>
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
                        <header className="article-comment-header">
                            <h3>网友评论</h3>
                            <span>({this.state.numberOfComments})</span>
                        </header>
                        <div id="comment" className="comment">
                            <Comment commentPage={this.state.commentPage} total={this.state.numberOfComments} list={this.state.commentList} comments={this.state.comments} handleReply={this.handleReply} getMoreComments={this.getMoreComments}/>
                        </div>
                    </div>
                </div>

                <div id="newsBar">
                    <NewsBar isLogined={this.state.isLogined} numberOfLikes={this.state.numberOfLikes} numberOfComments={this.state.numberOfComments} updateLike={this.handleUpdateChange} contentId={this.props.contentId} articleId={this.props.articleId} uuid={this.props.uuid} showCommentBox={this.showCommentBox}/>
                </div>

                <div id="commentBox">
                    <CommentBox isLogined={this.state.isLogined} uuid={this.props.uuid} commentState={this.state.hasCommentBox} hideCommentBox={this.hideCommentBox} replyId={this.state.replyId} handleSubmit={this.handleSubmit} handleChange={this.handleChange} commentValue={this.state.commentValue}/>
                </div>
            </div>
        );
    }
};

export default App;
