//내가한것
//1. input태그와 button태그를 이용하여 두 수를 입력하고 버튼을 누르면 두수의합이 알림창으로 출력되도록 작성해보세요.


function result1(){
    var value1 = document.getElementsByClassName("input1")[0].value;
    var value2 = document.getElementsByClassName("input2")[0].value;
    sum = parseInt(value1) + parseInt(value2);
    alert(sum);
}



function result2(){
    var value1 = document.getElementsByClassName("input1");
    var value2 = document.getElementsByClassName("input2");
    sum = parseInt(value1[0].value) + parseInt(value2[0].value);
    alert(sum);
}

