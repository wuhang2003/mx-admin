import{L as o,i as r,j as t,f as O,k as n,s as a,t as e,a as s,b as i}from"./codemirror-c51c4fe2.js";import"./use-save-confirm-f6bdedab.js";import"./index-85889586.js";import"./toggle-8057d7e0.js";import"./use-lifecycle-5fb3398f.js";import"./throttle-73700e16.js";import"./FormItem-e974ff62.js";import"./Form-cfe354a4.js";import"./InputNumber-121c6ffd.js";import"./Remove-7151b885.js";import"./Add-b97f7bb2.js";import"./Switch-aff33488.js";import"./Select-017984d3.js";import"./Tag-c94d3cf9.js";const Q={__proto__:null,anyref:34,dataref:34,eqref:34,externref:34,i31ref:34,funcref:34,i8:34,i16:34,i32:34,i64:34,f32:34,f64:34},$=i.deserialize({version:14,states:"!^Q]QPOOOqQPO'#CbOOQO'#Cd'#CdOOQO'#Cl'#ClOOQO'#Ch'#ChQ]QPOOOOQO,58|,58|OxQPO,58|OOQO-E6f-E6fOOQO1G.h1G.h",stateData:"!P~O_OSPOSQOS~OTPOVROXROYROZROaQO~OSUO~P]OSXO~P]O",goto:"xaPPPPPPbPbPPPhPPPrXROPTVQTOQVPTWTVXSOPTV",nodeNames:"⚠ LineComment BlockComment Module ) ( App Identifier Type Keyword Number String",maxTerm:17,nodeProps:[["openedBy",4,"("],["closedBy",5,")"],["group",-6,6,7,8,9,10,11,"Expression"]],skippedNodes:[0,1,2],repeatNodeCount:1,tokenData:"/Q~R^XY}YZ}]^}pq}rs!Stu!qxy&Vyz'S{|'X}!O'X!Q!R'b!R![)_!]!^,{#T#o-^~!SO_~~!VTOr!Srs!fs#O!S#O#P!k#P~!S~!kOZ~~!nPO~!S~!tiqr$cst$ctu$cuv$cvw$cwx$cz{$c{|$c}!O$c!O!P$c!P!Q$c!Q![$c![!]$c!^!_$c!_!`$c!`!a$c!a!b$c!b!c$c!c!}$c#Q#R$c#R#S$c#S#T$c#T#o$c#p#q$c#r#s$c~$hiV~qr$cst$ctu$cuv$cvw$cwx$cz{$c{|$c}!O$c!O!P$c!P!Q$c!Q![$c![!]$c!^!_$c!_!`$c!`!a$c!a!b$c!b!c$c!c!}$c#Q#R$c#R#S$c#S#T$c#T#o$c#p#q$c#r#s$c~&[PT~!]!^&_~&bRO!]&_!]!^&k!^~&_~&nTOy&_yz&}z!]&_!]!^&k!^~&_~'SOQ~~'XOS~~'[Q!Q!R'b!R![)_~'gUY~!O!P'y!Q![)_!g!h(j#R#S)s#X#Y(j#l#m)y~(ORY~!Q![(X!g!h(j#X#Y(j~(^SY~!Q![(X!g!h(j#R#S)X#X#Y(j~(mR{|(v}!O(v!Q![(|~(yP!Q![(|~)RQY~!Q![(|#R#S(v~)[P!Q![(X~)dTY~!O!P'y!Q![)_!g!h(j#R#S)s#X#Y(j~)vP!Q![)_~)|R!Q![*V!c!i*V#T#Z*V~*[VY~!O!P*q!Q![*V!c!i*V!r!s+n#R#S)y#T#Z*V#d#e+n~*vTY~!Q![+V!c!i+V!r!s+n#T#Z+V#d#e+n~+[UY~!Q![+V!c!i+V!r!s+n#R#S,o#T#Z+V#d#e+n~+qT{|,Q}!O,Q!Q![,^!c!i,^#T#Z,^~,TR!Q![,^!c!i,^#T#Z,^~,cSY~!Q![,^!c!i,^#R#S,Q#T#Z,^~,rR!Q![+V!c!i+V#T#Z+V~-OP!]!^-R~-WQP~OY-RZ~-R~-ciX~qr-^st-^tu-^uv-^vw-^wx-^z{-^{|-^}!O-^!O!P-^!P!Q-^!Q![-^![!]-^!^!_-^!_!`-^!`!a-^!a!b-^!b!c-^!c!}-^#Q#R-^#R#S-^#S#T-^#T#o-^#p#q-^#r#s-^",tokenizers:[0],topRules:{Module:[0,3]},specialized:[{term:9,get:c=>Q[c]||-1}],tokenPrec:0}),p=o.define({name:"wast",parser:$.configure({props:[r.add({App:t({closing:")",align:!1})}),O.add({App:n,BlockComment(c){return{from:c.from+2,to:c.to-2}}}),a({Keyword:e.keyword,Type:e.typeName,Number:e.number,String:e.string,Identifier:e.variableName,LineComment:e.lineComment,BlockComment:e.blockComment,"( )":e.paren})]}),languageData:{commentTokens:{line:";;",block:{open:"(;",close:";)"}},closeBrackets:{brackets:["(",'"']}}});function k(){return new s(p)}export{k as wast,p as wastLanguage};
