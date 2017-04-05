(function () {
    //
    var ratio,
        scaleValue,
        renderTime,
        root = document.documentElement,
        metaElement = document.querySelector('meta[name="viewport"]');

    if (metaElement) {
        var tempArray = metaElement.getAttribute("content").match(/initial\-scale=(["']?)([\d\.]+)\1?/);

        if (tempArray) {
            scaleValue = parseFloat(tempArray[2]);
            ratio = parseInt(1 / scaleValue);
        }
    } else {
        metaElement = document.createElement("meta");
        metaElement.setAttribute("name", "viewport");
        metaElement.setAttribute("content", "width=device-width, initial-scale=1, user-scalable=no, minimal-ui");

        root.firstElementChild.appendChild(metaElement);
    }

    window.addEventListener("resize", function () {
        clearTimeout(renderTime);
        renderTime = setTimeout(initPage, 300);
    }, false);

    window.addEventListener("pageshow", function (e) {
        e.persisted && (clearTimeout(renderTime), renderTime = setTimeout(initPage, 300));
    }, false);

    "complete" === document.readyState
        ? document.body.style.fontSize = 12 * ratio + "px"
        : document.addEventListener("DOMContentLoaded", function () {
            document.body.style.fontSize = 12 * ratio + "px";
        }, false);

    function initPage() {
        var htmlWidth = root.getBoundingClientRect().width;

        htmlWidth / ratio > 540 && (htmlWidth = 540 * ratio);
        window.rem = htmlWidth / 16;
        root.style.fontSize = window.rem + "px";
    }

    initPage();
})();
