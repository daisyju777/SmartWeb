

window.onload = function(){
    printMulti();
    alert('Hello!!');
}
// hello가 먼저 뜨고 alert이 뜸. body 태그안의 내용들이 구성된 후(화면이 출력된 후) function(){}안에 있는 코드들이 실행됨.


// 구구단을 2단부터 9단까지 출력하는 코드를 작성해 보세요. 가능하면 함수를 이용해보세요.

printMulti();  // 순서에 관계없이 어디서든 함수 호출 가능.

//구구단 전체를 출력하는 함수
function printMulti(){
    for(var i=2;i<=9;i++){
        multi(i);
    }
}


//a단을 출력하는 함수
function multi(a){
    console.log(a+"단");
    for(var i=1;i<=9;i++){
      printMul(a,i);
    }
};

// a*i를 출력하는 함수
function printMul(a,i){
    var res = a*i;
    var str = "" + a + "x" + i + "=" + res;
    console.log(str);
};




/** 내가한것
function pr(){
    for(var i=2;i<=9;i++){
        console.log(i+"단");
        for(j=1;j<=9;j++){
            var res = i*j
            var result = i + "X" + j + "=" + res;
            console.log(result);
        }

    }
};
pr();

 */

var array = {name : "홍길동", age : 21, address:"청주시"};
console.log(array['name']);
console.log(array['age']);

//key : 배열 array의 각 키값인 name, age, address를 가져온다.
for(var key in array){
    console.log(key + " : " + array[key])
}


var array1 = [1, "123", 456];
var array2 = [789,"1234","456"];
//concat함수는 배열 2개를 하나로 합쳐 새로운 배열을 만들어 돌려준다.
console.log("concat()함수 예제");
console.log(array1.concat(array2));
console.log(array1);
console.log("push()함수 예제");
console.log(array1.push(000)); // push는 배열의 길이를 리턴해줌.
console.log("배열의 길이 : " + array1.length);  //여기서 length는 속성(property)임. 메소드아님.
console.log("join()함수 예제");
//배열을 구분자를 이용하여 하나의 문자열로 생성
console.log(array1.join(", "));  

/**
객체를 통해 호출되면 메소드, 그냥 사용되면 함수
메소드 : array1.push(000)
함수 : printMulti();
*/  


//배열을 해당하는 번지부터 잘라내기를 하여 잘려진 부분을 반환하고, 원본은 수정됨
console.log("splice()함수 예제");
console.log(array1.splice(1));
console.log(array1);

//배열을 해당하는 번지부터 잘라내기를 하여 잘려진 부분을 반환하고, 원본은 수정이 안됨
console.log("slice()함수 예제");
console.log(array2.slice(1));
console.log(array2);
console.log("reverse()함수 예제");
console.log(array2.reverse());
console.log("sort()함수 예제");
//모든 배열원소들을 문자열로 만든 후 비교하여 정렬
console.log(array2.sort());
console.log('문자열 비교');
console.log("a>b : " + ('a' > 'b'));
console.log("a>aa : " + ('a' > 'aa'));
console.log("a>A : " + ('a' > 'A'));  //아스키코드값으로 대문자A가 소문자a 보다 더 작음. 그러므로 true
console.log("123>7 : " + ('123' > '7'));  // 1하고 7을 비교함. 7이 더 큼. 그러므로 false


