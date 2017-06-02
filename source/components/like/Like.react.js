import React from 'react';
import $ from 'zepto';
import './like.css';

class Like extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a href="javascript:;" className={this.props.likeStatus
                ? "like-button on"
                : "like-button"} onClick={this.props.updateLike}>
                <div className="like-button-inner">
                    <i className="icon">&#xe629;</i>
                    <span>{this.props.numberOfLikes}</span>
                </div>
            </a>
        );
    }
};

export default Like;
