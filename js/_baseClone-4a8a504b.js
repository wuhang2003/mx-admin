import{d3 as u,d7 as h,d8 as j,d9 as C,da as _,db as N,dc as R,dd as K,de as E,df as m,dg as q,bS as B,dh as l,di as T,dj as M,bu as v,bR as W,dk as Y,dl as H,dm as J,dn as Q,dp as V,dq as X,dr as Z,ds as z}from"./index-67dc47c7.js";function k(r,t){return r&&u(t,h(t),r)}function rr(r,t){return r&&u(t,j(t),r)}function tr(r,t){return u(r,C(r),t)}var er=Object.getOwnPropertySymbols,nr=er?function(r){for(var t=[];r;)N(t,C(r)),r=R(r);return t}:_;const L=nr;function ar(r,t){return u(r,L(r),t)}function or(r){return K(r,j,L)}var sr=Object.prototype,cr=sr.hasOwnProperty;function ir(r){var t=r.length,n=new r.constructor(t);return t&&typeof r[0]=="string"&&cr.call(r,"index")&&(n.index=r.index,n.input=r.input),n}function br(r,t){var n=t?E(r.buffer):r.buffer;return new r.constructor(n,r.byteOffset,r.byteLength)}var gr=/\w*$/;function fr(r){var t=new r.constructor(r.source,gr.exec(r));return t.lastIndex=r.lastIndex,t}var I=m?m.prototype:void 0,O=I?I.valueOf:void 0;function yr(r){return O?Object(O.call(r)):{}}var Tr="[object Boolean]",ur="[object Date]",dr="[object Map]",jr="[object Number]",lr="[object RegExp]",pr="[object Set]",Ar="[object String]",$r="[object Symbol]",Sr="[object ArrayBuffer]",mr="[object DataView]",Ir="[object Float32Array]",Or="[object Float64Array]",wr="[object Int8Array]",Fr="[object Int16Array]",hr="[object Int32Array]",Cr="[object Uint8Array]",Er="[object Uint8ClampedArray]",Br="[object Uint16Array]",Mr="[object Uint32Array]";function Lr(r,t,n){var i=r.constructor;switch(t){case Sr:return E(r);case Tr:case ur:return new i(+r);case mr:return br(r,n);case Ir:case Or:case wr:case Fr:case hr:case Cr:case Er:case Br:case Mr:return q(r,n);case dr:return new i;case jr:case Ar:return new i(r);case lr:return fr(r);case pr:return new i;case $r:return yr(r)}}var Ur="[object Map]";function xr(r){return B(r)&&l(r)==Ur}var w=T&&T.isMap,Pr=w?M(w):xr;const Dr=Pr;var Gr="[object Set]";function _r(r){return B(r)&&l(r)==Gr}var F=T&&T.isSet,Nr=F?M(F):_r;const Rr=Nr;var Kr=1,qr=2,vr=4,U="[object Arguments]",Wr="[object Array]",Yr="[object Boolean]",Hr="[object Date]",Jr="[object Error]",x="[object Function]",Qr="[object GeneratorFunction]",Vr="[object Map]",Xr="[object Number]",P="[object Object]",Zr="[object RegExp]",zr="[object Set]",kr="[object String]",rt="[object Symbol]",tt="[object WeakMap]",et="[object ArrayBuffer]",nt="[object DataView]",at="[object Float32Array]",ot="[object Float64Array]",st="[object Int8Array]",ct="[object Int16Array]",it="[object Int32Array]",bt="[object Uint8Array]",gt="[object Uint8ClampedArray]",ft="[object Uint16Array]",yt="[object Uint32Array]",e={};e[U]=e[Wr]=e[et]=e[nt]=e[Yr]=e[Hr]=e[at]=e[ot]=e[st]=e[ct]=e[it]=e[Vr]=e[Xr]=e[P]=e[Zr]=e[zr]=e[kr]=e[rt]=e[bt]=e[gt]=e[ft]=e[yt]=!0;e[Jr]=e[x]=e[tt]=!1;function d(r,t,n,i,g,o){var a,f=t&Kr,y=t&qr,D=t&vr;if(n&&(a=g?n(r,i,g,o):n(r)),a!==void 0)return a;if(!v(r))return r;var p=W(r);if(p){if(a=ir(r),!f)return Y(r,a)}else{var b=l(r),A=b==x||b==Qr;if(H(r))return J(r,f);if(b==P||b==U||A&&!g){if(a=y||A?{}:Q(r),!f)return y?ar(r,rr(a,r)):tr(r,k(a,r))}else{if(!e[b])return g?r:{};a=Lr(r,b,f)}}o||(o=new V);var $=o.get(r);if($)return $;o.set(r,a),Rr(r)?r.forEach(function(s){a.add(d(s,t,n,s,r,o))}):Dr(r)&&r.forEach(function(s,c){a.set(c,d(s,t,n,c,r,o))});var G=D?y?or:Z:y?j:h,S=p?void 0:G(r);return X(S||r,function(s,c){S&&(c=s,s=r[c]),z(a,c,d(s,t,n,c,r,o))}),a}export{d as b,or as g};
