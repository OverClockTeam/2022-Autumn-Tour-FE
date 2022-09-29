//写一个求@个数的函数
function numofat(str){
    var result=0;
    var index = str.indexOf("@");
    while(index !=-1){
    index = str.indexOf("@",index+1);
    result++;
}
return result;
}
var str_0;
var str_1;
var str_2;
var str_3;
    //提示姓名字数不超10
var inputs = document.querySelectorAll("input");
console.log(inputs);
inputs[0].onblur = function(){
    str_0 = inputs[0].value;
    if(str_0.length > 10){
        alert("姓名字数不能超过10,请重新输入！");
        inputs[0].value = "";
}
}
//提示邮箱格式

inputs[3].onblur = function (){
str_3 = inputs[3].value;
var num = numofat(str_3) ;
    if(!num){
        alert("请输入带@的邮箱地址，请重新输入！");
        inputs[3].value = "";
    }   else{
        if(num==1) ;
        else{
            alert("邮箱地址不能出现多个@，请重新输入！");
            inputs[3].value = "";
        }
    }
    }
    


//设年龄要求为数字，电话要求为11位数
var btn = document.querySelector("button");
btn.onclick = function(){
    str_0 = inputs[0].value;
    str_1 = inputs[1].value;
    str_2 = inputs[2].value;
    str_3 = inputs[3].value;
    if(str_0.length <= 10 && str_1-0 &&str_2.length == 11 && numofat(str_3)==1){
        //若条件都满足则添加用户信息
        var table = document.querySelector("table");
        var tr = document.createElement("tr");
        table.appendChild(tr);
        for(i=0;i < inputs.length;i++){
            var td = document.createElement("td");
            tr.appendChild(td);
            tr.children[i].innerHTML= inputs[i].value;
        }
        var td = document.createElement("td");
        tr.appendChild(td);
        td.innerHTML = "<a href = 'javascript:;'>删除</a>";
    }
    else{
        alert("输入信息格式错误！");
    }
    for(i = 0;i < inputs.length ; i++){
        inputs[i].value = "";
    }
        //删除节点
    var a = document.querySelectorAll("a");
    for(j=0;j < a.length;j++){
        a[j].onclick = function (){
            table.removeChild(this.parentNode.parentNode);
        }
    }
}