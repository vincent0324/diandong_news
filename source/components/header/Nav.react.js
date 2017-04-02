import React from 'react';

class Nav extends React.Component {

    render() {
        return (
            <nav id="nav" className="nav">
                <div className="nav-wrapper clearfix">
                    <a href="http://m.diandong.com/" className="nav-item-home">首页</a>
                    <a href="http://m.diandong.com/news/" className="nav-item-news">资讯</a>
                    <a href="http://car.diandong.com/" className="nav-item-product">车型库</a>
                    <a href="http://m.diandong.com/roadtest/" className="nav-item-test">评测</a>
                    <a href="http://m.diandong.com/video/" className="nav-item-video">视频</a>
                    <a href="http://www.diandong.com/mall/" className="nav-item-mall">商城</a>
                    <a href="http://m.diandong.com/tiyandian/" className="nav-item-shop">体验店</a>
                    <a href="http://bbs.diandong.com/forum.php" className="nav-item-bbs">论坛</a>
                    <a href="http://m.diandong.com/app/" className="nav-item-app">APP下载</a>
                </div>
            </nav>
        );
    }
};

export default Nav;
