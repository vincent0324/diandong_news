import $ from 'zepto';
import {getDateDiff} from 'interval';

class Article {

    constructor() {
        this.init();
    }

    init() {
        this.hideArticleText();
        this.render(1);
        this.bindEvent();
    }

    bindEvent() {
        let context = this;

        $(window).on('scroll', function() {
            var docHeight = $(document).height();
            var winTop = document.body.scrollTop;
            var winHeight = $(window).height();

            if (docHeight - winTop - winHeight <= 100 && context.status) {
                context.render(context.page);
            }
        });

        $('.article-all a').on('click', function() {
            $('.article-text p').removeClass('fn-hide');
            $('.article-all').addClass('fn-hide');
        });
    }

    render(page) {
        let context = this;
        let currentPage = page + '';
        context.status = false;

        $.ajax({
            url: 'http://car.diandong.com/openapi/getNewsLimited',
            data: {
                page: currentPage,
                limit: '10'
            },
            dataType: 'jsonp',
            type: 'GET',
            success: function(res) {
                let newsLength = res.data.length;
                let newsHtml = '';

                for (let i = 0; i < newsLength; i++) {
                    let publishTime = getDateDiff((res.data[i].published + '000'), true);

                    newsHtml += [
                        '<li class="article-new-item item-type-new">', '<div class="article-new-image fn-left">', '<a href="' + res.data[i].url + '"><img src="' + res.data[i].thumb + '"></a>',
                        '</div>',
                        '<div class="article-new-info fn-right">',
                        '<div class="article-new-title"><a href="">' + res.data[i].title + '</a></div>',
                        '<div class="article-new-time">' + publishTime + '</div>',
                        '</div>',
                        '<div class="article-new-tag">新车</div>',
                        '</li>'
                    ].join('');
                }

                $('.article-new-content').append(newsHtml);
                context.status = true;
                context.page = page + 1;
            }
        });
    }

    hideArticleText() {
        let textLength = $('.article-text p').length;

        if (textLength > 10) {
            for (let i = 10; i < textLength; i++) {
                $('.article-text p').eq(i).addClass('fn-hide');
            }
        } else {
            $('.article-all').addClass('fn-hide');
        }
    }
};

export default Article;
