!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=(s=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[n].concat(o).concat([r]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(r=0;r<e.length;r++){var s=e[r];null!=s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var i,r,o={},s=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=i.apply(this,arguments)),r}),a=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var i=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}}(),c=null,d=0,l=[],m=n(4);function u(e,t){for(var n=0;n<e.length;n++){var i=e[n],r=o[i.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](i.parts[s]);for(;s<i.parts.length;s++)r.parts.push(b(i.parts[s],t))}else{var a=[];for(s=0;s<i.parts.length;s++)a.push(b(i.parts[s],t));o[i.id]={id:i.id,refs:1,parts:a}}}}function p(e,t){for(var n=[],i={},r=0;r<e.length;r++){var o=e[r],s=t.base?o[0]+t.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}function h(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=l[l.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(e.insertAt.before,n);n.insertBefore(t,r)}}function f(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function g(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var i=function(){0;return n.nc}();i&&(e.attrs.nonce=i)}return v(t,e.attrs),h(e,t),t}function v(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,i,r,o;if(t.transform&&e.css){if(!(o="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=o}if(t.singleton){var s=d++;n=c||(c=g(t)),i=x.bind(null,n,s,!1),r=x.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),h(e,t),t}(t),i=function(e,t,n){var i=n.css,r=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||o)&&(i=m(i));r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([i],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,t),r=function(){f(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(t),i=function(e,t){var n=t.css,i=t.media;i&&e.setAttribute("media",i);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){f(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return u(n,t),function(e){for(var i=[],r=0;r<n.length;r++){var s=n[r];(a=o[s.id]).refs--,i.push(a)}e&&u(p(e,t),t);for(r=0;r<i.length;r++){var a;if(0===(a=i[r]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete o[a.id]}}}};var w,y=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")});function x(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=y(t,r);else{var o=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}},function(e,t,n){var i=n(3);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,r);i.locals&&(e.exports=i.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"* {\n  margin: 0;\n  padding: 0;\n  font-family: 'Roboto', sans-serif;\n}\n\nbody {\n  background-color: #242f42;\n}\n\n.main-wrapper {\n  max-width: 170rem;\n  margin: 0 auto;\n  font-size: 1.5rem;\n}\n\n.content {\n  margin-top: 2rem;\n  font-size: 1rem;\n}\n\n.navigation {\n  margin-top: 2rem;\n}\n\n.hidden {\n  display: none;\n}\n",""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,i=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t,n){var i=n(6);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,r);i.locals&&(e.exports=i.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,'.search-box {\n  margin: 0 auto;\n  text-align: center;\n}\n\n.search-img {\n  padding: 0 1rem;\n  display: inline-block;\n  position: relative;\n  top: 2rem;\n}\n\n.search-input {\n  text-align: center;\n  box-sizing: border-box;\n  border-color: #71a0ec;\n  border-width: 0.8rem;\n  border-radius: 2.4rem;\n  outline: none;\n  max-width: 50%;\n  margin: 2rem 0;\n  padding: 0.1rem 3rem;\n  color: #2b384e;\n  font-weight: 700;\n  font-size: 1.8rem;\n  line-height: 3rem;\n}\n\ninput[type="text"] {\n  background-color : #f3f3f3;\n}\n\n',""])},function(e,t,n){var i=n(8);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,r);i.locals&&(e.exports=i.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".content-list {\n  width: 80rem;\n  height: 31rem;\n  margin: 0 auto;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  overflow: hidden;\n  scroll-behavior: smooth;\n}\n\n.content-list.active {\n  cursor: grabbing;\n}\n\n.content-item {\n  box-sizing: border-box;\n  min-width: 18rem;\n  margin: 0 1rem;\n  border-radius: 2rem;\n  background-color: #486798;\n  border-color: #71a0ec;\n  border-width: 0.8rem;\n  border-style: outset;\n}\n\n.item-inner {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.item-link {\n  text-decoration: none;\n  margin: -0.65rem;\n  height: 3.9rem;\n  padding: 0.7rem 1rem;\n  background-color: #f3f3f3;\n  border-color: #71a0ec;\n  border-width: 1rem;\n  border-style: outset;\n  border-radius: 2.2rem;\n  color: #242f42;\n}\n\n.item-title {\n  font-family: 'Roboto', sans-serif;\n  text-transform: uppercase;\n  font-size: 1.2rem;\n  font-weight: 700;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  line-height: 1.2rem;\n  max-height: 4.3rem;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\n.item-image {\n  box-sizing: border-box;\n  width: 102%;\n  border-color: transparent;\n  border-width: 0.8rem;\n  border-style: solid;\n  border-radius: 2.2rem;\n}\n\n.info-wrapper {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  padding: 0.2rem 0.2rem;\n  height: 2rem;\n  line-height: 2rem;\n  color: #f3f3f3;\n}\n\n.icon {\n  height: 1.5rem;\n  width: 1.5rem;\n  padding: 0 0.3rem;\n}\n\n.views-img {\n  height: 2rem;\n  width: 2rem;\n}\n\n.item-channel {\n  padding: 0 0.7rem  0  0.2rem;\n  font-size: 1.2rem;\n  overflow: hidden;\n}\n\n.item-date {\n  padding: 0 1rem  0  0.2rem;\n  font-size: 0.8rem;\n}\n\n.item-view-count {\n  padding: 0 0.6rem  0  0.2rem;\n  font-size: 0.9rem;\n}\n\n.item-description {\n  margin: 0.2rem 1rem;\n  padding: 1.2rem 0.5rem 2rem 0.5rem;\n  height: 3rem;\n  color: #f3f3f3;\n  border-width: 0.1rem;\n  border-color: #f3f3f3;\n  border-top-style: solid;\n  text-overflow: ellipsis;\n  line-height: 1rem;\n  overflow: hidden;\n  max-height: 4.8rem;\n}\n\n",""])},function(e,t,n){var i=n(10);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,r);i.locals&&(e.exports=i.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".nav-buttons {\n  display: flex;\n  justify-content: center;\n  margin: 0 auto;\n  text-align: center;\n  width: 60%;\n}\n\n.button {\n  margin: 0.5rem;\n  border-radius: 50%;\n  height: 2rem;\n  width: 2rem;\n  background-color: #486798;\n  font-size: 1rem;\n  box-sizing: border-box;\n  padding: 0.4rem 0;\n  color: #f3f3f3;\n}\n\n@media( max-width: 1300px) {\n  .content-list {\n    width: 60rem;\n  }\n\n  .search-input {\n    max-width: 60%;\n    margin: 7vh 0;\n  }\n}\n\n@media( max-width: 968px) {\n\n  .content {\n    margin-top: 3rem;\n  }\n\n  .content-list {\n    width: 40rem;\n  }\n\n  .search-input {\n    margin: 1rem 0;\n    max-width: 70%;\n  }\n\n  .button {\n    height: 2.7rem;\n    width: 2.7rem;\n    font-size: 1.4rem;\n  }\n}\n\n@media( max-width: 635px) {\n  .content {\n    margin-top: 0;\n  }\n\n  .content-list {\n    width: 20rem;\n    height: calc(93vh - 8rem);\n  }\n\n  .search-img {\n    display: none;\n  }\n\n  .search-input {\n    margin: 0.6rem 0;\n    max-width: 90%;\n    border-width: 0.6rem;\n    font-size: 1.2rem;\n    line-height: 2.2rem;\n  }\n\n  .item-link {\n    border-width: 0.7rem;\n    height: 3.5rem;\n  }\n\n  .info-wrapper {\n    padding: 0.1rem 0.1rem;\n    height: 1.8rem;\n    line-height: 1.8rem;\n    color: #f3f3f3;\n  }\n\n  .item-image {\n    height: 10rem;\n    border-width: 0.6rem;\n  }\n\n  .item-description {\n    height: calc(104vh - 36rem);\n  }\n\n  .navigation {\n    margin-top: 0;\n  }\n}\n",""])},function(e,t,n){"use strict";n.r(t);class i{constructor(){this.query="",this.key="AIzaSyAGAgX1KiDiwLdGiP2-pX3ZAxXtXpV_pj0",this.snippetLink=`https://www.googleapis.com/youtube/v3/search?key=${this.key}&type=video&part=snippet&maxResults=15&q=`,this.snippetTokenLink=`https://www.googleapis.com/youtube/v3/search?key=${this.key}&type=video&part=snippet&maxResults=15&pageToken=`,this.idLink=`https://www.googleapis.com/youtube/v3/videos?key=${this.key}&id=`}setUrls(e){this.query=e}getUrls(){return{query:this.query,snippetUrl:`${this.snippetLink}${this.query}`,tokenStart:`${this.snippetTokenLink}`,tokenEnd:`&q=$${this.query}`,idUrl:`${this.idLink}${this.query}`}}}class r{constructor(e){this.state=e,this.snippetData={},this.staticticData={},this.nextPageToken=""}async getData(){const{snippetUrl:e}=this.state,t=await fetch(e);this.snippetData=await t.json(),this.nextPageToken=await this.snippetData.nextPageToken,console.log(this.nextPageToken)}async getViewsData(){let e=this.snippetData.items.reduce((e,t)=>`${e},${t.id.videoId}`,[]);e+="&part=statistics";const{idUrl:t}=this.state,n=await fetch(`${t}${e}`);this.staticticData=await n.json()}getClips(){const e=[];return this.snippetData.items.forEach(t=>{const n={};n.title=t.snippet.title,n.link=`https://www.youtube.com/watch?v=${t.id.videoId}`,n.image=t.snippet.thumbnails.medium.url,n.channelTitle=t.snippet.channelTitle,n.date=t.snippet.publishedAt,n.description=t.snippet.description,e.push(n)}),this.staticticData.items.forEach((t,n)=>{e[n].views=t.statistics.viewCount}),e}async nextClips(){this.state.snippetUrl=this.state.tokenStart+this.nextPageToken+this.state.tokenEnd,await this.getData(),await this.getViewsData()}}n(2);var o=class{constructor(){this.document=document.body}clearContent(){const e=document.getElementById("content-list");for(;e.lastChild;)e.removeChild(e.lastChild)}render(){const e=document.createElement("div");e.className="main-wrapper",this.document.appendChild(e);const t=document.createElement("section");t.className="search",t.setAttribute("id","search"),e.appendChild(t);const n=document.createElement("section");n.className="content",n.setAttribute("id","content"),e.appendChild(n);const i=document.createElement("div");i.className="content-list",i.setAttribute("id","content-list"),n.appendChild(i);const r=document.createElement("section");r.className="navigation hidden",r.setAttribute("id","navigation"),e.appendChild(r)}};n(5);var s=class{constructor(){this.document=document.body}render(){const e=document.getElementById("search"),t=document.createElement("div");t.className="search-box",e.appendChild(t);const n=document.createElement("img");n.className="search-img",n.setAttribute("src","https://cdn.discordapp.com/attachments/336565794165227520/576921165478756352/3-search-cat_icon-icons.com_76679.png"),t.appendChild(n);const i=document.createElement("input");i.className="search-input",i.setAttribute("type","text"),i.setAttribute("id","search-input"),i.setAttribute("placeholder",". . ."),t.appendChild(i)}};n(7);var a=class{constructor(e){this.clipsData=e}render(){const e=document.getElementById("content-list");for(let t=0;t<this.clipsData.length;t+=1){const n=this.clipsData[t],i=document.createElement("div");i.className="content-item",e.appendChild(i);const r=document.createElement("div");r.className="item-inner",i.appendChild(r);const o=document.createElement("a");o.className="item-link",o.setAttribute("href",n.link),r.appendChild(o);const s=document.createElement("div");s.className="item-title";const a=document.createElement("textarea");a.innerHTML=n.title,s.textContent=a.value,o.appendChild(s);const c=document.createElement("img");c.className="item-image",c.setAttribute("src",n.image),r.appendChild(c);const d=document.createElement("div");d.className="info-wrapper",r.appendChild(d);const l=document.createElement("div");l.className="info-wrapper",r.appendChild(l);const m=document.createElement("img");m.className="channel-img icon",m.setAttribute("src","https://image.flaticon.com/icons/svg/1299/1299970.svg"),d.appendChild(m);const u=document.createElement("div");u.className="item-channel",u.textContent=n.channelTitle,d.appendChild(u);const p=document.createElement("img");p.className="date-img icon",p.setAttribute("src","https://image.flaticon.com/icons/svg/1799/1799007.svg"),l.appendChild(p);const h=document.createElement("div");h.className="item-date";const f=new Date(n.date);h.textContent=f.toISOString().split("").slice(0,10).join(""),l.appendChild(h);const g=document.createElement("img");g.className="views-img icon",g.setAttribute("src","https://image.flaticon.com/icons/svg/1799/1799577.svg"),l.appendChild(g);const v=document.createElement("div");v.className="item-view-count",v.textContent=n.views,l.appendChild(v);const b=document.createElement("p");b.className="item-description",b.textContent=n.description,r.appendChild(b)}}};n(9);var c=class{constructor(){this.document=document.body}render(){const e=document.getElementById("navigation"),t=document.createElement("div");t.className="nav-buttons",e.appendChild(t);const n=document.createElement("div");n.className="button hidden",n.setAttribute("id","left-button"),n.textContent="<",t.appendChild(n);const i=document.createElement("div");i.className="button",i.setAttribute("id","center-button"),t.appendChild(i);const r=document.createElement("div");r.className="button",r.setAttribute("id","right-button"),r.textContent=">",t.appendChild(r)}};(new class{constructor(){this.pageNumber=1,this.pageClipsCount=4,this.pageElementWidth=320}async start(){const e={number:this.pageNumber,clipsCount:this.pageClipsCount,elementWidth:this.pageElementWidth},t=new i,n=new o;let d;n.render(),(new s).render(),(new c).render();const l=document.getElementById("search-input"),m=document.getElementById("left-button"),u=document.getElementById("right-button"),p=document.getElementById("center-button");function h(){const t=document.body.clientWidth;e.clipsCount=t<636?1:t>635&&t<969?2:t>968&&t<1301?3:4}async function f(t){const n=document.getElementById("content-list");if("left"===t&&e.number>1)e.number-=1,n.scrollLeft-=e.elementWidth*e.clipsCount;else if("right"===t&&(e.number+=1,n.scrollLeft+=e.elementWidth*e.clipsCount,document.getElementsByClassName("content-item").length<(e.number+1)*e.clipsCount)){await d.nextClips();const e=await d.getClips();new a(e).render()}1===e.number?m.className+=" hidden":m.classList.remove("hidden"),p.textContent=e.number}p.textContent=e.number,h(),window.addEventListener("resize",()=>h()),m.addEventListener("click",()=>f("left")),u.addEventListener("click",()=>f("right")),l.addEventListener("change",async function(){n.clearContent(),t.setUrls(l.value),this.state=t.getUrls(),d=new r(this.state),await d.getData(),await d.getViewsData();const i=d.getClips();new a(i).render(),document.getElementById("navigation").classList.remove("hidden"),1!==e.number&&(m.className+=" hidden",e.number=1,p.textContent=e.number),function(){const e=document.getElementById("content-list");let t,n,i=!1;e.addEventListener("mousedown",n=>{i=!0,e.classList.add("active"),t=n.pageX-e.offsetLeft}),e.addEventListener("mouseleave",()=>{i=!1,e.classList.remove("active")}),e.addEventListener("mouseup",()=>{i=!1,e.classList.remove("active"),f(n>t?"left":"right")}),e.addEventListener("mousemove",t=>{i&&(t.preventDefault(),n=t.pageX-e.offsetLeft)})}(),function(){const e=document.getElementById("content-list");let t,n,i=!1;e.addEventListener("touchstart",n=>{i=!0,t=n.targetTouches[0].screenX-e.offsetLeft}),e.addEventListener("touchend",()=>{i=!1,f(n>t?"left":"right")}),e.addEventListener("touchmove",t=>{i&&(t.preventDefault(),n=t.targetTouches[0].screenX-e.offsetLeft)})}()})}}).start()}]);
//# sourceMappingURL=app.bundle.js.map