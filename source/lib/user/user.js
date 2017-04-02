define(function(require, exports, module) {

    'use strict';

    var Cookie = require('cookie');

    var User = function() {
        this.init();
    };

    User.prototype = {

        id: '',

        name: '',

        nickname: '',

        avatar: '',

        init: function() {
            this.getUserInfo();
        },

        getUserInfo: function() {
            var userName = Cookie.get('ark_rememberusername') || '';
            var userAvatar = Cookie.get('ark_headimg') || '';
            var nickname = Cookie.get('ark_nickname') || '';
            var userId = Cookie.get('ark_userid') || '';

            this.setUserInfo(userId, userName, nickname, userAvatar);
        },

        setUserInfo: function(id, name, nickname, avatar) {
            this.id = id;
            this.name = name;
            this.nickname = nickname;
            this.avatar = avatar;
        }
    };

    module.exports = User;
});
