!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){var n=document.querySelector(".create"),r=document.querySelector(".edit"),o=document.querySelector(".set_teams"),c=document.querySelectorAll("input"),u=(o.querySelectorAll(".teamz"),document.querySelector(".score"),Array.from(document.querySelectorAll(".dots"))),i=(document.querySelectorAll(".active_team"),document.querySelectorAll(".name"),[]),a=function(e,t){if(e.checked){var n=document.createElement("p"),r=document.createTextNode(e.name);n.classList.add("teamz"),n.appendChild(r),t.appendChild(n)}else e.checked||o.childNodes.forEach(function(n){e.name===n.textContent&&t.removeChild(n)})},l=function(e,t){if(console.log(!e.checked),!e.checked){var r=Array.from(document.querySelectorAll("input:checked")).filter(function(e){return{id:e.id,name:e.name}});r.length&&(i.push({players:r,score:0,id:i.length}),i.length>=2&&n.setAttribute("disabled","disabled"),d(i),s()),r.length||console.error("PICK A PLAYER")}},d=function(e){e.map(function(t,n){e[e.length-1].players.filter(function(t){t.name||e.pop()})})},f=function(e,t){e.preventDefault();var n=e.target;if(i.length){var r=parseInt(document.querySelectorAll(".active_team__select")[0].value),o=i[r];i.filter(function(e){return e.id===o})[0];o.score+=parseInt(n.dataset.dot),p(o)}else console.error("You must pick a player first.")},s=function(){var e=document.querySelectorAll(".active_team__select")[0];e.innerHTML="",i.forEach(function(t){var n=document.createElement("option");n.value=t.id,n.innerText="Team ".concat(t.id+1),e.appendChild(n)}),c.forEach(function(e){e.checked&&e.setAttribute("disabled",!0)})},m=function(e){c.forEach(function(e){return e.removeAttribute("disabled")})},p=function(e){e.players.forEach(function(t,n){document.querySelectorAll(".teamz")[n].innerHTML="".concat(t.name," has ").concat(e.score," dots.")})};document.addEventListener("click",function(e){return!i.includes(e.target)&&e.target.matches("input")&&a(e.target,o),i}),n.addEventListener("click",function(e){l(c,e.target.id)}),r.addEventListener("click",function(e){m(0,e.target)}),u.forEach(function(e){return e.addEventListener("click",f)})},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}r(n(3)),r(n(4)),r(n(0));n(5),n(6),n(7),n(8),function(e){e.keys().forEach(e)}(n(9)),console.log("The Wolf is coming!")},function(e,t,n){"use strict";function r(e,t){e.preventDefault();e.target}var o=(function(e){e&&e.__esModule}(n(0)),document.querySelector(".score"),Array.from(document.querySelectorAll(".dots")));o.forEach(function(e){return e.addEventListener("click",r)})},function(e,t){function n(){var e="opening",t="open";this.classList.toggle("active"),r.filter(function(n){if(n.classList.contains("active")){var r=[t,e];e=r[0],t=r[1]}})}var r=Array.from(document.querySelectorAll(".rule"));r.forEach(function(e){return e.addEventListener("click",n)})},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){function r(e){return n(o(e))}function o(e){var t=c[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var c={"./bugler.jpg":10,"./saddam.jpg":11,"./sand.jpg":12,"./wolf.jpg":13};r.keys=function(){return Object.keys(c)},r.resolve=o,e.exports=r,r.id=9},function(e,t,n){e.exports=n.p+"./img/bugler.jpg"},function(e,t,n){e.exports=n.p+"./img/saddam.jpg"},function(e,t,n){e.exports=n.p+"./img/sand.jpg"},function(e,t,n){e.exports=n.p+"./img/wolf.jpg"}]);