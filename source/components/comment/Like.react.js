import React from 'react';

class Like extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a className={this.props.hasLiked
                ? "comment-like-button on"
                : "comment-like-button"} href="javascript:;" onClick={this.props.handleLike}>
                <i className="newsicon">&#xe644;</i>
                <span>{this.props.numberOfLikes}</span>
            </a>
        );
    }
};

export default Like;
