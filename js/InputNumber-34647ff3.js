import{cz as Re,b3 as Me,cA as Te,cB as Se,Y as De,Z as X,d as Ce,$ as Fe,a3 as le,b0 as Pe,a0 as Oe,x as B,a1 as Ae,a2 as Ue,aC as g,w as _e,aB as ke,l as $e,aO as Ee,a8 as s,y as Le,by as Y,aU as Z,bz as q,cs as J,cw as Q,ah as I,ap as He}from"./index-b99e499e.js";import{R as ze}from"./Remove-11cc5a34.js";import{A as je}from"./Add-73e1d13d.js";const Ge=n=>{const{textColorDisabled:i}=n;return{iconColorDisabled:i}},Ke=Re({name:"InputNumber",common:Me,peers:{Button:Te,Input:Se},self:Ge}),We=Ke;function Xe(n){return n==null||typeof n=="string"&&n.trim()===""?null:Number(n)}function Ye(n){return n.includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(n)||/^\.\d+$/.test(n))}function L(n){return n==null?!0:!Number.isNaN(n)}function ee(n,i){return n==null?"":i===void 0?String(n):n.toFixed(i)}function H(n){if(n===null)return null;if(typeof n=="number")return n;{const i=Number(n);return Number.isNaN(i)?null:i}}const Ze=De([X("input-number-suffix",`
 display: inline-block;
 margin-right: 10px;
 `),X("input-number-prefix",`
 display: inline-block;
 margin-left: 10px;
 `)]),ne=800,te=100,qe=Object.assign(Object.assign({},le.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),nn=Ce({name:"InputNumber",props:qe,setup(n){const{mergedBorderedRef:i,mergedClsPrefixRef:p,mergedRtlRef:D}=Fe(n),u=le("InputNumber","-input-number",Ze,We,n,p),{localeRef:h}=Pe("InputNumber"),R=Oe(n),{mergedSizeRef:re,mergedDisabledRef:ie,mergedStatusRef:ue}=R,c=B(null),z=B(null),j=B(null),C=B(n.defaultValue),ae=Ae(n,"value"),d=Ue(ae,C),v=B(""),F=e=>{const t=String(e).split(".")[1];return t?t.length:0},oe=e=>{const t=[n.min,n.max,n.step,e].map(l=>l===void 0?0:F(l));return Math.max(...t)},se=g(()=>{const{placeholder:e}=n;return e!==void 0?e:h.value.placeholder}),M=g(()=>{const e=H(n.step);return e!==null?e===0?1:Math.abs(e):1}),G=g(()=>{const e=H(n.min);return e!==null?e:null}),K=g(()=>{const e=H(n.max);return e!==null?e:null}),V=e=>{const{value:t}=d;if(e===t){b();return}const{"onUpdate:value":l,onUpdateValue:r,onChange:o}=n,{nTriggerFormInput:f,nTriggerFormChange:x}=R;o&&I(o,e),r&&I(r,e),l&&I(l,e),C.value=e,f(),x()},a=({offset:e,doUpdateIfValid:t,fixPrecision:l,isInputing:r})=>{const{value:o}=v;if(r&&Ye(o))return!1;const f=(n.parse||Xe)(o);if(f===null)return t&&V(null),null;if(L(f)){const x=F(f),{precision:N}=n;if(N!==void 0&&N<x&&!l)return!1;let m=parseFloat((f+e).toFixed(N??oe(f)));if(L(m)){const{value:$}=K,{value:E}=G;if($!==null&&m>$){if(!t||r)return!1;m=$}if(E!==null&&m<E){if(!t||r)return!1;m=E}return n.validator&&!n.validator(m)?!1:(t&&V(m),m)}}return!1},b=()=>{const{value:e}=d;if(L(e)){const{format:t,precision:l}=n;t?v.value=t(e):e===null||l===void 0||F(e)>l?v.value=ee(e,void 0):v.value=ee(e,l)}else v.value=String(e)};b();const de=g(()=>a({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})===!1),P=g(()=>{const{value:e}=d;if(n.validator&&e===null)return!1;const{value:t}=M;return a({offset:-t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1}),O=g(()=>{const{value:e}=d;if(n.validator&&e===null)return!1;const{value:t}=M;return a({offset:+t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1});function fe(e){const{onFocus:t}=n,{nTriggerFormFocus:l}=R;t&&I(t,e),l()}function ce(e){var t,l;if(e.target===((t=c.value)===null||t===void 0?void 0:t.wrapperElRef))return;const r=a({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(r!==!1){const x=(l=c.value)===null||l===void 0?void 0:l.inputElRef;x&&(x.value=String(r||"")),d.value===r&&b()}else b();const{onBlur:o}=n,{nTriggerFormBlur:f}=R;o&&I(o,e),f(),He(()=>{b()})}function me(e){const{onClear:t}=n;t&&I(t,e)}function A(){const{value:e}=O;if(!e){k();return}const{value:t}=d;if(t===null)n.validator||V(W());else{const{value:l}=M;a({offset:l,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function U(){const{value:e}=P;if(!e){_();return}const{value:t}=d;if(t===null)n.validator||V(W());else{const{value:l}=M;a({offset:-l,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const he=fe,ve=ce;function W(){if(n.validator)return null;const{value:e}=G,{value:t}=K;return e!==null?Math.max(0,e):t!==null?Math.min(0,t):0}function ge(e){me(e),V(null)}function pe(e){var t,l,r;!((t=j.value)===null||t===void 0)&&t.$el.contains(e.target)&&e.preventDefault(),!((l=z.value)===null||l===void 0)&&l.$el.contains(e.target)&&e.preventDefault(),(r=c.value)===null||r===void 0||r.activate()}let y=null,w=null,T=null;function _(){T&&(window.clearTimeout(T),T=null),y&&(window.clearInterval(y),y=null)}function k(){S&&(window.clearTimeout(S),S=null),w&&(window.clearInterval(w),w=null)}function be(){_(),T=window.setTimeout(()=>{y=window.setInterval(()=>{U()},te)},ne),Z("mouseup",document,_,{once:!0})}let S=null;function xe(){k(),S=window.setTimeout(()=>{w=window.setInterval(()=>{A()},te)},ne),Z("mouseup",document,k,{once:!0})}const Ie=()=>{w||A()},Ve=()=>{y||U()};function ye(e){var t,l;if(e.key==="Enter"){if(e.target===((t=c.value)===null||t===void 0?void 0:t.wrapperElRef))return;a({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&((l=c.value)===null||l===void 0||l.deactivate())}else if(e.key==="ArrowUp"){if(!O.value||n.keyboard.ArrowUp===!1)return;e.preventDefault(),a({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&A()}else if(e.key==="ArrowDown"){if(!P.value||n.keyboard.ArrowDown===!1)return;e.preventDefault(),a({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&U()}}function we(e){v.value=e,n.updateValueOnInput&&!n.format&&!n.parse&&n.precision===void 0&&a({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})}_e(d,()=>{b()});const Ne={focus:()=>{var e;return(e=c.value)===null||e===void 0?void 0:e.focus()},blur:()=>{var e;return(e=c.value)===null||e===void 0?void 0:e.blur()}},Be=ke("InputNumber",D,p);return Object.assign(Object.assign({},Ne),{rtlEnabled:Be,inputInstRef:c,minusButtonInstRef:z,addButtonInstRef:j,mergedClsPrefix:p,mergedBordered:i,uncontrolledValue:C,mergedValue:d,mergedPlaceholder:se,displayedValueInvalid:de,mergedSize:re,mergedDisabled:ie,displayedValue:v,addable:O,minusable:P,mergedStatus:ue,handleFocus:he,handleBlur:ve,handleClear:ge,handleMouseDown:pe,handleAddClick:Ie,handleMinusClick:Ve,handleAddMousedown:xe,handleMinusMousedown:be,handleKeyDown:ye,handleUpdateDisplayedValue:we,mergedTheme:u,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:$e(()=>{const{self:{iconColorDisabled:e}}=u.value,[t,l,r,o]=Ee(e);return{textColorTextDisabled:`rgb(${t}, ${l}, ${r})`,opacityDisabled:`${o}`}})})},render(){const{mergedClsPrefix:n,$slots:i}=this,p=()=>s(Q,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>q(i["minus-icon"],()=>[s(J,{clsPrefix:n},{default:()=>s(ze,null)})])}),D=()=>s(Q,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>q(i["add-icon"],()=>[s(J,{clsPrefix:n},{default:()=>s(je,null)})])});return s("div",{class:[`${n}-input-number`,this.rtlEnabled&&`${n}-input-number--rtl`]},s(Le,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,internalLoadingBeforeSuffix:!0},{prefix:()=>{var u;return this.showButton&&this.buttonPlacement==="both"?[p(),Y(i.prefix,h=>h?s("span",{class:`${n}-input-number-prefix`},h):null)]:(u=i.prefix)===null||u===void 0?void 0:u.call(i)},suffix:()=>{var u;return this.showButton?[Y(i.suffix,h=>h?s("span",{class:`${n}-input-number-suffix`},h):null),this.buttonPlacement==="right"?p():null,D()]:(u=i.suffix)===null||u===void 0?void 0:u.call(i)}}))}});export{nn as N};
