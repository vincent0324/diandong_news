import React from 'react';
import $ from 'zepto';
import Cookie from 'cookie';

import './city.css';

class City extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentCity: '北京'
        }
    }

    getCurrentCityFromCookie() {

        if (!!Cookie.get('cityName')) {
            return true;
        }

        return false;
    }

    componentDidMount() {

        if (this.getCurrentCityFromCookie()) {
            this.setState({currentCity: Cookie.get('cityName')});
        } else {
            this.getCurrentCityRequest = $.ajax({
                url: 'http://car.diandong.com/api/get_local',
                data: {},
                dataType: 'jsonp',
                type: 'POST',
                success: function(result) {
                    this.setState({currentCity: result.data.city});
                    Cookie.set('cityName', result.data.city);
                    Cookie.set('cityId', result.data.code);
                }.bind(this)
            });
        }
    }

    render() {
        return (
            <div className="current-city">
                <i className="icon">&#xe659;</i>
                <a href="http://www.diandong.com/city/">{this.state.currentCity}</a>
            </div>
        );
    }
};

export default City;
