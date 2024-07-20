/*! For license information please see 544.d8182b96.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{2899:function(t,n,e){e.d(n,{Z:function(){return d}});var r,o=e(9439),i=e(7689),a=e(1087),c=e(1525),u=e(184),f=function(t){var n=t.movie,e=(0,i.TH)(),r=n.id,o=n.poster_path,f=n.title,s=n.release_date,l=new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),h="/"===e.pathname?"movies/".concat(r):"".concat(r);return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(c.u5,{children:[(0,u.jsx)(a.rU,{to:"".concat(h),state:{from:e},children:(0,u.jsx)(c.Ee,{src:"https://image.tmdb.org/t/p/w300".concat(o),alt:"".concat(f," poster")})}),(0,u.jsxs)("div",{children:[(0,u.jsx)(c.ll,{children:f}),(0,u.jsx)(c.AQ,{children:l})]})]})})},s=e(168),l=e(5867).ZP.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 25px;\n  margin-bottom: 25px;\n"]))),h=e(5984),p=e(4404),d=function(t){var n=t.movies,e=(0,a.lr)(),r=(0,o.Z)(e,2),i=r[0],c=r[1],s=Number(i.get("page")),d=Number(i.get("total"));return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l,{children:n.map((function(t){return(0,u.jsx)(f,{movie:t},(0,h.x0)())}))}),(0,u.jsx)(p.t,{currentPage:s,itemsPerPage:20,onPageChange:function(t){i.set("page",t),c(i)},totalItems:d,customClassNames:{}})]})}},1525:function(t,n,e){e.d(n,{AQ:function(){return h},Ee:function(){return s},ll:function(){return l},u5:function(){return f}});var r,o,i,a,c=e(168),u=e(5867),f=u.ZP.li(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  flex-basis: calc((100% - 4 * 25px) / 5);\n"]))),s=u.ZP.img(o||(o=(0,c.Z)(["\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  width: 100%;\n  overflow: hidden;\n"]))),l=u.ZP.h2(i||(i=(0,c.Z)(["\n  font-weight: 700;\n  font-size: 16px;\n  margin-bottom: 5px;\n"]))),h=u.ZP.p(a||(a=(0,c.Z)(["\n  color: rgba(0, 0, 0, 0.6);\n"])))},9544:function(t,n,e){e.r(n);var r=e(3433),o=e(5861),i=e(9439),a=e(2899),c=e(6966),u=e(854),f=e(2896),s=e(3640),l=e(2791),h=e(7689),p=e(5139),d=e(184);function g(){g=function(){return n};var t,n={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,n,e){t[n]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function f(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{f({},"")}catch(t){f=function(t,n,e){return t[n]=e}}function s(t,n,e,r){var i=n&&n.prototype instanceof y?n:y,a=Object.create(i.prototype),c=new N(r||[]);return o(a,"_invoke",{value:E(t,e,c)}),a}function l(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=s;var h="suspendedStart",p="executing",d="completed",v={};function y(){}function m(){}function x(){}var w={};f(w,a,(function(){return this}));var b=Object.getPrototypeOf,Z=b&&b(b(S([])));Z&&Z!==e&&r.call(Z,a)&&(w=Z);var j=x.prototype=y.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(n){f(t,n,(function(t){return this._invoke(n,t)}))}))}function P(t,n){function e(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var f=u.arg,s=f.value;return s&&"object"==typeof s&&r.call(s,"__await")?n.resolve(s.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):n.resolve(s).then((function(t){f.value=t,a(f)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new n((function(n,o){e(t,r,n,o)}))}return i=i?i.then(o,o):o()}})}function E(n,e,r){var o=h;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=_(c,r);if(u){if(u===v)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=p;var f=l(n,e,r);if("normal"===f.type){if(o=r.done?d:"suspendedYield",f.arg===v)continue;return{value:f.arg,done:r.done}}"throw"===f.type&&(o=d,r.method="throw",r.arg=f.arg)}}}function _(n,e){var r=e.method,o=n.iterator[r];if(o===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,_(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var i=l(o,n.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var a=i.arg;return a?a.done?(e[n.resultName]=a.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function k(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function O(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function S(n){if(n||""===n){var e=n[a];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function e(){for(;++o<n.length;)if(r.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof n+" is not iterable")}return m.prototype=x,o(j,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:m,configurable:!0}),m.displayName=f(x,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},n.awrap=function(t){return{__await:t}},L(P.prototype),f(P.prototype,c,(function(){return this})),n.AsyncIterator=P,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new P(s(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(j),f(j,u,"Generator"),f(j,a,(function(){return this})),f(j,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=S,N.prototype={constructor:N,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function o(r,o){return c.type="throw",c.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),f=r.call(a,"finallyLoc");if(u&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),v},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),v}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:S(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),v}},n}n.default=function(){var t=(0,l.useState)([]),n=(0,i.Z)(t,2),e=n[0],v=n[1],y=(0,l.useState)(!1),m=(0,i.Z)(y,2),x=m[0],w=m[1],b=(0,l.useState)(""),Z=(0,i.Z)(b,2),j=Z[0],L=Z[1],P=(0,h.TH)().pathname,E=(0,h.s0)();return(0,l.useEffect)((function(){"/"!==P&&E("/")}),[E,P]),(0,l.useEffect)((function(){var t,n=new AbortController,e=n.signal;return function(){(t=t||(0,o.Z)(g().mark((function t(){var n,o;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return L(""),w(!0),t.prev=2,t.next=5,(0,p.wr)(e);case 5:n=t.sent,o=n.results,v((function(t){return[].concat((0,r.Z)(t),(0,r.Z)(o))})),t.next=15;break;case 10:if(t.prev=10,t.t0=t.catch(2),"ERR_CANCELED"!==t.t0.code){t.next=14;break}return t.abrupt("return");case 14:L(t.t0.message);case 15:return t.prev=15,w(!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[2,10,15,18]])})))).apply(this,arguments)}(),function(){n.abort()}}),[]),(0,d.jsxs)(c.W2,{children:[(0,d.jsx)(c.$0,{children:(0,d.jsx)(s.Dx,{children:"Trending today"})}),j&&(0,d.jsx)(f.Z,{messageCode:"error",errorCode:j}),x&&(0,d.jsx)(u.a,{}),e.length>0&&(0,d.jsx)(a.Z,{movies:e})]})}},3640:function(t,n,e){e.d(n,{Aq:function(){return L},Dr:function(){return _},Dx:function(){return O},VO:function(){return N},Yt:function(){return C},ZP:function(){return w},g2:function(){return S},h2:function(){return j},n_:function(){return k},sV:function(){return b},xt:function(){return E},z_:function(){return P},zo:function(){return Z}});var r,o,i,a,c,u,f,s,l,h,p,d,g,v,y=e(168),m=e(1087),x=e(5867),w=(0,x.ZP)(m.OL)(r||(r=(0,y.Z)(["\n  height: 46px;\n  display: flex;\n  align-items: center;\n  background-color: #fff;\n\n  &:active {\n    color: rgb(1, 180, 228);\n  }\n"]))),b=x.ZP.div(o||(o=(0,y.Z)(["\n  max-width: 1440px;\n  padding: 0 20px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),Z=x.ZP.div(i||(i=(0,y.Z)(["\n  width: 100%;\n  height: 46px;\n  display: flex;\n  gap: 40px;\n  align-items: center;\n  background-color: #fff;\n"]))),j=x.ZP.div(a||(a=(0,y.Z)(["\n  color: #fff;\n  font-size: 18px;\n  background-size: cover;\n  background-repeat: no-repeat;\n"]))),L=x.ZP.div(c||(c=(0,y.Z)(["\n  padding: 64px 0px;\n  background-image: linear-gradient(\n    to right,\n    rgba(144, 206, 161, 0.84) 10%,\n    rgba(1, 180, 228, 0.84) 40%,\n    rgba(13, 37, 63, 0.84) 100%\n  );\n"]))),P=(x.ZP.div(u||(u=(0,y.Z)(["\n  color: #fff;\n  padding: 0;\n  max-width: initial;\n"]))),x.ZP.div(f||(f=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  max-width: 1000px;\n"])))),E=x.ZP.div(s||(s=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),_=x.ZP.span(l||(l=(0,y.Z)(["\n  padding: 0 20px;\n  position: relative;\n  top: 0;\n  left: 0;\n\n  &::before {\n    content: '\u2022';\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 7px;\n  }\n"]))),k=x.ZP.span(h||(h=(0,y.Z)(["\n  opacity: 0.8;\n  font-weight: 400;\n"]))),O=x.ZP.h2(p||(p=(0,y.Z)(["\n  font-weight: 700;\n  font-size: 36px;\n  margin-top: 20px;\n  margin-bottom: 8px;\n"]))),N=x.ZP.h3(d||(d=(0,y.Z)(["\n  font-size: 20px;\n  font-weight: 400;\n  font-style: italic;\n"]))),S=x.ZP.h3(g||(g=(0,y.Z)(["\n  font-size: 24px;\n  font-weight: 600;\n  margin-top: 10px;\n  margin-bottom: 8px;\n"]))),C=x.ZP.div(v||(v=(0,y.Z)(["\n  display: flex;\n  justify-content: space-evenly;\n  max-width: 1440px;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin: 0 auto;\n"])))}}]);
//# sourceMappingURL=544.d8182b96.chunk.js.map