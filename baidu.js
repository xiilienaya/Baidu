//获取元素
var username = document.getElementById("username");
var tel = document.getElementById("tel");
var pwd = document.getElementById("pwd");
var pName = document.getElementById("p-name");
var pPwd = document.getElementById("p-pwd");
var pTel = document.getElementById("p-tel");
var pVcode = document.getElementById("p-Vcode");
var btn = document.getElementById("btn");

//正则表达式
var regName=/^(?!(\d+)$)[a-zA-Z\d\-_]{1,14}$|^(?!(\d+)$)[\u4e00-\u9fa5\d\-_]{1,7}$/;

var regTel=/^1[3|5|7|8]\d{9}$/gi

var regPwd = /^(?![A-Za-z]+$)(?!\d+$)(?![\W_]+$)\S{8,14}$/;
//长度为8-14个字符，字母/数字以及标点符号必须至少包含两种，不允许有中文，空格

username.onchange = function(){
    if(regName.test(username.value)){
        username.style.border="1px solid rgb(219, 219, 219)";
        pName.style.display="none";
    }else{
        username.style.border="1px solid red";
        pName.style.display="block";
    }
}

tel.onchange = function(){
    if(regTel.test(tel.value)){
        tel.style.border="1px solid rgb(219, 219, 219)";
        pTel.style.display="none";
    }else{
        tel.style.border="1px solid red";
        pTel.style.display="block";
    }
}

pwd.onchange = function(){
    if(regPwd.test(pwd.value)){
        pwd.style.border="1px solid rgb(219, 219, 219)";
        pPwd.style.display="none";
    }else{
        pwd.style.border="1px solid red";
        pPwd.style.display="block";
    }
}

var bt = $("#btn");

btn.onclick = function(){
        var time = 10;
        bt.attr("disabled","disabled");
        var timer = setInterval(function(){
            time--;
            btn.value="重新获取验证码"+"("+time+")";  
            if(time<0){
                clearInterval(timer);
                time = 10;
                btn.value="获取验证码";
                bt.removeAttr("disabled");
                pVcode.style.display="block";
            }
        },1000)
}

