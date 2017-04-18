import React from 'react';

class NewsBarLikeButton extends React.Component {

    constructor(props) {
        super(props);
    }

    getNumberOfLikes() {
        if (this.props.numberOfLikes > 0) {
            return (
                <i>{this.props.numberOfLikes}</i>
            );
        }

        return null;
    }

    render() {
        let numberOfLikesHtml = this.getNumberOfLikes();

        return (
            <a href="javascript:;" className="comment-like-number">
                <span></span>
                {numberOfLikesHtml}
            </a>
        );
    }
};

export default NewsBarLikeButton;
