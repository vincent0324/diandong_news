define(function(require, exports, module) {

    'use strict';

    var cookie, area;

    cookie = require('./Cookie');

    area = {
        id: '',
        name: '',
        init: function(callback) {
            this.getCityId();
            this.getCityName();
            callback && callback();
        },
        getCityId: function() {
            if (cookie.get('cityId')) {
                this.id = cookie.get('cityId');
            }
        },
        getCityName: function() {
            if (cookie.get('cityName')) {
                this.name = cookie.get('cityName');
            }
        }
    };

    module.exports = area;
});
