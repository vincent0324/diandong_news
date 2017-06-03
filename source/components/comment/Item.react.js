import React from 'react';
import Like from './Like.react';
import Source from './Source.react';
import User from 'user';
import Tip from 'tip';
import CommentBox from '../commentBox/CommentBox.react';
import './item.css';

let user = new User();

class Item extends React.Component {

    constructor(props) {
        super(props);
        // this.getReplyContent = this.getReplyContent.bind(this);
        // this.handleLike = this.handleLike.bind(this);
        this.state = {
            numberOfLikes: this.props.ups,
            hasLiked: false
        }
    }

    handleLike() {

        if (user.id) {
            if (this.state.hasLiked) {
                Tip.info('您已经赞过');
            } else {
                var cid = this.props.cid;
                var ups = this.props.ups;

                this.setState({
                    numberOfLikes: this.state.numberOfLikes + 1,
                    hasLiked: true
                });

                this.likeRequest = $.ajax({
                    url: 'http://comment.diandong.com/comment/up',
                    data: {
                        cid: cid,
                        uuid: this.props.uuid
                    },
                    dataType: 'jsonp',
                    type: 'GET',
                    success: function(result) {
                        Tip.success('点赞成功');
                    }.bind(this)
                });
            }
        } else {
            Tip.info('请先登录');
        }
    }

    getReplyContent() {
        if (this.props.refID !== 0) {
            return (<Source sourceContent={this.props.replyContent} sourceName={this.props.replyName} sourceTime={this.props.replyTime}/>);
        }

        return null;
    }

    // componentWillUnmount() {
    //     this.likeRequest.abort();
    // }

    render() {
        let replyContent = this.getReplyContent();

        return (
            <div className="comment-item">
                <div className="comment-item-main clearfix">
                    <div className="comment-item-avatar fn-left"><img src={this.props.uimage}/></div>
                    <div className="comment-item-detail">
                        <div className="comment-item-name">{this.props.uname}</div>
                        <div className="comment-item-text">{this.props.content}</div>
                        {replyContent}
                        <div className="comment-item-footer">
                            <div className="comment-item-time fn-left">{this.props.created_at}</div>
                            <div className="comment-item-button fn-right">
                                <Like numberOfLikes={this.state.numberOfLikes} handleLike={() => this.handleLike()} hasLiked={this.state.hasLiked}/>
                                <a className="comment-reply-button" href="javascript:;" onClick={this.props.handleReply} data-id={this.props.cid}>
                                    <i className="newsicon">&#xe7e0;</i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Item;
