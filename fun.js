// 判断用户输入信息是否正确
function isTrue(){

}
// 在表格中删除一行
function del(obj){
    var node=obj.parentNode.parentNode.parentNode;
    var node1=obj.parentNode.parentNode;
    node.removeChild(node1);
}
// 在表格中添加一行信息
function addRow(){
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