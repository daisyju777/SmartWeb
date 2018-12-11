$(document).ready(function(){
    $('.tabmenu').first().css('border-bottom-color','white');

    $('.tabmenu').click(function(){
        $('.tabmenu').css('border-bottom-color','black');
        $(this).css('border-bottom-color','white');
        var id = $(this).attr('id');
        var num = getNumber(id,'menu');
        displayContent(num);
    });
    //주어진 매개변수의 숫자에 맞는 박스를 보여주는 함수
    function displayContent(index){
        $('.content').css('display','none');
        $('#content'+index).css('display','block');
    }
    //문자열이 주어지면 문자열 마지막에 있는 숫자를 가져오기 위한 함수
    function getNumber(tabmenu,id){
        var index = tabmenu.indexOf(id);
        var length = id.length;
        return tabmenu.substr(index+length);
    }
    displayContent(11);
});