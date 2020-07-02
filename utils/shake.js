// 防抖操作避免用户平凡操作
function debounce(fnc, delay) {
	  let done = 1;		//记录是否可执行
	    return function () {
	        if(done) {
	            fnc.apply(this, arguments)
	            done = 0		//执行后置为不可执行
	            setTimeout(()=>{		//计时结束后再置为可执行
	                done =1
	            }, delay)
	        }
	    }
}

// 验证码1分钟限制

// 导出函数
export {
	debounce
}
