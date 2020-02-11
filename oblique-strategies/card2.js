$(document).ready(function () {

    showDiv($('div:first'));

    function showDiv(div) {
        div.transition({
            opacity: 1
        }, 1000, function () {
            //call back
            showDiv(div.next("div"));
        });
    }
});