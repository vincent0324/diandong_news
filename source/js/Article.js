import $ from 'zepto';
import {getDateDiff} from 'interval';
// import Push from 'push';

let newsClass = {
    "29": "item-type-new",
    "22": "item-type-tech",
    "23": "item-type-industry",
    "24": "item-type-policy",
    "61": "item-type-guide",
    "75": "item-type-use"
};

let newsTypeName = {
    "29": "新车",
    "22": "技术",
    "23": "行业",
    "24": "政策",
    "61": "导购",
    "75": "用车"
};

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
                    let className = newsClass[res.data[i].catid];
                    let typeName = newsTypeName[res.data[i].catid];

                    if (i === 6 && page === 1) {
                        newsHtml += [
                            '<li class="article-new-item ' + className + '">',
                            '<div class="article-new-image fn-left">',
                            '<a href="' + res.data[i].url + '"><img src="' + res.data[i].thumb + '"></a>',
                            '</div>',
                            '<div class="article-new-info fn-right">',
                            '<div class="article-new-title"><a href="">' + res.data[i].title + '</a></div>',
                            '<div class="article-new-time">' + publishTime + '</div>',
                            '</div>',
                            '<div class="article-new-tag">' + typeName + '</div>',
                            '</li>',
                            '<li><div class="news-push" id="agency_shower_58"></div></li>'
                        ].join('');
                    } else {
                        newsHtml += [
                            '<li class="article-new-item ' + className + '">',
                            '<div class="article-new-image fn-left">',
                            '<a href="' + res.data[i].url + '"><img src="' + res.data[i].thumb + '"></a>',
                            '</div>',
                            '<div class="article-new-info fn-right">',
                            '<div class="article-new-title"><a href="">' + res.data[i].title + '</a></div>',
                            '<div class="article-new-time">' + publishTime + '</div>',
                            '</div>',
                            '<div class="article-new-tag">' + typeName + '</div>',
                            '</li>'
                        ].join('');
                    }
                }

                $('.article-new-content').append(newsHtml);
                context.status = true;
                context.page = page + 1;

                // let push = new Push();
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
