import{_ as e,d as D,s as R,w as f,g as A,R as I,h as c,a7 as L}from"./index-14aac0f5.js";import{u as P}from"./use-async-monaco-8fee3c88.js";class V{created;id}const M=`
export default async function handler(ctx: Context) {
  return 'pong';
}
`.trimStart();var T=(t=>(t.JSON="json",t.JSON5="json5",t.Function="function",t.Text="text",t.YAML="yaml",t))(T||{}),g=(t=>(t.json="json",t.json5="plaintext",t.function="typescript",t.text="markdown",t.yaml="yaml",t))(g||{});class x extends V{type="json";private=!1;raw="{}";name="";reference="root";comment;metatype;schema;enable;method;secret;builtIn=!1}var a;(t=>{t.libSource=`
 `.trim(),t.libUri="ts:filename/extends.d.ts"})(a||(a={}));const v=Object.freeze(Object.defineProperty({__proto__:null,get globalTypeDeclare(){return a}},Symbol.toStringTag,{value:"Module"})),h=Object.assign({"./node/assert.d.ts":()=>e(()=>import("./assert.d-816ee306.js"),[]).then(t=>t.default),"./node/async_hooks.d.ts":()=>e(()=>import("./async_hooks.d-7cb7341b.js"),[]).then(t=>t.default),"./node/base.d.ts":()=>e(()=>import("./base.d-bc250713.js"),[]).then(t=>t.default),"./node/buffer.d.ts":()=>e(()=>import("./buffer.d-a0964df9.js"),[]).then(t=>t.default),"./node/child_process.d.ts":()=>e(()=>import("./child_process.d-48996fe2.js"),[]).then(t=>t.default),"./node/cluster.d.ts":()=>e(()=>import("./cluster.d-9d5fa34e.js"),[]).then(t=>t.default),"./node/console.d.ts":()=>e(()=>import("./console.d-8295a614.js"),[]).then(t=>t.default),"./node/constants.d.ts":()=>e(()=>import("./constants.d-9bdd93f7.js"),[]).then(t=>t.default),"./node/crypto.d.ts":()=>e(()=>import("./crypto.d-0451419e.js"),[]).then(t=>t.default),"./node/dgram.d.ts":()=>e(()=>import("./dgram.d-dde48ce1.js"),[]).then(t=>t.default),"./node/dns.d.ts":()=>e(()=>import("./dns.d-7e7b3ac8.js"),[]).then(t=>t.default),"./node/domain.d.ts":()=>e(()=>import("./domain.d-d86e0954.js"),[]).then(t=>t.default),"./node/events.d.ts":()=>e(()=>import("./events.d-137bf34e.js"),[]).then(t=>t.default),"./node/fs.d.ts":()=>e(()=>import("./fs.d-27052f5f.js"),[]).then(t=>t.default),"./node/globals.d.ts":()=>e(()=>import("./globals.d-d04ea7e2.js"),[]).then(t=>t.default),"./node/globals.global.d.ts":()=>e(()=>import("./globals.global.d-f08e2e04.js"),[]).then(t=>t.default),"./node/http.d.ts":()=>e(()=>import("./http.d-c8e1f8c9.js"),[]).then(t=>t.default),"./node/http2.d.ts":()=>e(()=>import("./http2.d-cf3ff838.js"),[]).then(t=>t.default),"./node/https.d.ts":()=>e(()=>import("./https.d-89ee8822.js"),[]).then(t=>t.default),"./node/index.d.ts":()=>e(()=>import("./index.d-c41928d4.js"),[]).then(t=>t.default),"./node/inspector.d.ts":()=>e(()=>import("./inspector.d-d1694f9f.js"),[]).then(t=>t.default),"./node/module.d.ts":()=>e(()=>import("./module.d-36f7934e.js"),[]).then(t=>t.default),"./node/net.d.ts":()=>e(()=>import("./net.d-0e60e687.js"),[]).then(t=>t.default),"./node/os.d.ts":()=>e(()=>import("./os.d-d5f5bb6f.js"),[]).then(t=>t.default),"./node/path.d.ts":()=>e(()=>import("./path.d-b95b5191.js"),[]).then(t=>t.default),"./node/perf_hooks.d.ts":()=>e(()=>import("./perf_hooks.d-0894b64e.js"),[]).then(t=>t.default),"./node/process.d.ts":()=>e(()=>import("./process.d-1591587e.js"),[]).then(t=>t.default),"./node/punycode.d.ts":()=>e(()=>import("./punycode.d-e8c34ea8.js"),[]).then(t=>t.default),"./node/querystring.d.ts":()=>e(()=>import("./querystring.d-0d69e15a.js"),[]).then(t=>t.default),"./node/readline.d.ts":()=>e(()=>import("./readline.d-46c698e8.js"),[]).then(t=>t.default),"./node/repl.d.ts":()=>e(()=>import("./repl.d-a09b7088.js"),[]).then(t=>t.default),"./node/stream.d.ts":()=>e(()=>import("./stream.d-c7547134.js"),[]).then(t=>t.default),"./node/string_decoder.d.ts":()=>e(()=>import("./string_decoder.d-d515e9c1.js"),[]).then(t=>t.default),"./node/timers.d.ts":()=>e(()=>import("./timers.d-22801cd8.js"),[]).then(t=>t.default),"./node/tls.d.ts":()=>e(()=>import("./tls.d-5000a910.js"),[]).then(t=>t.default),"./node/trace_events.d.ts":()=>e(()=>import("./trace_events.d-d90d302f.js"),[]).then(t=>t.default),"./node/tty.d.ts":()=>e(()=>import("./tty.d-e0290f3b.js"),[]).then(t=>t.default),"./node/url.d.ts":()=>e(()=>import("./url.d-5598d5c4.js"),[]).then(t=>t.default),"./node/util.d.ts":()=>e(()=>import("./util.d-c0554330.js"),[]).then(t=>t.default),"./node/v8.d.ts":()=>e(()=>import("./v8.d-73df5993.js"),[]).then(t=>t.default),"./node/vm.d.ts":()=>e(()=>import("./vm.d-e6f95686.js"),[]).then(t=>t.default),"./node/wasi.d.ts":()=>e(()=>import("./wasi.d-3e95f872.js"),[]).then(t=>t.default),"./node/worker_threads.d.ts":()=>e(()=>import("./worker_threads.d-f596d3b8.js"),[]).then(t=>t.default),"./node/zlib.d.ts":()=>e(()=>import("./zlib.d-a479ea91.js"),[]).then(t=>t.default)}),l={};for(const t in h){const s=await h[t]();l[`ts:node/${t.split("/").pop()}`]=s}const S=D({props:{value:{type:Object,required:!0},onSave:{type:Function,required:!1},language:{type:String,default:"typescript"}},setup(t,{expose:s}){const p=R(),n=P(p,t.value,d=>{t.value.value=d},{language:t.language});s(n),f(()=>[n.loaded.value,t.language],([d,_])=>{d&&e(()=>import("./use-async-monaco-8fee3c88.js").then(o=>o.e),["js/use-async-monaco-8fee3c88.js","js/index-14aac0f5.js","assets/index-0d4cc1b5.css","js/index-162a104c.js","js/use-save-confirm-e3a50392.js","assets/use-async-monaco-ef518337.css"]).then(o=>{const r=n.editor.getModel();r&&o.editor.setModelLanguage(r,_)})}),A(()=>{e(()=>import("./use-async-monaco-8fee3c88.js").then(d=>d.e),["js/use-async-monaco-8fee3c88.js","js/index-14aac0f5.js","assets/index-0d4cc1b5.css","js/index-162a104c.js","js/use-save-confirm-e3a50392.js","assets/use-async-monaco-ef518337.css"]).then(d=>{const _=d.languages.typescript.typescriptDefaults.getCompilerOptions();_.target=d.languages.typescript.ScriptTarget.ESNext,_.allowNonTsExtensions=!0,_.moduleResolution=d.languages.typescript.ModuleResolutionKind.NodeJs,_.esModuleInterop=!0,d.languages.typescript.typescriptDefaults.setCompilerOptions(_);const o="ts:filename/global.d.ts";d.editor.getModel(d.Uri.parse(o))||I.api.fn.types.get().then(r=>{const i=r;d.languages.typescript.typescriptDefaults.addExtraLib(i,o),d.editor.createModel(i,"typescript",d.Uri.parse(o))}),Object.keys(v).forEach(r=>{const i=v[r],{libSource:E,libUri:u}=i,O=d.Uri.parse(u);d.editor.getModel(O)||(d.languages.typescript.typescriptDefaults.addExtraLib(E,u),d.editor.createModel(E,"typescript",d.Uri.parse(u)))});for(const r in l){const i=l[r];d.languages.typescript.typescriptDefaults.addExtraLib(i,r),d.editor.createModel(i,"typescript",d.Uri.parse(r))}})});const m=f(()=>n.loaded.value,d=>{m(),e(()=>import("./use-async-monaco-8fee3c88.js").then(_=>_.e),["js/use-async-monaco-8fee3c88.js","js/index-14aac0f5.js","assets/index-0d4cc1b5.css","js/index-162a104c.js","js/use-save-confirm-e3a50392.js","assets/use-async-monaco-ef518337.css"]).then(_=>{n.editor.addCommand(_.KeyMod.CtrlCmd|_.KeyCode.KeyS,()=>{t.onSave?.()})})});return()=>c("div",{class:"h-full relative w-full"},[c("div",{class:"relative h-full w-full",ref:p},null),L(n.Snip)])}});export{S as F,x as S,T as a,g as b,M as d};
