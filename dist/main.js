(()=>{"use strict";var n,r,e,t,o,a,i,c,s,d,u,p,l,f,h={152:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,"*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  border: 0;\r\n  padding: 0;\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n:root {\r\n  --header-bg: rgb(228,67,50);\r\n  --white: #fff;\r\n  --nav-bg: rgb(250,250,250);\r\n  --btn-hover: rgb(236,236,236);\r\n}\r\n\r\n\r\ninput {\r\n  border: none;\r\n  color: inherit;\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  outline: none;\r\n}\r\n\r\nbutton {\r\n  width: 100%;\r\n  padding: 10px 20px;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  margin-bottom: 5px;\r\n  text-align: left;\r\n  background: none;\r\n}\r\n\r\nbutton:hover {\r\n  background: var(--btn-hover);\r\n}\r\n\r\ni {\r\n  margin-right: 10px;\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n}\r\n\r\n#header {\r\n  width: 100%;\r\n  height: 50px;\r\n  background: var(--header-bg);\r\n  padding: 5px;\r\n}\r\n\r\n#header-container {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.logo-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.logo-container img {\r\n  height: 100%;\r\n}\r\n\r\n.logo-container span {\r\n  color: var(--white);\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.nav {\r\n  width: 300px;\r\n  min-width: 250px;\r\n  padding: 20px;\r\n  background: var(--nav-bg);\r\n  height: calc(100vh - 50px);\r\n}\r\n\r\n",""]);const c=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var u=[].concat(n[d]);t&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),r.push(u))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=t.base?s[0]+t.base:s[0],u=a[d]||0,p="".concat(d," ").concat(u);a[d]=u+1;var l=e(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)r[l].references++,r[l].updater(f);else{var h=o(f,t);t.byIndex=c,r.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=e(a[i]);r[c].references--}for(var s=t(n,o),d=0;d<a.length;d++){var u=e(a[d]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}a=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},v={};function m(n){var r=v[n];if(void 0!==r)return r.exports;var e=v[n]={id:n,exports:{}};return h[n](e,e.exports,m),e.exports}m.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return m.d(r,{a:r}),r},m.d=(n,r)=>{for(var e in r)m.o(r,e)&&!m.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},m.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),n=m(379),r=m.n(n),e=m(795),t=m.n(e),o=m(569),a=m.n(o),i=m(565),c=m.n(i),s=m(216),d=m.n(s),u=m(589),p=m.n(u),l=m(152),(f={}).styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=d(),r()(l.Z,f),l.Z&&l.Z.locals&&l.Z.locals,document.querySelector("body"),document.querySelector(".display-section"),document.querySelector("#button-inbox-project").addEventListener("click",(function(){const n=document.querySelector(".list-topic");n.innerHTML="";const r=document.createElement("div");r.setAttribute("class","topic-type"),r.textContent="Home";const e=document.createElement("div");e.setAttribute("class","topic-due-date"),e.textContent="Due Date",n.appendChild(r),n.appendChild(e);const t=document.createElement("button");t.setAttribute("id","add-task-button"),t.textContent="Add TasK",n.appendChild(t)}))})();