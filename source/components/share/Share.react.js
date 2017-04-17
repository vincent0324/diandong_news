import React from 'react';
import ShareOverlay from '../shareOverlay/ShareOverlay.react';
import './share.css';

class Share extends React.Component {

    constructor(props) {
        super(props);
        this.hideShareBox = this.hideShareBox.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            hasShare: false
        };
    }

    hideShareBox() {
        this.setState({hasShare: false});
    }

    handleClick() {
        this.setState({hasShare: true});
    }

    render() {
        return (
            <div>
                <a className="share-button" href="javascript:;" onClick={this.handleClick}>
                    <div className="share-button-inner">
                        <i className="icon">&#xe622;</i>
                    </div>
                </a>
                <ShareOverlay shareState={this.state.hasShare} hideShareBox={this.hideShareBox}/>
            </div>
        );
    }
};

export default Share;
