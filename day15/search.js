$(function() {
    var count = $('#rank-list li').length;
    console.log(count);
    var height = $('#rank-list li').height();
    console.log(height);

    function step(index) {
        $('#rank-list ol').delay(2000).animate({
            top: -height * index,
        }, 500, function() {
            step((index + 1) % count);
        });
    }

    step(1);
});