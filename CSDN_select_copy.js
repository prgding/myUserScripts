// ==UserScript==
// @name         CSDN 不登陆复制、取消折叠
// @namespace    dingshuai
// @version      1.2
// @description  CSDN 中实现不登陆实现选中和复制；自动展开折叠代码；
// @author       dingshuai
// @match        https://blog.csdn.net/*
// @icon         https://www.google.com/s2/favicons?domain=blog.csdn.net
// @github       https://github.com/prgding/myUserScripts
// @license 	 MIT
// ==/UserScript==

onload = function () {
	// 不登陆复制
	const divs = document.querySelectorAll('div.hljs-button.signin');
	divs.forEach(div => {
		// 对每个 div 元素执行需要的操作
		div.setAttribute("data-title", "复制");
		div.setAttribute("onclick", "hljs.copyCode(event)");
	});

	// 自动展开所有代码
	const pres = document.querySelectorAll("pre.set-code-hide");
	pres.forEach(pre => {
		pre.setAttribute("class","");
		pre.querySelector("div.hide-preCode-box").remove();
	})

}