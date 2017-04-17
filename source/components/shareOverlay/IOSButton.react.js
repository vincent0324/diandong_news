import React from 'react';
import IOSOverlay from './IOSOverlay.react';

class IOSButton extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.hideIOSOverlay = this.hideIOSOverlay.bind(this);
        this.state = {
            IOSOverlay: false
        }
    }

    handleClick() {
        this.setState({IOSOverlay: true});
    }

    hideIOSOverlay() {
        this.setState({IOSOverlay: false});
    }

    render() {
        if (this.props.hasIOSButton) {
            return (
                <div>
                    <a href="javascript:;" className="share-box-item share-box-wechat" onClick={this.handleClick}>
                        <span></span>
                        <em>微信好友</em>
                    </a>
                    <IOSOverlay hasIOSOverlay={this.state.IOSOverlay} hideIOSOverlay={this.hideIOSOverlay}/>
                </div>
            );
        }

        return null;
    }
};

export default IOSButton;
