!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=11)}([function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var r=(s=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[n].concat(o).concat([r]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(r=0;r<t.length;r++){var s=t[r];null!=s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){var i,r,o={},s=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=i.apply(this,arguments)),r}),a=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var i=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}}(),c=null,l=0,d=[],m=n(4);function p(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=o[i.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](i.parts[s]);for(;s<i.parts.length;s++)r.parts.push(b(i.parts[s],e))}else{var a=[];for(s=0;s<i.parts.length;s++)a.push(b(i.parts[s],e));o[i.id]={id:i.id,refs:1,parts:a}}}}function u(t,e){for(var n=[],i={},r=0;r<t.length;r++){var o=t[r],s=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}function f(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=d[d.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),d.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(t.insertAt.before,n);n.insertBefore(e,r)}}function h(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=d.indexOf(t);e>=0&&d.splice(e,1)}function g(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return n.nc}();i&&(t.attrs.nonce=i)}return v(e,t.attrs),f(t,e),e}function v(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function b(t,e){var n,i,r,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var s=l++;n=c||(c=g(e)),i=x.bind(null,n,s,!1),r=x.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),f(t,e),e}(e),i=function(t,e,n){var i=n.css,r=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||o)&&(i=m(i));r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([i],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),r=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(e),i=function(t,e){var n=e.css,i=e.media;i&&t.setAttribute("media",i);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){h(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=u(t,e);return p(n,e),function(t){for(var i=[],r=0;r<n.length;r++){var s=n[r];(a=o[s.id]).refs--,i.push(a)}t&&p(u(t,e),e);for(r=0;r<i.length;r++){var a;if(0===(a=i[r]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete o[a.id]}}}};var w,y=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function x(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=y(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}},function(t,e,n){var i=n(3);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,r);i.locals&&(t.exports=i.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"* {\n  margin: 0;\n  padding: 0;\n  font-family: 'Roboto', sans-serif;\n}\n\nbody {\n  background-color: #242f42;\n}\n\n.main-wrapper {\n  max-width: 170rem;\n  margin: 0 1rem;\n  font-size: 1.5em;\n}\n\n@media (max-width: 600px) {\n  .main-wrapper {\n    font-size: 2em;\n  }\n}\n\n.search {\n\n}\n\n.content {\n  margin-top: 1rem;\n  font-size: 1rem;\n}\n\n.navigation {\n  margin-top: 2rem;\n}\n\n.hidden {\n  display: none;\n}\n",""])},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,i=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t,e,n){var i=n(6);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,r);i.locals&&(t.exports=i.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,'.search-box {\n  margin: 0 10%;\n  text-align: center;\n}\n\n.search-img {\n  padding: 0 1rem;\n  display: inline-block;\n  position: relative;\n  top: 2.5rem;\n}\n\n@media (max-width: 600px) {\n  .search-img {\n    display: none;\n  }\n}\n\n.search-input {\n  text-align: center;\n  box-sizing: border-box;\n  border-color: #71a0ec;\n  border-width: 0.8rem;\n  border-radius: 1.4em;\n  outline: none;\n  max-width: 50%;\n  min-width: 12em;\n  margin: 3rem 0;\n  padding: 0.1rem 3rem;\n  color: #2b384e;\n  font-weight: 700;\n  font-size: 1.8rem;\n  line-height: 2em;\n}\n\ninput[type="text"] {\n  background-color : #f3f3f3;\n}\n\n',""])},function(t,e,n){var i=n(8);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,r);i.locals&&(t.exports=i.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,".content-list {\n  width: 112rem;\n  height: 36rem;\n  margin: 0 auto;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  padding: 0;\n  overflow-x: hidden;\n  scroll-behavior: smooth;\n}\n\n.content-list.active {\n  cursor: grabbing;\n}\n\n.content-item {\n  box-sizing: border-box;\n  min-width: 22rem;\n  margin: 0 3rem;\n  border-radius: 2rem;\n  background-color: #486798;\n  border-color: #71a0ec;\n  border-width: 0.8rem;\n  border-style: outset;\n}\n\n@media( max-width: 992px) {\n  .content-item {\n  }\n}\n\n.item-inner {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.item-link {\n  text-decoration: none;\n  margin: -0.65rem;\n  height: 4.8rem;\n  padding: 0.6rem 1rem;\n  background-color: #f3f3f3;\n  border-color: #71a0ec;\n  border-width: 1rem;\n  border-style: outset;\n  border-radius: 2.2rem;\n  color: #242f42;\n}\n\n.item-title {\n  display: inline-block;\n  font-family: 'Roboto', sans-serif;\n  text-transform: uppercase;\n  font-size: 1.5rem;\n  font-weight: 700;\n  text-align: center;\n  white-space: wrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  line-height: 1.6rem;\n  max-height: 4.8rem;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\n.item-image {\n  box-sizing: border-box;\n  width: 102%;\n  border-color: transparent;\n  border-width: 0.8rem;\n  border-style: solid;\n  border-radius: 2.2rem;\n}\n\n.info-wrapper {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  padding: 0.2rem 0.2rem;\n  height: 2rem;\n  line-height: 2rem;\n  color: #f3f3f3;\n}\n\n.icon {\n  height: 1.5rem;\n  width: 1.5rem;\n  padding: 0 0.7rem;\n}\n\n.views-img {\n  height: 2rem;\n  width: 2rem;\n}\n\n.item-channel {\n  padding: 0 0.6rem  0  0.2rem;\n  font-size: 1.3rem;\n  overflow: hidden;\n}\n\n.item-date {\n  padding: 0 1rem  0  0.2rem;\n  font-size: 1rem;\n}\n\n.item-view-count {\n  padding: 0 0.6rem  0  0.2rem;\n  font-size: 1rem;\n}\n\n.item-desctiption {\n  margin: 0.2rem 1rem;\n  padding: 1.2rem 0.5rem 2rem 0.5rem;\n  height: 4rem;\n  background-color: #486798;\n  color: #f3f3f3;\n  border-width: 0.1rem;\n  border-color: #f3f3f3;\n  border-top-style: solid;\n  word-wrap: break-word;\n  white-space: wrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n",""])},function(t,e,n){var i=n(10);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,r);i.locals&&(t.exports=i.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,".nav-buttons {\n  display: flex;\n  justify-content: center;\n  margin: 0 auto;\n  text-align: center;\n  width: 60%;\n}\n\n.button {\n  margin: 0.5rem;\n  border-radius: 50%;\n  height: 2rem;\n  width: 2rem;\n  background-color: #486798;\n  font-size: 1rem;\n  box-sizing: border-box;\n  padding: 0.4rem 0;\n  color: #f3f3f3;\n}\n",""])},function(t,e,n){"use strict";n.r(e);class i{constructor(){this.query="",this.key="AIzaSyAGAgX1KiDiwLdGiP2-pX3ZAxXtXpV_pj0",this.snippetLink=`https://www.googleapis.com/youtube/v3/search?key=${this.key}&type=video&part=snippet&maxResults=15&q=`,this.idLink=`https://www.googleapis.com/youtube/v3/videos?key=${this.key}&id=`}setUrls(t){this.query=t}getUrls(){return{snippetUrl:`${this.snippetLink}${this.query}`,idUrl:`${this.idLink}${this.query}`}}}class r{constructor(t){this.state=t,this.snippetData={},this.staticticData={}}async getData(){const{snippetUrl:t}=this.state,e=await fetch(t);this.snippetData=await e.json()}async getViewsData(){let t=this.snippetData.items.reduce((t,e)=>`${t},${e.id.videoId}`);t+="&part=statistics";const{idUrl:e}=this.state,n=await fetch(`${e}${t}`);this.staticticData=await n.json()}getClipTitles(){return this.snippetData.items.map(t=>t.snippet.title)}getClipViewsCounters(){return this.staticticData.items.map(t=>t.statistics.viewCount)}getClipDescriptions(){return this.snippetData.items.map(t=>t.snippet.description)}getClipLinks(){return this.snippetData.items.map(t=>`https://www.youtube.com/watch?v=${t.id.videoId}`)}getClipImages(){return this.snippetData.items.map(t=>t.snippet.thumbnails.medium.url)}getClipDates(){return this.snippetData.items.map(t=>t.snippet.publishedAt)}getChannelTitles(){return this.snippetData.items.map(t=>t.snippet.channelTitle)}}n(2);var o=class{constructor(){this.document=document.body}clearContent(){const t=document.getElementById("content-list");for(;t.lastChild;)t.removeChild(t.lastChild)}render(){const t=document.createElement("div");t.className="main-wrapper",this.document.appendChild(t);const e=document.createElement("section");e.className="search",e.setAttribute("id","search"),t.appendChild(e);const n=document.createElement("section");n.className="content",n.setAttribute("id","content"),t.appendChild(n);const i=document.createElement("div");i.className="content-list",i.setAttribute("id","content-list"),n.appendChild(i);const r=document.createElement("section");r.className="navigation hidden",r.setAttribute("id","navigation"),t.appendChild(r)}};n(5);var s=class{constructor(){this.document=document.body}render(){const t=document.getElementById("search"),e=document.createElement("div");e.className="search-box",t.appendChild(e);const n=document.createElement("img");n.className="search-img",n.setAttribute("src","https://cdn.discordapp.com/attachments/336565794165227520/576921165478756352/3-search-cat_icon-icons.com_76679.png"),e.appendChild(n);const i=document.createElement("input");i.className="search-input",i.setAttribute("type","text"),i.setAttribute("id","search-input"),i.setAttribute("placeholder",". . ."),e.appendChild(i)}};n(7);var a=class{constructor(t,e,n,i,r,o,s){this.titles=t,this.links=e,this.images=n,this.channels=r,this.dates=i,this.viewCounts=s,this.descriptions=o}render(){const t=document.getElementById("content-list");for(let e=0;e<this.titles.length;e+=1){const n=document.createElement("div");n.className="content-item",t.appendChild(n);const i=document.createElement("div");i.className="item-inner",n.appendChild(i);const r=document.createElement("a");r.className="item-link",r.setAttribute("href",this.links[e]),i.appendChild(r);const o=document.createElement("div");o.className="item-title";const s=document.createElement("textarea");s.innerHTML=this.titles[e],o.textContent=s.value,r.appendChild(o);const a=document.createElement("img");a.className="item-image",a.setAttribute("src",this.images[e]),i.appendChild(a);const c=document.createElement("div");c.className="info-wrapper",i.appendChild(c);const l=document.createElement("div");l.className="info-wrapper",i.appendChild(l);const d=document.createElement("img");d.className="channel-img icon",d.setAttribute("src","https://image.flaticon.com/icons/svg/1299/1299970.svg"),c.appendChild(d);const m=document.createElement("div");m.className="item-channel",m.textContent=this.channels[e],c.appendChild(m);const p=document.createElement("img");p.className="date-img icon",p.setAttribute("src","https://image.flaticon.com/icons/svg/1799/1799007.svg"),l.appendChild(p);const u=document.createElement("div");u.className="item-date";const f=new Date(this.dates[e]);u.textContent=f.toISOString().split("").slice(0,10).join(""),l.appendChild(u);const h=document.createElement("img");h.className="views-img icon",h.setAttribute("src","https://image.flaticon.com/icons/svg/1799/1799577.svg"),l.appendChild(h);const g=document.createElement("div");g.className="item-view-count",g.textContent=this.viewCounts[e],l.appendChild(g);const v=document.createElement("p");v.className="item-desctiption",v.textContent=this.descriptions[e],i.appendChild(v)}}};n(9);var c=class{constructor(){this.document=document.body}render(){const t=document.getElementById("navigation"),e=document.createElement("div");e.className="nav-buttons",t.appendChild(e);const n=document.createElement("div");n.className="button hidden",n.setAttribute("id","left-button"),n.textContent="⇦",e.appendChild(n);const i=document.createElement("div");i.className="button",i.setAttribute("id","center-button"),e.appendChild(i);const r=document.createElement("div");r.className="button",r.setAttribute("id","right-button"),r.textContent="⇨",e.appendChild(r)}};(new class{constructor(){this.state={}}async start(){const t=new i;this.state=t.getUrls();let e=4,n=1,l=448;const d=new o,m=new s,p=new c;d.render(),m.render(),p.render();const u=document.getElementById("search-input"),f=document.getElementById("left-button"),h=document.getElementById("right-button"),g=document.getElementById("center-button");function v(t){const i=document.getElementById("content-list");"left"===t&&n>1?(i.scrollLeft-=l*e,1==(n-=1)&&(f.className+=" hidden"),g.textContent=n):"right"===t&&((n+=1)*e>15&&alert("woops"),i.scrollLeft+=l*e,g.textContent=n,f.classList.remove("hidden"))}g.textContent=n,u.onchange=async function(){d.clearContent(),t.setUrls(u.value),this.state=t.getUrls();const e=new r(this.state);await e.getData(),await e.getViewsData();const i=e.getClipTitles(),o=e.getClipDescriptions(),s=e.getClipLinks(),c=e.getClipImages(),l=e.getClipDates(),m=e.getChannelTitles(),p=e.getClipViewsCounters(),h=new a(i,s,c,l,m,o,p);1!==n&&(f.className+=" hidden",n=1,g.textContent=n),h.render();let b,w,y=!1;const x=document.getElementById("content-list");x.addEventListener("mousedown",t=>{y=!0,x.classList.add("active"),b=t.pageX-x.offsetLeft}),x.addEventListener("mouseleave",()=>{y=!1,x.classList.remove("active")}),x.addEventListener("mouseup",()=>{y=!1,x.classList.remove("active"),v(w-b>0?"left":"right")}),x.addEventListener("mousemove",t=>{y&&(t.preventDefault(),w=t.pageX-x.offsetLeft)}),document.getElementById("navigation").classList.remove("hidden")},f.addEventListener("click",()=>{v("left")}),h.addEventListener("click",()=>{v("right")})}}).start()}]);
//# sourceMappingURL=app.bundle.js.map