import Area from 'area';
import $ from 'zepto';

class Push {

    constructor() {
        this.init();
    }

    init() {
        this.getData();
    }

    getData() {
        var context = this;

        Area.init(function() {
            var url = 'http://assets.diandong.com/repository/data/' + Area.id + '.js'

            require.async([url], function(result) {
                for (var i in result) {
                    if ($('#agency_shower_' + i).length > 0) {
                        var pushHtml = '';

                        if (result[i].adtag_show === '0') {
                            pushHtml = '<a href="' + result[i].url + '" target="_blank"><img src="' + result[i].src + '"></a>';
                        } else {
                            pushHtml = '<a style="display:block;position:relative;" href="' + result[i].url + '" target="_blank"><img style="display: block;" src="' + result[i].src + '"><i style="position:absolute;right:10px;bottom: 10px;color: #fff;font-style: normal;font-size: 12px;border: 1px solid #fff;padding: 0 3px;">广告</i></a>';
                        }

                        $('#agency_shower_' + i).html(pushHtml);
                    }
                }
            });
        });
    }
};

export default Push;
