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


    //div는 ul태그를 감싸는 객체의 선택자명
    //h는 marginTop의 높이
    //time은 이동하는데 걸리는 시간
    var ticker = function(div,h,time)
    {
        timer = setTimeout(function(){
            $(div+' li:first').animate( {marginTop: h}, time, function()
            {
                //여기서 this는 item5클래스 안에 있는 ul태그 안에 있는 첫번째 li태그객체
                //detach는 해당 객체를 게저한 후 해당 객체를 리턴한다.
                $(this).detach().appendTo(div+'>ul').removeAttr('style');  //removeAttr('style')는 marginTop: '-20px' 스타일을 지워줌
            });
            ticker(div,h,time);
        }, 2000);         
      };
      ticker('.item5','-20px',400);
      ticker('.news-content','-20px',600);

    // var ticker2 = function()
    // {
    //     timer = setTimeout(function(){
    //         $('.news-content li:first').animate( {marginTop: '-20px'}, 400, function()
    //         {
    //             //여기서 this는 item5클래스 안에 있는 ul태그 안에 있는 첫번째 li태그객체
    //             //detach는 해당 객체를 제거한 후 해당 객체를 리턴한다.
    //             $(this).detach().appendTo('.news-content>ul').removeAttr('style');  //removeAttr('style')는 marginTop: '-20px' 스타일을 지워줌
    //         });
    //         ticker2();
    //     }, 2000);         
    // };
    // ticker2();

      $('.item5').hover(function(){
        $('.real-search-box').toggleClass('display-block');
      });

      $('.api-list>li').hover(function(){
        //$('.api-list>li>a').toggleClass('display-none');
        $(this).children('a').toggleClass('display-none');
       // $('.api-list>li>div').toggleClass('display-block');
        $(this).children('div').toggleClass('display-block');
      });
     

      $('.box5-prev').hover(function(){
        $('.btn-prev').toggleClass('btn-prev2');
      })

      $('.box5-next').hover(function(){
        $('.btn-next').toggleClass('btn-next2');
      });

      function next(num){
        $('.color-black').text(num);
      };

      $('.box5-next').click(function(){
          next(1);

      });

});