import{C as h}from"./app-976c8860.js";function f(o,a){for(var n=0;n<a.length;n++){const t=a[n];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in o)){const r=Object.getOwnPropertyDescriptor(t,e);r&&Object.defineProperty(o,e,r.get?r:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var s={},g={get exports(){return s},set exports(o){s=o}};(function(o,a){(function(n,t){o.exports=t()})(self,function(){return(()=>{var n={};return(()=>{var t=n;Object.defineProperty(t,"__esModule",{value:!0}),t.FitAddon=void 0,t.FitAddon=class{constructor(){}activate(e){this._terminal=e}dispose(){}fit(){const e=this.proposeDimensions();if(!e||!this._terminal||isNaN(e.cols)||isNaN(e.rows))return;const r=this._terminal._core;this._terminal.rows===e.rows&&this._terminal.cols===e.cols||(r._renderService.clear(),this._terminal.resize(e.cols,e.rows))}proposeDimensions(){if(!this._terminal||!this._terminal.element||!this._terminal.element.parentElement)return;const e=this._terminal._core,r=e._renderService.dimensions;if(r.css.cell.width===0||r.css.cell.height===0)return;const c=this._terminal.options.scrollback===0?0:e.viewport.scrollBarWidth,l=window.getComputedStyle(this._terminal.element.parentElement),p=parseInt(l.getPropertyValue("height")),d=Math.max(0,parseInt(l.getPropertyValue("width"))),i=window.getComputedStyle(this._terminal.element),m=p-(parseInt(i.getPropertyValue("padding-top"))+parseInt(i.getPropertyValue("padding-bottom"))),u=d-(parseInt(i.getPropertyValue("padding-right"))+parseInt(i.getPropertyValue("padding-left")))-c;return{cols:Math.max(2,Math.floor(u/r.css.cell.width)),rows:Math.max(1,Math.floor(m/r.css.cell.height))}}}})(),n})()})})(g);const _=h(s),x=f({__proto__:null,default:_},[s]);export{x};
