import{C as te,o as q,s as ae,p as re,t as m,v as le,L as ne,i as se,f as oe,a as ue,E as ie,b as G,n as E}from"./codemirror-be88fa51.js";import{cssLanguage as Oe,css as de}from"./index-ae180171.js";import{javascriptLanguage as ce,javascript as pe}from"./index-e0f6c0a5.js";import"./use-save-confirm-4b573eea.js";import"./use-store-ref-4d0ce661.js";import"./Button-5ec267f1.js";import"./use-editor-setting-75d4c3e0.js";import"./throttle-f16fb0de.js";import"./FormItem-32059e79.js";import"./context-2fd66e76.js";import"./light-50e066bd.js";import"./InputNumber-409daacb.js";import"./Remove-3934817c.js";import"./Add-89af046c.js";import"./Switch-82196aed.js";import"./_common-6222e43f.js";import"./preload-helper-f651ca80.js";import"./index-f678847c.js";const me=53,fe=1,ge=54,ke=2,be=55,he=3,$=4,I=5,L=6,U=7,z=8,xe=9,$e=10,Re=11,T=56,Te=12,W=57,ve=18,ye=27,we=30,Pe=33,Ce=35,Qe=0,qe={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},Xe={dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},V={dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}};function Se(e){return e==45||e==46||e==58||e>=65&&e<=90||e==95||e>=97&&e<=122||e>=161}function M(e){return e==9||e==10||e==13||e==32}let Z=null,D=null,j=0;function C(e,t){let l=e.pos+t;if(j==l&&D==e)return Z;let r=e.peek(t);for(;M(r);)r=e.peek(++t);let a="";for(;Se(r);)a+=String.fromCharCode(r),r=e.peek(++t);return D=e,j=l,Z=a?a.toLowerCase():r==_e||r==Ee?void 0:null}const F=60,K=62,B=47,_e=63,Ee=33,We=45;function A(e,t){this.name=e,this.parent=t,this.hash=t?t.hash:0;for(let l=0;l<e.length;l++)this.hash+=(this.hash<<4)+e.charCodeAt(l)+(e.charCodeAt(l)<<8)}const Ve=[$,z,I,L,U],Ze=new te({start:null,shift(e,t,l,r){return Ve.indexOf(t)>-1?new A(C(r,1)||"",e):e},reduce(e,t){return t==ve&&e?e.parent:e},reuse(e,t,l,r){let a=t.type.id;return a==$||a==Ce?new A(C(r,1)||"",e):e},hash(e){return e?e.hash:0},strict:!1}),De=new q((e,t)=>{if(e.next!=F){e.next<0&&t.context&&e.acceptToken(T);return}e.advance();let l=e.next==B;l&&e.advance();let r=C(e,0);if(r===void 0)return;if(!r)return e.acceptToken(l?Te:$);let a=t.context?t.context.name:null;if(l){if(r==a)return e.acceptToken(xe);if(a&&Xe[a])return e.acceptToken(T,-2);if(t.dialectEnabled(Qe))return e.acceptToken($e);for(let n=t.context;n;n=n.parent)if(n.name==r)return;e.acceptToken(Re)}else{if(r=="script")return e.acceptToken(I);if(r=="style")return e.acceptToken(L);if(r=="textarea")return e.acceptToken(U);if(qe.hasOwnProperty(r))return e.acceptToken(z);a&&V[a]&&V[a][r]?e.acceptToken(T,-1):e.acceptToken($)}},{contextual:!0}),je=new q(e=>{for(let t=0,l=0;;l++){if(e.next<0){l&&e.acceptToken(W);break}if(e.next==We)t++;else if(e.next==K&&t>=2){l>3&&e.acceptToken(W,-2);break}else t=0;e.advance()}});function X(e,t,l){let r=2+e.length;return new q(a=>{for(let n=0,o=0,u=0;;u++){if(a.next<0){u&&a.acceptToken(t);break}if(n==0&&a.next==F||n==1&&a.next==B||n>=2&&n<r&&a.next==e.charCodeAt(n-2))n++,o++;else if((n==2||n==r)&&M(a.next))o++;else if(n==r&&a.next==K){u>o?a.acceptToken(t,-o):a.acceptToken(l,-(o-2));break}else if((a.next==10||a.next==13)&&u){a.acceptToken(t,1);break}else n=o=0;a.advance()}})}const Ae=X("script",me,fe),Ne=X("style",ge,ke),Ye=X("textarea",be,he),Ge=ae({"Text RawText":m.content,"StartTag StartCloseTag SelfCloserEndTag EndTag SelfCloseEndTag":m.angleBracket,TagName:m.tagName,"MismatchedCloseTag/TagName":[m.tagName,m.invalid],AttributeName:m.attributeName,"AttributeValue UnquotedAttributeValue":m.attributeValue,Is:m.definitionOperator,"EntityReference CharacterReference":m.character,Comment:m.blockComment,ProcessingInst:m.processingInstruction,DoctypeDecl:m.documentMeta}),Ie=re.deserialize({version:14,states:",xOVOxOOO!WQ!bO'#CoO!]Q!bO'#CyO!bQ!bO'#C|O!gQ!bO'#DPO!lQ!bO'#DRO!qOXO'#CnO!|OYO'#CnO#XO[O'#CnO$eOxO'#CnOOOW'#Cn'#CnO$lO!rO'#DSO$tQ!bO'#DUO$yQ!bO'#DVOOOW'#Dj'#DjOOOW'#DX'#DXQVOxOOO%OQ#tO,59ZO%WQ#tO,59eO%`Q#tO,59hO%hQ#tO,59kO%pQ#tO,59mOOOX'#D]'#D]O%xOXO'#CwO&TOXO,59YOOOY'#D^'#D^O&]OYO'#CzO&hOYO,59YOOO['#D_'#D_O&pO[O'#C}O&{O[O,59YOOOW'#D`'#D`O'TOxO,59YO'[Q!bO'#DQOOOW,59Y,59YOOO`'#Da'#DaO'aO!rO,59nOOOW,59n,59nO'iQ!bO,59pO'nQ!bO,59qOOOW-E7V-E7VO'sQ#tO'#CqOOQO'#DY'#DYO(OQ#tO1G.uOOOX1G.u1G.uO(WQ#tO1G/POOOY1G/P1G/PO(`Q#tO1G/SOOO[1G/S1G/SO(hQ#tO1G/VOOOW1G/V1G/VO(pQ#tO1G/XOOOW1G/X1G/XOOOX-E7Z-E7ZO(xQ!bO'#CxOOOW1G.t1G.tOOOY-E7[-E7[O(}Q!bO'#C{OOO[-E7]-E7]O)SQ!bO'#DOOOOW-E7^-E7^O)XQ!bO,59lOOO`-E7_-E7_OOOW1G/Y1G/YOOOW1G/[1G/[OOOW1G/]1G/]O)^Q&jO,59]OOQO-E7W-E7WOOOX7+$a7+$aOOOY7+$k7+$kOOO[7+$n7+$nOOOW7+$q7+$qOOOW7+$s7+$sO)iQ!bO,59dO)nQ!bO,59gO)sQ!bO,59jOOOW1G/W1G/WO)xO,UO'#CtO*WO7[O'#CtOOQO1G.w1G.wOOOW1G/O1G/OOOOW1G/R1G/ROOOW1G/U1G/UOOOO'#DZ'#DZO*fO,UO,59`OOQO,59`,59`OOOO'#D['#D[O*tO7[O,59`OOOO-E7X-E7XOOQO1G.z1G.zOOOO-E7Y-E7Y",stateData:"+[~O!]OS~OSSOTPOUQOVROWTOY]OZ[O[^O^^O_^O`^Oa^Ow^Oz_O!cZO~OdaO~OdbO~OdcO~OddO~OdeO~O!VfOPkP!YkP~O!WiOQnP!YnP~O!XlORqP!YqP~OSSOTPOUQOVROWTOXqOY]OZ[O[^O^^O_^O`^Oa^Ow^O!cZO~O!YrO~P#dO!ZsO!duO~OdvO~OdwO~OfyOj|O~OfyOj!OO~OfyOj!QO~OfyOj!SO~OfyOj!UO~O!VfOPkX!YkX~OP!WO!Y!XO~O!WiOQnX!YnX~OQ!ZO!Y!XO~O!XlORqX!YqX~OR!]O!Y!XO~O!Y!XO~P#dOd!_O~O!ZsO!d!aO~Oj!bO~Oj!cO~Og!dOfeXjeX~OfyOj!fO~OfyOj!gO~OfyOj!hO~OfyOj!iO~OfyOj!jO~Od!kO~Od!lO~Od!mO~Oj!nO~Oi!qO!_!oO!a!pO~Oj!rO~Oj!sO~Oj!tO~O_!uO`!uO!_!wO!`!uO~O_!xO`!xO!a!wO!b!xO~O_!uO`!uO!_!{O!`!uO~O_!xO`!xO!a!{O!b!xO~O`_a!cwz!c~",goto:"%o!_PPPPPPPPPPPPPPPPPP!`!fP!lPP!xPP!{#O#R#X#[#_#e#h#k#q#w!`P!`!`P#}$T$k$q$w$}%T%Z%aPPPPPPPP%gX^OX`pXUOX`pezabcde{}!P!R!TR!q!dRhUR!XhXVOX`pRkVR!XkXWOX`pRnWR!XnXXOX`pQrXR!XpXYOX`pQ`ORx`Q{aQ}bQ!PcQ!RdQ!TeZ!e{}!P!R!TQ!v!oR!z!vQ!y!pR!|!yQgUR!VgQjVR!YjQmWR![mQpXR!^pQtZR!`tS_O`ToXp",nodeNames:"⚠ StartCloseTag StartCloseTag StartCloseTag StartTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteCloseTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue EndTag ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl",maxTerm:66,context:Ze,nodeProps:[["closedBy",-11,1,2,3,4,5,6,7,8,9,10,11,"EndTag",-4,19,29,32,35,"CloseTag"],["group",-9,12,15,16,17,18,38,39,40,41,"Entity",14,"Entity TextContent",-3,27,30,33,"TextContent Entity"],["openedBy",26,"StartTag StartCloseTag",-4,28,31,34,36,"OpenTag"]],propSources:[Ge],skippedNodes:[0],repeatNodeCount:9,tokenData:"!#b!aR!WOX$kXY)sYZ)sZ]$k]^)s^p$kpq)sqr$krs*zsv$kvw+dwx2yx}$k}!O3f!O!P$k!P!Q7_!Q![$k![!]8u!]!^$k!^!_>b!_!`!!p!`!a8T!a!c$k!c!}8u!}#R$k#R#S8u#S#T$k#T#o8u#o$f$k$f$g&R$g%W$k%W%o8u%o%p$k%p&a8u&a&b$k&b1p8u1p4U$k4U4d8u4d4e$k4e$IS8u$IS$I`$k$I`$Ib8u$Ib$Kh$k$Kh%#t8u%#t&/x$k&/x&Et8u&Et&FV$k&FV;'S8u;'S;:j<t;:j?&r$k?&r?Ah8u?Ah?BY$k?BY?Mn8u?Mn~$k!Z$vc^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx!P$k!P!Q&R!Q!^$k!^!_(k!_!a&R!a$f$k$f$g&R$g~$k!R&[V^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&Rq&xT^P!bpOv&qwx'Xx!^&q!^!_'g!_~&qP'^R^POv'Xw!^'X!_~'Xp'lQ!bpOv'gx~'ga'yU^P!``Or'rrs'Xsv'rw!^'r!^!_(]!_~'r`(bR!``Or(]sv(]w~(]!Q(rT!``!bpOr(krs'gsv(kwx(]x~(kW)WXiWOX)RZ])R^p)Rqr)Rsw)Rx!P)R!Q!^)R!a$f)R$g~)R!a*O^^P!``!bp!]^OX&RXY)sYZ)sZ]&R]^)s^p&Rpq)sqr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R!Z+TT!_h^P!bpOv&qwx'Xx!^&q!^!_'g!_~&q!Z+kbiWaPOX,sXZ.QZ],s]^.Q^p,sqr,srs.Qst/]tw,swx.Qx!P,s!P!Q.Q!Q!],s!]!^)R!^!a.Q!a$f,s$f$g.Q$g~,s!Z,xbiWOX,sXZ.QZ],s]^.Q^p,sqr,srs.Qst)Rtw,swx.Qx!P,s!P!Q.Q!Q!],s!]!^.i!^!a.Q!a$f,s$f$g.Q$g~,s!R.TTOp.Qqs.Qt!].Q!]!^.d!^~.Q!R.iO_!R!Z.pXiW_!ROX)RZ])R^p)Rqr)Rsw)Rx!P)R!Q!^)R!a$f)R$g~)R!Z/baiWOX0gXZ1qZ]0g]^1q^p0gqr0grs1qsw0gwx1qx!P0g!P!Q1q!Q!]0g!]!^)R!^!a1q!a$f0g$f$g1q$g~0g!Z0laiWOX0gXZ1qZ]0g]^1q^p0gqr0grs1qsw0gwx1qx!P0g!P!Q1q!Q!]0g!]!^2V!^!a1q!a$f0g$f$g1q$g~0g!R1tSOp1qq!]1q!]!^2Q!^~1q!R2VO`!R!Z2^XiW`!ROX)RZ])R^p)Rqr)Rsw)Rx!P)R!Q!^)R!a$f)R$g~)R!Z3SU!ax^P!``Or'rrs'Xsv'rw!^'r!^!_(]!_~'r!]3qe^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx}$k}!O5S!O!P$k!P!Q&R!Q!^$k!^!_(k!_!a&R!a$f$k$f$g&R$g~$k!]5_d^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx!P$k!P!Q&R!Q!^$k!^!_(k!_!`&R!`!a6m!a$f$k$f$g&R$g~$k!T6xV^P!``!bp!dQOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R!X7hX^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_!`&R!`!a8T!a~&R!X8`VjU^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R!a9U!YfSdQ^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx}$k}!O8u!O!P8u!P!Q&R!Q![8u![!]8u!]!^$k!^!_(k!_!a&R!a!c$k!c!}8u!}#R$k#R#S8u#S#T$k#T#o8u#o$f$k$f$g&R$g$}$k$}%O8u%O%W$k%W%o8u%o%p$k%p&a8u&a&b$k&b1p8u1p4U8u4U4d8u4d4e$k4e$IS8u$IS$I`$k$I`$Ib8u$Ib$Je$k$Je$Jg8u$Jg$Kh$k$Kh%#t8u%#t&/x$k&/x&Et8u&Et&FV$k&FV;'S8u;'S;:j<t;:j?&r$k?&r?Ah8u?Ah?BY$k?BY?Mn8u?Mn~$k!a=Pe^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx!P$k!P!Q&R!Q!^$k!^!_(k!_!a&R!a$f$k$f$g&R$g;=`$k;=`<%l8u<%l~$k!R>iW!``!bpOq(kqr?Rrs'gsv(kwx(]x!a(k!a!bKj!b~(k!R?YZ!``!bpOr(krs'gsv(kwx(]x}(k}!O?{!O!f(k!f!gAR!g#W(k#W#XGz#X~(k!R@SV!``!bpOr(krs'gsv(kwx(]x}(k}!O@i!O~(k!R@rT!``!bp!cPOr(krs'gsv(kwx(]x~(k!RAYV!``!bpOr(krs'gsv(kwx(]x!q(k!q!rAo!r~(k!RAvV!``!bpOr(krs'gsv(kwx(]x!e(k!e!fB]!f~(k!RBdV!``!bpOr(krs'gsv(kwx(]x!v(k!v!wBy!w~(k!RCQV!``!bpOr(krs'gsv(kwx(]x!{(k!{!|Cg!|~(k!RCnV!``!bpOr(krs'gsv(kwx(]x!r(k!r!sDT!s~(k!RD[V!``!bpOr(krs'gsv(kwx(]x!g(k!g!hDq!h~(k!RDxW!``!bpOrDqrsEbsvDqvwEvwxFfx!`Dq!`!aGb!a~DqqEgT!bpOvEbvxEvx!`Eb!`!aFX!a~EbPEyRO!`Ev!`!aFS!a~EvPFXOzPqF`Q!bpzPOv'gx~'gaFkV!``OrFfrsEvsvFfvwEvw!`Ff!`!aGQ!a~FfaGXR!``zPOr(]sv(]w~(]!RGkT!``!bpzPOr(krs'gsv(kwx(]x~(k!RHRV!``!bpOr(krs'gsv(kwx(]x#c(k#c#dHh#d~(k!RHoV!``!bpOr(krs'gsv(kwx(]x#V(k#V#WIU#W~(k!RI]V!``!bpOr(krs'gsv(kwx(]x#h(k#h#iIr#i~(k!RIyV!``!bpOr(krs'gsv(kwx(]x#m(k#m#nJ`#n~(k!RJgV!``!bpOr(krs'gsv(kwx(]x#d(k#d#eJ|#e~(k!RKTV!``!bpOr(krs'gsv(kwx(]x#X(k#X#YDq#Y~(k!RKqW!``!bpOrKjrsLZsvKjvwLowxNPx!aKj!a!b! g!b~KjqL`T!bpOvLZvxLox!aLZ!a!bM^!b~LZPLrRO!aLo!a!bL{!b~LoPMORO!`Lo!`!aMX!a~LoPM^OwPqMcT!bpOvLZvxLox!`LZ!`!aMr!a~LZqMyQ!bpwPOv'gx~'gaNUV!``OrNPrsLosvNPvwLow!aNP!a!bNk!b~NPaNpV!``OrNPrsLosvNPvwLow!`NP!`!a! V!a~NPa! ^R!``wPOr(]sv(]w~(]!R! nW!``!bpOrKjrsLZsvKjvwLowxNPx!`Kj!`!a!!W!a~Kj!R!!aT!``!bpwPOr(krs'gsv(kwx(]x~(k!V!!{VgS^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R",tokenizers:[Ae,Ne,Ye,De,je,0,1,2,3,4,5],topRules:{Document:[0,13]},dialects:{noMatch:0},tokenPrec:464});function Le(e,t){let l=Object.create(null);for(let r of e.firstChild.getChildren("Attribute")){let a=r.getChild("AttributeName"),n=r.getChild("AttributeValue")||r.getChild("UnquotedAttributeValue");a&&(l[t.read(a.from,a.to)]=n?n.name=="AttributeValue"?t.read(n.from+1,n.to-1):t.read(n.from,n.to):"")}return l}function v(e,t,l){let r;for(let a of l)if(!a.attrs||a.attrs(r||(r=Le(e.node.parent,t))))return{parser:a.parser};return null}function Ue(e){let t=[],l=[],r=[];for(let a of e){let n=a.tag=="script"?t:a.tag=="style"?l:a.tag=="textarea"?r:null;if(!n)throw new RangeError("Only script, style, and textarea tags can host nested parsers");n.push(a)}return le((a,n)=>{let o=a.type.id;return o==ye?v(a,n,t):o==we?v(a,n,l):o==Pe?v(a,n,r):null})}const h=["_blank","_self","_top","_parent"],y=["ascii","utf-8","utf-16","latin1","latin1"],w=["get","post","put","delete"],P=["application/x-www-form-urlencoded","multipart/form-data","text/plain"],c=["true","false"],s={},ze={a:{attrs:{href:null,ping:null,type:null,media:null,target:h,hreflang:null}},abbr:s,acronym:s,address:s,applet:s,area:{attrs:{alt:null,coords:null,href:null,target:null,ping:null,media:null,hreflang:null,type:null,shape:["default","rect","circle","poly"]}},article:s,aside:s,audio:{attrs:{src:null,mediagroup:null,crossorigin:["anonymous","use-credentials"],preload:["none","metadata","auto"],autoplay:["autoplay"],loop:["loop"],controls:["controls"]}},b:s,base:{attrs:{href:null,target:h}},basefont:s,bdi:s,bdo:s,big:s,blockquote:{attrs:{cite:null}},body:s,br:s,button:{attrs:{form:null,formaction:null,name:null,value:null,autofocus:["autofocus"],disabled:["autofocus"],formenctype:P,formmethod:w,formnovalidate:["novalidate"],formtarget:h,type:["submit","reset","button"]}},canvas:{attrs:{width:null,height:null}},caption:s,center:s,cite:s,code:s,col:{attrs:{span:null}},colgroup:{attrs:{span:null}},command:{attrs:{type:["command","checkbox","radio"],label:null,icon:null,radiogroup:null,command:null,title:null,disabled:["disabled"],checked:["checked"]}},data:{attrs:{value:null}},datagrid:{attrs:{disabled:["disabled"],multiple:["multiple"]}},datalist:{attrs:{data:null}},dd:s,del:{attrs:{cite:null,datetime:null}},details:{attrs:{open:["open"]}},dfn:s,dir:s,div:s,dl:s,dt:s,em:s,embed:{attrs:{src:null,type:null,width:null,height:null}},eventsource:{attrs:{src:null}},fieldset:{attrs:{disabled:["disabled"],form:null,name:null}},figcaption:s,figure:s,font:s,footer:s,form:{attrs:{action:null,name:null,"accept-charset":y,autocomplete:["on","off"],enctype:P,method:w,novalidate:["novalidate"],target:h}},frame:s,frameset:s,h1:s,h2:s,h3:s,h4:s,h5:s,h6:s,head:{children:["title","base","link","style","meta","script","noscript","command"]},header:s,hgroup:s,hr:s,html:{attrs:{manifest:null}},i:s,iframe:{attrs:{src:null,srcdoc:null,name:null,width:null,height:null,sandbox:["allow-top-navigation","allow-same-origin","allow-forms","allow-scripts"],seamless:["seamless"]}},img:{attrs:{alt:null,src:null,ismap:null,usemap:null,width:null,height:null,crossorigin:["anonymous","use-credentials"]}},input:{attrs:{alt:null,dirname:null,form:null,formaction:null,height:null,list:null,max:null,maxlength:null,min:null,name:null,pattern:null,placeholder:null,size:null,src:null,step:null,value:null,width:null,accept:["audio/*","video/*","image/*"],autocomplete:["on","off"],autofocus:["autofocus"],checked:["checked"],disabled:["disabled"],formenctype:P,formmethod:w,formnovalidate:["novalidate"],formtarget:h,multiple:["multiple"],readonly:["readonly"],required:["required"],type:["hidden","text","search","tel","url","email","password","datetime","date","month","week","time","datetime-local","number","range","color","checkbox","radio","file","submit","image","reset","button"]}},ins:{attrs:{cite:null,datetime:null}},kbd:s,keygen:{attrs:{challenge:null,form:null,name:null,autofocus:["autofocus"],disabled:["disabled"],keytype:["RSA"]}},label:{attrs:{for:null,form:null}},legend:s,li:{attrs:{value:null}},link:{attrs:{href:null,type:null,hreflang:null,media:null,sizes:["all","16x16","16x16 32x32","16x16 32x32 64x64"]}},map:{attrs:{name:null}},mark:s,menu:{attrs:{label:null,type:["list","context","toolbar"]}},meta:{attrs:{content:null,charset:y,name:["viewport","application-name","author","description","generator","keywords"],"http-equiv":["content-language","content-type","default-style","refresh"]}},meter:{attrs:{value:null,min:null,low:null,high:null,max:null,optimum:null}},nav:s,noframes:s,noscript:s,object:{attrs:{data:null,type:null,name:null,usemap:null,form:null,width:null,height:null,typemustmatch:["typemustmatch"]}},ol:{attrs:{reversed:["reversed"],start:null,type:["1","a","A","i","I"]},children:["li","script","template","ul","ol"]},optgroup:{attrs:{disabled:["disabled"],label:null}},option:{attrs:{disabled:["disabled"],label:null,selected:["selected"],value:null}},output:{attrs:{for:null,form:null,name:null}},p:s,param:{attrs:{name:null,value:null}},pre:s,progress:{attrs:{value:null,max:null}},q:{attrs:{cite:null}},rp:s,rt:s,ruby:s,s,samp:s,script:{attrs:{type:["text/javascript"],src:null,async:["async"],defer:["defer"],charset:y}},section:s,select:{attrs:{form:null,name:null,size:null,autofocus:["autofocus"],disabled:["disabled"],multiple:["multiple"]}},slot:{attrs:{name:null}},small:s,source:{attrs:{src:null,type:null,media:null}},span:s,strike:s,strong:s,style:{attrs:{type:["text/css"],media:null,scoped:null}},sub:s,summary:s,sup:s,table:s,tbody:s,td:{attrs:{colspan:null,rowspan:null,headers:null}},template:s,textarea:{attrs:{dirname:null,form:null,maxlength:null,name:null,placeholder:null,rows:null,cols:null,autofocus:["autofocus"],disabled:["disabled"],readonly:["readonly"],required:["required"],wrap:["soft","hard"]}},tfoot:s,th:{attrs:{colspan:null,rowspan:null,headers:null,scope:["row","col","rowgroup","colgroup"]}},thead:s,time:{attrs:{datetime:null}},title:s,tr:s,track:{attrs:{src:null,label:null,default:null,kind:["subtitles","captions","descriptions","chapters","metadata"],srclang:null}},tt:s,u:s,ul:{children:["li","script","template","ul","ol"]},var:s,video:{attrs:{src:null,poster:null,width:null,height:null,crossorigin:["anonymous","use-credentials"],preload:["auto","metadata","none"],autoplay:["autoplay"],mediagroup:["movie"],muted:["muted"],controls:["controls"]}},wbr:s},Me={accesskey:null,class:null,contenteditable:c,contextmenu:null,dir:["ltr","rtl","auto"],draggable:["true","false","auto"],dropzone:["copy","move","link","string:","file:"],hidden:["hidden"],id:null,inert:["inert"],itemid:null,itemprop:null,itemref:null,itemscope:["itemscope"],itemtype:null,lang:["ar","bn","de","en-GB","en-US","es","fr","hi","id","ja","pa","pt","ru","tr","zh"],spellcheck:c,autocorrect:c,autocapitalize:c,style:null,tabindex:null,title:null,translate:["yes","no"],onclick:null,rel:["stylesheet","alternate","author","bookmark","help","license","next","nofollow","noreferrer","prefetch","prev","search","tag"],role:"alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer".split(" "),"aria-activedescendant":null,"aria-atomic":c,"aria-autocomplete":["inline","list","both","none"],"aria-busy":c,"aria-checked":["true","false","mixed","undefined"],"aria-controls":null,"aria-describedby":null,"aria-disabled":c,"aria-dropeffect":null,"aria-expanded":["true","false","undefined"],"aria-flowto":null,"aria-grabbed":["true","false","undefined"],"aria-haspopup":c,"aria-hidden":c,"aria-invalid":["true","false","grammar","spelling"],"aria-label":null,"aria-labelledby":null,"aria-level":null,"aria-live":["off","polite","assertive"],"aria-multiline":c,"aria-multiselectable":c,"aria-owns":null,"aria-posinset":null,"aria-pressed":["true","false","mixed","undefined"],"aria-readonly":c,"aria-relevant":null,"aria-required":c,"aria-selected":["true","false","undefined"],"aria-setsize":null,"aria-sort":["ascending","descending","none","other"],"aria-valuemax":null,"aria-valuemin":null,"aria-valuenow":null,"aria-valuetext":null};class x{constructor(t,l){this.tags=Object.assign(Object.assign({},ze),t),this.globalAttrs=Object.assign(Object.assign({},Me),l),this.allTags=Object.keys(this.tags),this.globalAttrNames=Object.keys(this.globalAttrs)}}x.default=new x;function k(e,t,l=e.length){if(!t)return"";let r=t.firstChild,a=r&&r.getChild("TagName");return a?e.sliceString(a.from,Math.min(a.to,l)):""}function R(e,t=!1){for(let l=e.parent;l;l=l.parent)if(l.name=="Element")if(t)t=!1;else return l;return null}function J(e,t,l){let r=l.tags[k(e,R(t,!0))];return r?.children||l.allTags}function S(e,t){let l=[];for(let r=t;r=R(r);){let a=k(e,r);if(a&&r.lastChild.name=="CloseTag")break;a&&l.indexOf(a)<0&&(t.name=="EndTag"||t.from>=r.firstChild.to)&&l.push(a)}return l}const H=/^[:\-\.\w\u00b7-\uffff]*$/;function N(e,t,l,r,a){let n=/\s*>/.test(e.sliceDoc(a,a+5))?"":">";return{from:r,to:a,options:J(e.doc,l,t).map(o=>({label:o,type:"type"})).concat(S(e.doc,l).map((o,u)=>({label:"/"+o,apply:"/"+o+n,type:"type",boost:99-u}))),validFor:/^\/?[:\-\.\w\u00b7-\uffff]*$/}}function Y(e,t,l,r){let a=/\s*>/.test(e.sliceDoc(r,r+5))?"":">";return{from:l,to:r,options:S(e.doc,t).map((n,o)=>({label:n,apply:n+a,type:"type",boost:99-o})),validFor:H}}function Fe(e,t,l,r){let a=[],n=0;for(let o of J(e.doc,l,t))a.push({label:"<"+o,type:"type"});for(let o of S(e.doc,l))a.push({label:"</"+o+">",type:"type",boost:99-n++});return{from:r,to:r,options:a,validFor:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}function Ke(e,t,l,r,a){let n=R(l),o=n?t.tags[k(e.doc,n)]:null,u=o&&o.attrs?Object.keys(o.attrs).concat(t.globalAttrNames):t.globalAttrNames;return{from:r,to:a,options:u.map(O=>({label:O,type:"property"})),validFor:H}}function Be(e,t,l,r,a){var n;let o=(n=l.parent)===null||n===void 0?void 0:n.getChild("AttributeName"),u=[],O;if(o){let g=e.sliceDoc(o.from,o.to),d=t.globalAttrs[g];if(!d){let i=R(l),p=i?t.tags[k(e.doc,i)]:null;d=p?.attrs&&p.attrs[g]}if(d){let i=e.sliceDoc(r,a).toLowerCase(),p='"',f='"';/^['"]/.test(i)?(O=i[0]=='"'?/^[^"]*$/:/^[^']*$/,p="",f=e.sliceDoc(a,a+1)==i[0]?"":i[0],i=i.slice(1),r++):O=/^[^\s<>='"]*$/;for(let b of d)u.push({label:b,apply:p+b+f,type:"constant"})}}return{from:r,to:a,options:u,validFor:O}}function ee(e,t){let{state:l,pos:r}=t,a=G(l).resolveInner(r),n=a.resolve(r,-1);for(let o=r,u;a==n&&(u=n.childBefore(o));){let O=u.lastChild;if(!O||!O.type.isError||O.from<O.to)break;a=n=u,o=O.from}return n.name=="TagName"?n.parent&&/CloseTag$/.test(n.parent.name)?Y(l,n,n.from,r):N(l,e,n,n.from,r):n.name=="StartTag"?N(l,e,n,r,r):n.name=="StartCloseTag"||n.name=="IncompleteCloseTag"?Y(l,n,r,r):t.explicit&&(n.name=="OpenTag"||n.name=="SelfClosingTag")||n.name=="AttributeName"?Ke(l,e,n,n.name=="AttributeName"?n.from:r,r):n.name=="Is"||n.name=="AttributeValue"||n.name=="UnquotedAttributeValue"?Be(l,e,n,n.name=="Is"?r:n.from,r):t.explicit&&(a.name=="Element"||a.name=="Text"||a.name=="Document")?Fe(l,e,n,r):null}function bt(e){return ee(x.default,e)}function Je(e){let{extraTags:t,extraGlobalAttributes:l}=e,r=l||t?new x(t,l):x.default;return a=>ee(r,a)}const Q=ne.define({parser:Ie.configure({props:[se.add({Element(e){let t=/^(\s*)(<\/)?/.exec(e.textAfter);return e.node.to<=e.pos+t[0].length?e.continue():e.lineIndent(e.node.from)+(t[2]?0:e.unit)},"OpenTag CloseTag SelfClosingTag"(e){return e.column(e.node.from)+e.unit},Document(e){if(e.pos+/\s*/.exec(e.textAfter)[0].length<e.node.to)return e.continue();let t=null,l;for(let r=e.node;;){let a=r.lastChild;if(!a||a.name!="Element"||a.to!=r.to)break;t=r=a}return t&&!((l=t.lastChild)&&(l.name=="CloseTag"||l.name=="SelfClosingTag"))?e.lineIndent(t.from)+e.unit:null}}),oe.add({Element(e){let t=e.firstChild,l=e.lastChild;return!t||t.name!="OpenTag"?null:{from:t.to,to:l.name=="CloseTag"?l.from:e.to}}})],wrap:Ue([{tag:"script",attrs(e){return!e.type||/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(e.type)},parser:ce.parser},{tag:"style",attrs(e){return(!e.lang||e.lang=="css")&&(!e.type||/^(text\/)?(x-)?(stylesheet|css)$/i.test(e.type))},parser:Oe.parser}])}),languageData:{commentTokens:{block:{open:"<!--",close:"-->"}},indentOnInput:/^\s*<\/\w+\W$/,wordChars:"-._"}});function ht(e={}){let t=Q;return e.matchClosingTags===!1&&(t=t.configure({dialect:"noMatch"})),new ue(t,[Q.data.of({autocomplete:Je(e)}),e.autoCloseTags!==!1?He:[],pe().support,de().support])}const He=ie.inputHandler.of((e,t,l,r)=>{if(e.composing||e.state.readOnly||t!=l||r!=">"&&r!="/"||!Q.isActiveAt(e.state,t,-1))return!1;let{state:a}=e,n=a.changeByRange(o=>{var u,O,g;let{head:d}=o,i=G(a).resolveInner(d,-1),p;if((i.name=="TagName"||i.name=="StartTag")&&(i=i.parent),r==">"&&i.name=="OpenTag"){if(((O=(u=i.parent)===null||u===void 0?void 0:u.lastChild)===null||O===void 0?void 0:O.name)!="CloseTag"&&(p=k(a.doc,i.parent,d)))return{range:E.cursor(d+1),changes:{from:d,insert:`></${p}>`}}}else if(r=="/"&&i.name=="OpenTag"){let f=i.parent,b=f?.parent;if(f.from==d-1&&((g=b.lastChild)===null||g===void 0?void 0:g.name)!="CloseTag"&&(p=k(a.doc,b,d))){let _=`/${p}>`;return{range:E.cursor(d+_.length),changes:{from:d,insert:_}}}}return{range:o}});return n.changes.empty?!1:(e.dispatch(n,{userEvent:"input.type",scrollIntoView:!0}),!0)});export{He as autoCloseTags,ht as html,bt as htmlCompletionSource,Je as htmlCompletionSourceWith,Q as htmlLanguage};
