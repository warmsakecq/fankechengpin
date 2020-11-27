// var name1=getCookie('login')
// if(!name1){
// 	alert('当前还没有登入')
// 	location.href='./login.html'
// }
//获取到整个父元素
var gou1=document.querySelector('.gou1')
//获取到每个商品
var tr1=document.querySelector('tbody').children
//获取到全选框
var quanxuan1=document.querySelector('[name="quanxuan"]')
gou1.onclick=function(e){
	var e=e || window.event
	var target=e.target || e.srcElement
	//加事件
	if(target.innerHTML=='-'){
		jian(target)
	}
	//减事件
	if(target.innerHTML=='+'){
		jia(target)
	}
	//全选
	if(target.name=='quanxuan'){
		quanxuan(target)
	}
	//选
	if(target.name=='xuan'){
		xuan(target)
	}
	if(target.innerHTML=='删除'){
		target.parentNode.remove()
		cartarr.forEach(function(item,index1){
			var ind1=$(target).parents('tr').attr('index')
			if(ind1==item.goods_id){
				cartarr.splice(index1,1)
			}
		})
		localStorage.setItem('cartlist',JSON.stringify(cartarr))
		zongji()
		jianshu()
	}
}
console.log(JSON.parse(localStorage.getItem('cartlist')))
//减按钮
function jian(btn){
	var text=btn.nextElementSibling
	var value1=parseInt(text.value)
	value1--
	if(value1<=1){
		value1=1
	}
	text.value=value1
	//获取到单价
	var danjia=parseFloat(btn.parentNode.previousElementSibling.lastElementChild.innerHTML)
	//获取到小计的span标签
	var xiaoji=btn.parentNode.nextElementSibling.lastElementChild
	xiaoji.innerHTML=(danjia*value1).toFixed(2)
	zongji()
	jianshu()
	
}

//加按钮
function jia(btn){
	var text=btn.previousElementSibling
	var value1=parseInt(text.value)
	value1++
	text.value=value1
	//获取到单价
	var danjia=parseFloat(btn.parentNode.previousElementSibling.lastElementChild.innerHTML)
	//获取到小计的span标签
	var xiaoji=btn.parentNode.nextElementSibling.lastElementChild
	xiaoji.innerHTML=(danjia*value1).toFixed(2)
	zongji()
	jianshu()
	
}

//全选按钮
function quanxuan(btn){
	if(btn.checked){
		//遍历所有的商品，找到每一个商品的单选框
		for(var i=0;i<tr1.length;i++){
			tr1[i].children[0].firstElementChild.checked='checked'
		}
	}else{
		for(var i=0;i<tr1.length;i++){
			tr1[i].children[0].firstElementChild.checked=false
		}
	}
	zongji()
	jianshu()
}

//选按钮
function xuan(btn){
	//判断全选框是否选中的条件
	var a=true
	//遍历所有的单选框是否都选中
	for(var i=0;i<tr1.length;i++){
		if(!tr1[i].children[0].children[0].checked){
			a=false
		}
	}
	//判断全部单选框选中，全选框就选中
	if(a){
		quanxuan1.checked='checked'
	}else{
		quanxuan1.checked=false
	}
	zongji()
	jianshu()
}

//全删
function quanshan(btn){
	//遍历出所有的商品
	for(var i=tr1.length-1;i>=0;i--){
		//判断选中的商品
		if(tr1[i].children[0].children[0].checked){
			tr1[i].remove()
		}
	}
	zongji()
	jianshu()
	
}
//全删
$('.zong button').click(quanshan)


//总计
zongji()
function zongji(){
	var sum=0
	for(var i=0;i<tr1.length;i++){
		if($('[name="xuan"]')[i].checked){
			sum+=parseFloat(tr1[i].children[5].lastElementChild.innerHTML)
		}
		// sum+=parseFloat(tr1[i].children[5].lastElementChild.innerHTML)
	}
	// console.log(sum)
	$('.zong h2 span').html(sum.toFixed(2))
}

var cartarr=[]
function jiazai(){
	cartarr=JSON.parse(localStorage.getItem('cartlist'))
	if(!cartarr){
		alert('当前还未添加任何商品，前往购买')
		location.href='liebiao.html'
		console.log(cartarr)
	}else{
		var str=''
		cartarr.forEach(function(item,index){
			str+=`
				<tr index='${item.goods_id}'>
					<td><input type="checkbox" name="xuan" /></td>
					<td><img src="${item.goods_pics}" width='42' height='42'><span>${item.goods_name}</span></td>
					<td>S</td>
					<td>￥<span>${item.goods_price}</span></td>
					<td>
						<button>-</button>
						<input type="text" name="" value="${item.num}" size="1" />
						<button>+</button>
					</td>
					<td>￥<span>${item.goods_price*item.num}</span></td>
					<td>删除</td>
				</tr>
			`
			
		})
		$('tbody').html(str)
	}
}
jiazai()

//获取到商品的件数

function jianshu(){
	var num1=0
	for(var i=0;i<tr1.length;i++){
		if(tr1[i].children[0].children[0].checked){
			var str=tr1[i].children[4].children[1].value
			num1=str-0+num1
		}
	}
	$('.zong p span').html(num1)
}
jianshu()
