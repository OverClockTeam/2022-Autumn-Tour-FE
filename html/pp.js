// 创建基础数据
var datas=[
    {
        name:'张三',
        old:'18',
        tel:'13559865878',
        email:'zhangsan@163.com',
    },
    {
        name:'李四',
        old:'18',
        tel:'13756565878',
        email:'lisi@163.com',
    },
    {
        name:'王五',
        old:'19',
        tel:'19725865878',
        email:'wangwu@qq.com',
    },
]
// 创建动态表格
var tbody=document.querySelector('tbody');
for(var i=0;i<datas.length;i++)
{
    var tr=document.createElement('tr');
    tbody.appendChild(tr);
    for(var k in datas[i])
    {
        var td=document.createElement('td');
        td.className='column+k';
        tr.appendChild(td);
        td.innerHTML=datas[i][k];
    }
    var td=document.createElement('td');
    td.innerHTML='<a href="javasript:;" class="del">删除</a>';
    tr.appendChild(td);
}
// 删除特定行

var as=document.getElementsByTagName('a');
for(var i=0;i<as.length;i++)
{
    as[i].onclick=function(){
        tbody.removeChild(this.parentNode.parentNode);
    }
}



var pd1=0,pd2=0,pd3=0,pd4=0;
// 判断姓名
var formuser=document.getElementById("user");
formuser.onfocus=function(){
    if(formuser.value=='英文不超过15汉字不超过5无数字')
    {
        formuser.value='';
    }
}
formuser.onblur=function(){
    // if(formuser.value==''||formuser.value.length>10)
    if(!(this.value.match(/^[a-zA-Z]{1,15}$/)||this.value.match(/^\W{1,5}$/)))
    {
        formuser.value='英文不超过15汉字不超过5无数字';
    }
}
// 判断邮箱
var formpost=document.getElementById("post");
formpost.onfocus=function(){
    if(this.value=='字符+@+.')
    {
        this.value='';
    }
}
formpost.onblur=function(){
    if(!(this.value.match(/^\w+@\w+\.\w+$/)))
    {
        this.value='字符+@+.'

    }
}
// 判断年龄
var formold=document.getElementById("old");
formold.onfocus=function(){
    if(this.value=='请输入一位到三位的数字')
    {
        this.value='';   
    }
}
formold.onblur=function(){
    if(!this.value.match(/\d{1,3}/))
    {
        this.value='请输入一位到三位的数字';
    }

}
// 判断电话号码
var formtel=document.getElementById('tel');
formtel.onfocus=function(){
    if(this.value=="请输入11位数字")
    {
        this.value='';
    }
}
formtel.onblur=function(){
    if(!this.value.match(/\d{11}/))
    {
        this.value="请输入11位数字";
    }
}

// 判断是否按要求输入并提交至表格
var tbody=document.querySelector('tbody');
var formsubmit=document.getElementById('formsubmit');
formsubmit.onclick=function(){
    if(formuser.value=='姓名字段字数不能超过10个'||formpost.value=='字符+@+.'||formold.value=='请输入一位到三位的数字'||formtel.value=="请输入11位数字")
    {
    alert('请全部按要求输入');
    return;
    }
    else
    {
        var tr=document.createElement('tr');
        tbody.appendChild(tr);
        for(var i=0;i<5;i++)
        {
            var td=document.createElement('td');
            tr.appendChild(td);
            td.className='column+i';
        }
        tr.childNodes[0].innerHTML=formuser.value;
        tr.childNodes[1].innerHTML=formold.value;
        tr.childNodes[2].innerHTML=formtel.value;
        tr.childNodes[3].innerHTML=formpost.value;
        tr.childNodes[4].innerHTML='<a href="javasript:;" class="del">删除</a>';
// 添加内容后实现删除特定行
        var as=document.getElementsByTagName('a');
        for(var i=0;i<as.length;i++)
        {
        as[i].onclick=function(){
        tbody.removeChild(this.parentNode.parentNode);
        }
}
        
    } 
}









