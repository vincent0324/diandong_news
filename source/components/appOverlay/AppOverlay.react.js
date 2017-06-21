import React from 'react';
import './appOverlay.css';

const AppOverlay = ({
    url = 'http://m.diandong.com/app/?f=ArticleTop'
}) => {
    return (
        <div className="app-overlay">
            <div className="wrap">
                <div className="app-overlay-logo fn-left"></div>
                <div className="app-overlay-text fn-left">
                    <h3>电动邦</h3>
                    <p>新能源汽车第一导购平台</p>
                </div>
                <a className="app-overlay-button fn-right" href={url}>下载APP</a>
                <i className="app-overlay-star"></i>
            </div>
        </div>
    );
};

export default AppOverlay;
