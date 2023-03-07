import{_ as C}from"./preload-helper-f651ca80.js";import{u as b,C as x}from"./index-6a5b60dd.js";import{u as S}from"./use-save-confirm-5396f481.js";import{i as w,u as k}from"./use-store-ref-095f705c.js";import{e as L,u as D,s as M}from"./use-editor-setting-f2dacc3d.js";import{k as A,y as v,au as y,ar as V,R as N,bM as I,U as E}from"./Button-5ec267f1.js";import"./Spin-2c3e5ca3.js";import"./throttle-0ce18ecc.js";import"./FormItem-32059e79.js";import"./context-2fd66e76.js";import"./light-50e066bd.js";import"./InputNumber-5d4e37b9.js";import"./Remove-3934817c.js";import"./Add-89af046c.js";import"./Switch-82196aed.js";import"./_common-6222e43f.js";const Y=A({name:"MonacoEditor",props:{innerRef:{type:Object},...L},setup(s){const a=v(),m=v(!1);let r;const{isDark:i}=w(k),{general:{setting:{autocorrect:e}}}=D();y(()=>[e],()=>{});const t=n=>{Promise.all([C(()=>import("./autocorrect-55e57c14.js"),[]),C(()=>import("./editor.main-2236456e.js").then(u=>u.e),["js/editor.main-2236456e.js","js/editor.api-cae69a5e.js","assets/editor-7a4e943b.css","js/preload-helper-f651ca80.js","js/monaco.contribution-c3c8f3e4.js","assets/editor-90fabead.css"])]).then(([u,l])=>{n.onKeyDown(d=>{if(d.code==="Enter"){const c=u.lintFor(n.getValue(),"text");if(c.lines.length){const{l:o,c:p,new:_}=c.lines[0];if(!n.getPosition())return;n.executeEdits("autocorrect",[{range:new l.Range(o,p,o,1/0),text:_}])}}}),n.onDidChangeModelContent(()=>{const d=u.lintFor(n.getValue(),"text");l.editor.setModelMarkers(n.getModel(),"autocorrect",g(d))});function g(d){return d.lines.map(o=>({severity:o.severity===1?l.MarkerSeverity.Warning:l.MarkerSeverity.Info,startLineNumber:o.l,startColumn:o.c,endLineNumber:o.l,endColumn:o.c+o.old.length+1,message:`AutoCorrect: ${o.new}`}))}})};b(),V(()=>{r?.dispose?.()}),N(async()=>{a.value&&(r=await R(a.value,s.text,i),m.value=!0,["onKeyDown","onDidPaste","onDidBlurEditorText"].forEach(n=>{r[n](()=>{const u=r.getValue();s.onChange(u)})}),s.innerRef&&(s.innerRef.value=r),e&&t(r))});let f=I(s.text);return y(()=>s.text,n=>{!f&&n&&(f=n),r&&n!=r.getValue()&&r.setValue(n)}),S(s.unSaveConfirm,()=>f===r.getValue()),()=>E("div",{class:["editor relative overflow-hidden",M.editor],ref:a},[m.value?null:E(x,null,null)])}}),R=async(s,a,m)=>{const{editor:r,KeyCode:i,KeyMod:e}=await C(()=>import("./editor.main-2236456e.js").then(n=>n.e),["js/editor.main-2236456e.js","js/editor.api-cae69a5e.js","assets/editor-7a4e943b.css","js/preload-helper-f651ca80.js","js/monaco.contribution-c3c8f3e4.js","assets/editor-90fabead.css"]),t=r.create(s,{value:a,language:"markdown",automaticLayout:!0,wrappingStrategy:"advanced",minimap:{enabled:!1},theme:m.value?"dark":"light",wordWrap:"on",cursorStyle:"line-thin",formatOnType:!0,quickSuggestions:{strings:!1,other:!1,comments:!1},tabCompletion:"off",parameterHints:{enabled:!1},suggestOnTriggerCharacters:!1,acceptSuggestionOnEnter:"off",wordBasedSuggestions:!1});y(()=>m.value,n=>{t.updateOptions({theme:n?"dark":"light"})}),t.addAction({id:"bold",label:"bold",keybindings:[e.CtrlCmd|i.KeyB],run:n=>(h(t,"**"),null)}),t.addAction({id:"em",label:"em",keybindings:[e.CtrlCmd|i.KeyI],run:n=>(h(t,"*"),null)}),t.addAction({id:"null",label:"null",keybindings:[e.CtrlCmd|i.KeyS,e.Shift|e.Alt|i.KeyF],run:n=>null}),t.addAction({id:"del",label:"del",keybindings:[e.Alt|i.KeyD],run:n=>(h(t,"~~"),null)});const f=[,i.Digit1,i.Digit2,i.Digit3,i.Digit4,i.Digit5];return Array.from({length:5}).fill(null).forEach((n,u)=>{const l=u+1;t.addAction({id:`head-${l}`,label:"heading",keybindings:[e.CtrlCmd|f[l]],run:g=>{const d=g.getSelection();if(!d)return null;const c=d.startLineNumber,o={startLineNumber:c,endLineNumber:c,startColumn:0,endColumn:l+2},p=g.getModel()?.getValueInRange(o);if(p&&p==`${"#".repeat(l)} `){g.executeEdits("",[{range:o,text:""}]);return}g.executeEdits("",[{range:{startLineNumber:c,endLineNumber:c,startColumn:0,endColumn:0},text:`${"#".repeat(l)} `}])}})}),t},h=async(s,a)=>{const{Selection:m}=await C(()=>import("./editor.main-2236456e.js").then(t=>t.e),["js/editor.main-2236456e.js","js/editor.api-cae69a5e.js","assets/editor-7a4e943b.css","js/preload-helper-f651ca80.js","js/monaco.contribution-c3c8f3e4.js","assets/editor-90fabead.css"]),r=s;if(!r)return;const i=a.length,e=r.getSelection();if(e)if(e.startLineNumber==e.endLineNumber&&e.startColumn==e.endColumn){r.executeEdits("",[{range:e,text:a.repeat(2)}]);const t=new m(e.startLineNumber,e.startColumn+i,e.startLineNumber,e.startColumn+i);r.setSelection(t)}else{const t=r.getModel()?.getValueInRange(e);if(!t)return;if(t.startsWith(a)&&t.endsWith(a)){r.executeEdits("",[{range:e,text:`${t.slice(i,t.length-i)}`}]);return}r.executeEdits("",[{range:e,text:`${a}${t}${a}`}])}};export{Y as MonacoEditor};
