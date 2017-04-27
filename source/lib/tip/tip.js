import $ from 'zepto';
import './tip.css';

let timeId;

function handle(text, time, type) {
    let tipNode = null;
    let duration = time
        ? time
        : 1500;

    clearTimeout(timeId);

    if (document.getElementById('widget-tip')) {
        document.body.removeChild(document.getElementById('widget-tip'));
    }

    tipNode = document.createElement('div');
    tipNode.className = 'widget-tip ' + type;
    tipNode.id = 'widget-tip';
    tipNode.innerHTML = '<div class="widget-tip"><div class="wrap">' + text + '</div></div>';
    document.body.appendChild(tipNode);

    timeId = setTimeout(function() {
        $('.widget-tip').fadeOut('600', function() {
            $(this).remove();
        })
    }, duration);
}

let Tip = {
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

export default Tip;
