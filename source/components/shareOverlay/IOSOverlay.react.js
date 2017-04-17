import React from 'react';
import './iosoverlay.css';

class IOSOverlay extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        if (this.props.hasIOSOverlay) {
            return (
                <div className="IOS-overlay-holder" onClick={this.props.hideIOSOverlay}>
                    <div className="share-mask"></div>
                    <div className="IOS-overlay-title">分享设置</div>
                    <div className="IOS-overlay-image"></div>
                </div>
            );
        }

        return null;
    }

};

export default IOSOverlay;
