import{r as B,a as t,C as F,i as j,A as U}from"./class-8f014a09.js";import{dt as b,fl as $,d,s as y,g as D,w as H,eX as M,a6 as O,ai as S,R as L,h as N}from"./index-a5dd80c2.js";import"./index-90fc4e5e.js";import"./confetti-e4552d79.js";import"./last-862de5a8.js";var _,w=B;_=w.createRoot,w.hydrateRoot;function T(a,e,u){const c=b(e);if(typeof e=="object"&&!$(e)&&!c)throw new Error("props must be reactive");return d({props:{reactRef:{type:Object,required:!1},onReactMount:{type:Function,required:!1},onReactUnmount:{type:Function,required:!1}},emits:["react-mount","react-unmount"],setup(n,s){var m;const i=y(null),p=n.reactRef?b(n.reactRef)?n.reactRef:(m=n.reactRef)===null||m===void 0?void 0:m.call(n):void 0;let o=null;const{emit:C,expose:q}=s;return q({containerRef:i}),D(()=>{var h,v,E;if(!i.value)return;const I=t.forwardRef((A,X)=>{const[g,V]=t.useState(A);t.useEffect(()=>{var r;return C("react-mount"),(r=n.onReactMount)===null||r===void 0?void 0:r.call(n)},[]),t.useEffect(()=>(C("react-unmount"),n.onReactUnmount),[]),t.useEffect(()=>{if(e)return H(()=>c?e.value:e,f=>{V(Object.assign({},f))},{deep:!0})},[]);const R=t.useRef(null);t.useEffect(()=>{if(s.slots.default&&R.current){const r=s.slots.default(),f=M(d({setup(){return()=>O("div",r)}}));return f.mount(R.current),()=>{f.unmount()}}},[]);let l=[t.useMemo(()=>{if(s.slots.children){const r=s.slots.children();return t.createElement(W(r))}return null},[]),g.children].filter(Boolean);return l=l.length==0?void 0:l.length===1?l[0]:l,t.createElement(t.Fragment,null,[t.createElement(a,b(p)?Object.assign(Object.assign({},g),{ref(r){p.value=r}}):g,l),t.createElement("div",{ref:R})])});o=_(i.value),c?o.render(t.createElement(I,Object.assign({},e.value),(v=(h=e.value)===null||h===void 0?void 0:h.children)!==null&&v!==void 0?v:u)):o.render(t.createElement(I,Object.assign({},e),(E=e?.children)!==null&&E!==void 0?E:u))}),S(()=>{o&&o.unmount()}),()=>O("div",{ref:i})}})}const W=a=>()=>{const e=t.useRef(null);return t.useEffect(()=>{if(!e.current||!a)return;const u=M(d({setup(){return()=>a}}));return u.mount(e.current),()=>{u.unmount()}},[]),t.createElement("div",{ref:e})},Q=d({setup(){const a=y("");L.api.options.thirdPartyServiceIntegration.get().then(({data:c})=>{const{xLogSiteId:n}=c;a.value=n,F.setSiteId(n)});const e=T(U),u=()=>j;return S(()=>{j.value=void 0}),()=>a.value?N(e,{reactRef:u},null):null}});export{Q as CrossBellConnectorIndirector};
