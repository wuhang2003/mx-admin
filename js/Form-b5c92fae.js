import{X as g,aA as w,V as j,aF as I,d as v,Z as M,a2 as x,eN as S,s as O,aE as b,a7 as P,aH as y}from"./index-d87a4bf9.js";const B=g("form",[w("inline",`
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `,[g("form-item",{width:"auto",marginRight:"18px"},[j("&:last-child",{marginRight:0})])])]),F=I("n-form"),C=I("n-form-item-insts");var L=globalThis&&globalThis.__awaiter||function(n,m,o,s){function u(r){return r instanceof o?r:new o(function(a){a(r)})}return new(o||(o=Promise))(function(r,a){function h(t){try{i(s.next(t))}catch(c){a(c)}}function e(t){try{i(s.throw(t))}catch(c){a(c)}}function i(t){t.done?r(t.value):u(t.value).then(h,e)}i((s=s.apply(n,m||[])).next())})};const R=Object.assign(Object.assign({},x.props),{inline:Boolean,labelWidth:[Number,String],labelAlign:String,labelPlacement:{type:String,default:"top"},model:{type:Object,default:()=>{}},rules:Object,disabled:Boolean,size:String,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:!0},onSubmit:{type:Function,default:n=>n.preventDefault()},showLabel:{type:Boolean,default:void 0},validateMessages:Object}),N=v({name:"Form",props:R,setup(n){const{mergedClsPrefixRef:m}=M(n);x("Form","-form",B,S,n,m);const o={},s=O(void 0),u=e=>{const i=s.value;(i===void 0||e>=i)&&(s.value=e)};function r(e,i=()=>!0){return L(this,void 0,void 0,function*(){return yield new Promise((t,c)=>{const p=[];for(const d of y(o)){const f=o[d];for(const l of f)l.path&&p.push(l.internalValidate(null,i))}Promise.all(p).then(d=>{if(d.some(f=>!f.valid)){const f=d.filter(l=>l.errors).map(l=>l.errors);e&&e(f),c(f)}else e&&e(),t()})})})}function a(){for(const e of y(o)){const i=o[e];for(const t of i)t.restoreValidation()}}return b(F,{props:n,maxChildLabelWidthRef:s,deriveMaxChildLabelWidth:u}),b(C,{formItems:o}),Object.assign({validate:r,restoreValidation:a},{mergedClsPrefix:m})},render(){const{mergedClsPrefix:n}=this;return P("form",{class:[`${n}-form`,this.inline&&`${n}-form--inline`],onSubmit:this.onSubmit},this.$slots)}});export{N,C as a,F as f};
