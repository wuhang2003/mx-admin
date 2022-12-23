import{I as D,u as T,o as b,n as j,V as F,p as w,ag as H,ah as W,g as M,h as z,i as x,R as O,k as R,q as L,W as V,t as E,M as I,U as N}from"./fade-in.cssr-c6d077ce.js";import{d as P,c as C,h as c}from"./create-injection-key-6dff4bbb.js";function G(e,o="default",n=[]){const s=e.$slots[o];return s===void 0?n:s()}const q={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},_=()=>q,A={name:"Space",self:_},U=A;let B;const K=()=>{if(!D)return!0;if(B===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const o=e.scrollHeight===1;return document.body.removeChild(e),B=o}return B},J=Object.assign(Object.assign({},b.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),de=P({name:"Space",props:J,setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:n}=T(e),i=b("Space","-space",void 0,U,e,o),s=j("Space",n,o);return{useGap:K(),rtlEnabled:s,mergedClsPrefix:o,margin:C(()=>{const{size:t}=e;if(Array.isArray(t))return{horizontal:t[0],vertical:t[1]};if(typeof t=="number")return{horizontal:t,vertical:t};const{self:{[w("gap",t)]:r}}=i.value,{row:a,col:l}=H(r);return{horizontal:W(l),vertical:W(a)}})}},render(){const{vertical:e,align:o,inline:n,justify:i,itemStyle:s,margin:t,wrap:r,mergedClsPrefix:a,rtlEnabled:l,useGap:p,wrapItem:h,internalUseGap:m}=this,d=F(G(this));if(!d.length)return null;const g=`${t.horizontal}px`,u=`${t.horizontal/2}px`,$=`${t.vertical}px`,y=`${t.vertical/2}px`,v=d.length-1,S=i.startsWith("space-");return c("div",{role:"none",class:[`${a}-space`,l&&`${a}-space--rtl`],style:{display:n?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(i)?"flex-"+i:i,flexWrap:!r||e?"nowrap":"wrap",marginTop:p||e?"":`-${y}`,marginBottom:p||e?"":`-${y}`,alignItems:o,gap:p?`${t.vertical}px ${t.horizontal}px`:""}},!h&&(p||m)?d:d.map((k,f)=>c("div",{role:"none",style:[s,{maxWidth:"100%"},p?"":e?{marginBottom:f!==v?$:""}:l?{marginLeft:S?i==="space-between"&&f===v?"":u:f!==v?g:"",marginRight:S?i==="space-between"&&f===0?"":u:"",paddingTop:y,paddingBottom:y}:{marginRight:S?i==="space-between"&&f===v?"":u:f!==v?g:"",marginLeft:S?i==="space-between"&&f===0?"":u:"",paddingTop:y,paddingBottom:y}]},k)))}}),X=e=>{const{opacityDisabled:o,heightTiny:n,heightSmall:i,heightMedium:s,heightLarge:t,heightHuge:r,primaryColor:a,fontSize:l}=e;return{fontSize:l,textColor:a,sizeTiny:n,sizeSmall:i,sizeMedium:s,sizeLarge:t,sizeHuge:r,color:a,opacitySpinning:o}},Y={name:"Spin",common:M,self:X},Q=Y,Z={headerFontSize1:"30px",headerFontSize2:"22px",headerFontSize3:"18px",headerFontSize4:"16px",headerFontSize5:"16px",headerFontSize6:"16px",headerMargin1:"28px 0 20px 0",headerMargin2:"28px 0 20px 0",headerMargin3:"28px 0 20px 0",headerMargin4:"28px 0 18px 0",headerMargin5:"28px 0 18px 0",headerMargin6:"28px 0 18px 0",headerPrefixWidth1:"16px",headerPrefixWidth2:"16px",headerPrefixWidth3:"12px",headerPrefixWidth4:"12px",headerPrefixWidth5:"12px",headerPrefixWidth6:"12px",headerBarWidth1:"4px",headerBarWidth2:"4px",headerBarWidth3:"3px",headerBarWidth4:"3px",headerBarWidth5:"3px",headerBarWidth6:"3px",pMargin:"16px 0 16px 0",liMargin:".25em 0 0 0",olPadding:"0 0 0 2em",ulPadding:"0 0 0 2em"},ee=e=>{const{primaryColor:o,textColor2:n,borderColor:i,lineHeight:s,fontSize:t,borderRadiusSmall:r,dividerColor:a,fontWeightStrong:l,textColor1:p,textColor3:h,infoColor:m,warningColor:d,errorColor:g,successColor:u,codeColor:$}=e;return Object.assign(Object.assign({},Z),{aTextColor:o,blockquoteTextColor:n,blockquotePrefixColor:i,blockquoteLineHeight:s,blockquoteFontSize:t,codeBorderRadius:r,liTextColor:n,liLineHeight:s,liFontSize:t,hrColor:a,headerFontWeight:l,headerTextColor:p,pTextColor:n,pTextColor1Depth:p,pTextColor2Depth:n,pTextColor3Depth:h,pLineHeight:s,pFontSize:t,headerBarColor:o,headerBarColorPrimary:o,headerBarColorInfo:m,headerBarColorError:g,headerBarColorWarning:d,headerBarColorSuccess:u,textColor:n,textColor1Depth:p,textColor2Depth:n,textColor3Depth:h,textColorPrimary:o,textColorInfo:m,textColorSuccess:u,textColorWarning:d,textColorError:g,codeTextColor:n,codeColor:$,codeBorder:"1px solid #0000"})},te={name:"Typography",common:M,self:ee},ne=te,ie=z([z("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),x("spin-container",{position:"relative"},[x("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[O()])]),x("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),x("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[R("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),x("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),x("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[R("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),oe={small:20,medium:18,large:16},re=Object.assign(Object.assign({},b.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),ce=P({name:"Spin",props:re,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:n}=T(e),i=b("Spin","-spin",ie,Q,e,o),s=C(()=>{const{size:r}=e,{common:{cubicBezierEaseInOut:a},self:l}=i.value,{opacitySpinning:p,color:h,textColor:m}=l,d=typeof r=="number"?N(r):l[w("size",r)];return{"--n-bezier":a,"--n-opacity-spinning":p,"--n-size":d,"--n-color":h,"--n-text-color":m}}),t=n?L("spin",C(()=>{const{size:r}=e;return typeof r=="number"?String(r):r[0]}),s,e):void 0;return{mergedClsPrefix:o,compitableShow:V(e,["spinning","show"]),mergedStrokeWidth:C(()=>{const{strokeWidth:r}=e;if(r!==void 0)return r;const{size:a}=e;return oe[typeof a=="number"?"medium":a]}),cssVars:n?void 0:s,themeClass:t?.themeClass,onRender:t?.onRender}},render(){var e,o;const{$slots:n,mergedClsPrefix:i,description:s}=this,t=n.icon&&this.rotate,r=(s||n.description)&&c("div",{class:`${i}-spin-description`},s||((e=n.description)===null||e===void 0?void 0:e.call(n))),a=n.icon?c("div",{class:[`${i}-spin-body`,this.themeClass]},c("div",{class:[`${i}-spin`,t&&`${i}-spin--rotate`],style:n.default?"":this.cssVars},n.icon()),r):c("div",{class:[`${i}-spin-body`,this.themeClass]},c(E,{clsPrefix:i,style:n.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${i}-spin`}),r);return(o=this.onRender)===null||o===void 0||o.call(this),n.default?c("div",{class:[`${i}-spin-container`,this.themeClass],style:this.cssVars},c("div",{class:[`${i}-spin-content`,this.compitableShow&&`${i}-spin-content--spinning`]},n),c(I,{name:"fade-in-transition"},{default:()=>this.compitableShow?a:null})):a}}),se=x("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[z("&:first-child","margin-top: 0;"),z("&:last-child","margin-bottom: 0;")]),ae=Object.assign(Object.assign({},b.props),{depth:[String,Number]}),he=P({name:"P",props:ae,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:n}=T(e),i=b("Typography","-p",se,ne,e,o),s=C(()=>{const{depth:r}=e,a=r||"1",{common:{cubicBezierEaseInOut:l},self:{pFontSize:p,pLineHeight:h,pMargin:m,pTextColor:d,[`pTextColor${a}Depth`]:g}}=i.value;return{"--n-bezier":l,"--n-font-size":p,"--n-line-height":h,"--n-margin":m,"--n-text-color":r===void 0?d:g}}),t=n?L("p",C(()=>`${e.depth||""}`),s,e):void 0;return{mergedClsPrefix:o,cssVars:n?void 0:s,themeClass:t?.themeClass,onRender:t?.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),c("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}});export{ce as N,ee as a,de as b,q as c,he as d,U as e,G as g,X as s,ne as t};
