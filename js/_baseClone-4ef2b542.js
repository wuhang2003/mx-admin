import{cX as u,c$ as h,d0 as j,d1 as C,d2 as _,d3 as N,d4 as K,d5 as R,d6 as E,d7 as m,d8 as v,bK as B,d9 as l,da as T,db as M,bn as J,bJ as W,dc as X,dd as Y,de as q,df as H,dg as Q,dh as V,di as Z,dj as z}from"./index-2f7b43b3.js";function k(r,t){return r&&u(t,h(t),r)}function rr(r,t){return r&&u(t,j(t),r)}function tr(r,t){return u(r,C(r),t)}var er=Object.getOwnPropertySymbols,nr=er?function(r){for(var t=[];r;)N(t,C(r)),r=K(r);return t}:_;const L=nr;function ar(r,t){return u(r,L(r),t)}function or(r){return R(r,j,L)}var sr=Object.prototype,cr=sr.hasOwnProperty;function ir(r){var t=r.length,n=new r.constructor(t);return t&&typeof r[0]=="string"&&cr.call(r,"index")&&(n.index=r.index,n.input=r.input),n}function br(r,t){var n=t?E(r.buffer):r.buffer;return new r.constructor(n,r.byteOffset,r.byteLength)}var gr=/\w*$/;function fr(r){var t=new r.constructor(r.source,gr.exec(r));return t.lastIndex=r.lastIndex,t}var I=m?m.prototype:void 0,O=I?I.valueOf:void 0;function yr(r){return O?Object(O.call(r)):{}}var Tr="[object Boolean]",ur="[object Date]",dr="[object Map]",jr="[object Number]",lr="[object RegExp]",pr="[object Set]",Ar="[object String]",$r="[object Symbol]",Sr="[object ArrayBuffer]",mr="[object DataView]",Ir="[object Float32Array]",Or="[object Float64Array]",wr="[object Int8Array]",Fr="[object Int16Array]",hr="[object Int32Array]",Cr="[object Uint8Array]",Er="[object Uint8ClampedArray]",Br="[object Uint16Array]",Mr="[object Uint32Array]";function Lr(r,t,n){var i=r.constructor;switch(t){case Sr:return E(r);case Tr:case ur:return new i(+r);case mr:return br(r,n);case Ir:case Or:case wr:case Fr:case hr:case Cr:case Er:case Br:case Mr:return v(r,n);case dr:return new i;case jr:case Ar:return new i(r);case lr:return fr(r);case pr:return new i;case $r:return yr(r)}}var Ur="[object Map]";function xr(r){return B(r)&&l(r)==Ur}var w=T&&T.isMap,Pr=w?M(w):xr;const Dr=Pr;var Gr="[object Set]";function _r(r){return B(r)&&l(r)==Gr}var F=T&&T.isSet,Nr=F?M(F):_r;const Kr=Nr;var Rr=1,vr=2,Jr=4,U="[object Arguments]",Wr="[object Array]",Xr="[object Boolean]",Yr="[object Date]",qr="[object Error]",x="[object Function]",Hr="[object GeneratorFunction]",Qr="[object Map]",Vr="[object Number]",P="[object Object]",Zr="[object RegExp]",zr="[object Set]",kr="[object String]",rt="[object Symbol]",tt="[object WeakMap]",et="[object ArrayBuffer]",nt="[object DataView]",at="[object Float32Array]",ot="[object Float64Array]",st="[object Int8Array]",ct="[object Int16Array]",it="[object Int32Array]",bt="[object Uint8Array]",gt="[object Uint8ClampedArray]",ft="[object Uint16Array]",yt="[object Uint32Array]",e={};e[U]=e[Wr]=e[et]=e[nt]=e[Xr]=e[Yr]=e[at]=e[ot]=e[st]=e[ct]=e[it]=e[Qr]=e[Vr]=e[P]=e[Zr]=e[zr]=e[kr]=e[rt]=e[bt]=e[gt]=e[ft]=e[yt]=!0;e[qr]=e[x]=e[tt]=!1;function d(r,t,n,i,g,o){var a,f=t&Rr,y=t&vr,D=t&Jr;if(n&&(a=g?n(r,i,g,o):n(r)),a!==void 0)return a;if(!J(r))return r;var p=W(r);if(p){if(a=ir(r),!f)return X(r,a)}else{var b=l(r),A=b==x||b==Hr;if(Y(r))return q(r,f);if(b==P||b==U||A&&!g){if(a=y||A?{}:H(r),!f)return y?ar(r,rr(a,r)):tr(r,k(a,r))}else{if(!e[b])return g?r:{};a=Lr(r,b,f)}}o||(o=new Q);var $=o.get(r);if($)return $;o.set(r,a),Kr(r)?r.forEach(function(s){a.add(d(s,t,n,s,r,o))}):Dr(r)&&r.forEach(function(s,c){a.set(c,d(s,t,n,c,r,o))});var G=D?y?or:Z:y?j:h,S=p?void 0:G(r);return V(S||r,function(s,c){S&&(c=s,s=r[c]),z(a,c,d(s,t,n,c,r,o))}),a}export{d as b,or as g};
