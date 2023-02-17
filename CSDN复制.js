// ==UserScript==
// @name         CSDN选中复制
// @namespace    dingshuai
// @version      1.0
// @description  CSDN选中复制
// @author       dingshuai
// @match        https://blog.csdn.net/*
// @icon         https://www.google.com/s2/favicons?domain=blog.csdn.net
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