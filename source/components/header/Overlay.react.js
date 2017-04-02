import React from 'react';
import City from '../city/City.react';
import Search from './Search.react';
import Nav from './Nav.react';
import UserPanel from './UserPanel.react';

class Overlay extends React.Component {

    render() {

        if (this.props.overlayState) {
            return (
                <div className="header-overlay">
                    <div className="wrap">

                        <div className="header-overlay-city">
                            <City/>
                        </div>

                        <div className="header-search-holder">
                            <Search/>
                        </div>

                        <div className="header-nav-holder">
                            <Nav/>
                        </div>

                        <div className="header-user-holder">
                            <div id="user-holder">
                                <UserPanel/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return null;

    }
};

export default Overlay;
