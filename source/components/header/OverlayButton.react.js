import React from 'react';

class OverlayButton extends React.Component {

    render() {

        if (this.props.overlayState) {
            return (
                <a href="javascript:;" onClick={this.props.handleClick}>
                    <i className="icon">&#xe601;</i>
                </a>
            );
        }

        return (
            <a href="javascript:;" onClick={this.props.handleClick}>
                <i className="icon">&#xe63c;</i>
            </a>
        );
    }
};

export default OverlayButton;
