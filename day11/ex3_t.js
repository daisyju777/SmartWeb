//쌤이한것
// 1. input태그와 button태그를 이용하여 두 수를 입력하고 버튼을 누르면 두수의합이 알림창으로 출력되도록 작성해보세요.
//방법1
function printSum(){
    var sum = 0;
    var inputs = document.getElementsByTagName('input');
    for(var i=0; i<2; i++){
        //각 input 태그에 있는 값(문자열)을 가져옴
        var strNum = inputs[i].value;
        //가져온 값을 정수로 변환
        var num = parseInt(strNum);
        //sum에 정수를 누적
        sum += num;
    }
    alert(sum);
}


//방법2
function printSum2(){
    var strNum1 = document.getElementById('num1').value;
    var strNum2 = document.getElementById('num2').value;
    var num1 = parseInt(strNum1);
    var num2 = parseInt(strNum2);
    alert(num1+num2);
}



//방법3

function printSum3(){
    var sum = 0;
    var inputs = document.querySelectorAll('input');
    for(var i=0; i<2; i++){
        //각 input 태그에 있는 값(문자열)을 가져옴
        var strNum = inputs[i].value;
        //가져온 값을 정수로 변환
        var num = parseInt(strNum);
        //sum에 정수를 누적
        sum += num;
    }
    alert(sum);
}

//방법4
function printSum4(){
    var strNum1 = document.querySelector('input#num1').value;
    var strNum2 = document.querySelector('input#num2').value;
    var num1 = parseInt(strNum1);
    var num2 = parseInt(strNum2);
    alert(num1+num2);
}