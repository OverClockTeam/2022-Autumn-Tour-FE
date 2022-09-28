// 设置输入提示
var hints = [
    "不超过十个字符",
    "请输入整数",
    "请输入11位电话号码",
    "不可出现@字符",
];
var inputs = document.getElementsByClassName("input");
for (var i = 0; i < inputs.length; i++) {
    inputs[i].onfocus = function () {
        var index = this.getAttribute("index");
        if (this.value == hints[Number(index)]) {
            this.value = "";
        }
        this.style.color = "white";
        console.log(index);
        console.log(hints[index]);
        this.classList.remove("warning");
    };
    // 事件失去焦点时，判断是否恢复提示
    inputs[i].onblur = function () {
        var index = this.getAttribute("index");
        if (this.value == "") {
            this.value = hints[Number(index)];
            this.style.color = "darkgrey";
        }
    };
}

var reset = document.getElementById("reset");
reset.onclick = function () {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].style.color = "darkgrey";
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
    var phoneNumber = document.getElementById("tel");
    var cnt = phoneNumber.value;
    if (cnt.length != 11) {
        phoneNumber.classList.add("warning");
        alert("您输入的电话号码不符合规范，请重新输入");
        flag = 0;
    }
    // 符合要求提交：
    if (flag) {
        // 创建新行
        var tr = document.createElement("tr");
        tr.classList.add("changeWhen");
        var inputs = document.getElementsByClassName("input");
        // 获取选择的邮箱
        var select = document.getElementById("emailName");
        var index = select.selectedIndex;
        var e = select.options[index].innerText;
        // 添加新行
        for (var i = 0; i < inputs.length; i++) {
            var td = document.createElement("td");
            td.innerText = inputs[i].value;
            if (i == 3) {
                td.innerText += e;
            }
            tr.appendChild(td);
        }
        // 添加删除链接
        var td = document.createElement("td");
        var a = document.createElement("a");
        a.href = "javascript:;";
        a.innerText = "删除";
        td.appendChild(a);
        tr.appendChild(td);
        var tbody = document.getElementById("tbody");
        tbody.appendChild(tr);
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].value = hints[i];
            inputs[i].style.color = "darkgrey";
        }
    }
};

// 删除设置
var tbody = document.getElementById("tbody");
var del = tbody.querySelectorAll("a");
for (var i = 0; i < del.length; i++) {
    del[i].onclick = function () {
        var confirmDelete = confirm("确认删除？");
        var tr = this.parentNode.parentNode;
        tbody.removeChild(tr);
    };
}
