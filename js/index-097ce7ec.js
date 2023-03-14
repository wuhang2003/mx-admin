import{H as re,y as ne,x as w,q as ie}from"./app-447ba742.js";import{E as c,H as I,D as b,G as S,I as U,bD as se,k as x,J as j,K as oe,L as _,t as A,v as a,b8 as ae,b4 as le,l as D,bb as ce,n as z,N as de,aN as V,aD as k,O as ue,Q as P,M as m,b2 as q,aq as pe,B as F,R as fe,y,U as r,aO as T,br as C}from"./Button-5ec267f1.js";import{g as ve,N as me,a as E}from"./Spin-2c3e5ca3.js";import{a as he}from"./light-1de347ec.js";import{F as ge}from"./Tag-62076a6b.js";import{E as be,b as xe}from"./Card-73dd4072.js";import{N as d}from"./FormItem-32059e79.js";import{N as p}from"./use-store-ref-095f705c.js";import{N as ze}from"./DynamicTags-f869015d.js";import{N as M}from"./Form-4f2beb1e.js";import"./preload-helper-f651ca80.js";import"./_common-991711fd.js";import"./context-2fd66e76.js";import"./light-50e066bd.js";import"./Add-89af046c.js";import"./prop-8b8caa29.js";const ye=c("steps",`
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
 `,[U()])])]),I("vertical","flex-direction: column;",[se("show-description",[b(">",[c("step","padding-bottom: 8px;")])]),b(">",[c("step","margin-bottom: 16px;",[b("&:last-child","margin-bottom: 0;"),b(">",[c("step-indicator",[b(">",[c("step-splitor",`
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `)])]),c("step-content",[S("description","margin-top: 8px;")])])])])])]);function Se(e,t){return typeof e!="object"||e===null||Array.isArray(e)?null:(e.props||(e.props={}),e.props.internalIndex=t+1,e)}function we(e){return e.map((t,i)=>Se(t,i))}const Ce=Object.assign(Object.assign({},_.props),{current:Number,status:{type:String,default:"process"},size:{type:String,default:"medium"},vertical:Boolean,"onUpdate:current":[Function,Array],onUpdateCurrent:[Function,Array]}),O=le("n-steps"),Ne=x({name:"Steps",props:Ce,setup(e,{slots:t}){const{mergedClsPrefixRef:i,mergedRtlRef:s}=j(e),f=oe("Steps",s,i),n=_("Steps","-steps",ye,he,e,i);return A(O,{props:e,mergedThemeRef:n,mergedClsPrefixRef:i,stepsSlots:t}),{mergedClsPrefix:i,rtlEnabled:f}},render(){const{mergedClsPrefix:e}=this;return a("div",{class:[`${e}-steps`,this.rtlEnabled&&`${e}-steps--rtl`,this.vertical&&`${e}-steps--vertical`]},we(ae(ve(this))))}}),Ie={status:String,title:String,description:String,disabled:Boolean,internalIndex:{type:Number,default:0}},$=x({name:"Step",props:Ie,setup(e){const t=D(O,null);t||ce("step","`n-step` must be placed inside `n-steps`.");const{inlineThemeDisabled:i}=j(),{props:s,mergedThemeRef:f,mergedClsPrefixRef:n,stepsSlots:v}=t,o=z(()=>s.vertical),N=z(()=>{const{status:l}=e;if(l)return l;{const{internalIndex:u}=e,{current:g}=s;if(g===void 0)return"process";if(u<g)return"finish";if(u===g)return s.status||"process";if(u>g)return"wait"}return"process"}),B=z(()=>{const{value:l}=N,{size:u}=s,{common:{cubicBezierEaseInOut:g},self:{stepHeaderFontWeight:K,[m("stepHeaderFontSize",u)]:W,[m("indicatorIndexFontSize",u)]:L,[m("indicatorSize",u)]:G,[m("indicatorIconSize",u)]:J,[m("indicatorTextColor",l)]:Q,[m("indicatorBorderColor",l)]:X,[m("headerTextColor",l)]:Y,[m("splitorColor",l)]:Z,[m("indicatorColor",l)]:ee,[m("descriptionTextColor",l)]:te}}=f.value;return{"--n-bezier":g,"--n-description-text-color":te,"--n-header-text-color":Y,"--n-indicator-border-color":X,"--n-indicator-color":ee,"--n-indicator-icon-size":J,"--n-indicator-index-font-size":L,"--n-indicator-size":G,"--n-indicator-text-color":Q,"--n-splitor-color":Z,"--n-step-header-font-size":W,"--n-step-header-font-weight":K}}),h=i?de("step",z(()=>{const{value:l}=N,{size:u}=s;return`${l[0]}${u[0]}`}),B,s):void 0,H=z(()=>{if(e.disabled)return;const{onUpdateCurrent:l,"onUpdate:current":u}=s;return l||u?()=>{l&&q(l,e.internalIndex),u&&q(u,e.internalIndex)}:void 0});return{stepsSlots:v,mergedClsPrefix:n,vertical:o,mergedStatus:N,handleStepClick:H,cssVars:i?void 0:B,themeClass:h?.themeClass,onRender:h?.onRender}},render(){const{mergedClsPrefix:e,onRender:t,handleStepClick:i,disabled:s}=this,f=V(this.$slots.default,n=>{const v=n||this.description;return v?a("div",{class:`${e}-step-content__description`},v):null});return t?.(),a("div",{class:[`${e}-step`,s&&`${e}-step--disabled`,!s&&i&&`${e}-step--clickable`,this.themeClass,f&&`${e}-step--show-description`,`${e}-step--${this.mergedStatus}-status`],style:this.cssVars,onClick:i},a("div",{class:`${e}-step-indicator`},a("div",{class:`${e}-step-indicator-slot`},a(ue,null,{default:()=>V(this.$slots.icon,n=>{const{mergedStatus:v,stepsSlots:o}=this;return v==="finish"||v==="error"?v==="finish"?a(P,{clsPrefix:e,key:"finish"},{default:()=>k(o["finish-icon"],()=>[a(ge,null)])}):v==="error"?a(P,{clsPrefix:e,key:"error"},{default:()=>k(o["error-icon"],()=>[a(be,null)])}):null:n||a("div",{key:this.internalIndex,class:`${e}-step-indicator-slot__index`},this.internalIndex)})})),this.vertical?a("div",{class:`${e}-step-splitor`}):null),a("div",{class:`${e}-step-content`},a("div",{class:`${e}-step-content-header`},a("div",{class:`${e}-step-content-header__title`},k(this.$slots.title,()=>[this.title])),this.vertical?null:a("div",{class:`${e}-step-splitor`})),f))}}),Ue="_full_1tlcw_1",ke={full:Ue},$e=()=>D("configs"),Je=x({setup(){pe(()=>{re()&&ne()});const e=F({});fe(async()=>{const i=await w.api.init.configs.default.get();Object.assign(e,i)}),A("configs",e);const t=y(0);return()=>r("div",{class:ke.full},[r(xe,{title:"初始化",class:"modal-card sm m-auto form-card"},{default:()=>[r(Ne,{size:"small",current:t.value},{default:()=>[r($,{status:t.value>0?"finish":"process",title:"站点设置",description:"先设置一下站点相关配置吧"},null),r($,{status:t.value>1?"finish":t.value<1?"wait":"process",title:"主人信息",description:"请告诉你的名字"},null),r($,{status:t.value>2?"finish":t.value<2?"wait":"process",title:"(๑•̀ㅂ•́)و✧",description:"一切就绪了"},null)]}),r("div",{class:"mt-[3.5rem]"},[JSON.stringify(e)==="{}"?r("div",{class:"text-center py-4"},[r(me,null,null)]):a([Fe,Te,Ee][t.value],{onNext(){t.value++}})])]})])}}),R={onNext:{type:Function,required:!0}},Fe=x({props:R,setup(e){const t=$e(),i=y(t?.seo?.title||""),s=y(t?.seo?.keywords),f=y(t?.seo?.description||""),n=F({adminUrl:`${location.origin}/qaqdmin`,serverUrl:`${location.origin}/api/v2`,webUrl:location.origin,wsUrl:location.origin}),v=async()=>{await Promise.all([w.api.init.configs("seo").patch({data:{title:i.value,keywords:s.value,description:f.value}}),w.api.init.configs("url").patch({data:{...n}})]),e.onNext()};return()=>r(M,null,{default:()=>[r(d,{label:"站点标题",required:!0},{default:()=>[r(p,{value:i.value,onUpdateValue:o=>void(i.value=o)},null)]}),r(d,{label:"站点描述",required:!0},{default:()=>[r(p,{value:f.value,onUpdateValue:o=>void(f.value=o)},null)]}),r(d,{label:"关键字"},{default:()=>[r(ze,{value:s.value,onUpdateValue:o=>void(s.value=o)},null)]}),r(d,{label:"前端地址"},{default:()=>[r(p,{value:n.webUrl,onInput:o=>void(n.webUrl=o)},null)]}),r(d,{label:"API 地址"},{default:()=>[r(p,{value:n.serverUrl,onInput:o=>void(n.serverUrl=o)},null)]}),r(d,{label:"后台地址"},{default:()=>[r(p,{value:n.adminUrl,onInput:o=>void(n.adminUrl=o)},null)]}),r(d,{label:"Gateway 地址"},{default:()=>[r(p,{value:n.wsUrl,onInput:o=>void(n.wsUrl=o)},null)]}),r(E,{justify:"end"},{default:()=>[r(T,{onClick:v,round:!0,type:"primary",disabled:!i.value||!f.value},{default:()=>[C("下一步")]})]})]})}}),Te=x({props:R,setup(e){const t=F({}),i=y(""),s=ie(),f=async()=>{if(i.value!==t.password){s.error("两次密码不一致");return}for(const n in t)t[n]===""&&(t[n]=void 0);await w.api.user.register.post({data:{...t}}),e.onNext()};return()=>r(M,null,{default:()=>[r(d,{label:"你的名字 (登录凭证)",required:!0},{default:()=>[r(p,{value:t.username,onUpdateValue:n=>{t.username=n}},null)]}),r(d,{label:"昵称"},{default:()=>[r(p,{value:t.name,onUpdateValue:n=>{t.name=n}},null)]}),r(d,{label:"邮箱",required:!0},{default:()=>[r(p,{value:t.mail,onUpdateValue:n=>{t.mail=n}},null)]}),r(d,{label:"密码",required:!0},{default:()=>[r(p,{value:t.password,type:"password",onUpdateValue:n=>{t.password=n}},null)]}),r(d,{label:"确认密码",required:!0},{default:()=>[r(p,{value:i.value,type:"password",onUpdateValue:n=>{i.value=n}},null)]}),r(d,{label:"个人首页"},{default:()=>[r(p,{value:t.url,onUpdateValue:n=>{t.url=n}},null)]}),r(d,{label:"头像"},{default:()=>[r(p,{value:t.avatar,onUpdateValue:n=>{t.avatar=n}},null)]}),r(d,{label:"个人介绍"},{default:()=>[r(p,{value:t.introduce,onUpdateValue:n=>{t.introduce=n}},null)]}),r(E,{justify:"end"},{default:()=>[r(T,{disabled:!t.username||!t.mail||!t.password||!i.value,onClick:f,round:!0,type:"primary"},{default:()=>[C("下一步")]})]})]})}}),Ee=x({props:R,setup(){return()=>r(E,{class:"text-center",vertical:!0},{default:()=>[r("span",{class:"text-base"},[C("你已经完成了所有的步骤，干得漂亮。")]),r(T,{type:"primary",round:!0,onClick:()=>{localStorage.setItem("to-setting","true"),location.reload()}},{default:()=>[C("LINK START")]})]})}});export{Je as default};
