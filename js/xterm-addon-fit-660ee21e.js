import{ag as f}from"./index-804307be.js";function g(i,s){for(var o=0;o<s.length;o++){const t=s[o];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in i)){const r=Object.getOwnPropertyDescriptor(t,e);r&&Object.defineProperty(i,e,r.get?r:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var l={exports:{}};(function(i,s){(function(o,t){i.exports=t()})(self,function(){return(()=>{var o={};return(()=>{var t=o;Object.defineProperty(t,"__esModule",{value:!0}),t.FitAddon=void 0,t.FitAddon=class{constructor(){}activate(e){this._terminal=e}dispose(){}fit(){const e=this.proposeDimensions();if(!e||!this._terminal||isNaN(e.cols)||isNaN(e.rows))return;const r=this._terminal._core;this._terminal.rows===e.rows&&this._terminal.cols===e.cols||(r._renderService.clear(),this._terminal.resize(e.cols,e.rows))}proposeDimensions(){if(!this._terminal||!this._terminal.element||!this._terminal.element.parentElement)return;const e=this._terminal._core,r=e._renderService.dimensions;if(r.css.cell.width===0||r.css.cell.height===0)return;const p=this._terminal.options.scrollback===0?0:e.viewport.scrollBarWidth,a=window.getComputedStyle(this._terminal.element.parentElement),d=parseInt(a.getPropertyValue("height")),m=Math.max(0,parseInt(a.getPropertyValue("width"))),n=window.getComputedStyle(this._terminal.element),h=d-(parseInt(n.getPropertyValue("padding-top"))+parseInt(n.getPropertyValue("padding-bottom"))),u=m-(parseInt(n.getPropertyValue("padding-right"))+parseInt(n.getPropertyValue("padding-left")))-p;return{cols:Math.max(2,Math.floor(u/r.css.cell.width)),rows:Math.max(1,Math.floor(h/r.css.cell.height))}}}})(),o})()})})(l);var c=l.exports;const _=f(c),x=g({__proto__:null,default:_},[c]);export{x};
