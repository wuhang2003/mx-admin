import{d as U,a6 as a,cx as J,b3 as Q,cz as X,cy as ee,cY as te,aE as ne,aH as z,t as F,V as y,U as E,ay as ae,az as re,Y as le,cZ as ie,s as oe,$ as B,a0 as ue,a1 as W,i as D,aD as se,aB as ce,a3 as de,b0 as me,l as R,by as _,cq as k,cp as pe,c_ as j,z as N,co as fe,af as T}from"./index-b7f3c7f1.js";import{A as H}from"./Add-a1cb15bb.js";import{N as he}from"./ButtonGroup-9cb80a26.js";import{R as ye}from"./Remove-10ad4dd9.js";import{A as ve}from"./ChevronRight-fa1dec26.js";const ge=U({name:"ArrowUp",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},a("g",{fill:"none"},a("path",{d:"M3.13 9.163a.5.5 0 1 0 .74.674L9.5 3.67V17.5a.5.5 0 0 0 1 0V3.672l5.63 6.165a.5.5 0 0 0 .738-.674l-6.315-6.916a.746.746 0 0 0-.632-.24a.746.746 0 0 0-.476.24L3.131 9.163z",fill:"currentColor"})))}}),be=()=>te,Ve=J({name:"DynamicInput",common:Q,peers:{Input:X,Button:ee},self:be}),Pe=Ve,K=ne("n-dynamic-input"),Ie=U({name:"DynamicInputInputPreset",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:""},parentPath:String,path:String,onUpdateValue:{type:Function,required:!0}},setup(){const{mergedThemeRef:n,placeholderRef:m}=z(K);return{mergedTheme:n,placeholder:m}},render(){const{mergedTheme:n,placeholder:m,value:i,clsPrefix:u,onUpdateValue:c}=this;return a("div",{class:`${u}-dynamic-input-preset-input`},a(F,{theme:n.peers.Input,"theme-overrides":n.peerOverrides.Input,value:i,placeholder:m,onUpdateValue:c}))}}),Re=U({name:"DynamicInputPairPreset",props:{clsPrefix:{type:String,required:!0},value:{type:Object,default:()=>({key:"",value:""})},parentPath:String,path:String,onUpdateValue:{type:Function,required:!0}},setup(n){const{mergedThemeRef:m,keyPlaceholderRef:i,valuePlaceholderRef:u}=z(K);return{mergedTheme:m,keyPlaceholder:i,valuePlaceholder:u,handleKeyInput(c){n.onUpdateValue({key:c,value:n.value.value})},handleValueInput(c){n.onUpdateValue({key:n.value.key,value:c})}}},render(){const{mergedTheme:n,keyPlaceholder:m,valuePlaceholder:i,value:u,clsPrefix:c}=this;return a("div",{class:`${c}-dynamic-input-preset-pair`},a(F,{theme:n.peers.Input,"theme-overrides":n.peerOverrides.Input,value:u.key,class:`${c}-dynamic-input-pair-input`,placeholder:m,onUpdateValue:this.handleKeyInput}),a(F,{theme:n.peers.Input,"theme-overrides":n.peerOverrides.Input,value:u.value,class:`${c}-dynamic-input-pair-input`,placeholder:i,onUpdateValue:this.handleValueInput}))}}),ke=y("dynamic-input",{width:"100%"},[y("dynamic-input-item",`
 margin-bottom: 10px;
 display: flex;
 flex-wrap: nowrap;
 `,[y("dynamic-input-preset-input",{flex:1,alignItems:"center"}),y("dynamic-input-preset-pair",`
 flex: 1;
 display: flex;
 align-items: center;
 `,[y("dynamic-input-pair-input",[E("&:first-child",{"margin-right":"12px"})])]),ae("action",`
 align-self: flex-start;
 display: flex;
 justify-content: flex-end;
 flex-shrink: 0;
 flex-grow: 0;
 margin: var(--action-margin);
 `,[re("icon",{cursor:"pointer"})]),E("&:last-child",{marginBottom:0})]),y("form-item",`
 padding-top: 0 !important;
 margin-right: 0 !important;
 `,[y("form-item-blank",{paddingTop:"0 !important"})])]),O=new WeakMap,we=Object.assign(Object.assign({},W.props),{max:Number,min:{type:Number,default:0},value:Array,defaultValue:{type:Array,default:()=>[]},preset:{type:String,default:"input"},keyField:String,itemStyle:[String,Object],keyPlaceholder:{type:String,default:""},valuePlaceholder:{type:String,default:""},placeholder:{type:String,default:""},showSortButton:Boolean,createButtonProps:Object,onCreate:Function,onRemove:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClear:Function,onInput:[Function,Array]}),Oe=U({name:"DynamicInput",props:we,setup(n,{slots:m}){const{mergedComponentPropsRef:i,mergedClsPrefixRef:u,mergedRtlRef:c,inlineThemeDisabled:d}=le(),v=z(ie,null),V=oe(n.defaultValue),w=B(n,"value"),p=ue(w,V),s=W("DynamicInput","-dynamic-input",ke,Pe,n,u),C=D(()=>{const{value:e}=p;if(Array.isArray(e)){const{max:t}=n;return t!==void 0&&e.length>=t}return!1}),A=D(()=>{const{value:e}=p;return Array.isArray(e)?e.length<=n.min:!0}),$=D(()=>{var e,t;return(t=(e=i?.value)===null||e===void 0?void 0:e.DynamicInput)===null||t===void 0?void 0:t.buttonSize});function f(e){const{onInput:t,"onUpdate:value":l,onUpdateValue:r}=n;t&&T(t,e),l&&T(l,e),r&&T(r,e),V.value=e}function S(e,t){if(e==null||typeof e!="object")return t;const l=j(e)?N(e):e;let r=O.get(l);return r===void 0&&O.set(l,r=fe()),r}function P(e,t){const{value:l}=p,r=Array.from(l??[]),h=r[e];if(r[e]=t,h&&t&&typeof h=="object"&&typeof t=="object"){const Z=j(h)?N(h):h,x=j(t)?N(t):t,q=O.get(Z);q!==void 0&&O.set(x,q)}f(r)}function g(){o(0)}function o(e){const{value:t}=p,{onCreate:l}=n,r=Array.from(t??[]);if(l)r.splice(e+1,0,l(e+1)),f(r);else if(m.default)r.splice(e+1,0,null),f(r);else switch(n.preset){case"input":r.splice(e+1,0,""),f(r);break;case"pair":r.splice(e+1,0,{key:"",value:""}),f(r);break}}function I(e){const{value:t}=p;if(!Array.isArray(t))return;const{min:l}=n;if(t.length<=l)return;const r=Array.from(t);r.splice(e,1),f(r);const{onRemove:h}=n;h&&h(e)}function L(e,t,l){if(t<0||l<0||t>=e.length||l>=e.length||t===l)return;const r=e[t];e[t]=e[l],e[l]=r}function Y(e,t){const{value:l}=p;if(!Array.isArray(l))return;const r=Array.from(l);e==="up"&&L(r,t,t-1),e==="down"&&L(r,t,t+1),f(r)}se(K,{mergedThemeRef:s,keyPlaceholderRef:B(n,"keyPlaceholder"),valuePlaceholderRef:B(n,"valuePlaceholder"),placeholderRef:B(n,"placeholder")});const G=ce("DynamicInput",c,u),M=D(()=>{const{self:{actionMargin:e,actionMarginRtl:t}}=s.value;return{"--action-margin":e,"--action-margin-rtl":t}}),b=d?de("dynamic-input",void 0,M,n):void 0;return{locale:me("DynamicInput").localeRef,rtlEnabled:G,buttonSize:$,mergedClsPrefix:u,NFormItem:v,uncontrolledValue:V,mergedValue:p,insertionDisabled:C,removeDisabled:A,handleCreateClick:g,ensureKey:S,handleValueChange:P,remove:I,move:Y,createItem:o,mergedTheme:s,cssVars:d?void 0:M,themeClass:b?.themeClass,onRender:b?.onRender}},render(){const{$slots:n,buttonSize:m,mergedClsPrefix:i,mergedValue:u,locale:c,mergedTheme:d,keyField:v,itemStyle:V,preset:w,showSortButton:p,NFormItem:s,ensureKey:C,handleValueChange:A,remove:$,createItem:f,move:S,onRender:P}=this;return P?.(),a("div",{class:[`${i}-dynamic-input`,this.rtlEnabled&&`${i}-dynamic-input--rtl`,this.themeClass],style:this.cssVars},!Array.isArray(u)||u.length===0?a(R,Object.assign({block:!0,ghost:!0,dashed:!0,size:m},this.createButtonProps,{disabled:this.insertionDisabled,theme:d.peers.Button,themeOverrides:d.peerOverrides.Button,onClick:this.handleCreateClick}),{default:()=>_(n["create-button-default"],()=>[c.create]),icon:()=>_(n["create-button-icon"],()=>[a(k,{clsPrefix:i},{default:()=>a(H,null)})])}):u.map((g,o)=>a("div",{key:v?g[v]:C(g,o),"data-key":v?g[v]:C(g,o),class:`${i}-dynamic-input-item`,style:V},pe(n.default,{value:u[o],index:o},()=>[w==="input"?a(Ie,{clsPrefix:i,value:u[o],parentPath:s?s.path.value:void 0,path:s?.path.value?`${s.path.value}[${o}]`:void 0,onUpdateValue:I=>A(o,I)}):w==="pair"?a(Re,{clsPrefix:i,value:u[o],parentPath:s?s.path.value:void 0,path:s?.path.value?`${s.path.value}[${o}]`:void 0,onUpdateValue:I=>A(o,I)}):null]),a("div",{class:`${i}-dynamic-input-item__action`},a(he,{size:m},{default:()=>[a(R,{disabled:this.removeDisabled,theme:d.peers.Button,themeOverrides:d.peerOverrides.Button,circle:!0,onClick:()=>$(o)},{icon:()=>a(k,{clsPrefix:i},{default:()=>a(ye,null)})}),a(R,{disabled:this.insertionDisabled,circle:!0,theme:d.peers.Button,themeOverrides:d.peerOverrides.Button,onClick:()=>f(o)},{icon:()=>a(k,{clsPrefix:i},{default:()=>a(H,null)})}),p?a(R,{disabled:o===0,circle:!0,theme:d.peers.Button,themeOverrides:d.peerOverrides.Button,onClick:()=>S("up",o)},{icon:()=>a(k,{clsPrefix:i},{default:()=>a(ge,null)})}):null,p?a(R,{disabled:o===u.length-1,circle:!0,theme:d.peers.Button,themeOverrides:d.peerOverrides.Button,onClick:()=>S("down",o)},{icon:()=>a(k,{clsPrefix:i},{default:()=>a(ve,null)})}):null]})))))}});export{Oe as N};
