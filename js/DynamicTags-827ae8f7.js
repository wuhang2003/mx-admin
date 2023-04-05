import{a as U,N as j,c as w}from"./Tag-da0ff8cc.js";import{cx as $,b3 as K,cz as W,cy as _,eo as q,V as N,d as E,Y as H,b0 as M,Z as Y,s as f,a1 as k,$ as Z,a0 as G,i as S,a3 as J,a6 as u,t as Q,l as X,cq as ee,m as te,ap as ne,af as B}from"./index-f321115e.js";import{s as ae}from"./prop-8b8caa29.js";import{A as se}from"./Add-c30fd505.js";const ie=$({name:"DynamicTags",common:K,peers:{Input:W,Button:_,Tag:U,Space:q},self(){return{inputWidth:"64px"}}}),le=ie,ue=N("dynamic-tags",[N("input",{minWidth:"var(--n-input-width)"})]),oe=Object.assign(Object.assign(Object.assign({},k.props),w),{size:{type:String,default:"medium"},closable:{type:Boolean,default:!0},defaultValue:{type:Array,default:()=>[]},value:Array,inputStyle:[String,Object],inputProps:Object,max:Number,tagStyle:[String,Object],renderTag:Function,onCreate:{type:Function,default:t=>t},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]}),pe=E({name:"DynamicTags",props:oe,setup(t){const{mergedClsPrefixRef:h,inlineThemeDisabled:o}=H(t),{localeRef:r}=M("DynamicTags"),d=Y(t),{mergedDisabledRef:s}=d,c=f(""),m=f(!1),p=f(!0),y=f(null),v=k("DynamicTags","-dynamic-tags",ue,le,t,h),b=f(t.defaultValue),F=Z(t,"value"),i=G(F,b),z=S(()=>r.value.add),O=S(()=>ae(t.size)),C=S(()=>s.value||!!t.max&&i.value.length>=t.max);function T(e){const{onChange:n,"onUpdate:value":g,onUpdateValue:x}=t,{nTriggerFormInput:L,nTriggerFormChange:P}=d;n&&B(n,e),x&&B(x,e),g&&B(g,e),b.value=e,L(),P()}function I(e){const n=i.value.slice(0);n.splice(e,1),T(n)}function D(e){switch(e.key){case"Enter":l()}}function l(e){const n=e??c.value;if(n){const g=i.value.slice(0);g.push(t.onCreate(n)),T(g)}m.value=!1,p.value=!0,c.value=""}function R(){l()}function A(){m.value=!0,ne(()=>{var e;(e=y.value)===null||e===void 0||e.focus(),p.value=!1})}const V=S(()=>{const{self:{inputWidth:e}}=v.value;return{"--n-input-width":e}}),a=o?J("dynamic-tags",void 0,V,t):void 0;return{mergedClsPrefix:h,inputInstRef:y,localizedAdd:z,inputSize:O,inputValue:c,showInput:m,inputForceFocused:p,mergedValue:i,mergedDisabled:s,triggerDisabled:C,handleInputKeyUp:D,handleAddClick:A,handleInputBlur:R,handleCloseClick:I,handleInputConfirm:l,mergedTheme:v,cssVars:o?void 0:V,themeClass:a?.themeClass,onRender:a?.onRender}},render(){const{mergedTheme:t,cssVars:h,mergedClsPrefix:o,onRender:r,renderTag:d}=this;return r?.(),u(te,{class:[`${o}-dynamic-tags`,this.themeClass],size:"small",style:h,theme:t.peers.Space,themeOverrides:t.peerOverrides.Space,itemStyle:"display: flex;"},{default:()=>{const{mergedTheme:s,tagStyle:c,type:m,round:p,size:y,color:v,closable:b,mergedDisabled:F,showInput:i,inputValue:z,inputStyle:O,inputSize:C,inputForceFocused:T,triggerDisabled:I,handleInputKeyUp:D,handleInputBlur:l,handleAddClick:R,handleCloseClick:A,handleInputConfirm:V,$slots:a}=this;return this.mergedValue.map((e,n)=>d?d(e,n):u(j,{key:n,theme:s.peers.Tag,themeOverrides:s.peerOverrides.Tag,style:c,type:m,round:p,size:y,color:v,closable:b,disabled:F,onClose:()=>A(n)},{default:()=>typeof e=="string"?e:e.label})).concat(i?a.input?a.input({submit:V,deactivate:l}):u(Q,Object.assign({placeholder:"",size:C,style:O,autosize:!0},this.inputProps,{ref:"inputInstRef",value:z,onUpdateValue:e=>{this.inputValue=e},theme:s.peers.Input,themeOverrides:s.peerOverrides.Input,onKeyup:D,onBlur:l,internalForceFocus:T})):a.trigger?a.trigger({activate:R,disabled:I}):u(X,{dashed:!0,disabled:I,theme:s.peers.Button,themeOverrides:s.peerOverrides.Button,size:C,onClick:R},{icon:()=>u(ee,{clsPrefix:o},{default:()=>u(se,null)})}))}})}});export{pe as N};
