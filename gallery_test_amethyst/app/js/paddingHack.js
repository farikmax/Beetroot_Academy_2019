// PADDING-HUCK-JS START
;function paddingHack(items){

	function setPadding(){
		$(items).each(function() {
			const img = $(this).find('img');
			if(!img[0]) return;
			const gridWidth = $(this).parent().width();
			$(this).css({
				position: 'relative',
				width: '100%',
				paddingTop: `${Math.floor(parseFloat(img[0].naturalHeight / gridWidth * 100))}%`
			});
			$(img).css({
				'position': 'absolute',
				'top': '0',
				'right': '0',
				'bottom': '0',
				'left': '0',
				'width': '100%',
				'height': '100%',
				'object-fit': 'cover'
			});
		});
	}

	return {
		init: setPadding
	}
}

const imgWrapper = paddingHack('.imgWrapper');

imgWrapper.init();
// PADDING-HUCK-JS END