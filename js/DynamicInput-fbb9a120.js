import{d as F,a7 as a,cF as Y,ba as x,cH as ee,cG as te,d4 as ne,aF as ae,aI as K,t as z,X as g,V as q,az as re,aA as le,Z as ie,d5 as oe,s as se,a0 as O,a1 as ue,a2 as _,i as U,aE as ce,aC as de,a4 as me,b7 as pe,l as k,bG as G,cy as C,cx as H,d6 as N,z as T,cw as fe,ag as $}from"./index-67dc47c7.js";import{A as W}from"./Add-d0a1d613.js";import{N as he}from"./ButtonGroup-3d338749.js";import{R as ye}from"./Remove-f469c010.js";import{A as ve}from"./ChevronRight-665fac08.js";const ge=F({name:"ArrowUp",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},a("g",{fill:"none"},a("path",{d:"M3.13 9.163a.5.5 0 1 0 .74.674L9.5 3.67V17.5a.5.5 0 0 0 1 0V3.672l5.63 6.165a.5.5 0 0 0 .738-.674l-6.315-6.916a.746.746 0 0 0-.632-.24a.746.746 0 0 0-.476.24L3.131 9.163z",fill:"currentColor"})))}}),be=()=>ne,Ve=Y({name:"DynamicInput",common:x,peers:{Input:ee,Button:te},self:be}),Pe=Ve,L=ae("n-dynamic-input"),Ie=F({name:"DynamicInputInputPreset",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:""},disabled:Boolean,parentPath:String,path:String,onUpdateValue:{type:Function,required:!0}},setup(){const{mergedThemeRef:n,placeholderRef:m}=K(L);return{mergedTheme:n,placeholder:m}},render(){const{mergedTheme:n,placeholder:m,value:i,clsPrefix:s,onUpdateValue:d,disabled:u}=this;return a("div",{class:`${s}-dynamic-input-preset-input`},a(z,{theme:n.peers.Input,"theme-overrides":n.peerOverrides.Input,value:i,placeholder:m,onUpdateValue:d,disabled:u}))}}),Re=F({name:"DynamicInputPairPreset",props:{clsPrefix:{type:String,required:!0},value:{type:Object,default:()=>({key:"",value:""})},disabled:Boolean,parentPath:String,path:String,onUpdateValue:{type:Function,required:!0}},setup(n){const{mergedThemeRef:m,keyPlaceholderRef:i,valuePlaceholderRef:s}=K(L);return{mergedTheme:m,keyPlaceholder:i,valuePlaceholder:s,handleKeyInput(d){n.onUpdateValue({key:d,value:n.value.value})},handleValueInput(d){n.onUpdateValue({key:n.value.key,value:d})}}},render(){const{mergedTheme:n,keyPlaceholder:m,valuePlaceholder:i,value:s,clsPrefix:d,disabled:u}=this;return a("div",{class:`${d}-dynamic-input-preset-pair`},a(z,{theme:n.peers.Input,"theme-overrides":n.peerOverrides.Input,value:s.key,class:`${d}-dynamic-input-pair-input`,placeholder:m,onUpdateValue:this.handleKeyInput,disabled:u}),a(z,{theme:n.peers.Input,"theme-overrides":n.peerOverrides.Input,value:s.value,class:`${d}-dynamic-input-pair-input`,placeholder:i,onUpdateValue:this.handleValueInput,disabled:u}))}}),we=g("dynamic-input",{width:"100%"},[g("dynamic-input-item",`
 margin-bottom: 10px;
 display: flex;
 flex-wrap: nowrap;
 `,[g("dynamic-input-preset-input",{flex:1,alignItems:"center"}),g("dynamic-input-preset-pair",`
 flex: 1;
 display: flex;
 align-items: center;
 `,[g("dynamic-input-pair-input",[q("&:first-child",{"margin-right":"12px"})])]),re("action",`
 align-self: flex-start;
 display: flex;
 justify-content: flex-end;
 flex-shrink: 0;
 flex-grow: 0;
 margin: var(--action-margin);
 `,[le("icon",{cursor:"pointer"})]),q("&:last-child",{marginBottom:0})]),g("form-item",`
 padding-top: 0 !important;
 margin-right: 0 !important;
 `,[g("form-item-blank",{paddingTop:"0 !important"})])]),j=new WeakMap,ke=Object.assign(Object.assign({},_.props),{max:Number,min:{type:Number,default:0},value:Array,defaultValue:{type:Array,default:()=>[]},preset:{type:String,default:"input"},keyField:String,itemStyle:[String,Object],keyPlaceholder:{type:String,default:""},valuePlaceholder:{type:String,default:""},placeholder:{type:String,default:""},disabled:Boolean,showSortButton:Boolean,createButtonProps:Object,onCreate:Function,onRemove:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClear:Function,onInput:[Function,Array]}),Oe=F({name:"DynamicInput",props:ke,setup(n,{slots:m}){const{mergedComponentPropsRef:i,mergedClsPrefixRef:s,mergedRtlRef:d,inlineThemeDisabled:u}=ie(),b=K(oe,null),I=se(n.defaultValue),A=O(n,"value"),p=ue(A,I),c=_("DynamicInput","-dynamic-input",we,Pe,n,s),B=U(()=>{const{value:e}=p;if(Array.isArray(e)){const{max:t}=n;return t!==void 0&&e.length>=t}return!1}),S=U(()=>{const{value:e}=p;return Array.isArray(e)?e.length<=n.min:!0}),D=U(()=>{var e,t;return(t=(e=i?.value)===null||e===void 0?void 0:e.DynamicInput)===null||t===void 0?void 0:t.buttonSize});function f(e){const{onInput:t,"onUpdate:value":l,onUpdateValue:r}=n;t&&$(t,e),l&&$(l,e),r&&$(r,e),I.value=e}function R(e,t){if(e==null||typeof e!="object")return t;const l=N(e)?T(e):e;let r=j.get(l);return r===void 0&&j.set(l,r=fe()),r}function w(e,t){const{value:l}=p,r=Array.from(l??[]),y=r[e];if(r[e]=t,y&&t&&typeof y=="object"&&typeof t=="object"){const J=N(y)?T(y):y,Q=N(t)?T(t):t,E=j.get(J);E!==void 0&&j.set(Q,E)}f(r)}function h(){v(-1)}function v(e){const{value:t}=p,{onCreate:l}=n,r=Array.from(t??[]);if(l)r.splice(e+1,0,l(e+1)),f(r);else if(m.default)r.splice(e+1,0,null),f(r);else switch(n.preset){case"input":r.splice(e+1,0,""),f(r);break;case"pair":r.splice(e+1,0,{key:"",value:""}),f(r);break}}function o(e){const{value:t}=p;if(!Array.isArray(t))return;const{min:l}=n;if(t.length<=l)return;const{onRemove:r}=n;r&&r(e);const y=Array.from(t);y.splice(e,1),f(y)}function V(e,t,l){if(t<0||l<0||t>=e.length||l>=e.length||t===l)return;const r=e[t];e[t]=e[l],e[l]=r}function X(e,t){const{value:l}=p;if(!Array.isArray(l))return;const r=Array.from(l);e==="up"&&V(r,t,t-1),e==="down"&&V(r,t,t+1),f(r)}ce(L,{mergedThemeRef:c,keyPlaceholderRef:O(n,"keyPlaceholder"),valuePlaceholderRef:O(n,"valuePlaceholder"),placeholderRef:O(n,"placeholder")});const Z=de("DynamicInput",d,s),M=U(()=>{const{self:{actionMargin:e,actionMarginRtl:t}}=c.value;return{"--action-margin":e,"--action-margin-rtl":t}}),P=u?me("dynamic-input",void 0,M,n):void 0;return{locale:pe("DynamicInput").localeRef,rtlEnabled:Z,buttonSize:D,mergedClsPrefix:s,NFormItem:b,uncontrolledValue:I,mergedValue:p,insertionDisabled:B,removeDisabled:S,handleCreateClick:h,ensureKey:R,handleValueChange:w,remove:o,move:X,createItem:v,mergedTheme:c,cssVars:u?void 0:M,themeClass:P?.themeClass,onRender:P?.onRender}},render(){const{$slots:n,buttonSize:m,mergedClsPrefix:i,mergedValue:s,locale:d,mergedTheme:u,keyField:b,itemStyle:I,preset:A,showSortButton:p,NFormItem:c,ensureKey:B,handleValueChange:S,remove:D,createItem:f,move:R,onRender:w,disabled:h}=this;return w?.(),a("div",{class:[`${i}-dynamic-input`,this.rtlEnabled&&`${i}-dynamic-input--rtl`,this.themeClass],style:this.cssVars},!Array.isArray(s)||s.length===0?a(k,Object.assign({block:!0,ghost:!0,dashed:!0,size:m},this.createButtonProps,{disabled:this.insertionDisabled||h,theme:u.peers.Button,themeOverrides:u.peerOverrides.Button,onClick:this.handleCreateClick}),{default:()=>G(n["create-button-default"],()=>[d.create]),icon:()=>G(n["create-button-icon"],()=>[a(C,{clsPrefix:i},{default:()=>a(W,null)})])}):s.map((v,o)=>a("div",{key:b?v[b]:B(v,o),"data-key":b?v[b]:B(v,o),class:`${i}-dynamic-input-item`,style:I},H(n.default,{value:s[o],index:o},()=>[A==="input"?a(Ie,{disabled:h,clsPrefix:i,value:s[o],parentPath:c?c.path.value:void 0,path:c?.path.value?`${c.path.value}[${o}]`:void 0,onUpdateValue:V=>{S(o,V)}}):A==="pair"?a(Re,{disabled:h,clsPrefix:i,value:s[o],parentPath:c?c.path.value:void 0,path:c?.path.value?`${c.path.value}[${o}]`:void 0,onUpdateValue:V=>{S(o,V)}}):null]),H(n.action,{value:s[o],index:o,create:f,remove:D,move:R},()=>[a("div",{class:`${i}-dynamic-input-item__action`},a(he,{size:m},{default:()=>[a(k,{disabled:this.removeDisabled||h,theme:u.peers.Button,themeOverrides:u.peerOverrides.Button,circle:!0,onClick:()=>{D(o)}},{icon:()=>a(C,{clsPrefix:i},{default:()=>a(ye,null)})}),a(k,{disabled:this.insertionDisabled||h,circle:!0,theme:u.peers.Button,themeOverrides:u.peerOverrides.Button,onClick:()=>{f(o)}},{icon:()=>a(C,{clsPrefix:i},{default:()=>a(W,null)})}),p?a(k,{disabled:o===0||h,circle:!0,theme:u.peers.Button,themeOverrides:u.peerOverrides.Button,onClick:()=>{R("up",o)}},{icon:()=>a(C,{clsPrefix:i},{default:()=>a(ge,null)})}):null,p?a(k,{disabled:o===s.length-1||h,circle:!0,theme:u.peers.Button,themeOverrides:u.peerOverrides.Button,onClick:()=>{R("down",o)}},{icon:()=>a(C,{clsPrefix:i},{default:()=>a(ve,null)})}):null]}))]))))}});export{Oe as N};
