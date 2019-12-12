window.onload = function () {
    $(function () {
        var registerBtn = $(".btn5");
        registerBtn.click(function () {
            var text = $(".txt2").val()
            var password = $(".pw2").val()
            if (window.localStorage.getItem(text) != null) {
                // $("#register .tip").html("用户名已存在")
                alert("用户名已存在")
                return;
            } else if (text == "" || password == "") {
                alert("用户名或密码不能为空")
                // $("#register .tip").html("用户名或密码不能为空")
            } else {

                window.localStorage.setItem(text, password)
                alert("注册成功,2,秒后跳转页面")
                setTimeout(function () {
                    window.location.href = 'index.html';
                }, 2000)
                // $("#register .tip").html("注册成功")
                // $("#register .tip").css({
                //     "color": "#3e8840"
                // })
            }
        })
    })
}