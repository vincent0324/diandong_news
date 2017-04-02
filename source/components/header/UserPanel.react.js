import React from 'react';
import User from 'user';

const user = new User();

class UserPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userId: null,
            userAvatar: null
        }
    }

    componentWillMount() {
        if (user.id !== '') {
            this.setState({userId: user.id, userAvatar: user.avatar});
        }
    }

    render() {

        if (this.state.userId) {

            return (
                <div className="user-panel">
                    <i></i>
                    <div className="user-panel-avatar">
                        <a href="http://passport.diandong.com/ark/baseinfo"><img src={this.state.userAvatar}/></a>
                    </div>
                    <i></i>
                </div>
            );
        }

        return (
            <div className="user-panel">
                <i></i>
                <div className="user-login-btn">
                    <a href="http://passport.diandong.com/ark/login/">登录</a>
                </div>
                <i></i>
            </div>
        );
    }
};

export default UserPanel;
