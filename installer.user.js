// ==UserScript==
// @name         Zestaw dodatków - Client
// @version      1.0
// @description  Zestaw dodatków - Client
// @author       Ziorkoo
// @match        http*://*.margonem.pl/
// @match        http*://*.margonem.com/
// @exclude      http*://margonem.*/*
// @exclude      http*://www.margonem.*/*
// @exclude      http*://new.margonem.*/*
// @exclude      http*://forum.margonem.*/*
// @exclude      http*://commons.margonem.*/*
// @exclude      http*://dev-commons.margonem.*/*
// @downloadURL  https://raw.githubusercontent.com/ziorkoo/addons-menager/refs/heads/main/installer.user.js
// @updateURL    https://raw.githubusercontent.com/ziorkoo/addons-menager/refs/heads/main/installer.user.js
// @grant        none
// ==/UserScript==

!function(n){{let o=parseInput,d=!1;parseInput=(e,t,n)=>{e.browser_token&&!d?setTimeout(()=>{o(e,t,n),d=!0},1e3):o(e,t,n)}}{const e=new WebSocket("wss://addons-teamplatin.glitch.me");e.onopen=async()=>{e.send(JSON.stringify({type:"getInfo",interface:window.getCookie("interface"),userID:window.getCookie("user_id"),heroID:window.getCookie("mchar_id"),ids:JSON.parse(localStorage.getItem("addonGuiSettings")||"{}")?.enabledAddons||[]}))},e.onmessage=e=>{var t,e=JSON.parse(e.data);"info"===e.type?(n.getElementById("version")&&(n.getElementById("version").textContent=e.data.version),n.getElementById("user-count")&&(n.getElementById("user-count").textContent=e.data.userCount),n.getElementById("user-online-count")&&(n.getElementById("user-online-count").textContent=e.data.online)):"logs"===e.type?window.AddonGUI?.displayLogs(e.data):"addons"===e.type?window.AddonGUI?.displayAddons(e.data):"injectScript"===e.type&&(e=e.js_script,(t=n.createElement("script")).textContent=e,n.head.appendChild(t),t.remove())}}}(document);
