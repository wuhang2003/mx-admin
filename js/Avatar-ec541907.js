import{i as C,o as W}from"./utils-a7dc5dd7.js";import{a as _}from"./Tag-e8d95e9c.js";import{b4 as A,E as H,aL as G,D as P,bR as K,G as w,k as V,J as D,y as p,l as B,n as y,L as N,at as q,N as J,R as U,bc as X,aq as Y,aC as Q,v as R,aN as Z,b7 as ee,M as oe,aF as re}from"./Button-2747a3c5.js";import{a as te}from"./light-8044ac5e.js";const ne=A("n-avatar-group"),ae=H("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[G(P("&","--n-merged-color: var(--n-color-modal);")),K(P("&","--n-merged-color: var(--n-color-popover);")),P("img",`
 width: 100%;
 height: 100%;
 `),w("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),H("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),w("text","line-height: 1.25")]),se=Object.assign(Object.assign({},N.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),ue=V({name:"Avatar",props:se,setup(r){const{mergedClsPrefixRef:l,inlineThemeDisabled:h}=D(r),s=p(!1);let d=null;const m=p(null),i=p(null),j=()=>{const{value:e}=m;if(e&&(d===null||d!==e.innerHTML)){d=e.innerHTML;const{value:o}=i;if(o){const{offsetWidth:n,offsetHeight:t}=o,{offsetWidth:a,offsetHeight:F}=e,L=.9,O=Math.min(n/a*L,t/F*L,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${O})`}}},g=B(ne,null),b=y(()=>{const{size:e}=r;if(e)return e;const{size:o}=g||{};return o||"medium"}),x=N("Avatar","-avatar",ae,te,r,l),c=B(_,null),u=y(()=>{if(g)return!0;const{round:e,circle:o}=r;return e!==void 0||o!==void 0?e||o:c?c.roundRef.value:!1}),z=y(()=>g?!0:r.bordered||!1),f=e=>{var o;if(!E.value)return;s.value=!0;const{onError:n,imgProps:t}=r;(o=t?.onError)===null||o===void 0||o.call(t,e),n&&n(e)};q(()=>r.src,()=>s.value=!1);const T=y(()=>{const e=b.value,o=u.value,n=z.value,{color:t}=r,{self:{borderRadius:a,fontSize:F,color:L,border:O,colorModal:$,colorPopover:I},common:{cubicBezierEaseInOut:M}}=x.value;let S;return typeof e=="number"?S=`${e}px`:S=x.value.self[oe("height",e)],{"--n-font-size":F,"--n-border":n?O:"none","--n-border-radius":o?"50%":a,"--n-color":t||L,"--n-color-modal":t||$,"--n-color-popover":t||I,"--n-bezier":M,"--n-merged-size":`var(--n-avatar-size-override, ${S})`}}),v=h?J("avatar",y(()=>{const e=b.value,o=u.value,n=z.value,{color:t}=r;let a="";return e&&(typeof e=="number"?a+=`a${e}`:a+=e[0]),o&&(a+="b"),n&&(a+="c"),t&&(a+=re(t)),a}),T,r):void 0,E=p(!r.lazy);U(()=>{if(C)return;let e;const o=X(()=>{e?.(),e=void 0,r.lazy&&(e=W(i.value,r.intersectionObserverOptions,E))});Y(()=>{o(),e?.()})});const k=p(!r.lazy);return{textRef:m,selfRef:i,mergedRoundRef:u,mergedClsPrefix:l,fitTextTransform:j,cssVars:h?void 0:T,themeClass:v?.themeClass,onRender:v?.onRender,hasLoadError:s,handleError:f,shouldStartLoading:E,loaded:k,mergedOnLoad:e=>{var o;const{onLoad:n,imgProps:t}=r;n?.(e),(o=t?.onLoad)===null||o===void 0||o.call(t,e),k.value=!0}}},render(){var r,l;const{$slots:h,src:s,mergedClsPrefix:d,lazy:m,onRender:i,mergedOnLoad:j,shouldStartLoading:g,loaded:b,hasLoadError:x}=this;i?.();let c;const u=!b&&!x&&(this.renderPlaceholder?this.renderPlaceholder():(l=(r=this.$slots).placeholder)===null||l===void 0?void 0:l.call(r));return this.hasLoadError?c=this.renderFallback?this.renderFallback():Q(h.fallback,()=>[R("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):c=Z(h.default,z=>{if(z)return R(ee,{onResize:this.fitTextTransform},{default:()=>R("span",{ref:"textRef",class:`${d}-avatar__text`},z)});if(s){const{imgProps:f}=this;return R("img",Object.assign(Object.assign({},f),{loading:C&&!this.intersectionObserverOptions&&m?"lazy":"eager",src:C||g||b?s:void 0,onLoad:j,"data-image-src":s,onError:this.handleError,style:[f?.style,{objectFit:this.objectFit},u?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),R("span",{ref:"selfRef",class:[`${d}-avatar`,this.themeClass],style:this.cssVars},c,m&&u)}});export{ue as N};
