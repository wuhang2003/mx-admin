import{A as n}from"./use-store-ref-bbea8734.js";import{a2 as l}from"./Button-d9ff6831.js";var g="Expected a function";function u(t,a,r){var i=!0,e=!0;if(typeof t!="function")throw new TypeError(g);return l(r)&&(i="leading"in r?!!r.leading:i,e="trailing"in r?!!r.trailing:e),n(t,a,{leading:i,maxWait:a,trailing:e})}export{u as t};
