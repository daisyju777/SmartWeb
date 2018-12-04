/* 자바스크립트 코드 window.onload() 와 제이쿼리 코드 $(document).ready(function(){})의 차이점
window.onload() : 자바스크립트 코드로써, 여러개를 작성해도 한개만인식함, 
그러나 제이코드 쿼리인 $(document).ready(function(){})은 여러개를 작성해도 모두 다 실행해줌.
*/
$(document).ready(function(){
    $('.auto-search').click(function(){
        $('#auto-box').toggleClass('display-block');
        $('.auto-down').toggleClass('auto-up');
    });
    
    $('.inline-block.item4').click(function(){
        $(this).toggleClass('inline-block-itemup');
        $('.menu-list-box').toggleClass('display-block');
    });
});

