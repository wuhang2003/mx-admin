import{i as P,o as N}from"./utils-34918e98.js";import{t as _}from"./Tag-bd6b4a7c.js";import{aE as V,V as k,bO as A,U as C,bP as K,ay as w,d as G,Y as U,s as p,aH as B,i as y,a1 as $,bQ as Y,w as D,b2 as Q,a3 as X,bR as q,g as J,aW as Z,x as ee,by as oe,bx as re,a6 as x,bS as te}from"./index-8cac42f8.js";const ne=V("n-avatar-group"),ae=k("avatar",`
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
`,[A(C("&","--n-merged-color: var(--n-color-modal);")),K(C("&","--n-merged-color: var(--n-color-popover);")),C("img",`
 width: 100%;
 height: 100%;
 `),w("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),k("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),w("text","line-height: 1.25")]),se=Object.assign(Object.assign({},$.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),ce=G({name:"Avatar",props:se,setup(r){const{mergedClsPrefixRef:l,inlineThemeDisabled:h}=U(r),s=p(!1);let d=null;const b=p(null),i=p(null),O=()=>{const{value:e}=b;if(e&&(d===null||d!==e.innerHTML)){d=e.innerHTML;const{value:o}=i;if(o){const{offsetWidth:n,offsetHeight:t}=o,{offsetWidth:a,offsetHeight:j}=e,L=.9,E=Math.min(n/a*L,t/j*L,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${E})`}}},m=B(ne,null),g=y(()=>{const{size:e}=r;if(e)return e;const{size:o}=m||{};return o||"medium"}),R=$("Avatar","-avatar",ae,Y,r,l),c=B(_,null),u=y(()=>{if(m)return!0;const{round:e,circle:o}=r;return e!==void 0||o!==void 0?e||o:c?c.roundRef.value:!1}),z=y(()=>m?!0:r.bordered||!1),f=e=>{var o;if(!S.value)return;s.value=!0;const{onError:n,imgProps:t}=r;(o=t?.onError)===null||o===void 0||o.call(t,e),n&&n(e)};D(()=>r.src,()=>s.value=!1);const T=y(()=>{const e=g.value,o=u.value,n=z.value,{color:t}=r,{self:{borderRadius:a,fontSize:j,color:L,border:E,colorModal:I,colorPopover:W},common:{cubicBezierEaseInOut:M}}=R.value;let F;return typeof e=="number"?F=`${e}px`:F=R.value.self[Q("height",e)],{"--n-font-size":j,"--n-border":n?E:"none","--n-border-radius":o?"50%":a,"--n-color":t||L,"--n-color-modal":t||I,"--n-color-popover":t||W,"--n-bezier":M,"--n-merged-size":`var(--n-avatar-size-override, ${F})`}}),v=h?X("avatar",y(()=>{const e=g.value,o=u.value,n=z.value,{color:t}=r;let a="";return e&&(typeof e=="number"?a+=`a${e}`:a+=e[0]),o&&(a+="b"),n&&(a+="c"),t&&(a+=q(t)),a}),T,r):void 0,S=p(!r.lazy);J(()=>{if(P)return;let e;const o=Z(()=>{e?.(),e=void 0,r.lazy&&(e=N(i.value,r.intersectionObserverOptions,S))});ee(()=>{o(),e?.()})});const H=p(!r.lazy);return{textRef:b,selfRef:i,mergedRoundRef:u,mergedClsPrefix:l,fitTextTransform:O,cssVars:h?void 0:T,themeClass:v?.themeClass,onRender:v?.onRender,hasLoadError:s,handleError:f,shouldStartLoading:S,loaded:H,mergedOnLoad:e=>{var o;const{onLoad:n,imgProps:t}=r;n?.(e),(o=t?.onLoad)===null||o===void 0||o.call(t,e),H.value=!0}}},render(){var r,l;const{$slots:h,src:s,mergedClsPrefix:d,lazy:b,onRender:i,mergedOnLoad:O,shouldStartLoading:m,loaded:g,hasLoadError:R}=this;i?.();let c;const u=!g&&!R&&(this.renderPlaceholder?this.renderPlaceholder():(l=(r=this.$slots).placeholder)===null||l===void 0?void 0:l.call(r));return this.hasLoadError?c=this.renderFallback?this.renderFallback():oe(h.fallback,()=>[x("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):c=re(h.default,z=>{if(z)return x(te,{onResize:this.fitTextTransform},{default:()=>x("span",{ref:"textRef",class:`${d}-avatar__text`},z)});if(s){const{imgProps:f}=this;return x("img",Object.assign(Object.assign({},f),{loading:P&&!this.intersectionObserverOptions&&b?"lazy":"eager",src:P||m||g?s:void 0,onLoad:O,"data-image-src":s,onError:this.handleError,style:[f?.style,{objectFit:this.objectFit},u?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),x("span",{ref:"selfRef",class:[`${d}-avatar`,this.themeClass],style:this.cssVars},c,b&&u)}});export{ce as N};
