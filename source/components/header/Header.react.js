import React from 'react';
import OverlayButton from './OverlayButton.react';
import Overlay from './Overlay.react';

import './header.css';

class Header extends React.Component {

    constructor(props) {

        super(props);

        this.toggleOverlay = this.toggleOverlay.bind(this);

        this.state = {
            hasOverlay: false
        };
    }

    toggleOverlay() {
        this.setState({
            hasOverlay: !this.state.hasOverlay
        });
    }

    render() {
        return (
            <header id="header" className="header header-fixed" className={this.state.hasOverlay
                ? "header header-fixed"
                : "header"}>

                <div className="header-content">
                    <div className="wrap">
                        <div id="logo" className="logo fn-left">
                            <a href="http://m.diandong.com/">电动汽车网-电动邦</a>
                        </div>
                        <div id="slogan" className="slogan fn-left">
                            <em>买电动车 上电动邦</em>
                        </div>
                        <div className="header-overlay-btn fn-right">
                            <OverlayButton handleClick={this.toggleOverlay} overlayState={this.state.hasOverlay} />
                        </div>
                    </div>
                </div>

                <Overlay overlayState={this.state.hasOverlay} />

            </header>
        );
    }
};

export default Header;
