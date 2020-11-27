var active=document.querySelector(".active")
var aa0=document.querySelector(".aa0")
var b1=document.querySelector(".b")
var d1=document.querySelector(".d")
b1.onclick=function(){
	active.style.display="block"
	aa0.style.display="none"
	b1.style.background="#B42025"
	d1.style.background="#fff"
	b1.style.color='#fff'
	d1.style.color='#333'
}
d1.onclick=function(){
	active.style.display="none"
	aa0.style.display="block"
	d1.style.background="#B42025"
	b1.style.background="#fff"
	d1.style.color='#fff'
	b1.style.color='#333'
}

$('.btn').click(function(){
	var phone1=$('.user').val()
	var pass1=$('.pass').val()
	$.ajax({
		url:'../php/login.php',
		type:'get',
		data:{phone:phone1,pass:pass1},
		success:function(data){
			console.log(data)
			//判断是否登入成功
			// if(data==1){
			// 	location.href='./homepage.html'
			// }
			if(data==1){
				//保存登录账号
				setCookie('login',phone1,1000)
				location.href='./homepage.html'
			}else{
				alert('账号或者密码错误')
			}
		},
		error:function(err){
			console.log(err)
		}
	})			
})