// footer.js
// 푸터영역
(function($){

	//familybox

	var familyArea =$('.family_area');
	var familyDt = familyArea.find('dt');
	var familyDtBtn = familyDt.find('button');
	var familyDd = familyArea.find('dd');

	familyDtBtn.on('click',function(){
		familyDd.stop().slideToggle();
	})


	// top 버튼
	var topBtn = $('.top_btn');

	topBtn.on('click', function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop: 0});
	});


})(jQuery);