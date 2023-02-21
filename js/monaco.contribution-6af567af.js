import{_ as f}from"./preload-helper-f651ca80.js";import{m as d}from"./editor.api-4e51eec6.js";/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.35.0(71ac097e6155a405f6be52b0b368a04508c31e31)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var O=Object.defineProperty,m=Object.getOwnPropertyDescriptor,E=Object.getOwnPropertyNames,L=Object.prototype.hasOwnProperty,a=(e,i,t,n)=>{if(i&&typeof i=="object"||typeof i=="function")for(let r of E(i))!L.call(e,r)&&r!==t&&O(e,r,{get:()=>i[r],enumerable:!(n=m(i,r))||n.enumerable});return e},x=(e,i,t)=>(a(e,i,"default"),t&&a(t,i,"default")),y="4.5.5",s={};x(s,d);var h=(e=>(e[e.None=0]="None",e[e.CommonJS=1]="CommonJS",e[e.AMD=2]="AMD",e[e.UMD=3]="UMD",e[e.System=4]="System",e[e.ES2015=5]="ES2015",e[e.ESNext=99]="ESNext",e))(h||{}),_=(e=>(e[e.None=0]="None",e[e.Preserve=1]="Preserve",e[e.React=2]="React",e[e.ReactNative=3]="ReactNative",e[e.ReactJSX=4]="ReactJSX",e[e.ReactJSXDev=5]="ReactJSXDev",e))(_||{}),u=(e=>(e[e.CarriageReturnLineFeed=0]="CarriageReturnLineFeed",e[e.LineFeed=1]="LineFeed",e))(u||{}),l=(e=>(e[e.ES3=0]="ES3",e[e.ES5=1]="ES5",e[e.ES2015=2]="ES2015",e[e.ES2016=3]="ES2016",e[e.ES2017=4]="ES2017",e[e.ES2018=5]="ES2018",e[e.ES2019=6]="ES2019",e[e.ES2020=7]="ES2020",e[e.ESNext=99]="ESNext",e[e.JSON=100]="JSON",e[e.Latest=99]="Latest",e))(l||{}),c=(e=>(e[e.Classic=1]="Classic",e[e.NodeJs=2]="NodeJs",e))(c||{}),g=class{_onDidChange=new s.Emitter;_onDidExtraLibsChange=new s.Emitter;_extraLibs;_removedExtraLibs;_eagerModelSync;_compilerOptions;_diagnosticsOptions;_workerOptions;_onDidExtraLibsChangeTimeout;_inlayHintsOptions;_modeConfiguration;constructor(e,i,t,n,r){this._extraLibs=Object.create(null),this._removedExtraLibs=Object.create(null),this._eagerModelSync=!1,this.setCompilerOptions(e),this.setDiagnosticsOptions(i),this.setWorkerOptions(t),this.setInlayHintsOptions(n),this.setModeConfiguration(r),this._onDidExtraLibsChangeTimeout=-1}get onDidChange(){return this._onDidChange.event}get onDidExtraLibsChange(){return this._onDidExtraLibsChange.event}get modeConfiguration(){return this._modeConfiguration}get workerOptions(){return this._workerOptions}get inlayHintsOptions(){return this._inlayHintsOptions}getExtraLibs(){return this._extraLibs}addExtraLib(e,i){let t;if(typeof i>"u"?t=`ts:extralib-${Math.random().toString(36).substring(2,15)}`:t=i,this._extraLibs[t]&&this._extraLibs[t].content===e)return{dispose:()=>{}};let n=1;return this._removedExtraLibs[t]&&(n=this._removedExtraLibs[t]+1),this._extraLibs[t]&&(n=this._extraLibs[t].version+1),this._extraLibs[t]={content:e,version:n},this._fireOnDidExtraLibsChangeSoon(),{dispose:()=>{let r=this._extraLibs[t];r&&r.version===n&&(delete this._extraLibs[t],this._removedExtraLibs[t]=n,this._fireOnDidExtraLibsChangeSoon())}}}setExtraLibs(e){for(const i in this._extraLibs)this._removedExtraLibs[i]=this._extraLibs[i].version;if(this._extraLibs=Object.create(null),e&&e.length>0)for(const i of e){const t=i.filePath||`ts:extralib-${Math.random().toString(36).substring(2,15)}`,n=i.content;let r=1;this._removedExtraLibs[t]&&(r=this._removedExtraLibs[t]+1),this._extraLibs[t]={content:n,version:r}}this._fireOnDidExtraLibsChangeSoon()}_fireOnDidExtraLibsChangeSoon(){this._onDidExtraLibsChangeTimeout===-1&&(this._onDidExtraLibsChangeTimeout=window.setTimeout(()=>{this._onDidExtraLibsChangeTimeout=-1,this._onDidExtraLibsChange.fire(void 0)},0))}getCompilerOptions(){return this._compilerOptions}setCompilerOptions(e){this._compilerOptions=e||Object.create(null),this._onDidChange.fire(void 0)}getDiagnosticsOptions(){return this._diagnosticsOptions}setDiagnosticsOptions(e){this._diagnosticsOptions=e||Object.create(null),this._onDidChange.fire(void 0)}setWorkerOptions(e){this._workerOptions=e||Object.create(null),this._onDidChange.fire(void 0)}setInlayHintsOptions(e){this._inlayHintsOptions=e||Object.create(null),this._onDidChange.fire(void 0)}setMaximumWorkerIdleTime(e){}setEagerModelSync(e){this._eagerModelSync=e}getEagerModelSync(){return this._eagerModelSync}setModeConfiguration(e){this._modeConfiguration=e||Object.create(null),this._onDidChange.fire(void 0)}},C=y,p={completionItems:!0,hovers:!0,documentSymbols:!0,definitions:!0,references:!0,documentHighlights:!0,rename:!0,diagnostics:!0,documentRangeFormattingEdits:!0,signatureHelp:!0,onTypeFormattingEdits:!0,codeActions:!0,inlayHints:!0},b=new g({allowNonTsExtensions:!0,target:99},{noSemanticValidation:!1,noSyntaxValidation:!1,onlyVisible:!1},{},{},p),v=new g({allowNonTsExtensions:!0,allowJs:!0,target:99},{noSemanticValidation:!0,noSyntaxValidation:!1,onlyVisible:!1},{},{},p),D=()=>o().then(e=>e.getTypeScriptWorker()),S=()=>o().then(e=>e.getJavaScriptWorker());s.languages.typescript={ModuleKind:h,JsxEmit:_,NewLineKind:u,ScriptTarget:l,ModuleResolutionKind:c,typescriptVersion:C,typescriptDefaults:b,javascriptDefaults:v,getTypeScriptWorker:D,getJavaScriptWorker:S};function o(){return f(()=>import("./tsMode-83e95dfb.js"),["js/tsMode-83e95dfb.js","js/editor.api-4e51eec6.js","assets/editor-e5ad2865.css","js/preload-helper-f651ca80.js"])}s.languages.onLanguage("typescript",()=>o().then(e=>e.setupTypeScript(b)));s.languages.onLanguage("javascript",()=>o().then(e=>e.setupJavaScript(v)));export{b as t};
