import React from 'react';
import $ from 'zepto';
import IOSButton from './IOSButton.react'
import './shareOverlay.css';

class ShareOverlay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isIOS: false
        }
    }

    componentWillMount() {
        let u = navigator.userAgent;
        let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

        this.setState({isIOS: isIOS});
    }

    componentDidMount() {
        $(document).on('click', '.share-box-weibo', function() {
            $('.jiathis_button_tsina').trigger('click');
        })

        $(document).on('click', '.share-box-qzone', function() {
            $('.jiathis_button_qzone').trigger('click');
        })
    }

    render() {
        if (this.props.shareState) {
            return (
                <div className="share">
                    <div className="share-mask" onClick={this.props.hideShareBox}></div>
                    <div className="share-box">
                        <div className="share-box-list">
                            <div className="wrap">
                                <a href="javascript:;" className="share-box-item share-box-weibo">
                                    <span></span>
                                    <em>新浪微博</em>
                                </a>
                                <a href="javascript:;" className="share-box-item share-box-qzone">
                                    <span></span>
                                    <em>QQ空间</em>
                                </a>
                                <IOSButton hasIOSButton={this.state.isIOS}/>
                            </div>
                        </div>
                        <div className="share-box-footer">
                            <div className="wrap">
                                <a className="share-box-cancel" href="javascript:;" onClick={this.props.hideShareBox}>取消</a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return null;
    }
};

export default ShareOverlay;
