(function($){


	var headBox = $('#headBox');
	headBox.load('./header.html');
	var footBox = $('#footBox');
	footBox.load('./footer.html');

// -------------------
	var win = $(window);
	var winH = win.height();


	var moveFade = $('.fade');
	var i = 0;
	
	var	fadeObject = [];

	for(; i < moveFade.length; i++){
		fadeObject[i] = moveFade.eq(i).offset().top - winH/1.2;
	};
	// console.log(fadeObject);
	
	win.on('scroll',function(){
		var st = win.scrollTop();
		// console.log(st, fadeObject[0])
		for(var j=0; j <= fadeObject.length; j+=1){
			if(st > fadeObject[j]){
				moveFade.eq(j).animate({'opacity':1}, 700)
			}
		}

		})



})(jQuery);