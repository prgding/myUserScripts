// ==UserScript==
// @name         学习通选中复制
// @namespace    dingshuai
// @version      1.0
// @description  学习通选中复制
// @author       dingshuai
// @match        https://mooc1.chaoxing.com/exam-ans/*
// @icon         https://www.google.com/s2/favicons?domain=chaoxing.com
// ==/UserScript==

onload = function (){
	document.querySelector("head > link:nth-child(10)").remove();
}