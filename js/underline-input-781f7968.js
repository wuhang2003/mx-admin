import{i as o}from"./parse-content-b26f736a.js";import{d as n,k as t,p as l}from"./index-b99e499e.js";const r="_root_1a6k2_1",s={root:r},p=n({props:{...o,autoShrink:{type:Boolean,default:!0}},setup(e){return()=>t("div",{class:[e.autoShrink?"min-w-[2rem]":"min-w-[120px]",s.root]},[t("input",{class:"absolute w-full",type:e.type??"text",value:e.value,placeholder:e.placeholder??"",onInput:a=>{e.onChange(a.target.value)}},null),t("span",{class:"text-transparent"},[e.value,l(" ")])])}});export{p as U};
