"use strict";$(function(){document.getElementsByClassName("input")[0];var o=document.getElementsByClassName("text")[0],l=document.getElementsByClassName("input_ul")[0],n=!0;o.addEventListener("compositionstart",function(){n=!1}),o.addEventListener("compositionend",function(){n=!0}),o.oninput=function(){setTimeout(function(){if(n){var e=o.value;ajax({dataType:"jsonp",url:"https://suggest.taobao.com/sug",data:{code:"utf-8",q:e,_ksTS:"1563970517892_385",k:1,area:"c2c",bucketid:10},success:function(e){var n=e.result,t="";n.forEach(function(e){t+="<li>"+e[0]+"</li>"}),l.innerHTML=t}})}},0)},l.onclick=function(e){var n=event||e,t=n.target||n.srcElement;"LI"==t.nodeName&&(o.value=t.innerText),l.innerHTML=""}}),window.onload=function(){$(function(){$(".min_nav_ul ").mouseenter(function(){$(".min_nav_ul ul").animate({height:473},500)}),$(".min_nav_ul ").mouseleave(function(){$(".min_nav_ul ul").animate({height:0})})}),$(function(){var e=document.getElementById("header").offsetHeight+document.getElementById("banner").offsetHeight+document.getElementById("tuijian").offsetHeight+document.getElementById("temai").offsetHeight+document.getElementById("temai2").offsetHeight;window.onscroll=function(){document.documentElement.scrollLeft||document.body.scrollLeft,(document.documentElement.scrollTop||document.body.scrollTop)>e?md.style.display="block":md.style.display="none"}});var l=document.getElementsByClassName("md_ul_li"),m=document.getElementsByClassName("nz");md.onclick=function(e){var n=e||window.event,t=n.target||n.srcElement;if("LI"==t.tagName){for(var o=0;o<l.length;o++)l[o].index=o;document.documentElement.scrollTop=m[t.index].offsetTop}};var e=document.getElementsByClassName("iconfont icon-shangjiantou")[0],n=document.getElementsByClassName("span")[0],t=document.getElementById("fh"),o=document.getElementById("header");e.onmouseenter=function(){n.style.display="block"},n.onclick=function(){document.documentElement.scrollTop=o.offsetTop},t.onmouseleave=function(){n.style.display="none"}};