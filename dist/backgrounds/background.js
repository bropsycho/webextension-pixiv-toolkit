!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=41)}([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(31)("wks"),o=e(32),i=e(0).Symbol,s="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=s&&i[t]||(s?i:o)("Symbol."+t))}).store=r},function(t,n){var e=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=e)},function(t,n,e){"use strict";var r={getBrowser:function(){return window.chrome?window.chrome:window.browser}};n.a=r},function(t,n,e){var r=e(9);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var r=e(0),o=e(2),i=e(13),s=e(6),u=e(15),c=function(t,n,e){var a,f,l,h=t&c.F,p=t&c.G,v=t&c.S,d=t&c.P,g=t&c.B,m=t&c.W,y=p?o:o[n]||(o[n]={}),b=y.prototype,x=p?r:v?r[n]:(r[n]||{}).prototype;for(a in p&&(e=n),e)(f=!h&&x&&void 0!==x[a])&&u(y,a)||(l=f?x[a]:e[a],y[a]=p&&"function"!=typeof x[a]?e[a]:g&&f?i(l,r):m&&x[a]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):d&&"function"==typeof l?i(Function.call,l):l,d&&((y.virtual||(y.virtual={}))[a]=l,t&c.R&&b&&!b[a]&&s(b,a,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n,e){var r=e(8),o=e(28);t.exports=e(7)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){t.exports=!e(21)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(4),o=e(46),i=e(47),s=Object.defineProperty;n.f=e(7)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return s(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports={}},function(t,n,e){"use strict";n.__esModule=!0,n.default=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){"use strict";n.__esModule=!0;var r=function(t){return t&&t.__esModule?t:{default:t}}(e(78));n.default=function(){function t(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,r.default)(t,o.key,o)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}()},function(t,n,e){var r=e(14);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){t.exports={default:e(42),__esModule:!0}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){t.exports=!0},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(9),o=e(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(53),o=e(19);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(31)("keys"),o=e(32);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(8).f,o=e(15),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){"use strict";var r=e(14);t.exports.f=function(t){return new function(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r}),this.resolve=r(n),this.reject=r(e)}(t)}},function(t,n,e){"use strict";var r=e(20),o=e(5),i=e(48),s=e(6),u=e(10),c=e(49),a=e(25),f=e(56),l=e(1)("iterator"),h=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,n,e,v,d,g,m){c(e,n,v);var y,b,x,w=function(t){if(!h&&t in T)return T[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},_=n+" Iterator",j="values"==d,S=!1,T=t.prototype,k=T[l]||T["@@iterator"]||d&&T[d],A=k||w(d),P=d?j?w("entries"):A:void 0,I="Array"==n&&T.entries||k;if(I&&(x=f(I.call(new t)))!==Object.prototype&&x.next&&(a(x,_,!0),r||"function"==typeof x[l]||s(x,l,p)),j&&k&&"values"!==k.name&&(S=!0,A=function(){return k.call(this)}),r&&!m||!h&&!S&&T[l]||s(T,l,A),u[n]=A,u[_]=p,d)if(y={values:j?A:w("values"),keys:g?A:w("keys"),entries:P},m)for(b in y)b in T||i(T,b,y[b]);else o(o.P+o.F*(h||S),n,y);return y}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(52),o=e(33);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(18),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(2),o=e(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(20)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(0).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(19);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(16),o=e(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(s=r(n))&&"function"==typeof n.callee?"Arguments":s}},function(t,n,e){var r=e(4),o=e(14),i=e(1)("species");t.exports=function(t,n){var e,s=r(t).constructor;return void 0===s||void 0==(e=r(s)[i])?n:o(e)}},function(t,n,e){var r,o,i,s=e(13),u=e(67),c=e(34),a=e(22),f=e(0),l=f.process,h=f.setImmediate,p=f.clearImmediate,v=f.MessageChannel,d=f.Dispatch,g=0,m={},y=function(){var t=+this;if(m.hasOwnProperty(t)){var n=m[t];delete m[t],n()}},b=function(t){y.call(t.data)};h&&p||(h=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return m[++g]=function(){u("function"==typeof t?t:Function(t),n)},r(g),g},p=function(t){delete m[t]},"process"==e(16)(l)?r=function(t){l.nextTick(s(y,t,1))}:d&&d.now?r=function(t){d.now(s(y,t,1))}:v?(i=(o=new v).port2,o.port1.onmessage=b,r=s(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",b,!1)):r="onreadystatechange"in a("script")?function(t){c.appendChild(a("script")).onreadystatechange=function(){c.removeChild(this),y.call(t)}}:function(t){setTimeout(s(y,t,1),0)}),t.exports={set:h,clear:p}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,e){var r=e(4),o=e(9),i=e(26);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(17),o=e.n(r),i=e(75),s=e(3),u=e(94),c=e.n(u),a=s.a.getBrowser();function f(){this.enableExtension=!1}f.prototype={run:function(){var t=this;a.storage.local.get(null,function(n){t.enableExtension=!0,t.update(),t.bindActionButton(),t.listenStorageChanged(),t.listenMessage(),t.runSubscribeTask()})},callMessageAction:function(t,n){var e=t+"Action";"function"==typeof this[e]&&this[e].call(this,n)},bindActionButton:function(){a.browserAction.onClicked.addListener(function(){a.browserAction.getBadgeText({},function(t){var n="./options_page/index.html";t&&(n+="#/history"),a.browserAction.setBadgeText({text:""},function(){a.tabs.create({url:a.runtime.getURL(n)})})})})},listenStorageChanged:function(){a.storage.onChanged.addListener(function(t,n){t.enableExtension})},listenMessage:function(){var t=this;a.runtime.onMessage.addListener(function(n,e,r){return n.action&&t.callMessageAction(n.action,{message:n,sender:e,sendResponse:r}),!0})},runSubscribeTask:function(){var t=new c.a;t.task=function(){return new o.a(function(t,n){console.log("run reload subscribe task"),t()})},t.intervalTime=5e3},injectUgoiraAction:function(t){this.enableExtension&&(new i.b).addInjectFiles(["lib/jszip/jszip.js","lib/gifjs/gif.js","lib/whammy.js","js/UgoiraAdapter.js","js/ugoira/ugoira190313.js"]).inject(t.sender.tab.id)},injectMangaAction:function(t){(new i.b).addInjectFiles(["lib/jszip/jszip.js","js/MangaAdapter.js","js/manga/Manga186.js"]).inject(t.sender.tab.id)},activeIconAction:function(t){a.browserAction.setIcon({path:a.runtime.getURL("./icon_active.png"),tabId:t.sender.tab.id})},deactiveIconAction:function(t){a.browserAction.setIcon({path:a.runtime.getURL("./icon.png"),tabId:t.sender.tab.id})},requestPermissionsAction:function(t){a.permissions.request(t.message.permissions,function(n){t.sendResponse&&"function"==typeof t.sendResponse&&t.sendResponse(n)})},removePermissionsAction:function(t){a.permissions.remove(t.message.permissions,function(n){t.sendResponse&&"function"==typeof t.sendResponse&&t.sendResponse(n)})},containsPermissionsAction:function(t){a.permissions.contains(t.message.permissions,function(n){t.sendResponse&&"function"==typeof t.sendResponse&&t.sendResponse(n)})},downloadAction:function(t){a.downloads.download(t.message.options,function(n){t.sendResponse&&"function"==typeof t.sendResponse&&t.sendResponse(n)})},update:function(){i.a.read("manifest.json",function(t){var n=JSON.parse(t).version;a.storage.local.get(null,function(t){var e=new i.c(t);e.isNewer(n)&&(console.log("update"),e.setDefaultSettings({version:n,enableExtend:!1,enableWhenUnderSeconds:1,extendDuration:3,ugoiraRenameFormat:"",mangaRenameFormat:"",mangaImageRenameFormat:"",enableExtension:!0,enablePackUgoiraFramesInfo:!0,mangaPagesInChunk:99,ugoiraGenerateAndDownload:!1,mangaPackAndDownload:!1,enableExtTakeOverDownloads:!1,downloadRelativeLocation:null,showHistoryWhenUpdateCompleted:!0,downloadSaveAs:!1,featureKnown:!1}),e.removeSettings(["metasConfig","mangaMetasConfig","mangaImageNamePrefix","mangaImagesMetasConfig"]),e.mergeSettings(function(){e.updateSetting({version:n},function(){}),t.showHistoryWhenUpdateCompleted?a.tabs.create({url:a.runtime.getURL("./options_page/index.html")+"#/history"}):(a.browserAction.setBadgeText({text:"NEW"}),a.browserAction.setBadgeBackgroundColor({color:"#FF0000"}))}))})})}},(new f).run()},function(t,n,e){e(43),e(44),e(57),e(61),e(73),e(74),t.exports=e(2).Promise},function(t,n){},function(t,n,e){"use strict";var r=e(45)(!0);e(27)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){var r=e(18),o=e(19);t.exports=function(t){return function(n,e){var i,s,u=String(o(n)),c=r(e),a=u.length;return c<0||c>=a?t?"":void 0:(i=u.charCodeAt(c))<55296||i>56319||c+1===a||(s=u.charCodeAt(c+1))<56320||s>57343?t?u.charAt(c):i:t?u.slice(c,c+2):s-56320+(i-55296<<10)+65536}}},function(t,n,e){t.exports=!e(7)&&!e(21)(function(){return 7!=Object.defineProperty(e(22)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(9);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){t.exports=e(6)},function(t,n,e){"use strict";var r=e(50),o=e(28),i=e(25),s={};e(6)(s,e(1)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(s,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(4),o=e(51),i=e(33),s=e(24)("IE_PROTO"),u=function(){},c=function(){var t,n=e(22)("iframe"),r=i.length;for(n.style.display="none",e(34).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function(t,n){var e;return null!==t?(u.prototype=r(t),e=new u,u.prototype=null,e[s]=t):e=c(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(8),o=e(4),i=e(29);t.exports=e(7)?Object.defineProperties:function(t,n){o(t);for(var e,s=i(n),u=s.length,c=0;u>c;)r.f(t,e=s[c++],n[e]);return t}},function(t,n,e){var r=e(15),o=e(23),i=e(54)(!1),s=e(24)("IE_PROTO");t.exports=function(t,n){var e,u=o(t),c=0,a=[];for(e in u)e!=s&&r(u,e)&&a.push(e);for(;n.length>c;)r(u,e=n[c++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(16);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(23),o=e(30),i=e(55);t.exports=function(t){return function(n,e,s){var u,c=r(n),a=o(c.length),f=i(s,a);if(t&&e!=e){for(;a>f;)if((u=c[f++])!=u)return!0}else for(;a>f;f++)if((t||f in c)&&c[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){var r=e(18),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(15),o=e(35),i=e(24)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,n,e){e(58);for(var r=e(0),o=e(6),i=e(10),s=e(1)("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<u.length;c++){var a=u[c],f=r[a],l=f&&f.prototype;l&&!l[s]&&o(l,s,a),i[a]=i.Array}},function(t,n,e){"use strict";var r=e(59),o=e(60),i=e(10),s=e(23);t.exports=e(27)(Array,"Array",function(t,n){this._t=s(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n){t.exports=function(){}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){"use strict";var r,o,i,s,u=e(20),c=e(0),a=e(13),f=e(36),l=e(5),h=e(9),p=e(14),v=e(62),d=e(63),g=e(37),m=e(38).set,y=e(68)(),b=e(26),x=e(39),w=e(69),_=e(40),j=c.TypeError,S=c.process,T=S&&S.versions,k=T&&T.v8||"",A=c.Promise,P="process"==f(S),I=function(){},O=o=b.f,E=!!function(){try{var t=A.resolve(1),n=(t.constructor={})[e(1)("species")]=function(t){t(I,I)};return(P||"function"==typeof PromiseRejectionEvent)&&t.then(I)instanceof n&&0!==k.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(t){}}(),R=function(t){var n;return!(!h(t)||"function"!=typeof(n=t.then))&&n},M=function(t,n){if(!t._n){t._n=!0;var e=t._c;y(function(){for(var r=t._v,o=1==t._s,i=0,s=function(n){var e,i,s,u=o?n.ok:n.fail,c=n.resolve,a=n.reject,f=n.domain;try{u?(o||(2==t._h&&F(t),t._h=1),!0===u?e=r:(f&&f.enter(),e=u(r),f&&(f.exit(),s=!0)),e===n.promise?a(j("Promise-chain cycle")):(i=R(e))?i.call(e,c,a):c(e)):a(r)}catch(t){f&&!s&&f.exit(),a(t)}};e.length>i;)s(e[i++]);t._c=[],t._n=!1,n&&!t._h&&L(t)})}},L=function(t){m.call(c,function(){var n,e,r,o=t._v,i=C(t);if(i&&(n=x(function(){P?S.emit("unhandledRejection",o,t):(e=c.onunhandledrejection)?e({promise:t,reason:o}):(r=c.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=P||C(t)?2:1),t._a=void 0,i&&n.e)throw n.v})},C=function(t){return 1!==t._h&&0===(t._a||t._c).length},F=function(t){m.call(c,function(){var n;P?S.emit("rejectionHandled",t):(n=c.onrejectionhandled)&&n({promise:t,reason:t._v})})},B=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),M(n,!0))},D=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw j("Promise can't be resolved itself");(n=R(t))?y(function(){var r={_w:e,_d:!1};try{n.call(t,a(D,r,1),a(B,r,1))}catch(t){B.call(r,t)}}):(e._v=t,e._s=1,M(e,!1))}catch(t){B.call({_w:e,_d:!1},t)}}};E||(A=function(t){v(this,A,"Promise","_h"),p(t),r.call(this);try{t(a(D,this,1),a(B,this,1))}catch(t){B.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=e(70)(A.prototype,{then:function(t,n){var e=O(g(this,A));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=P?S.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&M(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=a(D,t,1),this.reject=a(B,t,1)},b.f=O=function(t){return t===A||t===s?new i(t):o(t)}),l(l.G+l.W+l.F*!E,{Promise:A}),e(25)(A,"Promise"),e(71)("Promise"),s=e(2).Promise,l(l.S+l.F*!E,"Promise",{reject:function(t){var n=O(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(u||!E),"Promise",{resolve:function(t){return _(u&&this===s?A:this,t)}}),l(l.S+l.F*!(E&&e(72)(function(t){A.all(t).catch(I)})),"Promise",{all:function(t){var n=this,e=O(n),r=e.resolve,o=e.reject,i=x(function(){var e=[],i=0,s=1;d(t,!1,function(t){var u=i++,c=!1;e.push(void 0),s++,n.resolve(t).then(function(t){c||(c=!0,e[u]=t,--s||r(e))},o)}),--s||r(e)});return i.e&&o(i.v),e.promise},race:function(t){var n=this,e=O(n),r=e.reject,o=x(function(){d(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o.e&&r(o.v),e.promise}})},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var r=e(13),o=e(64),i=e(65),s=e(4),u=e(30),c=e(66),a={},f={};(n=t.exports=function(t,n,e,l,h){var p,v,d,g,m=h?function(){return t}:c(t),y=r(e,l,n?2:1),b=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(p=u(t.length);p>b;b++)if((g=n?y(s(v=t[b])[0],v[1]):y(t[b]))===a||g===f)return g}else for(d=m.call(t);!(v=d.next()).done;)if((g=o(d,y,v.value,n))===a||g===f)return g}).BREAK=a,n.RETURN=f},function(t,n,e){var r=e(4);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(10),o=e(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){var r=e(36),o=e(1)("iterator"),i=e(10);t.exports=e(2).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,e){var r=e(0),o=e(38).set,i=r.MutationObserver||r.WebKitMutationObserver,s=r.process,u=r.Promise,c="process"==e(16)(s);t.exports=function(){var t,n,e,a=function(){var r,o;for(c&&(r=s.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(c)e=function(){s.nextTick(a)};else if(!i||r.navigator&&r.navigator.standalone)if(u&&u.resolve){var f=u.resolve(void 0);e=function(){f.then(a)}}else e=function(){o.call(r,a)};else{var l=!0,h=document.createTextNode("");new i(a).observe(h,{characterData:!0}),e=function(){h.data=l=!l}}return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},function(t,n,e){var r=e(0).navigator;t.exports=r&&r.userAgent||""},function(t,n,e){var r=e(6);t.exports=function(t,n,e){for(var o in n)e&&t[o]?t[o]=n[o]:r(t,o,n[o]);return t}},function(t,n,e){"use strict";var r=e(0),o=e(2),i=e(8),s=e(7),u=e(1)("species");t.exports=function(t){var n="function"==typeof o[t]?o[t]:r[t];s&&n&&!n[u]&&i.f(n,u,{configurable:!0,get:function(){return this}})}},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],s=i[r]();s.next=function(){return{done:e=!0}},i[r]=function(){return s},t(i)}catch(t){}return e}},function(t,n,e){"use strict";var r=e(5),o=e(2),i=e(0),s=e(37),u=e(40);r(r.P+r.R,"Promise",{finally:function(t){var n=s(this,o.Promise||i.Promise),e="function"==typeof t;return this.then(e?function(e){return u(n,t()).then(function(){return e})}:t,e?function(e){return u(n,t()).then(function(){throw e})}:t)}})},function(t,n,e){"use strict";var r=e(5),o=e(26),i=e(39);r(r.S,"Promise",{try:function(t){var n=o.f(this),e=i(t);return(e.e?n.reject:n.resolve)(e.v),n.promise}})},function(t,n,e){"use strict";e(76);var r=e(77),o=e(87),i=e(88);e.d(n,"b",function(){return r.a}),e.d(n,"a",function(){return o.a}),e.d(n,"c",function(){return i.a})},function(t,n,e){"use strict"},function(t,n,e){"use strict";var r=e(17),o=e.n(r),i=e(11),s=e.n(i),u=e(12),c=e.n(u),a=e(81),f=function(){function t(){s()(this,t),this.browserTabs=a.a.getTabs(),this.injectDetails=[],this.injectFiles=[],this.injectedFiles=[]}return c()(t,[{key:"reset",value:function(){return this.injectDetails=this.injectFiles=[],this}},{key:"addInjectFiles",value:function(t){var n=this;return t.forEach(function(t){n.appendInjectDetail({file:t,runAt:"document_end"})}),this}},{key:"appendInjectDetail",value:function(t){return this.injectDetails.push(t),this}},{key:"inject",value:function(t){var n=this;return new o.a(function(e){n.injectDetails.forEach(function(r,o){n.injectedFiles.indexOf(r.file)>-1||(o==n.injectDetails.length-1?n.browserTabs.executeScript(t,r,function(){e()}):n.browserTabs.executeScript(t,r),n.injectedFiles.push(r.file))})})}}]),t}();n.a=f},function(t,n,e){t.exports={default:e(79),__esModule:!0}},function(t,n,e){e(80);var r=e(2).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},function(t,n,e){var r=e(5);r(r.S+r.F*!e(7),"Object",{defineProperty:e(8).f})},function(t,n,e){"use strict";e(82),e(83);var r=e(84);e(85),e(86);e.d(n,"a",function(){return r.a})},function(t,n,e){"use strict";var r=e(11),o=e.n(r),i=e(12),s=e.n(i),u=e(3);!function(){function t(){o()(this,t),this.runtime=u.a.getBrowser().runtime}s()(t,null,[{key:"getInstance",value:function(){return void 0!==t.instance?t.instance:t.instance=new t}},{key:"getRuntime",value:function(){return t.getInstance().runtime}}])}()},function(t,n,e){"use strict";var r=e(17),o=e.n(r),i=e(11),s=e.n(i),u=e(12),c=e.n(u),a=e(3);!function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"local";s()(this,t),this.storage=a.a.getBrowser().storage,this.storageArea=this.storage[n]}c()(t,[{key:"get",value:function(t){var n=this;return new o.a(function(e){n.storageArea.get(t,function(t){e(t)})})}},{key:"set",value:function(t){var n=this;return new o.a(function(e){n.storageArea.set(t,function(){e()})})}},{key:"remove",value:function(t){var n=this;return new o.a(function(e){n.storageArea.remove(t,function(){e()})})}},{key:"onChanged",value:function(){return this.storage.onChanged}}],[{key:"getInstance",value:function(n){return void 0!==t.instance?t.instance:t.instance=new t(n)}},{key:"getStorage",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"local";return t.getInstance(n).storageArea}}])}()},function(t,n,e){"use strict";var r=e(11),o=e.n(r),i=e(12),s=e.n(i),u=e(3),c=function(){function t(){o()(this,t),this.tabs=u.a.getBrowser().tabs}return s()(t,null,[{key:"getInstance",value:function(){return void 0!==t.instance?t.instance:t.instance=new t}},{key:"getTabs",value:function(){return t.getInstance().tabs}}]),t}();n.a=c},function(t,n,e){"use strict";var r=e(3);function o(){this.browser=r.a.getBrowser(),this.autoRender=!1,this.tabId,this.backgroundColor,this.text}o.prototype={setAutoRender:function(t){this.autoRender=t},setTabId:function(t){return this.tabId=t,this.conditionRender(),this},setBackgroundColor:function(t){return this.backgroundColor=t,this.conditionRender(),this},setText:function(t){return this.text=t,this.conditionRender(),this},conditionRender:function(){this.autoRender&&this.render()},render:function(){browser.browserAction.setBadgeText({text:this.text,tabId:this.tabId}),browser.browserAction.setBadgeBackgroundColor({color:this.bgColor,tabId:this.tabId})}}},function(t,n,e){"use strict";var r=e(11),o=e.n(r),i=e(12),s=e.n(i),u=e(3);!function(){function t(){o()(this,t),this.i18n=u.a.getBrowser().i18n}s()(t,null,[{key:"getInstance",value:function(){return t.instance?t.instance:t.instance=new t}},{key:"getI18n",value:function(){return t.getInstance().i18n}}])}()},function(t,n,e){"use strict";var r=e(3);function o(){}o.read=function(t,n){r.a.getBrowser().runtime.getPackageDirectoryEntry(function(e){e.getFile(t,void 0,function(t){t.file(function(t){var e=new FileReader;e.addEventListener("load",function(t){n(e.result)}),e.readAsText(t)})})})},n.a=o},function(t,n,e){"use strict";var r=e(89),o=e.n(r),i=e(3),s=e(93),u=e.n(s);function c(t){this.currentSettings=t,this.browser=i.a.getBrowser(),this.defaultSettings}c.prototype={setDefaultSettings:function(t){return this.defaultSettings=t,this},removeSettings:function(t){this.browser.storage.local.remove(t)},mergeSettings:function(t){var n=this;o()(this.defaultSettings).forEach(function(t){void 0===n.currentSettings[t]&&(n.currentSettings[t]=n.defaultSettings[t])}),this.storageSettings(this.currentSettings,t)},updateSetting:function(t,n){this.storageSettings(t,n)},storageSettings:function(t,n){var e=this;this.browser.storage.local.set(t,function(){n.call(e)})},isNewer:function(t){return!this.currentSettings.version||u()(this.currentSettings.version,t)<0}},n.a=c},function(t,n,e){t.exports={default:e(90),__esModule:!0}},function(t,n,e){e(91),t.exports=e(2).Object.keys},function(t,n,e){var r=e(35),o=e(29);e(92)("keys",function(){return function(t){return o(r(t))}})},function(t,n,e){var r=e(5),o=e(2),i=e(21);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],s={};s[t]=n(e),r(r.S+r.F*i(function(){e(1)}),"Object",s)}},function(t,n){t.exports=function(t,n,e){var r=e&&e.lexicographical,o=e&&e.zeroExtend,i=t.split("."),s=n.split(".");function u(t){return(r?/^\d+[A-Za-z]*$/:/^\d+$/).test(t)}if(!i.every(u)||!s.every(u))return NaN;if(o){for(;i.length<s.length;)i.push("0");for(;s.length<i.length;)s.push("0")}r||(i=i.map(Number),s=s.map(Number));for(var c=0;c<i.length;++c){if(s.length==c)return 1;if(i[c]!=s[c])return i[c]>s[c]?1:-1}return i.length!=s.length?-1:0}},function(t,n){function e(){this.intervalTime,this.taskTimeout,this.task,this.status=e.IDLE,this.run=function(){var t=this;"function"==typeof this.task&&(this.status===e.WAITING||this.status===e.IDLE)&&this.intervalTime>1e3&&this.task().then(function(){t.status=e.COMPLETE,t.scheduleNext()}).catch(function(){t.status=e.FAILURE,t.scheduleNext()})},this.scheduleNext=function(){var t=this;this.taskTimeout=setTimeout(function(){t.run()},this.intervalTime),this.status=e.WAITING},this.stop=function(){this.taskTimeout&&clearTimeout(this.taskTimeout)}}e.IDLE=0,e.WAITING=1,e.COMPLETE=2,e.FAILURE=3,t.exports=e}]);