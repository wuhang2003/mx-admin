import{D as ne,a1 as re,aD as ie,x as M,aM as q,K as se}from"./app-447ba742.js";import{H as G}from"./rounded-button-ae3194ff.js";import{u as oe}from"./use-react-44edf12c.js";import{T as le}from"./two-col-738d9fb2.js";import{C as ce}from"./index-6a5b60dd.js";import{a as ue,u as fe}from"./use-async-monaco-25cb0755.js";import{k as F,y,U as l,au as R,F as me,R as de,br as pe}from"./Button-5ec267f1.js";import{r as he}from"./index-1b8f17cb.js";import{T as ve}from"./Trash-8506a8d5.js";import{g as ge}from"./use-store-ref-095f705c.js";import{N as _e}from"./Form-4f2beb1e.js";import{N as we}from"./FormItem-32059e79.js";import{N as ye}from"./Select-410a3ac9.js";import{N as Ee,a as B}from"./Tabs-d982cb9c.js";import"./preload-helper-f651ca80.js";import"./Spin-2c3e5ca3.js";import"./Card-73dd4072.js";import"./editor.main-2236456e.js";import"./editor.api-cae69a5e.js";import"./monaco.contribution-c3c8f3e4.js";import"./use-save-confirm-5396f481.js";import"./context-2fd66e76.js";import"./light-50e066bd.js";import"./light-1d805342.js";import"./Tag-62076a6b.js";import"./_common-991711fd.js";import"./Add-89af046c.js";import"./throttle-0ce18ecc.js";import"./light-a2e1a10d.js";const be=F({props:{value:{type:String,required:!0},onChange:{type:Function,required:!0}},setup(r){const f=y(),d=ue(r),o=fe(f,d,r.onChange,{language:"html"});return()=>l("div",{class:"h-full w-full relative"},[l("div",{ref:f,class:"h-full w-full relative"},null),!o.loaded.value&&l(ce,{description:"Monaco 体积较大耐心等待加载完成..."},null)])}});var X={},z={};(function(r){var f=/[|\\{}()[\]^$+*?.]/g,d=Object.prototype.hasOwnProperty,o=function(s,c){return d.apply(s,[c])};r.escapeRegExpChars=function(s){return s?String(s).replace(f,"\\$&"):""};var E={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},T=/[&<>'"]/g;function N(s){return E[s]||s}var S=`var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
`;r.escapeXML=function(s){return s==null?"":String(s).replace(T,N)},r.escapeXML.toString=function(){return Function.prototype.toString.call(this)+`;
`+S},r.shallowCopy=function(s,c){if(c=c||{},s!=null)for(var m in c)o(c,m)&&(m==="__proto__"||m==="constructor"||(s[m]=c[m]));return s},r.shallowCopyFromList=function(s,c,m){if(m=m||[],c=c||{},s!=null)for(var b=0;b<m.length;b++){var _=m[b];if(typeof c[_]<"u"){if(!o(c,_)||_==="__proto__"||_==="constructor")continue;s[_]=c[_]}}return s},r.cache={_data:{},set:function(s,c){this._data[s]=c},get:function(s){return this._data[s]},remove:function(s){delete this._data[s]},reset:function(){this._data={}}},r.hyphenToCamel=function(s){return s.replace(/-[a-z]/g,function(c){return c[1].toUpperCase()})},r.createNullProtoObjWherePossible=function(){return typeof Object.create=="function"?function(){return Object.create(null)}:{__proto__:null}instanceof Object?function(){return{}}:function(){return{__proto__:null}}}()})(z);const Le="ejs",Te="Embedded JavaScript templates",Ne=["template","engine","ejs"],Se="3.1.8",Ce="Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",Oe="Apache-2.0",Ae={ejs:"./bin/cli.js"},Pe="./lib/ejs.js",Fe="ejs.min.js",je="ejs.min.js",De={type:"git",url:"git://github.com/mde/ejs.git"},Ie="https://github.com/mde/ejs/issues",Me="https://github.com/mde/ejs",Re={jake:"^10.8.5"},ke={browserify:"^16.5.1",eslint:"^6.8.0","git-directory-deploy":"^1.5.1",jsdoc:"^3.6.7","lru-cache":"^4.0.1",mocha:"^7.1.1","uglify-js":"^3.3.16"},xe={node:">=0.10.0"},We={test:"mocha"},He={name:Le,description:Te,keywords:Ne,version:Se,author:Ce,license:Oe,bin:Ae,main:Pe,jsdelivr:Fe,unpkg:je,repository:De,bugs:Ie,homepage:Me,dependencies:Re,devDependencies:ke,engines:xe,scripts:We};(function(r){/**
 * @file Embedded JavaScript templating engine. {@link http://ejs.co}
 * @author Matthew Eernisse <mde@fleegix.org>
 * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
 * @project EJS
 * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
 */var f=ne,d=he(),o=z,E=!1,T=He.version,N="<",S=">",s="%",c="locals",m="ejs",b="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",_=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"],Z=_.concat("cache"),x=/^\uFEFF/,D=/^[a-zA-Z_$][0-9a-zA-Z_$]*$/;r.cache=o.cache,r.fileLoader=f.readFileSync,r.localsName=c,r.promiseImpl=new Function("return this;")().Promise,r.resolveInclude=function(t,a,e){var n=d.dirname,i=d.extname,u=d.resolve,h=u(e?a:n(a),t),w=i(t);return w||(h+=".ejs"),h};function W(t,a){var e;if(a.some(function(n){return e=r.resolveInclude(t,n,!0),f.existsSync(e)}))return e}function K(t,a){var e,n,i=a.views,u=/^[A-Za-z]+:\\|^\//.exec(t);if(u&&u.length)t=t.replace(/^\/*/,""),Array.isArray(a.root)?e=W(t,a.root):e=r.resolveInclude(t,a.root||"/",!0);else if(a.filename&&(n=r.resolveInclude(t,a.filename),f.existsSync(n)&&(e=n)),!e&&Array.isArray(i)&&(e=W(t,i)),!e&&typeof a.includer!="function")throw new Error('Could not find the include file "'+a.escapeFunction(t)+'"');return e}function C(t,a){var e,n=t.filename,i=arguments.length>1;if(t.cache){if(!n)throw new Error("cache option requires a filename");if(e=r.cache.get(n),e)return e;i||(a=H(n).toString().replace(x,""))}else if(!i){if(!n)throw new Error("Internal EJS error: no file name or template provided");a=H(n).toString().replace(x,"")}return e=r.compile(a,t),t.cache&&r.cache.set(n,e),e}function Q(t,a,e){var n;if(e){try{n=C(t)(a)}catch(i){return e(i)}e(null,n)}else{if(typeof r.promiseImpl=="function")return new r.promiseImpl(function(i,u){try{n=C(t)(a),i(n)}catch(h){u(h)}});throw new Error("Please provide a callback function")}}function H(t){return r.fileLoader(t)}function Y(t,a){var e=o.shallowCopy(o.createNullProtoObjWherePossible(),a);if(e.filename=K(t,e),typeof a.includer=="function"){var n=a.includer(t,e.filename);if(n&&(n.filename&&(e.filename=n.filename),n.template))return C(e,n.template)}return C(e)}function U(t,a,e,n,i){var u=a.split(`
`),h=Math.max(n-3,0),w=Math.min(u.length,n+3),g=i(e),L=u.slice(h,w).map(function(O,j){var A=j+h+1;return(A==n?" >> ":"    ")+A+"| "+O}).join(`
`);throw t.path=g,t.message=(g||"ejs")+":"+n+`
`+L+`

`+t.message,t}function $(t){return t.replace(/;(\s*$)/,"$1")}r.compile=function(a,e){var n;return e&&e.scope&&(E||(console.warn("`scope` option is deprecated and will be removed in EJS 3"),E=!0),e.context||(e.context=e.scope),delete e.scope),n=new p(a,e),n.compile()},r.render=function(t,a,e){var n=a||o.createNullProtoObjWherePossible(),i=e||o.createNullProtoObjWherePossible();return arguments.length==2&&o.shallowCopyFromList(i,n,_),C(i,t)(n)},r.renderFile=function(){var t=Array.prototype.slice.call(arguments),a=t.shift(),e,n={filename:a},i,u;return typeof arguments[arguments.length-1]=="function"&&(e=t.pop()),t.length?(i=t.shift(),t.length?o.shallowCopy(n,t.pop()):(i.settings&&(i.settings.views&&(n.views=i.settings.views),i.settings["view cache"]&&(n.cache=!0),u=i.settings["view options"],u&&o.shallowCopy(n,u)),o.shallowCopyFromList(n,i,Z)),n.filename=a):i=o.createNullProtoObjWherePossible(),Q(n,i,e)},r.Template=p,r.clearCache=function(){r.cache.reset()};function p(t,a){a=a||o.createNullProtoObjWherePossible();var e=o.createNullProtoObjWherePossible();this.templateText=t,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",e.client=a.client||!1,e.escapeFunction=a.escape||a.escapeFunction||o.escapeXML,e.compileDebug=a.compileDebug!==!1,e.debug=!!a.debug,e.filename=a.filename,e.openDelimiter=a.openDelimiter||r.openDelimiter||N,e.closeDelimiter=a.closeDelimiter||r.closeDelimiter||S,e.delimiter=a.delimiter||r.delimiter||s,e.strict=a.strict||!1,e.context=a.context,e.cache=a.cache||!1,e.rmWhitespace=a.rmWhitespace,e.root=a.root,e.includer=a.includer,e.outputFunctionName=a.outputFunctionName,e.localsName=a.localsName||r.localsName||c,e.views=a.views,e.async=a.async,e.destructuredLocals=a.destructuredLocals,e.legacyInclude=typeof a.legacyInclude<"u"?!!a.legacyInclude:!0,e.strict?e._with=!1:e._with=typeof a._with<"u"?a._with:!0,this.opts=e,this.regex=this.createRegex()}p.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"},p.prototype={createRegex:function(){var t=b,a=o.escapeRegExpChars(this.opts.delimiter),e=o.escapeRegExpChars(this.opts.openDelimiter),n=o.escapeRegExpChars(this.opts.closeDelimiter);return t=t.replace(/%/g,a).replace(/</g,e).replace(/>/g,n),new RegExp(t)},compile:function(){var t,a,e=this.opts,n="",i="",u=e.escapeFunction,h,w=e.filename?JSON.stringify(e.filename):"undefined";if(!this.source){if(this.generateSource(),n+=`  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
`,e.outputFunctionName){if(!D.test(e.outputFunctionName))throw new Error("outputFunctionName is not a valid JS identifier.");n+="  var "+e.outputFunctionName+` = __append;
`}if(e.localsName&&!D.test(e.localsName))throw new Error("localsName is not a valid JS identifier.");if(e.destructuredLocals&&e.destructuredLocals.length){for(var g="  var __locals = ("+e.localsName+` || {}),
`,L=0;L<e.destructuredLocals.length;L++){var O=e.destructuredLocals[L];if(!D.test(O))throw new Error("destructuredLocals["+L+"] is not a valid JS identifier.");L>0&&(g+=`,
  `),g+=O+" = __locals."+O}n+=g+`;
`}e._with!==!1&&(n+="  with ("+e.localsName+` || {}) {
`,i+=`  }
`),i+=`  return __output;
`,this.source=n+this.source+i}e.compileDebug?t=`var __line = 1
  , __lines = `+JSON.stringify(this.templateText)+`
  , __filename = `+w+`;
try {
`+this.source+`} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}
`:t=this.source,e.client&&(t="escapeFn = escapeFn || "+u.toString()+`;
`+t,e.compileDebug&&(t="rethrow = rethrow || "+U.toString()+`;
`+t)),e.strict&&(t=`"use strict";
`+t),e.debug&&console.log(t),e.compileDebug&&e.filename&&(t=t+`
//# sourceURL=`+w+`
`);try{if(e.async)try{h=new Function("return (async function(){}).constructor;")()}catch(v){throw v instanceof SyntaxError?new Error("This environment does not support async/await"):v}else h=Function;a=new h(e.localsName+", escapeFn, include, rethrow",t)}catch(v){throw v instanceof SyntaxError&&(e.filename&&(v.message+=" in "+e.filename),v.message+=` while compiling ejs

`,v.message+=`If the above error is not helpful, you may want to try EJS-Lint:
`,v.message+="https://github.com/RyanZim/EJS-Lint",e.async||(v.message+=`
`,v.message+="Or, if you meant to create an async function, pass `async: true` as an option.")),v}var j=e.client?a:function(J){var te=function(ae,V){var I=o.shallowCopy(o.createNullProtoObjWherePossible(),J);return V&&(I=o.shallowCopy(I,V)),Y(ae,e)(I)};return a.apply(e.context,[J||o.createNullProtoObjWherePossible(),u,te,U])};if(e.filename&&typeof Object.defineProperty=="function"){var A=e.filename,ee=d.basename(A,d.extname(A));try{Object.defineProperty(j,"name",{value:ee,writable:!1,enumerable:!1,configurable:!0})}catch{}}return j},generateSource:function(){var t=this.opts;t.rmWhitespace&&(this.templateText=this.templateText.replace(/[\r\n]+/g,`
`).replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var a=this,e=this.parseTemplateText(),n=this.opts.delimiter,i=this.opts.openDelimiter,u=this.opts.closeDelimiter;e&&e.length&&e.forEach(function(h,w){var g;if(h.indexOf(i+n)===0&&h.indexOf(i+n+n)!==0&&(g=e[w+2],!(g==n+u||g=="-"+n+u||g=="_"+n+u)))throw new Error('Could not find matching close tag for "'+h+'".');a.scanLine(h)})},parseTemplateText:function(){for(var t=this.templateText,a=this.regex,e=a.exec(t),n=[],i;e;)i=e.index,i!==0&&(n.push(t.substring(0,i)),t=t.slice(i)),n.push(e[0]),t=t.slice(e[0].length),e=a.exec(t);return t&&n.push(t),n},_addOutput:function(t){if(this.truncate&&(t=t.replace(/^(?:\r\n|\r|\n)/,""),this.truncate=!1),!t)return t;t=t.replace(/\\/g,"\\\\"),t=t.replace(/\n/g,"\\n"),t=t.replace(/\r/g,"\\r"),t=t.replace(/"/g,'\\"'),this.source+='    ; __append("'+t+`")
`},scanLine:function(t){var a=this,e=this.opts.delimiter,n=this.opts.openDelimiter,i=this.opts.closeDelimiter,u=0;switch(u=t.split(`
`).length-1,t){case n+e:case n+e+"_":this.mode=p.modes.EVAL;break;case n+e+"=":this.mode=p.modes.ESCAPED;break;case n+e+"-":this.mode=p.modes.RAW;break;case n+e+"#":this.mode=p.modes.COMMENT;break;case n+e+e:this.mode=p.modes.LITERAL,this.source+='    ; __append("'+t.replace(n+e+e,n+e)+`")
`;break;case e+e+i:this.mode=p.modes.LITERAL,this.source+='    ; __append("'+t.replace(e+e+i,e+i)+`")
`;break;case e+i:case"-"+e+i:case"_"+e+i:this.mode==p.modes.LITERAL&&this._addOutput(t),this.mode=null,this.truncate=t.indexOf("-")===0||t.indexOf("_")===0;break;default:if(this.mode){switch(this.mode){case p.modes.EVAL:case p.modes.ESCAPED:case p.modes.RAW:t.lastIndexOf("//")>t.lastIndexOf(`
`)&&(t+=`
`)}switch(this.mode){case p.modes.EVAL:this.source+="    ; "+t+`
`;break;case p.modes.ESCAPED:this.source+="    ; __append(escapeFn("+$(t)+`))
`;break;case p.modes.RAW:this.source+="    ; __append("+$(t)+`)
`;break;case p.modes.COMMENT:break;case p.modes.LITERAL:this._addOutput(t);break}}else this._addOutput(t)}a.opts.compileDebug&&u&&(this.currentLine+=u,this.source+="    ; __line = "+this.currentLine+`
`)}},r.escapeXML=o.escapeXML,r.__express=r.renderFile,r.VERSION=T,r.name=m,typeof window<"u"&&(window.ejs=r)})(X);const Ue=F({props:{template:{type:String,required:!0},data:{type:Object,required:!0},onError:{type:Function}},setup(r){const f=y("");return R(()=>r.template,async()=>{f.value=await X.render(r.template,r.data,{async:!0}).catch(d=>(r.onError?.(d),console.error(d),f.value))},{immediate:!0}),()=>l("div",{class:"h-full overflow-auto  bg-white"},[l("div",{innerHTML:f.value},null)])}});let P;(function(r){r.Owner="owner",r.Guest="guest"})(P||(P={}));let k;(function(r){r.Newsletter="newsletter"})(k||(k={}));const $e=F({setup(){const r=y(""),f=y(""),d=y(P.Guest),o=y(null),{setHeaderButtons:E}=re(),T=async()=>{await M.api.options.email.template.put({params:{type:d.value},data:{source:f.value}}),await s()},N=ge(),S=()=>{N.warning({title:"确认重置？",content:"重置后，模板将被恢复为默认模板",async onNegativeClick(){await M.api.options.email.template.delete({params:{type:d.value}}),await s()},onPositiveClick(){},negativeText:"嗯",positiveText:"达咩"})};oe(()=>(E(l(me,null,[l(G,{icon:l(ie,null,null),name:"提交",onClick:T,variant:"success"},null),l(G,{icon:l(ve,null,null),name:"重置自定义模板",onClick:S,variant:"error"},null)])),()=>{E(null)})),de(()=>{s()});const s=async()=>{const{template:m,props:b}=await M.api.options.email.template.get({params:{type:d.value},transform:!1});r.value=m,f.value=m,o.value=b};R(()=>d.value,s);const c=y(!1);return R(()=>f.value,()=>{c.value=!1}),()=>l("div",null,[l(_e,{class:"w-[300px]"},{default:()=>[l(we,{label:"模板类型",labelPlacement:"left"},{default:()=>[l(ye,{value:d.value,onUpdateValue:m=>d.value=m,options:[{label:"回复邮件（访客）",value:P.Guest},{label:"回复邮件（博主）",value:P.Owner},{label:"订阅邮件",value:k.Newsletter}]},null)]})]}),l("div",{class:"pb-4"},null),l(le,null,{default:()=>[l(q,{span:18,class:c.value&&"outline outline-[3px] outline-red-300"},{default:()=>[l(be,{onChange:m=>{f.value=m},value:r.value},null)]}),l(q,{span:18,class:"relative h-[calc(100vh-15rem)] "},{default:()=>[l(Ue,{data:o.value,template:f.value,onError:m=>{c.value=!0}},null)]})]})])}}),Je=F({setup(){return()=>l("div",null,[pe("即将推出")])}}),wt=F({setup(){const r=y("1");return()=>l(se,null,{default:()=>[l(Ee,{value:r.value,size:"medium",onUpdateValue:f=>{r.value=f}},{default:()=>[l(B,{name:"1",tab:"邮件模板"},{default:()=>[l($e,null,null)]}),l(B,{name:"2",tab:"预览 Markdown 模板"},{default:()=>[l(Je,null,null)]})]})]})}});export{wt as default};
