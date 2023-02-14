import{at as j,k as R,J as k,L as b,K as E,n as v,b8 as M,v as l,M as L,bP as N,bQ as $,C as G,D as w,E as f,a_ as W,H as B,N as H,be as I,P as O,aC as V,b5 as D}from"./Button-5ec267f1.js";function _(e,a="default",i=[]){const r=e.$slots[a];return r===void 0?i:r()}const A={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},K=()=>A,F={name:"Space",self:K},J=F;let z;const U=()=>{if(!j)return!0;if(z===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const a=e.scrollHeight===1;return document.body.removeChild(e),z=a}return z},Q=Object.assign(Object.assign({},b.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),ie=R({name:"Space",props:Q,setup(e){const{mergedClsPrefixRef:a,mergedRtlRef:i}=k(e),t=b("Space","-space",void 0,J,e,a),r=E("Space",i,a);return{useGap:U(),rtlEnabled:r,mergedClsPrefix:a,margin:v(()=>{const{size:n}=e;if(Array.isArray(n))return{horizontal:n[0],vertical:n[1]};if(typeof n=="number")return{horizontal:n,vertical:n};const{self:{[L("gap",n)]:s}}=t.value,{row:o,col:c}=N(s);return{horizontal:$(c),vertical:$(o)}})}},render(){const{vertical:e,align:a,inline:i,justify:t,itemStyle:r,margin:n,wrap:s,mergedClsPrefix:o,rtlEnabled:c,useGap:p,wrapItem:x,internalUseGap:S}=this,m=M(_(this));if(!m.length)return null;const C=`${n.horizontal}px`,h=`${n.horizontal/2}px`,T=`${n.vertical}px`,u=`${n.vertical/2}px`,g=m.length-1,y=t.startsWith("space-");return l("div",{role:"none",class:[`${o}-space`,c&&`${o}-space--rtl`],style:{display:i?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(t)?"flex-"+t:t,flexWrap:!s||e?"nowrap":"wrap",marginTop:p||e?"":`-${u}`,marginBottom:p||e?"":`-${u}`,alignItems:a,gap:p?`${n.vertical}px ${n.horizontal}px`:""}},!x&&(p||S)?m:m.map((P,d)=>l("div",{role:"none",style:[r,{maxWidth:"100%"},p?"":e?{marginBottom:d!==g?T:""}:c?{marginLeft:y?t==="space-between"&&d===g?"":h:d!==g?C:"",marginRight:y?t==="space-between"&&d===0?"":h:"",paddingTop:u,paddingBottom:u}:{marginRight:y?t==="space-between"&&d===g?"":h:d!==g?C:"",marginLeft:y?t==="space-between"&&d===0?"":h:"",paddingTop:u,paddingBottom:u}]},P)))}}),X=e=>{const{opacityDisabled:a,heightTiny:i,heightSmall:t,heightMedium:r,heightLarge:n,heightHuge:s,primaryColor:o,fontSize:c}=e;return{fontSize:c,textColor:o,sizeTiny:i,sizeSmall:t,sizeMedium:r,sizeLarge:n,sizeHuge:s,color:o,opacitySpinning:a}},Y={name:"Spin",common:G,self:X},q=Y,Z=w([w("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),f("spin-container",{position:"relative"},[f("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[W()])]),f("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),f("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[B("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),f("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),f("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[B("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),ee={small:20,medium:18,large:16},te=Object.assign(Object.assign({},b.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),se=R({name:"Spin",props:te,setup(e){const{mergedClsPrefixRef:a,inlineThemeDisabled:i}=k(e),t=b("Spin","-spin",Z,q,e,a),r=v(()=>{const{size:s}=e,{common:{cubicBezierEaseInOut:o},self:c}=t.value,{opacitySpinning:p,color:x,textColor:S}=c,m=typeof s=="number"?D(s):c[L("size",s)];return{"--n-bezier":o,"--n-opacity-spinning":p,"--n-size":m,"--n-color":x,"--n-text-color":S}}),n=i?H("spin",v(()=>{const{size:s}=e;return typeof s=="number"?String(s):s[0]}),r,e):void 0;return{mergedClsPrefix:a,compitableShow:I(e,["spinning","show"]),mergedStrokeWidth:v(()=>{const{strokeWidth:s}=e;if(s!==void 0)return s;const{size:o}=e;return ee[typeof o=="number"?"medium":o]}),cssVars:i?void 0:r,themeClass:n?.themeClass,onRender:n?.onRender}},render(){var e,a;const{$slots:i,mergedClsPrefix:t,description:r}=this,n=i.icon&&this.rotate,s=(r||i.description)&&l("div",{class:`${t}-spin-description`},r||((e=i.description)===null||e===void 0?void 0:e.call(i))),o=i.icon?l("div",{class:[`${t}-spin-body`,this.themeClass]},l("div",{class:[`${t}-spin`,n&&`${t}-spin--rotate`],style:i.default?"":this.cssVars},i.icon()),s):l("div",{class:[`${t}-spin-body`,this.themeClass]},l(O,{clsPrefix:t,style:i.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${t}-spin`}),s);return(a=this.onRender)===null||a===void 0||a.call(this),i.default?l("div",{class:[`${t}-spin-container`,this.themeClass],style:this.cssVars},l("div",{class:[`${t}-spin-content`,this.compitableShow&&`${t}-spin-content--spinning`]},i),l(V,{name:"fade-in-transition"},{default:()=>this.compitableShow?o:null})):o}});export{se as N,ie as a,J as b,A as c,_ as g,X as s};
