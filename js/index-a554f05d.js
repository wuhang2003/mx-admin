import{b as T,g as O,S as g,h as P,k as $,E as x,R as j,j as A,l as h,m as M,n as y,F as C,M as k,W as D}from"./codemirror-98803f77.js";function S(n){let t=Object.keys(n).join(""),e=/\w/.test(t);return e&&(t=t.replace(/\w/g,"")),`[${e?"\\w":""}${t.replace(/[^\w\s]/g,"\\$&")}]`}function R(n){let t=Object.create(null),e=Object.create(null);for(let{label:o}of n){t[o[0]]=!0;for(let l=1;l<o.length;l++)e[o[l]]=!0}let i=S(t)+S(e)+"*$";return[new RegExp("^"+i),new RegExp(i)]}function J(n){let t=n.map(o=>typeof o=="string"?{label:o}:o),[e,i]=t.every(o=>/^\w+$/.test(o.label))?[/\w*$/,/\w+$/]:R(t);return o=>{let l=o.matchBefore(i);return l||o.explicit?{from:l?l.from:o.pos,options:t,validFor:e}:null}}function Q(n,t){return e=>{for(let i=T(e.state).resolveInner(e.pos,-1);i;i=i.parent)if(n.indexOf(i.name)>-1)return null;return t(e)}}const W=x.baseTheme({".cm-tooltip.cm-tooltip-autocomplete":{"& > ul":{fontFamily:"monospace",whiteSpace:"nowrap",overflow:"hidden auto",maxWidth_fallback:"700px",maxWidth:"min(700px, 95vw)",minWidth:"250px",maxHeight:"10em",listStyle:"none",margin:0,padding:0,"& > li":{overflowX:"hidden",textOverflow:"ellipsis",cursor:"pointer",padding:"1px 3px",lineHeight:1.2}}},"&light .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#17c",color:"white"},"&dark .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#347",color:"white"},".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after":{content:'"···"',opacity:.5,display:"block",textAlign:"center"},".cm-tooltip.cm-completionInfo":{position:"absolute",padding:"3px 9px",width:"max-content",maxWidth:"300px"},".cm-completionInfo.cm-completionInfo-left":{right:"100%"},".cm-completionInfo.cm-completionInfo-right":{left:"100%"},"&light .cm-snippetField":{backgroundColor:"#00000022"},"&dark .cm-snippetField":{backgroundColor:"#ffffff22"},".cm-snippetFieldPosition":{verticalAlign:"text-top",width:0,height:"1.15em",margin:"0 -0.7px -.7em",borderLeft:"1.4px dotted #888"},".cm-completionMatchedText":{textDecoration:"underline"},".cm-completionDetail":{marginLeft:"0.5em",fontStyle:"italic"},".cm-completionIcon":{fontSize:"90%",width:".8em",display:"inline-block",textAlign:"center",paddingRight:".6em",opacity:"0.6"},".cm-completionIcon-function, .cm-completionIcon-method":{"&:after":{content:"'ƒ'"}},".cm-completionIcon-class":{"&:after":{content:"'○'"}},".cm-completionIcon-interface":{"&:after":{content:"'◌'"}},".cm-completionIcon-variable":{"&:after":{content:"'𝑥'"}},".cm-completionIcon-constant":{"&:after":{content:"'𝐶'"}},".cm-completionIcon-type":{"&:after":{content:"'𝑡'"}},".cm-completionIcon-enum":{"&:after":{content:"'∪'"}},".cm-completionIcon-property":{"&:after":{content:"'□'"}},".cm-completionIcon-keyword":{"&:after":{content:"'🔑︎'"}},".cm-completionIcon-namespace":{"&:after":{content:"'▢'"}},".cm-completionIcon-text":{"&:after":{content:"'abc'",fontSize:"50%",verticalAlign:"middle"}}});class L{constructor(t,e,i,o){this.field=t,this.line=e,this.from=i,this.to=o}}class w{constructor(t,e,i){this.field=t,this.from=e,this.to=i}map(t){let e=t.mapPos(this.from,-1,k.TrackDel),i=t.mapPos(this.to,1,k.TrackDel);return e==null||i==null?null:new w(this.field,e,i)}}class b{constructor(t,e){this.lines=t,this.fieldPositions=e}instantiate(t,e){let i=[],o=[e],l=t.doc.lineAt(e),r=/^\s*/.exec(l.text)[0];for(let c of this.lines){if(i.length){let f=r,a=/^\t*/.exec(c)[0].length;for(let m=0;m<a;m++)f+=t.facet(A);o.push(e+f.length-a),c=f+c.slice(a)}i.push(c),e+=c.length+1}let s=this.fieldPositions.map(c=>new w(c.field,o[c.line]+c.from,o[c.line]+c.to));return{text:i,ranges:s}}static parse(t){let e=[],i=[],o=[],l;for(let r of t.split(/\r\n?|\n/)){for(;l=/[#$]\{(?:(\d+)(?::([^}]*))?|([^}]*))\}/.exec(r);){let s=l[1]?+l[1]:null,c=l[2]||l[3]||"",f=-1;for(let a=0;a<e.length;a++)(s!=null?e[a].seq==s:c&&e[a].name==c)&&(f=a);if(f<0){let a=0;for(;a<e.length&&(s==null||e[a].seq!=null&&e[a].seq<s);)a++;e.splice(a,0,{seq:s,name:c}),f=a;for(let m of o)m.field>=f&&m.field++}o.push(new L(f,i.length,l.index,l.index+c.length)),r=r.slice(0,l.index)+c+r.slice(l.index+l[0].length)}for(let s;s=/([$#])\\{/.exec(r);){r=r.slice(0,s.index)+s[1]+"{"+r.slice(s.index+s[0].length);for(let c of o)c.line==i.length&&c.from>s.index&&(c.from--,c.to--)}i.push(r)}return new b(i,o)}}let q=h.widget({widget:new class extends D{toDOM(){let n=document.createElement("span");return n.className="cm-snippetFieldPosition",n}ignoreEvent(){return!1}}}),H=h.mark({class:"cm-snippetField"});class p{constructor(t,e){this.ranges=t,this.active=e,this.deco=h.set(t.map(i=>(i.from==i.to?q:H).range(i.from,i.to)))}map(t){let e=[];for(let i of this.ranges){let o=i.map(t);if(!o)return null;e.push(o)}return new p(e,this.active)}selectionInsideField(t){return t.ranges.every(e=>this.ranges.some(i=>i.field==this.active&&i.from<=e.from&&i.to>=e.to))}}const u=g.define({map(n,t){return n&&n.map(t)}}),B=g.define(),d=M.define({create(){return null},update(n,t){for(let e of t.effects){if(e.is(u))return e.value;if(e.is(B)&&n)return new p(n.ranges,e.value)}return n&&t.docChanged&&(n=n.map(t.changes)),n&&t.selection&&!n.selectionInsideField(t.selection)&&(n=null),n},provide:n=>x.decorations.from(n,t=>t?t.deco:h.none)});function I(n,t){return y.create(n.filter(e=>e.field==t).map(e=>y.range(e.from,e.to)))}function K(n){let t=b.parse(n);return(e,i,o,l)=>{let{text:r,ranges:s}=t.instantiate(e.state,o),c={changes:{from:o,to:l,insert:O.of(r)},scrollIntoView:!0};if(s.length&&(c.selection=I(s,0)),s.length>1){let f=new p(s,0),a=c.effects=[u.of(f)];e.state.field(d,!1)===void 0&&a.push(g.appendConfig.of([d,U,Y,W]))}e.dispatch(e.state.update(c))}}function v(n){return({state:t,dispatch:e})=>{let i=t.field(d,!1);if(!i||n<0&&i.active==0)return!1;let o=i.active+n,l=n>0&&!i.ranges.some(r=>r.field==o+n);return e(t.update({selection:I(i.ranges,o),effects:u.of(l?null:new p(i.ranges,o))})),!0}}const V=({state:n,dispatch:t})=>n.field(d,!1)?(t(n.update({effects:u.of(null)})),!0):!1,z=v(1),N=v(-1),X=[{key:"Tab",run:z,shift:N},{key:"Escape",run:V}],F=C.define({combine(n){return n.length?n[0]:X}}),U=P.highest($.compute([F],n=>n.facet(F)));function Z(n,t){return Object.assign(Object.assign({},t),{apply:K(n)})}const Y=x.domEventHandlers({mousedown(n,t){let e=t.state.field(d,!1),i;if(!e||(i=t.posAtCoords({x:n.clientX,y:n.clientY}))==null)return!1;let o=e.ranges.find(l=>l.from<=i&&l.to>=i);return!o||o.field==e.active?!1:(t.dispatch({selection:I(e.ranges,o.field),effects:u.of(e.ranges.some(l=>l.field>o.field)?new p(e.ranges,o.field):null)}),!0)}}),E=new class extends j{};E.startSide=1;E.endSide=-1;export{J as c,Q as i,Z as s};
