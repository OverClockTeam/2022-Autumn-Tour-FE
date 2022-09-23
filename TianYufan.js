var ipt1=document.querySelector('#pt1');
var ipt2=document.querySelector('#pt2');
var ipt3=document.querySelector('#pt3');
var ipt4=document.querySelector('#pt4');
var bt1=document.querySelector('#btn');
var shan1=document.getElementById('shan1');
var shan2=document.getElementById('shan2');
var shan3=document.getElementById('shan3');
var tr=document.createElement('tr');
var tbody=document.getElementById('tbd');
var reg = /^[\u4e00-\u9fa5]{0,10}$/;
var len=ipt1.length;
var reg1=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
// 判断输入
bt1.onclick=function(){
    if(ipt1.value==''||ipt2.value==''||ipt3.value==''||ipt4.value=='')
    {
        alert('姓名，年龄，邮箱均不能为空');
        return;
    }
   
    else if(len>10||!reg.test(ipt1.value))
    {
        alert("请输入个数不大于10的中文");
    }
    else if(!reg1.test(ipt4.value))
    {
        alert("请输入正确的邮箱格式");
    }
    else {tr1=gettd(ipt1.value,ipt2.value,ipt3.value,ipt4.value);
    ipt1.value='';
    ipt2.value='';
    ipt3.value='';
    ipt4.value='';
    }


}
// 创建和删除新的表格行
function gettd(name,age,tel,you){
    var tr1=document.createElement('tr');
    var td1=document.createElement('td');
    var td2=document.createElement('td');
    var td3=document.createElement('td');
    var td4=document.createElement('td');
    var td5=document.createElement('td');
    var shan=document.createElement('a');
    td1.innerHTML=name;
    td2.innerHTML=age;
    td3.innerHTML=tel;
    td4.innerHTML=you;
    shan.innerHTML="删除";
    shan.setAttribute("href","javascript:void(0)")
    shan.onclick=function()
    {
        shan.parentNode.parentNode.parentNode.removeChild(shan.parentNode.parentNode)
    }
    

    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr1.appendChild(td3);
    tr1.appendChild(td4);
    tr1.appendChild(td5);
    td5.appendChild(shan);
    tbody.appendChild(tr1);
    return tr1;
}
// 删除已有表格行
shan1.onclick=function()
    {
        shan1.parentNode.parentNode.removeChild(shan1.parentNode)
    }
    shan2.onclick=function()
    {
        shan2.parentNode.parentNode.removeChild(shan2.parentNode)
    }
    shan3.onclick=function()
    {
        shan3.parentNode.parentNode.removeChild(shan3.parentNode)
    }
// var a = document.getElementsByTagName('a');
// for( var l=a.length-1;l>=0;l--)
// {

//     a[l].parentNode.parentNode.parentNode.removeChild(a[l].parentNode.parentNode)

// }


