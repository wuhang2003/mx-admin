import{aE as O,d as y,b0 as m,Y as T,aH as _,i as u,a3 as B,$ as g,bz as h,a6 as a,by as S,aG as R,l as P,cr as w,dC as I,V as C,ay as f,U as x,a1 as N,dP as $,s as U,aD as E,aJ as F,dQ as V,N as K,dR as q,af as b}from"./index-a5dd80c2.js";const z=O("n-popconfirm"),j={positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0}},k=R(j),D=y({name:"NPopconfirmPanel",props:j,setup(e){const{localeRef:t}=m("Popconfirm"),{inlineThemeDisabled:s}=T(),{mergedClsPrefixRef:n,mergedThemeRef:p,props:r}=_(z),d=u(()=>{const{common:{cubicBezierEaseInOut:i},self:{fontSize:c,iconSize:v,iconColor:l}}=p.value;return{"--n-bezier":i,"--n-font-size":c,"--n-icon-size":v,"--n-icon-color":l}}),o=s?B("popconfirm-panel",void 0,d,r):void 0;return Object.assign(Object.assign({},m("Popconfirm")),{mergedClsPrefix:n,cssVars:s?void 0:d,localizedPositiveText:u(()=>e.positiveText||t.value.positiveText),localizedNegativeText:u(()=>e.negativeText||t.value.negativeText),positiveButtonProps:g(r,"positiveButtonProps"),negativeButtonProps:g(r,"negativeButtonProps"),handlePositiveClick(i){e.onPositiveClick(i)},handleNegativeClick(i){e.onNegativeClick(i)},themeClass:o?.themeClass,onRender:o?.onRender})},render(){var e;const{mergedClsPrefix:t,showIcon:s,$slots:n}=this,p=h(n.action,()=>this.negativeText===null&&this.positiveText===null?[]:[this.negativeText!==null&&a(P,Object.assign({size:"small",onClick:this.handleNegativeClick},this.negativeButtonProps),{default:()=>this.localizedNegativeText}),this.positiveText!==null&&a(P,Object.assign({size:"small",type:"primary",onClick:this.handlePositiveClick},this.positiveButtonProps),{default:()=>this.localizedPositiveText})]);return(e=this.onRender)===null||e===void 0||e.call(this),a("div",{class:[`${t}-popconfirm__panel`,this.themeClass],style:this.cssVars},S(n.default,r=>s||r?a("div",{class:`${t}-popconfirm__body`},s?a("div",{class:`${t}-popconfirm__icon`},h(n.icon,()=>[a(w,{clsPrefix:t},{default:()=>a(I,null)})])):null,r):null),p?a("div",{class:[`${t}-popconfirm__action`]},p):null)}}),H=C("popconfirm",[f("body",`
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
 `,[x("&:not(:first-child)","margin-top: 8px"),C("button",[x("&:not(:last-child)","margin-right: 8px;")])])]),L=Object.assign(Object.assign(Object.assign({},N.props),q),{positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},trigger:{type:String,default:"click"},positiveButtonProps:Object,negativeButtonProps:Object,onPositiveClick:Function,onNegativeClick:Function}),W=y({name:"Popconfirm",props:L,__popover__:!0,setup(e){const{mergedClsPrefixRef:t}=T(),s=N("Popconfirm","-popconfirm",H,$,e,t),n=U(null);function p(o){const{onPositiveClick:i,"onUpdate:show":c}=e;Promise.resolve(i?i(o):!0).then(v=>{var l;v!==!1&&((l=n.value)===null||l===void 0||l.setShow(!1),c&&b(c,!1))})}function r(o){const{onNegativeClick:i,"onUpdate:show":c}=e;Promise.resolve(i?i(o):!0).then(v=>{var l;v!==!1&&((l=n.value)===null||l===void 0||l.setShow(!1),c&&b(c,!1))})}return E(z,{mergedThemeRef:s,mergedClsPrefixRef:t,props:e}),Object.assign(Object.assign({},{setShow(o){var i;(i=n.value)===null||i===void 0||i.setShow(o)},syncPosition(){var o;(o=n.value)===null||o===void 0||o.syncPosition()}}),{mergedTheme:s,popoverInstRef:n,handlePositiveClick:p,handleNegativeClick:r})},render(){const{$slots:e,$props:t,mergedTheme:s}=this;return a(K,V(t,k,{theme:s.peers.Popover,themeOverrides:s.peerOverrides.Popover,internalExtraClass:["popconfirm"],ref:"popoverInstRef"}),{trigger:e.activator||e.trigger,default:()=>{const n=F(t,k);return a(D,Object.assign(Object.assign({},n),{onPositiveClick:this.handlePositiveClick,onNegativeClick:this.handleNegativeClick}),e)}})}});export{W as N};
