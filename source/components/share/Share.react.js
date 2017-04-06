import React from 'react';
import $ from 'zepto';
import './share.css';

class Share extends React.Component {

    constructor(props) {
        super(props);
        this.hideShare = this.hideShare.bind(this);
        this.state = {
            hasShare: true
        }
    }

    hideShare() {
        this.setState({hasShare: false});
    }

    componentDidMount() {
        $(document).on('click', '.share-box-weibo', function() {
            $('.jiathis_button_tsina').trigger('click');
        })

        $(document).on('click', '.share-box-qzone', function() {
            $('.jiathis_button_qzone').trigger('click');
        })

        $(document).on('click', '.share-box-wechat', function() {
            $('.jiathis_button_weixin').trigger('click');
        })
    }

    render() {
        if (this.state.hasShare) {
            return (
                <div className="share">
                    <div className="share-mask"></div>
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
                                <a href="javascript:;" className="share-box-item share-box-wechat">
                                    <span></span>
                                    <em>微信好友</em>
                                </a>
                            </div>
                        </div>
                        <div className="share-box-footer">
                            <div className="wrap">
                                <a className="share-box-cancel" href="javascript:;" onClick={this.hideShare}>取消</a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return null;
    }
};

export default Share;
