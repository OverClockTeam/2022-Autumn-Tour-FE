// 输出提示信息，type为检测类型，isTr为检测结果
function hint(type,isTr){
    if (type=="NAME") {
        var sp=document.getElementById("nameHint");
        sp.style.fontSize="12px";
        switch(isTr){
            case 0:
                sp.innerHTML="英文名最长15个字符,中文名最长5个汉字";
                sp.style.color="grey"
                break;
            case 1:
                sp.innerHTML="格式正确";
                sp.style.color="green";
                break;
            case -1:
                sp.innerHTML="格式错误";
                sp.style.color="red";
                break;
            default:
        }
    }
    else{
        var sp=document.getElementById("emailHint");
        sp.style.fontSize="12px";
        switch(isTr){
            case 0:
                sp.innerHTML="请输入有效的邮箱地址";
                sp.style.color="grey"
                break;
            case 1:
                sp.innerHTML="格式正确";
                sp.style.color="green";
                break;
            case -1:
                sp.innerHTML="格式错误";
                sp.style.color="red";
                break;
            default:
        }
    }
}
// 判断输入邮箱格式是否正确,正确返回1，错误返回-1，空值返回0
function checkEmail(){
    var em=document.getElementById("email").value;
    if (em.length==0) {
        hint("EMAIL",0);
        return 0;
    }
    if(em.match("^[a-zA-Z0-9]+@[a-zA-Z0-9]+$")){
        hint("EMAIL",1);
        return 1;
    }
    hint("EMAIL",-1)
    return -1;
}
//判断输入名字格式是否正确，正确返回1，错误返回-1，空值返回0
function checkName(){
    var na=document.getElementById("name").value;
    if(na.length==0){
        hint("NAME",0);
        return 0;
    }
    if (na.match("^[a-zA-Z]{1,15}$")||na.match("^[\u4E00-\u9FA5]{1,5}$")) {
        hint("NAME",1);
        return 1;
    }
    hint("NAME",-1)
    return 1;
}
function clearHint(type){
    if(type=="NAME"){
        document.getElementById("nameHint").innerHTML="";
    }
    else{
        document.getElementById("emailHint").innerHTML="";
    }
}
// 判断用户输入信息是否正确,除姓名与邮箱外
function isTrue(){
    // 判断电话长度是否正确
    var ph=document.getElementById("phoneNum").value;
    var b=0;
    if(ph.length==7||ph.length==8||ph.length==11){
        b=1;
    }
    if(b==0){
        return false;
    }
    if(checkEmail()!=1){
        return false;
    }
    if(checkName()!=1){
        return false;
    }
    if(document.getElementById("age").value.length==0||document.getElementById("age").value=="0"){
        return false;
    }
    return true;
}
// 在表格中删除一行
function del(obj){
    var node=obj.parentNode.parentNode.parentNode;
    var node1=obj.parentNode.parentNode;
    node.removeChild(node1);
}
// 在表格中添加一行信息
function addRow(){
    // 检测输入是否有误
    if(!isTrue()){
        alert("输入信息为空或格式错误，请检查后重新输入！");
        return ;
    }
    // 获取输入信息
    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var phoneNum=document.getElementById("phoneNum").value;
    var email=document.getElementById("email").value;
    // 在表格末尾创建一行
    var obj=document.getElementsByClassName("tab")[0].insertRow(-1);
    // 在新建行创建各单元格，并录入信息
    obj.insertCell(0).innerHTML=name;
    obj.insertCell(1).innerHTML=age;
    obj.insertCell(2).innerHTML=phoneNum;
    obj.insertCell(3).innerHTML=email;
    obj.insertCell(4).innerHTML="<a href='javascript:void(0);' class='a'>删除</a>";
    // 为a标签添加onclick事件   注：getElementByClassName()返回的是节点列表
    var nodeList=document.getElementsByClassName("a");
    var ac=nodeList[nodeList.length-1];
    ac.addEventListener("click",function(){del(this)});
}
// 为初始存在的提交按钮和删除添加onclick事件
document.getElementById("commit").addEventListener("click",addRow);
var aList=document.getElementsByClassName("a");
for(i=0;i<aList.length;i++){
    aList[i].addEventListener("click",function(){del(this)});
}
// 为输入框添加onfocus,oninput,onblur事件
document.getElementById("email").addEventListener("focus",checkEmail);
document.getElementById("email").addEventListener("input",checkEmail);
document.getElementById("email").addEventListener("blur",function(){clearHint("EMAIL")});
document.getElementById("name").addEventListener("focus",checkName);
document.getElementById("name").addEventListener("input",checkName);
document.getElementById("name").addEventListener("blur",function(){clearHint("NAME")});