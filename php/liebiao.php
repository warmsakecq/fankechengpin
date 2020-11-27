<?php
header('content-type:text/html;charset=utf-8');
//连接数据库
$link=mysqli_connect('localhost','root','','bbb');
//设置编码
mysqli_set_charset($link,'utf8');
//sql语句
$sql="select * from goods";
//执行sql语句
$result=mysqli_query($link,$sql);
//判断结果集中是否有数据
// if($row=mysqli_fetch_assoc($result)){
// 	echo '1';
// }else{
// 	echo '0';
// }
$arr=[];
while($row=mysqli_fetch_assoc($result)){
	array_push($arr,$row);
}
echo json_encode($arr);
?>