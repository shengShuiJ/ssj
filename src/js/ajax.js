function ajax(option){
	//获取默认值
	var url = option.url;//请求路径
	if(!url){
		console.error('请求路径必须传入');
		return;
	}
	var method = (option.method||'get').toLowerCase();//请求方法
	var data = option.data||{};
	//处理请求参数/请求主体
	var params = ""
	for(var key in data){
		params+=key+"="+data[key]+"&"
	}
	params = params.slice(0,-1);
	//获取响应成功的回调函数
	var success = option.success;
	//获取响应出错的回调函数
	var error = option.error
	//获取是否使用xhr进去数据请求
	var dataType = (option.dataType||'json').toLowerCase();
	//如果使用script标签请求数据,传给后台的回调函数名的键,默认是callback
	var jsonp = option.jsonp||'callback';
	//如果使用script标签请求数据,传给后台的回调函数名,默认是随机
	var cb = option.cb||('phone'+new Date().getTime()+Math.random().toString().slice(2));

	//如果使用xhr对象(json)请求数据
	if(dataType=="json"){
		//创建xhr对象
		var xhr = new XMLHttpRequest;
		//请求
		if(method=="get"){
			xhr.open('get',url+"?"+params);
			xhr.send(null)
		}
		if(method=="post"){
			xhr.open('post',url);
			xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
			xhr.send(params)
		}
		//响应
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4){
				if(xhr.status==200){					
					success(xhr.response);
				}else{
					if(error){
						error();
					}
				}
			}
		}
	}

	//如果使用script标签请求(jsonp)数据
	//创建script标签
	var script = document.createElement('script');

	//设置该标签的src属性
	script.src =url+"?"+params+"&"+jsonp+"="+cb;								
	//定义一个函数,以备调用
	window[cb] = function(data){
		success(data);
		script.remove()
	}
	document.body.appendChild(script);
}