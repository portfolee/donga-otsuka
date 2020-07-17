// main.js
// 메인페이지 js
(function($){
	// 헤더 푸터 불러오기
	var headBox = $('#headBox');
	headBox.load('./header.html');
	var footBox = $('#footBox');
	footBox.load('./footer.html');

	var conBox = $('#conBox');

	// =============================================
	// 슬라이드배너
	
	var win = $(window);
	var winH = win.height();

	var timed = 1000;
	var viewBox = $('#viewBox');
	


	var viewArea = viewBox.children('.view_area');
	viewArea.css({marginLeft:0});
	var viewLi = viewArea.children('div');

	var indicator = $('.view_indicator')
	var indiUl = indicator.find('ul');
	var indiLi = indicator.find('li');
	var indiLink = indiUl.find('a');

	var viewCopy = viewLi.eq(-1).clone(true);
	
	viewArea.prepend(viewCopy);
	viewLi = viewArea.children('div');
	var viewLen = viewLi.length;
	
	viewArea.css({'width': viewLen * 100 + '%','position':'relative','left':-100 + '%'	});
	viewLi.css({width: 100 / viewLen + '%' });
	
		var slideI = 0;
		var MyProSlide = function(){
			slideI += 1;
			var iPer = -slideI * 100;
			viewArea.stop().animate({'marginLeft': iPer +'%'}, timed, function(){
				if( slideI >= viewLen-2 ){
					viewArea.css({'marginLeft': 100 + '%'});	slideI = -1;	}
				//인디케이터 
				indiLi.eq(slideI).addClass('action');
				indiLi.eq(slideI).siblings('li').removeClass('action');
			});
			console.log('!!')
		};
	
		setInterval(function(){	MyProSlide();	}, timed*3);
  // h길이 설정
		viewBox.height(winH);
		// win.resize(function(){
		// 	viewBox.height(winH);
		// })
	// ====================================================
	//conBox
	//글씨 fadein
	var moveFade = $('.fade');
	var i = 0;
	
	var	fadeObject = [];

	for(; i < moveFade.length; i++){
		fadeObject[i] = moveFade.eq(i).offset().top - winH/1.5;
	};
	// console.log(fadeObject);
	
	win.on('scroll',function(){
		var st = win.scrollTop();
		// console.log(st, fadeObject[0])
		for(var j=0; j <= fadeObject.length; j+=1){
			if(st > fadeObject[j]){
				moveFade.eq(j).animate({'opacity':1}, 400)
			}
		}

		})
	
		// ----------------------------------------------
		var infoBox = $('#infoBox');
		var infoPrev = $('.info_prev');
		var infoNext = $('.info_next');
		var infoText = $('.info_text').find('a');

		$.ajax({
			url:"../data/info.json",
		}).done(function(jsonResult){
			var i = 0;
			var myData = jsonResult;
			console.log(myData);
			infoText.text(myData[0].name)
			infoNext.on('click',function(e){
				e.preventDefault();
				for(; i<myData.length; i++){
					infoText.text(myData[i].name)
				}
			});

		})

	// ----------------------------
	
		



})(jQuery);