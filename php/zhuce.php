<?php
header('content-type:text/html;charset=utf-8');
$s=$_GET['shouji'];
$p=$_GET['pass'];
//连接数据库
$link=mysqli_connect("localhost","root","","bbb");
//设置编码
mysqli_set_charset($link,'utf8');
//sql语句
$sql="select * from user where phone='$s'";	//判断数据表是否已经存在
$sql2="insert into user (phone,pass) values('$s','$p')";
// 执行sql语句
$result=mysqli_query($link,$sql);
//判断结果中时是否有数据
if($row=mysqli_fetch_assoc($result)){
	echo '1';
}else{
	mysqli_query($link,$sql2);
	echo '0';
}
?>