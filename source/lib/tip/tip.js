import $ from 'zepto';
import './tip.css';

let timeId;

function handle(text, time, type) {

    // remove.
    $('.widget-tip').length > 0 && $('.widget-tip').remove();
    clearTimeout(timeId);

    let duration = time
        ? time
        : 1500;
    let tipHtml = '<div class="widget-tip"><div class="wrap">' + text + '</div></div>';

    $(tipHtml).appendTo(document.body);

    timeId = setTimeout(function() {
        $('.widget-tip').fadeOut('600', function() {
            $(this).remove();
        })
    }, duration);
}

export default {
    success : function(text, time) {
        handle(text, time, 'widget-tip-success');
    },
    error : function(text, time) {
        handle(text, time, 'widget-tip-error');
    },
    info : function(text, time) {
        handle(text, time, 'widget-tip-info');
    }
};
