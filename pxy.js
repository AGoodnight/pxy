;(function($){

	// Helps Developers by getting the pointers position relative to a target div
 
	pxy = function(target){

		$('body').append("<div id='pxy'><div id='pxy-x'></div><div id='pxy-y'></div></div>");

		$('#pxy').css({
			'width':'100px',
			'height':'80px',
			'position':'absolute',
			'font-family':'arial',
			'color':'black',
			'pointer-events':'none',
			'margin':'20px'
		});

		$('#pxy-y').css({
			'background-color':'rgba(200,200,200,.8)',
			'border-radius':'30px',
			'position':'relative',
			'padding':'10px 0px 10px 20px'
		});

		$('#pxy-x').css({
			'background-color':'rgba(200,200,200,.8)',
			'border-radius':'30px',
			'position':'relative',
			'padding':'10px 0px 10px 20px'
		});

		$('#pxy-x').empty().append('X: ');
		$('#pxy-y').empty().append('Y: ');

		$(target).mousemove(function(e){

			var offset = $(this).offset();
			var _x = e.clientX - offset.left;
			var _y = e.clientY - offset.top;
			$('#pxy-x').empty().append('X: '+_x+' px');
			$('#pxy-y').empty().append('Y: '+_y+' px');

			
		});

	};

})(jQuery);
