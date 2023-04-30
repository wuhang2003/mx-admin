import{U as v,V as h,ay as R,az as u,d as m,Y as P,aA as w,aB as C,aC as c,aD as x,$ as N,a6 as a,aE as j,aF as i,aG as d,aH as S,aI as A,i as $,s as I,aJ as f}from"./index-80f33cae.js";import{N as O,f as V,a as z}from"./FormItem-f0f74c7b.js";const E=Array.apply(null,{length:24}).map((t,r)=>{const s=r+1,e=`calc(100% / 24 * ${s})`;return[u(`${s}-span`,{width:e}),u(`${s}-offset`,{marginLeft:e}),u(`${s}-push`,{left:e}),u(`${s}-pull`,{right:e})]}),F=v([h("row",{width:"100%",display:"flex",flexWrap:"wrap"}),h("col",{verticalAlign:"top",boxSizing:"border-box",display:"inline-block",position:"relative",zIndex:"auto"},[R("box",{position:"relative",zIndex:"auto",width:"100%",height:"100%"}),E])]),b=j("n-row"),p={gutter:{type:[Array,Number,String],default:0},alignItems:String,justifyContent:String},K=d(p),G=m({name:"Row",props:p,setup(t){const{mergedClsPrefixRef:r,mergedRtlRef:s}=P(t);w("-legacy-grid",F,r);const e=C("Row",s,r),n=c(()=>{const{gutter:o}=t;return Array.isArray(o)&&o[1]||0}),l=c(()=>{const{gutter:o}=t;return Array.isArray(o)?o[0]:Number(o)});return x(b,{mergedClsPrefixRef:r,gutterRef:N(t,"gutter"),verticalGutterRef:n,horizontalGutterRef:l}),{mergedClsPrefix:r,rtlEnabled:e,styleMargin:c(()=>`-${i(n.value,{c:.5})} -${i(l.value,{c:.5})}`),styleWidth:c(()=>`calc(100% + ${i(l.value)})`)}},render(){return a("div",{class:[`${this.mergedClsPrefix}-row`,this.rtlEnabled&&`${this.mergedClsPrefix}-row--rtl`],style:{margin:this.styleMargin,width:this.styleWidth,alignItems:this.alignItems,justifyContent:this.justifyContent}},this.$slots)}}),g={span:{type:[String,Number],default:1},push:{type:[String,Number],default:0},pull:{type:[String,Number],default:0},offset:{type:[String,Number],default:0}},M=d(g),k=m({name:"Col",props:g,setup(t){const r=S(b,null);return r||A("col","`n-col` must be placed inside `n-row`."),{mergedClsPrefix:r.mergedClsPrefixRef,gutter:r.gutterRef,stylePadding:$(()=>`${i(r.verticalGutterRef.value,{c:.5})} ${i(r.horizontalGutterRef.value,{c:.5})}`),mergedPush:$(()=>Number(t.push)-Number(t.pull))}},render(){const{$slots:t,span:r,mergedPush:s,offset:e,stylePadding:n,gutter:l,mergedClsPrefix:o}=this;return a("div",{class:[`${o}-col`,{[`${o}-col--${r}-span`]:!0,[`${o}-col--${s}-push`]:s>0,[`${o}-col--${-s}-pull`]:s<0,[`${o}-col--${e}-offset`]:e}],style:{padding:n}},l?a("div",null,t):t)}}),y=Object.assign(Object.assign({},g),V),W=d(y),B=m({name:"FormItemCol",props:y,setup(){const t=I(null);return{formItemInstRef:t,validate:(...e)=>{const{value:n}=t;if(n)return n.validate(...e)},restoreValidation:()=>{const{value:e}=t;if(e)return e.restoreValidation()}}},render(){return a(k,f(this.$props,M),{default:()=>{const t=f(this.$props,z);return a(O,Object.assign({ref:"formItemInstRef"},t),this.$slots)}})}}),L=Object.assign(Object.assign({},p),y),J=m({name:"FormItemRow",props:L,setup(){const t=I(null);return{formItemColInstRef:t,validate:(...e)=>{const{value:n}=t;if(n)return n.validate(...e)},restoreValidation:()=>{const{value:e}=t;if(e)return e.restoreValidation()}}},render(){return a(G,f(this.$props,K),{default:()=>{const t=f(this.$props,W);return a(B,Object.assign(Object.assign({ref:"formItemColInstRef"},t),{span:24}),this.$slots)}})}});export{J as N};
