import{aF as O,d as T,b7 as g,Z as y,aI as _,i as u,a4 as B,a0 as m,bG as h,a7 as a,bF as S,aH as w,l as P,cy as R,dE as I,X as C,az as f,V as x,a2 as N,dW as $,s as F,aE as E,aK as K,dX as U,N as V,dY as W,ag as b}from"./index-d87a4bf9.js";const z=O("n-popconfirm"),j={positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0}},k=w(j),q=T({name:"NPopconfirmPanel",props:j,setup(e){const{localeRef:t}=g("Popconfirm"),{inlineThemeDisabled:s}=y(),{mergedClsPrefixRef:n,mergedThemeRef:p,props:r}=_(z),d=u(()=>{const{common:{cubicBezierEaseInOut:i},self:{fontSize:c,iconSize:v,iconColor:l}}=p.value;return{"--n-bezier":i,"--n-font-size":c,"--n-icon-size":v,"--n-icon-color":l}}),o=s?B("popconfirm-panel",void 0,d,r):void 0;return Object.assign(Object.assign({},g("Popconfirm")),{mergedClsPrefix:n,cssVars:s?void 0:d,localizedPositiveText:u(()=>e.positiveText||t.value.positiveText),localizedNegativeText:u(()=>e.negativeText||t.value.negativeText),positiveButtonProps:m(r,"positiveButtonProps"),negativeButtonProps:m(r,"negativeButtonProps"),handlePositiveClick(i){e.onPositiveClick(i)},handleNegativeClick(i){e.onNegativeClick(i)},themeClass:o?.themeClass,onRender:o?.onRender})},render(){var e;const{mergedClsPrefix:t,showIcon:s,$slots:n}=this,p=h(n.action,()=>this.negativeText===null&&this.positiveText===null?[]:[this.negativeText!==null&&a(P,Object.assign({size:"small",onClick:this.handleNegativeClick},this.negativeButtonProps),{default:()=>this.localizedNegativeText}),this.positiveText!==null&&a(P,Object.assign({size:"small",type:"primary",onClick:this.handlePositiveClick},this.positiveButtonProps),{default:()=>this.localizedPositiveText})]);return(e=this.onRender)===null||e===void 0||e.call(this),a("div",{class:[`${t}-popconfirm__panel`,this.themeClass],style:this.cssVars},S(n.default,r=>s||r?a("div",{class:`${t}-popconfirm__body`},s?a("div",{class:`${t}-popconfirm__icon`},h(n.icon,()=>[a(R,{clsPrefix:t},{default:()=>a(I,null)})])):null,r):null),p?a("div",{class:[`${t}-popconfirm__action`]},p):null)}}),H=C("popconfirm",[f("body",`
 font-size: var(--n-font-size);
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 position: relative;
 `,[f("icon",`
 display: flex;
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 margin: 0 8px 0 0;
 `)]),f("action",`
 display: flex;
 justify-content: flex-end;
 `,[x("&:not(:first-child)","margin-top: 8px"),C("button",[x("&:not(:last-child)","margin-right: 8px;")])])]),L=Object.assign(Object.assign(Object.assign({},N.props),W),{positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},trigger:{type:String,default:"click"},positiveButtonProps:Object,negativeButtonProps:Object,onPositiveClick:Function,onNegativeClick:Function}),X=T({name:"Popconfirm",props:L,__popover__:!0,setup(e){const{mergedClsPrefixRef:t}=y(),s=N("Popconfirm","-popconfirm",H,$,e,t),n=F(null);function p(o){const{onPositiveClick:i,"onUpdate:show":c}=e;Promise.resolve(i?i(o):!0).then(v=>{var l;v!==!1&&((l=n.value)===null||l===void 0||l.setShow(!1),c&&b(c,!1))})}function r(o){const{onNegativeClick:i,"onUpdate:show":c}=e;Promise.resolve(i?i(o):!0).then(v=>{var l;v!==!1&&((l=n.value)===null||l===void 0||l.setShow(!1),c&&b(c,!1))})}return E(z,{mergedThemeRef:s,mergedClsPrefixRef:t,props:e}),Object.assign(Object.assign({},{setShow(o){var i;(i=n.value)===null||i===void 0||i.setShow(o)},syncPosition(){var o;(o=n.value)===null||o===void 0||o.syncPosition()}}),{mergedTheme:s,popoverInstRef:n,handlePositiveClick:p,handleNegativeClick:r})},render(){const{$slots:e,$props:t,mergedTheme:s}=this;return a(V,U(t,k,{theme:s.peers.Popover,themeOverrides:s.peerOverrides.Popover,internalExtraClass:["popconfirm"],ref:"popoverInstRef"}),{trigger:e.activator||e.trigger,default:()=>{const n=K(t,k);return a(q,Object.assign(Object.assign({},n),{onPositiveClick:this.handlePositiveClick,onNegativeClick:this.handleNegativeClick}),e)}})}});export{X as N};
