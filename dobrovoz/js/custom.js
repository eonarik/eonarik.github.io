$(document).ready(function(){

	/* top slider
	**********************************/
	var _topSl = $('.top-slider');
	_topSl.css({'height':parseInt(_topSl.find('.item').height())}).find('.item').hide().css({'position':'absolute','top':'0','left':'0','opacity':'0'});
	_topSl.append('<div class="pagin"></div>');
    for(var i=0;i<_topSl.find('.item').length;i++){
        _topSl.find('.pagin').append('<label></label>'); 
    }
    _topSl.on('click','.pagin label',function(){
    	if($(this).hasClass('active'))return;
        _topSl.css({'height':parseInt(_topSl.find('.item').height())});
		var ind = $(this).index(),
			imgscont = $(this).parent().parent().find('.images'),
			img = imgscont.find('.active')||imgscont.find('.item').eq(0);
		$(this).parent().find('.active').removeClass('active');
		$(this).addClass('active');
		img.animate({'opacity':'0'},300,function(){
			img.hide().removeClass('active');
		});
		imgscont.find('.item').eq(ind).show().animate({'opacity':'1'},300).addClass('active');
	});
	_topSl.find('.pagin label').eq(0).click();
	var timer = null,
    	elWidth = _topSl.width(); 
	timer = setInterval(
	   function(){
	      if( _topSl.width() != elWidth ) {
	        elWidth = _topSl.width();
    		_topSl.css({'height':parseInt(_topSl.find('.item').height())});
	      };
	   },250 
	);
})

$(function(){

	/* 
	*******************************************/
	var _md = document.body.clientWidth>=992;
	if(!_md) $('body').removeClass('inner-page');


	/* Hyphenate
	*******************************************/
    $('p').hyphenate();
    
	/* input-num
	**********************************/
	$('.count-inc input').keyup(function(){
	    var val = parseInt($(this).val());
	    val = !val?0:val;
	    if(val<$(this).data('min'))val = $(this).data('min');
	    if(val>$(this).data('max'))val = $(this).data('max');
	    $(this).val(val);
	});
    $('.count-inc i').click(function(e){
        e.preventDefault();
        var inp = $(this).parent().find('input');
        if($(this).hasClass('plus')){
            inp.val(parseInt(inp.val()) + 1);
            if(inp.val()>inp.data('max'))inp.val(inp.data('max'));
        }
        if($(this).hasClass('minus')){
            inp.val(parseInt(inp.val()) - 1);
            if(inp.val()<inp.data('min'))inp.val(inp.data('min'));
        }
        return false;
    });
    
	/* in_cart
	**********************************/
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}
	
	$('.in_cart').click(function(e){
		e.preventDefault();
		var t = $($(this).data('target')),
			id = 'i' + getRandomInt(100,999),
			c = '<div id="' + id + '" class="clone"></div>',
			top = t.offset().top,
			left = t.offset().left,
			bg = t.css('background-image');
		if(bg=='none') bg = 'url('+ t.find('img').attr('src') +')';
		$('body').prepend(c);
		c = $('#' + id).css({'top':top,'left':left,'background-image':bg});
		c.animate(
			{'top':$('#cart').offset().top,'left':$('#cart').offset().left,'width':20,'height':20}
			,500
			,'swing'
			,function(){ 
				c.remove(); 
			}
		)
		return false;
	})

	/* scrollbars
	*******************************************/
	$(".content_5").mCustomScrollbar({
		theme:"dark-thin"
	});

	/* product-slider
	*******************************************/
	$('.product-head .images .thumbs li').click(function(){
		$('.product-head .zoom').attr('href',$(this).data('large'));
		var match = $(this).css('background-image').match(/url\(?(.+)\)/i)[1].replace(/\"/g,'');
		$('.product-head .main img').attr('src',match);
	});


	/* basket items remove
	*******************************************/
	$('.basket-table .remove a').click(function(e){
		e.preventDefault;
		var tr = $('[data-id="'+ $(this).data('target') +'"]');
		tr.animate(
			{'opacity':0}
			,500
			,function(){ tr.remove(); }
		);
		return false;
	})
})