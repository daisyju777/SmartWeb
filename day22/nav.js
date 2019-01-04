$(document).ready(function(){
    console.log('연결 확인');
    $('.ham-menu').click(function(){
        $('.sidebar').animate({right:'0'},1000);
    });
    $('.sidebar-close').click(function(){
        $('.sidebar').animate({right:'-200'},1000);
    });
});