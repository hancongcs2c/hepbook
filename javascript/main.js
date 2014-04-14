$(document).ready(function() {
	
	$('.search-icon').click(function(e){
		$(this).next('input').fadeIn(100);
		$(this).next('input').select();
		$(this).addClass('reverse');
	});
	$('form input').blur(function(){
		$(this).fadeOut(0);
		$(this).prev('a').removeClass('reverse');
	});
	//点击输入框以外地方输入框消失
	$(document).bind('click',function(e){
		var e = event.target.nodeName;		
		if(e.match('INPUT')!='INPUT'&&e.match('A')!='A'){
			$('form input').fadeOut(0);
			$('form a').removeClass('reverse');
		}
	});
	
	//二维码
	$('.thumb.clearfix p').click(function(e){
		$('.code').fadeIn();
	});
	$('.thumb.clearfix li').click(function(e){
		$('.code').fadeIn();
	});
	
	$('.closecode').click(function(e){
		$(this).parent('.code').fadeOut(300);
	});
  })
;
