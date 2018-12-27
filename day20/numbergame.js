$(document).ready(function(){
    var answer = randomArr();
    console.log(answer);
    var answer = [3, 9, 7];
    var p1 = [7,9,6];

    /* answer와 p1을 비교하여 현재 상황을 판별하여 1B이 출력되도록 함*/
    var strike = getStrike(answer,p1);
    var ball = getBall(answer,p1);

    if(strike == 0 && ball == 0)
        console.log('3O');
    else if(strike == 3)
        console.log('3S. 정답입니다.');
    else if(strike == 0)
        console.log(ball+'B');
    else if(ball == 0)
        console.log(strike +'S');
    else
    console.log(strike + 'S ' + ball + "B");

    function getStrike(arr1, arr2){
        var strike = 0;
        for(var i = 0; i<arr1.length; i++){
            if(arr1[i] == arr2[i])
            strike++;
        }
        return strike;
    }

    function getBall(arr1, arr2){
        var ball = 0;
        for(var i = 0; i<arr1.length; i++){
            for(var j=0; j<arr2.length; j++){
                if(i==j) continue; //아래코드를 시행하지 말고 넘어감(이미 getStrike 함수에서 비교해주었기 때문에)
                //또는 위에 문장을 주석처리 하고 아래에 if(i != j && arr1[i] == arr2[j]) 이렇게 써줘도됨. 
                // 이와같은 문장을 Short Circit Evaluation이라하는데 && 논리연산자를 쓸때는 조건식의 순서에 따라 더욱 빠른 연산이 가능함.
                // 왜냐하면 && 일때는 조건식이 하나라도 거짓이면 수행을 안하고 넘어감. 
                // 그러므로 i != j를 && 앞에 써주었을때 i = j일경우 뒤의 조건식은 보지도 않고 넘어감
                if(arr1[i] == arr2[j]) 
                    ball++;
            }
        }
        return ball;
    }
    ////////////////////////////////
    var str = new String();
    for(var i=1; i<=9; i++){
        str += '<input type="text" class="box" value="'+i+'" readonly>'
    }
    var str2 = new String();
    for(var i=0; i<3; i++){
        str2 += '<input type="text" class="box" readonly>'
    }
    str2 += '<button id="submit" type="button">확인</button>'
    str2 += '<button id="reset" type="reset">새게임</button>'

    $('#boxes').html(str);
    $('#input').html(str2);

    $('#boxes>.box').click(function(){
            var selectedCnt = $('.selected').length;

    if(selectedCnt < 3 || $(this).hasClass('selected')){
        if($(this).hasClass('selected')){
            p1.splice(p1.indexOf($(this).val()),1);
        } else {
            p1.push($(this).val());
        }

        matchArr();
        $(this).toggleClass('selected');
        } else {
        alert('3개를 선택해야 합니다.')}
    });

    var p1 = [];
    function matchArr(){
         var cnt = 0;
         for(cnt = 0; cnt<3; cnt++){
             if(cnt < p1.length)
                 $('#input>.box').eq(cnt).val(p1[cnt]);
             else
                 $('#input>.box').eq(cnt).val('');
         }
    }

    $('#submit').click(function(){
        var strike = getStrike(answer,p1);
        var ball = getBall(answer,p1);
        if(p1.length != 3){
            alert('3개를 선택해야합니다.');
            return;
        }
        if(strike == 0 && ball == 0)
            alert('3O');
        else if(strike == 3)
            alert('3S. 정답입니다.');
        else if(strike == 0)
            alert(ball+'B');
        else if(ball == 0)
            alert(strike +'S');
        else
            alert(strike + 'S ' + ball + "B");
    });
    function randomArr(){
        var cnt = 0;
        var ranArr = new Array();
        while(cnt<3){     //중복되지 않는 수 3개가 만들어질때까지 반복해줌
            var tmp = random(1,9);
            if(ranArr.indexOf(tmp) == -1){
                ranArr.push(tmp);
                cnt++;
            }
        }
        return ranArr;
    }
    function random(min, max){
        return parseInt(Math.random()*(max-min+1)+min);
    }
    $('#reset').click(function(){
        arr = new Array();
        $('.selected').removeClass('selected');
        answer = randomArr();
        console.log(answer);
        alert("새게임을 시작합니다.");
    });
});