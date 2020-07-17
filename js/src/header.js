// header.js
// header 영역 js
(function($){

	var navBox = $('.navBox');

	var gnb = $('.gnb_area');
	var gnbUl = gnb.children('ul');
	var gnbLi = gnbUl.children('li');
	var gnbLink = gnbLi.children('a');
	var gnbSub = $('.sub_menu');

	gnbLink.on('mouseenter focus',function(){
		$(this).parent('li').addClass('action');
		gnbSub.stop().slideDown();
	});

	gnbLink.on('mouseleave blur',function(){
		$(this).parent('li').removeClass('action');
	});

	navBox.on('mouseleave blur',function(){
		gnbSub.stop().slideUp();
	});

	var subMenu = $('.sub_menu');
	var subLi = subMenu.children('li');
	var subLink = subLi.children('a');

	subLink.on('mouseenter focus',function(){
		$(this).parent('li').addClass('action');
	})

	subLink.on('mouseleave blur',function(){
		$(this).parent('li').removeClass('action');
	})

})(jQuery);