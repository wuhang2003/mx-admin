import{s as i,t as O,L as p,o as a,a as s,b as m,r as e}from"./codemirror-556fd538.js";import{htmlLanguage as u}from"./index-40a07bf6.js";import{javascriptLanguage as l}from"./index-078daef2.js";import"./use-save-confirm-96d71b9d.js";import"./index-1b0d7aa2.js";import"./toggle-480866cf.js";import"./use-react-57e995d3.js";import"./throttle-9a7cbbf9.js";import"./FormItem-e4be9c9f.js";import"./Form-93013c2b.js";import"./InputNumber-b7e49146.js";import"./Remove-b9545c24.js";import"./Add-03054a46.js";import"./Switch-2bc88023.js";import"./Select-24a85944.js";import"./Tag-556b5cae.js";import"./index-31b9e247.js";import"./index-9c18f198.js";const S=m.deserialize({version:14,states:"%pOVOWOOObQPOOOpOSO'#C_OOOO'#Cp'#CpQVOWOOQxQPOOO!TQQOOQ!YQPOOOOOO,58y,58yO!_OSO,58yOOOO-E6n-E6nO!dQQO'#CqQ{QPOOO!iQPOOQ{QPOOO!qQPOOOOOO1G.e1G.eOOQO,59],59]OOQO-E6o-E6oO!yOpO'#CiO#RO`O'#CiQOQPOOO#ZO#tO'#CmO#fO!bO'#CmOOQO,59T,59TO#qOpO,59TO#vO`O,59TOOOO'#Cr'#CrO#{O#tO,59XOOQO,59X,59XOOOO'#Cs'#CsO$WO!bO,59XOOQO1G.o1G.oOOOO-E6p-E6pOOQO1G.s1G.sOOOO-E6q-E6q",stateData:"$g~OjOS~OQROUROkQO~OWTOXUOZUO`VO~OSXOTWO~OXUO[]OlZO~OY^O~O[_O~OT`O~OYaO~OmcOodO~OmfOogO~O^iOnhO~O_jOphO~ObkOqkOrmO~OcnOsnOtmO~OnpO~OppO~ObkOqkOrrO~OcnOsnOtrO~OWX`~",goto:"!^hPPPiPPPPPPPPPmPPPpPPsy!Q!WTROSRe]Re_QSORYSS[T^Rb[QlfRqlQogRso",nodeNames:"⚠ Content Text Interpolation InterpolationContent }} Entity Attribute VueAttributeName : Identifier @ Is ScriptAttributeValue AttributeScript AttributeScript AttributeName AttributeValue Entity Entity",maxTerm:36,skippedNodes:[0],repeatNodeCount:4,tokenData:"'y~RdXY!aYZ!a]^!apq!ars!rwx!w}!O!|!O!P#t!Q![#y![!]$s!_!`%g!b!c%l!c!}#y#R#S#y#T#j#y#j#k%q#k#o#y%W;'S#y;'S;:j$m<%lO#y~!fSj~XY!aYZ!a]^!apq!a~!wOm~~!|Oo~!b#RX`!b}!O!|!Q![!|![!]!|!c!}!|#R#S!|#T#o!|%W;'S!|;'S;:j#n<%lO!|!b#qP;=`<%l!|~#yOl~%W$QXY#t`!b}!O!|!Q![#y![!]!|!c!}#y#R#S#y#T#o#y%W;'S#y;'S;:j$m<%lO#y%W$pP;=`<%l#y~$zXX~`!b}!O!|!Q![!|![!]!|!c!}!|#R#S!|#T#o!|%W;'S!|;'S;:j#n<%lO!|~%lO[~~%qOZ~%W%xXY#t`!b}!O&e!Q![#y![!]!|!c!}#y#R#S#y#T#o#y%W;'S#y;'S;:j$m<%lO#y!b&jX`!b}!O!|!Q![!|![!]!|!c!}'V#R#S!|#T#o'V%W;'S!|;'S;:j#n<%lO!|!b'^XW!b`!b}!O!|!Q![!|![!]!|!c!}'V#R#S!|#T#o'V%W;'S!|;'S;:j#n<%lO!|",tokenizers:[6,7,new e("b~RP#q#rU~XP#q#r[~aOT~~",17,4),new e("!k~RQvwX#o#p!_~^TU~Opmq!]m!^;'Sm;'S;=`!X<%lOm~pUOpmq!]m!]!^!S!^;'Sm;'S;=`!X<%lOm~!XOU~~![P;=`<%lm~!bP#o#p!e~!jOk~~",72,2),new e("[~RPwxU~ZOp~~",11,15),new e("[~RPrsU~ZOn~~",11,14),new e("!e~RQvwXwx!_~^Tc~Opmq!]m!^;'Sm;'S;=`!X<%lOm~pUOpmq!]m!]!^!S!^;'Sm;'S;=`!X<%lOm~!XOc~~![P;=`<%lm~!dOt~~",66,35),new e("!e~RQrsXvw^~^Or~~cTb~Oprq!]r!^;'Sr;'S;=`!^<%lOr~uUOprq!]r!]!^!X!^;'Sr;'S;=`!^<%lOr~!^Ob~~!aP;=`<%lr~",66,33)],topRules:{Content:[0,1],Attribute:[1,7]},tokenPrec:157}),c=l.parser.configure({top:"SingleExpression"}),n=S.configure({props:[i({Text:O.content,Is:O.definitionOperator,AttributeName:O.attributeName,VueAttributeName:O.keyword,Identifier:O.variableName,"AttributeValue ScriptAttributeValue":O.attributeValue,Entity:O.character,"{{ }}":O.brace,"@ :":O.punctuation})]}),o={parser:c},b=n.configure({wrap:a((t,r)=>t.name=="InterpolationContent"?o:null)}),P=n.configure({wrap:a((t,r)=>t.name=="AttributeScript"?o:null),top:"Attribute"}),Q={parser:b},y={parser:P},R=p.define({name:"vue",parser:u.parser.configure({dialect:"selfClosing",wrap:a(X)}),languageData:{closeBrackets:{brackets:["{",'"']}}});function X(t,r){switch(t.name){case"Attribute":return/^(@|:|v-)/.test(r.read(t.from,t.from+2))?y:null;case"Text":return Q}return null}function N(){return new s(R)}export{N as vue,R as vueLanguage};
