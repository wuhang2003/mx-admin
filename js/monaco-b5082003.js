import{d as b,s as y,e as w,ax as S,i as L,x as k,g as D,z as M,w as E,h as v,_ as p}from"./index-2683cc36.js";import{u as A,C as V}from"./index-381af8f0.js";import{u as N}from"./use-save-confirm-c4873082.js";import{e as I,a as T,s as K}from"./toggle-f76b746b.js";import"./use-react-bb6743d1.js";import"./throttle-c6b3f453.js";import"./FormItem-e9a33592.js";import"./Form-ec1ee89c.js";import"./InputNumber-38bb8ff8.js";import"./Remove-c6549fe2.js";import"./Add-a97444ff.js";import"./Switch-f2ed7702.js";import"./Select-ecaf717c.js";import"./Tag-730ab9fc.js";const Y=b({name:"MonacoEditor",props:{innerRef:{type:Object},...I},setup(u){const a=y(),m=y(!1);let n;const{isDark:r}=w(S),{general:e}=T(),t=L(()=>e.setting.autocorrect),C=i=>{Promise.all([p(()=>import("./autocorrect-55e57c14.js"),[]),p(()=>import("./use-async-monaco-f1b46e16.js").then(l=>l.e),["js/use-async-monaco-f1b46e16.js","js/index-2683cc36.js","assets/index-f6451738.css","js/index-381af8f0.js","js/use-save-confirm-c4873082.js","assets/use-async-monaco-726e6ad3.css"])]).then(([l,c])=>{i.onKeyDown(d=>{if(d.code==="Enter"){const g=l.lintFor(i.getValue(),"monaco.md");if(g.lines.length){const{l:o,c:_,new:x}=g.lines[0];if(!i.getPosition())return;i.executeEdits("autocorrect",[{range:new c.Range(o,_,o,1/0),text:x}])}}}),i.onDidChangeModelContent(()=>{const d=l.lintFor(i.getValue(),"monaco.md");c.editor.setModelMarkers(i.getModel(),"autocorrect",f(d))});function f(d){return d.lines.map(o=>({severity:o.severity===1?c.MarkerSeverity.Warning:c.MarkerSeverity.Info,startLineNumber:o.l,startColumn:o.c,endLineNumber:o.l,endColumn:o.c+o.old.length+1,message:`AutoCorrect: ${o.new}`}))}})};A(),k(()=>{n?.dispose?.()}),D(async()=>{a.value&&(n=await O(a.value,u.text,r),m.value=!0,["onKeyDown","onDidPaste","onDidBlurEditorText"].forEach(i=>{n[i](()=>{const l=n.getValue();u.onChange(l)})}),u.innerRef&&(u.innerRef.value=n),t.value&&C(n))});let s=M(u.text);return E(()=>u.text,i=>{!s&&i&&(s=i),n&&i!=n.getValue()&&n.setValue(i)}),N(u.unSaveConfirm,()=>s===n.getValue()),()=>v("div",{class:["editor relative overflow-hidden",K.editor],ref:a},[m.value?null:v(V,null,null)])}}),O=async(u,a,m)=>{const{editor:n,KeyCode:r,KeyMod:e}=await p(()=>import("./use-async-monaco-f1b46e16.js").then(s=>s.e),["js/use-async-monaco-f1b46e16.js","js/index-2683cc36.js","assets/index-f6451738.css","js/index-381af8f0.js","js/use-save-confirm-c4873082.js","assets/use-async-monaco-726e6ad3.css"]),t=n.create(u,{value:a,language:"markdown",automaticLayout:!0,wrappingStrategy:"advanced",minimap:{enabled:!1},theme:m.value?"dark":"light",wordWrap:"on",cursorStyle:"line-thin",formatOnType:!0,quickSuggestions:{strings:!1,other:!1,comments:!1},tabCompletion:"off",parameterHints:{enabled:!1},suggestOnTriggerCharacters:!1,acceptSuggestionOnEnter:"off",wordBasedSuggestions:!1});E(()=>m.value,s=>{t.updateOptions({theme:s?"dark":"light"})}),t.addAction({id:"bold",label:"bold",keybindings:[e.CtrlCmd|r.KeyB],run:s=>(h(t,"**"),null)}),t.addAction({id:"em",label:"em",keybindings:[e.CtrlCmd|r.KeyI],run:s=>(h(t,"*"),null)}),t.addAction({id:"null",label:"null",keybindings:[e.CtrlCmd|r.KeyS,e.Shift|e.Alt|r.KeyF],run:s=>null}),t.addAction({id:"del",label:"del",keybindings:[e.Alt|r.KeyD],run:s=>(h(t,"~~"),null)});const C=[,r.Digit1,r.Digit2,r.Digit3,r.Digit4,r.Digit5];return Array.from({length:5}).fill(null).forEach((s,i)=>{const l=i+1;t.addAction({id:`head-${l}`,label:"heading",keybindings:[e.CtrlCmd|C[l]],run:c=>{const f=c.getSelection();if(!f)return null;const d=f.startLineNumber,g={startLineNumber:d,endLineNumber:d,startColumn:0,endColumn:l+2},o=c.getModel()?.getValueInRange(g);if(o&&o==`${"#".repeat(l)} `){c.executeEdits("",[{range:g,text:""}]);return}c.executeEdits("",[{range:{startLineNumber:d,endLineNumber:d,startColumn:0,endColumn:0},text:`${"#".repeat(l)} `}])}})}),t},h=async(u,a)=>{const{Selection:m}=await p(()=>import("./use-async-monaco-f1b46e16.js").then(t=>t.e),["js/use-async-monaco-f1b46e16.js","js/index-2683cc36.js","assets/index-f6451738.css","js/index-381af8f0.js","js/use-save-confirm-c4873082.js","assets/use-async-monaco-726e6ad3.css"]),n=u;if(!n)return;const r=a.length,e=n.getSelection();if(e)if(e.startLineNumber==e.endLineNumber&&e.startColumn==e.endColumn){n.executeEdits("",[{range:e,text:a.repeat(2)}]);const t=new m(e.startLineNumber,e.startColumn+r,e.startLineNumber,e.startColumn+r);n.setSelection(t)}else{const t=n.getModel()?.getValueInRange(e);if(!t)return;if(t.startsWith(a)&&t.endsWith(a)){n.executeEdits("",[{range:e,text:`${t.slice(r,t.length-r)}`}]);return}n.executeEdits("",[{range:e,text:`${a}${t}${a}`}])}};export{Y as MonacoEditor};
