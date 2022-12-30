import{av as W,x as C,aw as D,ax as A,ay as K,D as q,F as G}from"./app-0ff7b4dc.js";import{R as U}from"./relative-time-32f0791a.js";import{I as J}from"./use-store-ref-0c1782ca.js";import{H as Q}from"./rounded-button-fdaf710d.js";import{C as X,E as r,H as p,D as g,G as a,k as b,J as k,L as B,t as Y,v as s,b4 as Z,l as ee,bb as te,n as y,N as ie,aN as $,aC as S,M as f,aG as ne,y as _,R as oe,U as i,aO as re,bq as m,F as le,bs as ae}from"./Button-2747a3c5.js";import{s as se}from"./_common-a949cfbb.js";import{r as ce}from"./vue.runtime.esm-bundler-785cb4aa.js";import{N as me}from"./Popconfirm-a63323b7.js";import{a as w}from"./Spin-3ddc0370.js";import"./preload-helper-f651ca80.js";import"./Card-b81187b1.js";import"./light-9e61820c.js";var N={};Object.defineProperty(N,"__esModule",{value:!0});const h=ce,de={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ue=(0,h.createElementVNode)("path",{d:"M290.74 93.24l128.02 128.02l-277.99 277.99l-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22l277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55l128.02 128.02l56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z",fill:"currentColor"},null,-1),pe=[ue];var ge=N.default=(0,h.defineComponent)({name:"Pen",render:function(o,l){return(0,h.openBlock)(),(0,h.createElementBlock)("svg",de,pe)}});const fe=e=>{const{textColor3:o,infoColor:l,errorColor:n,successColor:t,warningColor:c,textColor1:d,textColor2:u,railColor:v,fontWeightStrong:x,fontSize:z}=e;return Object.assign(Object.assign({},se),{contentFontSize:z,titleFontWeight:x,circleBorder:`2px solid ${o}`,circleBorderInfo:`2px solid ${l}`,circleBorderError:`2px solid ${n}`,circleBorderSuccess:`2px solid ${t}`,circleBorderWarning:`2px solid ${c}`,iconColor:o,iconColorInfo:l,iconColorError:n,iconColorSuccess:t,iconColorWarning:c,titleTextColor:d,contentTextColor:u,metaTextColor:o,lineColor:v})},ve={name:"Timeline",common:X,self:fe},he=ve,T=1.25,xe=r("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${T};
`,[p("horizontal",`
 flex-direction: row;
 `,[g(">",[r("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[p("dashed-line-type",[g(">",[r("timeline-item-timeline",[a("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),g(">",[r("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[g(">",[a("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),r("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[a("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),p("right-placement",[r("timeline-item",[r("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),r("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),p("left-placement",[r("timeline-item",[r("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),r("timeline-item-timeline",`
 left: 0;
 `)])]),r("timeline-item",`
 position: relative;
 `,[g("&:last-child",[r("timeline-item-timeline",[a("line",`
 display: none;
 `)]),r("timeline-item-content",[a("meta",`
 margin-bottom: 0;
 `)])]),r("timeline-item-content",[a("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),a("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),a("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),p("dashed-line-type",[r("timeline-item-timeline",[a("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),r("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${T} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[a("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),a("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),a("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),ze=Object.assign(Object.assign({},B.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),P=Z("n-timeline"),be=b({name:"Timeline",props:ze,setup(e,{slots:o}){const{mergedClsPrefixRef:l}=k(e),n=B("Timeline","-timeline",xe,he,e,l);return Y(P,{props:e,mergedThemeRef:n,mergedClsPrefixRef:l}),()=>{const{value:t}=l;return s("div",{class:[`${t}-timeline`,e.horizontal&&`${t}-timeline--horizontal`,`${t}-timeline--${e.size}-size`,!e.horizontal&&`${t}-timeline--${e.itemPlacement}-placement`]},o)}}}),Ce={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},ye=b({name:"TimelineItem",props:Ce,setup(e){const o=ee(P);o||te("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),W();const{inlineThemeDisabled:l}=k(),n=y(()=>{const{props:{size:c,iconSize:d},mergedThemeRef:u}=o,{type:v}=e,{self:{titleTextColor:x,contentTextColor:z,metaTextColor:R,lineColor:j,titleFontWeight:O,contentFontSize:E,[f("iconSize",c)]:I,[f("titleMargin",c)]:F,[f("titleFontSize",c)]:M,[f("circleBorder",v)]:V,[f("iconColor",v)]:H},common:{cubicBezierEaseInOut:L}}=u.value;return{"--n-bezier":L,"--n-circle-border":V,"--n-icon-color":H,"--n-content-font-size":E,"--n-content-text-color":z,"--n-line-color":j,"--n-meta-text-color":R,"--n-title-font-size":M,"--n-title-font-weight":O,"--n-title-margin":F,"--n-title-text-color":x,"--n-icon-size":ne(d)||I}}),t=l?ie("timeline-item",y(()=>{const{props:{size:c,iconSize:d}}=o,{type:u}=e;return`${c[0]}${d||"a"}${u[0]}`}),n,o.props):void 0;return{mergedClsPrefix:o.mergedClsPrefixRef,cssVars:l?void 0:n,themeClass:t?.themeClass,onRender:t?.onRender}},render(){const{mergedClsPrefix:e,color:o,onRender:l,$slots:n}=this;return l?.(),s("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},s("div",{class:`${e}-timeline-item-timeline`},s("div",{class:`${e}-timeline-item-timeline__line`}),$(n.icon,t=>t?s("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:o}},t):s("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:o}}))),s("div",{class:`${e}-timeline-item-content`},$(n.header,t=>t||this.title?s("div",{class:`${e}-timeline-item-content__title`},t||this.title):null),s("div",{class:`${e}-timeline-item-content__content`},S(n.default,()=>[this.content])),s("div",{class:`${e}-timeline-item-content__meta`},S(n.footer,()=>[this.time]))))}}),$e={"timeline-grid":"_timeline-grid_1fzxd_1"};function Se(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!ae(e)}const Fe=b({setup(){const e=_([]),o=_(!0);oe(async()=>{C.api.recently.all.get().then(n=>{e.value=n.data,o.value=!1})});const{create:l}=D();return()=>{let n;return i(G,{actionsElement:i(le,null,[i(Q,{onClick:()=>{l().then(t=>{t&&e.value.unshift(t)})},icon:i(q,null,null)},null)])},{default:()=>[i(be,null,Se(n=e.value.map(t=>i(ye,{type:"success",key:t.id},{icon(){return i(J,null,{default:()=>[i(ge,null,null)]})},default(){return i("div",{class:$e["timeline-grid"]},[i("span",null,[t.content]),i("div",{class:"action"},[i(me,{placement:"left",positiveText:"取消",negativeText:"删除",onNegativeClick:async()=>{await C.api.recently(t.id).delete(),message.success("删除成功"),e.value.splice(e.value.indexOf(t),1)}},{trigger:()=>i(re,{text:!0,type:"error",size:"tiny"},{default:()=>[m("移除")]}),default:()=>i("span",{class:"break-all max-w-48"},[m("确定要删除 "),t.content,m(" ?")])})])])},footer(){return i(w,{inline:!0,size:5},{default:()=>[i(U,{time:t.created},null),i(w,{inline:!0,size:1,align:"center"},{default:()=>[i(A,null,null),m(" "),t.up,i("span",{class:"mx-2"},[m("/")]),i(K,null,null),m(" "),t.down]})]})}})))?n:{default:()=>[n]})]})}}});export{Fe as default};
