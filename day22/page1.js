$(document).ready(function(){
    var swiper = new Swiper('.contents.swiper-container');
    var titleSwiper = new Swiper('.title.swiper-container', {
        slidesPerView: 'auto',  //auto로 잡으면 글자수에 맞춰줌
        centeredSlides: true,
        spaceBetween: 30,
        slideToClickedSlide: true
      });
      swiper.controller.control = titleSwiper;
      titleSwiper.controller.control = swiper;
      $('.carousel').carousel('pause'); //자동으로 넘어가지않고 클릭했을때만 넘어감 $('#demo').carousel('pause')

      new daum.roughmap.Lander({
		"timestamp" : "1546584186049",
		"key" : "rn7m",
		"mapWidth" : "800",
		"mapHeight" : "300"
	}).render();
});