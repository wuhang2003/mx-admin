import{d,h as f,bd as u,aL as c,R as l}from"./index-80ed2802.js";import{b as r}from"./Upload-4775757d.js";const m=d({props:{onFinish:{type:Function},onError:{type:Function},type:{type:String,required:!0}},setup(t,{slots:o}){return()=>{const{onFinish:n,onError:s,type:p,...a}=t;return f(r,u({headers:{authorization:c()||""},showFileList:!1,accept:"image/*",action:`${l.endpoint}/files/upload?type=${p}`,onError:s||(e=>(message.error("上传失败"),e.file)),onFinish:n},Object.fromEntries(Object.entries(a).filter(([e,i])=>typeof i<"u"))),{default:()=>[o.default?.()]})}}});m.props=[...Array.from(Object.keys(r.props)),"type"];export{m as U};
