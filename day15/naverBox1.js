/* 자바스크립트 코드 window.onload() 와 제이쿼리 코드 $(document).ready(function(){})의 차이점
window.onload() : 자바스크립트 코드로써, 여러개를 작성해도 한개만인식함, 
그러나 제이코드 쿼리인 $(document).ready(function(){})은 여러개를 작성해도 모두 다 실행해줌.
*/
$(document).ready(function(){
    $('.auto-search').click(function(){
        $('#auto-box').toggleClass('display-block');
        $('.auto-down').toggleClass('auto-up');
    });
    $('.item4').click(function(){
        $(this).toggleClass('item4-1');
        $('.sub-menu').toggleClass('display-block');
        $('.sub-menu-background').toggleClass('display-block');
    });
    $('.menu-close').click(function(){
        $('.item4').toggleClass('item4-1');
        $('.sub-menu').toggleClass('display-block');
        $('.sub-menu-background').toggleClass('display-block');
    });

    // function menu(){
    //     $('.item4').toggleClass('item4-1');
    //     $('.sub-menu').removeClass('display-block');
    //     $('.sub-menu-background').removeClass('display-block');
    // }


    var count = $('.rank-list>li').length;
    console.log(count);
    var height = $('.rank-list>li').height();
    console.log(height);

    function step(index) {
        $('.rank-list').delay(2000).animate({
            top: -height * index,
        }, 500, function() {
            step((index + 1) % count);
        });
    }

    step(1);

});