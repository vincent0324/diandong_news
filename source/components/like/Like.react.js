import React from 'react';
import $ from 'zepto';
import './like.css';
import User from 'user';

let user = new User();

class Like extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isLogined: false,
            hasLiked: false,
            numberOfLike: 0
        };
    }

    componentWillMount() {
        if (user.id !== '') {
            this.setState({isLogined: true});
        }
    }

    renderLike(id) {
        if (this.state.isLogined) {
            this.getLikeInfo(id);
        }

        this.getNumberOfLikeRequest = $.ajax({
            url: 'http://comment.diandong.com/common/like/total',
            data: {
                uuid: id
            },
            dataType: 'jsonp',
            type: 'GET',
            success: function(result) {
                if (result.state.err) {
                    this.setState({numberOfLike: '0'});
                } else {
                    this.setState({numberOfLike: result.data.total});
                }
            }.bind(this)
        });
    }

    getLikeInfo(id) {
        this.getLikedRequest = $.ajax({
            url: 'http://comment.diandong.com/common/like/isliked',
            data: {
                uuid: id,
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

    componentDidMount() {
        this.renderLike(this.props.articleId)
    }

    componentWillUnmount() {
        this.getLikedRequest.abort();
        this.getNumberOfLikeRequest.abort();
        this.cancelLikeRequest.abort();
        this.doLikeRequest.abort();
    }

    handleClick() {
        let currentNumber = this.state.numberOfLike;
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
                                numberOfLike: this.state.numberOfLike - 1
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
                            numberOfLike: this.state.numberOfLike + 1
                        });
                    }
                }.bind(this)
            });
        }
    }

    render() {
        return (
            <a href="javascript:;" className={this.state.hasLiked
                ? "like-button on"
                : "like-button"} onClick={this.handleClick}>
                <div className="like-button-inner">
                    <i className="icon">&#xe629;</i>
                    <span>{this.state.numberOfLike}</span>
                </div>
            </a>
        );
    }
};

export default Like;
