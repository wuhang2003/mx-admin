import{V as v,X as y,az as R,aA as u,d as m,Z as P,aB as w,aC as C,aD as c,aE as x,a0 as N,a7 as a,aF as j,aG as i,aH as d,aI as S,aJ as A,i as $,s as I,aK as f}from"./index-d87a4bf9.js";import{N as O,f as K,a as V}from"./FormItem-103c95ba.js";const z=Array.apply(null,{length:24}).map((t,r)=>{const s=r+1,e=`calc(100% / 24 * ${s})`;return[u(`${s}-span`,{width:e}),u(`${s}-offset`,{marginLeft:e}),u(`${s}-push`,{left:e}),u(`${s}-pull`,{right:e})]}),E=v([y("row",{width:"100%",display:"flex",flexWrap:"wrap"}),y("col",{verticalAlign:"top",boxSizing:"border-box",display:"inline-block",position:"relative",zIndex:"auto"},[R("box",{position:"relative",zIndex:"auto",width:"100%",height:"100%"}),z])]),b=j("n-row"),p={gutter:{type:[Array,Number,String],default:0},alignItems:String,justifyContent:String},F=d(p),G=m({name:"Row",props:p,setup(t){const{mergedClsPrefixRef:r,mergedRtlRef:s}=P(t);w("-legacy-grid",E,r);const e=C("Row",s,r),n=c(()=>{const{gutter:o}=t;return Array.isArray(o)&&o[1]||0}),l=c(()=>{const{gutter:o}=t;return Array.isArray(o)?o[0]:Number(o)});return x(b,{mergedClsPrefixRef:r,gutterRef:N(t,"gutter"),verticalGutterRef:n,horizontalGutterRef:l}),{mergedClsPrefix:r,rtlEnabled:e,styleMargin:c(()=>`-${i(n.value,{c:.5})} -${i(l.value,{c:.5})}`),styleWidth:c(()=>`calc(100% + ${i(l.value)})`)}},render(){return a("div",{class:[`${this.mergedClsPrefix}-row`,this.rtlEnabled&&`${this.mergedClsPrefix}-row--rtl`],style:{margin:this.styleMargin,width:this.styleWidth,alignItems:this.alignItems,justifyContent:this.justifyContent}},this.$slots)}}),g={span:{type:[String,Number],default:1},push:{type:[String,Number],default:0},pull:{type:[String,Number],default:0},offset:{type:[String,Number],default:0}},M=d(g),k=m({name:"Col",props:g,setup(t){const r=S(b,null);return r||A("col","`n-col` must be placed inside `n-row`."),{mergedClsPrefix:r.mergedClsPrefixRef,gutter:r.gutterRef,stylePadding:$(()=>`${i(r.verticalGutterRef.value,{c:.5})} ${i(r.horizontalGutterRef.value,{c:.5})}`),mergedPush:$(()=>Number(t.push)-Number(t.pull))}},render(){const{$slots:t,span:r,mergedPush:s,offset:e,stylePadding:n,gutter:l,mergedClsPrefix:o}=this;return a("div",{class:[`${o}-col`,{[`${o}-col--${r}-span`]:!0,[`${o}-col--${s}-push`]:s>0,[`${o}-col--${-s}-pull`]:s<0,[`${o}-col--${e}-offset`]:e}],style:{padding:n}},l?a("div",null,t):t)}}),h=Object.assign(Object.assign({},g),K),W=d(h),B=m({name:"FormItemCol",props:h,setup(){const t=I(null);return{formItemInstRef:t,validate:(...e)=>{const{value:n}=t;if(n)return n.validate(...e)},restoreValidation:()=>{const{value:e}=t;if(e)return e.restoreValidation()}}},render(){return a(k,f(this.$props,M),{default:()=>{const t=f(this.$props,V);return a(O,Object.assign({ref:"formItemInstRef"},t),this.$slots)}})}}),L=Object.assign(Object.assign({},p),h),J=m({name:"FormItemRow",props:L,setup(){const t=I(null);return{formItemColInstRef:t,validate:(...e)=>{const{value:n}=t;if(n)return n.validate(...e)},restoreValidation:()=>{const{value:e}=t;if(e)return e.restoreValidation()}}},render(){return a(G,f(this.$props,F),{default:()=>{const t=f(this.$props,W);return a(B,Object.assign(Object.assign({ref:"formItemColInstRef"},t),{span:24}),this.$slots)}})}});export{J as N};
