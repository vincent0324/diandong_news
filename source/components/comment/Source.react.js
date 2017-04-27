import React from 'react';
import './source.css';

const Source = ({
    sourceName = '',
    sourceTime = '',
    sourceContent = ''
}) => {
    return (
        <div className="comment-item-source">
            <div className="comment-source-name">{sourceName}</div>
            <div className="comment-source-content">{sourceContent}</div>
            <div className="comment-source-time">{sourceTime}</div>
        </div>
    );
};

export default Source;
