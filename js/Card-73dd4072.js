import{br as w,aw as oe,v as a,E as m,H as l,D as r,bD as re,k as E,aA as te,ax as ne,Q as ae,e as de,C as se,aM as le,G as c,aL as ie,bR as ce,J as be,L as T,K as fe,n as B,N as ue,aN as p,aK as ge,b2 as ve,M as k,bd as pe}from"./Button-5ec267f1.js";const Be=(e,...n)=>typeof e=="function"?e(...n):typeof e=="string"?w(e):typeof e=="number"?w(String(e)):null;function Le(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}const M=new WeakSet;function Pe(e){M.add(e)}function Ee(e){return!M.has(e)}const me=oe("close",a("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},a("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},a("g",{fill:"currentColor","fill-rule":"nonzero"},a("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),he=m("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[l("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),r("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),re("disabled",[r("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),r("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),r("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),r("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),r("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),l("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),l("round",[r("&::before",`
 border-radius: 50%;
 `)])]),xe=E({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return te("-base-close",he,ne(e,"clsPrefix")),()=>{const{clsPrefix:n,disabled:i,absolute:o,round:d,isButtonTag:b}=e;return a(b?"button":"div",{type:b?"button":void 0,tabindex:i||!e.focusable?-1:0,"aria-disabled":i,"aria-label":"close",role:b?void 0:"button",disabled:i,class:[`${n}-base-close`,o&&`${n}-base-close--absolute`,i&&`${n}-base-close--disabled`,d&&`${n}-base-close--round`],onMousedown:f=>{e.focusable||f.preventDefault()},onClick:e.onClick},a(ae,{clsPrefix:n},{default:()=>a(me,null)}))}}}),{cubicBezierEaseIn:L,cubicBezierEaseOut:P}=de;function Te({transformOrigin:e="inherit",duration:n=".2s",enterScale:i=".9",originalTransform:o="",originalTransition:d=""}={}){return[r("&.fade-in-scale-up-transition-leave-active",{transformOrigin:e,transition:`opacity ${n} ${L}, transform ${n} ${L} ${d&&","+d}`}),r("&.fade-in-scale-up-transition-enter-active",{transformOrigin:e,transition:`opacity ${n} ${P}, transform ${n} ${P} ${d&&","+d}`}),r("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${o} scale(${i})`}),r("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${o} scale(1)`})]}const Ce={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"},ze=e=>{const{primaryColor:n,borderRadius:i,lineHeight:o,fontSize:d,cardColor:b,textColor2:u,textColor1:f,dividerColor:s,fontWeightStrong:t,closeIconColor:g,closeIconColorHover:h,closeIconColorPressed:x,closeColorHover:C,closeColorPressed:z,modalColor:S,boxShadow1:y,popoverColor:$,actionColor:v}=e;return Object.assign(Object.assign({},Ce),{lineHeight:o,color:b,colorModal:S,colorPopover:$,colorTarget:n,colorEmbedded:v,colorEmbeddedModal:v,colorEmbeddedPopover:v,textColor:u,titleTextColor:f,borderColor:s,actionColor:v,titleFontWeight:t,closeColorHover:C,closeColorPressed:z,closeBorderRadius:i,closeIconColor:g,closeIconColorHover:h,closeIconColorPressed:x,fontSizeSmall:d,fontSizeMedium:d,fontSizeLarge:d,fontSizeHuge:d,boxShadow:y,borderRadius:i})},Se={name:"Card",common:se,self:ze},ye=Se,$e=r([m("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[le({background:"var(--n-color-modal)"}),l("hoverable",[r("&:hover","box-shadow: var(--n-box-shadow);")]),l("content-segmented",[r(">",[c("content",{paddingTop:"var(--n-padding-bottom)"})])]),l("content-soft-segmented",[r(">",[c("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),l("footer-segmented",[r(">",[c("footer",{paddingTop:"var(--n-padding-bottom)"})])]),l("footer-soft-segmented",[r(">",[c("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),r(">",[m("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[c("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),c("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),c("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),c("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),c("content","flex: 1; min-width: 0;"),c("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[r("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),c("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),m("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[r("img",`
 display: block;
 width: 100%;
 `)]),l("bordered",`
 border: 1px solid var(--n-border-color);
 `,[r("&:target","border-color: var(--n-color-target);")]),l("action-segmented",[r(">",[c("action",[r("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("content-segmented, content-soft-segmented",[r(">",[c("content",{transition:"border-color 0.3s var(--n-bezier)"},[r("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("footer-segmented, footer-soft-segmented",[r(">",[c("footer",{transition:"border-color 0.3s var(--n-bezier)"},[r("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("embedded",`
 background-color: var(--n-color-embedded);
 `)]),ie(m("card",`
 background: var(--n-color-modal);
 `,[l("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),ce(m("card",`
 background: var(--n-color-popover);
 `,[l("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),R={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},Me=ge(R),ke=Object.assign(Object.assign({},T.props),R),Re=E({name:"Card",props:ke,setup(e){const n=()=>{const{onClose:t}=e;t&&ve(t)},{inlineThemeDisabled:i,mergedClsPrefixRef:o,mergedRtlRef:d}=be(e),b=T("Card","-card",$e,ye,e,o),u=fe("Card",d,o),f=B(()=>{const{size:t}=e,{self:{color:g,colorModal:h,colorTarget:x,textColor:C,titleTextColor:z,titleFontWeight:S,borderColor:y,actionColor:$,borderRadius:v,lineHeight:I,closeIconColor:_,closeIconColorHover:H,closeIconColorPressed:O,closeColorHover:j,closeColorPressed:F,closeBorderRadius:N,closeIconSize:V,closeSize:W,boxShadow:D,colorPopover:K,colorEmbedded:A,colorEmbeddedModal:q,colorEmbeddedPopover:G,[k("padding",t)]:J,[k("fontSize",t)]:Q,[k("titleFontSize",t)]:U},common:{cubicBezierEaseInOut:X}}=b.value,{top:Y,left:Z,bottom:ee}=pe(J);return{"--n-bezier":X,"--n-border-radius":v,"--n-color":g,"--n-color-modal":h,"--n-color-popover":K,"--n-color-embedded":A,"--n-color-embedded-modal":q,"--n-color-embedded-popover":G,"--n-color-target":x,"--n-text-color":C,"--n-line-height":I,"--n-action-color":$,"--n-title-text-color":z,"--n-title-font-weight":S,"--n-close-icon-color":_,"--n-close-icon-color-hover":H,"--n-close-icon-color-pressed":O,"--n-close-color-hover":j,"--n-close-color-pressed":F,"--n-border-color":y,"--n-box-shadow":D,"--n-padding-top":Y,"--n-padding-bottom":ee,"--n-padding-left":Z,"--n-font-size":Q,"--n-title-font-size":U,"--n-close-size":W,"--n-close-icon-size":V,"--n-close-border-radius":N}}),s=i?ue("card",B(()=>e.size[0]),f,e):void 0;return{rtlEnabled:u,mergedClsPrefix:o,mergedTheme:b,handleCloseClick:n,cssVars:i?void 0:f,themeClass:s?.themeClass,onRender:s?.onRender}},render(){const{segmented:e,bordered:n,hoverable:i,mergedClsPrefix:o,rtlEnabled:d,onRender:b,embedded:u,tag:f,$slots:s}=this;return b?.(),a(f,{class:[`${o}-card`,this.themeClass,u&&`${o}-card--embedded`,{[`${o}-card--rtl`]:d,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:n,[`${o}-card--hoverable`]:i}],style:this.cssVars,role:this.role},p(s.cover,t=>t&&a("div",{class:`${o}-card-cover`,role:"none"},t)),p(s.header,t=>t||this.title||this.closable?a("div",{class:`${o}-card-header`,style:this.headerStyle},a("div",{class:`${o}-card-header__main`,role:"heading"},t||this.title),p(s["header-extra"],g=>g&&a("div",{class:`${o}-card-header__extra`,style:this.headerExtraStyle},g)),this.closable?a(xe,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),p(s.default,t=>t&&a("div",{class:`${o}-card__content`,style:this.contentStyle,role:"none"},t)),p(s.footer,t=>t&&[a("div",{class:`${o}-card__footer`,style:this.footerStyle,role:"none"},t)]),p(s.action,t=>t&&a("div",{class:`${o}-card__action`,role:"none"},t)))}});export{me as E,xe as N,R as a,Re as b,ye as c,Me as d,Ee as e,Te as f,Le as g,Pe as m,Be as r,ze as s};
