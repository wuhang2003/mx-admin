import{i as P,o as W}from"./utils-8fb188d9.js";import{a as _}from"./Tag-945120fa.js";import{a0 as K,d as V,r as p,i as H,c as y,ab as A,o as G,a3 as U,aa as q,h as R}from"./create-injection-key-6dff4bbb.js";import{i as w,P as D,h as C,af as J,j as B,u as X,o as $,q as Y,p as Q}from"./fade-in.cssr-c6d077ce.js";import{K as Z,J as ee,V as oe,U as re}from"./Card-720de80b.js";import{a as te}from"./light-9254275d.js";const ne=K("n-avatar-group"),ae=w("avatar",`
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
`,[D(C("&","--n-merged-color: var(--n-color-modal);")),J(C("&","--n-merged-color: var(--n-color-popover);")),C("img",`
 width: 100%;
 height: 100%;
 `),B("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),w("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),B("text","line-height: 1.25")]),ie=Object.assign(Object.assign({},$.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),ve=V({name:"Avatar",props:ie,setup(r){const{mergedClsPrefixRef:l,inlineThemeDisabled:h}=X(r),i=p(!1);let d=null;const m=p(null),s=p(null),L=()=>{const{value:e}=m;if(e&&(d===null||d!==e.innerHTML)){d=e.innerHTML;const{value:o}=s;if(o){const{offsetWidth:n,offsetHeight:t}=o,{offsetWidth:a,offsetHeight:E}=e,j=.9,F=Math.min(n/a*j,t/E*j,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${F})`}}},g=H(ne,null),b=y(()=>{const{size:e}=r;if(e)return e;const{size:o}=g||{};return o||"medium"}),x=$("Avatar","-avatar",ae,te,r,l),c=H(_,null),u=y(()=>{if(g)return!0;const{round:e,circle:o}=r;return e!==void 0||o!==void 0?e||o:c?c.roundRef.value:!1}),z=y(()=>g?!0:r.bordered||!1),f=e=>{var o;if(!S.value)return;i.value=!0;const{onError:n,imgProps:t}=r;(o=t?.onError)===null||o===void 0||o.call(t,e),n&&n(e)};A(()=>r.src,()=>i.value=!1);const T=y(()=>{const e=b.value,o=u.value,n=z.value,{color:t}=r,{self:{borderRadius:a,fontSize:E,color:j,border:F,colorModal:I,colorPopover:M},common:{cubicBezierEaseInOut:N}}=x.value;let O;return typeof e=="number"?O=`${e}px`:O=x.value.self[Q("height",e)],{"--n-font-size":E,"--n-border":n?F:"none","--n-border-radius":o?"50%":a,"--n-color":t||j,"--n-color-modal":t||I,"--n-color-popover":t||M,"--n-bezier":N,"--n-merged-size":`var(--n-avatar-size-override, ${O})`}}),v=h?Y("avatar",y(()=>{const e=b.value,o=u.value,n=z.value,{color:t}=r;let a="";return e&&(typeof e=="number"?a+=`a${e}`:a+=e[0]),o&&(a+="b"),n&&(a+="c"),t&&(a+=re(t)),a}),T,r):void 0,S=p(!r.lazy);G(()=>{if(P)return;let e;const o=U(()=>{e?.(),e=void 0,r.lazy&&(e=W(s.value,r.intersectionObserverOptions,S))});q(()=>{o(),e?.()})});const k=p(!r.lazy);return{textRef:m,selfRef:s,mergedRoundRef:u,mergedClsPrefix:l,fitTextTransform:L,cssVars:h?void 0:T,themeClass:v?.themeClass,onRender:v?.onRender,hasLoadError:i,handleError:f,shouldStartLoading:S,loaded:k,mergedOnLoad:e=>{var o;const{onLoad:n,imgProps:t}=r;n?.(e),(o=t?.onLoad)===null||o===void 0||o.call(t,e),k.value=!0}}},render(){var r,l;const{$slots:h,src:i,mergedClsPrefix:d,lazy:m,onRender:s,mergedOnLoad:L,shouldStartLoading:g,loaded:b,hasLoadError:x}=this;s?.();let c;const u=!b&&!x&&(this.renderPlaceholder?this.renderPlaceholder():(l=(r=this.$slots).placeholder)===null||l===void 0?void 0:l.call(r));return this.hasLoadError?c=this.renderFallback?this.renderFallback():Z(h.fallback,()=>[R("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):c=ee(h.default,z=>{if(z)return R(oe,{onResize:this.fitTextTransform},{default:()=>R("span",{ref:"textRef",class:`${d}-avatar__text`},z)});if(i){const{imgProps:f}=this;return R("img",Object.assign(Object.assign({},f),{loading:P&&m?"lazy":"eager",src:P||g||b?i:void 0,onLoad:L,"data-image-src":i,onError:this.handleError,style:[f?.style,{objectFit:this.objectFit},u?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),R("span",{ref:"selfRef",class:[`${d}-avatar`,this.themeClass],style:this.cssVars},c,m&&u)}});export{ve as N};
