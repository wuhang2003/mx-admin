import{X as L,bb as N,aA as x,d as j,Z as D,a2 as y,eb as $,s as u,i as T,ea as B,a7 as p,bk as E}from"./index-ecb87ff2.js";import{N as I}from"./Tooltip-e67e8056.js";const M=L("ellipsis",{overflow:"hidden"},[N("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),x("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),x("cursor-pointer",`
 cursor: pointer;
 `)]);function k(i){return`${i}-ellipsis--line-clamp`}function w(i,s){return`${i}-ellipsis--cursor-${s}`}const P=Object.assign(Object.assign({},y.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),H=j({name:"Ellipsis",inheritAttrs:!1,props:P,setup(i,{slots:s,attrs:o}){const{mergedClsPrefixRef:t}=D(i),r=y("Ellipsis","-ellipsis",M,$,i,t),g=u(null),m=u(null),f=u(null),c=u(!1),v=T(()=>{const{lineClamp:e}=i,{value:l}=c;return e!==void 0?{textOverflow:"","-webkit-line-clamp":l?"":e}:{textOverflow:l?"":"ellipsis","-webkit-line-clamp":""}});function b(){let e=!1;const{value:l}=c;if(l)return!0;const{value:n}=g;if(n){const{lineClamp:a}=i;if(O(n),a!==void 0)e=n.scrollHeight<=n.offsetHeight;else{const{value:C}=m;C&&(e=C.getBoundingClientRect().width<=n.getBoundingClientRect().width)}S(n,e)}return e}const h=T(()=>i.expandTrigger==="click"?()=>{var e;const{value:l}=c;l&&((e=f.value)===null||e===void 0||e.setShow(!1)),c.value=!l}:void 0);B(()=>{var e;i.tooltip&&((e=f.value)===null||e===void 0||e.setShow(!1))});const R=()=>p("span",Object.assign({},E(o,{class:[`${t.value}-ellipsis`,i.lineClamp!==void 0?k(t.value):void 0,i.expandTrigger==="click"?w(t.value,"pointer"):void 0],style:v.value}),{ref:"triggerRef",onClick:h.value,onMouseenter:i.expandTrigger==="click"?b:void 0}),i.lineClamp?s:p("span",{ref:"triggerInnerRef"},s));function O(e){if(!e)return;const l=v.value,n=k(t.value);i.lineClamp!==void 0?d(e,n,"add"):d(e,n,"remove");for(const a in l)e.style[a]!==l[a]&&(e.style[a]=l[a])}function S(e,l){const n=w(t.value,"pointer");i.expandTrigger==="click"&&!l?d(e,n,"add"):d(e,n,"remove")}function d(e,l,n){n==="add"?e.classList.contains(l)||e.classList.add(l):e.classList.contains(l)&&e.classList.remove(l)}return{mergedTheme:r,triggerRef:g,triggerInnerRef:m,tooltipRef:f,handleClick:h,renderTrigger:R,getTooltipDisabled:b}},render(){var i;const{tooltip:s,renderTrigger:o,$slots:t}=this;if(s){const{mergedTheme:r}=this;return p(I,Object.assign({ref:"tooltipRef",placement:"top"},s,{getDisabled:this.getTooltipDisabled,theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip}),{trigger:o,default:(i=t.tooltip)!==null&&i!==void 0?i:t.default})}else return o()}});export{H as N};
