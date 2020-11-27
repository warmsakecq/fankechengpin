var fenye1=document.querySelector('.fenye')
$.ajax({
	url:'../php/liebiao.php',
	type:'get',
	success:function(data){
		var data1=JSON.parse(data)
		console.log(data1)
		
		var	p1=new Pagination(fenye1,{
			pageInfo:{
			    pagenum:1, //当前显示页
			    pagesize:20,//每页显示多少条
			    totalsize:520, //总条数
			    totalpage:26 //总页数
			},
			textInfo:{
			    first:'first',
			    prev:'prev',
			    list:'',//页码
			    next:'next',
			    last:'last'
			},
			change1:function(num){
				$('.lie1').each(function(index,item){
					//获取到id值
					$(item).attr('data_id',data1[index-0+(num-1)*20].goods_id)
					$(item).children('img').attr('src',data1[index-0+(num-1)*20].goods_pics)
					$(item).children('h3').html(data1[index-0+(num-1)*20].goods_name)
					$(item).children('p').children('span').html(data1[index-0+(num-1)*20].goods_price)
				})
			}
		})
	}
})

// // 点击事件跳转到详情页去
$('.lie1').click(function(){
	var id1=$(this).attr('data_id')
	location.href='./xiangqing.html?id='+id1
})


//点击购物车时候跳转到购物车页面
$('.search3').click(function(){
	location.href='./gwc.html'
})

