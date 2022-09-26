// 设置输入提示
var getName = document.getElementById("name");
console.log(getName);
// 事件获得焦点时，提示消失
getName.onfocus = function () {
    if (getName.value == "不超过十个字符") {
        this.value = "";
    }
    this.style.color = "white";
};
// 事件失去焦点时，判断是否恢复提示
getName.onblur = function () {
    if (getName.value == "") {
        this.value = "不超过十个字符";
        this.style.color = "darkgrey";
    }
};

var email = document.getElementById("email");
console.log("hh");
email.onfocus = function () {
    if (email.value == "不可出现@符号") {
        this.value = "";
    }
    this.style.color = "white";
};
email.onblur = function () {
    if (email.value == "") {
        this.value = "不可出现@符号";
        this.style.color = "darkgrey";
    }
};

// 设置在鼠标经过时变色
var trs = document.getElementsByClassName("changeWhen");
for (var i = 0; i < trs.length; i++) {
    // 鼠标经过时
    trs[i].onmousemove = function () {
        this.classList.add("changeColor");
    };
    // 鼠标移开时
    trs[i].onmouseout = function () {
        this.classList.remove("changeColor");
    };
}

// 设置提交检查
var submit = document.getElementById("submit");
submit.onclick = function () {
    var flag = 1;
    var userName = document.getElementById("name");
    if (userName.value.length > 10) {
        userName.classList.add("warning");
        alert("您的用户名长度超过了十个字符，请修改后提交！");
        flag = 0;
    }
    var email = document.getElementById("email");
    var cnt = email.value;
    for (var i = 0; i < cnt.length; i++) {
        var x = cnt[i];
        if (x == "@") {
            email.classList.add("warning");
            alert("您的邮箱内含有@字符，请修改后提交");
            flag = 0;
            break;
        }
    }
};
