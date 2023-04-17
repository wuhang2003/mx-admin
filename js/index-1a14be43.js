import{d as E,R as $,T as P,S as g,P as A,k as O,e as x,A as j,g as C,D as h,h as D,j as y,F as M,M as k,W as L}from"./codemirror-fdcc17ea.js";function S(i){let t=Object.keys(i).join(""),e=/\w/.test(t);return e&&(t=t.replace(/\w/g,"")),`[${e?"\\w":""}${t.replace(/[^\w\s]/g,"\\$&")}]`}function R(i){let t=Object.create(null),e=Object.create(null);for(let{label:o}of i){t[o[0]]=!0;for(let l=1;l<o.length;l++)e[o[l]]=!0}let n=S(t)+S(e)+"*$";return[new RegExp("^"+n),new RegExp(n)]}function Z(i){let t=i.map(o=>typeof o=="string"?{label:o}:o),[e,n]=t.every(o=>/^\w+$/.test(o.label))?[/\w*$/,/\w+$/]:R(t);return o=>{let l=o.matchBefore(n);return l||o.explicit?{from:l?l.from:o.pos,options:t,validFor:e}:null}}function _(i,t){return e=>{for(let n=E(e.state).resolveInner(e.pos,-1);n;n=n.parent){if(i.indexOf(n.name)>-1)return null;if(n.type.isTop)break}return t(e)}}const W=j.define(),q=x.baseTheme({".cm-tooltip.cm-tooltip-autocomplete":{"& > ul":{fontFamily:"monospace",whiteSpace:"nowrap",overflow:"hidden auto",maxWidth_fallback:"700px",maxWidth:"min(700px, 95vw)",minWidth:"250px",maxHeight:"10em",height:"100%",listStyle:"none",margin:0,padding:0,"& > li, & > completion-section":{padding:"1px 3px",lineHeight:1.2},"& > li":{overflowX:"hidden",textOverflow:"ellipsis",cursor:"pointer"},"& > completion-section":{display:"list-item",borderBottom:"1px solid silver",paddingLeft:"0.5em",opacity:.7}}},"&light .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#17c",color:"white"},"&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:"#777"},"&dark .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#347",color:"white"},"&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:"#444"},".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after":{content:'"···"',opacity:.5,display:"block",textAlign:"center"},".cm-tooltip.cm-completionInfo":{position:"absolute",padding:"3px 9px",width:"max-content",maxWidth:"400px",boxSizing:"border-box"},".cm-completionInfo.cm-completionInfo-left":{right:"100%"},".cm-completionInfo.cm-completionInfo-right":{left:"100%"},".cm-completionInfo.cm-completionInfo-left-narrow":{right:"30px"},".cm-completionInfo.cm-completionInfo-right-narrow":{left:"30px"},"&light .cm-snippetField":{backgroundColor:"#00000022"},"&dark .cm-snippetField":{backgroundColor:"#ffffff22"},".cm-snippetFieldPosition":{verticalAlign:"text-top",width:0,height:"1.15em",display:"inline-block",margin:"0 -0.7px -.7em",borderLeft:"1.4px dotted #888"},".cm-completionMatchedText":{textDecoration:"underline"},".cm-completionDetail":{marginLeft:"0.5em",fontStyle:"italic"},".cm-completionIcon":{fontSize:"90%",width:".8em",display:"inline-block",textAlign:"center",paddingRight:".6em",opacity:"0.6",boxSizing:"content-box"},".cm-completionIcon-function, .cm-completionIcon-method":{"&:after":{content:"'ƒ'"}},".cm-completionIcon-class":{"&:after":{content:"'○'"}},".cm-completionIcon-interface":{"&:after":{content:"'◌'"}},".cm-completionIcon-variable":{"&:after":{content:"'𝑥'"}},".cm-completionIcon-constant":{"&:after":{content:"'𝐶'"}},".cm-completionIcon-type":{"&:after":{content:"'𝑡'"}},".cm-completionIcon-enum":{"&:after":{content:"'∪'"}},".cm-completionIcon-property":{"&:after":{content:"'□'"}},".cm-completionIcon-keyword":{"&:after":{content:"'🔑︎'"}},".cm-completionIcon-namespace":{"&:after":{content:"'▢'"}},".cm-completionIcon-text":{"&:after":{content:"'abc'",fontSize:"50%",verticalAlign:"middle"}}});class z{constructor(t,e,n,o){this.field=t,this.line=e,this.from=n,this.to=o}}class w{constructor(t,e,n){this.field=t,this.from=e,this.to=n}map(t){let e=t.mapPos(this.from,-1,k.TrackDel),n=t.mapPos(this.to,1,k.TrackDel);return e==null||n==null?null:new w(this.field,e,n)}}class b{constructor(t,e){this.lines=t,this.fieldPositions=e}instantiate(t,e){let n=[],o=[e],l=t.doc.lineAt(e),r=/^\s*/.exec(l.text)[0];for(let c of this.lines){if(n.length){let f=r,a=/^\t*/.exec(c)[0].length;for(let m=0;m<a;m++)f+=t.facet(C);o.push(e+f.length-a),c=f+c.slice(a)}n.push(c),e+=c.length+1}let s=this.fieldPositions.map(c=>new w(c.field,o[c.line]+c.from,o[c.line]+c.to));return{text:n,ranges:s}}static parse(t){let e=[],n=[],o=[],l;for(let r of t.split(/\r\n?|\n/)){for(;l=/[#$]\{(?:(\d+)(?::([^}]*))?|([^}]*))\}/.exec(r);){let s=l[1]?+l[1]:null,c=l[2]||l[3]||"",f=-1;for(let a=0;a<e.length;a++)(s!=null?e[a].seq==s:c&&e[a].name==c)&&(f=a);if(f<0){let a=0;for(;a<e.length&&(s==null||e[a].seq!=null&&e[a].seq<s);)a++;e.splice(a,0,{seq:s,name:c}),f=a;for(let m of o)m.field>=f&&m.field++}o.push(new z(f,n.length,l.index,l.index+c.length)),r=r.slice(0,l.index)+c+r.slice(l.index+l[0].length)}for(let s;s=/\\([{}])/.exec(r);){r=r.slice(0,s.index)+s[1]+r.slice(s.index+s[0].length);for(let c of o)c.line==n.length&&c.from>s.index&&(c.from--,c.to--)}n.push(r)}return new b(n,o)}}let B=h.widget({widget:new class extends L{toDOM(){let i=document.createElement("span");return i.className="cm-snippetFieldPosition",i}ignoreEvent(){return!1}}}),H=h.mark({class:"cm-snippetField"});class p{constructor(t,e){this.ranges=t,this.active=e,this.deco=h.set(t.map(n=>(n.from==n.to?B:H).range(n.from,n.to)))}map(t){let e=[];for(let n of this.ranges){let o=n.map(t);if(!o)return null;e.push(o)}return new p(e,this.active)}selectionInsideField(t){return t.ranges.every(e=>this.ranges.some(n=>n.field==this.active&&n.from<=e.from&&n.to>=e.to))}}const u=g.define({map(i,t){return i&&i.map(t)}}),K=g.define(),d=D.define({create(){return null},update(i,t){for(let e of t.effects){if(e.is(u))return e.value;if(e.is(K)&&i)return new p(i.ranges,e.value)}return i&&t.docChanged&&(i=i.map(t.changes)),i&&t.selection&&!i.selectionInsideField(t.selection)&&(i=null),i},provide:i=>x.decorations.from(i,t=>t?t.deco:h.none)});function I(i,t){return y.create(i.filter(e=>e.field==t).map(e=>y.range(e.from,e.to)))}function V(i){let t=b.parse(i);return(e,n,o,l)=>{let{text:r,ranges:s}=t.instantiate(e.state,o),c={changes:{from:o,to:l,insert:P.of(r)},scrollIntoView:!0,annotations:W.of(n)};if(s.length&&(c.selection=I(s,0)),s.length>1){let f=new p(s,0),a=c.effects=[u.of(f)];e.state.field(d,!1)===void 0&&a.push(g.appendConfig.of([d,G,J,q]))}e.dispatch(e.state.update(c))}}function F(i){return({state:t,dispatch:e})=>{let n=t.field(d,!1);if(!n||i<0&&n.active==0)return!1;let o=n.active+i,l=i>0&&!n.ranges.some(r=>r.field==o+i);return e(t.update({selection:I(n.ranges,o),effects:u.of(l?null:new p(n.ranges,o))})),!0}}const N=({state:i,dispatch:t})=>i.field(d,!1)?(t(i.update({effects:u.of(null)})),!0):!1,X=F(1),U=F(-1),Y=[{key:"Tab",run:X,shift:U},{key:"Escape",run:N}],v=M.define({combine(i){return i.length?i[0]:Y}}),G=A.highest(O.compute([v],i=>i.facet(v)));function ee(i,t){return Object.assign(Object.assign({},t),{apply:V(i)})}const J=x.domEventHandlers({mousedown(i,t){let e=t.state.field(d,!1),n;if(!e||(n=t.posAtCoords({x:i.clientX,y:i.clientY}))==null)return!1;let o=e.ranges.find(l=>l.from<=n&&l.to>=n);return!o||o.field==e.active?!1:(t.dispatch({selection:I(e.ranges,o.field),effects:u.of(e.ranges.some(l=>l.field>o.field)?new p(e.ranges,o.field):null)}),!0)}}),T=new class extends ${};T.startSide=1;T.endSide=-1;export{Z as c,_ as i,ee as s};
