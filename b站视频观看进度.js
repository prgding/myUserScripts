// ==UserScript==
// @name         b站视频观看进度
// @namespace    dingshuai
// @version      1.0
// @description  b站视频观看进度
// @author       dingshuai
// @match        https://www.bilibili.com/video/*
// @icon         https://www.google.com/s2/favicons?domain=bilibili.com
// ==/UserScript==

// <script type="text/javascript" src="js/moment.js"></script>
import moment from 'js/moment';

setTimeout(
	function () {
		let durationElements = document.querySelectorAll('div.duration');
		let currentPElement = document.querySelector("li.watched.on span.page-num");
		let text = currentPElement.innerText; // P27
		let current = parseInt(text.slice(1)); // 27
		let sum = 0;
		let left = 0;
		document.querySelector("#v_desc > div.desc-info.desc-v2").style = "height: auto";
		// document.querySelector("#v_desc > div.toggle-btn").setAttribute("report-id","abstract_unspread");
		// document.querySelector("#v_desc > div.toggle-btn").innerHTML = "<span>收起</span>"

		console.log("\n\n------------------输出------------------\n\n\n")

		for (let i = 0; i < durationElements.length; i++) {
			if (i === 0 || i === durationElements.length - 1) {
				console.log(i + 1, durationElements[i].textContent);
			}
			// let duration = parseInt(durationElements[i].textContent, 10);
			let duration = moment.duration(durationElements[i].textContent);

			if (i >= current) {
				// 从第 current + 1 个开始算
				if (i === current) {
					console.log(i + 1, durationElements[i].textContent);
				}
				left += duration;
			}
			sum += duration;
		}

		let alreadySeen = sum - left;

		console.log("总时长 ==", sum);
		// console.log("已看 ==", alreadySeen);
		// console.log("剩余 ==", left);

		const convertToHoursAndMinutes = (value) => {
			let hours = Math.floor(value / 60);
			let minutes = value % 60;
			if (hours < 10) {
				hours = `0${hours}`
			}
			if (minutes < 10) {
				minutes = `0${minutes}`
			}
			return `${hours} : ${minutes}`;
		}

		// console.log("格式化总时长 ==", convertToHoursAndMinutes(sum));
		// console.log("格式化已看 ==", convertToHoursAndMinutes(alreadySeen));
		// console.log("格式化剩余 ==", convertToHoursAndMinutes(left));
		//
		// console.log("已看百分比 ==", (alreadySeen / sum * 100).toFixed(2) + "%");
		// console.log("已看集数百分比 ==", (current / durationElements.length * 100).toFixed(2) + "%");

		let formatSum = convertToHoursAndMinutes(sum);
		let formatAlreadySeen = convertToHoursAndMinutes(alreadySeen);
		let formatLeft = convertToHoursAndMinutes(left);
		let alreadyPercent = (alreadySeen / sum * 100).toFixed(2) + "%";
		let episodePercent = (current / durationElements.length * 100).toFixed(2) + "%";


		let msg1 = "总时长: " + formatSum + "\n";
		let msg2 = "已看时长: " + formatAlreadySeen + "&emsp;剩余时长: " + formatLeft + "\n";
		let msg3 = "已看百分比: " + alreadyPercent + "&emsp;已看集数百分比: " + episodePercent + "\n";

		let desc = document.querySelector(".desc-info-text").innerText;
		document.querySelector(".desc-info-text").innerHTML = msg1 + msg2 + msg3 + desc;

		// console.log(document.querySelector(".desc-info-text").innerText);

	},
	3000
);