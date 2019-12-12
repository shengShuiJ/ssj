//搜索框联想
$(function () {
    var div = document.getElementsByClassName('input')[0]

    var input = document.getElementsByClassName('text')[0];

    var ul = document.getElementsByClassName('input_ul')[0];

    var flag = true;
    input.addEventListener('compositionstart', function () {
        flag = false;
    })
    input.addEventListener('compositionend', function () {
        flag = true;
    })
    input.oninput = function () {
        setTimeout(function () {
            if (flag) {

                var keyword = input.value; //输入的关键字



                ajax({
                    dataType: 'jsonp',
                    url: 'https://suggest.taobao.com/sug',
                    data: {
                        code: "utf-8",
                        q: keyword,
                        _ksTS: "1563970517892_385",
                        k: 1,
                        area: "c2c",
                        bucketid: 10

                    },
                    success: function (data) {
                        var result = data.result; //是一个数组
                        var str = "";
                        result.forEach(function (value) {
                            str += "<li>" + value[0] + "</li>"
                        })
                        ul.innerHTML = str;
                    }
                })
            }
        }, 0)
    }
    ul.onclick = function (e) { // 事件向上绑定
        // console.log(this);
        var ev = event || e;
        var target = ev.target || ev.srcElement; // 获取事件源
        // console.log(target.innerText);
        // 判断事件源
        // console.log(target.nodeName)

        if (target.nodeName == 'LI') { // 判断li

            //console.log(target.innerText);
            // var text = target.innerText
            input.value = target.innerText

        }
        ul.innerHTML = ""
       
    }

  

})

window.onload = function () {

 
    // 二级导航
    $(function () {
        $('.min_nav_ul ').mouseenter(function () {
            $('.min_nav_ul ul').animate({height:473},500)
            
        })
        $('.min_nav_ul ').mouseleave(function () {
            
            $('.min_nav_ul ul').animate({height:0})
          
        })
    })
    // 全局锚点 到达一定距离显示
    $(function () {
        var h = document.getElementById('header')
        var h1 = h.offsetHeight

        //console.log(h.offsetHeight)
        var b = document.getElementById('banner')
        var b1 = b.offsetHeight

        //console.log(b.offsetHeight)

        var i = document.getElementById('tuijian')
        var i1 = i.offsetHeight
        //console.log(i.offsetHeight)

        var t1 = document.getElementById('temai')
        var t1T = t1.offsetHeight

        //console.log(t1.offsetHeight)

        var t2 = document.getElementById('temai2')
        var t2T = t2.offsetHeight

        //console.log(t2.offsetHeight)

        var num = h1 + b1 + i1 + t1T + t2T
        // var md = document.getElementById('md')
        // console.log(md.offsetHeight)
        //console.log(num)
        window.onscroll = function () {
            // console.log(666)
            if (scroll().top > num) {
                md.style.display = 'block'
                // md.style.top = 50 + 'px'
                // md.style.right = 40 + 'px'
            } else {
                md.style.display = 'none'
            }
        }



    })
    // 锚点跳跃 点击右边锚点连接跳跃到指定位置
    var oList = document.getElementsByClassName('md_ul_li')
    var nz = document.getElementsByClassName('nz')
    md.onclick = function (e) {
        var ev = e || window.event
        var target = ev.target || ev.srcElement
        if (target.tagName == "LI") {
            for (var i = 0; i < oList.length; i++) {


                oList[i].index = i
            }

            document.documentElement.scrollTop = nz[target.index].offsetTop
        }
    }
    // 返回顶部

    var i = document.getElementsByClassName('iconfont icon-shangjiantou')[0]
    var s = document.getElementsByClassName('span')[0]
    var fh = document.getElementById('fh')
    var h = document.getElementById('header')
    i.onmouseenter = function () {
        //console.log(666)
        s.style.display = "block"
    }
    s.onclick = function () {
        document.documentElement.scrollTop = h.offsetTop
    }
    fh.onmouseleave = function () {
        //console.log(666)
        s.style.display = "none"
    }
  


    // 封装获取滚动距离的函数
    function scroll() {
        return {
            left: document.documentElement.scrollLeft || document.body.scrollLeft,
            top: document.documentElement.scrollTop || document.body.scrollTop
        }
    }

}