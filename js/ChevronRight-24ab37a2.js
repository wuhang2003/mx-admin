import{r as m,eb as y,al as C,x as v,a$ as c,ec as b,a_ as i,w as g,d as p,a6 as a}from"./index-80f33cae.js";function x(h={},o){const n=m({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:u,keyup:l}=h,r=e=>{switch(e.key){case"Control":n.ctrl=!0;break;case"Meta":n.command=!0,n.win=!0;break;case"Shift":n.shift=!0;break;case"Tab":n.tab=!0;break}u!==void 0&&Object.keys(u).forEach(s=>{if(s!==e.key)return;const t=u[s];if(typeof t=="function")t(e);else{const{stop:d=!1,prevent:w=!1}=t;d&&e.stopPropagation(),w&&e.preventDefault(),t.handler(e)}})},f=e=>{switch(e.key){case"Control":n.ctrl=!1;break;case"Meta":n.command=!1,n.win=!1;break;case"Shift":n.shift=!1;break;case"Tab":n.tab=!1;break}l!==void 0&&Object.keys(l).forEach(s=>{if(s!==e.key)return;const t=l[s];if(typeof t=="function")t(e);else{const{stop:d=!1,prevent:w=!1}=t;d&&e.stopPropagation(),w&&e.preventDefault(),t.handler(e)}})},k=()=>{(o===void 0||o.value)&&(i("keydown",document,r),i("keyup",document,f)),o!==void 0&&g(o,e=>{e?(i("keydown",document,r),i("keyup",document,f)):(c("keydown",document,r),c("keyup",document,f))})};return y()?(C(k),v(()=>{(o===void 0||o.value)&&(c("keydown",document,r),c("keyup",document,f))})):k(),b(n)}const M=p({name:"ArrowDown",render(){return a("svg",{viewBox:"0 0 28 28",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},a("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},a("g",{"fill-rule":"nonzero"},a("path",{d:"M23.7916,15.2664 C24.0788,14.9679 24.0696,14.4931 23.7711,14.206 C23.4726,13.9188 22.9978,13.928 22.7106,14.2265 L14.7511,22.5007 L14.7511,3.74792 C14.7511,3.33371 14.4153,2.99792 14.0011,2.99792 C13.5869,2.99792 13.2511,3.33371 13.2511,3.74793 L13.2511,22.4998 L5.29259,14.2265 C5.00543,13.928 4.53064,13.9188 4.23213,14.206 C3.93361,14.4931 3.9244,14.9679 4.21157,15.2664 L13.2809,24.6944 C13.6743,25.1034 14.3289,25.1034 14.7223,24.6944 L23.7916,15.2664 Z"}))))}}),B=p({name:"ChevronRight",render(){return a("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}});export{M as A,B as C,x as u};
