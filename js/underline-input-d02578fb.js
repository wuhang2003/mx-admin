import{i as o}from"./parse-content-4114bfda.js";import{d as n,h as t,k as l}from"./index-2f7b43b3.js";const r="_root_1a6k2_1",s={root:r},c=n({props:{...o,autoShrink:{type:Boolean,default:!0}},setup(e){return()=>t("div",{class:[e.autoShrink?"min-w-[2rem]":"min-w-[120px]",s.root]},[t("input",{class:"absolute w-full",type:e.type??"text",value:e.value,placeholder:e.placeholder??"",onInput:a=>{e.onChange(a.target.value)}},null),t("span",{class:"text-transparent"},[e.value,l(" ")])])}});export{c as U};
