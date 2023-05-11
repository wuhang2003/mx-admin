import{d as V,s as S,ek as rt,el as ot,a7 as i,em as de,aF as st,aI as he,aJ as it,i as N,bk as lt,F as dt,cy as ct,cN as bt,bt as ft,dX as ut,X as n,aA as c,V as x,az as W,bb as vt,Z as pt,a2 as ge,en as ht,cP as ce,d_ as Y,a1 as gt,w as G,aE as mt,a0 as B,eo as xt,b1 as yt,b9 as _,a4 as wt,bF as be,b_ as fe,ag as M,aq as K,ad as Rt,ep as Ct,eq as zt,bi as St}from"./index-d87a4bf9.js";import{A as $t}from"./Add-dc737e0f.js";import{t as J}from"./throttle-15823237.js";const Pt=de(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[de("&::-webkit-scrollbar",{width:0,height:0})]),Tt=V({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=S(null);function r(l){!(l.currentTarget.offsetWidth<l.currentTarget.scrollWidth)||l.deltaY===0||(l.currentTarget.scrollLeft+=l.deltaY+l.deltaX,l.preventDefault())}const b=rt();return Pt.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:ot,ssr:b}),Object.assign({selfRef:e,handleWheel:r},{scrollTo(...l){var g;(g=e.value)===null||g===void 0||g.scrollTo(...l)}})},render(){return i("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}}),ee=st("n-tabs"),me={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},jt=V({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:me,setup(e){const r=he(ee,null);return r||it("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:r.paneStyleRef,class:r.paneClassRef,mergedClsPrefix:r.mergedClsPrefixRef}},render(){return i("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),_t=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},ut(me,["displayDirective"])),Q=V({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:_t,setup(e){const{mergedClsPrefixRef:r,valueRef:b,typeRef:y,closableRef:l,tabStyleRef:g,tabChangeIdRef:u,onBeforeLeaveRef:w,triggerRef:m,handleAdd:R,activateTab:z,handleClose:p}=he(ee);return{trigger:m,mergedClosable:N(()=>{if(e.internalAddable)return!1;const{closable:f}=e;return f===void 0?l.value:f}),style:g,clsPrefix:r,value:b,type:y,handleClose(f){f.stopPropagation(),!e.disabled&&p(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){R();return}const{name:f}=e,C=++u.id;if(f!==b.value){const{value:h}=w;h?Promise.resolve(h(e.name,b.value)).then(L=>{L&&u.id===C&&z(f)}):z(f)}}}},render(){const{internalAddable:e,clsPrefix:r,name:b,disabled:y,label:l,tab:g,value:u,mergedClosable:w,style:m,trigger:R,$slots:{default:z}}=this,p=l??g;return i("div",{class:`${r}-tabs-tab-wrapper`},this.internalLeftPadded?i("div",{class:`${r}-tabs-tab-pad`}):null,i("div",Object.assign({key:b,"data-name":b,"data-disabled":y?!0:void 0},lt({class:[`${r}-tabs-tab`,u===b&&`${r}-tabs-tab--active`,y&&`${r}-tabs-tab--disabled`,w&&`${r}-tabs-tab--closable`,e&&`${r}-tabs-tab--addable`],onClick:R==="click"?this.activateTab:void 0,onMouseenter:R==="hover"?this.activateTab:void 0,style:e?void 0:m},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),i("span",{class:`${r}-tabs-tab__label`},e?i(dt,null,i("div",{class:`${r}-tabs-tab__height-placeholder`}," "),i(ct,{clsPrefix:r},{default:()=>i($t,null)})):z?z():typeof p=="object"?p:bt(p??b)),w&&this.type==="card"?i(ft,{clsPrefix:r,class:`${r}-tabs-tab__close`,onClick:this.handleClose,disabled:y}):null))}}),At=n("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[c("segment-type",[n("tabs-rail",[x("&.transition-disabled","color: red;",[n("tabs-tab",`
 transition: none;
 `)])])]),c("left, right",`
 flex-direction: row;
 `,[n("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),n("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),c("right",`
 flex-direction: row-reverse;
 `,[n("tabs-bar",`
 left: 0;
 `)]),c("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[n("tabs-bar",`
 top: 0;
 `)]),n("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[n("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[n("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[c("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),x("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),c("flex",[n("tabs-nav",{width:"100%"},[n("tabs-wrapper",{width:"100%"},[n("tabs-tab",{marginRight:0})])])]),n("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[W("prefix, suffix",`
 display: flex;
 align-items: center;
 `),W("prefix","padding-right: 16px;"),W("suffix","padding-left: 16px;")]),n("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[c("shadow-before",[x("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),c("shadow-after",[x("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),n("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[x("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),x("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 20px;
 z-index: 1;
 `),x("&::before",`
 left: 0;
 `),x("&::after",`
 right: 0;
 `)]),n("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 `),n("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),n("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),n("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[c("disabled",{cursor:"not-allowed"}),W("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),W("label",`
 display: flex;
 align-items: center;
 `)]),n("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[x("&.transition-disabled",`
 transition: none;
 `),c("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),n("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),n("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 padding: var(--n-pane-padding);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[x("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),x("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),x("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),x("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),x("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),n("tabs-tab-pad",`
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),c("line-type, bar-type",[n("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[x("&:hover",{color:"var(--n-tab-text-color-hover)"}),c("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),c("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),n("tabs-nav",[c("line-type",[W("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 border-radius: 0;
 bottom: -1px;
 `)]),c("card-type",[W("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[c("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[W("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),vt("disabled",[x("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),c("closable","padding-right: 6px;"),c("active",`
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),c("disabled","color: var(--n-tab-text-color-disabled);")]),n("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),c("left, right",[n("tabs-wrapper",`
 flex-direction: column;
 `,[n("tabs-tab-wrapper",`
 flex-direction: column;
 `,[n("tabs-tab-pad",`
 height: var(--n-tab-gap);
 width: 100%;
 `)])]),n("tabs-nav-scroll-content",`
 border-bottom: none;
 `)]),c("left",[n("tabs-nav-scroll-content",`
 box-sizing: border-box;
 border-right: 1px solid var(--n-tab-border-color);
 `)]),c("right",[n("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `)]),c("bottom",[n("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 border-bottom: none;
 `)])])]),Wt=Object.assign(Object.assign({},ge.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),Et=V({name:"Tabs",props:Wt,setup(e,{slots:r}){var b,y,l,g;const{mergedClsPrefixRef:u,inlineThemeDisabled:w}=pt(e),m=ge("Tabs","-tabs",At,ht,e,u),R=S(null),z=S(null),p=S(null),f=S(null),C=S(null),h=S(!0),L=S(!0),$=ce(e,["labelSize","size"]),F=ce(e,["activeName","value"]),d=S((y=(b=F.value)!==null&&b!==void 0?b:e.defaultValue)!==null&&y!==void 0?y:r.default?(g=(l=Y(r.default())[0])===null||l===void 0?void 0:l.props)===null||g===void 0?void 0:g.name:null),v=gt(F,d),k={id:0},xe=N(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});G(v,()=>{k.id=0,H(),ae()});function X(){var t;const{value:a}=v;return a===null?null:(t=R.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function ye(t){if(e.type==="card")return;const{value:a}=z;if(a&&t){const o=`${u.value}-tabs-bar--disabled`,{barWidth:s,placement:T}=e;if(t.dataset.disabled==="true"?a.classList.add(o):a.classList.remove(o),["top","bottom"].includes(T)){if(te(["top","maxHeight","height"]),typeof s=="number"&&t.offsetWidth>=s){const P=Math.floor((t.offsetWidth-s)/2)+t.offsetLeft;a.style.left=`${P}px`,a.style.maxWidth=`${s}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",a.offsetWidth}else{if(te(["left","maxWidth","width"]),typeof s=="number"&&t.offsetHeight>=s){const P=Math.floor((t.offsetHeight-s)/2)+t.offsetTop;a.style.top=`${P}px`,a.style.maxHeight=`${s}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",a.offsetHeight}}}function te(t){const{value:a}=z;if(a)for(const o of t)a.style[o]=""}function H(){if(e.type==="card")return;const t=X();t&&ye(t)}function ae(t){var a;const o=(a=C.value)===null||a===void 0?void 0:a.$el;if(!o)return;const s=X();if(!s)return;const{scrollLeft:T,offsetWidth:P}=o,{offsetLeft:E,offsetWidth:D}=s;T>E?o.scrollTo({top:0,left:E,behavior:"smooth"}):E+D>T+P&&o.scrollTo({top:0,left:E+D-P,behavior:"smooth"})}const I=S(null);let U=0,A=null;function we(t){const a=I.value;if(a){U=t.getBoundingClientRect().height;const o=`${U}px`,s=()=>{a.style.height=o,a.style.maxHeight=o};A?(s(),A(),A=null):A=s}}function Re(t){const a=I.value;if(a){const o=t.getBoundingClientRect().height,s=()=>{document.body.offsetHeight,a.style.maxHeight=`${o}px`,a.style.height=`${Math.max(U,o)}px`};A?(A(),A=null,s()):A=s}}function Ce(){const t=I.value;t&&(t.style.maxHeight="",t.style.height="")}const ne={value:[]},re=S("next");function ze(t){const a=v.value;let o="next";for(const s of ne.value){if(s===a)break;if(s===t){o="prev";break}}re.value=o,Se(t)}function Se(t){const{onActiveNameChange:a,onUpdateValue:o,"onUpdate:value":s}=e;a&&M(a,t),o&&M(o,t),s&&M(s,t),d.value=t}function $e(t){const{onClose:a}=e;a&&M(a,t)}function oe(){const{value:t}=z;if(!t)return;const a="transition-disabled";t.classList.add(a),H(),t.classList.remove(a)}let se=0;function Pe(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||se===t.contentRect.width)return;se=t.contentRect.width;const{type:o}=e;(o==="line"||o==="bar")&&oe(),o!=="segment"&&q((a=C.value)===null||a===void 0?void 0:a.$el)}const Te=J(Pe,64);G([()=>e.justifyContent,()=>e.size],()=>{K(()=>{const{type:t}=e;(t==="line"||t==="bar")&&oe()})});const O=S(!1);function _e(t){var a;const{target:o,contentRect:{width:s}}=t,T=o.parentElement.offsetWidth;if(!O.value)T<s&&(O.value=!0);else{const{value:P}=f;if(!P)return;T-s>P.$el.offsetWidth&&(O.value=!1)}q((a=C.value)===null||a===void 0?void 0:a.$el)}const Ae=J(_e,64);function We(){const{onAdd:t}=e;t&&t(),K(()=>{const a=X(),{value:o}=C;!a||!o||o.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function q(t){if(!t)return;const{scrollLeft:a,scrollWidth:o,offsetWidth:s}=t;h.value=a<=0,L.value=a+s>=o}const Le=J(t=>{q(t.target)},64);mt(ee,{triggerRef:B(e,"trigger"),tabStyleRef:B(e,"tabStyle"),paneClassRef:B(e,"paneClass"),paneStyleRef:B(e,"paneStyle"),mergedClsPrefixRef:u,typeRef:B(e,"type"),closableRef:B(e,"closable"),valueRef:v,tabChangeIdRef:k,onBeforeLeaveRef:B(e,"onBeforeLeave"),activateTab:ze,handleClose:$e,handleAdd:We}),xt(()=>{H(),ae()}),yt(()=>{const{value:t}=p;if(!t||["left","right"].includes(e.placement))return;const{value:a}=u,o=`${a}-tabs-nav-scroll-wrapper--shadow-before`,s=`${a}-tabs-nav-scroll-wrapper--shadow-after`;h.value?t.classList.remove(o):t.classList.add(o),L.value?t.classList.remove(s):t.classList.add(s)});const ie=S(null);G(v,()=>{if(e.type==="segment"){const t=ie.value;t&&K(()=>{t.classList.add("transition-disabled"),t.offsetWidth,t.classList.remove("transition-disabled")})}});const Be={syncBarPosition:()=>{H()}},le=N(()=>{const{value:t}=$,{type:a}=e,o={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],s=`${t}${o}`,{self:{barColor:T,closeIconColor:P,closeIconColorHover:E,closeIconColorPressed:D,tabColor:ke,tabBorderColor:je,paneTextColor:Ee,tabFontWeight:Fe,tabBorderRadius:He,tabFontWeightActive:Ie,colorSegment:Oe,fontWeightStrong:De,tabColorSegment:Me,closeSize:Ne,closeIconSize:Ve,closeColorHover:Xe,closeColorPressed:Ue,closeBorderRadius:qe,[_("panePadding",t)]:Ye,[_("tabPadding",s)]:Ge,[_("tabPaddingVertical",s)]:Ke,[_("tabGap",s)]:Je,[_("tabTextColor",a)]:Ze,[_("tabTextColorActive",a)]:Qe,[_("tabTextColorHover",a)]:et,[_("tabTextColorDisabled",a)]:tt,[_("tabFontSize",t)]:at},common:{cubicBezierEaseInOut:nt}}=m.value;return{"--n-bezier":nt,"--n-color-segment":Oe,"--n-bar-color":T,"--n-tab-font-size":at,"--n-tab-text-color":Ze,"--n-tab-text-color-active":Qe,"--n-tab-text-color-disabled":tt,"--n-tab-text-color-hover":et,"--n-pane-text-color":Ee,"--n-tab-border-color":je,"--n-tab-border-radius":He,"--n-close-size":Ne,"--n-close-icon-size":Ve,"--n-close-color-hover":Xe,"--n-close-color-pressed":Ue,"--n-close-border-radius":qe,"--n-close-icon-color":P,"--n-close-icon-color-hover":E,"--n-close-icon-color-pressed":D,"--n-tab-color":ke,"--n-tab-font-weight":Fe,"--n-tab-font-weight-active":Ie,"--n-tab-padding":Ge,"--n-tab-padding-vertical":Ke,"--n-tab-gap":Je,"--n-pane-padding":Ye,"--n-font-weight-strong":De,"--n-tab-color-segment":Me}}),j=w?wt("tabs",N(()=>`${$.value[0]}${e.type[0]}`),le,e):void 0;return Object.assign({mergedClsPrefix:u,mergedValue:v,renderedNames:new Set,tabsRailElRef:ie,tabsPaneWrapperRef:I,tabsElRef:R,barElRef:z,addTabInstRef:f,xScrollInstRef:C,scrollWrapperElRef:p,addTabFixed:O,tabWrapperStyle:xe,handleNavResize:Te,mergedSize:$,handleScroll:Le,handleTabsResize:Ae,cssVars:w?void 0:le,themeClass:j?.themeClass,animationDirection:re,renderNameListRef:ne,onAnimationBeforeLeave:we,onAnimationEnter:Re,onAnimationAfterEnter:Ce,onRender:j?.onRender},Be)},render(){const{mergedClsPrefix:e,type:r,placement:b,addTabFixed:y,addable:l,mergedSize:g,renderNameListRef:u,onRender:w,$slots:{default:m,prefix:R,suffix:z}}=this;w?.();const p=m?Y(m()).filter(d=>d.type.__TAB_PANE__===!0):[],f=m?Y(m()).filter(d=>d.type.__TAB__===!0):[],C=!f.length,h=r==="card",L=r==="segment",$=!h&&!L&&this.justifyContent;u.value=[];const F=()=>{const d=i("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},$?null:i("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),C?p.map((v,k)=>(u.value.push(v.props.name),Z(i(Q,Object.assign({},v.props,{internalCreatedByPane:!0,internalLeftPadded:k!==0&&(!$||$==="center"||$==="start"||$==="end")}),v.children?{default:v.children.tab}:void 0)))):f.map((v,k)=>(u.value.push(v.props.name),Z(k!==0&&!$?pe(v):v))),!y&&l&&h?ve(l,(C?p.length:f.length)!==0):null,$?null:i("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return i("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},h&&l?i(fe,{onResize:this.handleTabsResize},{default:()=>d}):d,h?i("div",{class:`${e}-tabs-pad`}):null,h?null:i("div",{ref:"barElRef",class:`${e}-tabs-bar`}))};return i("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${r}-type`,`${e}-tabs--${g}-size`,$&&`${e}-tabs--flex`,`${e}-tabs--${b}`],style:this.cssVars},i("div",{class:[`${e}-tabs-nav--${r}-type`,`${e}-tabs-nav--${b}`,`${e}-tabs-nav`]},be(R,d=>d&&i("div",{class:`${e}-tabs-nav__prefix`},d)),L?i("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},C?p.map((d,v)=>(u.value.push(d.props.name),i(Q,Object.assign({},d.props,{internalCreatedByPane:!0,internalLeftPadded:v!==0}),d.children?{default:d.children.tab}:void 0))):f.map((d,v)=>(u.value.push(d.props.name),v===0?d:pe(d)))):i(fe,{onResize:this.handleNavResize},{default:()=>i("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(b)?i(Tt,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:F}):i("div",{class:`${e}-tabs-nav-y-scroll`},F()))}),y&&l&&h?ve(l,!0):null,be(z,d=>d&&i("div",{class:`${e}-tabs-nav__suffix`},d))),C&&(this.animated?i("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},ue(p,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):ue(p,this.mergedValue,this.renderedNames)))}});function ue(e,r,b,y,l,g,u){const w=[];return e.forEach(m=>{const{name:R,displayDirective:z,"display-directive":p}=m.props,f=h=>z===h||p===h,C=r===R;if(m.key!==void 0&&(m.key=R),C||f("show")||f("show:lazy")&&b.has(R)){b.has(R)||b.add(R);const h=!f("if");w.push(h?Rt(m,[[St,C]]):m)}}),u?i(Ct,{name:`${u}-transition`,onBeforeLeave:y,onEnter:l,onAfterEnter:g},{default:()=>w}):w}function ve(e,r){return i(Q,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:r,disabled:typeof e=="object"&&e.disabled})}function pe(e){const r=zt(e);return r.props?r.props.internalLeftPadded=!0:r.props={internalLeftPadded:!0},r}function Z(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{Et as N,jt as a};
