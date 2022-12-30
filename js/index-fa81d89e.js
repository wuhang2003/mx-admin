import{C as re,y as ne,x as S,q as ie}from"./app-0ff7b4dc.js";import{E as c,H as I,D as b,G as C,I as U,bI as se,k as x,J as j,K as oe,L as _,t as A,v as a,b8 as ae,b4 as le,l as M,bb as ce,n as z,N as de,aN as V,aC as $,O as ue,Q as P,M as m,b2 as q,ap as pe,B as F,R as fe,y,U as t,aO as T,bq as w}from"./Button-2747a3c5.js";import{g as ve,N as me,a as E}from"./Spin-3ddc0370.js";import{a as he}from"./light-5b44502e.js";import{F as ge}from"./Tag-e8d95e9c.js";import{E as be,b as xe}from"./Card-b81187b1.js";import{N as d}from"./FormItem-c1d3bab9.js";import{N as p}from"./use-store-ref-0c1782ca.js";import{N as ze}from"./DynamicTags-b6f051e6.js";import{N as O}from"./Form-72c5e878.js";import"./preload-helper-f651ca80.js";import"./_common-991711fd.js";import"./context-07ff35db.js";import"./light-6e3a4c51.js";import"./Add-0b9f074d.js";import"./prop-8b8caa29.js";const ye=c("steps",`
 width: 100%;
 display: flex;
`,[c("step",`
 position: relative;
 display: flex;
 flex: 1;
 `,[I("disabled","cursor: not-allowed"),I("clickable",`
 cursor: pointer;
 `),b("&:last-child",[c("step-splitor","display: none;")])]),c("step-splitor",`
 background-color: var(--n-splitor-color);
 margin-top: calc(var(--n-step-header-font-size) / 2);
 height: 1px;
 flex: 1;
 align-self: flex-start;
 margin-left: 12px;
 margin-right: 12px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),c("step-content","flex: 1;",[c("step-content-header",`
 color: var(--n-header-text-color);
 margin-top: calc(var(--n-indicator-size) / 2 - var(--n-step-header-font-size) / 2);
 line-height: var(--n-step-header-font-size);
 font-size: var(--n-step-header-font-size);
 position: relative;
 display: flex;
 font-weight: var(--n-step-header-font-weight);
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[C("title",`
 white-space: nowrap;
 flex: 0;
 `)]),C("description",`
 color: var(--n-description-text-color);
 margin-top: 12px;
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),c("step-indicator",`
 background-color: var(--n-indicator-color);
 box-shadow: 0 0 0 1px var(--n-indicator-border-color);
 height: var(--n-indicator-size);
 width: var(--n-indicator-size);
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[c("step-indicator-slot",`
 position: relative;
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 font-size: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 `,[C("index",`
 display: inline-block;
 text-align: center;
 position: absolute;
 left: 0;
 top: 0;
 font-size: var(--n-indicator-index-font-size);
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[U()]),c("icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[U()]),c("base-icon",`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[U()])])]),I("vertical","flex-direction: column;",[se("show-description",[b(">",[c("step","padding-bottom: 8px;")])]),b(">",[c("step","margin-bottom: 16px;",[b("&:last-child","margin-bottom: 0;"),b(">",[c("step-indicator",[b(">",[c("step-splitor",`
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `)])]),c("step-content",[C("description","margin-top: 8px;")])])])])])]);function Ce(e,r){return typeof e!="object"||e===null||Array.isArray(e)?null:(e.props||(e.props={}),e.props.internalIndex=r+1,e)}function Se(e){return e.map((r,i)=>Ce(r,i))}const we=Object.assign(Object.assign({},_.props),{current:Number,status:{type:String,default:"process"},size:{type:String,default:"medium"},vertical:Boolean,"onUpdate:current":[Function,Array],onUpdateCurrent:[Function,Array]}),D=le("n-steps"),Ne=x({name:"Steps",props:we,setup(e,{slots:r}){const{mergedClsPrefixRef:i,mergedRtlRef:s}=j(e),f=oe("Steps",s,i),n=_("Steps","-steps",ye,he,e,i);return A(D,{props:e,mergedThemeRef:n,mergedClsPrefixRef:i,stepsSlots:r}),{mergedClsPrefix:i,rtlEnabled:f}},render(){const{mergedClsPrefix:e}=this;return a("div",{class:[`${e}-steps`,this.rtlEnabled&&`${e}-steps--rtl`,this.vertical&&`${e}-steps--vertical`]},Se(ae(ve(this))))}}),Ie={status:String,title:String,description:String,disabled:Boolean,internalIndex:{type:Number,default:0}},k=x({name:"Step",props:Ie,setup(e){const r=M(D,null);r||ce("step","`n-step` must be placed inside `n-steps`.");const{inlineThemeDisabled:i}=j(),{props:s,mergedThemeRef:f,mergedClsPrefixRef:n,stepsSlots:v}=r,o=z(()=>s.vertical),N=z(()=>{const{status:l}=e;if(l)return l;{const{internalIndex:u}=e,{current:g}=s;if(g===void 0)return"process";if(u<g)return"finish";if(u===g)return s.status||"process";if(u>g)return"wait"}return"process"}),B=z(()=>{const{value:l}=N,{size:u}=s,{common:{cubicBezierEaseInOut:g},self:{stepHeaderFontWeight:K,[m("stepHeaderFontSize",u)]:W,[m("indicatorIndexFontSize",u)]:L,[m("indicatorSize",u)]:G,[m("indicatorIconSize",u)]:J,[m("indicatorTextColor",l)]:Q,[m("indicatorBorderColor",l)]:X,[m("headerTextColor",l)]:Y,[m("splitorColor",l)]:Z,[m("indicatorColor",l)]:ee,[m("descriptionTextColor",l)]:te}}=f.value;return{"--n-bezier":g,"--n-description-text-color":te,"--n-header-text-color":Y,"--n-indicator-border-color":X,"--n-indicator-color":ee,"--n-indicator-icon-size":J,"--n-indicator-index-font-size":L,"--n-indicator-size":G,"--n-indicator-text-color":Q,"--n-splitor-color":Z,"--n-step-header-font-size":W,"--n-step-header-font-weight":K}}),h=i?de("step",z(()=>{const{value:l}=N,{size:u}=s;return`${l[0]}${u[0]}`}),B,s):void 0,H=z(()=>{if(e.disabled)return;const{onUpdateCurrent:l,"onUpdate:current":u}=s;return l||u?()=>{l&&q(l,e.internalIndex),u&&q(u,e.internalIndex)}:void 0});return{stepsSlots:v,mergedClsPrefix:n,vertical:o,mergedStatus:N,handleStepClick:H,cssVars:i?void 0:B,themeClass:h?.themeClass,onRender:h?.onRender}},render(){const{mergedClsPrefix:e,onRender:r,handleStepClick:i,disabled:s}=this,f=V(this.$slots.default,n=>{const v=n||this.description;return v?a("div",{class:`${e}-step-content__description`},v):null});return r?.(),a("div",{class:[`${e}-step`,s&&`${e}-step--disabled`,!s&&i&&`${e}-step--clickable`,this.themeClass,f&&`${e}-step--show-description`,`${e}-step--${this.mergedStatus}-status`],style:this.cssVars,onClick:i},a("div",{class:`${e}-step-indicator`},a("div",{class:`${e}-step-indicator-slot`},a(ue,null,{default:()=>V(this.$slots.icon,n=>{const{mergedStatus:v,stepsSlots:o}=this;return v==="finish"||v==="error"?v==="finish"?a(P,{clsPrefix:e,key:"finish"},{default:()=>$(o["finish-icon"],()=>[a(ge,null)])}):v==="error"?a(P,{clsPrefix:e,key:"error"},{default:()=>$(o["error-icon"],()=>[a(be,null)])}):null:n||a("div",{key:this.internalIndex,class:`${e}-step-indicator-slot__index`},this.internalIndex)})})),this.vertical?a("div",{class:`${e}-step-splitor`}):null),a("div",{class:`${e}-step-content`},a("div",{class:`${e}-step-content-header`},a("div",{class:`${e}-step-content-header__title`},$(this.$slots.title,()=>[this.title])),this.vertical?null:a("div",{class:`${e}-step-splitor`})),f))}}),Ue="_full_1tlcw_1",$e={full:Ue},ke=()=>M("configs"),Je=x({setup(){pe(()=>{re()&&ne()});const e=F({});fe(async()=>{const i=await S.api.init.configs.default.get();Object.assign(e,i)}),A("configs",e);const r=y(0);return()=>t("div",{class:$e.full},[t(xe,{title:"初始化",class:"modal-card sm m-auto form-card"},{default:()=>[t(Ne,{size:"small",current:r.value},{default:()=>[t(k,{status:r.value>0?"finish":"process",title:"站点设置",description:"先设置一下站点相关配置吧"},null),t(k,{status:r.value>1?"finish":r.value<1?"wait":"process",title:"主人信息",description:"请告诉你的名字"},null),t(k,{status:r.value>2?"finish":r.value<2?"wait":"process",title:"(๑•̀ㅂ•́)و✧",description:"一切就绪了"},null)]}),t("div",{class:"mt-[3.5rem]"},[JSON.stringify(e)==="{}"?t("div",{class:"text-center py-4"},[t(me,null,null)]):a([Fe,Te,Ee][r.value],{onNext(){r.value++}})])]})])}}),R={onNext:{type:Function,required:!0}},Fe=x({props:R,setup(e){const r=ke(),i=y(r?.seo?.title||""),s=y(r?.seo?.keywords),f=y(r?.seo?.description||""),n=F({adminUrl:`${location.origin}/qaqdmin`,serverUrl:`${location.origin}/api/v2`,webUrl:location.origin,wsUrl:location.origin}),v=async()=>{await Promise.all([S.api.init.configs("seo").patch({data:{title:i.value,keywords:s.value,description:f.value}}),S.api.init.configs("url").patch({data:{...n}})]),e.onNext()};return()=>t(O,null,{default:()=>[t(d,{label:"站点标题",required:!0},{default:()=>[t(p,{value:i.value,onUpdateValue:o=>void(i.value=o)},null)]}),t(d,{label:"站点描述",required:!0},{default:()=>[t(p,{value:f.value,onUpdateValue:o=>void(f.value=o)},null)]}),t(d,{label:"关键字"},{default:()=>[t(ze,{value:s.value,onUpdateValue:o=>void(s.value=o)},null)]}),t(d,{label:"前端地址"},{default:()=>[t(p,{value:n.webUrl,onInput:o=>void(n.webUrl=o)},null)]}),t(d,{label:"API 地址"},{default:()=>[t(p,{value:n.serverUrl,onInput:o=>void(n.serverUrl=o)},null)]}),t(d,{label:"后台地址"},{default:()=>[t(p,{value:n.adminUrl,onInput:o=>void(n.adminUrl=o)},null)]}),t(d,{label:"Gateway 地址"},{default:()=>[t(p,{value:n.wsUrl,onInput:o=>void(n.wsUrl=o)},null)]}),t(E,{justify:"end"},{default:()=>[t(T,{onClick:v,round:!0,type:"primary"},{default:()=>[w("下一步")]})]})]})}}),Te=x({props:R,setup(e){const r=F({}),i=y(""),s=ie(),f=async()=>{if(i.value!==r.password){s.error("两次密码不一致");return}await S.api.user.register.post({data:{...r}}),e.onNext()};return()=>t(O,null,{default:()=>[t(d,{label:"你的名字 (登录凭证)",required:!0},{default:()=>[t(p,{value:r.username,onUpdateValue:n=>{r.username=n}},null)]}),t(d,{label:"昵称"},{default:()=>[t(p,{value:r.name,onUpdateValue:n=>{r.name=n}},null)]}),t(d,{label:"邮箱",required:!0},{default:()=>[t(p,{value:r.mail,onUpdateValue:n=>{r.mail=n}},null)]}),t(d,{label:"密码",required:!0},{default:()=>[t(p,{value:r.password,type:"password",onUpdateValue:n=>{r.password=n}},null)]}),t(d,{label:"确认密码",required:!0},{default:()=>[t(p,{value:i.value,type:"password",onUpdateValue:n=>{i.value=n}},null)]}),t(d,{label:"个人首页"},{default:()=>[t(p,{value:r.url,onUpdateValue:n=>{r.url=n}},null)]}),t(d,{label:"头像"},{default:()=>[t(p,{value:r.avatar,onUpdateValue:n=>{r.avatar=n}},null)]}),t(d,{label:"个人介绍"},{default:()=>[t(p,{value:r.introduce,onUpdateValue:n=>{r.introduce=n}},null)]}),t(E,{justify:"end"},{default:()=>[t(T,{disabled:!r.username||!r.mail||!r.password||!i.value,onClick:f,round:!0,type:"primary"},{default:()=>[w("下一步")]})]})]})}}),Ee=x({props:R,setup(){return()=>t(E,{class:"text-center",vertical:!0},{default:()=>[t("span",{class:"text-base"},[w("你已经完成了所有的步骤，干得漂亮。")]),t(T,{type:"primary",round:!0,onClick:()=>{localStorage.setItem("to-setting","true"),location.reload()}},{default:()=>[w("LINK START")]})]})}});export{Je as default};
