// ==UserScript==
// @name         学习通选中复制
// @namespace    dingshuai
// @version      1.3
// @description  学习通题目可以选中复制，便于搜索题目
// @author       dingshuai
// @match        https://mooc1.chaoxing.com/exam-ans/*
// @icon         https://www.google.com/s2/favicons?domain=chaoxing.com
// @github       https://github.com/prgding/myUserScripts
// @license      MIT
// ==/UserScript==

onload = function (){
	document.querySelector("head > link:nth-child(10)").remove();
}