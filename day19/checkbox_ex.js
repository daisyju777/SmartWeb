
$(document).ready(function(){
    $('#choice').click(function(){

        // prop('속성','값') : 해당 객체의 속성을 값으로 설정
        // prop('속성') : 해당 객체의 속성 값을 가져옴
        // css('속성','값') : 해당 객체의 css 속성을 값으로 설정
        // css('속성') : 해당 객체의 css 속성의 값을 가져옴
        // text('값') : 해당 객체의 텍스트 값을 설정
        // text() : 해당 객체의 텍스트 값을 가져옴
        // val('값') : 해당 객체의 value 값을 설정
        // val () : 해당 객체의 value 값을 가져옴

        //방법1
        if($(this).is(':checked')){ 
            $('tbody input[type=checkbox]').prop('checked','checked');
        } else {
            $('tbody input[type=checkbox]').prop('checked','');
        };

        //방법2
        if($(this).prop('checked')){ 
            $('input[type=checkbox]').prop('checked','checked');
        } else {
            $('input[type=checkbox]').prop('checked','');
        };


        //방법3
        //모든 checkbox의 checkbox 속성값을 id가 choice인 checkbox의 checked속성 값으로 설정한다.
        $('input[type=checkbox]').prop('checked',$(this).prop('checked'));

        //방법4
        var checked = $(this).prop('checked');
        $('input[type=checkbox]').each(function(){
            $(this).prop('checked',checked);
        });
    });
});