var tbody = document.querySelector('tbody');
var as = document.querySelectorAll('a');
// var tag=querySelector('tag');
// console.log(as.length)
for (var i = 0; i < as.length; i++) {
    as[i].onclick = function () {
        //删除
        tbody.removeChild(this.parentNode.parentNode)
    }
}
//表单输入要求，姓名,年龄要求
// var name =document.querySelector('.name');
// var temp = document.getElementsByClassName('name');
// var age = document.getElementsByClassName('age');
 var input = document.querySelectorAll('input');
 var tag = document.querySelector('.tag');
 var icon = document.querySelector('.iconfont')
 var ip = document.querySelector('.tag-p')
var reg1 = /\d/;
var reg2 = /^\d+$/;
// input[0].focus = function(){ 
   
// }
input[0].onblur = function () { 
    //根据表单里的值判断条件
    if(this.value=== '')
    {
     icon.className = 'iconfont icon-shuoming'
    tag.style.color = '#999';
    icon.style.color = 'skyblue';
    tag.style.top = '206px'
    ip.innerHTML = '请输入不含数字的1~10位字段';
    }
    if (reg1.test(this.value)) { 
        // console.log('sdfghshh')
        icon.className = 'iconfont icon-shibaibaocuo'
        tag.style.color = 'red';
        icon.style.color = 'red';
        ip.innerHTML = '含有数字，请重新输入';
        tag.style.top = '206px'
        this.value = ""
    }
    if ((this.value.length > 10)) {
        icon.className = 'iconfont icon-shibaibaocuo'
        tag.style.color = 'red';
        icon.style.color = 'red';
        ip.innerHTML = '字符越界，请重新输入';
        tag.style.top = '206px'
        this.value = ""
    }
    else { 
        icon.className = 'iconfont icon-duigouzhong'
        tag.style.color = 'green';
        icon.style.color = 'green';
        tag.style.top = '206px'
        ip.innerHTML = '恭喜你输入正确';
    }
}
//年龄格式
input[1].onblur = function () {
    if (isNaN(this.value))
       {
        icon.className = 'iconfont icon-shibaibaocuo'
        tag.style.color = 'red';
        icon.style.color = 'red';
        ip.innerHTML = '格式错误，请只输入数字';
        tag.style.top = '240px'
        this.value = ""
       }
}

//邮箱格式判断
let emailReg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/; //注意中间不能有空格
// let email = document.getElementsByClassName('email');
input[3].onblur = function () {
    if (emailReg.test(this.value)) { alert('恭喜输入对了') }
    else {
        icon.className = 'iconfont icon-shibaibaocuo'
        tag.style.color = 'red';
        icon.style.color = 'red';
        ip.innerHTML = '邮箱格式错误，请重新输入';
        tag.style.top = '320px'
        this.value = ""
    }
}
