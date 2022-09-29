// 设置输入提示
var hints = [
    "不超过十个字符",
    "请输入整数",
    "请输入11位电话号码",
    "不可出现@字符",
];
$(".input").each(function (i) {
    $(this).focus(function () {
        if (this.value == hints[i]) {
            $(this).val("");
        }
        $(this).css("color", "white");
        $(this).removeClass("warning");
    });
    $(this).blur(function () {
        if (this.value == "") {
            $(this).val(hints[i]);
            $(this).css("color", "grey");
        }
    });
});

// 设置重置后恢复提示
$("#reset").click(function () {
    $(".input").each(function () {
        $(this).css("color", "grey");
        $(this).removeClass("warning");
    });
});

// 设置在鼠标经过时变色
$(".changeWhen").each(function (i, tr) {
    $(tr).hover(function () {
        $(this).toggleClass("changeColor");
    });
});

// 设置提交检查
$("#submit").click(function () {
    var flag = 1;
    if ($("#name").val().length > 10) {
        $("#name").addClass("warning");
        alert("您的用户名长度超过了十个字符，请修改后提交！");
        flag = 0;
    }
    var content = $("#email").val();
    for (var i = 0; i < content.length; i++) {
        if (content[i] == "@") {
            $("#email").addClass("warning");
            alert("您的邮箱内含有@字符，请修改后提交");
            flag = 0;
            break;
        }
    }
    if ($("#tel").val().length != 11) {
        $("#tel").addClass("warning");
        alert("您输入的电话号码不符合规范，请重新输入");
        flag = 0;
    }
    if (flag) {
        // 创建新行
        var tr = document.createElement("tr");
        $(tr).addClass("changeWhen");
        // 获取选择的邮箱
        // 添加新行
        $(".input").each(function (i) {
            var td = document.createElement("td");
            if (i == 3) {
                $(td).text(
                    $(this).val() + $("#emailName option:selected").text()
                );
            } else {
                $(td).text($(this).val());
            }
            $(tr).append(td);
            $(this).val(hints[i]);
            $(this).css("color", "grey");
        });
        // 添加删除链接
        var td = document.createElement("td");
        var a = document.createElement("a");
        $(a).prop("href", "javascript:;");
        $(a).text("删除");
        $(td).append(a);
        $(tr).append(td);
        $("#tbody").append(tr);
        alert("提交成功！");
    }
});

// 删除设置
$("a").each(function () {
    $(this).click(function () {
        var confirmDelete = confirm("确认删除？");
        var tr = $(this).parent().parent();
        $(tr).remove();
    });
});
