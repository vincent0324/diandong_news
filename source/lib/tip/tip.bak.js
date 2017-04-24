define(function(require, exports, module) {

    'use strict';

    require('./tip.css');

    var icoConfig,
        timeId;

    icoConfig = {
        "widget-tip-success": "&#xe600;",
        "widget-tip-error": "&#xe601;",
        "widget-tip-info": "&#xe611;"
    };

    function handle(text, time, type) {
        var tipHtml,
            duration;

        $('.widget-tip').remove();

        clearTimeout(timeId);

        duration = time
            ? time
            : 1500;

        tipHtml = [
            '<div class="widget-tip tip-bounceIn">', '<div class="widget-tip-inner">', '<i class="icon widget-tip-ico">' + icoConfig[type] + '</i>',
            '<span class="widget-tip-content">' + text + '</span>',
            '</div>',
            '</div>'
        ].join('');

        $(tipHtml).addClass(type).appendTo(document.body);

        timeId = setTimeout(function() {
            $('.widget-tip').fadeOut('600', function() {
                $(this).remove();
            })
        }, duration);
    }

    module.exports = {
        success: function(text, time) {
            handle(text, time, 'widget-tip-success');
        },
        error: function(text, time) {
            handle(text, time, 'widget-tip-error');
        },
        info: function(text, time) {
            handle(text, time, 'widget-tip-info');
        }
    };
});
