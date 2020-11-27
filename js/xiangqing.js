// if(!location.search){
// 	alert('你还没有选择商品，返回选择')
// 	location.href='liebiao.html'
// }
// console.log(111)
var data1
var id1=location.search
var id2=id1.split('=')[1]
// console.log(id2)
$.ajax({
	url:'../php/xiangqing.php',
	data:{id:id2},
	success:function(data){
		// console.log(data)
		data1=JSON.parse(data)
		// console.log(data1)
		$('.shou-con').children('ul').children('li:eq(3)').html(data1.goods_name)
		$('.box').children().attr('src',data1.goods_pics)
		$('.boxR').children().attr('src',data1.goods_pics)
		$('.aa-con').children('p').html(data1.goods_name)
		$('.r1').children('p').children('span:eq(0)').html(data1.goods_price)
	}
})

//点击加入购物车事件
$('.r7').children("h4").click(function(){
	// location.href='../html/gwc.html'
	
	
	if(localStorage.getItem('cartlist')){
		var arrs=JSON.parse(localStorage.getItem('cartlist'))
		var t=1
		/* 遍历数组判断当前添加的商品是否和历史商品相同/是否存在 */
		arrs.forEach(function(item,index){
			if(data1.goods_id==item.goods_id){
				item.num=item.num-0+1
				t=0	//t=0表示存在相同商品，并作出了处理
			}
		})
		//判断t是否为1，为1表示没有相同商品这时就需要将当前数据追加
		if(t){
			data1.num=1
			arrs.push(data1)
		}
		localStorage.setItem('cartlist',JSON.stringify(arrs))
	}else{
		/* 此处操作为第一次用加入购物车 */
		var arr1=[]
		data1.num=1
		arr1.push(data1)
		localStorage.setItem('cartlist',JSON.stringify(arr1))
	}
	console.log(JSON.parse(localStorage.getItem('cartlist')))
	alert('加入购物车成功')
})

//点击尺码事件
$('.r4').children('p').click(function(){
	$('p').prop('class','box1').css('background','#fff')
	$(this).prop('class','box1').css('background','pink')
})

//点击立即购买事件
$('.r7').children('h3').click(function(){
	location.href='./gwc.html'
})

//点击购物车时候跳转到购物车页面
$('.search3').click(function(){
	location.href='./gwc.html'
})
