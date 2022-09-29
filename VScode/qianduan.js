// 显示/隐藏输入框的内容
// 姓名输入框
var xingming = document.querySelector('#name');
xingming.onfocus = function () {
    if (this.value === '请输入您的名字（不多于15个字母或不多于5个汉字）') {
        this.value = '';
    }
    this.style.color = '#333'
}
xingming.onblur = function () {
    if (!(this.value.match(/^[a-zA-Z]{1,15}$/) || this.value.match(/^\W{1,5}$/))) {
        this.value = '请输入您的名字（不多于15个字母或不多于5个汉字）';
    }
    this.style.color = '#999'
}

// 年龄输入框
var old = document.querySelector('#old');
old.onfocus = function () {
    if (this.value === '请输入您的年龄（要求1-3位数）') {
        this.value = '';
    }
    this.style.color = '#333'
}
old.onblur = function () {
    // 判断输入的内容
    if (!this.value.match(/^\d{1,3}$/)) {
        this.value = '请输入您的年龄（要求1-3位数）';
    }
    this.style.color = '#999'
}

// 电话输入框
var phone = document.querySelector('#phone');
phone.onfocus = function () {
    if (this.value === '请输入您的电话（要求输入11位数字）') {
        this.value = '';
    }
    this.style.color = '#333'
}
phone.onblur = function () {
    // 判断输入的内容
    if (!this.value.match(/^\d{11}$/)) {
        this.value = '请输入您的电话（要求输入11位数字）';
    }
    this.style.color = '#999'
}

// 邮箱输入框
var email = document.querySelector('#e-mail');
email.onfocus = function () {
    if (this.value === '请输入您的邮箱（要求只含有一个@）') {
        this.value = '';
    }
    this.style.color = '#333'
}
email.onblur = function () {
    // 判断输入的内容
    if (!(this.value.match(/^\w+@\w+\.\w+$/))) {
        this.value = '请输入您的邮箱（要求只含有一个@）';
    }
    this.style.color = '#999'
}


// 添加表格新元素
var btn = document.querySelector('.button');
var tbody = document.querySelector('tbody');
btn.onclick = function () {
    if (xingming.value == '请输入您的名字（不多于15个字母或不多于5个汉字）' || old.value == '请输入您的年龄（要求1-3位数）' || phone.value == '请输入您的电话（要求输入11位数字)' || email.value == '请输入您的邮箱（要求只含有一个@）') {
        alert('请按要求全部输入');
    }
    else {
        var tr = document.createElement('tr');
        tbody.appendChild(tr);
        for (var i = 1; i <= 4; i++) {
            var td = document.createElement('td');
            switch (i) {
                case 1:
                    td.innerHTML = xingming.value;
                    break;
                case 2:
                    td.innerHTML = old.value;
                    break;
                case 3:
                    td.innerHTML = phone.value;
                    break;
                case 4:
                    td.innerHTML = email.value;
                    break;
            }
            tr.appendChild(td);
        }
        // 添加删除的选项
        var td = document.createElement('td');
        td.innerHTML = '<a href="javascript:;">删除 </a>';
        tr.appendChild(td);
        // 删除添加行的操作
        var as = document.querySelectorAll('a');
        for (var i = 0; i < as.length; i++) {
            as[i].onclick = function () {
                tbody.removeChild(this.parentNode.parentNode);
            }
        }
    }
    xingming.value = '请输入您的名字（不多于15个字母或不多于5个汉字）';
    old.value = '请输入您的年龄（要求1-3位数）';
    phone.value = '请输入您的电话（要求输入11位数字）';
    email.value = '请输入您的邮箱（要求只含有一个@）';
}

// 删除原有行的操作
var as = document.querySelectorAll('a');
for (var i = 0; i < as.length; i++) {
    as[i].onclick = function () {
        tbody.removeChild(this.parentNode.parentNode);
    }
}