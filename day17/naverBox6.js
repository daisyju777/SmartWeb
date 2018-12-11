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
     
      //box5-bottom이 6개가 있음. 그중에 선택할 박스 번호를 index라 함
      var index = 1;
      function displayBox5(i){
          //6개를 일단 다 안보이게 하고 
          $('.box5-bottom').removeClass('display-block');  // 기존에 보였던 박스를 안보이게 하기 위해서
          //선택한 i번째를 보여준다.
          $('.box5-bottom').eq(i-1).addClass('display-block');
          $('.box5-item2>b').text(i);
          $('.location').removeClass('display-inline-block');
          $('.location').eq(i-1).addClass('display-inline-block');
      }
      displayBox5(index);

      $('.box5-next').click(function(){
        index++;
        //박스가 6개이기 때문에 7번째로 가려고 하면 첫번째로 보내준다.
        if(index > 6){
            index = 1;
        }
        displayBox5(index);
      });

      $('.box5-prev').click(function(){
        index--;
        if(index <= 0 ){
            index = 6;
        }
        displayBox5(index);
      });

    
      $('.rank-left').click(function(){
        $('.rank-lists').first().css('display','block');
        $('.rank-lists').last().css('display','none');
        $(this).css('background-color','#f9fafc');
        $('.rank-right').css('background-color','#ffffff');
      });

      $('.rank-right').click(function(){
        $('.rank-lists').last().css('display','block');
        $('.rank-lists').first().css('display','none');
        $(this).css('background-color','#f9fafc');
        $('.rank-left').css('background-color','#ffffff');
      });

      $('.rank-lists').first().css('display','block');
      $('.rank-lists').last().css('display','none');

      var selectedMenuCnt = 0;  //사용자가 지정한 메뉴 갯수
      var menuArr = ["dici","newsi","stocki","dealeri","mapi","moviei","musici","booki","webtooni"]
      $('.menu-setting').click(function(){
        var cnt=0;
        $('.item2-1').each(function(){
            $(this).prop('class','item2-1');
            cnt++;
            if(cnt > 5){
                $(this).addClass('display-none');
            }
        });
      });

      $('.menu-close').click(function(){
        var i=0;
        if(selectedMenuCnt == 0){
            $('.item2-1').each(function(){
              $(this).prop('class','item2-1 back-img');
              $(this).addClass(menuArr[i++]);
            });
        }
      });

});