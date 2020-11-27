//轮播图
var a=0	//将要显示的图片的下标
var b=0 //现在图片显示的下标
var dsq	//定时器
$(".next").click(fn1)
function fn1(){
		a++
		if(a>4){
			a=0
		}
		//设置将要显示图片的位置
		$('.img').eq(a).css('left','1200px')
		$('.img').eq(a).animate({'left':'0'},500)
		$('.img').eq(b).animate({'left':'-1200px'},500)
		b=a
}
$('.prev').click(function(){
	a--
	if(a<0){
		a=4
	}
	// 设置将来要显示图片的位置
	$('.img').eq(a).css('left','-1200px')
	$('.img').eq(a).animate({'left':'0px'},500)
	$('.img').eq(b).animate({'left':'1200px'},500)
	b=a
})
dsq=setInterval(fn1,2000)
$('.lun1').mouseover(function(){
	clearInterval(dsq)
})
$('.lun1').mouseout(function(){
	dsq=setInterval(fn1,2000)
})
