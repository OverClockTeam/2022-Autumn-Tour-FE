
    var tbody = document.querySelector('tbody');
    var as=document.querySelectorAll('a');
    // console.log(as.length)
    for (var i=0;i<as.length;i++)
{
    as[i].onclick =function(){ 
        //删除
        tbody.removeChild(this.parentNode.parentNode)
    }
}

//表单输入要求，姓名,年龄要求
// var name =document.querySelector('.name');
var temp= document.getElementsByClassName('name');
var age = document.getElementsByClassName('age');
var reg1 = /\d/ ;
// var reg2 = / /
temp[0].onblur =function() {
    //debugger
    //根据表单里的值判断条件
    // alert(this.value);
    if(reg1.test(this.value))  
    { alert("含有数字-格式错误") 
     this.value=""
    }
    if((this.value.length>10))
    {   alert("请输入10个字符以内哦~")
        this.value=""
    }
}
//年龄格式
age[0].onblur = function(){
    if(  /^\d+$/.test(this.age) ) 
    alert('格式错误！')
}


//邮箱格式判断
let emailReg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/; //注意中间不能有空格
    let email = document.getElementsByClassName('email');
    email[0].onblur = function(){ 
        if(emailReg.test(this.value)) 
        {alert('恭喜输入对了')} 
        else {
            alert("邮箱格式错误");
        }
    }
    

