/*
1. 화면에 글이 출력되어 있는 상태에서 버튼을 클릭하면 출력된 글이 사라지도록 작성하세요.
- 클릭 이벤트 처리
- 글이 사라지도록 이벤트 처리(다양한 방법들이 있음)
2. 화면에 글이 출력되어 있는 상태에서 버튼을 클릭하면 출력된 글이 사라지고, 사라진 상태에서 버튼을 클릭하면 글이 다시 출력되도록 작성하세요.
- 클릭 이벤트 처리
- 글이 사라지도록 이벤트 처리(다양한 방법들이 있음)
*/

/*
$(document).ready(function(){
    $('.btn').click(function(){
        $('.content').css('display','none');
    });
});
*/
$(document).ready(function(){
    //css()를 이용하여 display를 none으로 만듬
    $('#btn1').click(function(){
        //$('p').css('display') : p태그의 style display속성 값을 가져와라 
        var display = $('p').css('display'); //css()의 매개변수가 2개면 설정하는것, 1개면 가져오는것.
        if(display == 'block')
            $('p').css('display','none');
        else
            $('p').css('display','block');
    });
    //addClass()를 이용하여 클래스를 등록
    $('#btn2').click(function(){
        //$('p').toggleClass('display-none');
        var className = $('p').attr('class');
        console.log(className);
        //indexOf는 문자열에 매개변수 문자열이 있는지 없는지 알려주는 함수로, 있으면 매개변수 문자열의 첫글자가 있는 위치를 반환하고
        //없으면 -1값을 반환함.  (찾는 문자열이 존재한다면 그 위치값은 0부터 나올수 있음. -1은 그러므로 해당 문자열을 찾을수 없다는 것을 의미함)
        if(className == undefined || className.indexOf('display-none') < 0) 
            // 만약 if(className == undefined || className=="") 이라고 조건을 써준다면 p태그에 다른 클래스명들이 정의되어 있을때 제대로 실행이 안될수 있어서 불안정함. 그러므로 위와같이 코드를 써줘야함.
            // p태그에 클래스명이 정의되어 있지 않거나, display-none클래스가 없을때 아래와 같은 코드를 실행해줌
            $('p').addClass('display-none');
        else
            $('p').removeClass('display-none');
    });
    //hide()를 이용하여 해당 객체를 숨김
    $('#btn3').click(function(){
        $('p').toggle();
    });

});

