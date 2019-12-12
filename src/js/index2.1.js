window.onload = function () {
    $(function () {
        var loginBtn = $(".btn");
        loginBtn.click(function () {
            var text = $(".txt").val()
            var password = $(".pw").val()

            if (window.localStorage.getItem(text) != null && window.localStorage.getItem(password) != null) {
                // .html("登陆成功,2秒后跳转回商城")
                // $("#login .tip").css({
                //     "color": "#3e8840"
                // })
                alert("登陆成功，2秒后跳转页面")
                setTimeout(function () {
                    window.location.href = 'index.html';
                }, 2000)
            } else {
                // $("#login .tip").html("用户名或密码错误")
                alert("账号或密码输入错误")
            }
        })

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

    $(function () {
        $('.btn2').click(function () {
            console.log(666)
            $('.c-con2')
                .animate({
                    opacity: 0
                }, 1000)
                .queue(function (next) {
                    $('.c-con4').css('display', 'block');
                    next()
                })

        })
    })
    
}