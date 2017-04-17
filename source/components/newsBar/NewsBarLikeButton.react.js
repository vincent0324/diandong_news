import React from 'react';

class NewsBarLikeButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        if (this.props.numberOfLikes > 0) {
            return (
                <a href="javascript:;" className="comment-like-number">
                    <span></span>
                    <i>{this.props.numberOfLikes}</i>
                </a>
            );
        } else {
            return (
                <a href="javascript:;" className="comment-like-number">
                    <span></span>
                </a>
            );
        }

    }
};

export default NewsBarLikeButton;
