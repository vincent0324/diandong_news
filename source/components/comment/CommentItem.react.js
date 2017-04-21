import React from 'react';

class CommentItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="comment-item">
                <div className="comment-item-main clearfix">
                    <div className="comment-item-avatar fn-left"><img src={this.props.uimage}/></div>
                    <div className="comment-item-detail">
                        <div className="comment-item-name">{this.props.uname}</div>
                        <div className="comment-item-text">{this.props.content}</div>
                        <div className="comment-item-footer">
                            <div className="comment-item-time fn-left">{this.props.created_at}</div>
                            <div className="comment-item-button fn-right">
                                <a className="comment-item-like" href="javascript:;">
                                    <i className="newsicon">&#xe644;</i>
                                    <span>{this.props.ups}</span>
                                </a>
                                <a className="comment-item-reply" href="javascript:;">
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

export default CommentItem;
