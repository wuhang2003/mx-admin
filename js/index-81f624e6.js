import{F as re,z as ne,y as w,V as p,t as ie}from"./app-c79d7097.js";import{i as c,k as I,h as x,j as S,l as U,K as se,u as q,n as oe,o as _,V as ae,q as le,N as ce,p as m}from"./fade-in.cssr-c6d077ce.js";import{g as de,N as ue,b as F}from"./p-d5bd0779.js";import{d as b,p as A,h as a,a0 as pe,i as K,a2 as fe,c as z,a1 as ve,a as T,o as me,r as y,b as t,Z as C}from"./create-injection-key-6dff4bbb.js";import{a as he}from"./light-3741a186.js";import{J as B,K as $,i as P,aQ as ge,P as j,a8 as xe,Z as V}from"./Card-720de80b.js";import{F as be}from"./Tag-945120fa.js";import{N as d}from"./FormItem-94ab7cfc.js";import{N as ze}from"./DynamicTags-3037b51c.js";import{N as M}from"./Form-190bf06a.js";import"./use-store-ref-10b7967e.js";import"./preload-helper-f651ca80.js";import"./_common-991711fd.js";import"./light-8a4490bb.js";import"./Add-fbc91806.js";import"./prop-8b8caa29.js";const ye=c("steps",`
 width: 100%;
 display: flex;
`,[c("step",`
 position: relative;
 display: flex;
 flex: 1;
 `,[I("disabled","cursor: not-allowed"),I("clickable",`
 cursor: pointer;
 `),x("&:last-child",[c("step-splitor","display: none;")])]),c("step-splitor",`
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
 `,[S("title",`
 white-space: nowrap;
 flex: 0;
 `)]),S("description",`
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
 `,[S("index",`
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
 `,[U()])])]),I("vertical","flex-direction: column;",[se("show-description",[x(">",[c("step","padding-bottom: 8px;")])]),x(">",[c("step","margin-bottom: 16px;",[x("&:last-child","margin-bottom: 0;"),x(">",[c("step-indicator",[x(">",[c("step-splitor",`
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `)])]),c("step-content",[S("description","margin-top: 8px;")])])])])])]);function Se(e,r){return typeof e!="object"||e===null||Array.isArray(e)?null:(e.props||(e.props={}),e.props.internalIndex=r+1,e)}function we(e){return e.map((r,i)=>Se(r,i))}const Ce=Object.assign(Object.assign({},_.props),{current:Number,status:{type:String,default:"process"},size:{type:String,default:"medium"},vertical:Boolean,"onUpdate:current":[Function,Array],onUpdateCurrent:[Function,Array]}),D=pe("n-steps"),Ne=b({name:"Steps",props:Ce,setup(e,{slots:r}){const{mergedClsPrefixRef:i,mergedRtlRef:s}=q(e),f=oe("Steps",s,i),n=_("Steps","-steps",ye,he,e,i);return A(D,{props:e,mergedThemeRef:n,mergedClsPrefixRef:i,stepsSlots:r}),{mergedClsPrefix:i,rtlEnabled:f}},render(){const{mergedClsPrefix:e}=this;return a("div",{class:[`${e}-steps`,this.rtlEnabled&&`${e}-steps--rtl`,this.vertical&&`${e}-steps--vertical`]},we(ae(de(this))))}}),Ie={status:String,title:String,description:String,disabled:Boolean,internalIndex:{type:Number,default:0}},k=b({name:"Step",props:Ie,setup(e){const r=K(D,null);r||fe("step","`n-step` must be placed inside `n-steps`.");const{inlineThemeDisabled:i}=q(),{props:s,mergedThemeRef:f,mergedClsPrefixRef:n,stepsSlots:v}=r,o=z(()=>s.vertical),N=z(()=>{const{status:l}=e;if(l)return l;{const{internalIndex:u}=e,{current:g}=s;if(g===void 0)return"process";if(u<g)return"finish";if(u===g)return s.status||"process";if(u>g)return"wait"}return"process"}),R=z(()=>{const{value:l}=N,{size:u}=s,{common:{cubicBezierEaseInOut:g},self:{stepHeaderFontWeight:H,[m("stepHeaderFontSize",u)]:W,[m("indicatorIndexFontSize",u)]:J,[m("indicatorSize",u)]:L,[m("indicatorIconSize",u)]:Z,[m("indicatorTextColor",l)]:G,[m("indicatorBorderColor",l)]:Q,[m("headerTextColor",l)]:X,[m("splitorColor",l)]:Y,[m("indicatorColor",l)]:ee,[m("descriptionTextColor",l)]:te}}=f.value;return{"--n-bezier":g,"--n-description-text-color":te,"--n-header-text-color":X,"--n-indicator-border-color":Q,"--n-indicator-color":ee,"--n-indicator-icon-size":Z,"--n-indicator-index-font-size":J,"--n-indicator-size":L,"--n-indicator-text-color":G,"--n-splitor-color":Y,"--n-step-header-font-size":W,"--n-step-header-font-weight":H}}),h=i?le("step",z(()=>{const{value:l}=N,{size:u}=s;return`${l[0]}${u[0]}`}),R,s):void 0,O=z(()=>{if(e.disabled)return;const{onUpdateCurrent:l,"onUpdate:current":u}=s;return l||u?()=>{l&&j(l,e.internalIndex),u&&j(u,e.internalIndex)}:void 0});return{stepsSlots:v,mergedClsPrefix:n,vertical:o,mergedStatus:N,handleStepClick:O,cssVars:i?void 0:R,themeClass:h?.themeClass,onRender:h?.onRender}},render(){const{mergedClsPrefix:e,onRender:r,handleStepClick:i,disabled:s}=this,f=B(this.$slots.default,n=>{const v=n||this.description;return v?a("div",{class:`${e}-step-content__description`},v):null});return r?.(),a("div",{class:[`${e}-step`,s&&`${e}-step--disabled`,!s&&i&&`${e}-step--clickable`,this.themeClass,f&&`${e}-step--show-description`,`${e}-step--${this.mergedStatus}-status`],style:this.cssVars,onClick:i},a("div",{class:`${e}-step-indicator`},a("div",{class:`${e}-step-indicator-slot`},a(ce,null,{default:()=>B(this.$slots.icon,n=>{const{mergedStatus:v,stepsSlots:o}=this;return v==="finish"||v==="error"?v==="finish"?a(P,{clsPrefix:e,key:"finish"},{default:()=>$(o["finish-icon"],()=>[a(be,null)])}):v==="error"?a(P,{clsPrefix:e,key:"error"},{default:()=>$(o["error-icon"],()=>[a(ge,null)])}):null:n||a("div",{key:this.internalIndex,class:`${e}-step-indicator-slot__index`},this.internalIndex)})})),this.vertical?a("div",{class:`${e}-step-splitor`}):null),a("div",{class:`${e}-step-content`},a("div",{class:`${e}-step-content-header`},a("div",{class:`${e}-step-content-header__title`},$(this.$slots.title,()=>[this.title])),this.vertical?null:a("div",{class:`${e}-step-splitor`})),f))}}),Ue="_full_1tlcw_1",$e={full:Ue},ke=()=>K("configs"),Ze=b({setup(){ve(()=>{re()&&ne()});const e=T({});me(async()=>{const i=await w.api.init.configs.default.get();Object.assign(e,i)}),A("configs",e);const r=y(0);return()=>t("div",{class:$e.full},[t(xe,{title:"初始化",class:"modal-card sm m-auto form-card"},{default:()=>[t(Ne,{size:"small",current:r.value},{default:()=>[t(k,{status:r.value>0?"finish":"process",title:"站点设置",description:"先设置一下站点相关配置吧"},null),t(k,{status:r.value>1?"finish":r.value<1?"wait":"process",title:"主人信息",description:"请告诉你的名字"},null),t(k,{status:r.value>2?"finish":r.value<2?"wait":"process",title:"(๑•̀ㅂ•́)و✧",description:"一切就绪了"},null)]}),t("div",{class:"mt-[3.5rem]"},[JSON.stringify(e)==="{}"?t("div",{class:"text-center py-4"},[t(ue,null,null)]):a([Fe,Te,Ve][r.value],{onNext(){r.value++}})])]})])}}),E={onNext:{type:Function,required:!0}},Fe=b({props:E,setup(e){const r=ke(),i=y(r?.seo?.title||""),s=y(r?.seo?.keywords),f=y(r?.seo?.description||""),n=T({adminUrl:`${location.origin}/qaqdmin`,serverUrl:`${location.origin}/api/v2`,webUrl:location.origin,wsUrl:location.origin}),v=async()=>{await Promise.all([w.api.init.configs("seo").patch({data:{title:i.value,keywords:s.value,description:f.value}}),w.api.init.configs("url").patch({data:{...n}})]),e.onNext()};return()=>t(M,null,{default:()=>[t(d,{label:"站点标题",required:!0},{default:()=>[t(p,{value:i.value,onUpdateValue:o=>void(i.value=o)},null)]}),t(d,{label:"站点描述",required:!0},{default:()=>[t(p,{value:f.value,onUpdateValue:o=>void(f.value=o)},null)]}),t(d,{label:"关键字"},{default:()=>[t(ze,{value:s.value,onUpdateValue:o=>void(s.value=o)},null)]}),t(d,{label:"前端地址"},{default:()=>[t(p,{value:n.webUrl,onInput:o=>void(n.webUrl=o)},null)]}),t(d,{label:"API 地址"},{default:()=>[t(p,{value:n.serverUrl,onInput:o=>void(n.serverUrl=o)},null)]}),t(d,{label:"后台地址"},{default:()=>[t(p,{value:n.adminUrl,onInput:o=>void(n.adminUrl=o)},null)]}),t(d,{label:"Gateway 地址"},{default:()=>[t(p,{value:n.wsUrl,onInput:o=>void(n.wsUrl=o)},null)]}),t(F,{justify:"end"},{default:()=>[t(V,{onClick:v,round:!0,type:"primary"},{default:()=>[C("下一步")]})]})]})}}),Te=b({props:E,setup(e){const r=T({}),i=y(""),s=ie(),f=async()=>{if(i.value!==r.password){s.error("两次密码不一致");return}await w.api.user.register.post({data:{...r}}),e.onNext()};return()=>t(M,null,{default:()=>[t(d,{label:"你的名字 (登录凭证)",required:!0},{default:()=>[t(p,{value:r.username,onUpdateValue:n=>{r.username=n}},null)]}),t(d,{label:"昵称"},{default:()=>[t(p,{value:r.name,onUpdateValue:n=>{r.name=n}},null)]}),t(d,{label:"邮箱",required:!0},{default:()=>[t(p,{value:r.mail,onUpdateValue:n=>{r.mail=n}},null)]}),t(d,{label:"密码",required:!0},{default:()=>[t(p,{value:r.password,type:"password",onUpdateValue:n=>{r.password=n}},null)]}),t(d,{label:"确认密码",required:!0},{default:()=>[t(p,{value:i.value,type:"password",onUpdateValue:n=>{i.value=n}},null)]}),t(d,{label:"个人首页"},{default:()=>[t(p,{value:r.url,onUpdateValue:n=>{r.url=n}},null)]}),t(d,{label:"头像"},{default:()=>[t(p,{value:r.avatar,onUpdateValue:n=>{r.avatar=n}},null)]}),t(d,{label:"个人介绍"},{default:()=>[t(p,{value:r.introduce,onUpdateValue:n=>{r.introduce=n}},null)]}),t(F,{justify:"end"},{default:()=>[t(V,{disabled:!r.username||!r.mail||!r.password||!i.value,onClick:f,round:!0,type:"primary"},{default:()=>[C("下一步")]})]})]})}}),Ve=b({props:E,setup(){return()=>t(F,{class:"text-center",vertical:!0},{default:()=>[t("span",{class:"text-base"},[C("你已经完成了所有的步骤，干得漂亮。")]),t(V,{type:"primary",round:!0,onClick:()=>{localStorage.setItem("to-setting","true"),location.reload()}},{default:()=>[C("LINK START")]})]})}});export{Ze as default};
