$(document).ready(function(){
	var telNo = getUrlParam('telNo');
	$("#userName").val(telNo);
	var backUrl = getUrlParam('backUrl');


	$(".login_btn").on('click',function(){
		var phone = $("#userName").val();
		var pwd = $("#passWord").val();
		loginGet(phone,pwd,backUrl);
	})
});

//登录接口
function loginGet(phone,pwd,backUrl){
	var xmlhttp;
	var url = "http://ateam.ticp.io:9107/36?phone="+phone+"&pwd="+pwd;
	if (window.XMLHttpRequest){
	  	xmlhttp=new XMLHttpRequest();
	}
	else{
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
	  if (xmlhttp.readyState==4 && xmlhttp.status==200){
	  		var obj = xmlhttp.responseText;
	  		if (obj=="ok") {
	  			// alert("授权成功！")
	  			// window.location.href="http://localhost:8080/Scratch/register/register.html";
	  			window.location.href=backUrl;
	  		}else{
	  			alert("授权失败！");
	  			// window.location.href="http://localhost:8080/Scratch/register/register.html";
	  			window.location.href=backUrl;
	  		}    
	    }
	}
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}
//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}