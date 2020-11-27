$('.ul1>li').hover(function(){
	$(this).children('ol').finish()
	$(this).children('ol').slideDown(500)
},function(){
	$(this).children('ol').finish()
	$(this).children('ol').slideUp(500)
})