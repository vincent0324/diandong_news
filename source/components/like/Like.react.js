import React from 'react';
import './like.css';

class Like extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="like-button">
                <div className="like-button-inner">
                    <i className="icon">&#xe629;</i>
                    <span>12</span>
                </div>
            </div>
        );
    }
};

export default Like;
