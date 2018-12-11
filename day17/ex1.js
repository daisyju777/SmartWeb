$(document).ready(function(){
    // $('input[type="checkbox"]').click(function(){

    //     //input창 1개일때

    //     //내가한것 
    //     // var text = $(this).val();
    //     // if($(this).is(':checked')){
    //     //     $('input[type=text]').val(text);
    //     //     $('input[type="checkbox"]').not(this).prop('checked','')
    //     // }
    //     // else 
    //     //     $('input[type=text]').val(null);
        

    //     //쌤이한것
    //     // var input = $('input[type=text]');
    //     // var check = $(this);
    //     // //선택되지 않은 체크박스를 체크해제한다.
    //     // $('input[type="checkbox"]').not(this).prop('checked','')
    //     // //체크된 메뉴를 다시 체크하여 체크를 해제하는 경우는 체크의 value와 인풋창의 value가 같다.
    //     // if(input.val() == check.val()){
    //     //     input.val('');
    //     // } else{
    //     //     input.val(check.val());
    //     // }         
    // });

    
    //input창 2개일때

    $('input[type=checkbox]').click(function(){
        //인풋창에 입력된 문자열들을 받아와서 빈 문자열이 아니면 배열에 저장
        var arr = new Array();
        $('input[type=text]').each(function(){
            var text = $(this).val(); // 일단 input창에 있는 값들을 저장하고 
            $(this).val('');        //인풋창을 초기화해줌
            if(text != '')    //값이 존재한다면 배열에 넣어줌
                arr.push(text);
        });
         //클릭한 체크박스의 value를 가져옴
        var check = $(this);
        //배열에 해당 체크박스의 value가 있는지를 확인
        var isContain = arr.indexOf(check.val());
        //체크 박스의 value가 배열에 없고 배열의 길이가 2이면 
        //해당 체크박스의 체크를 비활성화(체크박스는 2개이므로 더 추가 불가능)
        if(isContain<0 && arr.length == 2){     //처음 체크된 체크박스이면서(input창에 없는값) 배열이 꽉찼을때(input창 2개 모두 꽉참. 더 추가 불가능)
            check.prop('checked','');
        }
        //길이가 2가 아니면 해당 배열에 추가 하여 해당 체크박스의체크를 활성화
        else if(isContain<0 && arr.length != 2){      //처음 체크된 체크박스이면서(input창에 없는값) 비어있는 input창 있음
            arr.push(check.val());
            check.prop('checked','checked');
        }
        //체크박스의 value가 배열에 있으면 배열에서 해당 문자열을 제거
        else{  //isContain>=0  input창에 중복된 값이 존재함
            arr.splice(isContain,1);
        }
        //배열에 있는 문자열을 input창에 하나씩 뿌려줌
        for(var i=0; i<arr.length; i++){
            $('input[type=text]').eq(i).val(arr[i]);
        }

    }); 

 
});


// .prop('checked','') : 체크 설정 해제
// .prop('checked','checked') : //체크 설정