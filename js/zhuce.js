// var frm=document.querySelector('form')
var shouji1=document.querySelector('.shouji')
var pass1=document.querySelector('.pass')
var pass2=document.querySelector('.zaici')
var span1=document.querySelectorAll('form span')
var check1=document.querySelector('.check1')
var btn1=document.querySelector('.btn')

//手机号
s1=false
shouji1.onblur=function(){
	//获取当前输入框的内容
	var str1=shouji1.value
	var reg=/^\d{11}$/
	//判断是否符合条件
	if(reg.test(str1)){
		span1[1].innerHTML='手机号正确'
		s1=true
	}else{
		span1[1].innerHTML='手机号有误'
		s1=false
		//让当前输入框重新获得焦点
		this.focus()
	}
}

//密码
p1=false
pass1.onblur=function(){
	var str1=pass1.value
	var reg=/^\d{4,10}$/
	//判断是否符合条件
	if(reg.test(str1)){
		span1[3].innerHTML='密码正确'
		p1=true
	}else{
		span1[3].innerHTML='密码输入有误'
		p1=false
		this.focus()
	}
}

// 再次输入密码
p2=false
pass2.onblur=function(){
	var str1=pass2.value
	if(pass2.value==pass1.value){
		span1[4].innerHTML='密码正确'
		p2=true
	}else{
		span1[4].innerHTML='密码错误'
		p2=false
		this.focus()
	}
}


check1.onclick=function(){
	console.log(111)
	if(this.checked){
		btn1.style.backgroundColor='#B52024'
		btn1.disabled=false
		
	}else{
		btn1.style.backgroundColor='#9A9A9A'	
	}
}

//提交
// frm.onsubmit=function(){
// 	//判断是否符合条件
// 	if(s1 && p1 && p2){
// 		return true
// 	}else{
// 		shouji1.onblur()
// 		pass1.onblur()
// 		pass2.onblur()
// 		return false
// 	}
// }
$('.btn').click(function(){
	var shouji1=$('.shouji').val()
	var pass1=$('.pass').val()
	var zaici1=$('.zaici').val()
	if(s1 && p1 && p2){
		$.ajax({
			url:'../php/zhuce.php',
			type:'get',
			data:{shouji:shouji1,pass:pass1},
			success:function(data){
				console.log(data)
				if(data==1){
					// 账号存在处理
					alert("账号已存在，请重新输入")
				}else{
					//账号不存在 注册一个账号 并写入数据库
					//写入成功，表示注册成功然后转换到登入页面
					alert("账号注册成功，请重新登录")
					location.href='./login.html'
				}
			}
		})
	}
})
