import{t as U,N as j,c as w}from"./Tag-62076a6b.js";import{aI as K,C as W,aJ as $,E as B,k as E,J as H,bF as J,bH as _,y as f,L as k,ax as G,bG as M,n as S,N as Q,v as o,aO as q,Q as X,ay as Y,b2 as N}from"./Button-5ec267f1.js";import{x as Z,N as ee}from"./use-store-ref-4d0ce661.js";import{A as te}from"./Add-89af046c.js";import{b as ne,a as ae}from"./Spin-2c3e5ca3.js";import{s as se}from"./prop-8b8caa29.js";const ie=K({name:"DynamicTags",common:W,peers:{Input:Z,Button:$,Tag:U,Space:ne},self(){return{inputWidth:"64px"}}}),le=ie,oe=B("dynamic-tags",[B("input",{minWidth:"var(--n-input-width)"})]),re=Object.assign(Object.assign(Object.assign({},k.props),w),{size:{type:String,default:"medium"},closable:{type:Boolean,default:!0},defaultValue:{type:Array,default:()=>[]},value:Array,inputStyle:[String,Object],inputProps:Object,max:Number,tagStyle:[String,Object],renderTag:Function,onCreate:{type:Function,default:t=>t},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]}),fe=E({name:"DynamicTags",props:re,setup(t){const{mergedClsPrefixRef:h,inlineThemeDisabled:r}=H(t),{localeRef:u}=J("DynamicTags"),d=_(t),{mergedDisabledRef:s}=d,c=f(""),m=f(!1),p=f(!0),y=f(null),v=k("DynamicTags","-dynamic-tags",oe,le,t,h),b=f(t.defaultValue),V=G(t,"value"),i=M(V,b),O=S(()=>u.value.add),z=S(()=>se(t.size)),C=S(()=>s.value||!!t.max&&i.value.length>=t.max);function T(e){const{onChange:n,"onUpdate:value":g,onUpdateValue:x}=t,{nTriggerFormInput:L,nTriggerFormChange:P}=d;n&&N(n,e),x&&N(x,e),g&&N(g,e),b.value=e,L(),P()}function I(e){const n=i.value.slice(0);n.splice(e,1),T(n)}function D(e){switch(e.key){case"Enter":l()}}function l(e){const n=e??c.value;if(n){const g=i.value.slice(0);g.push(t.onCreate(n)),T(g)}m.value=!1,p.value=!0,c.value=""}function R(){l()}function A(){m.value=!0,Y(()=>{var e;(e=y.value)===null||e===void 0||e.focus(),p.value=!1})}const F=S(()=>{const{self:{inputWidth:e}}=v.value;return{"--n-input-width":e}}),a=r?Q("dynamic-tags",void 0,F,t):void 0;return{mergedClsPrefix:h,inputInstRef:y,localizedAdd:O,inputSize:z,inputValue:c,showInput:m,inputForceFocused:p,mergedValue:i,mergedDisabled:s,triggerDisabled:C,handleInputKeyUp:D,handleAddClick:A,handleInputBlur:R,handleCloseClick:I,handleInputConfirm:l,mergedTheme:v,cssVars:r?void 0:F,themeClass:a?.themeClass,onRender:a?.onRender}},render(){const{mergedTheme:t,cssVars:h,mergedClsPrefix:r,onRender:u,renderTag:d}=this;return u?.(),o(ae,{class:[`${r}-dynamic-tags`,this.themeClass],size:"small",style:h,theme:t.peers.Space,themeOverrides:t.peerOverrides.Space,itemStyle:"display: flex;"},{default:()=>{const{mergedTheme:s,tagStyle:c,type:m,round:p,size:y,color:v,closable:b,mergedDisabled:V,showInput:i,inputValue:O,inputStyle:z,inputSize:C,inputForceFocused:T,triggerDisabled:I,handleInputKeyUp:D,handleInputBlur:l,handleAddClick:R,handleCloseClick:A,handleInputConfirm:F,$slots:a}=this;return this.mergedValue.map((e,n)=>d?d(e,n):o(j,{key:n,theme:s.peers.Tag,themeOverrides:s.peerOverrides.Tag,style:c,type:m,round:p,size:y,color:v,closable:b,disabled:V,onClose:()=>A(n)},{default:()=>typeof e=="string"?e:e.label})).concat(i?a.input?a.input({submit:F,deactivate:l}):o(ee,Object.assign({placeholder:"",size:C,style:z,autosize:!0},this.inputProps,{ref:"inputInstRef",value:O,onUpdateValue:e=>{this.inputValue=e},theme:s.peers.Input,themeOverrides:s.peerOverrides.Input,onKeyup:D,onBlur:l,internalForceFocus:T})):a.trigger?a.trigger({activate:R,disabled:I}):o(q,{dashed:!0,disabled:I,theme:s.peers.Button,themeOverrides:s.peerOverrides.Button,size:C,onClick:R},{icon:()=>o(X,{clsPrefix:r},{default:()=>o(te,null)})}))}})}});export{fe as N};
