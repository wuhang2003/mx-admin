import{s as ne}from"./confetti-e4552d79.js";import{V as c,az as N,U as b,ay as w,dH as U,b4 as re,d as x,Y as q,aB as ie,a1 as _,em as se,aD as A,a6 as o,dU as ae,dV as oe,aE as le,aH as D,aI as ce,i as z,b2 as m,a3 as de,af as B,bx as P,by as k,dG as ue,cq as j,en as pe,al as fe,aL as ve,c0 as me,r as T,g as he,R as C,s as y,h as n,J as ge,bC as be,t as p,m as F,l as E,k as S,u as xe}from"./index-c46c2349.js";import{F as ze}from"./Tag-7255e277.js";import{N as d}from"./FormItem-365dd298.js";import{N as ye}from"./DynamicTags-e86e503f.js";import{N as H}from"./Form-01351a1d.js";import"./prop-8b8caa29.js";import"./Add-dec0b425.js";const we=c("steps",`
 width: 100%;
 display: flex;
`,[c("step",`
 position: relative;
 display: flex;
 flex: 1;
 `,[N("disabled","cursor: not-allowed"),N("clickable",`
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
 `,[w("title",`
 white-space: nowrap;
 flex: 0;
 `)]),w("description",`
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
 `,[w("index",`
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
 `,[U()])])]),N("vertical","flex-direction: column;",[re("show-description",[b(">",[c("step","padding-bottom: 8px;")])]),b(">",[c("step","margin-bottom: 16px;",[b("&:last-child","margin-bottom: 0;"),b(">",[c("step-indicator",[b(">",[c("step-splitor",`
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `)])]),c("step-content",[w("description","margin-top: 8px;")])])])])])]);function Ce(e,t){return typeof e!="object"||e===null||Array.isArray(e)?null:(e.props||(e.props={}),e.props.internalIndex=t+1,e)}function Se(e){return e.map((t,i)=>Ce(t,i))}const Ie=Object.assign(Object.assign({},_.props),{current:Number,status:{type:String,default:"process"},size:{type:String,default:"medium"},vertical:Boolean,"onUpdate:current":[Function,Array],onUpdateCurrent:[Function,Array]}),M=le("n-steps"),Ne=x({name:"Steps",props:Ie,setup(e,{slots:t}){const{mergedClsPrefixRef:i,mergedRtlRef:s}=q(e),f=ie("Steps",s,i),r=_("Steps","-steps",we,se,e,i);return A(M,{props:e,mergedThemeRef:r,mergedClsPrefixRef:i,stepsSlots:t}),{mergedClsPrefix:i,rtlEnabled:f}},render(){const{mergedClsPrefix:e}=this;return o("div",{class:[`${e}-steps`,this.rtlEnabled&&`${e}-steps--rtl`,this.vertical&&`${e}-steps--vertical`]},Se(ae(oe(this))))}}),Ue={status:String,title:String,description:String,disabled:Boolean,internalIndex:{type:Number,default:0}},$=x({name:"Step",props:Ue,setup(e){const t=D(M,null);t||ce("step","`n-step` must be placed inside `n-steps`.");const{inlineThemeDisabled:i}=q(),{props:s,mergedThemeRef:f,mergedClsPrefixRef:r,stepsSlots:v}=t,a=z(()=>s.vertical),I=z(()=>{const{status:l}=e;if(l)return l;{const{internalIndex:u}=e,{current:g}=s;if(g===void 0)return"process";if(u<g)return"finish";if(u===g)return s.status||"process";if(u>g)return"wait"}return"process"}),V=z(()=>{const{value:l}=I,{size:u}=s,{common:{cubicBezierEaseInOut:g},self:{stepHeaderFontWeight:K,[m("stepHeaderFontSize",u)]:W,[m("indicatorIndexFontSize",u)]:L,[m("indicatorSize",u)]:G,[m("indicatorIconSize",u)]:J,[m("indicatorTextColor",l)]:Y,[m("indicatorBorderColor",l)]:Q,[m("headerTextColor",l)]:X,[m("splitorColor",l)]:Z,[m("indicatorColor",l)]:ee,[m("descriptionTextColor",l)]:te}}=f.value;return{"--n-bezier":g,"--n-description-text-color":te,"--n-header-text-color":X,"--n-indicator-border-color":Q,"--n-indicator-color":ee,"--n-indicator-icon-size":J,"--n-indicator-index-font-size":L,"--n-indicator-size":G,"--n-indicator-text-color":Y,"--n-splitor-color":Z,"--n-step-header-font-size":W,"--n-step-header-font-weight":K}}),h=i?de("step",z(()=>{const{value:l}=I,{size:u}=s;return`${l[0]}${u[0]}`}),V,s):void 0,O=z(()=>{if(e.disabled)return;const{onUpdateCurrent:l,"onUpdate:current":u}=s;return l||u?()=>{l&&B(l,e.internalIndex),u&&B(u,e.internalIndex)}:void 0});return{stepsSlots:v,mergedClsPrefix:r,vertical:a,mergedStatus:I,handleStepClick:O,cssVars:i?void 0:V,themeClass:h?.themeClass,onRender:h?.onRender}},render(){const{mergedClsPrefix:e,onRender:t,handleStepClick:i,disabled:s}=this,f=P(this.$slots.default,r=>{const v=r||this.description;return v?o("div",{class:`${e}-step-content__description`},v):null});return t?.(),o("div",{class:[`${e}-step`,s&&`${e}-step--disabled`,!s&&i&&`${e}-step--clickable`,this.themeClass,f&&`${e}-step--show-description`,`${e}-step--${this.mergedStatus}-status`],style:this.cssVars,onClick:i},o("div",{class:`${e}-step-indicator`},o("div",{class:`${e}-step-indicator-slot`},o(ue,null,{default:()=>P(this.$slots.icon,r=>{const{mergedStatus:v,stepsSlots:a}=this;return v==="finish"||v==="error"?v==="finish"?o(j,{clsPrefix:e,key:"finish"},{default:()=>k(a["finish-icon"],()=>[o(ze,null)])}):v==="error"?o(j,{clsPrefix:e,key:"error"},{default:()=>k(a["error-icon"],()=>[o(pe,null)])}):null:r||o("div",{key:this.internalIndex,class:`${e}-step-indicator-slot__index`},this.internalIndex)})})),this.vertical?o("div",{class:`${e}-step-splitor`}):null),o("div",{class:`${e}-step-content`},o("div",{class:`${e}-step-content-header`},o("div",{class:`${e}-step-content-header__title`},k(this.$slots.title,()=>[this.title])),this.vertical?null:o("div",{class:`${e}-step-splitor`})),f))}}),ke="_full_1tlcw_1",$e={full:ke},Te=()=>D("configs"),He=x({setup(){fe(()=>{ve()&&me()});const e=T({});he(async()=>{const i=await C.api.init.configs.default.get();Object.assign(e,i)}),A("configs",e);const t=y(0);return()=>n("div",{class:$e.full},[n(ge,{title:"初始化",class:"modal-card sm m-auto form-card"},{default:()=>[n(Ne,{size:"small",current:t.value},{default:()=>[n($,{status:t.value>0?"finish":"process",title:"站点设置",description:"先设置一下站点相关配置吧"},null),n($,{status:t.value>1?"finish":t.value<1?"wait":"process",title:"主人信息",description:"请告诉你的名字"},null),n($,{status:t.value>2?"finish":t.value<2?"wait":"process",title:"(๑•̀ㅂ•́)و✧",description:"一切就绪了"},null)]}),n("div",{class:"mt-[3.5rem]"},[JSON.stringify(e)==="{}"?n("div",{class:"text-center py-4"},[n(be,null,null)]):o([Fe,Ee,Re][t.value],{onNext(){t.value++}})])]})])}}),R={onNext:{type:Function,required:!0}},Fe=x({props:R,setup(e){const t=Te(),i=y(t?.seo?.title||""),s=y(t?.seo?.keywords),f=y(t?.seo?.description||""),r=T({adminUrl:`${location.origin}/qaqdmin`,serverUrl:`${location.origin}/api/v2`,webUrl:location.origin,wsUrl:location.origin}),v=async()=>{await Promise.all([C.api.init.configs("seo").patch({data:{title:i.value,keywords:s.value,description:f.value}}),C.api.init.configs("url").patch({data:{...r}})]),e.onNext()};return()=>n(H,null,{default:()=>[n(d,{label:"站点标题",required:!0},{default:()=>[n(p,{value:i.value,onUpdateValue:a=>void(i.value=a)},null)]}),n(d,{label:"站点描述",required:!0},{default:()=>[n(p,{value:f.value,onUpdateValue:a=>void(f.value=a)},null)]}),n(d,{label:"关键字"},{default:()=>[n(ye,{value:s.value,onUpdateValue:a=>void(s.value=a)},null)]}),n(d,{label:"前端地址"},{default:()=>[n(p,{value:r.webUrl,onInput:a=>void(r.webUrl=a)},null)]}),n(d,{label:"API 地址"},{default:()=>[n(p,{value:r.serverUrl,onInput:a=>void(r.serverUrl=a)},null)]}),n(d,{label:"后台地址"},{default:()=>[n(p,{value:r.adminUrl,onInput:a=>void(r.adminUrl=a)},null)]}),n(d,{label:"Gateway 地址"},{default:()=>[n(p,{value:r.wsUrl,onInput:a=>void(r.wsUrl=a)},null)]}),n(F,{justify:"end"},{default:()=>[n(E,{onClick:v,round:!0,type:"primary",disabled:!i.value||!f.value},{default:()=>[S("下一步")]})]})]})}}),Ee=x({props:R,setup(e){const t=T({}),i=y(""),s=xe(),f=async()=>{if(i.value!==t.password){s.error("两次密码不一致");return}for(const r in t)t[r]===""&&(t[r]=void 0);await C.api.user.register.post({data:{...t}}),e.onNext()};return()=>n(H,null,{default:()=>[n(d,{label:"你的名字 (登录凭证)",required:!0},{default:()=>[n(p,{value:t.username,onUpdateValue:r=>{t.username=r}},null)]}),n(d,{label:"昵称"},{default:()=>[n(p,{value:t.name,onUpdateValue:r=>{t.name=r}},null)]}),n(d,{label:"邮箱",required:!0},{default:()=>[n(p,{value:t.mail,onUpdateValue:r=>{t.mail=r}},null)]}),n(d,{label:"密码",required:!0},{default:()=>[n(p,{value:t.password,type:"password",onUpdateValue:r=>{t.password=r}},null)]}),n(d,{label:"确认密码",required:!0},{default:()=>[n(p,{value:i.value,type:"password",onUpdateValue:r=>{i.value=r}},null)]}),n(d,{label:"个人首页"},{default:()=>[n(p,{value:t.url,onUpdateValue:r=>{t.url=r}},null)]}),n(d,{label:"头像"},{default:()=>[n(p,{value:t.avatar,onUpdateValue:r=>{t.avatar=r}},null)]}),n(d,{label:"个人介绍"},{default:()=>[n(p,{value:t.introduce,onUpdateValue:r=>{t.introduce=r}},null)]}),n(F,{justify:"end"},{default:()=>[n(E,{disabled:!t.username||!t.mail||!t.password||!i.value,onClick:f,round:!0,type:"primary"},{default:()=>[S("下一步")]})]})]})}}),Re=x({props:R,setup(){return()=>n(F,{class:"text-center",vertical:!0},{default:()=>[n("span",{class:"text-base"},[S("你已经完成了所有的步骤，干得漂亮。")]),n(E,{type:"primary",round:!0,onClick:()=>{localStorage.setItem("to-setting","true"),ne(),setTimeout(()=>{location.reload()},200)}},{default:()=>[S("LINK START")]})]})}});export{He as default};
