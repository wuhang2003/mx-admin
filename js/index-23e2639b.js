import{s as S,t as r,L as P,o as i,a as q,b as u,E as p}from"./codemirror-0315476f.js";import{htmlLanguage as c}from"./index-1a0215be.js";import{javascriptLanguage as s}from"./index-71c5fee5.js";import"./use-save-confirm-f6b4d3ea.js";import"./index-b7f3c7f1.js";import"./toggle-d7ee98a4.js";import"./use-react-cf6f18e7.js";import"./throttle-8d3499c9.js";import"./FormItem-f26b812a.js";import"./Form-d7d00439.js";import"./InputNumber-282e5429.js";import"./Remove-10ad4dd9.js";import"./Add-a1cb15bb.js";import"./Switch-d69dbd3e.js";import"./Select-aa01f3ad.js";import"./Tag-1f78957d.js";import"./index-3721fe60.js";import"./index-8af17967.js";const m=1,R=33,g=34,$=35,b=36,v=new p(O=>{let e=O.pos;for(;;){if(O.next==10){O.advance();break}else if(O.next==123&&O.peek(1)==123||O.next<0)break;O.advance()}O.pos>e&&O.acceptToken(m)});function n(O,e,a){return new p(t=>{let Q=t.pos;for(;t.next!=O&&t.next>=0&&(a||t.next!=38&&(t.next!=123||t.peek(1)!=123));)t.advance();t.pos>Q&&t.acceptToken(e)})}const x=n(39,R,!1),W=n(34,g,!1),d=n(39,$,!0),C=n(34,b,!0),f=u.deserialize({version:14,states:"(jOVOqOOOeQpOOOvO!bO'#CaOOOP'#Cx'#CxQVOqOOO!OQpO'#CfO!WQpO'#ClO!]QpO'#CrO!bQpO'#CsOOQO'#Cv'#CvQ!gQpOOQ!lQpOOQ!qQpOOOOOV,58{,58{O!vOpO,58{OOOP-E6v-E6vO!{QpO,59QO#TQpO,59QOOQO,59W,59WO#YQpO,59^OOQO,59_,59_O#_QpOOO#_QpOOO#gQpOOOOOV1G.g1G.gO#oQpO'#CyO#tQpO1G.lOOQO1G.l1G.lO#|QpO1G.lOOQO1G.x1G.xO$UO`O'#DUO$ZOWO'#DUOOQO'#Co'#CoQOQpOOOOQO'#Cu'#CuO$`OtO'#CwO$qOrO'#CwOOQO,59e,59eOOQO-E6w-E6wOOQO7+$W7+$WO%SQpO7+$WO%[QpO7+$WOOOO'#Cp'#CpO%aOpO,59pOOOO'#Cq'#CqO%fOpO,59pOOOS'#Cz'#CzO%kOtO,59cOOQO,59c,59cOOOQ'#C{'#C{O%|OrO,59cO&_QpO<<GrOOQO<<Gr<<GrOOQO1G/[1G/[OOOS-E6x-E6xOOQO1G.}1G.}OOOQ-E6y-E6yOOQOAN=^AN=^",stateData:"&d~OvOS~OPROSQOVROWRO~OZTO[XO^VOaUOhWO~OR]OU^O~O[`O^aO~O[bO~O[cO~O[dO~ObeO~ObfO~ObgO~ORhO~O]kOwiO~O[lO~O_mO~OynOzoO~OysOztO~O[uO~O]wOwiO~O_yOwiO~OtzO~Os|O~OSQOV!OOW!OOr!OOy!QO~OSQOV!ROW!ROq!ROz!QO~O_!TOwiO~O]!UO~Oy!VO~Oz!VO~OSQOV!OOW!OOr!OOy!XO~OSQOV!ROW!ROq!ROz!XO~O]!ZO~O",goto:"#dyPPPPPzPPPP!WPPPPP!WPP!Z!^!a!d!dP!g!j!m!p!v#Q#WPPPPPPPP#^SROSS!Os!PT!Rt!SRYPRqeR{nR}oRZPRqfR[PRqgQSOR_SQj`SvjxRxlQ!PsR!W!PQ!StR!Y!SQpeRrf",nodeNames:"⚠ Text Content }} {{ Interpolation InterpolationContent Entity InvalidEntity Attribute BoundAttributeName [ Identifier ] ( ) ReferenceName # Is ExpressionAttributeValue AttributeInterpolation AttributeInterpolation EventName DirectiveName * StatementAttributeValue AttributeName AttributeValue",maxTerm:42,nodeProps:[["openedBy",3,"{{",15,"("],["closedBy",4,"}}",14,")"]],skippedNodes:[0],repeatNodeCount:4,tokenData:"0r~RyOX#rXY$mYZ$mZ]#r]^$m^p#rpq$mqr#rrs%jst&Qtv#rvw&hwx)zxy*byz*xz{+`{}#r}!O+v!O!P-]!P!Q#r!Q![+v![!]+v!]!_#r!_!`-s!`!c#r!c!}+v!}#O.Z#O#P#r#P#Q.q#Q#R#r#R#S+v#S#T#r#T#o+v#o#p/X#p#q#r#q#r0Z#r%W#r%W;'S+v;'S;:j-V;:j;=`$g<%lO+vQ#wTUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rQ$ZSO#q#r#r;'S#r;'S;=`$g<%lO#rQ$jP;=`<%l#rR$t[UQvPOX#rXY$mYZ$mZ]#r]^$m^p#rpq$mq#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR%qTyPUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR&XTaPUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR&oXUQWPOp'[pq#rq!]'[!]!^#r!^#q'[#q#r(d#r;'S'[;'S;=`)t<%lO'[R'aXUQOp'[pq#rq!]'[!]!^'|!^#q'[#q#r(d#r;'S'[;'S;=`)t<%lO'[R(TTVPUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR(gXOp'[pq#rq!]'[!]!^'|!^#q'[#q#r)S#r;'S'[;'S;=`)t<%lO'[P)VUOp)Sq!])S!]!^)i!^;'S)S;'S;=`)n<%lO)SP)nOVPP)qP;=`<%l)SR)wP;=`<%l'[R*RTzPUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR*iT^PUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR+PT_PUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR+gThPUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR+}b[PUQO}#r}!O+v!O!Q#r!Q![+v![!]+v!]!c#r!c!}+v!}#R#r#R#S+v#S#T#r#T#o+v#o#q#r#q#r$W#r%W#r%W;'S+v;'S;:j-V;:j;=`$g<%lO+vR-YP;=`<%l+vR-dTwPUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR-zTUQbPO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR.bTZPUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR.xT]PUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR/^VUQO#o#r#o#p/s#p#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR/zTSPUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#r~0^TO#q#r#q#r0m#r;'S#r;'S;=`$g<%lO#r~0rOR~",tokenizers:[v,x,W,d,C,0,1],topRules:{Content:[0,2],Attribute:[1,9]},tokenPrec:0}),T=s.parser.configure({top:"SingleExpression"}),l=f.configure({props:[S({Text:r.content,Is:r.definitionOperator,AttributeName:r.attributeName,"AttributeValue ExpressionAttributeValue StatementAttributeValue":r.attributeValue,Entity:r.character,InvalidEntity:r.invalid,"BoundAttributeName/Identifier":r.attributeName,"EventName/Identifier":r.special(r.attributeName),"ReferenceName/Identifier":r.variableName,"DirectiveName/Identifier":r.keyword,"{{ }}":r.brace,"( )":r.paren,"[ ]":r.bracket,"# '*'":r.punctuation})]}),o={parser:T},V={parser:s.parser},A=l.configure({wrap:i((O,e)=>O.name=="InterpolationContent"?o:null)}),U=l.configure({wrap:i((O,e)=>{var a;return O.name=="InterpolationContent"?o:O.name!="AttributeInterpolation"?null:((a=O.node.parent)===null||a===void 0?void 0:a.name)=="StatementAttributeValue"?V:o}),top:"Attribute"}),w={parser:A},y={parser:U},E=P.define({name:"angular",parser:c.parser.configure({wrap:i(N)}),languageData:{closeBrackets:{brackets:["[","{",'"']},indentOnInput:/^\s*[\}\]]$/}});function N(O,e){switch(O.name){case"Attribute":return/^[*#(\[]|\{\{/.test(e.read(O.from,O.to))?y:null;case"Text":return w}return null}function OO(){return new q(E)}export{OO as angular,E as angularLanguage};
