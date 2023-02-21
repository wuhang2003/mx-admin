import{_ as L}from"./preload-helper-f651ca80.js";import{c as M,v as b,A as $,G as j,w as G,x as z,y as Q,z as Y,B as D}from"./app-4e878528.js";var _={},H={get exports(){return _},set exports(s){_=s}};(function(s,m){(function(v,g){s.exports=g()})(M,function(){/*! *****************************************************************************
	    Copyright (c) Microsoft Corporation. All rights reserved.
	    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	    this file except in compliance with the License. You may obtain a copy of the
	    License at http://www.apache.org/licenses/LICENSE-2.0

	    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	    MERCHANTABLITY OR NON-INFRINGEMENT.

	    See the Apache Version 2.0 License for specific language governing permissions
	    and limitations under the License.
	    ***************************************************************************** */var v=function(){return(v=Object.assign||function(r){for(var e,t=1,o=arguments.length;t<o;t++)for(var n in e=arguments[t])Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}).apply(this,arguments)};function g(r,e,t){return r<e?e:r>t?t:r}function k(r,e){var t=I(r),o=t+e;C(t,e)||(r.className=o.substring(1))}function I(r){return(" "+(r&&r.className||"")+" ").replace(/\s+/gi," ")}function C(r,e){return r.indexOf(" "+e+" ")>=0}function w(r){return String(100*(-1+r))}var q=function(){var r=["Webkit","O","Moz","ms"],e={};function t(n){return n=n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(i,a){return a.toUpperCase()}),e[n]||(e[n]=function(i){var a=document.body.style;if(i in a)return i;for(var f,c=r.length,p=i.charAt(0).toUpperCase()+i.slice(1);c--;)if((f=r[c]+p)in a)return f;return i}(n))}function o(n,i,a){i=t(i),n.style[i]=a}return function(n,i){var a,f,c=arguments;if(c.length===2)for(a in i)f=i[a],i.hasOwnProperty(a)&&o(n,a,f);else o(n,c[1],c[2])}}(),W=function(){var r=[];function e(){var t=r.shift();t&&t(e)}return function(t){r.push(t),r.length===1&&e()}}();function T(r,e){var t=I(r),o="";C(t,e)&&(o=t.replace(" "+e+" "," "),r.className=o.substring(1,o.length-1))}return function(r,e){e===void 0&&(e={});var t=e.insertAt;if(r&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t==="top"&&o.firstChild?o.insertBefore(n,o.firstChild):o.appendChild(n),n.styleSheet?n.styleSheet.cssText=r:n.appendChild(document.createTextNode(r))}}("#qprogress{pointer-events:none}#qprogress .bar{position:fixed;z-index:999999;top:0;left:0;width:100%;height:2px}#qprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;opacity:1;-webkit-transform:rotate(3deg) translateY(-4px);transform:rotate(3deg) translateY(-4px)}.qprogress-custom-parent{overflow:hidden;position:relative}.qprogress-custom-parent #qprogress .bar{position:absolute}#qprogress .colorful-bar{background:-webkit-gradient(linear,left top,right top,from(#1890ff),color-stop(#13c2c2),color-stop(#52c41a),color-stop(#fa8c16),color-stop(#fa541c),color-stop(#f5222d),to(#1890ff));background:linear-gradient(90deg,#1890ff,#13c2c2,#52c41a,#fa8c16,#fa541c,#f5222d,#1890ff);-webkit-animation:ins 2s linear infinite;animation:ins 2s linear infinite;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out;-webkit-transform-origin:left;transform-origin:left;background-size:500%}@-webkit-keyframes ins{0%{background-position:0 0}to{background-position:125% 0}}@keyframes ins{0%{background-position:0 0}to{background-position:125% 0}}"),function(){function r(e){this.status=null,this.config=v({minimum:.12,height:2,color:"#1890ff",colorful:!0,easing:"ease",speed:400,positionUsing:"",trickle:!0,trickleSpeed:400,parentNode:"body",barSelector:'[role="bar"]',pegSelector:'[role="peg"]',template:'<div class="bar" role="bar"><div class="peg" role="peg"></div></div>'},e)}return r.prototype.set=function(e){var t=this.isStarted();e=g(e,this.config.minimum,1),this.status=e===1?null:e;var o=this.config,n=o.barSelector,i=o.speed,a=o.easing,f=o.parentNode,c=this.config.positionUsing,p=this.render(!t),h=p.querySelector(n),l=i,E=a;p.offsetWidth,W(function(x){var u,N;c===""&&(u=document.body.style,c=(N="webkitTransform"in u?"webkit":"mozTransform"in u?"moz":"msTransform"in u?"ms":"oTransform"in u?"o":"")+"Perspective"in u?"translate3d":N+"Transform"in u?"translate":"margin"),q(h,function(d,y,S,O){var A;return(A=O==="translate3d"?{transform:"translate3d("+w(d)+"%, 0, 0)"}:O==="translate"?{transform:"translate("+w(d)+"%, 0)"}:{"margin-left":w(d)+"%"}).transition="all "+y+"ms "+S,A}(e,l,E,c)),e===1?(q(p,{transition:"none",opacity:1}),p.offsetWidth,setTimeout(function(){q(p,{transition:"all "+l+"ms linear",opacity:0}),setTimeout(function(){(function(d){T(document.documentElement,"qprogress-busy"),typeof d=="string"&&d.length!==0?T(document.querySelector(d),"qprogress-custom-parent"):T(d,"qprogress-custom-parent");var y,S=document.getElementById("qprogress");S&&(y=S)&&y.parentNode&&y.parentNode.removeChild(y)})(f),x()},l)},l)):setTimeout(x,l)})},r.prototype.isStarted=function(){return typeof this.status=="number"},r.prototype.start=function(){var e=this,t=this.config,o=t.trickle,n=t.trickleSpeed;this.status||this.set(0);var i=function(){setTimeout(function(){e.status&&(e.trickle(),i())},n)};o&&i()},r.prototype.finish=function(e){(e||this.status)&&(this.inc(.3+.5*Math.random()),this.set(1))},r.prototype.trickle=function(){this.inc()},r.prototype.inc=function(e){var t=this.status;return t?t>1?void 0:(typeof e!="number"&&(e=t>=0&&t<.2?.1:t>=.2&&t<.5?.04:t>=.5&&t<.8?.02:t>=.8&&t<.99?.005:0),t=g(t+e,0,.994),this.set(t)):this.start()},r.prototype.isRendered=function(){return!!document.getElementById("qprogress")},r.prototype.render=function(e){if(this.isRendered())return document.getElementById("qprogress");k(document.documentElement,"qprogress-busy");var t=this.config,o=t.template,n=t.barSelector,i=t.pegSelector,a=t.parentNode,f=t.height,c=t.color,p=t.colorful,h=document.createElement("div");h.id="qprogress",h.innerHTML=o;var l=h.querySelector(n),E=l.querySelector(i),x=e?"-100":w(this.status||0),u=typeof a=="string"?document.querySelector(a):a;return q(l,{height:f+"px",backgroundColor:c,transition:"all 0 linear",transform:"translate3d("+x+"%, 0, 0)"}),p?l&&k(l,"colorful-bar"):q(E,{boxShadow:"0 0 10px "+c+", 0 0 5px "+c}),u!==document.body&&k(u,"qprogress-custom-parent"),u.appendChild(h),h},r}()})})(H);const V=_,P=new V({colorful:!1,color:"#1a9cf3"}),R=D.title;let U=!1,B=0;b.beforeEach(async s=>{if(s.path!=="/setup-api"){if(!$||!j)return"/setup-api";if(P.start(),s.path==="/setup"){const m=await G();if(console.log("[isInit]",m),m)return"/"}if(!(s.meta.isPublic||s.fullPath.startsWith("/dev"))){const m=+new Date;if(m-B<1e3*60*5)return;const{ok:v}=await z.api("master")("check_logged").get();if(B=m,v){if(U)return;await z.api.master.login.put().then(g=>{U=!0,Q(),Y(g.token),L(()=>import("./index-a2bda7ea.js"),["js/index-a2bda7ea.js","js/app-4e878528.js","js/Button-5ec267f1.js","js/use-store-ref-4d0ce661.js","js/preload-helper-f651ca80.js","js/Spin-2c3e5ca3.js","js/Card-73dd4072.js","assets/app-d47fc5b4.css","js/index-3fb38004.js","js/types-a9f3cfbf.js"]).then(k=>{k.socket.initIO()})}).catch(g=>{console.log("登陆失败"),location.reload()})}else return`/login?from=${encodeURI(s.fullPath)}`}}});b.afterEach((s,m)=>{document.title=F(s?.meta.title),P.finish()});b.afterEach(s=>{s.hash=="|publish"&&b.replace({...s,hash:""})});b.onError(s=>{if(P.finish(),s=="网络错误")return b.push("/setup-api")});function F(s){return s?`${s} - ${R}`:`${R}`}
