import Cookie from 'cookie';

class Area {

    init(callback) {
        this.getCityId();
        this.getCityName();
        callback && callback();
    }

    getCityId() {
        if (Cookie.get('cityId')) {
            this.id = Cookie.get('cityId');
        }
    }

    getCityName() {
        if (Cookie.get('cityName')) {
            this.name = Cookie.get('cityName');
        }
    }
};

export default Area;
