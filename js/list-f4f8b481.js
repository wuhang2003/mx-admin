import{d as St,s as ft,g as Bt,R as nt,u as Yt,aL as Ht,x as Lt,h as P,F as Wt,A as Gt,C as zt,aw as ct,m as jt,l as qt,k as qe,J as Vt}from"./index-67dc47c7.js";import{T as Ut}from"./title-link-b85e4dd8.js";import{R as $t}from"./relative-time-3734ee51.js";import{H as Kt}from"./rounded-button-ab449e11.js";import{N as Zt}from"./Popconfirm-e1dd47fe.js";import"./ExternalLink-c1d1384e.js";import"./endpoint-acf56c8f.js";import"./Ellipsis-7681cd3c.js";import"./Tooltip-6382741e.js";/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function ht(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,o)}return t}function q(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ht(Object(t),!0).forEach(function(o){Jt(n,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):ht(Object(t)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(t,o))})}return n}function ke(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ke=function(e){return typeof e}:ke=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ke(n)}function Jt(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function V(){return V=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},V.apply(this,arguments)}function Qt(n,e){if(n==null)return{};var t={},o=Object.keys(n),i,r;for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&(t[i]=n[i]);return t}function en(n,e){if(n==null)return{};var t=Qt(n,e),o,i;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)o=r[i],!(e.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(t[o]=n[o])}return t}var tn="1.15.0";function K(n){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(n)}var Z=K(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Ie=K(/Edge/i),pt=K(/firefox/i),De=K(/safari/i)&&!K(/chrome/i)&&!K(/android/i),Dt=K(/iP(ad|od|hone)/i),_t=K(/chrome/i)&&K(/android/i),Tt={capture:!1,passive:!1};function w(n,e,t){n.addEventListener(e,t,!Z&&Tt)}function b(n,e,t){n.removeEventListener(e,t,!Z&&Tt)}function He(n,e){if(e){if(e[0]===">"&&(e=e.substring(1)),n)try{if(n.matches)return n.matches(e);if(n.msMatchesSelector)return n.msMatchesSelector(e);if(n.webkitMatchesSelector)return n.webkitMatchesSelector(e)}catch{return!1}return!1}}function nn(n){return n.host&&n!==document&&n.host.nodeType?n.host:n.parentNode}function z(n,e,t,o){if(n){t=t||document;do{if(e!=null&&(e[0]===">"?n.parentNode===t&&He(n,e):He(n,e))||o&&n===t)return n;if(n===t)break}while(n=nn(n))}return null}var gt=/\s+/g;function A(n,e,t){if(n&&e)if(n.classList)n.classList[t?"add":"remove"](e);else{var o=(" "+n.className+" ").replace(gt," ").replace(" "+e+" "," ");n.className=(o+(t?" "+e:"")).replace(gt," ")}}function p(n,e,t){var o=n&&n.style;if(o){if(t===void 0)return document.defaultView&&document.defaultView.getComputedStyle?t=document.defaultView.getComputedStyle(n,""):n.currentStyle&&(t=n.currentStyle),e===void 0?t:t[e];!(e in o)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),o[e]=t+(typeof t=="string"?"":"px")}}function he(n,e){var t="";if(typeof n=="string")t=n;else do{var o=p(n,"transform");o&&o!=="none"&&(t=o+" "+t)}while(!e&&(n=n.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(t)}function Ct(n,e,t){if(n){var o=n.getElementsByTagName(e),i=0,r=o.length;if(t)for(;i<r;i++)t(o[i],i);return o}return[]}function j(){var n=document.scrollingElement;return n||document.documentElement}function C(n,e,t,o,i){if(!(!n.getBoundingClientRect&&n!==window)){var r,a,l,s,u,c,f;if(n!==window&&n.parentNode&&n!==j()?(r=n.getBoundingClientRect(),a=r.top,l=r.left,s=r.bottom,u=r.right,c=r.height,f=r.width):(a=0,l=0,s=window.innerHeight,u=window.innerWidth,c=window.innerHeight,f=window.innerWidth),(e||t)&&n!==window&&(i=i||n.parentNode,!Z))do if(i&&i.getBoundingClientRect&&(p(i,"transform")!=="none"||t&&p(i,"position")!=="static")){var m=i.getBoundingClientRect();a-=m.top+parseInt(p(i,"border-top-width")),l-=m.left+parseInt(p(i,"border-left-width")),s=a+r.height,u=l+r.width;break}while(i=i.parentNode);if(o&&n!==window){var y=he(i||n),v=y&&y.a,E=y&&y.d;y&&(a/=E,l/=v,f/=v,c/=E,s=a+c,u=l+f)}return{top:a,left:l,bottom:s,right:u,width:f,height:c}}}function mt(n,e,t){for(var o=ne(n,!0),i=C(n)[e];o;){var r=C(o)[t],a=void 0;if(t==="top"||t==="left"?a=i>=r:a=i<=r,!a)return o;if(o===j())break;o=ne(o,!1)}return!1}function pe(n,e,t,o){for(var i=0,r=0,a=n.children;r<a.length;){if(a[r].style.display!=="none"&&a[r]!==h.ghost&&(o||a[r]!==h.dragged)&&z(a[r],t.draggable,n,!1)){if(i===e)return a[r];i++}r++}return null}function lt(n,e){for(var t=n.lastElementChild;t&&(t===h.ghost||p(t,"display")==="none"||e&&!He(t,e));)t=t.previousElementSibling;return t||null}function M(n,e){var t=0;if(!n||!n.parentNode)return-1;for(;n=n.previousElementSibling;)n.nodeName.toUpperCase()!=="TEMPLATE"&&n!==h.clone&&(!e||He(n,e))&&t++;return t}function vt(n){var e=0,t=0,o=j();if(n)do{var i=he(n),r=i.a,a=i.d;e+=n.scrollLeft*r,t+=n.scrollTop*a}while(n!==o&&(n=n.parentNode));return[e,t]}function on(n,e){for(var t in n)if(n.hasOwnProperty(t)){for(var o in e)if(e.hasOwnProperty(o)&&e[o]===n[t][o])return Number(t)}return-1}function ne(n,e){if(!n||!n.getBoundingClientRect)return j();var t=n,o=!1;do if(t.clientWidth<t.scrollWidth||t.clientHeight<t.scrollHeight){var i=p(t);if(t.clientWidth<t.scrollWidth&&(i.overflowX=="auto"||i.overflowX=="scroll")||t.clientHeight<t.scrollHeight&&(i.overflowY=="auto"||i.overflowY=="scroll")){if(!t.getBoundingClientRect||t===document.body)return j();if(o||e)return t;o=!0}}while(t=t.parentNode);return j()}function rn(n,e){if(n&&e)for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n}function Ve(n,e){return Math.round(n.top)===Math.round(e.top)&&Math.round(n.left)===Math.round(e.left)&&Math.round(n.height)===Math.round(e.height)&&Math.round(n.width)===Math.round(e.width)}var _e;function Ot(n,e){return function(){if(!_e){var t=arguments,o=this;t.length===1?n.call(o,t[0]):n.apply(o,t),_e=setTimeout(function(){_e=void 0},e)}}}function an(){clearTimeout(_e),_e=void 0}function It(n,e,t){n.scrollLeft+=e,n.scrollTop+=t}function At(n){var e=window.Polymer,t=window.jQuery||window.Zepto;return e&&e.dom?e.dom(n).cloneNode(!0):t?t(n).clone(!0)[0]:n.cloneNode(!0)}var B="Sortable"+new Date().getTime();function ln(){var n=[],e;return{captureAnimationState:function(){if(n=[],!!this.options.animation){var o=[].slice.call(this.el.children);o.forEach(function(i){if(!(p(i,"display")==="none"||i===h.ghost)){n.push({target:i,rect:C(i)});var r=q({},n[n.length-1].rect);if(i.thisAnimationDuration){var a=he(i,!0);a&&(r.top-=a.f,r.left-=a.e)}i.fromRect=r}})}},addAnimationState:function(o){n.push(o)},removeAnimationState:function(o){n.splice(on(n,{target:o}),1)},animateAll:function(o){var i=this;if(!this.options.animation){clearTimeout(e),typeof o=="function"&&o();return}var r=!1,a=0;n.forEach(function(l){var s=0,u=l.target,c=u.fromRect,f=C(u),m=u.prevFromRect,y=u.prevToRect,v=l.rect,E=he(u,!0);E&&(f.top-=E.f,f.left-=E.e),u.toRect=f,u.thisAnimationDuration&&Ve(m,f)&&!Ve(c,f)&&(v.top-f.top)/(v.left-f.left)===(c.top-f.top)/(c.left-f.left)&&(s=un(v,m,y,i.options)),Ve(f,c)||(u.prevFromRect=c,u.prevToRect=f,s||(s=i.options.animation),i.animate(u,v,f,s)),s&&(r=!0,a=Math.max(a,s),clearTimeout(u.animationResetTimer),u.animationResetTimer=setTimeout(function(){u.animationTime=0,u.prevFromRect=null,u.fromRect=null,u.prevToRect=null,u.thisAnimationDuration=null},s),u.thisAnimationDuration=s)}),clearTimeout(e),r?e=setTimeout(function(){typeof o=="function"&&o()},a):typeof o=="function"&&o(),n=[]},animate:function(o,i,r,a){if(a){p(o,"transition",""),p(o,"transform","");var l=he(this.el),s=l&&l.a,u=l&&l.d,c=(i.left-r.left)/(s||1),f=(i.top-r.top)/(u||1);o.animatingX=!!c,o.animatingY=!!f,p(o,"transform","translate3d("+c+"px,"+f+"px,0)"),this.forRepaintDummy=sn(o),p(o,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),p(o,"transform","translate3d(0,0,0)"),typeof o.animated=="number"&&clearTimeout(o.animated),o.animated=setTimeout(function(){p(o,"transition",""),p(o,"transform",""),o.animated=!1,o.animatingX=!1,o.animatingY=!1},a)}}}}function sn(n){return n.offsetWidth}function un(n,e,t,o){return Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))/Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))*o.animation}var ue=[],Ue={initializeByDefault:!0},Ae={mount:function(e){for(var t in Ue)Ue.hasOwnProperty(t)&&!(t in e)&&(e[t]=Ue[t]);ue.forEach(function(o){if(o.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),ue.push(e)},pluginEvent:function(e,t,o){var i=this;this.eventCanceled=!1,o.cancel=function(){i.eventCanceled=!0};var r=e+"Global";ue.forEach(function(a){t[a.pluginName]&&(t[a.pluginName][r]&&t[a.pluginName][r](q({sortable:t},o)),t.options[a.pluginName]&&t[a.pluginName][e]&&t[a.pluginName][e](q({sortable:t},o)))})},initializePlugins:function(e,t,o,i){ue.forEach(function(l){var s=l.pluginName;if(!(!e.options[s]&&!l.initializeByDefault)){var u=new l(e,t,e.options);u.sortable=e,u.options=e.options,e[s]=u,V(o,u.defaults)}});for(var r in e.options)if(e.options.hasOwnProperty(r)){var a=this.modifyOption(e,r,e.options[r]);typeof a<"u"&&(e.options[r]=a)}},getEventProperties:function(e,t){var o={};return ue.forEach(function(i){typeof i.eventProperties=="function"&&V(o,i.eventProperties.call(t[i.pluginName],e))}),o},modifyOption:function(e,t,o){var i;return ue.forEach(function(r){e[r.pluginName]&&r.optionListeners&&typeof r.optionListeners[t]=="function"&&(i=r.optionListeners[t].call(e[r.pluginName],o))}),i}};function dn(n){var e=n.sortable,t=n.rootEl,o=n.name,i=n.targetEl,r=n.cloneEl,a=n.toEl,l=n.fromEl,s=n.oldIndex,u=n.newIndex,c=n.oldDraggableIndex,f=n.newDraggableIndex,m=n.originalEvent,y=n.putSortable,v=n.extraEventProperties;if(e=e||t&&t[B],!!e){var E,H=e.options,U="on"+o.charAt(0).toUpperCase()+o.substr(1);window.CustomEvent&&!Z&&!Ie?E=new CustomEvent(o,{bubbles:!0,cancelable:!0}):(E=document.createEvent("Event"),E.initEvent(o,!0,!0)),E.to=a||t,E.from=l||t,E.item=i||t,E.clone=r,E.oldIndex=s,E.newIndex=u,E.oldDraggableIndex=c,E.newDraggableIndex=f,E.originalEvent=m,E.pullMode=y?y.lastPutMode:void 0;var N=q(q({},v),Ae.getEventProperties(o,e));for(var L in N)E[L]=N[L];t&&t.dispatchEvent(E),H[U]&&H[U].call(e,E)}}var fn=["evt"],F=function(e,t){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=o.evt,r=en(o,fn);Ae.pluginEvent.bind(h)(e,t,q({dragEl:d,parentEl:_,ghostEl:g,rootEl:S,nextEl:se,lastDownEl:Re,cloneEl:D,cloneHidden:te,dragStarted:Ee,putSortable:O,activeSortable:h.active,originalEvent:i,oldIndex:ce,oldDraggableIndex:Te,newIndex:X,newDraggableIndex:ee,hideGhostForTarget:Ft,unhideGhostForTarget:Mt,cloneNowHidden:function(){te=!0},cloneNowShown:function(){te=!1},dispatchSortableEvent:function(l){x({sortable:t,name:l,originalEvent:i})}},r))};function x(n){dn(q({putSortable:O,cloneEl:D,targetEl:d,rootEl:S,oldIndex:ce,oldDraggableIndex:Te,newIndex:X,newDraggableIndex:ee},n))}var d,_,g,S,se,Re,D,te,ce,X,Te,ee,xe,O,fe=!1,Le=!1,We=[],ae,W,$e,Ke,bt,wt,Ee,de,Ce,Oe=!1,Pe=!1,Xe,I,Ze=[],ot=!1,Ge=[],je=typeof document<"u",Fe=Dt,Et=Ie||Z?"cssFloat":"float",cn=je&&!_t&&!Dt&&"draggable"in document.createElement("div"),Nt=function(){if(je){if(Z)return!1;var n=document.createElement("x");return n.style.cssText="pointer-events:auto",n.style.pointerEvents==="auto"}}(),xt=function(e,t){var o=p(e),i=parseInt(o.width)-parseInt(o.paddingLeft)-parseInt(o.paddingRight)-parseInt(o.borderLeftWidth)-parseInt(o.borderRightWidth),r=pe(e,0,t),a=pe(e,1,t),l=r&&p(r),s=a&&p(a),u=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+C(r).width,c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+C(a).width;if(o.display==="flex")return o.flexDirection==="column"||o.flexDirection==="column-reverse"?"vertical":"horizontal";if(o.display==="grid")return o.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(r&&l.float&&l.float!=="none"){var f=l.float==="left"?"left":"right";return a&&(s.clear==="both"||s.clear===f)?"vertical":"horizontal"}return r&&(l.display==="block"||l.display==="flex"||l.display==="table"||l.display==="grid"||u>=i&&o[Et]==="none"||a&&o[Et]==="none"&&u+c>i)?"vertical":"horizontal"},hn=function(e,t,o){var i=o?e.left:e.top,r=o?e.right:e.bottom,a=o?e.width:e.height,l=o?t.left:t.top,s=o?t.right:t.bottom,u=o?t.width:t.height;return i===l||r===s||i+a/2===l+u/2},pn=function(e,t){var o;return We.some(function(i){var r=i[B].options.emptyInsertThreshold;if(!(!r||lt(i))){var a=C(i),l=e>=a.left-r&&e<=a.right+r,s=t>=a.top-r&&t<=a.bottom+r;if(l&&s)return o=i}}),o},Pt=function(e){function t(r,a){return function(l,s,u,c){var f=l.options.group.name&&s.options.group.name&&l.options.group.name===s.options.group.name;if(r==null&&(a||f))return!0;if(r==null||r===!1)return!1;if(a&&r==="clone")return r;if(typeof r=="function")return t(r(l,s,u,c),a)(l,s,u,c);var m=(a?l:s).options.group.name;return r===!0||typeof r=="string"&&r===m||r.join&&r.indexOf(m)>-1}}var o={},i=e.group;(!i||ke(i)!="object")&&(i={name:i}),o.name=i.name,o.checkPull=t(i.pull,!0),o.checkPut=t(i.put),o.revertClone=i.revertClone,e.group=o},Ft=function(){!Nt&&g&&p(g,"display","none")},Mt=function(){!Nt&&g&&p(g,"display","")};je&&!_t&&document.addEventListener("click",function(n){if(Le)return n.preventDefault(),n.stopPropagation&&n.stopPropagation(),n.stopImmediatePropagation&&n.stopImmediatePropagation(),Le=!1,!1},!0);var le=function(e){if(d){e=e.touches?e.touches[0]:e;var t=pn(e.clientX,e.clientY);if(t){var o={};for(var i in e)e.hasOwnProperty(i)&&(o[i]=e[i]);o.target=o.rootEl=t,o.preventDefault=void 0,o.stopPropagation=void 0,t[B]._onDragOver(o)}}},gn=function(e){d&&d.parentNode[B]._isOutsideThisEl(e.target)};function h(n,e){if(!(n&&n.nodeType&&n.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(n));this.el=n,this.options=e=V({},e),n[B]=this;var t={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(n.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return xt(n,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,l){a.setData("Text",l.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:h.supportPointer!==!1&&"PointerEvent"in window&&!De,emptyInsertThreshold:5};Ae.initializePlugins(this,n,t);for(var o in t)!(o in e)&&(e[o]=t[o]);Pt(e);for(var i in this)i.charAt(0)==="_"&&typeof this[i]=="function"&&(this[i]=this[i].bind(this));this.nativeDraggable=e.forceFallback?!1:cn,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?w(n,"pointerdown",this._onTapStart):(w(n,"mousedown",this._onTapStart),w(n,"touchstart",this._onTapStart)),this.nativeDraggable&&(w(n,"dragover",this),w(n,"dragenter",this)),We.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),V(this,ln())}h.prototype={constructor:h,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(de=null)},_getDirection:function(e,t){return typeof this.options.direction=="function"?this.options.direction.call(this,e,t,d):this.options.direction},_onTapStart:function(e){if(e.cancelable){var t=this,o=this.el,i=this.options,r=i.preventOnFilter,a=e.type,l=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,s=(l||e).target,u=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||s,c=i.filter;if(Dn(o),!d&&!(/mousedown|pointerdown/.test(a)&&e.button!==0||i.disabled)&&!u.isContentEditable&&!(!this.nativeDraggable&&De&&s&&s.tagName.toUpperCase()==="SELECT")&&(s=z(s,i.draggable,o,!1),!(s&&s.animated)&&Re!==s)){if(ce=M(s),Te=M(s,i.draggable),typeof c=="function"){if(c.call(this,e,s,this)){x({sortable:t,rootEl:u,name:"filter",targetEl:s,toEl:o,fromEl:o}),F("filter",t,{evt:e}),r&&e.cancelable&&e.preventDefault();return}}else if(c&&(c=c.split(",").some(function(f){if(f=z(u,f.trim(),o,!1),f)return x({sortable:t,rootEl:f,name:"filter",targetEl:s,fromEl:o,toEl:o}),F("filter",t,{evt:e}),!0}),c)){r&&e.cancelable&&e.preventDefault();return}i.handle&&!z(u,i.handle,o,!1)||this._prepareDragStart(e,l,s)}}},_prepareDragStart:function(e,t,o){var i=this,r=i.el,a=i.options,l=r.ownerDocument,s;if(o&&!d&&o.parentNode===r){var u=C(o);if(S=r,d=o,_=d.parentNode,se=d.nextSibling,Re=o,xe=a.group,h.dragged=d,ae={target:d,clientX:(t||e).clientX,clientY:(t||e).clientY},bt=ae.clientX-u.left,wt=ae.clientY-u.top,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,d.style["will-change"]="all",s=function(){if(F("delayEnded",i,{evt:e}),h.eventCanceled){i._onDrop();return}i._disableDelayedDragEvents(),!pt&&i.nativeDraggable&&(d.draggable=!0),i._triggerDragStart(e,t),x({sortable:i,name:"choose",originalEvent:e}),A(d,a.chosenClass,!0)},a.ignore.split(",").forEach(function(c){Ct(d,c.trim(),Je)}),w(l,"dragover",le),w(l,"mousemove",le),w(l,"touchmove",le),w(l,"mouseup",i._onDrop),w(l,"touchend",i._onDrop),w(l,"touchcancel",i._onDrop),pt&&this.nativeDraggable&&(this.options.touchStartThreshold=4,d.draggable=!0),F("delayStart",this,{evt:e}),a.delay&&(!a.delayOnTouchOnly||t)&&(!this.nativeDraggable||!(Ie||Z))){if(h.eventCanceled){this._onDrop();return}w(l,"mouseup",i._disableDelayedDrag),w(l,"touchend",i._disableDelayedDrag),w(l,"touchcancel",i._disableDelayedDrag),w(l,"mousemove",i._delayedDragTouchMoveHandler),w(l,"touchmove",i._delayedDragTouchMoveHandler),a.supportPointer&&w(l,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(s,a.delay)}else s()}},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){d&&Je(d),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;b(e,"mouseup",this._disableDelayedDrag),b(e,"touchend",this._disableDelayedDrag),b(e,"touchcancel",this._disableDelayedDrag),b(e,"mousemove",this._delayedDragTouchMoveHandler),b(e,"touchmove",this._delayedDragTouchMoveHandler),b(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,t){t=t||e.pointerType=="touch"&&e,!this.nativeDraggable||t?this.options.supportPointer?w(document,"pointermove",this._onTouchMove):t?w(document,"touchmove",this._onTouchMove):w(document,"mousemove",this._onTouchMove):(w(d,"dragend",this),w(S,"dragstart",this._onDragStart));try{document.selection?Be(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,t){if(fe=!1,S&&d){F("dragStarted",this,{evt:t}),this.nativeDraggable&&w(document,"dragover",gn);var o=this.options;!e&&A(d,o.dragClass,!1),A(d,o.ghostClass,!0),h.active=this,e&&this._appendGhost(),x({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if(W){this._lastX=W.clientX,this._lastY=W.clientY,Ft();for(var e=document.elementFromPoint(W.clientX,W.clientY),t=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(W.clientX,W.clientY),e!==t);)t=e;if(d.parentNode[B]._isOutsideThisEl(e),t)do{if(t[B]){var o=void 0;if(o=t[B]._onDragOver({clientX:W.clientX,clientY:W.clientY,target:e,rootEl:t}),o&&!this.options.dragoverBubble)break}e=t}while(t=t.parentNode);Mt()}},_onTouchMove:function(e){if(ae){var t=this.options,o=t.fallbackTolerance,i=t.fallbackOffset,r=e.touches?e.touches[0]:e,a=g&&he(g,!0),l=g&&a&&a.a,s=g&&a&&a.d,u=Fe&&I&&vt(I),c=(r.clientX-ae.clientX+i.x)/(l||1)+(u?u[0]-Ze[0]:0)/(l||1),f=(r.clientY-ae.clientY+i.y)/(s||1)+(u?u[1]-Ze[1]:0)/(s||1);if(!h.active&&!fe){if(o&&Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))<o)return;this._onDragStart(e,!0)}if(g){a?(a.e+=c-($e||0),a.f+=f-(Ke||0)):a={a:1,b:0,c:0,d:1,e:c,f};var m="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");p(g,"webkitTransform",m),p(g,"mozTransform",m),p(g,"msTransform",m),p(g,"transform",m),$e=c,Ke=f,W=r}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!g){var e=this.options.fallbackOnBody?document.body:S,t=C(d,!0,Fe,!0,e),o=this.options;if(Fe){for(I=e;p(I,"position")==="static"&&p(I,"transform")==="none"&&I!==document;)I=I.parentNode;I!==document.body&&I!==document.documentElement?(I===document&&(I=j()),t.top+=I.scrollTop,t.left+=I.scrollLeft):I=j(),Ze=vt(I)}g=d.cloneNode(!0),A(g,o.ghostClass,!1),A(g,o.fallbackClass,!0),A(g,o.dragClass,!0),p(g,"transition",""),p(g,"transform",""),p(g,"box-sizing","border-box"),p(g,"margin",0),p(g,"top",t.top),p(g,"left",t.left),p(g,"width",t.width),p(g,"height",t.height),p(g,"opacity","0.8"),p(g,"position",Fe?"absolute":"fixed"),p(g,"zIndex","100000"),p(g,"pointerEvents","none"),h.ghost=g,e.appendChild(g),p(g,"transform-origin",bt/parseInt(g.style.width)*100+"% "+wt/parseInt(g.style.height)*100+"%")}},_onDragStart:function(e,t){var o=this,i=e.dataTransfer,r=o.options;if(F("dragStart",this,{evt:e}),h.eventCanceled){this._onDrop();return}F("setupClone",this),h.eventCanceled||(D=At(d),D.removeAttribute("id"),D.draggable=!1,D.style["will-change"]="",this._hideClone(),A(D,this.options.chosenClass,!1),h.clone=D),o.cloneId=Be(function(){F("clone",o),!h.eventCanceled&&(o.options.removeCloneOnHide||S.insertBefore(D,d),o._hideClone(),x({sortable:o,name:"clone"}))}),!t&&A(d,r.dragClass,!0),t?(Le=!0,o._loopId=setInterval(o._emulateDragOver,50)):(b(document,"mouseup",o._onDrop),b(document,"touchend",o._onDrop),b(document,"touchcancel",o._onDrop),i&&(i.effectAllowed="move",r.setData&&r.setData.call(o,i,d)),w(document,"drop",o),p(d,"transform","translateZ(0)")),fe=!0,o._dragStartId=Be(o._dragStarted.bind(o,t,e)),w(document,"selectstart",o),Ee=!0,De&&p(document.body,"user-select","none")},_onDragOver:function(e){var t=this.el,o=e.target,i,r,a,l=this.options,s=l.group,u=h.active,c=xe===s,f=l.sort,m=O||u,y,v=this,E=!1;if(ot)return;function H(we,Rt){F(we,v,q({evt:e,isOwner:c,axis:y?"vertical":"horizontal",revert:a,dragRect:i,targetRect:r,canSort:f,fromSortable:m,target:o,completed:N,onMove:function(dt,Xt){return Me(S,t,d,i,dt,C(dt),e,Xt)},changed:L},Rt))}function U(){H("dragOverAnimationCapture"),v.captureAnimationState(),v!==m&&m.captureAnimationState()}function N(we){return H("dragOverCompleted",{insertion:we}),we&&(c?u._hideClone():u._showClone(v),v!==m&&(A(d,O?O.options.ghostClass:u.options.ghostClass,!1),A(d,l.ghostClass,!0)),O!==v&&v!==h.active?O=v:v===h.active&&O&&(O=null),m===v&&(v._ignoreWhileAnimating=o),v.animateAll(function(){H("dragOverAnimationComplete"),v._ignoreWhileAnimating=null}),v!==m&&(m.animateAll(),m._ignoreWhileAnimating=null)),(o===d&&!d.animated||o===t&&!o.animated)&&(de=null),!l.dragoverBubble&&!e.rootEl&&o!==document&&(d.parentNode[B]._isOutsideThisEl(e.target),!we&&le(e)),!l.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),E=!0}function L(){X=M(d),ee=M(d,l.draggable),x({sortable:v,name:"change",toEl:t,newIndex:X,newDraggableIndex:ee,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),o=z(o,l.draggable,t,!0),H("dragOver"),h.eventCanceled)return E;if(d.contains(e.target)||o.animated&&o.animatingX&&o.animatingY||v._ignoreWhileAnimating===o)return N(!1);if(Le=!1,u&&!l.disabled&&(c?f||(a=_!==S):O===this||(this.lastPutMode=xe.checkPull(this,u,d,e))&&s.checkPut(this,u,d,e))){if(y=this._getDirection(e,o)==="vertical",i=C(d),H("dragOverValid"),h.eventCanceled)return E;if(a)return _=S,U(),this._hideClone(),H("revert"),h.eventCanceled||(se?S.insertBefore(d,se):S.appendChild(d)),N(!0);var k=lt(t,l.draggable);if(!k||wn(e,y,this)&&!k.animated){if(k===d)return N(!1);if(k&&t===e.target&&(o=k),o&&(r=C(o)),Me(S,t,d,i,o,r,e,!!o)!==!1)return U(),k&&k.nextSibling?t.insertBefore(d,k.nextSibling):t.appendChild(d),_=t,L(),N(!0)}else if(k&&bn(e,y,this)){var oe=pe(t,0,l,!0);if(oe===d)return N(!1);if(o=oe,r=C(o),Me(S,t,d,i,o,r,e,!1)!==!1)return U(),t.insertBefore(d,oe),_=t,L(),N(!0)}else if(o.parentNode===t){r=C(o);var G=0,ie,ge=d.parentNode!==t,R=!hn(d.animated&&d.toRect||i,o.animated&&o.toRect||r,y),me=y?"top":"left",J=mt(o,"top","top")||mt(d,"top","top"),ve=J?J.scrollTop:void 0;de!==o&&(ie=r[me],Oe=!1,Pe=!R&&l.invertSwap||ge),G=En(e,o,r,y,R?1:l.swapThreshold,l.invertedSwapThreshold==null?l.swapThreshold:l.invertedSwapThreshold,Pe,de===o);var $;if(G!==0){var re=M(d);do re-=G,$=_.children[re];while($&&(p($,"display")==="none"||$===g))}if(G===0||$===o)return N(!1);de=o,Ce=G;var be=o.nextElementSibling,Q=!1;Q=G===1;var Ne=Me(S,t,d,i,o,r,e,Q);if(Ne!==!1)return(Ne===1||Ne===-1)&&(Q=Ne===1),ot=!0,setTimeout(vn,30),U(),Q&&!be?t.appendChild(d):o.parentNode.insertBefore(d,Q?be:o),J&&It(J,0,ve-J.scrollTop),_=d.parentNode,ie!==void 0&&!Pe&&(Xe=Math.abs(ie-C(o)[me])),L(),N(!0)}if(t.contains(d))return N(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){b(document,"mousemove",this._onTouchMove),b(document,"touchmove",this._onTouchMove),b(document,"pointermove",this._onTouchMove),b(document,"dragover",le),b(document,"mousemove",le),b(document,"touchmove",le)},_offUpEvents:function(){var e=this.el.ownerDocument;b(e,"mouseup",this._onDrop),b(e,"touchend",this._onDrop),b(e,"pointerup",this._onDrop),b(e,"touchcancel",this._onDrop),b(document,"selectstart",this)},_onDrop:function(e){var t=this.el,o=this.options;if(X=M(d),ee=M(d,o.draggable),F("drop",this,{evt:e}),_=d&&d.parentNode,X=M(d),ee=M(d,o.draggable),h.eventCanceled){this._nulling();return}fe=!1,Pe=!1,Oe=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),it(this.cloneId),it(this._dragStartId),this.nativeDraggable&&(b(document,"drop",this),b(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),De&&p(document.body,"user-select",""),p(d,"transform",""),e&&(Ee&&(e.cancelable&&e.preventDefault(),!o.dropBubble&&e.stopPropagation()),g&&g.parentNode&&g.parentNode.removeChild(g),(S===_||O&&O.lastPutMode!=="clone")&&D&&D.parentNode&&D.parentNode.removeChild(D),d&&(this.nativeDraggable&&b(d,"dragend",this),Je(d),d.style["will-change"]="",Ee&&!fe&&A(d,O?O.options.ghostClass:this.options.ghostClass,!1),A(d,this.options.chosenClass,!1),x({sortable:this,name:"unchoose",toEl:_,newIndex:null,newDraggableIndex:null,originalEvent:e}),S!==_?(X>=0&&(x({rootEl:_,name:"add",toEl:_,fromEl:S,originalEvent:e}),x({sortable:this,name:"remove",toEl:_,originalEvent:e}),x({rootEl:_,name:"sort",toEl:_,fromEl:S,originalEvent:e}),x({sortable:this,name:"sort",toEl:_,originalEvent:e})),O&&O.save()):X!==ce&&X>=0&&(x({sortable:this,name:"update",toEl:_,originalEvent:e}),x({sortable:this,name:"sort",toEl:_,originalEvent:e})),h.active&&((X==null||X===-1)&&(X=ce,ee=Te),x({sortable:this,name:"end",toEl:_,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){F("nulling",this),S=d=_=g=se=D=Re=te=ae=W=Ee=X=ee=ce=Te=de=Ce=O=xe=h.dragged=h.ghost=h.clone=h.active=null,Ge.forEach(function(e){e.checked=!0}),Ge.length=$e=Ke=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":d&&(this._onDragOver(e),mn(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],t,o=this.el.children,i=0,r=o.length,a=this.options;i<r;i++)t=o[i],z(t,a.draggable,this.el,!1)&&e.push(t.getAttribute(a.dataIdAttr)||Sn(t));return e},sort:function(e,t){var o={},i=this.el;this.toArray().forEach(function(r,a){var l=i.children[a];z(l,this.options.draggable,i,!1)&&(o[r]=l)},this),t&&this.captureAnimationState(),e.forEach(function(r){o[r]&&(i.removeChild(o[r]),i.appendChild(o[r]))}),t&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,t){return z(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var o=this.options;if(t===void 0)return o[e];var i=Ae.modifyOption(this,e,t);typeof i<"u"?o[e]=i:o[e]=t,e==="group"&&Pt(o)},destroy:function(){F("destroy",this);var e=this.el;e[B]=null,b(e,"mousedown",this._onTapStart),b(e,"touchstart",this._onTapStart),b(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(b(e,"dragover",this),b(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),We.splice(We.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!te){if(F("hideClone",this),h.eventCanceled)return;p(D,"display","none"),this.options.removeCloneOnHide&&D.parentNode&&D.parentNode.removeChild(D),te=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(te){if(F("showClone",this),h.eventCanceled)return;d.parentNode==S&&!this.options.group.revertClone?S.insertBefore(D,d):se?S.insertBefore(D,se):S.appendChild(D),this.options.group.revertClone&&this.animate(d,D),p(D,"display",""),te=!1}}};function mn(n){n.dataTransfer&&(n.dataTransfer.dropEffect="move"),n.cancelable&&n.preventDefault()}function Me(n,e,t,o,i,r,a,l){var s,u=n[B],c=u.options.onMove,f;return window.CustomEvent&&!Z&&!Ie?s=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(s=document.createEvent("Event"),s.initEvent("move",!0,!0)),s.to=e,s.from=n,s.dragged=t,s.draggedRect=o,s.related=i||e,s.relatedRect=r||C(e),s.willInsertAfter=l,s.originalEvent=a,n.dispatchEvent(s),c&&(f=c.call(u,s,a)),f}function Je(n){n.draggable=!1}function vn(){ot=!1}function bn(n,e,t){var o=C(pe(t.el,0,t.options,!0)),i=10;return e?n.clientX<o.left-i||n.clientY<o.top&&n.clientX<o.right:n.clientY<o.top-i||n.clientY<o.bottom&&n.clientX<o.left}function wn(n,e,t){var o=C(lt(t.el,t.options.draggable)),i=10;return e?n.clientX>o.right+i||n.clientX<=o.right&&n.clientY>o.bottom&&n.clientX>=o.left:n.clientX>o.right&&n.clientY>o.top||n.clientX<=o.right&&n.clientY>o.bottom+i}function En(n,e,t,o,i,r,a,l){var s=o?n.clientY:n.clientX,u=o?t.height:t.width,c=o?t.top:t.left,f=o?t.bottom:t.right,m=!1;if(!a){if(l&&Xe<u*i){if(!Oe&&(Ce===1?s>c+u*r/2:s<f-u*r/2)&&(Oe=!0),Oe)m=!0;else if(Ce===1?s<c+Xe:s>f-Xe)return-Ce}else if(s>c+u*(1-i)/2&&s<f-u*(1-i)/2)return yn(e)}return m=m||a,m&&(s<c+u*r/2||s>f-u*r/2)?s>c+u/2?1:-1:0}function yn(n){return M(d)<M(n)?1:-1}function Sn(n){for(var e=n.tagName+n.className+n.src+n.href+n.textContent,t=e.length,o=0;t--;)o+=e.charCodeAt(t);return o.toString(36)}function Dn(n){Ge.length=0;for(var e=n.getElementsByTagName("input"),t=e.length;t--;){var o=e[t];o.checked&&Ge.push(o)}}function Be(n){return setTimeout(n,0)}function it(n){return clearTimeout(n)}je&&w(document,"touchmove",function(n){(h.active||fe)&&n.cancelable&&n.preventDefault()});h.utils={on:w,off:b,css:p,find:Ct,is:function(e,t){return!!z(e,t,e,!1)},extend:rn,throttle:Ot,closest:z,toggleClass:A,clone:At,index:M,nextTick:Be,cancelNextTick:it,detectDirection:xt,getChild:pe};h.get=function(n){return n[B]};h.mount=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];e[0].constructor===Array&&(e=e[0]),e.forEach(function(o){if(!o.prototype||!o.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(o));o.utils&&(h.utils=q(q({},h.utils),o.utils)),Ae.mount(o)})};h.create=function(n,e){return new h(n,e)};h.version=tn;var T=[],ye,rt,at=!1,Qe,et,ze,Se;function _n(){function n(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return n.prototype={dragStarted:function(t){var o=t.originalEvent;this.sortable.nativeDraggable?w(document,"dragover",this._handleAutoScroll):this.options.supportPointer?w(document,"pointermove",this._handleFallbackAutoScroll):o.touches?w(document,"touchmove",this._handleFallbackAutoScroll):w(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var o=t.originalEvent;!this.options.dragOverBubble&&!o.rootEl&&this._handleAutoScroll(o)},drop:function(){this.sortable.nativeDraggable?b(document,"dragover",this._handleAutoScroll):(b(document,"pointermove",this._handleFallbackAutoScroll),b(document,"touchmove",this._handleFallbackAutoScroll),b(document,"mousemove",this._handleFallbackAutoScroll)),yt(),Ye(),an()},nulling:function(){ze=rt=ye=at=Se=Qe=et=null,T.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,o){var i=this,r=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,l=document.elementFromPoint(r,a);if(ze=t,o||this.options.forceAutoScrollFallback||Ie||Z||De){tt(t,this.options,l,o);var s=ne(l,!0);at&&(!Se||r!==Qe||a!==et)&&(Se&&yt(),Se=setInterval(function(){var u=ne(document.elementFromPoint(r,a),!0);u!==s&&(s=u,Ye()),tt(t,i.options,u,o)},10),Qe=r,et=a)}else{if(!this.options.bubbleScroll||ne(l,!0)===j()){Ye();return}tt(t,this.options,ne(l,!1),!1)}}},V(n,{pluginName:"scroll",initializeByDefault:!0})}function Ye(){T.forEach(function(n){clearInterval(n.pid)}),T=[]}function yt(){clearInterval(Se)}var tt=Ot(function(n,e,t,o){if(e.scroll){var i=(n.touches?n.touches[0]:n).clientX,r=(n.touches?n.touches[0]:n).clientY,a=e.scrollSensitivity,l=e.scrollSpeed,s=j(),u=!1,c;rt!==t&&(rt=t,Ye(),ye=e.scroll,c=e.scrollFn,ye===!0&&(ye=ne(t,!0)));var f=0,m=ye;do{var y=m,v=C(y),E=v.top,H=v.bottom,U=v.left,N=v.right,L=v.width,k=v.height,oe=void 0,G=void 0,ie=y.scrollWidth,ge=y.scrollHeight,R=p(y),me=y.scrollLeft,J=y.scrollTop;y===s?(oe=L<ie&&(R.overflowX==="auto"||R.overflowX==="scroll"||R.overflowX==="visible"),G=k<ge&&(R.overflowY==="auto"||R.overflowY==="scroll"||R.overflowY==="visible")):(oe=L<ie&&(R.overflowX==="auto"||R.overflowX==="scroll"),G=k<ge&&(R.overflowY==="auto"||R.overflowY==="scroll"));var ve=oe&&(Math.abs(N-i)<=a&&me+L<ie)-(Math.abs(U-i)<=a&&!!me),$=G&&(Math.abs(H-r)<=a&&J+k<ge)-(Math.abs(E-r)<=a&&!!J);if(!T[f])for(var re=0;re<=f;re++)T[re]||(T[re]={});(T[f].vx!=ve||T[f].vy!=$||T[f].el!==y)&&(T[f].el=y,T[f].vx=ve,T[f].vy=$,clearInterval(T[f].pid),(ve!=0||$!=0)&&(u=!0,T[f].pid=setInterval(function(){o&&this.layer===0&&h.active._onTouchMove(ze);var be=T[this.layer].vy?T[this.layer].vy*l:0,Q=T[this.layer].vx?T[this.layer].vx*l:0;typeof c=="function"&&c.call(h.dragged.parentNode[B],Q,be,n,ze,T[this.layer].el)!=="continue"||It(T[this.layer].el,Q,be)}.bind({layer:f}),24))),f++}while(e.bubbleScroll&&m!==s&&(m=ne(m,!1)));at=u}},30),kt=function(e){var t=e.originalEvent,o=e.putSortable,i=e.dragEl,r=e.activeSortable,a=e.dispatchSortableEvent,l=e.hideGhostForTarget,s=e.unhideGhostForTarget;if(t){var u=o||r;l();var c=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,f=document.elementFromPoint(c.clientX,c.clientY);s(),u&&!u.el.contains(f)&&(a("spill"),this.onSpill({dragEl:i,putSortable:o}))}};function st(){}st.prototype={startIndex:null,dragStart:function(e){var t=e.oldDraggableIndex;this.startIndex=t},onSpill:function(e){var t=e.dragEl,o=e.putSortable;this.sortable.captureAnimationState(),o&&o.captureAnimationState();var i=pe(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(t,i):this.sortable.el.appendChild(t),this.sortable.animateAll(),o&&o.animateAll()},drop:kt};V(st,{pluginName:"revertOnSpill"});function ut(){}ut.prototype={onSpill:function(e){var t=e.dragEl,o=e.putSortable,i=o||this.sortable;i.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),i.animateAll()},drop:kt};V(ut,{pluginName:"removeOnSpill"});var Y;function Tn(){function n(){this.defaults={swapClass:"sortable-swap-highlight"}}return n.prototype={dragStart:function(t){var o=t.dragEl;Y=o},dragOverValid:function(t){var o=t.completed,i=t.target,r=t.onMove,a=t.activeSortable,l=t.changed,s=t.cancel;if(a.options.swap){var u=this.sortable.el,c=this.options;if(i&&i!==u){var f=Y;r(i)!==!1?(A(i,c.swapClass,!0),Y=i):Y=null,f&&f!==Y&&A(f,c.swapClass,!1)}l(),o(!0),s()}},drop:function(t){var o=t.activeSortable,i=t.putSortable,r=t.dragEl,a=i||this.sortable,l=this.options;Y&&A(Y,l.swapClass,!1),Y&&(l.swap||i&&i.options.swap)&&r!==Y&&(a.captureAnimationState(),a!==o&&o.captureAnimationState(),Cn(r,Y),a.animateAll(),a!==o&&o.animateAll())},nulling:function(){Y=null}},V(n,{pluginName:"swap",eventProperties:function(){return{swapItem:Y}}})}function Cn(n,e){var t=n.parentNode,o=e.parentNode,i,r;!t||!o||t.isEqualNode(e)||o.isEqualNode(n)||(i=M(n),r=M(e),t.isEqualNode(o)&&i<r&&r++,t.insertBefore(e,t.children[i]),o.insertBefore(n,o.children[r]))}h.mount(new _n);h.mount(ut,st);h.mount(new Tn);const On=St({name:"PostItem",props:{data:{type:Object,required:!0},onDelete:{type:Function,required:!0}},setup(n){return()=>{const e=n.data;return P(Vt,{size:"small"},{header(){return P(Ut,{inPageTo:`/pages/edit?id=${e.id}`,title:e.title,externalLinkTo:`/${e.slug}`,id:e.id},null)},"header-extra":function(){return P($t,{time:e.created},null)},default(){return P(ct,{depth:1,class:"min-h-[1rem]"},{default:()=>[e.subtitle]})},footer(){return P(ct,{depth:3},{default:()=>[`/${e.slug}`]})},action(){return P(jt,{justify:"end"},{default:()=>[P(Zt,{positiveText:"取消",negativeText:"删除",onNegativeClick:async()=>{await nt.api.pages(e.id).delete(),message.success("删除成功"),n.onDelete(e.id)}},{trigger:()=>P(qt,{text:!0,type:"error",size:"tiny"},{default:()=>[qe("移除")]}),default:()=>P("span",{class:"max-w-48"},[qe("确定要删除「"),e.title,qe("」？")])})]})}})}}}),In=(n,e,t)=>{const o=Array.from(n),[i]=o.splice(e,1);return o.splice(t,0,i),o},Yn=St({name:"PageList",setup(){const n=ft([]);Bt(async()=>{const i=await nt.api.pages.get({params:{page:1,size:20,select:"title subtitle _id id created modified slug"}});n.value=i.data});const e=Yt(),t=ft();let o=null;return Ht(()=>n.value,()=>{n.value.length!==0&&requestAnimationFrame(()=>{t.value&&(o=new h(t.value,{animation:150,onEnd(i){if(typeof i.oldIndex>"u"||typeof i.newIndex>"u"||i.oldIndex===i.newIndex)return;const r=In(n.value,i.oldIndex,i.newIndex);n.value=r,nt.api.pages.reorder.patch({data:{seq:[...r].reverse().map((a,l)=>({id:a.id,order:l+1}))}}).then(()=>{e.success("排序成功")})}}))})}),Lt(()=>o?.destroy()),()=>P(zt,null,{actions:()=>P(Wt,null,[P(Kt,{to:"/pages/edit",icon:P(Gt,null,null)},null)]),default:()=>P("div",{class:"gap-4 grid phone:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 children:flex children:flex-1",ref:t},[n.value.map(i=>P(On,{data:i,key:i.id,onDelete:r=>{n.value=n.value.filter(a=>a.id!==r).concat()}},null))])})}});export{Yn as ManagePageListView};
