!function(e){function t(t){for(var n,i,o=t[0],a=t[1],c=0,s=[];c<o.length;c++)i=o[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&s.push(r[i][0]),r[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(l&&l(t);s.length;)s.shift()()}var n={},r={0:0};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,i){n=r[e]=[t,i]}));t.push(n[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+""+e+".bundle.js"}(e);var l=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",l.name="ChunkLoadError",l.type=i,l.request=o,n[1](l)}r[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],a=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=a;i(i.s=12)}([function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],l=t.base?o[0]+t.base:o[0],s=n[l]||0,u="".concat(l," ").concat(s);n[l]=s+1;var p=c(u),d={css:o[1],media:o[2],sourceMap:o[3]};-1!==p?(a[p].references++,a[p].updater(d)):a.push({identifier:u,updater:v(d,t),references:1}),r.push(u)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,p=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=p(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function m(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,h=0;function v(e,t){var n,r,i;if(t.singleton){var o=h++;n=f||(f=s(t)),r=d.bind(null,n,o,!1),i=d.bind(null,n,o,!0)}else n=s(t),r=m.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=c(n[r]);a[i].references--}for(var o=l(e,t),s=0;s<n.length;s++){var u=c(n[s]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=o}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var a,c,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";n.r(t),t.default=[{type:"h3",content:"Project 1"},{type:"p",content:"short description of the project 1: it's an awesome project"},{type:"p",content:"project-1"},{type:"h3",content:"Project 2"},{type:"p",content:"short description of the project 2: it's an awesome project"},{type:"p",content:"project-2"},{type:"h3",content:"The biggest project"},{type:"p",content:"This project is very very big. Really BIG."},{type:"p",content:"biggest-project"}]},function(e,t,n){var r={"./biggest-project.md":[13,1],"./list.md":[2],"./project-1.md":[14,2],"./project-2.md":[15,3]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(i)}))}i.keys=function(){return Object.keys(r)},i.id=3,e.exports=i},function(e,t,n){var r=n(0),i=n(5);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(1)(!1)).push([e.i,'.project-list{margin:0 0 0 20px;padding:60px 0 0}.project-list__item{list-style:none;margin:0 0 50px}.project-list__item-link{text-decoration:none}.project-list__list-link{display:none}.project-list.collapsed{position:fixed;top:0;left:0;display:flex;flex-direction:column;justify-content:center;height:100vh;padding:0;margin:0}.project-list.collapsed .project-list__item{list-style:none;margin:0 15px}.project-list.collapsed .project-list__item-link{display:inline-block;width:10px;height:10px;border-radius:50%;background-color:#ccc;position:relative}.project-list.collapsed .project-list__item-link::after{content:"";position:absolute;top:50%;left:50%;border-radius:50%;border:5px solid #750787;transform:translate(-50%, -50%) scale(0);transition:transform .2s linear}.project-list.collapsed .project-list__item-link:hover::after{transform:translate(-50%, -50%) scale(0.5)}.project-list.collapsed .project-list__item-link.active::after{transform:translate(-50%, -50%) scale(1)}.project-list.collapsed .project-list__item .project-card{display:none}.project-list.collapsed .project-list__list-link{display:block}@media(min-width: 576px){.project-list.collapsed{left:auto;margin:0 0 0 -50px}.project-list.collapsed .project-list__item{margin-bottom:6px}.project-list.collapsed .project-list__item-link{width:12px;height:12px}.project-list.collapsed .project-list__item-link::after{border-width:6px}.project-list.collapsed .project-list__list-link svg{width:12px;height:12px}}@media(min-width: 768px){.project-list.collapsed{margin-left:-65px}}@media(min-width: 375px){.project-list{margin:0}}.project-card__title{color:#000;margin:0 0 10px}.project-card__desc{color:#aaa;margin:0}.project-card:hover .project-card__title span{border-bottom:2px solid #750787}.project-posts{height:0;margin:0 0 0 20px}.project-posts.active{height:auto}@media(min-width: 375px){.project-posts{margin:0}}.project-post{opacity:0;height:0;transition:opacity .4s;overflow:hidden}.project-post.active{opacity:1;height:auto}',""]),e.exports=t},function(e,t,n){var r=n(0),i=n(7);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(1)(!1)).push([e.i,".header{height:60px}.header__content{height:100%;display:flex;align-items:center}.header__logo{line-height:50px}.header__logo svg{vertical-align:top}@media(min-width: 375px){.header__logo{margin-left:-18px}}",""]),e.exports=t},function(e,t,n){var r=n(0),i=n(9);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(1)(!1)).push([e.i,".footer{position:absolute;bottom:0;width:100%}.footer__content{width:100%;height:100%;border-top:2px solid #750787}.footer__menu{display:flex;text-align:center;padding:14px 0;flex-direction:row;justify-content:space-between}.footer__link{font-weight:900;font-size:20px;color:#000;border-bottom:2px solid transparent;margin:0;text-decoration:none}.footer__link:hover{border-color:#750787}.footer__external-links-container a{margin:0 12px}.footer__external-links-container a:last-child{margin-right:0}.footer__external-links-container a svg{margin-bottom:-2px}",""]),e.exports=t},function(e,t,n){var r=n(0),i=n(11);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){(t=n(1)(!1)).push([e.i,'body{font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;margin:0}#app{position:relative;box-sizing:border-box;padding-bottom:100px}.margin{margin:0 15px}@media(min-width: 375px){.margin{margin:0 35px}}@media(min-width: 425px){.margin{margin:0 40px}}@media(min-width: 576px){.margin{margin:0 60px}}@media(min-width: 768px){.margin{max-width:600px;margin:0 auto}}',""]),e.exports=t},function(e,t,n){"use strict";n.r(t),n.d(t,"JSX",(function(){return l}));var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=["svg","path","g","animate","rect"];function o(e,t,n){return void 0===t&&(t={}),e(r(r({},t),{children:n}))}function a(e){return i.includes(e)}function c(e,t){var n=document.createElementNS("http://www.w3.org/2000/svg",e);for(var r in t)n.setAttribute(r,t[r]);return n}var l={createElement:function(e,t){void 0===t&&(t={});for(var n,r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];if(t=t||{},"function"==typeof e)return o(e,t,r);n=a(e)?c(e,t):Object.assign(document.createElement(e),t);for(var l=0,s=r;l<s.length;l++){var u=s[l];Array.isArray(u)?n.append.apply(n,u):n.append(u)}return n},createComponent:o},s=new Event("router-navigation"),u=null;function p(e){var t=e.routes,n=l.createElement("div",null);return window.addEventListener("popstate",(function(e){m(n,t),h()})),window.addEventListener("router-navigation",(function(e){m(n,t),h()})),m(n,t),n}function d(){return window.location.pathname.replace(/^\//,"").split("/")}function m(e,t){var n=d()[0],r=t[n];r&&n!==u&&(e.innerHTML="",e.appendChild(r()),u=n)}function f(e){"/"!==e[0]&&(e="/"+e);var t=""+window.location.origin+e;window.history.pushState(null,null,t),window.dispatchEvent(s)}function h(){var e=new CustomEvent("route-change",{detail:{currentPath:d()}});window.dispatchEvent(e)}function v(e){e.preventDefault(),f(this.getAttribute("href"))}function g(e){return l.createElement("a",{href:e.href,className:e.className,onclick:v},e.children)}var b=n(2),y=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function c(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((r=r.apply(e,t||[])).next())}))},w=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},x={projectInfos:[],projects:[]};function j(){return y(this,void 0,void 0,(function(){var e,t,r,i,o;return w(this,(function(a){switch(a.label){case 0:e=[],t=0,r=x.projectInfos,a.label=1;case 1:return t<r.length?(i=r[t],[4,n(3)("./"+i.path+".md")]):[3,4];case 2:o=a.sent(),e.push({path:i.path,content:o.default}),a.label=3;case 3:return t++,[3,1];case 4:return[2,e]}}))}))}var _={init:function(){return y(this,void 0,void 0,(function(){var e;return w(this,(function(t){switch(t.label){case 0:return x.projectInfos=function(){for(var e=b.default,t=[],n=-1,r=0;r<e.length;r++)"h"===e[r].type[0]&&(t[++n]=[]),n>-1&&Array.isArray(t[n])&&t[n].push(e[r]);return t.map((function(e){return e.map((function(e){return e?e.content:""}))})).map((function(e){return{title:e[0],text:e[1],path:e[2]}}))}(),e=x,[4,j()];case 1:return e.projects=t.sent(),[2]}}))}))},get:function(e){return x[e]}};var E="qwertyuiopasdfghjklzxcvbnm1234567890";function k(e){void 0===e&&(e=8);for(var t="",n=0;n<e;n++){var r=Math.floor(Math.random()*E.length);t+=E[r]}return t}var N=function(){function e(e){this.previousValue=null,this.subscribers={},this.value=e}return e.prototype.getUniqueId=function(){for(var e=k(10);this.subscribers[e];)e=k(10);return e},e.prototype.s=function(e){var t=this.getUniqueId();return this.subscribers[t]=e,t},e.prototype.us=function(e){this.subscribers[e]&&delete this.subscribers[e]},Object.defineProperty(e.prototype,"_",{get:function(){return this.value},set:function(e){this.value!==e&&(this.previousValue=this.value,this.value=e,this.notifySubscribers())},enumerable:!1,configurable:!0}),e.prototype.notifySubscribers=function(){for(var e in this.subscribers)this.subscribers[e](this.value,this.previousValue)},e}();n(4);function L(e){switch(e.type){case"p":return l.createElement("p",null,e.content);case"h1":return l.createElement("h1",null,e.content);case"h2":return l.createElement("h2",null,e.content);case"h3":return l.createElement("h3",null,e.content);case"h4":return l.createElement("h4",null,e.content);case"h5":return l.createElement("h5",null,e.content);case"h6":return l.createElement("h6",null,e.content);case"l":return l.createElement("ul",null,e.content.map((function(e){return L(e)})));case"li":return l.createElement("li",null,e.content);default:return null}}function q(e){var t=e.width,n=e.height;return l.createElement("svg",{viewBox:"0 0 30 25",width:t,height:n},l.createElement("g",{fill:"#ccc"},[0,10,20].map((function(e){return l.createElement("rect",{width:"30",height:"5",x:"0",y:e,rx:"1",ry:"1"})}))))}function M(e){var t=e.data,n=t.title,r=t.text;return l.createElement("div",{className:"project-card"},l.createElement("h3",{className:"project-card__title"},l.createElement("span",null,n)),l.createElement("p",{className:"project-card__desc"},r))}function S(e){var t=e.size,n=l.createElement("animate",{id:"start",attributeName:"stroke-dasharray",fill:"freeze",dur:"150ms",begin:"",to:"100 500",restart:"whenNotActive"}),r=l.createElement("animate",{attributeName:"stroke",fill:"freeze",dur:"750ms",begin:"",values:"#750787; #e40303; #ff8c00; #ffed00; #008026; #004dff; #750787",restart:"whenNotActive"}),i=l.createElement("svg",{width:t,height:t,viewBox:"0 0 100 100"},l.createElement("path",{"stroke-width":"20",stroke:"#4B0082",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",d:"M50,50 L10,10 L90,10 L10,90 L90,90 L50,50","stroke-dasharray":"0 500","stroke-dashoffset":"0"},n,l.createElement("animate",{id:"end",attributeName:"stroke-dashoffset",dur:"600ms",begin:"start.end",to:"-386",restart:"whenNotActive"}),l.createElement("animate",{attributeName:"stroke-dasharray",fill:"freeze",dur:"1ms",begin:"end.end",to:"0 500"}),r)),o=!1;function a(){o=!0,n.beginElement(),r.beginElement(),setTimeout((function(){o=!1}),800)}return i.addEventListener("mouseenter",(function(){o||a()})),i.addEventListener("click",(function(){o||a()})),i}n(6);function O(){return l.createElement("div",{className:"header"},l.createElement("div",{className:"header__content margin"},l.createElement(g,{className:"header__logo",href:"/"},l.createElement(S,{size:50}))))}n(8);var C=function(){return l.createElement("svg",{width:"20",height:"20",viewBox:"0 0 1024 1024"},l.createElement("path",{d:"M512 0C229.25 0 0 229.25 0 512c0 226.25 146.688 418.125 350.156 485.812 25.594 4.688 34.938-11.125 34.938-24.625 0-12.188-0.469-52.562-0.719-95.312C242 908.812 211.906 817.5 211.906 817.5c-23.312-59.125-56.844-74.875-56.844-74.875-46.531-31.75 3.53-31.125 3.53-31.125 51.406 3.562 78.47 52.75 78.47 52.75 45.688 78.25 119.875 55.625 149 42.5 4.654-33 17.904-55.625 32.5-68.375C304.906 725.438 185.344 681.5 185.344 485.312c0-55.938 19.969-101.562 52.656-137.406-5.219-13-22.844-65.094 5.062-135.562 0 0 42.938-13.75 140.812 52.5 40.812-11.406 84.594-17.031 128.125-17.219 43.5 0.188 87.312 5.875 128.188 17.281 97.688-66.312 140.688-52.5 140.688-52.5 28 70.531 10.375 122.562 5.125 135.5 32.812 35.844 52.625 81.469 52.625 137.406 0 196.688-119.75 240-233.812 252.688 18.438 15.875 34.75 47 34.75 94.75 0 68.438-0.688 123.625-0.688 140.5 0 13.625 9.312 29.562 35.25 24.562C877.438 930 1024 738.125 1024 512 1024 229.25 794.75 0 512 0z"}))},T=function(){return l.createElement("svg",{width:"20",height:"20","enable-background":"new 0 0 56.693 56.693",id:"Layer_1",viewBox:"0 0 56.693 56.693"},l.createElement("g",null,l.createElement("path",{d:"M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z"}),l.createElement("path",{d:"M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12   c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z    M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88   C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078   c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179   c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z"})))};function P(){return l.createElement("div",{className:"footer"},l.createElement("div",{className:"footer__content"},l.createElement("div",{className:"footer__menu margin"},l.createElement(g,{href:"/about",className:"footer__link"},"ABOUT ME"),l.createElement("div",{className:"footer__external-links-container"},l.createElement("a",{href:"https://github.com/ogogorev",target:"_blank",className:"footer__link"},l.createElement(C,null)),l.createElement("a",{href:"https://de.linkedin.com/",target:"_blank",className:"footer__link"},l.createElement(T,null))))))}n(10);var U=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function c(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((r=r.apply(e,t||[])).next())}))},A=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}};setTimeout((function(){document.body.className=""}),1e3);var z={"":function(){var e=l.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",l.createElement("br",null),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",l.createElement("br",null),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",l.createElement("br",null),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",l.createElement("br",null)),t=l.createElement("div",{className:"margin"},l.createElement("h1",{style:"margin-top: 0"},"Roman Gorev"),l.createElement("h3",null,"Front-end developer"),l.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),"Links:",l.createElement("ul",null,l.createElement("li",null,l.createElement(g,{href:"/projects"},"Projects link"))));return setTimeout((function(){t.appendChild(e)}),0),t},projects:function(){var e=_.get("projectInfos"),t=_.get("projects"),n=new N("");function r(){var e,t,r=d(),o=r[1]?r[1]:null;n._=o,o?u.classList.add("collapsed"):u.classList.remove("collapsed"),o?(i(),e=o,(t=document.querySelector("#"+e+".project-post"))&&t.classList.add("active"),p.classList.add("active")):(i(),p.classList.remove("active")),window.scrollTo(0,0)}function i(){var e=document.querySelector(".project-post.active");e&&e.classList.remove("active")}console.log("projects, infos",t,e);for(var o={},a=0,c=e;a<c.length;a++){var s=c[a];o[s.path]=l.createElement(g,{href:"projects/"+s.path,className:"project-list__item-link"},l.createElement(M,{data:s}))}var u=l.createElement("ul",{className:"project-list"},l.createElement("li",{className:"project-list__item"},l.createElement(g,{href:"projects",className:"project-list__list-link"},l.createElement(q,{width:"10",height:"10"}))),Object.values(o).map((function(e){return l.createElement("li",{className:"project-list__item"},e)}))),p=l.createElement("div",{className:"project-posts"},t.map((function(e){return l.createElement("div",{id:e.path,className:"project-post"},function(e){for(var t=[],n=0,r=e;n<r.length;n++){var i=r[n];t.push(L(i))}return t}(e.content))}))),m=l.createElement("div",{className:"projects-container margin"},u,p);return window.addEventListener("route-change",(function(e){r()})),n.s((function(e,t){!function(e,t){var n=o[e],r=o[t];n&&!n.classList.contains("active")&&n.classList.add("active"),r&&r.classList.contains("active")&&r.classList.remove("active")}(e,t)})),setTimeout((function(){r()}),0),m}};!function(){U(this,void 0,void 0,(function(){var e;return A(this,(function(t){switch(t.label){case 0:return[4,_.init()];case 1:return t.sent(),(e=l.createElement("div",{id:"app"},l.createElement(O,null),l.createElement(p,{routes:z}),l.createElement(P,null))).style.minHeight=window.innerHeight+"px",document.body.appendChild(e),[2]}}))}))}()}]);