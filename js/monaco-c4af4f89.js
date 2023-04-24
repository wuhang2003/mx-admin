import{d as b,s as y,e as w,ax as S,i as L,x as k,g as D,z as M,w as E,h as v,_ as p}from"./index-16475ff3.js";import{u as A,C as V}from"./index-e2819901.js";import{u as N}from"./use-save-confirm-047676a4.js";import{e as I,a as T,s as K}from"./toggle-fd814910.js";import"./use-react-21178bcb.js";import"./throttle-db193c59.js";import"./FormItem-75b86eaf.js";import"./Form-fca70984.js";import"./InputNumber-23d08215.js";import"./Remove-819d5b0b.js";import"./Add-35d80e3d.js";import"./Switch-ae9fbc5a.js";import"./Select-a04046d1.js";import"./Tag-1a092e84.js";const Y=b({name:"MonacoEditor",props:{innerRef:{type:Object},...I},setup(u){const a=y(),m=y(!1);let n;const{isDark:r}=w(S),{general:e}=T(),t=L(()=>e.setting.autocorrect),C=i=>{Promise.all([p(()=>import("./autocorrect-55e57c14.js"),[]),p(()=>import("./use-async-monaco-d6185a3b.js").then(l=>l.e),["js/use-async-monaco-d6185a3b.js","js/index-16475ff3.js","assets/index-f6451738.css","js/index-e2819901.js","js/use-save-confirm-047676a4.js","assets/use-async-monaco-726e6ad3.css"])]).then(([l,c])=>{i.onKeyDown(d=>{if(d.code==="Enter"){const g=l.lintFor(i.getValue(),"monaco.md");if(g.lines.length){const{l:o,c:_,new:x}=g.lines[0];if(!i.getPosition())return;i.executeEdits("autocorrect",[{range:new c.Range(o,_,o,1/0),text:x}])}}}),i.onDidChangeModelContent(()=>{const d=l.lintFor(i.getValue(),"monaco.md");c.editor.setModelMarkers(i.getModel(),"autocorrect",f(d))});function f(d){return d.lines.map(o=>({severity:o.severity===1?c.MarkerSeverity.Warning:c.MarkerSeverity.Info,startLineNumber:o.l,startColumn:o.c,endLineNumber:o.l,endColumn:o.c+o.old.length+1,message:`AutoCorrect: ${o.new}`}))}})};A(),k(()=>{n?.dispose?.()}),D(async()=>{a.value&&(n=await O(a.value,u.text,r),m.value=!0,["onKeyDown","onDidPaste","onDidBlurEditorText"].forEach(i=>{n[i](()=>{const l=n.getValue();u.onChange(l)})}),u.innerRef&&(u.innerRef.value=n),t.value&&C(n))});let s=M(u.text);return E(()=>u.text,i=>{!s&&i&&(s=i),n&&i!=n.getValue()&&n.setValue(i)}),N(u.unSaveConfirm,()=>s===n.getValue()),()=>v("div",{class:["editor relative overflow-hidden",K.editor],ref:a},[m.value?null:v(V,null,null)])}}),O=async(u,a,m)=>{const{editor:n,KeyCode:r,KeyMod:e}=await p(()=>import("./use-async-monaco-d6185a3b.js").then(s=>s.e),["js/use-async-monaco-d6185a3b.js","js/index-16475ff3.js","assets/index-f6451738.css","js/index-e2819901.js","js/use-save-confirm-047676a4.js","assets/use-async-monaco-726e6ad3.css"]),t=n.create(u,{value:a,language:"markdown",automaticLayout:!0,wrappingStrategy:"advanced",minimap:{enabled:!1},theme:m.value?"dark":"light",wordWrap:"on",cursorStyle:"line-thin",formatOnType:!0,quickSuggestions:{strings:!1,other:!1,comments:!1},tabCompletion:"off",parameterHints:{enabled:!1},suggestOnTriggerCharacters:!1,acceptSuggestionOnEnter:"off",wordBasedSuggestions:!1});E(()=>m.value,s=>{t.updateOptions({theme:s?"dark":"light"})}),t.addAction({id:"bold",label:"bold",keybindings:[e.CtrlCmd|r.KeyB],run:s=>(h(t,"**"),null)}),t.addAction({id:"em",label:"em",keybindings:[e.CtrlCmd|r.KeyI],run:s=>(h(t,"*"),null)}),t.addAction({id:"null",label:"null",keybindings:[e.CtrlCmd|r.KeyS,e.Shift|e.Alt|r.KeyF],run:s=>null}),t.addAction({id:"del",label:"del",keybindings:[e.Alt|r.KeyD],run:s=>(h(t,"~~"),null)});const C=[,r.Digit1,r.Digit2,r.Digit3,r.Digit4,r.Digit5];return Array.from({length:5}).fill(null).forEach((s,i)=>{const l=i+1;t.addAction({id:`head-${l}`,label:"heading",keybindings:[e.CtrlCmd|C[l]],run:c=>{const f=c.getSelection();if(!f)return null;const d=f.startLineNumber,g={startLineNumber:d,endLineNumber:d,startColumn:0,endColumn:l+2},o=c.getModel()?.getValueInRange(g);if(o&&o==`${"#".repeat(l)} `){c.executeEdits("",[{range:g,text:""}]);return}c.executeEdits("",[{range:{startLineNumber:d,endLineNumber:d,startColumn:0,endColumn:0},text:`${"#".repeat(l)} `}])}})}),t},h=async(u,a)=>{const{Selection:m}=await p(()=>import("./use-async-monaco-d6185a3b.js").then(t=>t.e),["js/use-async-monaco-d6185a3b.js","js/index-16475ff3.js","assets/index-f6451738.css","js/index-e2819901.js","js/use-save-confirm-047676a4.js","assets/use-async-monaco-726e6ad3.css"]),n=u;if(!n)return;const r=a.length,e=n.getSelection();if(e)if(e.startLineNumber==e.endLineNumber&&e.startColumn==e.endColumn){n.executeEdits("",[{range:e,text:a.repeat(2)}]);const t=new m(e.startLineNumber,e.startColumn+r,e.startLineNumber,e.startColumn+r);n.setSelection(t)}else{const t=n.getModel()?.getValueInRange(e);if(!t)return;if(t.startsWith(a)&&t.endsWith(a)){n.executeEdits("",[{range:e,text:`${t.slice(r,t.length-r)}`}]);return}n.executeEdits("",[{range:e,text:`${a}${t}${a}`}])}};export{Y as MonacoEditor};
