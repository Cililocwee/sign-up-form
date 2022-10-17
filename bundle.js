(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>m});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),s=t.n(c),l=new URL(t(73),t.b),p=new URL(t(439),t.b),d=new URL(t(873),t.b),u=a()(o()),f=s()(l),g=s()(p),h=s()(d);u.push([n.id,"body, html {\n    margin: 0;\n    background: #fafafa;\n}\n\n/* input styling */\ninput {\n    border: 2px solid;\n    border-radius: 4px;\n    font-size: 1rem;\n    margin: 0.25rem;\n    min-width: 125px;\n    padding: 0.5rem;\n    transition: background-color 0.5s ease-out;\n}\n\ninput:optional {\n    border-color: gray;\n}\n\ninput:invalid {\n    border-color: red;\n}\n\ninput:required{\n    border-color: black;\n}\n\ninput:required:valid {\n    border-color: green;\n}\n\ninput:required:focus:valid {\n    background: url("+f+") no-repeat 95% 50% lightgreen;\n    background-size: 25px;\n  }\n\ninput:focus:invalid {\nbackground: url("+g+") no-repeat 95% 50% lightsalmon;\nbackground-size: 25px;\n}\n\n/* all content */\n.content {\n    background: black;\n    display: flex;\n    flex-direction: row;\n    height: 100vh;\n    \n}\n\n/* decoration on the left half of the screen */\n.deco {\n    display: flex;\n    flex-direction:column;\n    height: inherit;\n    background-image: url("+h+"); \n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: fixed;\n    width: 40%;\n    flex-shrink: 0;\n    color: black;\n    align-items: center;\n    overflow: hidden;\n}\n\n.logo {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    margin-top: 40%;\n    background: lightgray;\n    opacity: 35%;\n    height: 20%;\n    width: 100%;\n}\n\n.logo img {\n    height: 100%;\n    width: auto;\n    opacity: 50%;\n}\n\n.logo p {\n    font-size: 60px;\n    color: gray;\n}\n\n.attribute {\n    background: lightgray;\n    margin-top: auto;\n    margin-bottom: 10px;\n    opacity: 35%;\n}\n\n/* all content for the user (right half of the screen) */\n.for-user {\n    background: #fafafa;\n    width: 67%;\n    padding-left: 10px;\n}\n\n/* blurb at the top of the page */\n.blurb-container {\n    display: flex;\n    align-items: center;\n    height: 26%;\n    width: 550px;\n    padding: 0px 20px;\n    flex-shrink: 0;\n    border-radius: 15px;\n}\n\n.blurb-actual {\n    width: 90%;\n}\n\n/* input fields */\n.user-input {\n    background: rgb(250,250,250);\n    background: linear-gradient(135deg, rgba(250,250,250,1) 19%, rgba(236,236,236,1) 100%);\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    padding-left: 10px;\n    margin-left: -10px;\n    box-shadow: 5px 7px #D4D4D4;\n}\n\n.user-input-form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 10px;\n    padding-bottom: 20px;\n    padding-top: 10px;\n    margin-left: 20px;\n}\n\n.user-input-form label {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 80px;\n}\n\n.user-input > h2 {\n    height: fit-content;\n}\n\n.user-input h2 {\n    margin-bottom: 5px;\n    margin-left: 20px;\n}\n\n.top-row {\n    display:flex;\n    flex-direction: row;\n    width: fit-content;\n    gap: 5px;\n}\n\n.middle-row {\n    display:flex;\n    flex-direction: row;\n    width: fit-content;\n    gap: 5px;\n}\n\n.bottom-row {\n    display: flex;\n    flex-direction: row;\n    width: fit-content;\n    gap: 5px;\n}\n\n.password-requirements {\n    font-size: smaller;\n    color: rgb(163, 163, 163);\n    width: 250px;\n    margin-left: 100px;\n    margin-top: -5px;\n    margin-bottom: -10px;\n}\n\n/* Below the dropshadow */\n.create-button {\n    background: black;\n    margin-left: 20px;\n    margin-top: 35px;\n    width: fit-content;\n}\n\n.account-check {\n    width: fit-content;\n    margin-left: 20px;\n}\n\n.account-check p {\n    margin-top: 25px;\n}",""]);const m=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);r&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],p=i[l]||0,d="".concat(l," ").concat(p);i[l]=p+1;var u=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var g=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:g,references:1})}a.push(d)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),l=0;l<i.length;l++){var p=t(i[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},73:(n,e,t)=>{n.exports=t.p+"a60560c6d5f7fd7a9ba6.svg"},439:(n,e,t)=>{n.exports=t.p+"f013d031f2cc78bdaf6e.svg"},873:(n,e,t)=>{n.exports=t.p+"656abb4741902017de3f.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),s=t.n(c),l=t(216),p=t.n(l),d=t(589),u=t.n(d),f=t(426),g={};g.styleTagTransform=u(),g.setAttributes=s(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=p(),e()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;var h=document.getElementById("passwordstring"),m=document.getElementById("confirmpasswordstring");function b(){h.value!=m.value?m.setCustomValidity("Passwords Don't Match"):m.setCustomValidity("")}h.onchange=b,m.onkeyup=b})()})();